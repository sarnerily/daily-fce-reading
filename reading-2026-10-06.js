(function () {
  "use strict";

  if (readings.some((reading) => reading.date === "2026-10-06")) {
    return;
  }

  readings.push({
    date: "2026-10-06",
    title: "A Matinee with a Difference",
    level: "FCE / B2+",
    vocabulary: [
      { word: "matinee", meaning: "日场演出；午后场", example: "The local theatre held a charity matinee." },
      { word: "carry out", meaning: "执行；进行", example: "Staff had to carry out a final safety check." },
      { word: "comprehension", meaning: "理解；理解能力", example: "The programme notes improved their comprehension of the story." },
      { word: "sign up for", meaning: "报名参加", example: "Visitors could sign up for an acting workshop." },
      { word: "appreciate", meaning: "充分理解；意识到；欣赏", example: "I began to appreciate how much preparation the comedy required." },
      { word: "success", meaning: "成功", example: "The workshop had proved a great success." },
      { word: "as a whole", meaning: "整体上；总体而言", example: "Looking at the event as a whole, the organisers were delighted." },
      { word: "entry", meaning: "参赛作品；参赛项目", example: "Every entry could be submitted online." }
    ],
    passage: `
A Matinee with a Difference

For questions 1–8, read the text below and decide which answer A, B, C or D best fits each gap.

Last Saturday, our local theatre held a charity matinee to raise money for a project protecting wildlife and the Earth. Before the audience arrived, staff had to (1) ______ a final safety check. A council representative even measured the width of an emergency exit and checked every sign.

The play was an amusing story about a man who tried to rob a bank and somehow ended up on a spaceship, wondering whether aliens really exist. Some younger children found the plot confusing, but the programme notes improved their (2) ______ of the story.

During the interval, volunteers sold lemonade, while one actor with a headache took a pill backstage.

After the show, visitors could (3) ______ up for a short acting workshop. I was surprised by the level of skill involved and began to (4) ______ how much preparation even a light comedy requires.

The coach was careful not to discourage nervous beginners. By the end, the workshop had proved a great (5) ______.

Looking at the event as a (6) ______, the organisers were delighted. In the (7) ______, they hope to hold a youth drama competition, with every (8) ______ submitted online.
`,
    translation: `
标题：一个不同寻常的午后场

上周六，我们当地的剧院举办了一场慈善午后演出，为一个保护野生动物和地球的项目筹款。

在观众到来之前，工作人员必须进行最后一次安全检查。当地市政部门的一名代表甚至测量了一个紧急出口的宽度，并检查了所有的标志。

这出戏讲了一个非常有趣的故事：一个男人试图抢劫银行，却不知怎么跑到了一艘宇宙飞船上，并开始思考外星人究竟是否真的存在。一些年纪较小的孩子觉得故事情节有点难懂，不过节目单上的说明帮助他们更好地理解了故事。

中场休息时，志愿者出售柠檬水，而一名头痛的演员则在后台吃了一片药。

演出结束以后，观众还可以报名参加一个简短的表演体验活动。

我没有想到，表演竟然需要这么高的技巧，也开始真正意识到，即使是一部轻松的喜剧，也需要大量准备工作。

教练很注意不让那些紧张的初学者感到气馁。活动结束时，这个工作坊已经被证明非常成功。

从整体上看，组织者对这次活动非常满意。

他们希望未来还能举办一次青少年戏剧比赛，而且所有参赛作品都可以通过网络提交。
`,
    questions: [
      {
        type: "multiple-choice",
        sectionTitle: "FCE Part 1 · Multiple-choice Cloze",
        sectionInstructions: "Read the text and choose the answer A, B, C or D which best fits each gap.",
        question: "Staff had to ______ a final safety check.",
        options: { A: "make", B: "carry out", C: "put through", D: "work out" },
        answer: "B",
        explanation: {
          correct: "B — carry out。carry out a check 是常见搭配，表示进行、执行检查。",
          A: "make 可以和很多名词搭配，但这里不如 carry out a safety check 自然。",
          B: "carry out a check 表示进行检查。",
          C: "put through 常表示使某人经历某事或接通电话。",
          D: "work out 常表示解决、算出或制定。"
        }
      },
      {
        type: "multiple-choice",
        sectionTitle: "FCE Part 1 · Multiple-choice Cloze",
        question: "The programme notes improved their ______ of the story.",
        options: { A: "comprehension", B: "awareness", C: "recognition", D: "knowledge" },
        answer: "A",
        explanation: {
          correct: "A — comprehension。comprehension 表示理解或理解能力，reading comprehension 就是阅读理解。",
          A: "comprehension 最准确地表示孩子是否理解故事内容。",
          B: "awareness 主要表示意识到某件事情存在。",
          C: "recognition 主要表示认出、识别或认可。",
          D: "knowledge 表示知识或了解，但这里重点是理解故事。"
        }
      },
      {
        type: "multiple-choice",
        sectionTitle: "FCE Part 1 · Multiple-choice Cloze",
        question: "Visitors could ______ up for a short acting workshop.",
        options: { A: "mark", B: "write", C: "sign", D: "put" },
        answer: "C",
        explanation: {
          correct: "C — sign。sign up for something 是固定短语，表示报名参加。",
          A: "mark up 不是报名参加的意思。",
          B: "write up 表示写成或整理成文字。",
          C: "sign up for a course、competition 或 workshop 都表示报名参加。",
          D: "put up 不能构成这里需要的固定搭配。"
        }
      },
      {
        type: "multiple-choice",
        sectionTitle: "FCE Part 1 · Multiple-choice Cloze",
        question: "I began to ______ how much preparation even a light comedy requires.",
        options: { A: "appreciate", B: "admire", C: "respect", D: "value" },
        answer: "A",
        explanation: {
          correct: "A — appreciate。这里的 appreciate 表示充分理解或意识到。",
          A: "作者参加活动后真正意识到表演需要大量准备。",
          B: "admire 表示钦佩或赞赏。",
          C: "respect 表示尊敬或尊重。",
          D: "value 表示重视或认为某物有价值。"
        }
      },
      {
        type: "multiple-choice",
        sectionTitle: "FCE Part 1 · Multiple-choice Cloze",
        question: "The workshop had proved a great ______.",
        options: { A: "victory", B: "success", C: "achievement", D: "result" },
        answer: "B",
        explanation: {
          correct: "B — success。prove a success 是常见搭配，表示结果证明很成功。",
          A: "victory 强调比赛、战争或竞争中的胜利。",
          B: "success 用于评价整个 workshop 办得很成功。",
          C: "achievement 强调通过努力取得的具体成就。",
          D: "result 泛指结果，不能形成这里最自然的搭配。"
        }
      },
      {
        type: "multiple-choice",
        sectionTitle: "FCE Part 1 · Multiple-choice Cloze",
        question: "Looking at the event as a ______, the organisers were delighted.",
        options: { A: "total", B: "complete", C: "entire", D: "whole" },
        answer: "D",
        explanation: {
          correct: "D — whole。as a whole 是固定表达，表示从整体上看或总体而言。",
          A: "total 不能替换固定表达 as a whole。",
          B: "complete 不能构成这里的自然搭配。",
          C: "entire 也不能替换 as a whole。",
          D: "as a whole 表示把事件作为一个整体来评价。"
        }
      },
      {
        type: "multiple-choice",
        sectionTitle: "FCE Part 1 · Multiple-choice Cloze",
        question: "In the ______, they hope to hold a youth drama competition.",
        options: { A: "future", B: "forward", C: "later", D: "coming" },
        answer: "A",
        explanation: {
          correct: "A — future。in the future 是表示将来或未来的固定表达。",
          A: "in the future 表示在将来。",
          B: "forward 不能单独放在 in the 后面表示未来。",
          C: "later 表示稍后，但不能说 in the later。",
          D: "coming 通常需要修饰名词，例如 in the coming years。"
        }
      },
      {
        type: "multiple-choice",
        sectionTitle: "FCE Part 1 · Multiple-choice Cloze",
        question: "Every ______ can be submitted online.",
        options: { A: "entrance", B: "admission", C: "entry", D: "access" },
        answer: "C",
        explanation: {
          correct: "C — entry。这里 entry 表示参赛作品或参赛项目。",
          A: "entrance 表示入口或进入。",
          B: "admission 表示准许进入或入场费。",
          C: "entry 可以表示比赛收到的参赛作品。",
          D: "access 表示进入、使用某处或某物的机会或权利。"
        }
      }
    ]
  });
})();
