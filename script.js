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
    vocabPreviewList: document.getElementById("vocabPreviewList"),
    passageText: document.getElementById("passageText"),
    translationSection: document.getElementById("translationSection"),
    translationText: document.getElementById("translationText"),
    quizForm: document.getElementById("quizForm"),
    questionsContainer: document.getElementById("questionsContainer"),
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
    elements.questionCount.textContent = `${reading.questions.length} questions`;
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
      openExplanations: {}
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
    reading.vocabulary.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.word;
      elements.vocabPreviewList.appendChild(li);
    });
  }

  function renderQuestions(reading) {
    elements.questionsContainer.innerHTML = "";

    reading.questions.forEach((question, index) => {
      const questionNumber = index + 1;
      const block = document.createElement("section");
      block.className = "question-block";

      const title = document.createElement("p");
      title.className = "question-title";
      title.textContent = `${questionNumber}. ${question.question}`;
      block.appendChild(title);

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

      block.appendChild(options);

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

  function createFeedback(question, index) {
    const selected = state.answers[index];
    const isCorrect = selected === question.answer;
    const feedback = document.createElement("div");
    feedback.className = `answer-feedback ${isCorrect ? "correct" : "wrong"}`;
    feedback.textContent = `Your answer: ${selected}. Correct answer: ${question.answer}. ${isCorrect ? "Correct." : "Not correct."}`;
    return feedback;
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

    ["correct", "A", "B", "C", "D"].forEach((key) => {
      const p = document.createElement("p");
      p.textContent = question.explanation[key];
      card.appendChild(p);
    });

    return card;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const reading = getCurrentReading();

    if (Object.keys(state.answers).length < reading.questions.length) {
      showNotice("Please answer all questions before submitting.", true);
      return;
    }

    let score = 0;
    reading.questions.forEach((question, index) => {
      if (state.answers[index] === question.answer) {
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
    elements.scoreResult.textContent = `You got ${state.score} out of ${reading.questions.length} correct.`;
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
