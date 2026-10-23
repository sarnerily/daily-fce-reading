(function () {
  "use strict";

  if (readings.some((reading) => reading.date === "2026-10-23")) {
    return;
  }

  readings.push({
    date: "2026-10-23",
    title: "The Theatre That Nearly Disappeared",
    level: "FCE / B2+",
    vocabulary: [
      { word: "investigate", meaning: "调查；研究", example: "Researchers investigated the theatre's history." },
      { word: "structural", meaning: "结构上的；建筑结构的", example: "The survey revealed serious structural problems." },
      { word: "pull down", meaning: "拆除；拆毁", example: "Some officials suggested pulling down the building." },
      { word: "scruffy", meaning: "邋遢的；破旧的", example: "The theatre entrance looked scruffy." },
      { word: "break with", meaning: "打破（传统）；与……决裂", example: "The group decided to break with tradition." },
      { word: "fiction", meaning: "小说；虚构作品", example: "The plan included crime-fiction evenings." },
      { word: "tartan", meaning: "方格呢；苏格兰格子花纹", example: "The exhibition contained tartan costumes." },
      { word: "millionaire", meaning: "百万富翁", example: "A local millionaire had paid for the building." },
      { word: "thread", meaning: "线索；共同主题", example: "A common thread ran through the whole event." },
      { word: "waterproof", meaning: "防水的", example: "Local shops provided waterproof materials." },
      { word: "rather", meaning: "而不是；宁可", example: "They repaired the building rather than replaced it." },
      { word: "advertise", meaning: "登广告；宣传；招聘", example: "They began to advertise for volunteers." },
      { word: "one-way", meaning: "单向的；单行的", example: "The motorcycle entered a narrow one-way street." },
      { word: "wander about", meaning: "四处闲逛；到处走动", example: "Visitors could wander about the theatre." },
      { word: "brake", meaning: "刹车；制动器", example: "The rider had to hit the brake sharply." },
      { word: "solicitor", meaning: "事务律师", example: "A solicitor offered free legal advice." },
      { word: "bare", meaning: "最低限度的；仅仅够用的", example: "They spent the bare minimum on decoration." },
      { word: "comedian", meaning: "喜剧演员", example: "Young comedians performed at the theatre." },
      { word: "acclaim", meaning: "高度赞扬；好评", example: "The festival won considerable critical acclaim." },
      { word: "regret", meaning: "后悔；遗憾", example: "The organisers do not regret the years of work." }
    ],
    passage: `
The Theatre That Nearly Disappeared

For questions 1–10, read the text below and decide which answer A, B, C or D best fits each gap.

For years, the Carlton Theatre in a quiet suburb looked almost forgotten. Its entrance was scruffy, rain came through part of the roof, and few people knew that a local millionaire had paid for the building more than a century ago.

When the council announced plans to (1) ______ the theatre's history, researchers discovered old photographs, programmes and letters. A survey also revealed serious (2) ______ problems in part of the roof. Because repairs would be expensive, some officials suggested that it would be cheaper to (3) ______ the building completely.

A local arts group disagreed. They decided to (4) ______ tradition and find new uses for the theatre instead of simply copying its old programme. Their plan included crime-fiction evenings, performances by young comedians and an exhibition containing tartan costumes from earlier productions.

The group wanted to repair the building (5) ______ replace it, so they began to (6) ______ for volunteers. A solicitor offered free legal advice, while local shops provided waterproof materials to protect the roof.

Money remained tight. The organisers spent the (7) ______ minimum on decoration, but the building slowly became usable again.

During the reopening festival, visitors could wander about the theatre and explore displays. A common (8) ______ ran through the whole event: the building had survived because different generations had found new reasons to use it.

The festival won considerable critical (9) ______, and one comedian later said it was his favourite place to perform.

The only serious incident happened outside, when a motorcycle entered the narrow one-way street too quickly and the rider had to hit the brake sharply.

Looking back, the organisers say they do not (10) ______ the years of work. Saving the theatre, they believe, gave the neighbourhood something that a new building could never have replaced.
`,
    translation: `
那座差点消失的剧院

多年来，位于一个安静郊区的卡尔顿剧院看起来几乎已经被人遗忘。

它的入口显得有些邋遢，屋顶有一部分会漏雨，而且很少有人知道，一个多世纪前，是当地一名百万富翁出资修建了这座建筑。

当市议会宣布计划调查剧院的历史时，研究人员发现了旧照片、节目单和信件。一次建筑检查还发现，部分屋顶存在严重的结构性问题。

由于维修费用十分高昂，一些官员认为，彻底拆除这座建筑可能反而更加便宜。

当地一个艺术团体并不同意。他们决定打破传统，为剧院寻找新的用途，而不是简单复制过去的节目安排。

他们的计划包括犯罪小说主题活动、年轻喜剧演员的演出，以及一个展览，其中展示过去演出使用过的方格花纹服装。

这个团体希望维修建筑，而不是将它替换掉，于是开始登广告招募志愿者。一名事务律师免费提供法律建议，当地商店则提供防水材料，用来保护屋顶。

资金依然十分紧张。组织者只花了最低限度的钱进行装饰，但剧院还是慢慢恢复到了可以正常使用的状态。

重新开放节期间，游客可以在剧院里自由走动，参观不同的展览。整个活动有一个贯穿始终的共同主题：这栋建筑之所以能够保存下来，是因为不同世代的人不断为它找到新的用途。

这个节日获得了评论界的高度赞扬。一名喜剧演员后来甚至表示，这是他最喜欢的演出场所。

唯一比较严重的意外发生在剧院外面。一辆摩托车以过快的速度驶入狭窄的单行道，骑手不得不猛踩刹车。

回顾整个过程，组织者表示，他们并不后悔多年来投入的努力。他们认为，保护这座老剧院，为社区留下了一些任何新建筑都无法真正取代的东西。
`,
    questions: [
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", sectionInstructions: "Read the text and choose the answer A, B, C or D which best fits each gap.", question: "The council announced plans to ______ the theatre's history.", options: { A: "examine", B: "investigate", C: "observe", D: "discover" }, answer: "B", explanation: { correct: "B — investigate。investigate 表示通过系统调查来弄清事情的真相、原因或历史情况。", A: "examine 表示仔细查看或检查某个具体对象。", B: "investigate the theatre's history 是正确搭配。", C: "observe 表示观察。", D: "discover 表示发现结果，而不是进行调查这一过程。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The survey revealed serious ______ problems in part of the roof.", options: { A: "architectural", B: "mechanical", C: "structural", D: "practical" }, answer: "C", explanation: { correct: "C — structural。structural problems 表示建筑结构方面的问题。", A: "architectural 主要表示建筑设计或建筑风格方面的。", B: "mechanical 表示机械方面的。", C: "structural problems 与屋顶本身的问题相符。", D: "practical 表示实际的或实用的。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "It would be cheaper to ______ the building completely.", options: { A: "pull down", B: "cut off", C: "knock out", D: "break up" }, answer: "A", explanation: { correct: "A — pull down。pull down a building 表示拆除建筑物，是常见短语动词。", A: "pull down the building 是正确表达。", B: "cut off 表示切断或中断。", C: "knock out 表示击倒、使失去知觉或淘汰。", D: "break up 表示分裂、解散或分手。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The arts group decided to ______ tradition.", options: { A: "move from", B: "turn against", C: "leave behind", D: "break with" }, answer: "D", explanation: { correct: "D — break with。break with tradition 表示打破传统、不再遵循原来的做法。", A: "move from 只是从某处移开。", B: "turn against 表示转而反对某人或某物。", C: "leave behind 表示把某物留在身后或抛在后面。", D: "break with 可以表示和传统、习惯或思想决裂。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "They wanted to repair the building ______ replace it.", options: { A: "instead", B: "rather than", C: "except for", D: "apart from" }, answer: "B", explanation: { correct: "B — rather than。A rather than B 表示做 A 而不是做 B。", A: "instead 通常需要单独使用，或构成 instead of 加名词或动名词。", B: "repair rather than replace 是正确结构。", C: "except for 表示除……之外。", D: "apart from 表示除了。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "They began to ______ for volunteers.", options: { A: "request", B: "announce", C: "advertise", D: "report" }, answer: "C", explanation: { correct: "C — advertise。advertise for somebody 表示登广告寻找或招聘某类人员。", A: "request 可以表示请求，但不能替代这里的动词结构。", B: "announce 表示宣布某事。", C: "advertise for volunteers 是固定表达。", D: "report 表示报道。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The organisers spent the ______ minimum on decoration.", options: { A: "bare", B: "plain", C: "basic", D: "empty" }, answer: "A", explanation: { correct: "A — bare。the bare minimum 表示最低限度或仅仅够用的最少数量。", A: "the bare minimum 是正确搭配。", B: "plain 表示朴素的或简单的。", C: "basic 表示基本的。", D: "empty 表示空的。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "A common ______ ran through the whole event.", options: { A: "line", B: "string", C: "route", D: "thread" }, answer: "D", explanation: { correct: "D — thread。a common thread 表示贯穿不同事物的共同主题或共同线索。", A: "line 虽可表示路线或思路，但不构成这里的固定表达。", B: "string 表示绳或线串。", C: "route 表示路线。", D: "a common thread 是正确搭配。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The festival won considerable critical ______.", options: { A: "fame", B: "applause", C: "acclaim", D: "approval" }, answer: "C", explanation: { correct: "C — acclaim。critical acclaim 表示评论界的高度赞扬或好评。", A: "fame 表示名声。", B: "applause 表示掌声。", C: "critical acclaim 是标准搭配。", D: "approval 表示赞同或批准。" } },
      { type: "multiple-choice", sectionTitle: "FCE Part 1 · Multiple-choice Cloze", question: "The organisers say they do not ______ the years of work.", options: { A: "resent", B: "regret", C: "doubt", D: "mind" }, answer: "B", explanation: { correct: "B — regret。regret 表示后悔或遗憾，do not regret the years of work 表示并不后悔多年来的努力。", A: "resent 表示对某事感到愤恨或不满。", B: "do not regret 是符合语境的表达。", C: "doubt 表示怀疑。", D: "mind 表示介意。" } }
    ]
  });
})();
