(function () {
  "use strict";

  if (readings.some((reading) => reading.date === "2026-10-20")) {
    return;
  }

  readings.push({
    date: "2026-10-20",
    title: "The Vineyard That Became a Wildlife Centre",
    level: "FCE / B2+",
    vocabulary: [
      { word: "discourse", meaning: "讨论；话语", example: "The centre became part of public discourse about nature." },
      { word: "set aside", meaning: "留出；拨出", example: "Money was set aside for restoring the site." },
      { word: "appalling", meaning: "糟糕得令人震惊的", example: "The buildings were in an appalling condition." },
      { word: "vineyard", meaning: "葡萄园", example: "Visitors can walk through the vineyard." },
      { word: "orphanage", meaning: "孤儿院", example: "Part of the land had once belonged to an orphanage." },
      { word: "emergency", meaning: "紧急情况", example: "The centre has an emergency procedure." },
      { word: "come down with", meaning: "染上（疾病）", example: "One member of staff came down with an infection." },
      { word: "environment", meaning: "环境", example: "The centre provides environmental education." },
      { word: "freeze", meaning: "结冰；冻结", example: "The water pipes would freeze every winter." },
      { word: "explode", meaning: "爆炸", example: "A container was likely to explode." },
      { word: "fetch", meaning: "去取；拿来", example: "A volunteer had to fetch medicine." },
      { word: "control", meaning: "控制；管制", example: "Chemicals must be kept under proper control." },
      { word: "throw away", meaning: "扔掉；丢弃", example: "Visitors should not throw away reusable materials." },
      { word: "interviewer", meaning: "采访者；面试官", example: "An interviewer visited the centre." },
      { word: "exact", meaning: "确切的；准确的", example: "The organisers were asked for the exact amount." },
      { word: "break in", meaning: "闯入；强行进入", example: "Someone tried to break in to steal equipment." },
      { word: "contain", meaning: "包含；容纳", example: "The main building contains a small laboratory." },
      { word: "moan", meaning: "抱怨；发牢骚", example: "The organisers sometimes moan about the workload." },
      { word: "likely", meaning: "很可能的", example: "The project is likely to continue for many years." },
      { word: "landscape", meaning: "风景；景观", example: "Visitors can enjoy the surrounding landscape." }
    ],
    passage: `
The Vineyard That Became a Wildlife Centre

For questions 1–10, read the text below and decide which answer A, B, C or D best fits each gap.

A few years ago, an abandoned vineyard in the countryside was turned into a small wildlife and environmental education centre. Part of the land had once belonged to an orphanage, but after the buildings closed, the whole area was left unused.

A local biology teacher suggested that money should be (1) ______ for restoring the site instead of allowing it to disappear. At first, the buildings were in an (2) ______ condition: several windows were smashed, rubbish covered the floors and the water pipes would freeze every winter.

The project soon attracted attention. An interviewer from a regional television programme visited the centre and asked the organisers for the (3) ______ amount they had spent. They explained that the project was mainly supported by volunteers.

One evening, somebody tried to (4) ______ to steal equipment. Fortunately, an alarm went off and the police arrived quickly. Nothing was taken, but the incident led the organisers to improve security.

Today, visitors can walk through the vineyard and enjoy the surrounding landscape. The main building (5) ______ a small laboratory, classrooms and an exhibition about the local environment.

Staff also teach visitors not to (6) ______ plastic bottles and other reusable materials. During demonstrations, children learn what can happen when chemicals are not kept under proper (7) ______.

There is also an emergency procedure. If a fire starts or a container is (8) ______ to explode, everyone must leave immediately rather than trying to deal with the problem themselves.

Last winter, one member of staff (9) ______ with a serious throat infection, so another volunteer had to fetch medicine from the nearest pharmacy.

Despite occasional difficulties, the centre has become an important part of local public discourse about nature. The organisers sometimes moan about the workload, but they agree that the project is (10) ______ to continue for many years.
`,
    translation: `
从葡萄园到野生动物中心

几年前，乡村里一座被废弃的葡萄园被改造成了一个小型野生动物与环境教育中心。

其中一部分土地过去属于一家孤儿院，但这些建筑停用以后，整个地区一直处于闲置状态。

一名当地生物老师建议，应该拨出一部分资金来修复这里，而不是任由它逐渐消失。

最开始，这些建筑的状况糟糕得令人震惊：好几扇窗户被砸碎，地板上到处都是垃圾，而且每到冬天水管都会结冰。

这个项目很快引起了人们的关注。一名地方电视节目的采访者来到中心，并询问组织者具体花了多少钱。他们解释说，这个项目主要依靠志愿者的支持。

一天晚上，有人试图闯入这里偷走设备。幸运的是，警报响了，警方很快赶到。虽然什么东西都没有被偷走，但这件事促使组织者加强了安保措施。

如今，游客可以穿过葡萄园，欣赏周围的乡村景色。主楼里设有一间小型实验室、几间教室，以及一个介绍当地环境的展览。

工作人员还会教育游客不要随意丢弃塑料瓶和其他可以再次利用的材料。在演示活动中，孩子们会学习，如果化学品没有得到妥善控制，可能会发生什么事情。

这里还制定了紧急处理程序。如果发生火灾，或者某个容器很可能爆炸，所有人都必须立即离开，而不能自己尝试处理问题。

去年冬天，一名工作人员染上了严重的咽喉感染，因此另一名志愿者不得不到最近的药店去取药。

尽管偶尔会遇到困难，这个中心已经成为当地关于自然和环境公共讨论的重要组成部分。组织者有时会抱怨工作量太大，但他们都认为，这个项目很可能会继续很多年。
`,
    questions: [
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", sectionInstructions: "Read the text and choose the answer A, B, C or D which best fits each gap.", question: "Money should be ______ for restoring the site.", options: { A: "kept", B: "placed", C: "set aside", D: "put away" }, answer: "C", explanation: { correct: "C — set aside。set aside money/time 表示留出或拨出钱、时间专门用于某件事。", A: "keep 虽有保留之意，但不如 set aside 明确表示专门拨出。", B: "place 主要表示放置。", C: "set aside money for repairs 是自然搭配。", D: "put away 通常表示把东西收起来或存钱。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The buildings were in an ______ condition.", options: { A: "terrible", B: "appalling", C: "miserable", D: "unpleasant" }, answer: "B", explanation: { correct: "B — appalling。in an appalling condition 表示状况极其糟糕、令人震惊。", A: "terrible 也可以表示糟糕，但程度和搭配辨析上不如 appalling 准确。", B: "appalling condition 与后面的破窗、垃圾等情况吻合。", C: "miserable 多用于描述人的痛苦或悲惨状态。", D: "unpleasant 只表示不令人愉快，程度偏弱。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The organisers were asked for the ______ amount they had spent.", options: { A: "exact", B: "accurate", C: "correct", D: "definite" }, answer: "A", explanation: { correct: "A — exact。the exact amount 表示确切的金额。exact 常与 amount、number、date 和 time 等搭配。", A: "the exact amount 是正确搭配。", B: "accurate 通常用于信息、测量或描述的准确性。", C: "correct 强调对错，不如 exact 适合这里。", D: "definite 表示明确的或确定的。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Somebody tried to ______ to steal equipment.", options: { A: "break in", B: "enter in", C: "get inside", D: "come through" }, answer: "A", explanation: { correct: "A — break in。break in 表示非法闯入建筑物，正好符合偷盗设备的语境。", A: "Someone broke in last night 是常见表达。", B: "enter in 不是自然搭配。", C: "get inside 只表示进入内部，不一定含非法闯入之意。", D: "come through 表示穿过或传来等。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The main building ______ a small laboratory, classrooms and an exhibition.", options: { A: "includes", B: "consists", C: "contains", D: "holds" }, answer: "C", explanation: { correct: "C — contains。contain 表示包含或容纳，强调建筑内部设有这些空间。", A: "include 意思接近，但更强调把某项作为整体的一部分列入其中。", B: "consist 必须搭配 of，不能直接说 consists a laboratory。", C: "contains a laboratory 是自然表达。", D: "hold 可以表示容纳，但这里不如 contains 自然。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Visitors should not ______ plastic bottles and other reusable materials.", options: { A: "throw away", B: "give away", C: "put away", D: "take away" }, answer: "A", explanation: { correct: "A — throw away。throw away 表示扔掉或丢弃，符合环保语境。", A: "throw away reusable materials 表示把可再利用的材料扔掉。", B: "give away 表示赠送。", C: "put away 表示收起来。", D: "take away 表示拿走或带走。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Chemicals must be kept under proper ______.", options: { A: "command", B: "control", C: "management", D: "direction" }, answer: "B", explanation: { correct: "B — control。under control 表示处于控制之下，under proper control 表示受到妥善控制。", A: "command 通常指军队或人员的指挥权。", B: "under proper control 是正确搭配。", C: "under management 不能表达这里的危险物品控制状态。", D: "direction 表示方向或指导。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "A container is ______ to explode.", options: { A: "possible", B: "probable", C: "likely", D: "expected" }, answer: "C", explanation: { correct: "C — likely。be likely to do something 表示很可能做某事。", A: "possible 通常不说 is possible to explode，应说 it is possible that it will explode。", B: "probable 通常不用 probable to explode。", C: "a container is likely to explode 是正确结构。", D: "expected 表示预计会发生，语气和此处的危险可能性不完全相同。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "One member of staff ______ with a serious throat infection.", options: { A: "came down", B: "fell down", C: "went down", D: "broke down" }, answer: "A", explanation: { correct: "A — came down。come down with an illness 表示染上某种疾病。", A: "come down with flu 是常见表达。", B: "fall down 表示跌倒。", C: "go down 可以表示下降或沉没等。", D: "break down 常表示机器坏掉或人情绪崩溃。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The project is ______ to continue for many years.", options: { A: "possible", B: "likely", C: "probable", D: "certain" }, answer: "B", explanation: { correct: "B — likely。be likely to do 表示很可能会做某事，表达对未来的合理预测。", A: "possible 不能直接说 the project is possible to continue。", B: "the project is likely to continue 是正确结构。", C: "probable 一般不用 probable 加 to-infinitive。", D: "certain to continue 语法上可以，但语气变成肯定会继续，比原文的预测更强。" } }
    ]
  });
})();
