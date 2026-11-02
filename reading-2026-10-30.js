(function () {
  "use strict";

  if (readings.some((reading) => reading.date === "2026-10-30")) {
    return;
  }

  readings.push({
    date: "2026-10-30",
    title: "A Stormy Day on Grey Rock Island",
    level: "FCE / B2+",
    vocabulary: [
      { word: "primary", meaning: "首要的；主要的", example: "Our primary concern was to study the birds safely." },
      { word: "run across", meaning: "偶然发现；偶然遇见", example: "We ran across an old field notebook." },
      { word: "ominous", meaning: "不祥的；预示坏事的", example: "An ominous bank of cloud appeared over the sea." },
      { word: "intermittent", meaning: "断断续续的；间歇的", example: "Intermittent rain became heavier." },
      { word: "guidance", meaning: "指导；引导", example: "We worked under the guidance of two researchers." },
      { word: "sensitive", meaning: "敏感的", example: "Some species were sensitive to noise." },
      { word: "container", meaning: "容器", example: "Each sample was placed in a sealed container." },
      { word: "value", meaning: "价值；重要性", example: "The feather could be of scientific value." },
      { word: "buffet", meaning: "猛烈冲击；连续打击", example: "The boat was buffeted by strong winds." },
      { word: "undercover", meaning: "秘密工作的；卧底的", example: "An undercover wildlife officer was on the island." },
      { word: "break up", meaning: "散开；解散", example: "The crowd began to break up." },
      { word: "overpopulated", meaning: "人口过多的；过度拥挤的", example: "The island was an increasingly overpopulated tourist destination." },
      { word: "cliff", meaning: "悬崖", example: "Seabirds nested on the island's high cliffs." },
      { word: "damp", meaning: "潮湿的；受潮的", example: "Some pages of the notebook were damp." },
      { word: "particular", meaning: "特定的；特别的", example: "The notes described particular bird nests." },
      { word: "collection", meaning: "收集；收藏；一批物品", example: "The notebook described a collection of bird nests." },
      { word: "zoology", meaning: "动物学", example: "I joined a zoology field trip." },
      { word: "collar", meaning: "衣领；项圈", example: "The officer checked the collar on a rescued bird." },
      { word: "action", meaning: "行动", example: "The team leader decided to take action." },
      { word: "fanatic", meaning: "狂热爱好者", example: "A self-described bird fanatic watched the rough sea." }
    ],
    passage: `
A Stormy Day on Grey Rock Island

For questions 1–10, read the text below and decide which answer A, B, C or D best fits each gap.

Last spring, I joined a zoology field trip to Grey Rock Island, a small but increasingly overpopulated tourist destination famous for seabirds nesting on its high cliffs.

Our (1) ______ concern was to study the birds without disturbing them. We worked under the (2) ______ of two experienced researchers and were warned that several species were extremely (3) ______ to noise.

On our first morning, we happened to (4) ______ an old field notebook inside a wooden hut. Some pages were damp, but the notes were still readable. They described a collection of bird nests studied nearly forty years earlier.

Later, we collected a few naturally fallen feathers. Each sample was placed in a sealed (5) ______ before being labelled. The researchers explained that even an ordinary-looking feather could be of considerable scientific (6) ______.

The weather then began to change. Intermittent rain became heavier, and an ominous bank of cloud appeared over the sea. Our small boat was soon being (7) ______ by strong winds.

Unknown to most visitors, an (8) ______ wildlife officer was also on the island investigating reports that tourists had been feeding protected birds.

When conditions became dangerous, the team leader decided to (9) ______ immediately and return to the harbour.

By the time we arrived, a crowd had gathered to watch the rough sea. A self-described bird fanatic was trying to explain the storm to everyone, but after the rain became heavier, the crowd quickly began to (10) ______.

It was not the peaceful field trip we had expected, but it taught us something important: careful observation matters, but knowing when to stop matters just as much.
`,
    translation: `
灰岩岛上风雨交加的一天

去年春天，我参加了一次前往灰岩岛的动物学野外考察。

灰岩岛是一座不大的岛屿，但随着游客越来越多，这里已经开始显得有些人口过多。它最著名的是那些在高高的悬崖上筑巢的海鸟。

我们的首要任务是在不打扰鸟类的情况下对它们进行研究。我们在两名经验丰富的研究人员指导下工作，而且工作人员提醒我们，有几种鸟对噪音非常敏感。

第一天早晨，我们在一间木屋里偶然发现了一本旧的野外调查笔记。一些纸页已经受潮，不过上面的记录仍然可以阅读。这些笔记记录了一批大约四十年前曾经被研究过的鸟巢。

后来，我们收集了一些自然掉落的羽毛。每个样本在贴标签之前，都被放进一个密封的容器里。研究人员解释说，即使是一根看起来非常普通的羽毛，也可能具有相当高的科学价值。

随后天气开始发生变化。原本断断续续的降雨越来越大，海面上方还出现了一大片看起来不祥的乌云。没过多久，我们的小船就开始不断受到强风的猛烈冲击。

大多数游客并不知道，一名便衣秘密工作的野生动物保护官员当时也在岛上。他正在调查有关游客给受保护鸟类喂食的举报。

当天气条件开始变得危险时，队长决定立即采取行动，返回港口。

我们抵达时，一群人已经聚集在那里观看波涛汹涌的大海。一名自称是“鸟类狂热爱好者”的人正在努力向大家解释这场暴风雨，但随着雨势越来越大，人群很快开始散去。

这并不是我们原本期待的那种平静的野外考察。但它让我们明白了一个重要道理：认真观察固然重要，但知道什么时候应该停止，同样重要。
`,
    questions: [
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", sectionInstructions: "Read the text and choose the answer A, B, C or D which best fits each gap.", question: "Our ______ concern was to study the birds without disturbing them.", options: { A: "chief", B: "primary", C: "central", D: "leading" }, answer: "B", explanation: { correct: "B — primary。primary concern 是常见搭配，表示首要关注的问题或最主要的考虑。", A: "chief 也有主要的意思，但 primary concern 更自然常见。", B: "primary concern 等于 most important concern。", C: "central 强调处于核心位置。", D: "leading 多表示领先的或主要的，如 a leading company。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "We worked under the ______ of two experienced researchers.", options: { A: "guidance", B: "instruction", C: "advice", D: "direction" }, answer: "A", explanation: { correct: "A — guidance。under the guidance of somebody 表示在某人的指导下。", A: "under the guidance of 是固定表达。", B: "instruction 通常指具体的指示或操作说明。", C: "advice 表示建议，不能自然地说 under the advice of。", D: "direction 虽有指导之意，但这里的固定搭配是 under the guidance of。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Several species were extremely ______ to noise.", options: { A: "delicate", B: "responsive", C: "sensitive", D: "nervous" }, answer: "C", explanation: { correct: "C — sensitive。be sensitive to something 表示对某事物敏感。", A: "delicate 表示脆弱或精细。", B: "responsive 表示作出反应，含义与 sensitive 不同。", C: "sensitive to noise 是正确搭配。", D: "nervous 通常描述人或动物紧张不安。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "We happened to ______ an old field notebook.", options: { A: "run across", B: "run through", C: "run over", D: "run after" }, answer: "A", explanation: { correct: "A — run across。run across 表示偶然遇见或偶然发现。", A: "run across an old photograph 是常见表达。", B: "run through 表示快速检查、浏览或贯穿。", C: "run over 表示碾过或快速检查一遍。", D: "run after 表示追赶。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Each sample was placed in a sealed ______.", options: { A: "package", B: "container", C: "case", D: "holder" }, answer: "B", explanation: { correct: "B — container。container 指可以容纳或储存东西的容器，适合科学样本的语境。", A: "package 更强调已经包装好的包裹。", B: "a sealed container 是自然搭配。", C: "case 通常表示盒、箱或套，但这里不如 container 准确。", D: "holder 强调用来固定或托住某物的装置。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The feather could be of considerable scientific ______.", options: { A: "price", B: "importance", C: "worth", D: "value" }, answer: "D", explanation: { correct: "D — value。be of value 表示有价值，of scientific value 表示具有科学价值。", A: "price 强调价格。", B: "of scientific importance 也可表达类似意思，但本题考查的是 of scientific value。", C: "通常不用 of worth 构成这里的表达。", D: "of considerable scientific value 是正确搭配。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Our small boat was soon being ______ by strong winds.", options: { A: "pushed", B: "attacked", C: "buffeted", D: "struck" }, answer: "C", explanation: { correct: "C — buffeted。buffet 作动词表示风、雨或海浪猛烈击打某物，常见结构是 be buffeted by the wind。", A: "pushed 只是推，不能充分表达风浪连续猛烈冲击。", B: "attacked 通常表示人或动物受到攻击。", C: "was being buffeted by strong winds 是自然表达。", D: "struck 更强调一次性的撞击。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "An ______ wildlife officer was also on the island.", options: { A: "hidden", B: "undercover", C: "private", D: "secret" }, answer: "B", explanation: { correct: "B — undercover。undercover 表示秘密工作的或暗中执行任务的。", A: "hidden 主要指被隐藏起来。", B: "an undercover officer 是常见表达。", C: "private 表示私人的。", D: "secret officer 不能自然表示卧底人员。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The team leader decided to ______ immediately.", options: { A: "make action", B: "do action", C: "take action", D: "put action" }, answer: "C", explanation: { correct: "C — take action。take action 表示采取行动，是固定搭配。", A: "不能说 make action。", B: "不能说 do action。", C: "take action immediately 是正确表达。", D: "不能说 put action。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The crowd quickly began to ______.", options: { A: "break up", B: "break down", C: "break out", D: "break off" }, answer: "A", explanation: { correct: "A — break up。break up 在这里表示人群散开或解散。", A: "The crowd began to break up 是正确表达。", B: "break down 表示机器坏掉或人情绪崩溃。", C: "break out 表示战争、火灾或疾病等突然爆发。", D: "break off 表示中断谈话、关系或谈判。" } }
    ]
  });
})();
