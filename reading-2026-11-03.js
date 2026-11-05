(function () {
  "use strict";

  if (readings.some((reading) => reading.date === "2026-11-03")) {
    return;
  }

  readings.push({
    date: "2026-11-03",
    title: "The Parcel Lockers That Promised Convenience",
    level: "FCE / B2",
    vocabulary: [
      { word: "plateau", meaning: "平台期；停滞阶段", example: "Demand reached a plateau after six weeks." },
      { word: "unload", meaning: "卸下（货物）", example: "Drivers could unload their vans in one place." },
      { word: "capability", meaning: "能力；功能", example: "The lockers lacked the capability to work offline." },
      { word: "security", meaning: "安全；安保", example: "The company responded to a security concern." },
      { word: "aggressive", meaning: "强势的；咄咄逼人的", example: "The company launched an aggressive advertising campaign." },
      { word: "household", meaning: "家喻户晓的；家庭的", example: "The director wanted a household name." },
      { word: "means", meaning: "方法；手段", example: "The company was by no means free to ignore complaints." },
      { word: "cheque", meaning: "支票", example: "Some business accounts paid by cheque." },
      { word: "consumer", meaning: "消费者", example: "The company had to follow consumer protection rules." },
      { word: "challenge", meaning: "挑战", example: "The director decided to rise to the challenge." },
      { word: "recently", meaning: "最近；近来", example: "The company recently installed new parcel lockers." },
      { word: "attractive", meaning: "有吸引力的；漂亮的", example: "The lockers formed an attractive row." },
      { word: "brick", meaning: "砖；砖砌的", example: "The lockers stood outside a brick supermarket." },
      { word: "seldom", meaning: "很少；不常", example: "Some customers were seldom at home." },
      { word: "interviewee", meaning: "受访者", example: "An interviewee raised a grave concern." },
      { word: "customer", meaning: "顾客；客户", example: "Some customers felt annoyed by the messages." },
      { word: "expect", meaning: "期待；预料", example: "The director expected the service to improve." },
      { word: "lawyer", meaning: "律师", example: "A lawyer pointed out the company's obligations." },
      { word: "technique", meaning: "技巧；方法", example: "An engineer developed a simple technique." },
      { word: "grave", meaning: "严重的；严肃的", example: "The newspaper interview raised a grave concern." }
    ],
    passage: `
The Parcel Lockers That Promised Convenience

For questions 1–10, read the text below and decide which answer A, B, C or D best fits each gap.

Recently, a delivery company installed an attractive row of parcel lockers outside a brick supermarket. The company expected them to help people who were seldom at home when couriers arrived.

At first, demand rose quickly, but within six weeks it reached a (1) ______: the number of regular users stopped growing.

Drivers appreciated being able to (2) ______ their vans in one place rather than travel from door to door. However, the lockers lacked the technical (3) ______ to generate collection codes without an internet connection. An engineer developed a simple technique for providing backup codes at the supermarket counter.

An interviewee for the local newspaper raised a grave concern about (4) ______: someone had already tried to force open two of the lockers.

The company's response included an (5) ______ advertising campaign, with promotional messages arriving almost every day. Its director hoped the brand would soon become a (6) ______ name, but some customers felt annoyed rather than persuaded.

A lawyer pointed out that the company was by no (7) ______ free to ignore complaints. Under existing contracts, it also had to accept payments by (8) ______ for certain business accounts and follow (9) ______ protection rules when setting late-collection charges.

The director admitted that the problems had been more serious than expected.

"Our biggest task now is to rise to the (10) ______ of making the service work for everybody," she said.

The trial demonstrated that introducing new technology is one thing; earning people's trust is quite another.
`,
    translation: `
承诺带来便利的智能包裹柜

最近，一家快递公司在一家砖砌超市外安装了一排外观漂亮的智能包裹柜。

公司希望这些储物柜能够帮助那些快递员送货时经常不在家的人。

一开始，使用需求迅速增长，但不到六周，增长就进入了平台期：固定用户的数量不再增加。

司机们很喜欢这种方式，因为他们可以在一个地方把货物从车上卸下来，而不用挨家挨户地送货。

然而，这些储物柜缺乏在没有网络连接时生成取件码的技术能力。一名工程师因此开发了一种简单的方法，让超市柜台能够提供备用取件码。

一位接受当地报纸采访的人提出了一个严重的安全隐患：已经有人试图强行打开其中两个储物柜。

公司采取的应对措施之一，是开展一场攻势很强的广告宣传活动，几乎每天都向用户推送促销信息。

公司负责人希望这个品牌很快能变得家喻户晓，但一些顾客不仅没有被说服，反而感到厌烦。

一名律师指出，公司绝不能无视顾客的投诉。

根据现有合同，对于某些商业账户，公司还必须接受支票付款；同时，在设置包裹超期存放费用时，也必须遵守消费者保护规定。

公司负责人承认，这些问题比原先预计的更加严重。

她说：“我们现在最大的任务，就是迎接让这项服务真正适用于所有人的挑战。”

这次试点说明，引入一项新技术是一回事，而赢得人们的信任则完全是另一回事。
`,
    questions: [
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", sectionInstructions: "Read the text and choose the answer A, B, C or D which best fits each gap.", question: "Within six weeks, demand reached a ______.", options: { A: "peak", B: "level", C: "plateau", D: "limit" }, answer: "C", explanation: { correct: "C — plateau。reach a plateau 表示增长一段时间后进入稳定期或平台期。", A: "peak 表示最高点，强调达到顶峰，不一定表示随后持续稳定。", B: "level 表示水平或等级，不能单凭该词表达增长进入平台期。", C: "reach a plateau 是正确固定搭配。", D: "limit 表示极限或上限，原文没有说明达到最大容量。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Drivers could ______ their vans in one place.", options: { A: "unload", B: "arrange", C: "distribute", D: "transport" }, answer: "A", explanation: { correct: "A — unload。unload a vehicle 表示从车辆上卸下货物。", A: "unload their vans 与司机把货物集中卸下的语境相符。", B: "arrange 表示安排或整理。", C: "distribute 侧重把物品分配给不同接收者。", D: "transport 表示运输货物。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The lockers lacked the technical ______ to generate collection codes offline.", options: { A: "talent", B: "strength", C: "knowledge", D: "capability" }, answer: "D", explanation: { correct: "D — capability。technical capability 表示技术能力或设备具备的某项功能。", A: "talent 通常描述人的天赋。", B: "strength 表示力量或优势，不等于技术功能。", C: "knowledge 表示知识，不适合描述设备是否能生成代码。", D: "technical capability 是正确搭配。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The interviewee raised a concern about ______.", options: { A: "comfort", B: "security", C: "convenience", D: "quality" }, answer: "B", explanation: { correct: "B — security。security 强调防止盗窃、非法进入或其他人为侵害的安全保障。", A: "comfort 表示舒适度。", B: "Someone tried to force open the lockers directly raises a security concern。", C: "convenience 表示便利性。", D: "quality 表示质量。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The company launched an ______ advertising campaign.", options: { A: "aggressive", B: "attractive", C: "sensitive", D: "cautious" }, answer: "A", explanation: { correct: "A — aggressive。aggressive advertising 表示攻势很强、咄咄逼人的广告宣传。", A: "aggressive 可形容宣传过于主动、强势。", B: "attractive 表示有吸引力，不能体现宣传过于频繁。", C: "sensitive 表示敏感的或体贴的。", D: "cautious 表示谨慎的，与高频推送相反。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The brand would soon become a ______ name.", options: { A: "family", B: "familiar", C: "household", D: "domestic" }, answer: "C", explanation: { correct: "C — household。a household name 是固定表达，表示家喻户晓的名字或品牌。", A: "family 不能替换 household name 这一习语。", B: "familiar 表示熟悉的，但不是这里的既定表达。", C: "a household name 是正确搭配。", D: "domestic 表示国内的或家用的。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The company was by no ______ free to ignore complaints.", options: { A: "cases", B: "methods", C: "ways", D: "means" }, answer: "D", explanation: { correct: "D — means。by no means 是固定表达，意思是绝不或决不是。", A: "cases 不能构成这里的固定表达。", B: "methods 表示方法。", C: "ways 虽与 means 意思接近，但不构成 by no means。", D: "by no means free 是正确表达。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "It had to accept payments by ______.", options: { A: "receipt", B: "cheque", C: "invoice", D: "voucher" }, answer: "B", explanation: { correct: "B — cheque。pay by cheque 是英式英语中常见的支付表达，表示用支票付款。", A: "receipt 是收据或付款凭证。", B: "payments by cheque 是正确搭配。", C: "invoice 是发票或付款通知。", D: "voucher 是代金券或凭证。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "It had to follow ______ protection rules.", options: { A: "consumer", B: "commercial", C: "client", D: "public" }, answer: "A", explanation: { correct: "A — consumer。consumer protection 是固定表达，意为消费者保护。", A: "consumer protection rules 是标准法律表达。", B: "commercial 表示商业的，但不构成这里的标准搭配。", C: "client 表示客户，一般不用于表示普遍的消费者保护制度。", D: "public 表示公众的，不符合语境。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The biggest task was to rise to the ______ of making the service work for everybody.", options: { A: "problem", B: "effort", C: "challenge", D: "difficulty" }, answer: "C", explanation: { correct: "C — challenge。rise to the challenge 是固定表达，表示迎接挑战、勇敢应对困难。", A: "problem 表示问题，但不构成该表达。", B: "effort 表示努力，不符合搭配。", C: "rise to the challenge 是正确搭配。", D: "difficulty 表示困难，也不能直接替代 challenge。" } }
    ]
  });
})();
