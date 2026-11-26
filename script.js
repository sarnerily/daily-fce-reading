(function () {
  "use strict";

  const sortedReadings = [...readings].sort((a, b) => a.date.localeCompare(b.date));
  let currentIndex = findInitialReadingIndex();
  let state = getDefaultState();

  const elements = {
    archiveButton: document.getElementById("archiveButton"),
    closeArchiveButton: document.getElementById("closeArchiveButton"),
    archivePanel: document.getElementById("archivePanel"),
    archiveList: document.getElementById("archiveList"),
    previousButton: document.getElementById("previousButton"),
    nextButton: document.getElementById("nextButton"),
    notice: document.getElementById("notice"),
    readingDate: document.getElementById("readingDate"),
    readingLevel: document.getElementById("readingLevel"),
    readingTitle: document.getElementById("readingTitle"),
    vocabPreview: document.querySelector(".vocab-preview"),
    vocabPreviewList: document.getElementById("vocabPreviewList"),
    passageText: document.getElementById("passageText"),
    translationSection: document.getElementById("translationSection"),
    translationText: document.getElementById("translationText"),
    quizForm: document.getElementById("quizForm"),
    questionsContainer: document.getElementById("questionsContainer"),
    part6Container: document.getElementById("part6Container"),
    questionCount: document.getElementById("questionCount"),
    submitButton: document.getElementById("submitButton"),
    tryAgainButton: document.getElementById("tryAgainButton"),
    scoreResult: document.getElementById("scoreResult"),
    reviewControls: document.getElementById("reviewControls"),
    vocabToggleButton: document.getElementById("vocabToggleButton"),
    translationToggleButton: document.getElementById("translationToggleButton"),
    vocabularySection: document.getElementById("vocabularySection"),
    vocabularyList: document.getElementById("vocabularyList")
  };

  init();

  function init() {
    if (!sortedReadings.length) {
      showNotice("No readings have been added yet.", true);
      return;
    }

    bindEvents();
    loadReading(currentIndex, shouldShowTodayNotice());
  }

  function bindEvents() {
    elements.quizForm.addEventListener("submit", handleSubmit);
    elements.tryAgainButton.addEventListener("click", handleTryAgain);
    elements.vocabToggleButton.addEventListener("click", toggleVocabulary);
    elements.translationToggleButton.addEventListener("click", toggleTranslation);
    elements.previousButton.addEventListener("click", showPreviousReading);
    elements.nextButton.addEventListener("click", showNextReading);
    elements.archiveButton.addEventListener("click", toggleArchive);
    elements.closeArchiveButton.addEventListener("click", closeArchive);
  }

  function findInitialReadingIndex() {
    if (!sortedReadings.length) {
      return 0;
    }

    const today = getTodayString();
    const exactIndex = sortedReadings.findIndex((reading) => reading.date === today);
    if (exactIndex !== -1) {
      return exactIndex;
    }

    const earlierOrToday = sortedReadings
      .map((reading, index) => ({ reading, index }))
      .filter((item) => item.reading.date <= today);

    if (earlierOrToday.length) {
      return earlierOrToday[earlierOrToday.length - 1].index;
    }

    return sortedReadings.length - 1;
  }

  function shouldShowTodayNotice() {
    const today = getTodayString();
    return !sortedReadings.some((reading) => reading.date === today);
  }

  function getTodayString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function loadReading(index, showMissingTodayMessage) {
    currentIndex = index;
    const reading = getCurrentReading();
    state = loadState(reading.date);

    elements.readingDate.textContent = reading.date;
    elements.readingLevel.textContent = reading.level;
    elements.readingTitle.textContent = reading.title;
    elements.questionCount.textContent = isPart6(reading)
      ? `${getQuestionTotal(reading)} gaps / ${reading.totalScore} points`
      : `${getQuestionTotal(reading)} questions / ${getSectionCount(reading)} parts`;
    elements.passageText.textContent = normalizeText(reading.passage);
    elements.translationText.textContent = normalizeText(reading.translation);

    renderVocabPreview(reading);
    renderQuestions(reading);
    renderVocabulary(reading);
    renderReviewState(reading);
    updateNavButtons();
    renderArchive();

    if (showMissingTodayMessage) {
      showNotice("Today’s reading is not available yet. Showing the latest available reading.", true);
    } else {
      clearNotice();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function getCurrentReading() {
    return sortedReadings[currentIndex];
  }

  function getDefaultState() {
    return {
      answers: {},
      submitted: false,
      score: 0,
      showVocabulary: false,
      showTranslation: false,
      openExplanations: {},
      showCompleteArticle: false,
      activeGap: null,
      correctCount: 0
    };
  }

  function loadState(date) {
    const saved = localStorage.getItem(getStateKey(date));
    if (!saved) {
      return getDefaultState();
    }

    try {
      return { ...getDefaultState(), ...JSON.parse(saved) };
    } catch (error) {
      return getDefaultState();
    }
  }

  function saveState() {
    localStorage.setItem(getStateKey(getCurrentReading().date), JSON.stringify(state));
  }

  function getStateKey(date) {
    return `reading-state-${date}`;
  }

  function getProgressKey(date) {
    return `reading-progress-${date}`;
  }

  function renderVocabPreview(reading) {
    elements.vocabPreviewList.innerHTML = "";
    elements.vocabPreview.classList.toggle("hidden", isPart6(reading));
    reading.vocabulary.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.word;
      elements.vocabPreviewList.appendChild(li);
    });
  }

  function renderQuestions(reading) {
    const part6 = isPart6(reading);
    elements.questionsContainer.classList.toggle("hidden", part6);
    elements.part6Container.classList.toggle("hidden", !part6);
    if (part6) {
      renderPart6(reading);
      return;
    }

    elements.questionsContainer.innerHTML = "";
    let currentSection = "";

    reading.questions.forEach((question, index) => {
      const questionNumber = index + 1;

      if (question.sectionTitle && question.sectionTitle !== currentSection) {
        currentSection = question.sectionTitle;
        const section = document.createElement("div");
        section.className = "question-section-heading";

        const sectionTitle = document.createElement("h3");
        sectionTitle.textContent = question.sectionTitle;
        section.appendChild(sectionTitle);

        if (question.sectionInstructions) {
          const instructions = document.createElement("p");
          instructions.className = "question-instructions";
          instructions.textContent = question.sectionInstructions;
          section.appendChild(instructions);
        }

        if (question.sectionText) {
          const sectionText = document.createElement("p");
          sectionText.className = "question-section-text";
          sectionText.textContent = normalizeText(question.sectionText);
          section.appendChild(sectionText);
        }

        elements.questionsContainer.appendChild(section);
      }

      const block = document.createElement("section");
      block.className = "question-block";

      const title = document.createElement("p");
      title.className = "question-title";
      title.textContent = `${questionNumber}. ${question.question || ""}`;
      block.appendChild(title);

      if (question.type === "multiple-choice") {
        block.appendChild(createChoiceOptions(question, index));
      } else {
        block.appendChild(createTextAnswer(question, index));
      }

      if (state.submitted) {
        block.appendChild(createFeedback(question, index));
        block.appendChild(createExplanationToggle(question, index));

        if (state.openExplanations[index]) {
          block.appendChild(createExplanationCard(question));
        }
      }

      elements.questionsContainer.appendChild(block);
    });
  }

  function isPart6(reading) {
    return reading && reading.type === "part6";
  }

  function getQuestionTotal(reading) {
    return isPart6(reading) ? Object.keys(reading.answers).length : reading.questions.length;
  }

  function renderPart6(reading) {
    elements.part6Container.innerHTML = "";
    elements.part6Container.ondragover = (event) => {
      if (state.submitted) {
        return;
      }
      const edge = 110;
      const distanceFromBottom = window.innerHeight - event.clientY;
      if (event.clientY < edge) {
        window.scrollBy({ top: -Math.ceil((edge - event.clientY) / 4), behavior: "auto" });
      } else if (distanceFromBottom < edge) {
        window.scrollBy({ top: Math.ceil((edge - distanceFromBottom) / 4), behavior: "auto" });
      }
    };

    const instructions = document.createElement("p");
    instructions.className = "question-instructions";
    instructions.textContent = "Read the article and choose a sentence for each gap. Click a gap, then click a sentence. On a computer, you can also drag a sentence to a gap.";
    elements.part6Container.appendChild(instructions);

    const article = document.createElement("article");
    article.className = "part6-article";
    appendPart6Text(article, reading.passage, false, reading);
    elements.part6Container.appendChild(article);

    const optionsPanel = document.createElement("aside");
    optionsPanel.className = "part6-options-panel";

    const optionsHeading = document.createElement("h3");
    optionsHeading.className = "part6-options-heading";
    optionsHeading.textContent = "Sentences A–G";
    optionsPanel.appendChild(optionsHeading);

    const options = document.createElement("div");
    options.className = "part6-options";
    Object.entries(reading.options).forEach(([letter, sentence]) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = `part6-option ${Object.values(state.answers).includes(letter) ? "is-used" : ""}`;
      option.draggable = !state.submitted;
      option.dataset.letter = letter;
      option.innerHTML = `<strong>${letter}.</strong> <span>${sentence}</span>`;
      option.addEventListener("click", () => assignPart6Answer(letter, reading));
      option.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", letter);
      });
      options.appendChild(option);
    });
    optionsPanel.appendChild(options);
    elements.part6Container.appendChild(optionsPanel);

    if (state.submitted) {
      const review = document.createElement("div");
      review.className = "part6-review";
      Object.keys(reading.answers).forEach((gap) => {
        const row = document.createElement("div");
        row.className = `part6-feedback ${normalizeAnswer(state.answers[gap]) === normalizeAnswer(reading.answers[gap]) ? "correct" : "wrong"}`;
        const selected = state.answers[gap];
        row.innerHTML = `<strong>Question ${gap}: ${selected}. Correct answer: ${reading.answers[gap]}.</strong><span>${reading.options[selected] || ""}</span><span>Correct sentence: ${reading.options[reading.answers[gap]]}</span>`;

        const toggle = document.createElement("button");
        toggle.type = "button";
        toggle.className = "secondary-button explanation-toggle";
        toggle.textContent = state.openExplanations[gap] ? "Hide Explanation" : "View Explanation";
        toggle.addEventListener("click", () => {
          state.openExplanations[gap] = !state.openExplanations[gap];
          saveState();
          renderPart6(reading);
        });
        row.appendChild(toggle);
        if (state.openExplanations[gap]) {
          const explanation = document.createElement("p");
          explanation.className = "part6-explanation";
          explanation.textContent = reading.explanations[gap];
          row.appendChild(explanation);
        }
        review.appendChild(row);
      });

      const completeButton = document.createElement("button");
      completeButton.type = "button";
      completeButton.className = "primary-button";
      completeButton.textContent = state.showCompleteArticle ? "Hide Complete English Article" : "View Complete English Article";
      completeButton.addEventListener("click", () => {
        state.showCompleteArticle = !state.showCompleteArticle;
        saveState();
        renderPart6(reading);
      });
      review.appendChild(completeButton);

      if (state.showCompleteArticle) {
        const complete = document.createElement("article");
        complete.className = "part6-complete-article";
        appendPart6Text(complete, reading.passage, true, reading);
        review.appendChild(complete);
      }
      const extra = document.createElement("p");
      extra.className = "part6-extra-option";
      extra.textContent = `Extra sentence: E. ${reading.extraOptionExplanation}`;
      review.appendChild(extra);
      elements.part6Container.appendChild(review);
    }
  }

  function appendPart6Text(container, text, complete, reading) {
    const parts = String(text).split(/\[(37|38|39|40|41|42)\]/g);
    parts.forEach((part, index) => {
      if (index % 2 === 0) {
        container.appendChild(document.createTextNode(part));
        return;
      }
      const gap = part;
      if (complete) {
        const sentence = document.createElement("span");
        sentence.className = "part6-complete-sentence";
        sentence.textContent = reading.options[reading.answers[gap]];
        container.appendChild(sentence);
        return;
      }
      const button = document.createElement("button");
      button.type = "button";
      button.className = `part6-gap ${state.answers[gap] ? "is-filled" : ""}`;
      button.dataset.gap = gap;
      button.textContent = state.answers[gap]
        ? `${gap}: ${state.answers[gap]} — ${reading.options[state.answers[gap]]}`
        : `Gap ${gap} — choose a sentence`;
      button.addEventListener("click", () => {
        state.activeGap = gap;
        saveState();
        renderPart6(reading);
      });
      button.addEventListener("dragover", (event) => event.preventDefault());
      button.addEventListener("drop", (event) => {
        event.preventDefault();
        const letter = event.dataTransfer.getData("text/plain");
        assignPart6Answer(letter, reading, gap);
      });
      if (state.answers[gap]) {
        const clear = document.createElement("span");
        clear.className = "part6-clear";
        clear.textContent = " Clear";
        clear.addEventListener("click", (event) => {
          event.stopPropagation();
          clearPart6Answer(gap, reading);
        });
        button.appendChild(clear);
      }
      container.appendChild(button);
    });
  }

  function assignPart6Answer(letter, reading, gap) {
    if (state.submitted || !reading.options[letter]) {
      return;
    }
    const targetGap = gap || state.activeGap;
    if (!targetGap) {
      showNotice("Choose a gap first, then choose a sentence.", true);
      return;
    }
    Object.keys(state.answers).forEach((key) => {
      if (state.answers[key] === letter) {
        delete state.answers[key];
      }
    });
    state.answers[targetGap] = letter;
    state.activeGap = targetGap;
    saveState();
    clearNotice();
    renderPart6(reading);
  }

  function clearPart6Answer(gap, reading) {
    if (state.submitted) {
      return;
    }
    delete state.answers[gap];
    state.activeGap = gap;
    saveState();
    renderPart6(reading);
  }

  function createChoiceOptions(question, index) {
    const options = document.createElement("div");
    options.className = "options";

    Object.entries(question.options).forEach(([letter, optionText]) => {
      const label = document.createElement("label");
      label.className = "option-label";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question-${index}`;
      input.value = letter;
      input.checked = state.answers[index] === letter;
      input.disabled = state.submitted;
      input.addEventListener("change", () => {
        state.answers[index] = letter;
        saveState();
      });

      const span = document.createElement("span");
      span.textContent = `${letter}. ${optionText}`;

      label.appendChild(input);
      label.appendChild(span);
      options.appendChild(label);
    });

    return options;
  }

  function createTextAnswer(question, index) {
    const answerArea = document.createElement("div");
    answerArea.className = "text-answer-area";

    if (question.original) {
      const original = document.createElement("p");
      original.className = "transform-original";
      original.textContent = `Original: ${question.original}`;
      answerArea.appendChild(original);
    }

    if (question.keyword) {
      const keyword = document.createElement("p");
      keyword.className = "keyword-line";
      keyword.textContent = `Key word: ${question.keyword}`;
      answerArea.appendChild(keyword);
    }

    const sentence = document.createElement("p");
    sentence.className = "answer-sentence";
    renderSentenceWithInput(sentence, question.sentence, index);
    answerArea.appendChild(sentence);

    if (question.promptWord) {
      const prompt = document.createElement("p");
      prompt.className = "prompt-word";
      prompt.textContent = `Word given: ${question.promptWord}`;
      answerArea.appendChild(prompt);
    }

    return answerArea;
  }

  function renderSentenceWithInput(container, sentenceText, index) {
    const parts = String(sentenceText || "").split(/_{3,}/);
    parts.forEach((part, partIndex) => {
      container.appendChild(document.createTextNode(part));
      if (partIndex < parts.length - 1) {
        const input = document.createElement("input");
        input.className = "answer-input";
        input.type = "text";
        input.autocomplete = "off";
        input.value = state.answers[index] || "";
        input.disabled = state.submitted;
        input.setAttribute("aria-label", `Answer for question ${index + 1}`);
        input.addEventListener("input", () => {
          state.answers[index] = input.value;
          saveState();
        });
        container.appendChild(input);
      }
    });
  }

  function createFeedback(question, index) {
    const selected = state.answers[index];
    const isCorrect = isAnswerCorrect(question, selected);
    const feedback = document.createElement("div");
    feedback.className = `answer-feedback ${isCorrect ? "correct" : "wrong"}`;
    feedback.textContent = `Your answer: ${selected || "No answer"}. Correct answer: ${question.answer}. ${isCorrect ? "Correct." : "Not correct."}`;
    return feedback;
  }

  function isAnswerCorrect(question, answer) {
    return normalizeAnswer(answer) === normalizeAnswer(question.answer);
  }

  function normalizeAnswer(answer) {
    return String(answer || "").trim().replace(/\s+/g, " ").toLowerCase();
  }

  function createExplanationToggle(question, index) {
    const button = document.createElement("button");
    button.className = "secondary-button explanation-toggle";
    button.type = "button";
    button.textContent = state.openExplanations[index] ? "Hide Explanation" : "View Explanation";
    button.addEventListener("click", () => {
      state.openExplanations[index] = !state.openExplanations[index];
      saveState();
      renderQuestions(getCurrentReading());
    });
    return button;
  }

  function createExplanationCard(question) {
    const card = document.createElement("div");
    card.className = "explanation-card";

    const correct = document.createElement("p");
    correct.innerHTML = `<strong>Correct answer: ${question.answer}</strong>`;
    card.appendChild(correct);

    const keys = typeof question.explanation === "string"
      ? ["correct"]
      : ["correct", "A", "B", "C", "D"];
    keys.forEach((key) => {
      const p = document.createElement("p");
      p.textContent = typeof question.explanation === "string"
        ? question.explanation
        : question.explanation[key];
      if (p.textContent) {
        card.appendChild(p);
      }
    });

    return card;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const reading = getCurrentReading();

    if (isPart6(reading)) {
      const gaps = Object.keys(reading.answers);
      const selected = gaps.map((gap) => state.answers[gap]).filter(Boolean);
      if (selected.length !== gaps.length || new Set(selected).size !== selected.length) {
        showNotice("Please choose one different sentence for each gap before submitting.", true);
        return;
      }
      state.correctCount = gaps.filter((gap) => state.answers[gap] === reading.answers[gap]).length;
      state.score = state.correctCount * reading.pointsPerQuestion;
      state.submitted = true;
      state.showVocabulary = false;
      state.showTranslation = false;
      state.openExplanations = {};
      state.showCompleteArticle = false;
      saveState();
      saveProgress(reading.date, state.score, reading.totalScore);
      clearNotice();
      renderQuestions(reading);
      renderReviewState(reading);
      renderArchive();
      return;
    }

    if (reading.questions.some((question, index) => !normalizeAnswer(state.answers[index]))) {
      showNotice("Please answer all questions before submitting.", true);
      return;
    }

    let score = 0;
    reading.questions.forEach((question, index) => {
      if (isAnswerCorrect(question, state.answers[index])) {
        score += 1;
      }
    });

    state.submitted = true;
    state.score = score;
    state.showVocabulary = false;
    state.showTranslation = false;
    state.openExplanations = {};
    saveState();
    saveProgress(reading.date, score, reading.questions.length);

    clearNotice();
    renderQuestions(reading);
    renderReviewState(reading);
    renderArchive();
  }

  function getSectionCount(reading) {
    if (isPart6(reading)) {
      return 1;
    }
    return new Set(reading.questions.map((question) => question.sectionTitle || "Questions")).size;
  }

  function saveProgress(date, score, total) {
    const progress = {
      completed: true,
      score,
      total,
      submittedAt: new Date().toISOString()
    };
    localStorage.setItem(getProgressKey(date), JSON.stringify(progress));
  }

  function renderReviewState(reading) {
    elements.scoreResult.textContent = isPart6(reading)
      ? `Your score: ${state.score} / ${reading.totalScore}. Correct answers: ${state.correctCount || 0} / ${getQuestionTotal(reading)}.`
      : `You got ${state.score} out of ${reading.questions.length} correct.`;
    elements.scoreResult.classList.toggle("hidden", !state.submitted);

    elements.submitButton.classList.toggle("hidden", state.submitted);
    elements.tryAgainButton.classList.toggle("hidden", !state.submitted);
    elements.reviewControls.classList.toggle("hidden", !state.submitted);

    elements.vocabToggleButton.textContent = state.showVocabulary ? "Hide Vocabulary" : "Review Vocabulary";
    elements.translationToggleButton.textContent = state.showTranslation ? "Hide Chinese Translation" : "Show Chinese Translation";

    elements.vocabularySection.classList.toggle("hidden", !state.submitted || !state.showVocabulary);
    elements.translationSection.classList.toggle("hidden", !state.submitted || !state.showTranslation);
  }

  function renderVocabulary(reading) {
    elements.vocabularyList.innerHTML = "";
    reading.vocabulary.forEach((item) => {
      const block = document.createElement("div");
      block.className = "vocabulary-item";

      const word = document.createElement("h3");
      word.textContent = item.word;

      const meaning = document.createElement("p");
      meaning.innerHTML = `<strong>${item.partOfSpeech}</strong> ${item.meaning}`;

      const example = document.createElement("p");
      example.textContent = `Example: ${item.example}`;

      block.appendChild(word);
      block.appendChild(meaning);
      block.appendChild(example);
      elements.vocabularyList.appendChild(block);
    });
  }

  function toggleVocabulary() {
    if (!state.submitted) {
      return;
    }

    state.showVocabulary = !state.showVocabulary;
    saveState();
    renderReviewState(getCurrentReading());
  }

  function toggleTranslation() {
    if (!state.submitted) {
      return;
    }

    state.showTranslation = !state.showTranslation;
    saveState();
    renderReviewState(getCurrentReading());
  }

  function handleTryAgain() {
    state = getDefaultState();
    saveState();
    clearNotice();
    renderQuestions(getCurrentReading());
    renderReviewState(getCurrentReading());
  }

  function showPreviousReading() {
    if (currentIndex === 0) {
      showNotice("No earlier reading is available.", true);
      return;
    }

    loadReading(currentIndex - 1, false);
  }

  function showNextReading() {
    if (currentIndex >= sortedReadings.length - 1) {
      showNotice("Tomorrow’s reading is not available yet.", true);
      return;
    }

    loadReading(currentIndex + 1, false);
  }

  function updateNavButtons() {
    elements.previousButton.disabled = currentIndex === 0;
    elements.nextButton.disabled = currentIndex >= sortedReadings.length - 1;
  }

  function toggleArchive() {
    elements.archivePanel.classList.toggle("hidden");
    renderArchive();
  }

  function closeArchive() {
    elements.archivePanel.classList.add("hidden");
  }

  function renderArchive() {
    elements.archiveList.innerHTML = "";

    [...sortedReadings].reverse().forEach((reading) => {
      const progress = loadProgress(reading.date);
      const status = progress && progress.completed
        ? `Completed - ${progress.score}/${progress.total}`
        : "Not completed";

      const item = document.createElement("button");
      item.className = "archive-item";
      item.type = "button";
      item.textContent = `${reading.date} - ${reading.title} - ${status}`;
      item.addEventListener("click", () => {
        const index = sortedReadings.findIndex((candidate) => candidate.date === reading.date);
        elements.archivePanel.classList.add("hidden");
        loadReading(index, false);
      });

      elements.archiveList.appendChild(item);
    });
  }

  function loadProgress(date) {
    const saved = localStorage.getItem(getProgressKey(date));
    if (!saved) {
      return null;
    }

    try {
      return JSON.parse(saved);
    } catch (error) {
      return null;
    }
  }

  function showNotice(message, isWarning) {
    elements.notice.textContent = message;
    elements.notice.classList.toggle("is-warning", Boolean(isWarning));
  }

  function clearNotice() {
    elements.notice.textContent = "";
    elements.notice.classList.remove("is-warning");
  }

  function normalizeText(text) {
    return String(text).trim();
  }
})();
