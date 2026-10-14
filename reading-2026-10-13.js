(function () {
  "use strict";

  if (readings.some((reading) => reading.date === "2026-10-13")) {
    return;
  }

  readings.push({
    date: "2026-10-13",
    title: "A Weekend of Unexpected Discoveries",
    level: "FCE / B2+",
    vocabulary: [
      { word: "customs officer", meaning: "海关官员", example: "A customs officer asked me to open a parcel." },
      { word: "excursion", meaning: "短途旅行；远足", example: "Our group went on an excursion to a historic town." },
      { word: "inland", meaning: "向内陆；在内陆", example: "The town was several kilometres inland." },
      { word: "oppressive", meaning: "闷热难耐的；令人压抑的", example: "The oppressive heat made walking difficult." },
      { word: "symbol", meaning: "象征", example: "The flower pattern had become a symbol of the town." },
      { word: "bargain", meaning: "便宜货；划算的东西", example: "I managed to pick up a real bargain." },
      { word: "information overload", meaning: "信息过载", example: "After several talks, I began to suffer from information overload." },
      { word: "a slip of the tongue", meaning: "口误；说错话", example: "The guide made a slip of the tongue." },
      { word: "directory", meaning: "目录；地址名录", example: "We looked for the address in a local directory." },
      { word: "recover from", meaning: "从……中恢复", example: "Everyone quickly recovered from the heat." }
    ],
    passage: `
A Weekend of Unexpected Discoveries

For questions 1–10, read the text below and decide which answer A, B, C or D best fits each gap.

Last month, I joined an international cultural program in the town of Merona. My journey began at the airport, where a (1) ______ asked me to open a parcel containing gifts for my host family.

The following morning, our group went on an (2) ______ to a historic town several kilometres (3) ______. The weather was unusually hot, and the (4) ______ heat made walking difficult, so we spent part of the afternoon indoors.

Our first stop was an old mosque. The guide explained that a particular flower pattern had become a (5) ______ of the town and could be seen on buildings, jewellery and traditional clothes.

Later, we visited a market selling an assortment of local products. I managed to pick up a real (6) ______ — a handmade bag for less than half its usual price.

The program was fascinating, but there was almost too much information. After several museums, talks and demonstrations, I began to suffer from information (7) ______.

One amusing incident occurred when our guide made a (8) ______ of the tongue and gave us the wrong street name. We tried to find the correct address in a local (9) ______, but eventually had to ask someone for directions.

By evening, we were exhausted. Fortunately, after a long rest and plenty of water, everyone quickly (10) ______ from the heat.

The whole weekend taught me that travelling is not simply about recognising famous sights. Sometimes the small mistakes, conversations and unexpected discoveries become the strongest memories.
`,
    translation: `
一次充满意外发现的周末

上个月，我参加了梅罗纳镇举办的一个国际文化交流项目。

我的旅程从机场开始。在那里，一名海关官员要求我打开一个包裹，里面装着我准备送给寄宿家庭的礼物。

第二天早上，我们小组进行了一次短途旅行，前往几十公里外的一座内陆历史小镇。

那天天气异常炎热。闷热难耐的高温让步行变得十分困难，因此下午有一段时间我们待在室内。

我们的第一站是一座古老的清真寺。导游解释说，一种特殊的花卉图案已经成为这座小镇的象征，在建筑、首饰和传统服装上都能看到这种图案。

后来，我们参观了一个出售各种当地产品的市场。我淘到了一件真正的便宜货——一个手工制作的包，价格还不到平时的一半。

整个项目非常有意思，但需要接收的信息实在太多。连续参观了几家博物馆、听了多场讲座和演示之后，我开始感到有些“信息过载”。

还有一件很有趣的小插曲。我们的导游一时口误，把街道名称说错了。我们试着从当地的地址名录中寻找正确地址，不过最后还是不得不向别人问路。

到了晚上，我们已经筋疲力尽。幸运的是，经过长时间休息并喝了大量的水以后，大家很快就从炎热带来的不适中恢复了过来。

整个周末让我认识到，旅行并不仅仅是认出那些著名景点。有时候，旅途中发生的小错误、与陌生人的交谈以及没有预料到的发现，反而会成为最深刻的记忆。
`,
    questions: [
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", sectionInstructions: "Read the text and choose the answer A, B, C or D which best fits each gap.", question: "A ______ asked me to open a parcel.", options: { A: "investigator", B: "representative", C: "customs officer", D: "viewer" }, answer: "C", explanation: { correct: "C — customs officer。customs officer 指海关官员，是在机场或边境检查行李和包裹的人。", A: "investigator 指调查人员，不符合机场检查的语境。", B: "representative 指代表或代理人。", C: "customs officer 是正确搭配。", D: "viewer 指观看者或观众。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Our group went on an ______ to a historic town.", options: { A: "excursion", B: "passage", C: "movement", D: "route" }, answer: "A", explanation: { correct: "A — excursion。go on an excursion 是固定搭配，表示参加短途旅行或远足。", A: "go on an excursion 是正确表达。", B: "passage 指通道、一段文字或通过。", C: "movement 指移动或运动。", D: "route 指路线本身，而不是一次旅行活动。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The town was several kilometres ______.", options: { A: "internal", B: "inland", C: "inner", D: "inside" }, answer: "B", explanation: { correct: "B — inland。inland 可以表示向内陆或在内陆地区。", A: "internal 表示内部的。", B: "inland several kilometres 是自然表达。", C: "inner 通常放在名词前修饰名词。", D: "inside 通常表示在某物内部。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The ______ heat made walking difficult.", options: { A: "depressing", B: "strenuous", C: "oppressive", D: "threatening" }, answer: "C", explanation: { correct: "C — oppressive。oppressive heat 表示闷热难耐、令人感到压抑的高温，是自然搭配。", A: "depressing 表示令人沮丧的。", B: "strenuous 表示费力的，通常修饰活动或工作。", C: "oppressive heat 是正确搭配。", D: "threatening 表示具有威胁性的。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The flower pattern had become a ______ of the town.", options: { A: "signal", B: "symbol", C: "mark", D: "notice" }, answer: "B", explanation: { correct: "B — symbol。a symbol of something 表示某物的象征。", A: "signal 主要表示信号。", B: "a symbol of the town 是正确表达。", C: "mark 可以表示标记或痕迹。", D: "notice 表示通知或告示。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "I managed to pick up a real ______.", options: { A: "bargain", B: "purchase", C: "sale", D: "cost" }, answer: "A", explanation: { correct: "A — bargain。pick up a bargain 表示买到很划算的东西，题目还说明价格不到平时的一半。", A: "bargain 指物美价廉的东西。", B: "purchase 只是所购买的物品，不一定便宜。", C: "sale 通常指促销活动或销售。", D: "cost 指费用或成本。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "I began to suffer from information ______.", options: { A: "excess", B: "overload", C: "burden", D: "pressure" }, answer: "B", explanation: { correct: "B — overload。information overload 是固定搭配，表示信息过载。", A: "information excess 不是这里的自然搭配。", B: "information overload 是正确表达。", C: "burden 表示负担。", D: "pressure 表示压力。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Our guide made a ______ of the tongue.", options: { A: "mistake", B: "failure", C: "fault", D: "slip" }, answer: "D", explanation: { correct: "D — slip。a slip of the tongue 是固定表达，表示口误或说错话。", A: "mistake 虽然表示错误，但不能说 a mistake of the tongue。", B: "failure 表示失败或故障。", C: "fault 表示过错或故障。", D: "a slip of the tongue 是正确表达。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "We tried to find the correct address in a local ______.", options: { A: "directory", B: "catalogue", C: "register", D: "index" }, answer: "A", explanation: { correct: "A — directory。directory 指目录、名录、电话号码簿或地址簿，这里用于查找地址。", A: "a local directory 是正确搭配。", B: "catalogue 通常是商品、图书或展品的目录。", C: "register 通常指正式登记册。", D: "index 通常指书后的索引。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Everyone quickly ______ from the heat.", options: { A: "returned", B: "recovered", C: "restored", D: "regained" }, answer: "B", explanation: { correct: "B — recovered。recover from something 表示从疾病、不适或困难中恢复。", A: "return 表示回来或返回。", B: "recovered from the heat 是正确结构。", C: "restore 通常是及物动词，表示使某物恢复原状。", D: "regain 通常直接接宾语，如 regain strength。" } }
    ]
  });
})();
