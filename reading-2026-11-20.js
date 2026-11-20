(function () {
  "use strict";

  if (readings.some((reading) => reading.date === "2026-11-20")) {
    return;
  }

  readings.push({
    date: "2026-11-20",
    type: "part6",
    exerciseType: "gapped-text",
    title: "The Science Behind a Movie Disaster",
    level: "B2 / FCE",
    pointsPerQuestion: 2,
    totalScore: 12,
    vocabulary: [
      { word: "cosmetic", partOfSpeech: "adj.", meaning: "表面的；外观上的", example: "The cosmetic changes were temporary." },
      { word: "villa", partOfSpeech: "n.", meaning: "别墅", example: "The old villa became a film location." },
      { word: "drag", partOfSpeech: "v.", meaning: "拖；拉", example: "They had to drag the box across the floor." },
      { word: "nature", partOfSpeech: "n.", meaning: "自然；大自然", example: "The designer collected sounds from nature." },
      { word: "cloakroom", partOfSpeech: "n.", meaning: "衣帽间；寄物处", example: "The experiment took place in an unused cloakroom." },
      { word: "classical", partOfSpeech: "adj.", meaning: "古典的", example: "Classical music played in the background." },
      { word: "complete", partOfSpeech: "v./adj.", meaning: "完成；完整的", example: "Each applicant had to complete a form." },
      { word: "toast", partOfSpeech: "n.", meaning: "烤面包片", example: "The actress was eating toast before filming." },
      { word: "continent", partOfSpeech: "n.", meaning: "大陆；洲", example: "The film may be exported to other continents." },
      { word: "turn up", partOfSpeech: "phr. v.", meaning: "到场；出现", example: "Applicants had to turn up in ordinary clothes." },
      { word: "remove", partOfSpeech: "v.", meaning: "移除；拆除", example: "The crew will remove the temporary decorations." },
      { word: "emotional", partOfSpeech: "adj.", meaning: "情感的；令人动情的", example: "The emotional scene was almost silent." },
      { word: "applicant", partOfSpeech: "n.", meaning: "申请人；应聘者", example: "Each applicant completed a form." },
      { word: "save", partOfSpeech: "v.", meaning: "节省；挽救", example: "Reusing the miniature saves money." },
      { word: "production", partOfSpeech: "n.", meaning: "制作；生产", example: "The production faced a practical problem." },
      { word: "generous", partOfSpeech: "adj.", meaning: "慷慨的", example: "The owner was generous with refreshments." },
      { word: "impolite", partOfSpeech: "adj.", meaning: "不礼貌的", example: "Some actors feared silence might seem impolite." },
      { word: "tip", partOfSpeech: "n.", meaning: "建议；提示", example: "The actress gave them one useful tip." },
      { word: "fail", partOfSpeech: "v.", meaning: "未能；失败", example: "They feared they might fail to say every word." },
      { word: "actress", partOfSpeech: "n.", meaning: "女演员", example: "An actress was eating breakfast before filming." },
      { word: "negatively", partOfSpeech: "adv.", meaning: "负面地", example: "The director would not react negatively." },
      { word: "author", partOfSpeech: "n.", meaning: "作者", example: "The film was based on a novel by an Italian author." },
      { word: "restorer", partOfSpeech: "n.", meaning: "修复师", example: "A restorer protected the paintings." },
      { word: "earthquake", partOfSpeech: "n.", meaning: "地震", example: "The story begins after an earthquake." },
      { word: "college", partOfSpeech: "n.", meaning: "学院；大学", example: "Students from a local college built the model." },
      { word: "refreshment", partOfSpeech: "n.", meaning: "茶点；饮料", example: "Refreshments were provided in the garden." },
      { word: "physics", partOfSpeech: "n.", meaning: "物理学", example: "Physics played a major role in the miniature." },
      { word: "air force", partOfSpeech: "n.", meaning: "空军", example: "The heroine is an air force pilot." },
      { word: "interpret", partOfSpeech: "v.", meaning: "诠释；理解", example: "Actors had to interpret a short scene." },
      { word: "makeup", partOfSpeech: "n.", meaning: "化妆；化妆品", example: "Applicants arrived without expensive makeup." },
      { word: "be rich in", partOfSpeech: "phrase", meaning: "富含", example: "Earthquake recordings are rich in low sounds." },
      { word: "gallery", partOfSpeech: "n.", meaning: "美术馆；画廊", example: "The villa was home to a small gallery." },
      { word: "origin", partOfSpeech: "n.", meaning: "起源；来源", example: "They checked the origin of the expression." },
      { word: "insure", partOfSpeech: "v.", meaning: "给……投保", example: "The producer agreed to insure the paintings." },
      { word: "necessity", partOfSpeech: "n.", meaning: "必要性；必需品", example: "Saving money was a necessity." },
      { word: "wild", partOfSpeech: "adj.", meaning: "野生的", example: "The sound designer recorded wild birds." },
      { word: "realistic", partOfSpeech: "adj.", meaning: "逼真的；现实的", example: "The lighter wall looked more realistic." },
      { word: "tragic", partOfSpeech: "adj.", meaning: "悲剧性的", example: "The film tells a tragic story." },
      { word: "export", partOfSpeech: "v.", meaning: "出口；输出", example: "The producers hope to export the film." },
      { word: "thunder", partOfSpeech: "n.", meaning: "雷；雷声", example: "The effects were mixed with thunder." }
    ],
    passage: `At seven in the morning, an actress is eating toast while classical music plays in the background. The film she is working on, The Last Flight, is based on a novel by an Italian author. It follows an air force pilot returning to her childhood village after a devastating earthquake. It is a tragic story, but the production faces a very practical problem: how can the crew show a beautiful old villa falling apart without putting a single person or painting at risk?

The villa, now home to a small art gallery, provides the location for the scenes before the disaster. A restorer has drawn up a list of things the crew may change, and the producer has agreed to insure the paintings. Even cosmetic changes, such as painting a door, must be temporary.

[37]

These images, rather than anyone's memory, will guide the crew when they remove the temporary decorations after filming is complete. The owner has also been generous enough to provide refreshments in the garden, so nobody needs to eat near the paintings.

The scenes of destruction, by contrast, are filmed using a miniature of the villa. Building it is more than an exercise in art: physics plays a major role. Students from a local college have built two versions of a wall, one from heavy material and the other from a much lighter mixture.

[38]

Both can then be struck with the same force, allowing the camera to record the differences in the way the pieces fall. The team can choose the version that looks most realistic on screen. Reusing the same miniature for different camera angles also saves money, a necessity on a limited budget.

The search for actors has been equally experimental. Each applicant had to complete a form and turn up in ordinary clothes, without expensive makeup. The director wanted to see how they would interpret a short scene in which a pilot receives bad news. Some actors worried that remaining silent might be considered impolite and that the director would react negatively if they failed to say all the words in the script.

[39]

One tip she gives them is to imagine how a real person might behave in such a situation, rather than treating the lines as a test of memory.

The sound team faces a slightly different challenge. Real recordings of earthquakes are often rich in low-frequency sounds that small speakers cannot reproduce well. The designer collects sounds from nature, from the calls of wild birds to thunder, and combines them with studio effects. In one experiment, she asked an assistant to drag a heavy wooden box across the floor of an unused cloakroom.

[40]

Mixed with the original thunder recording, this prolonged sound gives the impression of enormous stones moving underground.

There are limits, however, to the amount of noise a scene needs. In the most emotional moment, the pilot stands among ruined buildings and searches for her brother. The soundtrack is almost silent.

[41]

That brief pause in the music allows the audience to concentrate on the expression on the actress's face. Sometimes what the audience does not hear is just as important as what it does.

The producers hope to export the film to several other continents. Translators have been asked to check cultural references, including the origin of a humorous expression used by the pilot's father earlier in the story.

[42]

If it is translated word for word, international audiences may miss the joke entirely. The director has therefore given the translators permission to find a similar expression in their own languages.

From rebuilding walls to translating jokes, making a film requires far more than simply pointing a camera at a scene.`,
    options: {
      A: "The resulting scraping noise lasted considerably longer than a single crash of thunder.",
      B: "Neither of these structures is permanently attached to the model, so they can be tested separately.",
      C: "In the original language, the expression has a meaning that is quite different from what the individual words suggest.",
      D: "The director, however, was more interested in their natural reactions than in their ability to repeat a speech.",
      E: "The music is deliberately carried across the next few shots so that there is no break in the soundtrack.",
      F: "The restorer has therefore photographed each room in detail before any work begins.",
      G: "For a few seconds, even the background music disappears, leaving only the sound of her breathing."
    },
    answers: { "37": "F", "38": "B", "39": "D", "40": "A", "41": "G", "42": "C" },
    translation: `电影灾难场景背后的科学

早晨七点，一位女演员正在吃烤面包片，背景中播放着古典音乐。她正在拍摄的电影《最后一次飞行》改编自一位意大利作家的小说。影片讲述了一名空军飞行员在一场毁灭性地震后返回童年故乡的故事。这是一个悲剧性的故事，但电影制作团队面临着一个非常实际的问题：怎样才能表现一座美丽的老别墅逐渐倒塌的场景，同时又不让任何人或任何一幅画面临危险？

这座别墅如今是一家小型美术馆，将作为灾难发生前那些场景的拍摄地点。一名文物修复师列出了摄制组可以改动的物品清单，制片人也同意为这些画作购买保险。即使是给门刷漆这样的表面改动，也必须是临时性的。因此，修复师在任何工作开始前，都对每个房间进行了详细拍照。拍摄完成后，工作人员将依据这些照片，而不是凭借某个人的记忆，拆除临时装饰。别墅的主人也非常慷慨地在花园里提供饮料和点心，这样就没有人需要在画作附近吃东西了。

相比之下，建筑物被摧毁的场景则使用别墅的微缩模型进行拍摄。制作这个模型不仅仅是一项艺术创作，物理学也发挥着重要作用。当地一所学院的学生制作了两种墙壁模型，一种使用较重的材料，另一种使用轻得多的混合材料。这两种结构都没有被永久固定在模型上，因此可以分别进行测试。随后，可以用相同的力量撞击这两种墙壁，让摄像机记录碎片掉落方式的差异。摄制组由此可以选择在银幕上看起来最逼真的版本。使用同一个微缩模型从不同角度拍摄，还能够节省资金，这对于预算有限的摄制组来说是十分必要的。

演员的选拔同样具有实验性质。每位申请者都必须填写一张表格，并穿着普通衣服到场，不使用昂贵的化妆品。导演想知道，他们会如何演绎一名飞行员收到坏消息的短小场景。一些演员担心，如果保持沉默，可能会被认为不礼貌；如果没能说出剧本中的所有台词，导演也可能会作出负面评价。然而，比起演员复述一段台词的能力，导演更关注他们的自然反应。她给演员的一条建议是，想象真实的人在这种情况下会有什么表现，而不是把台词当成一次记忆力测试。

音效制作团队面临的挑战略有不同。真实的地震录音通常富含低频声音，而小型扬声器很难很好地还原这些声音。音效设计师从大自然中收集各种声音，从野生鸟类的叫声到雷声，然后将它们与录音室制作的音效混合。在一次实验中，她让一名助手拖着一个沉重的木箱，划过一间闲置衣帽间的地板。由此产生的摩擦声比一声雷鸣持续的时间长得多。这种持续时间较长的声音与原始雷声录音混合在一起，就会让人产生巨大的石块正在地下移动的感觉。

然而，一个场景需要多少声音，也是有限度的。在影片最令人动情的时刻，飞行员站在倒塌的建筑物之间寻找自己的兄弟。有几秒钟，甚至连背景音乐都消失了，只剩下她的呼吸声。音乐的短暂停顿使观众能够集中注意女演员脸上的表情。有时候，观众没有听到的声音与他们听到的声音同样重要。

制片人希望将这部电影出口到其他几个大洲。翻译人员被要求核查影片中涉及的文化内容，其中包括飞行员的父亲在故事前面使用过的一个幽默表达的来源。在原语言中，这个表达的整体含义与其中各个单词所体现的意思非常不同。如果逐字翻译，国际观众可能完全无法理解其中的笑点。因此，导演允许翻译人员在自己的语言中寻找意思相似的表达。

从重新建造墙壁到翻译笑话，制作一部电影所需要做的事情，远不只是把摄像机对准某个场景那么简单。`,
    explanations: {
      "37": "答案F。前文说临时改动必须恢复原状，后文的 These images 指的就是修复师提前拍摄的房间照片，形成“拍照记录原貌—依据照片恢复”的因果链。B谈的是模型墙，与真实别墅内部保护无关。",
      "38": "答案B。前文明确介绍了两种墙壁模型，B中的 neither of these structures 与后文的 Both 形成指代链；tested separately 也解释了为什么随后可以用同样的力量进行比较。",
      "39": "答案D。前文演员担心导演看重台词背诵，D中的 however 形成转折，natural reactions 又与后文 how a real person might behave 同义呼应。E属于声音制作话题，不能放在演员选拔段落。",
      "40": "答案A。拖动木箱会产生连续的摩擦声，A中的 resulting scraping noise 来源明确，lasted considerably longer 又与后文 prolonged sound 呼应。G的呼吸声与这个实验没有关系。",
      "41": "答案G。G说明背景音乐短暂消失，只剩呼吸声，后文的 brief pause in the music 正好承接。E说声轨没有中断，与后文的 pause 逻辑相反，是干扰项。",
      "42": "答案C。the expression 指前文的 humorous expression，individual words 与后文 word for word 呼应，解释了为什么不能逐字翻译。E谈的是音乐，无法连接语言和翻译。"
    },
    extraOptionExplanation: "多余句子E虽然也谈电影音乐，但它说音乐没有中断，而第41空前后明确强调了音乐的短暂停顿，因此不能使用。"
  });
})();
