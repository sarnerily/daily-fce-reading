(function () {
  "use strict";

  if (readings.some((reading) => reading.date === "2026-11-27")) return;

  readings.push({
    date: "2026-11-27",
    type: "part6",
    exerciseType: "gapped-text",
    title: "The Island That Wasn't There",
    level: "Cambridge B2 First / FCE",
    pointsPerQuestion: 2,
    totalScore: 12,
    vocabulary: [
      ["famous", "adj.", "著名的"], ["tested", "v.", "测试；检验"], ["sleep", "v./n.", "睡觉；睡眠"], ["believe in", "phr.", "相信"],
      ["shadow", "n.", "影子"], ["demonstrate", "v.", "展示；证明"], ["girlfriend", "n.", "女朋友"], ["grocer", "n.", "食品杂货店店主"],
      ["adventure", "n.", "冒险"], ["neighbourhood", "n.", "街区；社区"], ["beneficial", "adj.", "有益的"], ["see into", "phr.", "看透"],
      ["ingredient", "n.", "食材；成分"], ["inquiry", "n.", "调查"], ["wrong", "adj./adv.", "错误的；错误地"], ["tourism", "n.", "旅游业"],
      ["bind", "v.", "绑；捆"], ["conscious", "adj.", "意识到的"], ["draw", "v.", "得出；画"], ["dramatist", "n.", "剧作家"],
      ["king", "n.", "国王"], ["journalism", "n.", "新闻学；新闻业"], ["in search of", "phr.", "寻找"], ["paralysed", "adj.", "不知所措的；瘫痪的"],
      ["talk over", "phr. v.", "讨论"], ["melt away", "phr. v.", "逐渐消失"], ["enquiry", "n.", "询问"], ["government", "n.", "政府"],
      ["sail", "v.", "航行"], ["paradise", "n.", "天堂"], ["imitate", "v.", "模仿"], ["sound", "n./adj.", "声音；合理的"],
      ["complain", "v.", "抱怨"], ["dry clean", "phr. v.", "干洗"], ["dial", "v.", "拨号"], ["predict", "v.", "预测"],
      ["complex", "adj.", "复杂的"], ["prove out", "phr. v.", "得到验证"], ["lens", "n.", "透镜"], ["cause", "n.", "原因"]
    ].map(([word, partOfSpeech, meaning]) => ({ word, partOfSpeech, meaning, example: `The article uses “${word}” in context.` })),
    passage: `The town of Bellport is famous for summer tourism, yet its busiest weekend last winter had nothing to do with sunshine. A local dramatist called Mira Holt designed a town-wide adventure about a king whose ship had supposedly vanished. The government arts office hoped the game would be beneficial to the neighbourhood's small businesses. It also asked Mira to demonstrate how easily a convincing story can lead people to the wrong conclusion.

[37]

That idea became the rule behind every clue: a thrilling claim had to be followed by a chance to check it.

At the harbour, a guide invited players to imagine that they would sail across a sheltered bay in search of the king's island, described in an ancient poem as a paradise. According to the legend, the king could not sleep after seeing a mysterious light on the water. Inside a tent, a recording imitated the sound of thunder, and a dark shape appeared on a screen. For a moment, the shadow seemed to show a real ship approaching.

[38]

When the lamp was moved, the image began to melt away. The trick had been tested repeatedly, and its creators were happy to reveal the cause once the players had made a prediction.

Back on land, the game moved through ordinary shops. A grocer supplied an ingredient list for a royal dinner; at another stop, a notice offered to dry clean the king's cloak. A thin cord was used to bind two clues together. One player's girlfriend thought the numbers on the cleaning ticket formed a secret message.

[39]

The mistake was useful: it reminded players that a pattern is not necessarily proof.

The next room turned the game into a lesson in journalism. The players examined a fictional newspaper report of a government inquiry into the missing vessel, then made an enquiry at a pretend harbour office. A volunteer explained that anyone could dial the information line, but players should draw conclusions from the documents available on the desk, not from rumours.

Some visitors complained that the investigation was too complex; others were paralysed by the fear of making a mistake.

[40]

It helped them become conscious of how quickly they had begun to believe in an exciting explanation without checking its source. Mira told them, "We cannot see into another person's mind. We can only examine what they actually said or did." She encouraged groups to talk over their conclusions rather than simply choose the loudest speaker.

Before the opening, volunteers had tested the whole route with families of different ages. One surprising finding concerned the countdown clock. Younger participants enjoyed the pressure, but several adults rushed past important evidence. Mira suspected that the pressure was affecting their decisions.

[41]

When the clock was removed from the final version, her prediction proved out: most groups spent longer comparing clues and fewer asked staff for the answer.

The mystery ended with a deliberately ordinary discovery. There was no ghost ship and no lost king; the famous "sighting" was an effect created by light and a small model. Some groups felt disappointed, while others said the experience had changed the way they judged stories online.

[42]

A correct guess was less valuable than a sound explanation that could survive a question.

The organisers did not promise that a single afternoon would cure people's habit of believing rumours. But they hoped a playful lesson might help when the next dramatic claim turned up.`,
    options: {
      A: "A check with the shopkeeper revealed that they were ordinary order numbers, not a coded instruction.",
      B: "Removing the time limit, she predicted, would give players space to compare the details they had missed.",
      C: "In fact, the shape came from a paper boat placed between a light and a special lens.",
      D: "To make the game more challenging, the organisers kept the countdown clock running throughout every session.",
      E: "Instead of announcing a winner, the staff asked groups to explain which clues had changed their minds.",
      F: "She thought the best way to do that was to let visitors test a tale rather than simply believe it.",
      G: "So the volunteers asked them to pause and explain which piece of evidence supported each claim."
    },
    answers: { "37": "F", "38": "C", "39": "A", "40": "G", "41": "B", "42": "E" },
    explanations: {
      "37": "答案F。She 指 Mira，do that 指展示一个令人信服的故事如何误导人。F提出让游客检验故事而非盲目相信；后文 That idea、test/check 与此呼应。逻辑是目标—方法—游戏规则。G同样谈核查，但更适合玩家实际调查时志愿者采取的措施。",
      "38": "答案C。the shape 对应前文的 shadow。In fact 引出视觉现象的真实原因：纸船、光源和透镜制造了船影；后文移动灯后影像消失。形成“看到影子—解释原因—改变光源—影像消失”。",
      "39": "答案A。they 指 cleaning ticket 上的 numbers。向店主核实后发现它们是普通订单编号，后文 The mistake 指把编号误当密码。逻辑为疑似密码—查证—发现误判—总结教训。C讲纸船和透镜，与数字无关。",
      "40": "答案G。So 承接游客抱怨复杂、害怕犯错的困难；them 指游客。志愿者要求他们暂停并指出支持每项说法的证据，后文 It 指这项做法，说明其帮助玩家意识到自己未经核实就相信解释。",
      "41": "答案B。后文 her prediction 要求空格处出现明确预测。B中的 she predicted 与之呼应；Removing the time limit 对应 the clock was removed，后文报告预测得到验证。D也谈倒计时，却说保留计时器，与后文取消计时器相矛盾。",
      "42": "答案E。前文说玩家对结果的反思改变了他们判断网络故事的方式，E让各组解释哪些线索改变了看法；后文强调合理解释比猜对更有价值。逻辑为反思经历—解释判断—总结目标。"
    },
    extraOptionExplanation: "多余选项D与第41题同样谈倒计时，看似相关，但它说游戏始终保留计时器，后文明确说最终版本取消了计时器，逻辑矛盾。",
    translation: `那座并不存在的岛屿

贝尔波特镇以夏季旅游业闻名，但去年冬天最繁忙的一个周末，却与阳光明媚的天气毫无关系。

当地一位名叫米拉·霍尔特的剧作家设计了一场覆盖全镇的冒险解谜游戏，故事围绕着一位国王展开，据说他的船神秘失踪了。

政府艺术部门希望这项活动能够给当地街区的小商家带来好处。同时，他们也希望米拉展示：一个看起来令人信服的故事，是多么容易让人得出错误的结论。

［37］她认为，最好的方法是让游客亲自检验一个故事，而不是简单地相信它。

这一想法成为所有游戏线索的设计原则：每当游戏提出一个激动人心的说法，就必须给玩家一次核实它的机会。

在港口，一名向导邀请玩家想象自己将乘船驶过一处平静的海湾，寻找国王的岛屿。那座岛在一首古老的诗歌中被描写成天堂。按照传说，国王曾经在海面上看到一道神秘的光，之后便无法入睡。在一顶帐篷里，一段录音模仿着雷鸣的声音，屏幕上出现了一个黑暗的形状。有那么一瞬间，那个影子看起来真的像是一艘船正向人们驶来。

［38］实际上，那个形状来自一只放在光源与特殊透镜之间的纸船。

当灯的位置改变时，影像便开始逐渐消失。这个视觉把戏已经经过反复测试。一旦玩家作出自己的预测，设计者就很乐意向他们揭示其中的原因。

回到陆地上，游戏继续在普通商店之间展开。一家食品杂货店的店主提供了一张皇家晚宴的食材清单；另一个地点则有一张告示，表示可以干洗国王的斗篷。一根细绳将两条线索绑在一起。一名玩家的女朋友认为，清洗单据上的数字组成了一条秘密信息。

［39］然而，向店主核实之后，他们发现这些数字只是普通的订单编号，并不是什么加密指令。

这个错误反而很有用：它提醒玩家，有些东西看起来存在规律，并不意味着它们就是证据。

接下来的房间把游戏变成了一堂新闻学课程。玩家们阅读了一篇虚构的报纸报道，内容涉及政府对失踪船只开展的调查，随后又来到一间模拟的港口办公室询问信息。一名志愿者解释说，任何人都可以拨打信息热线，但玩家应该依据桌上现有的文件得出结论，而不是相信传言。

一些游客抱怨调查太复杂，另一些人则因为害怕犯错而不知所措。

［40］因此，志愿者要求他们先停下来，再解释每一个说法究竟由哪条证据支持。

这帮助玩家意识到，自己是多么容易在没有核查来源的情况下，就开始相信一个令人兴奋的解释。米拉告诉他们：“我们无法看透另一个人的心思。我们只能检查他们真正说过什么、做过什么。”她鼓励各小组充分讨论自己的结论，而不是简单地听从声音最大的那个人。

正式开放之前，志愿者已经让不同年龄的家庭测试了整条游戏路线。其中一个令人意外的发现与倒计时有关。年轻的参加者很喜欢时间压力，但一些成年人却因为赶时间而忽略了重要证据。米拉怀疑，这种压力正在影响他们的判断。

［41］她预测，取消时间限制可以让玩家有足够的时间比较自己之前忽略的细节。

在最终版本中取消计时器后，她的预测得到了验证：多数小组花了更长时间比较线索，而向工作人员询问答案的人也减少了。

整个谜题最终以一个有意设计得十分普通的发现结束。根本没有什么幽灵船，也没有失踪的国王；那个著名的“目击事件”其实只是光线和小型模型共同制造出来的效果。一些小组感到失望，另一些小组则表示，这次经历改变了他们判断网络故事的方式。

［42］工作人员没有宣布获胜者，而是让各小组解释，究竟是哪些线索改变了他们的看法。

与猜对答案相比，能够经得起质疑的合理解释更有价值。

组织者并不认为，只靠一个下午的活动，就能彻底改变人们轻信传言的习惯。但他们希望，这堂以游戏形式进行的课程，能在人们下一次遇到令人震惊的说法时发挥一点作用。`
  });
})();
