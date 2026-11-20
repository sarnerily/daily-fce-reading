(function () {
  "use strict";

  if (readings.some((reading) => reading.date === "2026-11-17")) {
    return;
  }

  readings.push({
    date: "2026-11-17",
    title: "The Art of Telling Stories Through Sound",
    level: "FCE / B2",
    vocabulary: [
      { word: "qualification", meaning: "资格；资历；学历", example: "No formal qualification in sound engineering is required." },
      { word: "allowance", meaning: "津贴；补贴；零用钱", example: "The club provides a fixed travel allowance." },
      { word: "venue", meaning: "场地；举办地点", example: "The main library is the venue for the annual live show." },
      { word: "supervise", meaning: "监督；管理", example: "Experienced producers supervise the sessions." },
      { word: "abbreviate", meaning: "缩写；缩短", example: "We abbreviate Detective to Det." },
      { word: "refer", meaning: "查阅；参考；提到", example: "Actors can refer to their scripts while recording." },
      { word: "habit", meaning: "习惯", example: "They should get into the habit of listening carefully." },
      { word: "alarm", meaning: "警报器；警报", example: "The fire alarm went off in the studio." },
      { word: "relieve", meaning: "减轻；解除（负担）", example: "Reading from scripts can relieve beginners of pressure." },
      { word: "questionnaire", meaning: "调查问卷", example: "Participants completed a questionnaire about their experience." },
      { word: "youth", meaning: "青年；青少年时期", example: "A youth radio club welcomed teenagers." },
      { word: "detective", meaning: "侦探；侦探的", example: "The script used the word Detective." },
      { word: "cassette", meaning: "盒式磁带", example: "An old cassette recorded a thunderstorm." },
      { word: "thunderstorm", meaning: "雷暴；雷雨", example: "The cassette contained the sound of a thunderstorm." },
      { word: "dramatic", meaning: "戏剧性的；引人注目的", example: "The recording created a dramatic atmosphere." },
      { word: "terrifying", meaning: "令人恐惧的", example: "The scene was terrifying but effective." },
      { word: "phantom", meaning: "幽灵；幻影", example: "The story involved a phantom." },
      { word: "technology", meaning: "技术；科技", example: "Modern technology made the recordings easy to edit." },
      { word: "branch", meaning: "分部；分支机构", example: "Most recording took place at a smaller branch." },
      { word: "relief", meaning: "宽慰；轻松", example: "It was a relief to know perfection was not expected." }
    ],
    passage: `
The Art of Telling Stories Through Sound

For questions 1–10, read the text below and decide which answer A, B, C or D best fits each gap.

At a youth radio club, producer Maya Chen teaches teenagers how to tell stories through sound. We asked her how beginners could get involved.

Do I need any experience?

No formal (1) ______ in sound engineering is required. Even people without certificates are welcome. The club provides a fixed travel (2) ______ of £5 per session, regardless of the actual bus fare.

Where do you work?

The main library is the (3) ______ for our annual live show, but most recording takes place at a smaller branch. Experienced producers (4) ______ the sessions, making sure that teenagers use the equipment safely.

How do you prepare a script?

We sometimes (5) ______ the word 'Detective' to 'Det.' to save space on the page. Actors can (6) ______ to their scripts while recording, but they should also get into the (7) ______ of listening carefully to one another.

Where do your sound effects come from?

An old cassette recording of a thunderstorm can create a dramatic atmosphere for a terrifying scene involving a phantom. Modern technology makes such recordings easy to edit. However, if the actual fire (8) ______ goes off in the studio, everyone must stop recording and leave immediately.

What if someone feels nervous?

To (9) ______ beginners of the burden of memorising every line, we allow them to read from their scripts. It is often a relief to discover that nobody expects a perfect performance.

Finally, we ask participants to complete a short (10) ______ about their experience, so that we can improve future sessions.
`,
    translation: `
用声音讲故事的艺术

在一家青少年广播俱乐部，制作人玛雅·陈教青少年如何通过声音讲述故事。我们请她介绍一下初学者应该如何参与这项活动。

我需要具备相关经验吗？

参加活动不需要任何正式的音响工程专业资格。即使没有相关证书的人，我们也欢迎。无论实际公交车费是多少，俱乐部每次活动都会提供固定5英镑的交通补贴。

你们在哪里工作？

总图书馆是我们每年举办现场演出的场地，但大部分录音工作都在一个规模较小的分馆进行。经验丰富的制作人负责监督整个活动，确保青少年能够安全地使用设备。

你们如何准备剧本？

为了节省纸面空间，我们有时会把“Detective”（侦探）这个单词缩写为“Det.”。演员录音时可以参考自己的剧本，但他们也应该养成认真倾听彼此讲话的习惯。

你们的声音效果来自哪里？

一盘记录了雷暴声音的旧磁带，就能为幽灵出现的恐怖场景营造出富有戏剧性的氛围。现代技术让编辑这些录音变得更加容易。不过，如果录音室里真正的火灾警报器响起来，所有人都必须立即停止录音并撤离。

如果有人感到紧张怎么办？

为了让初学者不必承担记住每一句台词的负担，我们允许他们照着剧本朗读。当他们发现没有人要求自己必须表现得完美时，往往会松一口气。

最后，我们会请参加者填写一份关于自身体验的简短调查问卷，以便改进今后的活动。
`,
    questions: [
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", sectionInstructions: "Read the text and choose the answer A, B, C or D which best fits each gap.", question: "No formal ______ in sound engineering is required.", options: { A: "occupation", B: "appointment", C: "qualification", D: "reputation" }, answer: "C", explanation: { correct: "C — qualification。qualification 表示通过学习、培训或考试获得的资格、学历或资历，without certificates 是重要线索。", A: "occupation 表示职业或工作。", B: "appointment 表示预约、任命或职位。", C: "formal qualification in sound engineering 是自然搭配。", D: "reputation 表示名声或声誉。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The club provides a fixed travel ______ of £5 per session.", options: { A: "allowance", B: "refund", C: "discount", D: "deposit" }, answer: "A", explanation: { correct: "A — allowance。allowance 表示定期发放或为特定用途提供的津贴、补助或零用钱。", A: "travel allowance 是交通补贴的固定搭配。", B: "refund 是已经支付后退还的费用。", C: "discount 是降低原有价格的折扣。", D: "deposit 是押金或定金。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The main library is the ______ for our annual live show.", options: { A: "occasion", B: "destination", C: "scenery", D: "venue" }, answer: "D", explanation: { correct: "D — venue。venue 指举办演出、会议、比赛或其他活动的具体场所。", A: "occasion 强调场合、时刻或特别的事情。", B: "destination 是目的地，强调旅行或移动的终点。", C: "scenery 是自然景色或风景。", D: "the venue for our annual live show 是正确表达。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Experienced producers ______ the sessions.", options: { A: "inspect", B: "supervise", C: "review", D: "examine" }, answer: "B", explanation: { correct: "B — supervise。supervise 表示负责监督、管理某人或某项活动，确保工作正确、安全地进行。", A: "inspect 强调检查某物是否符合标准。", B: "supervise the sessions 与确保青少年安全使用设备的语境相符。", C: "review 常用于评价工作或成果。", D: "examine 表示仔细检查或研究。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "We sometimes ______ the word 'Detective' to 'Det.'.", options: { A: "abbreviate", B: "summarise", C: "translate", D: "omit" }, answer: "A", explanation: { correct: "A — abbreviate。abbreviate A to B 表示将 A 缩写为 B。", A: "abbreviate Detective to Det. 是正确结构。", B: "summarise 表示概括或总结一段内容。", C: "translate 表示翻译。", D: "omit 表示完全省略某个部分。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Actors can ______ to their scripts while recording.", options: { A: "consult", B: "mention", C: "refer", D: "remind" }, answer: "C", explanation: { correct: "C — refer。refer to 在这里表示查阅或参考。", A: "consult 也可表示查阅，但直接接宾语，不需要 to。", B: "mention 表示提及，通常直接接宾语。", C: "refer to their scripts 是正确搭配。", D: "remind 通常使用 remind somebody of something 或 remind somebody to do something。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "They should get into the ______ of listening carefully.", options: { A: "tendency", B: "manner", C: "fashion", D: "habit" }, answer: "D", explanation: { correct: "D — habit。get into the habit of doing something 表示逐渐养成做某事的习惯。", A: "tendency 通常使用 have a tendency to do。", B: "manner 表示方式或举止。", C: "fashion 表示时尚或流行方式。", D: "get into the habit of listening 是固定表达。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "If the actual fire ______ goes off, everyone must leave.", options: { A: "warning", B: "alarm", C: "notice", D: "announcement" }, answer: "B", explanation: { correct: "B — alarm。fire alarm 表示火灾警报器或火灾警报，go off 表示警报器突然响起。", A: "warning 表示警告，强调提醒危险。", B: "the fire alarm goes off 是正确表达。", C: "notice 通常指书面通知或告示。", D: "announcement 表示公告或广播通知。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "To ______ beginners of the burden of memorising every line, we allow them to read from scripts.", options: { A: "reduce", B: "ease", C: "relieve", D: "recover" }, answer: "C", explanation: { correct: "C — relieve。relieve somebody of something 表示解除某人的负担、责任或烦恼。", A: "reduce 可以说 reduce the burden，但不能说 reduce somebody of the burden。", B: "ease 可以说 ease the burden，但不能使用原文结构。", C: "relieve beginners of the burden 是正确搭配。", D: "recover 通常使用 recover from，表示恢复。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Participants complete a short ______ about their experience.", options: { A: "questionnaire", B: "application", C: "report", D: "declaration" }, answer: "A", explanation: { correct: "A — questionnaire。questionnaire 指为了收集信息、意见或反馈而设计的调查问卷。", A: "complete a questionnaire 是常见搭配。", B: "application 通常是申请或申请表。", C: "report 通常需要撰写或整理信息。", D: "declaration 是声明或申报书。" } }
    ]
  });
})();
