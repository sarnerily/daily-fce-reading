(function () {
  "use strict";

  if (readings.some((reading) => reading.date === "2026-11-24")) {
    return;
  }

  readings.push({
    date: "2026-11-24",
    type: "part6",
    exerciseType: "gapped-text",
    title: "The Radio Station That Knows the Town",
    level: "Cambridge B2 First / FCE",
    pointsPerQuestion: 2,
    totalScore: 12,
    vocabulary: [
      { word: "accident", partOfSpeech: "n.", meaning: "事故", example: "The cyclist reported an accident outside the school." },
      { word: "husband", partOfSpeech: "n.", meaning: "丈夫", example: "Her pen-friend later became her husband." },
      { word: "wheel", partOfSpeech: "n.", meaning: "轮子；车轮", example: "The front wheel was badly damaged." },
      { word: "speed", partOfSpeech: "n.", meaning: "速度", example: "The driver was travelling at excessive speed." },
      { word: "range", partOfSpeech: "v.", meaning: "范围包括", example: "The station's subjects range from traffic to the harbour." },
      { word: "perform", partOfSpeech: "v.", meaning: "表演", example: "Listeners are invited to perform live." },
      { word: "knock out", partOfSpeech: "phr. v.", meaning: "淘汰", example: "The judges knock out one act after each round." },
      { word: "east", partOfSpeech: "n./adj.", meaning: "东；东部的", example: "The station stands at the east end of the cove." },
      { word: "bring", partOfSpeech: "v.", meaning: "带来；播出", example: "The producer will not bring unverified accusations on air." },
      { word: "wage", partOfSpeech: "n.", meaning: "工资", example: "The employer offers a reasonable weekly wage." },
      { word: "effect", partOfSpeech: "n.", meaning: "影响；效果", example: "Removing the chimney may have little effect." },
      { word: "chimney", partOfSpeech: "n.", meaning: "烟囱", example: "The old brick chimney stands beside the factory." },
      { word: "curriculum vitae", partOfSpeech: "n.", meaning: "个人简历", example: "Applicants should send a curriculum vitae." },
      { word: "fiance", partOfSpeech: "n.", meaning: "未婚夫", example: "Her pen-friend became her fiance." },
      { word: "disco", partOfSpeech: "n.", meaning: "迪斯科舞会；迪斯科音乐", example: "The competition has a disco theme." },
      { word: "apply", partOfSpeech: "v.", meaning: "申请", example: "Applicants can apply online." },
      { word: "detailed", partOfSpeech: "adj.", meaning: "详细的", example: "The presenter gave a detailed account." },
      { word: "pen-friend", partOfSpeech: "n.", meaning: "笔友", example: "An overseas pen-friend wrote regularly." },
      { word: "knock down", partOfSpeech: "phr. v.", meaning: "拆除；推倒", example: "The council wants to knock down the chimney." },
      { word: "push forward", partOfSpeech: "phr. v.", meaning: "推进", example: "Officials want to push forward with the plan." },
      { word: "issue", partOfSpeech: "n.", meaning: "问题；议题", example: "The report discusses an important local issue." },
      { word: "plumber", partOfSpeech: "n.", meaning: "水暖工；管道工", example: "A local plumber provided new evidence." },
      { word: "superstar", partOfSpeech: "n.", meaning: "超级明星", example: "One contestant hopes to become a superstar." },
      { word: "cove", partOfSpeech: "n.", meaning: "小海湾", example: "The station overlooks Alder Cove." },
      { word: "give away", partOfSpeech: "phr. v.", meaning: "免费赠送", example: "A shop offers to give away a breakfast hamper." },
      { word: "get in", partOfSpeech: "phr. v.", meaning: "打进电话；进入", example: "The winner manages to get in before the lines close." },
      { word: "bacon", partOfSpeech: "n.", meaning: "培根", example: "The shop sells everything from bacon to shampoo." },
      { word: "jury", partOfSpeech: "n.", meaning: "评审团", example: "A jury of musicians chooses the finalists." },
      { word: "slip away", partOfSpeech: "phr. v.", meaning: "悄悄流逝", example: "The final minutes of the programme slip away." },
      { word: "postage", partOfSpeech: "n.", meaning: "邮费", example: "The rising cost of postage affected their letters." },
      { word: "litter", partOfSpeech: "n.", meaning: "垃圾；乱扔的垃圾", example: "Listeners complain about litter around the site." },
      { word: "knock", partOfSpeech: "v.", meaning: "敲", example: "A cyclist knocks at the station door." },
      { word: "mind", partOfSpeech: "v.", meaning: "介意", example: "Listeners rarely mind the old equipment." },
      { word: "shampoo", partOfSpeech: "n.", meaning: "洗发水", example: "The shop sells shampoo and other goods." },
      { word: "take up with", partOfSpeech: "phr. v.", meaning: "向某人提出；与某人交涉", example: "Callers can take the matter up with the producer." },
      { word: "old-fashioned", partOfSpeech: "adj.", meaning: "老式的；过时的", example: "The station's equipment is old-fashioned." },
      { word: "disc", partOfSpeech: "n.", meaning: "唱片；光盘", example: "An occasional music disc skips." },
      { word: "independent", partOfSpeech: "adj.", meaning: "独立的", example: "It is a tiny independent radio station." },
      { word: "upon", partOfSpeech: "prep.", meaning: "一……就；在……之上", example: "Upon hearing the evidence, the council reviews the plan." },
      { word: "emit", partOfSpeech: "v.", meaning: "排放；发出", example: "The chimney still emits fumes." }
    ],
    passage: `At the east end of Alder Cove, a tiny independent radio station broadcasts from rooms above a shop selling everything from bacon to shampoo. The equipment is old-fashioned, and an occasional music disc skips. Yet listeners rarely mind. The morning programme has room for stories that would never make the national news.

At 7:05 one Tuesday, a cyclist knocks at the door with a photograph of his damaged front wheel. He says a car was travelling at excessive speed when it caused an accident outside the school.

[37]

The presenter therefore avoids naming the driver. She asks a reporter to check the road markings and talk to witnesses before giving a detailed account of what can actually be confirmed.

The station's subjects range from traffic to the future of the harbour. That morning, the council wants to knock down an old brick chimney beside a former factory and push forward with a new shopping area. Officials say the chimney is no longer used, so removing it will have little effect on anyone.

[38]

Upon hearing this, the council agrees to check the plans again. Meanwhile, listeners call to complain that litter is being left around the site, whatever decision is eventually made.

Not every broadcast concerns an issue in local politics. The station also announces job vacancies. One employer offers a reasonable weekly wage and asks applicants to apply online with a curriculum vitae. The presenter reads out a detailed description of the work and explains that relevant experience can be gained outside paid employment.

[39]

That experience helps her get an interview, even though she has never held a similar job before. The presenter points out that qualifications alone do not tell an employer everything.

At half past eight, the programme changes direction. A disco-themed competition invites listeners to perform live, while a jury of three local musicians decides who will reach the final. One contestant hopes to become a superstar; another brings a guitar with only five working strings. The judges must knock out one act after each round.

[40]

This is why the musician with the damaged guitar gets through: his original song makes everyone laugh, whereas a technically perfect imitation leaves them cold.

Letters provide the next surprise. An elderly listener describes how a pen-friend from another country became her fiance and later her husband. She still keeps the envelopes, although the rising cost of postage nearly ended their exchanges. The story has nothing to do with a big event or a famous person.

[41]

A nearby shop then offers to give away a hamper containing breakfast food and, rather unexpectedly, a bottle of shampoo. The winner manages to get in on the telephone just before the lines close.

As the final minutes of the programme slip away, the station's producer looks over the messages. Some listeners simply want a cheerful song; others have complaints. If callers dislike a report, she invites them to take the matter up with her rather than argue on air. She also refuses to bring unverified accusations into a broadcast simply because they might attract an audience.

[42]

For this small station, independence means being close enough to listen, but free enough to ask difficult questions.`,
    options: {
      A: "One applicant, a young woman, has spent three years organising unpaid deliveries for a neighbourhood charity.",
      B: "Listening carefully to the town, however, does not mean accepting every claim as true.",
      C: "He admits, however, that he only noticed the car after he had already fallen.",
      D: "The jury decides to reward originality and a connection with the audience rather than technical perfection.",
      E: "The jury, however, decides to give the technically strongest performer the highest score.",
      F: "A local plumber, however, shows that the chimney still emits fumes from the heating systems of two nearby workshops.",
      G: "Yet it is precisely such personal memories that make the programme valuable to local listeners."
    },
    answers: { "37": "C", "38": "F", "39": "A", "40": "D", "41": "G", "42": "B" },
    translation: `了解这座小镇的广播电台

在奥尔德湾的东端，有一家小小的独立广播电台，工作室位于一家商店楼上的几个房间里。那家商店从培根到洗发水，什么都卖。电台的设备有些老旧，偶尔还会出现唱片跳音的情况。不过，听众很少介意。早间节目会报道一些根本不可能登上全国新闻的故事。

一个星期二的早上七点零五分，一名骑自行车的人敲响了电台的门，并拿出一张照片，上面是他损坏的自行车前轮。他说，一辆汽车当时车速过快，在学校外面引发了一起事故。不过，他承认自己直到已经摔倒以后，才注意到那辆汽车。因此，主持人避免直接公布司机的名字。她让一名记者去检查道路标线，并采访目击者，然后再详细报道那些能够得到确认的事实。

电台报道的话题范围很广，从交通问题到港口的未来发展都会涉及。那天早上，市政会打算拆除一座原工厂旁边的旧砖烟囱，并推进建设一个新购物区的计划。官员们说，这座烟囱早已不再使用，因此拆除它不会对任何人造成太大影响。然而，一名当地水暖工指出，这座烟囱仍然排放着附近两家工作坊供暖系统产生的烟气。听到这一情况后，市政会同意重新检查有关计划。与此同时，还有听众打电话抱怨，不管最后作出什么决定，工地周围都有人乱扔垃圾。

当然，广播节目并不是都围绕地方政治问题展开。电台也会播报当地的职位空缺。一名雇主提供合理的周薪，并要求应聘者通过网络提交个人简历。主持人详细介绍了这份工作的内容，并解释说，相关经验并不一定必须通过有薪工作获得。其中一名申请者是一位年轻女性，她曾经连续三年为一家社区慈善机构组织无偿配送工作。这段经历帮助她获得了一次面试机会，尽管她以前从未担任过类似的工作。主持人指出，仅凭学历或资格证书，并不能让雇主全面了解一个人。

到了八点半，节目换了一个方向。一场以迪斯科为主题的比赛邀请听众进行现场表演，三名当地音乐人组成评审团，决定谁能进入决赛。一名参赛者希望成为超级明星；另一名参赛者带来了一把只有五根琴弦还能正常使用的吉他。每轮结束后，评委都必须淘汰一个节目。评审团决定重视原创性，以及表演者与观众建立联系的能力，而不是单纯追求技术上的完美。这也解释了为什么那名吉他有问题的音乐人能够晋级：他的原创歌曲让所有人都笑了，而另一位选手虽然模仿得技术完美，却没有真正打动听众。

接下来，听众来信又带来了一段令人意外的故事。一名年长听众讲述了自己的经历：她来自另一个国家的一位笔友，后来成为了她的未婚夫，最终成为了她的丈夫。她至今还保存着那些信封，虽然不断上涨的邮资曾经差点让两人中断通信。这段故事既不涉及什么重大事件，也没有什么名人。然而，恰恰是这样的个人记忆，让这档节目对当地听众具有特殊价值。

随后，附近一家商店提出免费赠送一个礼品篮，里面有早餐食品，还有一瓶出人意料的洗发水。获奖者在电话线路即将关闭之前，终于成功打进了电话。

随着节目的最后几分钟悄悄流逝，制片人开始查看收到的留言。一些听众只是想听一首欢快的歌曲，另一些人则提出了投诉。如果有听众不喜欢某篇报道，她会邀请他们直接向自己提出意见，而不是在广播中争吵。她也拒绝仅仅因为某项指控可能吸引观众，就把没有经过核实的内容播出去。然而，认真倾听这座小镇的声音，并不意味着必须相信居民所说的每一件事。

对于这样一家小小的广播电台来说，独立意味着既要与听众足够接近，能够倾听他们的声音，又要保持足够的自由，敢于提出困难的问题。`,
    explanations: {
      "37": "答案C。前文骑车人明确指责汽车导致事故，C中的 however 引出转折，说明他其实是在摔倒后才看到汽车。后文 therefore 解释了主持人为什么不立即公布司机身份；He 和 the car 分别指代前文的 cyclist 和 a car。",
      "38": "答案F。官员说烟囱不再使用，F中的 however 提供相反证据：烟囱仍然 emits fumes。后文 Upon hearing this 指的就是水暖工的新证据，因此市政会重新检查计划。",
      "39": "答案A。前文说工作经验可以来自有薪工作之外，A具体说明一名申请者做了三年慈善配送；后文 That experience 和 her 都明确指回这段经历及这位年轻女性。",
      "40": "答案D。前文介绍每轮要淘汰选手，D补充评审标准：原创性和与观众的联系比技术完美更重要。后文 This is why 解释了损坏吉他的音乐人为什么能晋级。E虽然谈评审团，却与后文“技术不完美但晋级”的逻辑相反。",
      "41": "答案G。前文说这封信不涉及大事件或名人，G用 Yet 转折总结：正是这种个人记忆让节目对当地听众有价值。such personal memories 指前文的生活故事，也呼应文章开头的地方性主题。",
      "42": "答案B。前文拒绝播出未经核实的指控，B概括了电台的原则：倾听居民不等于接受每个说法为真。however 和 accepting every claim as true 与前文形成转折和同义呼应，并自然引出结尾的 independence。"
    },
    extraOptionExplanation: "多余句子E虽然出现了 jury、performer 等与比赛相关的词，但它主张给技术最强者最高分；第40空后文明确支持原创性和观众反应，因此E与上下文的评判逻辑冲突。"
  });
})();
