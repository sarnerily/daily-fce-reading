(function () {
  "use strict";

  if (readings.some((reading) => reading.date === "2026-10-10")) {
    return;
  }

  readings.push({
    date: "2026-10-10",
    title: "Project Week in Cambridgeshire",
    level: "FCE / B2+",
    vocabulary: [
      { word: "curriculum", meaning: "课程体系；课程", example: "The project week was introduced into the school curriculum." },
      { word: "marina", meaning: "游艇停靠区；小型船舶港", example: "The group spent three days at a marina." },
      { word: "systematic", meaning: "系统的；有条理的", example: "The teacher insisted on a systematic approach." },
      { word: "procedure", meaning: "程序；步骤；手续", example: "Students followed the same procedure every hour." },
      { word: "observation", meaning: "观察；观察结果", example: "Wildlife remained under careful observation." },
      { word: "lend", meaning: "借给；借出", example: "Teachers could lend pupils binoculars and cameras." },
      { word: "draw attention to", meaning: "引起对……的注意", example: "The poster drew attention to their findings." },
      { word: "under no circumstances", meaning: "在任何情况下都不", example: "Under no circumstances should pupils look down upon others." },
      { word: "look down upon", meaning: "看不起；轻视", example: "Students should not look down upon quiet projects." },
      { word: "facade", meaning: "建筑物正面；外观", example: "Strong wind damaged the facade of the boathouse." }
    ],
    passage: `
Project Week in Cambridgeshire

For questions 1–8, read the text below and decide which answer A, B, C or D best fits each gap.

A secondary school in Cambridgeshire has introduced a new project week into its curriculum. Instead of normal lessons, students choose from activities ranging from ice hockey to writing a thriller or designing a herbal product.

One group spent three days at a marina studying wildlife. Their teacher insisted on a systematic approach: students followed the same procedure every hour and recorded the weather, temperature and creatures they saw.

A blond student called Jamie was responsible for a computer record of the results. Whenever the temperature fell close to zero, the group shortened its walk along the shore. The route followed the curve of the water and was fairly strenuous in places.

Wildlife had to remain under careful observation, but pupils were told not to disturb it. Teachers could lend them binoculars and cameras, but the equipment had to be returned each evening.

Whenever they spotted an unfamiliar creature, students made a note before asking the teacher for help.

A poster in the downstairs science room later helped draw attention to their findings.

The weather became worse on the final day, and strong wind damaged the facade of an old boathouse. Nevertheless, everyone followed the emergency procedure politely.

The teacher reminded pupils that under no circumstances should they look down upon less adventurous projects. A quiet observation task, she said, could demand just as much mental effort as a physical one.
`,
    translation: `
剑桥郡的项目周

剑桥郡的一所中学把一个新的“项目周”加入了学校的课程体系。

在这一周，学生不再上普通课程，而是可以从各种活动中做选择，包括体验冰球、创作惊险小说，或者设计草药产品。

其中一个小组花了三天时间，在一个游艇停靠区调查野生动物。

老师要求大家使用一种系统化的方法：学生每隔一个小时都按照同样的步骤操作，并记录天气、温度以及观察到的动物。

一名叫杰米的金发学生负责把所有结果录入电脑。

每当气温接近零度时，小组就会缩短沿湖岸步行的距离。这条路线顺着水边的弧线前进，有些路段走起来相当费力。

野生动物必须始终处于仔细的观察之下，不过学生不能去打扰它们。

老师可以把望远镜和照相机借给学生，不过所有设备每天晚上都必须归还。

每当他们发现不认识的动物时，学生会先做好记录，然后再向老师求助。

后来，楼下科学教室里的一张海报帮助引起了人们对这些研究结果的关注。

最后一天天气变得更糟，强风甚至损坏了一个旧船屋的正面。不过，所有人还是很有礼貌地按照紧急处理程序行动。

老师还提醒大家，在任何情况下，都不应该看不起那些看起来不够“冒险”的项目。

她说，一项安静的观察任务，所需要的脑力投入可能丝毫不亚于一项体力活动。
`,
    questions: [
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", sectionInstructions: "Read the text and choose the answer A, B, C or D which best fits each gap.", question: "The project week was introduced into the school's ______.", options: { A: "programme", B: "syllabus", C: "curriculum", D: "course" }, answer: "C", explanation: { correct: "C — curriculum。curriculum 指一所学校全部的课程和学习内容。", A: "programme 范围较广，不如 curriculum 准确。", B: "syllabus 通常指某一门课的具体学习内容。", C: "curriculum 指学校整体的课程体系。", D: "course 通常指一门课程。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The teacher insisted on a ______ approach.", options: { A: "regular", B: "systematic", C: "steady", D: "controlled" }, answer: "B", explanation: { correct: "B — systematic。学生每小时按照同样步骤记录数据，说明方法系统而有条理。", A: "regular 表示有规律的，但不如 systematic 突出方法性。", B: "systematic approach 是最自然的搭配。", C: "steady 表示稳定的。", D: "controlled 表示受控制的。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Wildlife had to remain under careful ______.", options: { A: "sight", B: "notice", C: "observation", D: "view" }, answer: "C", explanation: { correct: "C — observation。under observation 表示处于观察或监测之下。", A: "sight 不能构成这里的固定表达。", B: "notice 表示注意或通知。", C: "under observation 是正确搭配。", D: "view 表示视野或观点。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Teachers could ______ them binoculars and cameras.", options: { A: "borrow", B: "hire", C: "rent", D: "lend" }, answer: "D", explanation: { correct: "D — lend。lend somebody something 表示把某物借给某人。", A: "borrow 是从别人那里借。", B: "hire 多指付费租用或雇用。", C: "rent 多指租用。", D: "lend them binoculars 表示借给他们望远镜。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "______ they spotted an unfamiliar creature, students made a note.", options: { A: "Whenever", B: "Whatever", C: "Wherever", D: "However" }, answer: "A", explanation: { correct: "A — Whenever。Whenever they spotted... 表示每当他们发现……，这里需要时间关系。", A: "whenever 表示每当。", B: "whatever 表示无论什么。", C: "wherever 表示无论哪里。", D: "however 表示无论怎样。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The poster helped ______ attention to their findings.", options: { A: "give", B: "attract", C: "draw", D: "bring" }, answer: "C", explanation: { correct: "C — draw。draw attention to something 是固定搭配，表示引起人们对某事的注意。", A: "give attention 不是这里的固定搭配。", B: "attract attention 可以表达类似意思，但题目考查的是 draw attention to。", C: "draw attention to 是正确搭配。", D: "bring attention to 不如 draw attention to 自然。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The weather became ______ on the final day.", options: { A: "worse", B: "poorer", C: "weaker", D: "lower" }, answer: "A", explanation: { correct: "A — worse。bad 的比较级是 worse，表示天气变得更糟。", A: "worse 是 bad 的比较级。", B: "poorer weather 偶尔可理解，但这里不自然。", C: "weaker 更适合风或力量。", D: "lower 更适合温度等。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Under no ______ should they look down upon other projects.", options: { A: "situations", B: "conditions", C: "circumstances", D: "occasions" }, answer: "C", explanation: { correct: "C — circumstances。under no circumstances 是常见固定表达，表示在任何情况下都不。", A: "under no situations 不是这里的惯用表达。", B: "under no conditions 可以表示绝不，但此题的目标搭配是 circumstances。", C: "under no circumstances should... 是正确表达。", D: "occasions 表示场合或时机。" } }
    ]
  });
})();
