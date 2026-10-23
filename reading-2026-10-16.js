(function () {
  "use strict";

  if (readings.some((reading) => reading.date === "2026-10-16")) {
    return;
  }

  readings.push({
    date: "2026-10-16",
    title: "A Field Course with a Few Surprises",
    level: "FCE / B2+",
    vocabulary: [
      { word: "qualify", meaning: "取得资格；符合条件", example: "Participants had to qualify for the advanced activities." },
      { word: "relevant", meaning: "相关的；切题的", example: "The package contained relevant information." },
      { word: "board", meaning: "登上（交通工具）", example: "We boarded a coach for the journey north." },
      { word: "ultraviolet", meaning: "紫外线的", example: "Strong ultraviolet light can damage the skin." },
      { word: "confuse", meaning: "使困惑；混淆", example: "The instructions confused some participants." },
      { word: "routine", meaning: "例行的；常规的", example: "The staff carried out a routine equipment check." },
      { word: "push on", meaning: "继续前进；坚持下去", example: "After a short rest, he decided to push on." },
      { word: "flexible", meaning: "灵活的；有弹性的", example: "The timetable was deliberately flexible." },
      { word: "bandage", meaning: "绷带", example: "The instructor used a bandage on his ankle." },
      { word: "sacrifice", meaning: "牺牲；放弃", example: "Everyone had to sacrifice some free time." },
      { word: "narrow", meaning: "狭窄的", example: "The walk followed a narrow path." },
      { word: "proper", meaning: "适当的；恰当的", example: "Proper clothing was essential." },
      { word: "jam", meaning: "堵塞；交通堵塞", example: "A traffic jam delayed the coach." },
      { word: "tender", meaning: "疼痛的；柔嫩的", example: "The instructor checked whether the area was tender." },
      { word: "reconstruct", meaning: "重建；重构", example: "Students helped reconstruct an old weather station." },
      { word: "package", meaning: "包裹；一包", example: "The organisers sent us a package before the course." },
      { word: "interrupt", meaning: "打断；插话", example: "One student tried to interrupt the instructor." },
      { word: "unacceptable", meaning: "不能接受的", example: "The instructor said that behaviour was unacceptable." },
      { word: "clarification", meaning: "澄清；进一步说明", example: "I emailed the centre for clarification." },
      { word: "quarrel", meaning: "争吵；吵架", example: "Two students began to quarrel during the meeting." }
    ],
    passage: `
A Field Course with a Few Surprises

For questions 1–10, read the text below and decide which answer A, B, C or D best fits each gap.

Last summer, I joined a five-day outdoor science course for teenagers. To (1) ______ for the more advanced activities, participants first had to complete a short safety test.

Before we left, the organisers sent us a package containing maps, equipment lists and other (2) ______ information. Some of the instructions seemed confusing at first, so I emailed the centre for clarification.

Early on Monday morning, we (3) ______ a coach for the journey north. Unfortunately, a traffic (4) ______ delayed us for nearly an hour, but our instructor remained relaxed because the timetable was deliberately (5) ______.

When we finally arrived, the staff carried out a (6) ______ equipment check. They also reminded us that strong ultraviolet light could damage our skin and that proper clothing was essential.

The first walk followed a narrow path towards an old research station. One student hurt his ankle, so the instructor used a bandage and checked whether the area was tender. After a short rest, he decided he could push on.

Later, we helped scientists reconstruct part of an old weather station. The work required patience, and everyone had to (7) ______ a little free time to finish it before dark.

During the evening meeting, two students began to quarrel. One repeatedly tried to (8) ______ the instructor while she was speaking. She calmly explained that such behaviour was (9) ______ and asked everyone to listen properly.

By the end of the week, I had learned far more than I expected. The course showed me that good fieldwork depends not only on knowledge but also on teamwork, patience and the ability to ask for (10) ______ when something is unclear.
`,
    translation: `
一次有点意外的野外课程

去年夏天，我参加了一个为期五天的青少年户外科学课程。

为了获得参加一些高级活动的资格，参加者首先必须完成一项简短的安全测试。

出发之前，组织者给我们寄来了一个包裹，其中包括地图、装备清单和其他相关信息。

有些说明一开始让我感到有些困惑，因此我给活动中心发了邮件，请他们进一步说明。

星期一一大早，我们登上了一辆长途客车，开始向北出发。不巧的是，一场交通堵塞让我们耽误了将近一个小时。不过，我们的指导老师并不着急，因为整个时间表本来就设计得比较灵活。

我们终于到达以后，工作人员进行了一次例行装备检查。他们还提醒我们，强烈的紫外线可能伤害皮肤，因此穿着合适的衣服非常重要。

第一次徒步沿着一条狭窄的小路前往一个旧研究站。其中一名学生扭伤了脚踝，所以指导老师给他缠上了绷带，并检查受伤部位是否仍然疼痛。短暂休息后，他认为自己还可以继续前进。

后来，我们帮助科学家重建了一座旧气象站的一部分。这项工作需要耐心，为了在天黑之前完成，每个人都不得不牺牲一点自己的空闲时间。

晚上的会议上，两名学生发生了争吵。其中一个人在老师讲话时不断试图打断她。老师平静地解释说，这种行为是不能接受的，并要求大家认真听别人讲话。

到这一周结束时，我学到的东西比预想中多得多。这次课程让我明白，优秀的野外研究不仅依赖知识，还依赖团队合作、耐心，以及在事情不清楚的时候主动要求进一步澄清的能力。
`,
    questions: [
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", sectionInstructions: "Read the text and choose the answer A, B, C or D which best fits each gap.", question: "To ______ for the more advanced activities, participants had to complete a safety test.", options: { A: "qualify", B: "succeed", C: "achieve", D: "deserve" }, answer: "A", explanation: { correct: "A — qualify。qualify for something 表示取得参加某事或获得某物的资格。", A: "qualify for the advanced activities 是正确搭配。", B: "succeed 通常使用 succeed in doing something。", C: "achieve 通常直接接目标或结果，如 achieve success。", D: "deserve 表示值得或应得。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The package contained maps, equipment lists and other ______ information.", options: { A: "suitable", B: "relevant", C: "connected", D: "useful" }, answer: "B", explanation: { correct: "B — relevant。relevant information 表示与当前事情有关的信息。", A: "suitable 表示适合的，侧重适用性。", B: "relevant information 是自然搭配。", C: "connected 通常需要 connected with 或 connected to。", D: "useful 表示有用，但不一定表示与本次活动直接相关。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Early on Monday morning, we ______ a coach for the journey north.", options: { A: "entered", B: "caught", C: "boarded", D: "joined" }, answer: "C", explanation: { correct: "C — boarded。board 加交通工具表示登上飞机、船、火车或长途汽车。", A: "enter 表示进入，但通常不用 enter a coach 表示正常乘车。", B: "catch a bus 或 catch a train 可以表示赶上并乘坐，但本题考查 board。", C: "boarded a coach 是正确表达。", D: "join 不能表示登上一辆车。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "A traffic ______ delayed us for nearly an hour.", options: { A: "crowd", B: "queue", C: "jam", D: "block" }, answer: "C", explanation: { correct: "C — jam。traffic jam 是交通堵塞的固定搭配。", A: "crowd 主要指人群。", B: "queue 表示排队的人或车辆，但标准搭配不是 traffic queue。", C: "traffic jam 是正确表达。", D: "block 可以表示堵塞物，但不能代替 traffic jam。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The timetable was deliberately ______.", options: { A: "changeable", B: "flexible", C: "movable", D: "loose" }, answer: "B", explanation: { correct: "B — flexible。flexible timetable 或 schedule 表示时间安排具有弹性，可以根据情况调整。", A: "changeable 表示容易变化，但不一定有为了方便而调整的含义。", B: "a flexible timetable 是自然搭配。", C: "movable 多指实体物体可以移动。", D: "loose 表示松的或宽松的。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The staff carried out a ______ equipment check.", options: { A: "usual", B: "ordinary", C: "routine", D: "regular" }, answer: "C", explanation: { correct: "C — routine。routine check 是常见搭配，表示例行检查。", A: "usual 表示通常的。", B: "ordinary 表示普通的。", C: "routine equipment check 是最自然、最典型的表达。", D: "regular 也可表示定期的，但此处不如 routine 准确。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Everyone had to ______ a little free time to finish the work.", options: { A: "sacrifice", B: "lose", C: "waste", D: "surrender" }, answer: "A", explanation: { correct: "A — sacrifice。sacrifice something 表示为了更重要的目标而放弃某样东西。", A: "sacrifice your free time 是正确搭配。", B: "lose 表示失去，并不强调主动为了目标放弃。", C: "waste 表示浪费。", D: "surrender 通常表示投降或交出控制权。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "One student tried to ______ the instructor while she was speaking.", options: { A: "disturb", B: "interrupt", C: "prevent", D: "break" }, answer: "B", explanation: { correct: "B — interrupt。interrupt somebody 表示在别人讲话时打断或插嘴。", A: "disturb 表示打扰，使人无法专心或休息。", B: "interrupt the instructor 是正确表达。", C: "prevent 通常使用 prevent somebody from doing something。", D: "break 不能直接表示打断某人说话。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "She explained that such behaviour was ______.", options: { A: "unsuitable", B: "incorrect", C: "inconvenient", D: "unacceptable" }, answer: "D", explanation: { correct: "D — unacceptable。unacceptable behaviour 表示从规则、标准或行为规范角度不能接受的行为。", A: "unsuitable 主要表示不合适或不适用于某种情况。", B: "incorrect 表示不正确。", C: "inconvenient 表示不方便。", D: "unacceptable 强调不能接受，符合老师对学生插话行为的评价。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Students should ask for ______ when something is unclear.", options: { A: "explanation", B: "clarification", C: "definition", D: "description" }, answer: "B", explanation: { correct: "B — clarification。ask for clarification 表示要求进一步说明或澄清。", A: "explanation 也表示解释，但常用于说明原因或过程。", B: "ask for clarification 是信息不清楚时的固定表达。", C: "definition 表示一个词或概念的定义。", D: "description 表示对人、物或情况的描述。" } }
    ]
  });
})();
