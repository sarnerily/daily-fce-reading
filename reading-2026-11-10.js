(function () {
  "use strict";

  if (readings.some((reading) => reading.date === "2026-11-10")) {
    return;
  }

  readings.push({
    date: "2026-11-10",
    title: "The Footpath That Divided a Town",
    level: "FCE / B2",
    vocabulary: [
      { word: "landowner", meaning: "土地所有者", example: "The landowner kept the title deeds." },
      { word: "permission", meaning: "许可；允许", example: "He had not given permission for the council to enter." },
      { word: "signature", meaning: "签名；署名", example: "The letter apparently bore his signature." },
      { word: "forgery", meaning: "伪造品；伪造行为", example: "An expert concluded that the letter was a forgery." },
      { word: "in place", meaning: "落实到位；准备妥当", example: "Work stopped until new procedures were in place." },
      { word: "secondary", meaning: "次要的；第二位的", example: "Wildlife protection must not be secondary to convenience." },
      { word: "discount", meaning: "折扣；优惠", example: "The operator offered a 30 per cent discount." },
      { word: "fare", meaning: "车费；票价", example: "The discount applied to the normal bus fare." },
      { word: "would rather", meaning: "宁愿；更愿意", example: "Some residents would rather leave the path closed." },
      { word: "justify", meaning: "证明……合理；为……辩护", example: "The council promised to justify public spending." },
      { word: "medieval", meaning: "中世纪的", example: "The proposal concerned a medieval footpath." },
      { word: "satellite", meaning: "卫星", example: "The route appears on satellite images." },
      { word: "pavement", meaning: "人行道", example: "The path begins beside a busy pavement." },
      { word: "vegetation", meaning: "植被", example: "The fields were covered in thick vegetation." },
      { word: "debate", meaning: "辩论；争论", example: "The plan caused a lively public debate." },
      { word: "rapid", meaning: "迅速的", example: "Interest grew rapidly after the announcement." },
      { word: "sinister", meaning: "不祥的；阴森的", example: "The discovery gave the dispute a sinister twist." },
      { word: "stressful", meaning: "令人紧张的；压力大的", example: "The public meeting was stressful." },
      { word: "occasional", meaning: "偶尔的", example: "The council suggested occasional weekend shuttle buses." },
      { word: "background", meaning: "背景资料；背景", example: "The council released background information." }
    ],
    passage: `
The Footpath That Divided a Town

For questions 1–10, read the text below and decide which answer A, B, C or D best fits each gap.

In Northbridge, a proposal to reopen a medieval footpath has caused a lively public debate. The route appears on satellite images and begins beside a busy pavement before crossing fields covered in thick vegetation. Interest grew rapidly after the council published its plans online.

One section crosses a private field. Its (1) ______, Mr Ellis, kept the title deeds and had never rented out the land. He said he had not given (2) ______ for the council to enter the field and clear the route.

Yet officials had received a letter apparently bearing his (3) ______ and agreeing to the work.

After examining the document, an expert concluded that it was a (4) ______. The discovery gave the dispute a sinister twist, although investigators warned residents against accusing anyone without evidence.

Work stopped until new checking procedures were (5) ______.

At a stressful public meeting, environmental campaigners argued that protecting wildlife must not be considered (6) ______ to making walking easier. Other residents pointed out that the existing road was unsafe for families.

The council suggested occasional weekend shuttle buses to a safer starting point. The operator promised a 30 per cent (7) ______ on the normal bus (8) ______.

However, some residents said they (9) ______ leave the old path closed than encourage large crowds.

For now, no final decision has been made. The council has released background information and promised to (10) ______ any public spending to taxpayers before work begins.

The disagreement is now about more than a path: it concerns evidence, private rights and public responsibility.
`,
    translation: `
一条让小镇产生分歧的步道

在诺斯布里奇镇，一项重新开放中世纪步道的提议引发了热烈的公众辩论。

从卫星图像中可以看到，这条路线从一条繁忙的人行道旁开始，随后穿过覆盖着茂密植被的田地。市政会在网上公布计划后，公众的兴趣迅速增长。

其中一段路线穿过一块私人田地。这块土地的所有者埃利斯先生保管着土地所有权文件，而且从未将这块土地出租给别人。他说，自己并没有允许市政会进入田地并清理道路。

然而，官员们此前收到了一封信，信上似乎有他的签名，并表示同意开展工程。

一名专家检查了这份文件后，认定它是伪造的。这一发现让整场争议蒙上了一层不祥的阴影，不过调查人员提醒居民，在没有证据之前不要随意指控任何人。

工程暂停了，直到新的文件核查程序落实到位。

在一场气氛紧张的公众会议上，环保人士认为，保护野生动物的重要性绝不能低于让行人通行更加方便这一目标。其他居民则指出，目前的道路对家庭步行者来说并不安全。

市政会建议在部分周末开设临时接驳巴士，把步行者送到一个更加安全的出发点。巴士运营商承诺，在正常车费的基础上提供七折优惠。

不过，一些居民表示，他们宁愿继续关闭原来的步道，也不愿吸引大量游客前来。

目前，市政会还没有作出最终决定。它已经公布了相关背景资料，并承诺在工程启动前向纳税人说明所有公共支出的合理性。

如今，这场分歧已经不仅仅与一条步道有关，还涉及证据、私人权利和公共责任等问题。
`,
    questions: [
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", sectionInstructions: "Read the text and choose the answer A, B, C or D which best fits each gap.", question: "Its ______, Mr Ellis, kept the title deeds.", options: { A: "caretaker", B: "tenant", C: "landlord", D: "landowner" }, answer: "D", explanation: { correct: "D — landowner。landowner 指土地所有者，title deeds 和没有出租土地的细节都支持这一身份。", A: "caretaker 是负责看管某处的人，不一定拥有土地。", B: "tenant 是租户或承租人，通常不是土地所有者。", C: "landlord 是房东或出租土地的人，文中明确说土地没有出租。", D: "landowner 符合全部信息。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "He had not given ______ for the council to enter the field.", options: { A: "instruction", B: "permission", C: "assistance", D: "invitation" }, answer: "B", explanation: { correct: "B — permission。give permission for something 表示允许某事发生。", A: "instruction 表示指示或命令。", B: "give permission for the council to enter 是正确搭配。", C: "assistance 表示帮助。", D: "invitation 表示邀请，不等于正式允许进入私人土地施工。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The letter apparently bore his ______.", options: { A: "signature", B: "autograph", C: "address", D: "handwriting" }, answer: "A", explanation: { correct: "A — signature。signature 是文件上的签名，用来表示确认或同意。", A: "bear someone's signature 是自然表达。", B: "autograph 通常指名人的签名，尤其用于留念。", C: "address 是地址，不能证明文件获本人同意。", D: "handwriting 是笔迹或书写方式，不等于正式签名。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "An expert concluded that it was a ______.", options: { A: "draft", B: "duplicate", C: "forgery", D: "photocopy" }, answer: "C", explanation: { correct: "C — forgery。forgery 指伪造文件、签名或其他物品，也指伪造行为。", A: "draft 是草稿，不意味着伪造。", B: "duplicate 是副本或复制件，不一定是假的。", C: "冒用土地所有者签名的文件是 a forgery。", D: "photocopy 是复印件，也不必然存在伪造。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Work stopped until new checking procedures were ______.", options: { A: "in place", B: "on call", C: "in control", D: "at work" }, answer: "A", explanation: { correct: "A — in place。be in place 表示已经设置妥当、准备就绪或开始具备实际作用。", A: "new procedures were in place 是正确表达。", B: "on call 通常用于随时待命的工作人员。", C: "in control 表示处于控制之中。", D: "at work 表示正在工作或正在起作用。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Protecting wildlife must not be considered ______ to making walking easier.", options: { A: "irrelevant", B: "opposite", C: "separate", D: "secondary" }, answer: "D", explanation: { correct: "D — secondary。be secondary to something 表示次于某事、重要性低于某事。", A: "irrelevant 表示不相关，环保人士谈的是优先顺序。", B: "opposite 表示相反的。", C: "separate 表示分开的或独立的。", D: "secondary 符合保护野生动物不能退居次要地位的语义。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The operator promised a 30 per cent ______ on the normal bus fare.", options: { A: "refund", B: "discount", C: "credit", D: "charge" }, answer: "B", explanation: { correct: "B — discount。a discount on something 表示某项商品或服务的价格优惠。", A: "refund 是已经支付后退还的钱。", B: "a 30 per cent discount on the fare 是正确搭配。", C: "credit 表示账户余额或购物额度。", D: "charge 表示收费或费用。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The discount applied to the normal bus ______.", options: { A: "fee", B: "cost", C: "fare", D: "payment" }, answer: "C", explanation: { correct: "C — fare。fare 指乘坐公共交通工具所支付的费用。", A: "fee 多指服务费、报名费或学费。", B: "cost 是一般性的成本或费用，不能自然替代 bus fare。", C: "bus fare 是标准搭配。", D: "payment 指付款行为或款项，不特指乘车票价。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Some residents said they ______ leave the old path closed than encourage large crowds.", options: { A: "would rather", B: "had better", C: "would prefer", D: "might" }, answer: "A", explanation: { correct: "A — would rather。would rather do A than do B 表示宁愿做 A，也不愿做 B。", A: "would rather leave ... than encourage ... 是正确结构。", B: "had better 表示最好做某事，通常用于建议或警告。", C: "would prefer 通常接 to do，如 would prefer to leave。", D: "might 表示可能性，不构成偏好比较。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The council promised to ______ any public spending to taxpayers.", options: { A: "record", B: "estimate", C: "allocate", D: "justify" }, answer: "D", explanation: { correct: "D — justify。justify 表示证明某种决定、行为或支出是合理的、正当的。", A: "record 表示记录费用，不等于证明支出合理。", B: "estimate 表示估算费用，不说明为什么值得花。", C: "allocate 表示分配资金，不等于向公众解释必要性。", D: "justify public spending 是正确搭配。" } }
    ]
  });
})();
