(function () {
  "use strict";

  if (readings.some((reading) => reading.date === "2026-11-06")) {
    return;
  }

  readings.push({
    date: "2026-11-06",
    title: "Saving Recipes from the Past",
    level: "FCE / B2",
    vocabulary: [
      { word: "infestation", meaning: "虫害；害虫大量滋生", example: "One box contained a serious infestation of insects." },
      { word: "criticism", meaning: "批评；批评意见", example: "The library came under criticism for accepting the books." },
      { word: "borrow", meaning: "借入；借用", example: "Readers could borrow magnifying glasses from the desk." },
      { word: "free of charge", meaning: "免费；不收费", example: "Digital copies were available free of charge." },
      { word: "appropriate", meaning: "合适的；恰当的", example: "Experts chose appropriate cleaning methods." },
      { word: "reveal", meaning: "揭示；显露", example: "A laser scanner revealed almost invisible details." },
      { word: "consult", meaning: "咨询；请教", example: "Staff would consult a specialist about delicate documents." },
      { word: "incomplete", meaning: "不完整的；不完全的", example: "Many recipes were incomplete." },
      { word: "provide for", meaning: "为……作准备；为……预留资源", example: "The library provided for future repair costs." },
      { word: "imagination", meaning: "想象力；创造力", example: "The recipes showed remarkable imagination." },
      { word: "public", meaning: "公共的；公众的", example: "A public library launched the project." },
      { word: "courier", meaning: "快递员；信使", example: "A courier delivered several boxes of old cookbooks." },
      { word: "furry", meaning: "毛茸茸的", example: "The cake was shaped like a furry animal." },
      { word: "irrational", meaning: "不合常理的；不理性的", example: "The recipe sounded almost irrational." },
      { word: "powder", meaning: "粉末", example: "Some books contained traces of cooking powder." },
      { word: "corridor", meaning: "走廊；过道", example: "The boxes were stored beside a quiet corridor." },
      { word: "soil", meaning: "泥土；土壤", example: "Some pages had traces of soil on them." },
      { word: "web", meaning: "蜘蛛网；网状物", example: "Spiders had built webs in the damp rooms." },
      { word: "laser", meaning: "激光；激光器", example: "The team used a laser scanner." },
      { word: "confident", meaning: "有信心的；自信的", example: "The project leader was confident the collection would grow." }
    ],
    passage: `
Saving Recipes from the Past

For questions 1–10, read the text below and decide which answer A, B, C or D best fits each gap.

A public library has launched an unusual project to preserve handwritten recipes collected from local families.

The idea began when a courier delivered several boxes of old cookbooks. Unfortunately, one box contained a serious (1) ______ of insects, and some pages were covered with tiny holes.

The library soon came under (2) ______ for accepting the books without checking their condition.

However, the staff were determined to save as much material as possible. Readers could (3) ______ special magnifying glasses from the library desk, while digital copies were made available free of (4) ______.

The project required careful planning. Some books contained traces of soil and cooking powder, while others had been stored in damp rooms where spiders had built webs.

Experts helped the team choose the most (5) ______ methods for cleaning delicate paper. They also used a laser scanner to (6) ______ details that were almost invisible to the human eye.

Whenever staff were uncertain about a document, they would (7) ______ a specialist rather than risk damaging it.

Many recipes were (8) ______, with missing ingredients or instructions. Instead of guessing, the team invited local families to share their memories.

The library also set aside money to (9) ______ future repairs and equipment costs.

One particularly unusual recipe described a cake shaped like a furry animal. It sounded almost irrational, but photographs proved it had really existed.

The project leader remains confident that the collection will continue to grow.

"These recipes show remarkable (10) ______," she explained. "They remind us that cooking is about creativity as well as food."
`,
    translation: `
拯救过去的食谱

一家公共图书馆最近启动了一个不同寻常的项目，目的是保存从当地家庭收集来的手写食谱。

这个想法始于一名快递员送来的几箱旧食谱书。不幸的是，其中一箱出现了严重的虫害，一些书页上布满了细小的孔洞。

由于没有事先检查这些书的状况，图书馆很快受到了批评。

不过，工作人员决心尽可能多地保存这些资料。读者可以从图书馆服务台借用专用放大镜，而数字化副本则可以免费使用。

这个项目需要精心规划。有些书上留有泥土和烹饪用粉末的痕迹；另一些书则曾被存放在潮湿的房间里，蜘蛛甚至已经在那里结了网。

专家帮助团队选择最合适的方法来清洁脆弱的旧纸张。他们还使用激光扫描仪来显示那些人眼几乎无法看到的细节。

每当工作人员对某份文件存在疑问时，他们都会先咨询专业人员，而不是冒险损坏它。

许多食谱都不完整，缺少某些食材或制作步骤。团队没有随意猜测，而是邀请当地家庭分享他们的记忆。

图书馆还留出了一部分资金，为未来的维修和设备费用作准备。

其中一份特别奇怪的食谱介绍了一种做成毛茸茸动物形状的蛋糕。听起来几乎有些不合常理，但照片证明，这种蛋糕过去确实存在。

项目负责人仍然相信，这批收藏将继续增加。

她解释说：“这些食谱展现了非凡的想象力。它们提醒我们，烹饪不仅与食物有关，也与创造力有关。”
`,
    questions: [
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", sectionInstructions: "Read the text and choose the answer A, B, C or D which best fits each gap.", question: "One box contained a serious ______ of insects.", options: { A: "invasion", B: "infection", C: "infestation", D: "outbreak" }, answer: "C", explanation: { correct: "C — infestation。infestation 表示害虫、老鼠等大量出没或滋生，常强调它们造成了问题。", A: "invasion 表示侵入或入侵，不如 infestation 准确表达害虫在物品中滋生。", B: "infection 通常用于疾病、细菌或病毒感染。", C: "an infestation of insects 是自然搭配。", D: "outbreak 常用于疾病、火灾或暴力事件突然爆发。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The library soon came under ______.", options: { A: "judgement", B: "criticism", C: "disagreement", D: "complaint" }, answer: "B", explanation: { correct: "B — criticism。come under criticism 表示受到批评。", A: "judgement 表示判断或评价，不是这里表达公众批评的自然搭配。", B: "come under criticism 是固定表达。", C: "disagreement 表示意见不一致，通常说 disagreement over 或 about something。", D: "complaint 表示投诉，通常说 receive complaints。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Readers could ______ special magnifying glasses from the library desk.", options: { A: "lend", B: "hire", C: "loan", D: "borrow" }, answer: "D", explanation: { correct: "D — borrow。borrow something from somebody or somewhere 表示向某人或从某处借入某物。", A: "lend 表示借出，主体方向相反。", B: "hire 表示租用，通常涉及付费租赁。", C: "loan 作为动词时通常表示由拥有者提供借用。", D: "borrow glasses from the library desk 是正确表达。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Digital copies were made available free of ______.", options: { A: "charge", B: "cost", C: "payment", D: "expense" }, answer: "A", explanation: { correct: "A — charge。free of charge 是固定搭配，意思是免费、不收取费用。", A: "free of charge 是正确表达。", B: "cost 表示费用或成本，但不能替换这个固定搭配。", C: "payment 表示付款。", D: "expense 表示开支或费用。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Experts helped choose the most ______ methods for cleaning delicate paper.", options: { A: "convenient", B: "appropriate", C: "comfortable", D: "acceptable" }, answer: "B", explanation: { correct: "B — appropriate。appropriate 表示适合特定情况的或恰当的。", A: "convenient 表示方便，侧重操作是否省事。", B: "appropriate methods 适合这里根据纸张特性选择方法的语境。", C: "comfortable 通常用于人、衣物或环境。", D: "acceptable 强调达到最低可接受标准，而非最适合保护脆弱纸张。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "A laser scanner was used to ______ almost invisible details.", options: { A: "display", B: "announce", C: "reveal", D: "uncover" }, answer: "C", explanation: { correct: "C — reveal。reveal 表示揭示或显露原本不容易看到的信息或细节。", A: "display 侧重把内容展示出来。", B: "announce 通常用于宣布消息或决定。", C: "reveal details 与扫描技术使细节显现的语境最贴切。", D: "uncover 也可表示揭露，但这里 reveal 更自然。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "They would ______ a specialist rather than risk damaging the document.", options: { A: "consult", B: "advise", C: "recommend", D: "suggest" }, answer: "A", explanation: { correct: "A — consult。consult somebody 表示向某位专家咨询。", A: "consult a doctor、lawyer 或 expert 都是常见搭配。", B: "advise 表示给别人提供建议，与这里的咨询方向相反。", C: "recommend 表示推荐。", D: "suggest 表示建议或提出。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Many recipes were ______, with missing ingredients or instructions.", options: { A: "unfinished", B: "limited", C: "imperfect", D: "incomplete" }, answer: "D", explanation: { correct: "D — incomplete。incomplete 表示不完整、缺少必要部分，直接对应 missing ingredients or instructions。", A: "unfinished 更强调一项工作尚未完成。", B: "limited 表示有限的。", C: "imperfect 表示不完美或有缺陷，不一定缺失内容。", D: "incomplete 是正确表达。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The library set aside money to ______ future repairs and equipment costs.", options: { A: "prepare", B: "provide for", C: "supply", D: "arrange" }, answer: "B", explanation: { correct: "B — provide for。provide for something 表示为将来的需要作准备或预留资源。", A: "prepare 通常需要 prepare for something，不能直接替换。", B: "provide for future repairs 表示提前为费用作准备。", C: "supply 通常需要明确供应的对象或物品。", D: "arrange 表示安排，不直接这样搭配费用。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "These recipes show remarkable ______.", options: { A: "thought", B: "fantasy", C: "imagination", D: "invention" }, answer: "C", explanation: { correct: "C — imagination。imagination 表示想象力或创造力，适合赞扬食谱的创意。", A: "thought 表示思想或考虑，不能充分表达创造性。", B: "fantasy 常指脱离现实的幻想。", C: "show remarkable imagination 是自然表达。", D: "invention 侧重具体发明成果。" } }
    ]
  });
})();
