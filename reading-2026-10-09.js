(function () {
  "use strict";

  if (readings.some((reading) => reading.date === "2026-10-09")) {
    return;
  }

  readings.push({
    date: "2026-10-09",
    title: "The Harbour House Reopens",
    level: "FCE / B2+",
    vocabulary: [
      { word: "at the request of", meaning: "应……的请求", example: "At the request of the council, the house was reopened." },
      { word: "pile up", meaning: "积累；堆积", example: "Repair costs began to pile up." },
      { word: "membership", meaning: "会员人数；会员资格", example: "The society's membership fell sharply." },
      { word: "sore throat", meaning: "喉咙痛", example: "One volunteer continued working despite a sore throat." },
      { word: "get through", meaning: "通过；完成", example: "The team had to get through a final inspection." },
      { word: "succeed in", meaning: "成功做到", example: "The organisers succeeded in opening on time." },
      { word: "power failure", meaning: "停电；电力故障", example: "A brief power failure caused trouble." },
      { word: "as a whole", meaning: "整体上；总体而言", example: "Taken as a whole, the weekend was a success." },
      { word: "portfolio", meaning: "作品集；档案", example: "The display included a portfolio of old photographs." },
      { word: "heritage", meaning: "文化遗产", example: "The café debate concerned the building's heritage character." }
    ],
    passage: `
The Harbour House Reopens

For questions 1–8, read the text below and decide which answer A, B, C or D best fits each gap.

At the request of the town council, a local heritage society recently reopened Harbour House, a handsome mansion beside the old port. Several earlier plans had failed because repair costs began to pile up, while the society's membership fell from more than 400 people to fewer than 200.

The new committee, however, thought the building was worth saving. An investigator studied its structure, while old aerial photographs showed where a wartime bomb had damaged the roof. Volunteers sewed curtains, repaired furniture and used leftover wood to make benches. One volunteer even continued working despite a sore throat.

Before the public could enter, the team still had to get through a final safety inspection.

There was also an argument over the café. Some members feared that selling pie and whisky-related souvenirs would spoil the building's heritage character. Others believed the income was necessary.

In the end, the organisers succeeded in opening on time. A brief power failure caused trouble on the first afternoon, but visitors simply moved downstairs until the lights returned.

Taken as a whole, the weekend proved a great success. The most popular display was a portfolio of old port photographs, including one of a young sailor giving his wife a kiss beside the bridge.
`,
    translation: `
海港老宅重新开放

应镇议会的请求，当地一家文化遗产协会最近重新开放了“海港老宅”——一座坐落在旧港口旁、十分漂亮的大宅。

过去曾有过几次改造计划，但都失败了，因为维修费用不断累积，与此同时，协会的会员人数也从400多人下降到了不足200人。

不过，新一届委员会认为，这座建筑值得保存。一名调查人员检查了它的结构，而一些旧的航拍照片则显示出战争期间一枚炸弹曾经破坏过屋顶的位置。

志愿者们缝制窗帘、修理家具，还利用维修后剩下的木料制作长椅。一名志愿者甚至在喉咙痛的情况下仍继续工作。

不过，在公众可以进入之前，团队还必须通过最后一次安全检查。

大家对咖啡馆也发生过争论。一些会员担心，出售馅饼以及与威士忌有关的纪念品会破坏这栋建筑的文化遗产氛围；另一些人则认为，这笔收入非常有必要。

最终，组织者成功地按时开放了老宅。第一天下午短暂的停电造成了一些麻烦，不过游客只是转移到了楼下，直到灯光恢复。

总体来看，这个周末活动取得了很大的成功。最受欢迎的展品是一套旧港口照片作品集，其中一张照片拍的是一名年轻水手在桥边亲吻自己的妻子。
`,
    questions: [
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", sectionInstructions: "Read the text and choose the answer A, B, C or D which best fits each gap.", question: "At the ______ of the town council, a local heritage society reopened Harbour House.", options: { A: "demand", B: "appeal", C: "request", D: "wish" }, answer: "C", explanation: { correct: "C — request。at the request of somebody 是固定表达，表示应某人的请求。", A: "demand 表示强烈要求。", B: "appeal 表示呼吁或请求帮助。", C: "at the request of 是正确搭配。", D: "wish 不能自然构成这里的固定表达。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Repair costs began to ______.", options: { A: "pile up", B: "take over", C: "break down", D: "turn out" }, answer: "A", explanation: { correct: "A — pile up。pile up 可以表示费用、账单或工作不断积累。", A: "pile up 表示不断积累。", B: "take over 表示接管。", C: "break down 表示出故障或分解。", D: "turn out 表示结果是。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The society's ______ fell from more than 400 people to fewer than 200.", options: { A: "admission", B: "membership", C: "attendance", D: "participation" }, answer: "B", explanation: { correct: "B — membership。这里指协会的会员人数或会员构成。", A: "admission 表示进入资格或门票。", B: "membership 可以表示全体会员。", C: "attendance 表示出席人数。", D: "participation 表示参与。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "One volunteer continued working despite a ______ throat.", options: { A: "painful", B: "hurt", C: "sore", D: "weak" }, answer: "C", explanation: { correct: "C — sore。a sore throat 是表示喉咙痛的固定搭配。", A: "painful 在这里不如 sore throat 地道。", B: "hurt 不能这样修饰 throat。", C: "sore throat 是常见表达。", D: "weak throat 不是自然搭配。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The team still had to ______ a final safety inspection.", options: { A: "get across", B: "get over", C: "get by", D: "get through" }, answer: "D", explanation: { correct: "D — get through。这里表示顺利通过检查。", A: "get across 表示把意思讲清楚。", B: "get over 表示克服或恢复。", C: "get by 表示勉强应付。", D: "get through an inspection 表示通过检查。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The organisers ______ in opening on time.", options: { A: "achieved", B: "succeeded", C: "managed", D: "completed" }, answer: "B", explanation: { correct: "B — succeeded。结构是 succeed in doing something，因此是 succeeded in opening。", A: "achieve 不能这样接 in opening。", B: "succeed in doing 是正确结构。", C: "manage 应接 to do：managed to open。", D: "complete 不能构成这里的表达。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "A brief power ______ caused trouble on the first afternoon.", options: { A: "failure", B: "defeat", C: "mistake", D: "loss" }, answer: "A", explanation: { correct: "A — failure。power failure 表示停电或电力故障。", A: "power failure 是固定搭配。", B: "defeat 表示竞争中的失败。", C: "mistake 表示错误。", D: "loss 表示损失，不表示电力故障。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "Taken as a ______, the weekend proved a great success.", options: { A: "victory", B: "result", C: "success", D: "achievement" }, answer: "C", explanation: { correct: "C — success。prove a success 表示事实证明是成功的。", A: "victory 强调战胜对手。", B: "result 只是泛指结果。", C: "prove a success 是自然搭配。", D: "achievement 强调具体取得的成就。" } }
    ]
  });
})();
