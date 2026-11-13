(function () {
  "use strict";

  if (readings.some((reading) => reading.date === "2026-11-13")) {
    return;
  }

  readings.push({
    date: "2026-11-13",
    title: "When the Ferry Company Went Digital",
    level: "FCE / B2",
    vocabulary: [
      { word: "preparation", meaning: "准备；筹备", example: "The app was introduced in preparation for summer." },
      { word: "position", meaning: "情况；条件；位置", example: "Some residents were not in a position to use smartphones." },
      { word: "take for", meaning: "把……误认为", example: "Passengers took the screens for advertisements." },
      { word: "wear off", meaning: "逐渐消失；减弱", example: "The initial excitement began to wear off." },
      { word: "restore", meaning: "恢复；重建", example: "The company needed to restore public confidence." },
      { word: "whereas", meaning: "然而；而；相比之下", example: "Paper notices were confirmed, whereas the app showed predictions." },
      { word: "register for", meaning: "登记参加；报名", example: "Residents could register for the lessons." },
      { word: "pay off", meaning: "取得回报；奏效", example: "A few weeks later, the efforts paid off." },
      { word: "delivery", meaning: "递送；送货", example: "The company introduced a home delivery service." },
      { word: "look ahead", meaning: "展望未来；提前考虑", example: "Managers now look ahead to the winter season." },
      { word: "comprehensive", meaning: "全面的；综合的", example: "Managers realised they needed a comprehensive plan." },
      { word: "emergence", meaning: "出现；兴起", example: "The emergence of online shopping brought extra parcels." },
      { word: "deal in", meaning: "经营；买卖", example: "Local shops dealt in seafood and other goods." },
      { word: "quay", meaning: "码头", example: "The records were kept at the quay." },
      { word: "stevedore", meaning: "码头装卸工", example: "A stevedore checked each delivery." },
      { word: "handwriting", meaning: "笔迹；手写字体", example: "Workers recognised one another's handwriting." },
      { word: "ferry", meaning: "渡轮；渡船", example: "The ferry company had used paper records for decades." },
      { word: "all sorts of", meaning: "各种各样的", example: "The shops sold all sorts of goods." },
      { word: "wave", meaning: "一波；浪潮", example: "Online shopping brought a wave of extra parcels." },
      { word: "interact", meaning: "互动；相互作用", example: "Passengers could interact with a live map." }
    ],
    passage: `
When the Ferry Company Went Digital

For questions 1–10, read the text below and decide which answer A, B, C or D best fits each gap.

For more than eighty years, the Westhaven ferry company kept its records on paper. At the quay, a stevedore checked each delivery against a notebook, while experienced workers could recognise one another's handwriting. Local shops that deal in seafood and all sorts of other goods depended on the crossing.

The emergence of online shopping brought a wave of extra parcels. Managers realised they needed a comprehensive plan.

In (1) ______ for the busy summer season, they introduced an app for booking crossings and tracking packages. Passengers could interact with a live map, but some older residents were not in a (2) ______ to use smartphones.

At first, several passengers took the app's colourful screens (3) ______ advertisements rather than useful information.

When the initial excitement began to (4) ______ off, complaints increased. The app sometimes showed a ferry as being on time when it was actually delayed.

The company needed to (5) ______ public confidence. Paper notices gave confirmed departure times, (6) ______ the app displayed predictions that were not always reliable.

Staff kept a traditional booking desk and arranged free lessons. Residents could (7) ______ for these lessons at the harbour office.

A few weeks later, the efforts (8) ______ off: the number of missed crossings fell. The company also introduced a home (9) ______ service, taking parcels directly from the quay to customers' doors.

Managers now (10) ______ ahead to the winter season.

The experience demonstrated that introducing better technology is not enough. People must also understand how to use it.
`,
    translation: `
当渡轮公司走向数字化

八十多年来，韦斯特黑文渡轮公司一直使用纸质文件记录业务。

在码头上，一名码头装卸工会根据笔记本核对每批送来的货物，而经验丰富的员工甚至能够辨认彼此的笔迹。当地经营海鲜和各种其他商品的商店，都依赖这条渡轮航线。

随着网络购物的兴起，包裹数量出现了一波增长。管理人员意识到，他们需要制定一个全面的计划。

为了迎接繁忙的夏季，公司推出了一款应用程序，用于预订渡轮航班和追踪包裹。乘客可以与实时地图进行互动，但一些老年居民并不具备使用智能手机的条件。

起初，一些乘客甚至把应用程序里色彩鲜艳的页面误认为是广告，而不是有用的信息。

随着最初的新鲜感逐渐消退，投诉开始增加。应用程序有时显示渡轮准点，但实际上渡轮已经晚点。

公司需要重新恢复公众的信任。纸质公告提供的是已经确认的出发时间，而应用程序显示的则是并不总是可靠的预测时间。

工作人员保留了传统的人工订票柜台，并安排了免费的培训课程。居民可以在港口办公室报名参加这些课程。

几周以后，这些努力终于取得了成效：错过渡轮航班的情况减少了。公司还推出了送货上门服务，把包裹直接从码头送到顾客家门口。

如今，管理人员已经开始为即将到来的冬季作准备。

这段经历表明，仅仅引入更先进的技术还不够。人们还必须理解如何使用这些技术。
`,
    questions: [
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", sectionInstructions: "Read the text and choose the answer A, B, C or D which best fits each gap.", question: "In ______ for the busy summer season, the company introduced an app.", options: { A: "expectation", B: "preparation", C: "response", D: "advance" }, answer: "B", explanation: { correct: "B — preparation。in preparation for something 是固定搭配，表示为某事做准备。", A: "expectation 可以说 in expectation of，但不是 in expectation for。", B: "in preparation for the busy summer season 是正确表达。", C: "response 通常使用 in response to。", D: "advance 通常使用 in advance of。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Some older residents were not in a ______ to use smartphones.", options: { A: "shape", B: "place", C: "state", D: "position" }, answer: "D", explanation: { correct: "D — position。be in a position to do something 表示具备做某事的条件、能力或机会。", A: "shape 通常表示形状或状况。", B: "in a place to do 不是这里的标准表达。", C: "state 常见于 in a state of...，不能自然替换此结构。", D: "in a position to use smartphones 是固定表达。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Passengers took the app's screens ______ advertisements.", options: { A: "for", B: "with", C: "into", D: "over" }, answer: "A", explanation: { correct: "A — for。take A for B 表示把 A 误认为 B。", A: "took the screens for advertisements 是正确结构。", B: "with 不能构成这里的误认结构。", C: "take somebody into 通常表示带某人进入某处。", D: "take over 表示接管。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The initial excitement began to ______ off.", options: { A: "fade", B: "break", C: "wear", D: "move" }, answer: "C", explanation: { correct: "C — wear。wear off 表示某种感觉或效果逐渐消失、减弱。", A: "fade 通常使用 fade away，不是这里的 fade off。", B: "break off 通常表示中断。", C: "the excitement began to wear off 是正确表达。", D: "move off 通常表示离开某处。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The company needed to ______ public confidence.", options: { A: "restore", B: "return", C: "repair", D: "resume" }, answer: "A", explanation: { correct: "A — restore。restore confidence 表示恢复信心或重建信任。", A: "restore public confidence 是常见搭配。", B: "return 表示返回或归还，不能直接替换 restore confidence。", C: "repair 常用于维修具体物品。", D: "resume 表示重新开始中断的活动。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Paper notices gave confirmed times, ______ the app displayed predictions.", options: { A: "unless", B: "despite", C: "therefore", D: "whereas" }, answer: "D", explanation: { correct: "D — whereas。whereas 用于比较两种不同或相反的情况，常译为然而、而或相比之下。", A: "unless 表示除非，属于条件关系。", B: "despite 是介词，后面不能直接接完整句子。", C: "therefore 表示因此，不能用逗号这样连接两个独立分句。", D: "whereas 正好引出纸质公告和应用程序之间的对比。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Residents could ______ for the free lessons.", options: { A: "register", B: "join", C: "attend", D: "enter" }, answer: "A", explanation: { correct: "A — register。register for something 表示注册、登记参加。", A: "register for a course 或 lesson 是常见搭配。", B: "join 通常直接说 join a class，不需要 for。", C: "attend 直接接 a lesson。", D: "enter 可表示进入或参加某些比赛，但不自然地说 enter for these lessons。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "A few weeks later, the efforts ______ off.", options: { A: "broke", B: "paid", C: "set", D: "called" }, answer: "B", explanation: { correct: "B — paid。pay off 表示努力取得回报或最终取得好结果，过去式为 paid off。", A: "break off 通常表示中断。", B: "the efforts paid off 与错过渡轮次数下降的结果相符。", C: "set off 通常表示出发或引发。", D: "call off 表示取消。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The company introduced a home ______ service.", options: { A: "transport", B: "dispatch", C: "delivery", D: "collection" }, answer: "C", explanation: { correct: "C — delivery。home delivery 是固定搭配，表示送货上门。", A: "transport 强调物品或人员的移动。", B: "dispatch 强调从发送方发货，不保证送到客户家中。", C: "home delivery service 符合把包裹送到客户门口的情境。", D: "collection 表示收取或收集，方向通常与送货相反。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Managers now ______ ahead to the winter season.", options: { A: "watch", B: "reach", C: "observe", D: "look" }, answer: "D", explanation: { correct: "D — look。look ahead to something 表示展望未来或提前考虑未来的事情。", A: "watch 表示观看或注视。", B: "reach 表示到达或达到。", C: "observe 表示观察。", D: "look ahead to the winter season 是正确搭配。" } }
    ]
  });
})();
