(function () {
  "use strict";

  const source = readings.find((reading) => reading.date === "2026-09-25");
  if (!source || readings.some((reading) => reading.date === "2026-09-27")) {
    return;
  }

  const questions = [
    {
      type: "multiple-choice",
      sectionTitle: "Part 1 | Multiple-choice Cloze",
      sectionInstructions: "Read the text and choose the answer A, B, C or D which best fits each gap.",
      sectionText: "Last spring, a craft centre in the Lakeford region launched a weekend repair fair. Instead of throwing away damaged furniture or tableware, residents could bring items to specialists and learn how to fix them. Visitors were advised to wear (1) ______ shoes because some activities took place in an uneven yard. Anyone with a difficult repair could (2) ______ advice from volunteers.\n\nThe centre had struggled as fuel costs rose. A government (3) ______ helped install renewable-energy equipment after ticket sales had dropped for three (4) ______ years, but its bank (5) ______ was still low.\n\nMost activities were open to everyone, and visitors could select from several short workshops. At the checkout, customers who kept proof of (6) ______ could return faulty craft kits, and the café sold soup to take away. For (7) ______ reasons, electrical items had to be checked before leaving.\n\nAt lunchtime, a teenager in a track suit began to feel sick after the winding bus ride, so Ms Green let him rest by an open window while his mother bought aspirin.\n\nBy Sunday, the new booking system made managing the queues a (8) ______.",
      question: "Visitors were advised to wear ______ shoes.",
      options: { A: "practical", B: "logical", C: "sensible", D: "reasonable" },
      answer: "C",
      explanation: "sensible shoes 是表示适合实际情况、舒适安全的常见搭配。"
    },
    {
      type: "multiple-choice",
      sectionTitle: "Part 1 | Multiple-choice Cloze",
      question: "Anyone with a difficult repair could ______ advice from volunteers.",
      options: { A: "seek", B: "search", C: "hunt", D: "locate" },
      answer: "A",
      explanation: "seek advice 是固定搭配，表示寻求建议。"
    },
    {
      type: "multiple-choice",
      sectionTitle: "Part 1 | Multiple-choice Cloze",
      question: "A government ______ helped install renewable-energy equipment.",
      options: { A: "donation", B: "gift", C: "allowance", D: "grant" },
      answer: "D",
      explanation: "government grant 表示政府为特定目的提供的专项拨款。"
    },
    {
      type: "multiple-choice",
      sectionTitle: "Part 1 | Multiple-choice Cloze",
      question: "Ticket sales had dropped for three ______ years.",
      options: { A: "continuous", B: "successive", C: "regular", D: "repeated" },
      answer: "B",
      explanation: "three successive years 表示连续三年，强调一个接一个发生。"
    },
    {
      type: "multiple-choice",
      sectionTitle: "Part 1 | Multiple-choice Cloze",
      question: "Its bank ______ was still low.",
      options: { A: "balance", B: "amount", C: "total", D: "sum" },
      answer: "A",
      explanation: "bank balance 是银行账户余额的固定搭配。"
    },
    {
      type: "multiple-choice",
      sectionTitle: "Part 1 | Multiple-choice Cloze",
      question: "Customers who kept proof of ______ could return faulty craft kits.",
      options: { A: "buying", B: "acquisition", C: "purchase", D: "order" },
      answer: "C",
      explanation: "proof of purchase 表示购买凭证。"
    },
    {
      type: "multiple-choice",
      sectionTitle: "Part 1 | Multiple-choice Cloze",
      question: "For ______ reasons, electrical items had to be checked before leaving.",
      options: { A: "plain", B: "apparent", C: "noticeable", D: "obvious" },
      answer: "D",
      explanation: "for obvious reasons 是表示出于显而易见的原因的常用表达。"
    },
    {
      type: "multiple-choice",
      sectionTitle: "Part 1 | Multiple-choice Cloze",
      question: "The new booking system made managing the queues a ______.",
      options: { A: "ease", B: "breeze", C: "comfort", D: "smoothness" },
      answer: "B",
      explanation: "be a breeze 是习语，表示非常容易、轻而易举。"
    },

    {
      type: "word-formation",
      sectionTitle: "Part 2 | Word Formation",
      sectionInstructions: "For questions 1–8, use the word given in capitals to form a word that fits in the gap.",
      question: "Its ______ has changed the town in unexpected ways.",
      sentence: "The Northmere Textile Archive began as a school project, but its __________ has changed the town in unexpected ways.",
      promptWord: "ESTABLISH",
      answer: "establishment",
      explanation: "its 后面需要名词：establish 变为 establishment。"
    },
    {
      type: "word-formation",
      sectionTitle: "Part 2 | Word Formation",
      question: "The quest explored the ______ between traditional weaving and modern design.",
      sentence: "Ms Carter led a quest to explore the __________ between traditional weaving and modern design.",
      promptWord: "RELATE",
      answer: "relationship",
      explanation: "the relationship between A and B 是最自然的表达。"
    },
    {
      type: "word-formation",
      sectionTitle: "Part 2 | Word Formation",
      question: "The papers recorded several ______ in local patterns.",
      sentence: "The papers recorded several __________ in local patterns.",
      promptWord: "VARY",
      answer: "variations",
      explanation: "several 后面接可数名词复数：vary 变为 variations。"
    },
    {
      type: "word-formation",
      sectionTitle: "Part 2 | Word Formation",
      question: "The archive has become ______ popular with young designers.",
      sentence: "The archive has become __________ popular with young designers.",
      promptWord: "INCREASE",
      answer: "increasingly",
      explanation: "popular 是形容词，需要副词 increasingly 来表示越来越受欢迎。"
    },
    {
      type: "word-formation",
      sectionTitle: "Part 2 | Word Formation",
      question: "The building still relies partly on ______ fuel.",
      sentence: "The building still relies partly on __________ fuel, so managers are seeking funds for a greener system.",
      promptWord: "RENEW",
      answer: "non-renewable",
      explanation: "结合 greener system 可知这里需要 non-renewable，表示不可再生的。"
    },
    {
      type: "word-formation",
      sectionTitle: "Part 2 | Word Formation",
      question: "Visitors can examine a carefully arranged ______ of cloth, tools and photographs.",
      sentence: "Visitors can examine a carefully arranged __________ of cloth, tools and photographs.",
      promptWord: "SELECT",
      answer: "selection",
      explanation: "a selection of 表示一批经过挑选的东西。"
    },
    {
      type: "word-formation",
      sectionTitle: "Part 2 | Word Formation",
      question: "The display follows a weaver from childhood into ______.",
      sentence: "One display follows a weaver from childhood into __________.",
      promptWord: "ADULT",
      answer: "adulthood",
      explanation: "childhood 与 adulthood 构成对应，表示从童年进入成年期。"
    },
    {
      type: "word-formation",
      sectionTitle: "Part 2 | Word Formation",
      question: "The documents are historically ______.",
      sentence: "The documents are historically __________ because they connect past evidence with current skills.",
      promptWord: "VALUE",
      answer: "valuable",
      explanation: "are 后面需要形容词：value 变为 valuable。"
    },

    {
      type: "key-word-transformation",
      sectionTitle: "Part 3 | Key Word Transformations",
      sectionInstructions: "Complete the second sentence so that it has a similar meaning. Use the word given and write between 3 and 6 words.",
      original: "Local craftspeople established the centre in 1998.",
      keyword: "ESTABLISHED",
      question: "Complete the second sentence.",
      sentence: "The centre __________________ local craftspeople in 1998.",
      answer: "was established by",
      explanation: "这是主动语态到被动语态的转换：was established by。"
    },
    {
      type: "key-word-transformation",
      sectionTitle: "Part 3 | Key Word Transformations",
      original: "It was easy to see that the old boiler needed replacing.",
      keyword: "OBVIOUS",
      question: "Complete the second sentence.",
      sentence: "It __________________ the old boiler needed replacing.",
      answer: "was obvious that",
      explanation: "easy to see 可以替换为 obvious：It was obvious that..."
    },
    {
      type: "key-word-transformation",
      sectionTitle: "Part 3 | Key Word Transformations",
      original: "I understood the importance of the shop only after I saw the accounts.",
      keyword: "REALISE",
      question: "Complete the second sentence.",
      sentence: "I __________________ the importance of the shop until I saw the accounts.",
      answer: "did not realise",
      explanation: "only after... 可以转换为 not...until...，表示直到……才……。"
    },
    {
      type: "key-word-transformation",
      sectionTitle: "Part 3 | Key Word Transformations",
      original: "The old boiler uses twice as much fuel as the new one.",
      keyword: "FUEL",
      question: "Complete the second sentence.",
      sentence: "The new boiler uses __________________ the old one.",
      answer: "half as much fuel as",
      explanation: "如果旧锅炉是新锅炉的两倍，那么新锅炉就是旧锅炉的一半。"
    },
    {
      type: "key-word-transformation",
      sectionTitle: "Part 3 | Key Word Transformations",
      original: "It doesn't matter which pattern you choose; the price is the same.",
      keyword: "WHICHEVER",
      question: "Complete the second sentence.",
      sentence: "__________________, the price is the same.",
      answer: "Whichever pattern you choose",
      explanation: "It doesn't matter which... 可以转换为 Whichever...。"
    },
    {
      type: "key-word-transformation",
      sectionTitle: "Part 3 | Key Word Transformations",
      original: "While visiting the centre, tourists can join the weaving class free of charge.",
      keyword: "PART",
      question: "Complete the second sentence.",
      sentence: "Tourists can __________________ the weaving class free of charge.",
      answer: "take part in",
      explanation: "join an activity 可以替换为 take part in an activity，注意必须有 in。"
    }
  ];

  readings.push({
    date: "2026-09-27",
    title: "What Is Worth Saving? - Three-Part Practice",
    level: source.level,
    vocabulary: source.vocabulary,
    passage: source.passage,
    translation: source.translation,
    questions
  });
})();
