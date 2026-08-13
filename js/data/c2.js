var APP_DATA = window.APP_DATA || {};

APP_DATA.c2 = {
  modules: [
    {
      id: "c2-m1",
      title: "Registro Formal vs. Informal",
      subtitle: "Alternando entre registros formais e informais com naturalidade",
      lesson: {
        intro: "No nível C2, você deve ser capaz de alternar fluidamente entre registros — falar de forma descontraída com amigos e de forma extremamente formal em um contexto profissional, sem esforço.",
        sections: [
          {
            heading: "Reconhecendo Registros",
            text: "O registro é o nível de formalidade da linguagem, influenciado pelo contexto, pela relação entre os falantes e pelo propósito da comunicação.",
            examples: [
              { en: "Hey, what's up?", pt: "Registro muito informal, entre amigos." },
              { en: "Good afternoon. I hope this message finds you well.", pt: "Registro muito formal, e-mail profissional." }
            ]
          },
          {
            heading: "Vocabulário que Muda com o Registro",
            text: "Muitas ideias podem ser expressas com vocabulário formal ou informal, dependendo do contexto.",
            examples: [
              { en: "kids (informal) vs. children (neutral) vs. offspring (formal/technical)", pt: "Diferentes níveis de formalidade para a mesma ideia." },
              { en: "I gotta go (informal) vs. I must depart (very formal)", pt: "Mesma ideia, registros opostos." }
            ]
          },
          {
            heading: "Código-Switching (Alternância de Registro)",
            text: "Falantes proficientes ajustam o registro instantaneamente conforme a situação muda, muitas vezes na mesma conversa.",
            examples: [
              { en: "To a friend: 'That meeting was a nightmare!' To a boss: 'The meeting presented some challenges.'", pt: "Mesma mensagem, registros completamente diferentes." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "c2-m1-register", word: "Register", phonetic: "/ˈrɛdʒɪstər/", translation: "Registro (linguístico)", example: "Choose the appropriate register for the situation.", exampleTranslation: "Escolha o registro apropriado para a situação." },
        { id: "c2-m1-colloquial", word: "Colloquial", phonetic: "/kəˈloʊkwiəl/", translation: "Coloquial", example: "That's a colloquial expression.", exampleTranslation: "Essa é uma expressão coloquial." },
        { id: "c2-m1-formal", word: "Formal", phonetic: "/ˈfɔːrməl/", translation: "Formal", example: "Please use formal language in this letter.", exampleTranslation: "Por favor, use linguagem formal nesta carta." },
        { id: "c2-m1-tone", word: "Tone", phonetic: "/toʊn/", translation: "Tom", example: "The tone of the email seemed cold.", exampleTranslation: "O tom do e-mail pareceu frio." },
        { id: "c2-m1-appropriate", word: "Appropriate", phonetic: "/əˈproʊpriɪt/", translation: "Apropriado(a)", example: "That comment wasn't appropriate for the meeting.", exampleTranslation: "Aquele comentário não foi apropriado para a reunião." },
        { id: "c2-m1-address-someone", word: "Address (someone)", phonetic: "/əˈdrɛs/", translation: "Dirigir-se a (alguém)", example: "How should I address the CEO?", exampleTranslation: "Como devo me dirigir ao CEO?" },
        { id: "c2-m1-casual", word: "Casual", phonetic: "/ˈkæʒuəl/", translation: "Casual/Descontraído", example: "The meeting had a surprisingly casual tone.", exampleTranslation: "A reunião teve um tom surpreendentemente casual." },
        { id: "c2-m1-nuanced", word: "Nuanced", phonetic: "/ˈnuːɑːnst/", translation: "Sutil/Com nuances", example: "Her response was nuanced and thoughtful.", exampleTranslation: "A resposta dela foi sutil e cuidadosa." },
        { id: "c2-m1-code-switch", word: "Code-switch", phonetic: "/koʊd swɪtʃ/", translation: "Alternar registro/código", example: "Bilingual speakers often code-switch.", exampleTranslation: "Falantes bilíngues costumam alternar entre códigos." },
        { id: "c2-m1-discretion", word: "Discretion", phonetic: "/dɪˈskrɛʃən/", translation: "Discrição/Bom senso", example: "Use your discretion when choosing your words.", exampleTranslation: "Use seu bom senso ao escolher suas palavras." }
      ],
      grammar: {
        title: "Marcadores de Registro",
        explanation: "Certas estruturas gramaticais e vocabulário sinalizam o nível de formalidade de uma frase.",
        table: {
          headers: ["Informal", "Neutro", "Formal"],
          rows: [
            ["Wanna grab lunch?", "Do you want to have lunch?", "Would you care to join me for lunch?"],
            ["I gotta go.", "I need to leave.", "I must take my leave."],
            ["That's awesome!", "That's great.", "That is most impressive."]
          ]
        },
        correct: ["I would be grateful if you could confirm the details.", "Can you send me the info?", "Send me the info, please?"],
        incorrect: ["I would be grateful if you could confirm the details, dude.", "Yo, could you kindly confirm the details?"]
      },
      listening: [
        {
          title: "Two Very Different Emails, Read Aloud",
          accent: "british",
          audioSrc: "assets/audio/c2-m1-listen-0.mp3",
          audioSource: "tts-pregenerated",
          speedLevels: [0.75, 1, 1.25],
          transcript: "Email one: Hey! Just checking if you're free for coffee tomorrow. Let me know! Email two: Dear Dr. Adams, I am writing to inquire about the possibility of scheduling a meeting at your earliest convenience. I look forward to your response.",
          questions: [
            { q: "Which email is informal?", options: ["Email one", "Email two", "Both", "Neither"], answer: 0 },
            { q: "What does 'at your earliest convenience' suggest about the register?", options: ["It's very casual", "It's very formal", "It's rude", "It's ambiguous"], answer: 1 },
            { q: "What is the purpose of the formal email?", options: ["To say hello", "To schedule a meeting", "To cancel a meeting", "To complain"], answer: 1 }
          ]
        },
        {
          title: "The Wedding Toast Debacle",
          accent: "australian",
          transcript: "Marcus had rehearsed his best man speech for weeks, polishing every formal flourish: 'It is with the utmost pleasure that I stand before you this evening.' Then, three glasses of champagne in, the script evaporated. 'Basically,' he announced to two hundred guests, 'Dave's my best mate and he's an absolute legend, so, yeah, cheers.' The groom's grandmother, a retired professor of rhetoric, leaned over to her husband and murmured, 'Well, at least the sentiment survived the register.' Nobody laughed harder than the bride, who had bet Marcus fifty pounds he couldn't last five minutes without swearing. He'd lasted four. What struck the room, oddly, wasn't the collapse of formality itself — after all, best man speeches are expected to wobble — but how naturally the toast recovered afterward, sliding back into something resembling composure for the closing line: 'To Dave and Sarah, may your marriage outlast my nerves tonight.' The audience roared. Occasions like this reveal something true about register that no classroom drill quite captures: it isn't a fixed setting to be maintained, but a rope bridge crossed and recrossed under pressure, and the crossing itself is often the performance people remember most fondly.",
          questions: [
            { q: "What happened to Marcus's speech after a few drinks?", options: ["He refused to speak at all", "His formal register broke down into casual speech", "He read it perfectly as written", "He switched to another language"], answer: 1 },
            { q: "What does the grandmother's comment imply about her attitude toward Marcus's slip?", options: ["She was scandalized and offended", "She found it wittily forgivable, valuing the sincerity over the polish", "She thought the speech was a failure overall", "She didn't notice any change in register"], answer: 1 },
            { q: "According to the passage, what does the wedding toast reveal about register?", options: ["That formal register should never be abandoned", "That register is a fixed setting that must be maintained at all costs", "That register is something crossed and recrossed under pressure, not a fixed state", "That informal register is always inappropriate at weddings"], answer: 2 },
            { q: "What is implied about why the audience 'roared' at the end?", options: ["They were laughing at Marcus's failure", "They were moved by the contrast between the earlier collapse and the composed, affectionate closing line", "They were confused about what happened", "They were applauding out of politeness only"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "The Art of Switching Registers",
          text: "A skilled communicator knows how to adjust their register instantly. With close friends, one might say, 'That test was brutal!' But describing the same experience to a professor might sound more like, 'I found the examination to be quite challenging.' This flexibility isn't about being fake — it's about showing awareness of context, audience, and purpose. Mastering this skill is often what distinguishes an advanced speaker from a truly proficient one.",
          questions: [
            { q: "What does a skilled communicator know how to do?", options: ["Speak only formally", "Adjust their register instantly", "Avoid formal language", "Only use slang"], answer: 1 },
            { q: "What does register flexibility show, according to the text?", options: ["Dishonesty", "Awareness of context, audience, and purpose", "Confusion", "Weakness"], answer: 1 },
            { q: "What distinguishes a proficient speaker, according to the text?", options: ["Speaking loudly", "Mastering register flexibility", "Using big words always", "Speaking quickly"], answer: 1 }
          ]
        },
        {
          title: "The Committee for the Preservation of Excessive Formality",
          text: "There exists, in every organization, a small and self-appointed guild devoted to the proposition that no memo has ever been too stiff. Its members would sooner die than write 'let's fix this' when 'it may be prudent to revisit the matter at hand' remains available. One admires their consistency, if nothing else: an email announcing a broken photocopier can, in their hands, acquire the gravity of a peace treaty. And yet — here is the delicious twist — these same paragons of decorum, once unmoored from their keyboards and deposited at the pub on a Friday, reveal themselves to be as capable of unbridled colloquial chaos as anyone else, hollering about football and ordering 'the usual, mate' with an ease their memos would never confess to possessing. This is not hypocrisy so much as evidence of the very skill this module is built around: knowing that a register is a costume, put on and taken off as the occasion demands, not a permanent personality. The genuine failure, one might argue, belongs not to the person who writes formally at work and loosely at the pub, but to the person who cannot tell the difference — who corresponds with their accountant as though hailing an old school friend, or, worse, addresses their oldest friend as though submitting a grant application.",
          questions: [
            { q: "What does the 'guild' mentioned in the text prefer to write?", options: ["Casual, direct language", "Deliberately stiff, overly formal phrasing", "No emails at all", "Only handwritten letters"], answer: 1 },
            { q: "What tone does the author take toward the 'guild' of formal writers?", options: ["Pure, uncomplicated admiration", "Gentle, amused mockery that still credits their underlying skill", "Outright hostility and contempt", "Complete indifference"], answer: 1 },
            { q: "What is the 'delicious twist' the author points to?", options: ["The formal writers never leave the office", "The same people who write stiffly at work speak very casually elsewhere, showing register is a costume, not a fixed personality", "The guild members secretly hate their jobs", "Nobody actually reads their memos"], answer: 1 },
            { q: "According to the final sentence, what constitutes the real failure of register?", options: ["Writing formally at work", "Speaking casually with friends", "Being unable to distinguish which register fits which context", "Using long sentences"], answer: 2 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva a mesma mensagem (convidar alguém para um café) em registro informal e depois em registro formal.", minWords: 30, modelAnswer: "Informal: Hey, wanna grab coffee sometime this week? No pressure, just let me know what works for you! Formal: I would like to invite you for coffee at your earliest convenience this week, should your schedule permit; please let me know what time would be most suitable." },
        { prompt: "Escreva um parágrafo sobre por que a flexibilidade de registro é importante em ambientes profissionais.", minWords: 25, modelAnswer: "Register flexibility allows professionals to connect with different audiences effectively. Using overly formal language with close colleagues can feel distant, while overly casual language with clients can seem unprofessional." },
        { prompt: "Escreva um ensaio (150-200 palavras) argumentando se a informalidade crescente na comunicação profissional (e-mails, Slack, reuniões) é um avanço positivo ou uma perda de algo valioso. Reconheça pelo menos um contra-argumento antes de defender sua posição.", minWords: 150, minSentences: 9, requiredStructures: ["that said", "arguably", "notwithstanding"], targetWords: ["register", "nuanced", "discretion", "appropriate"], modelAnswer: "The gradual informalization of professional communication is, arguably, one of the more consequential shifts in modern workplace culture, and on balance I believe it represents progress rather than loss. Notwithstanding the nostalgia some feel for the ceremonial letterhead and the carefully starched memo, most of that formality concealed rather than clarified meaning, wrapping simple requests in layers of unnecessary hedging. A Slack message that reads 'can you send the report by 3?' communicates more efficiently than three paragraphs of throat-clearing preamble, and efficiency, in a world of shrinking attention spans, is not a trivial virtue. That said, something genuine is at stake, and it would be dishonest to pretend otherwise: when every register collapses into the same breezy shorthand, we lose the ability to signal occasion, gravity, or respect through language alone, and the nuanced distinctions that once told a reader 'this matters more' or 'we don't know each other well yet' quietly disappear. The appropriate response, then, is not to mourn formality wholesale but to exercise discretion about where it still earns its keep — a condolence letter, a legal contract, a first message to a client still deserve the older register, even if the weekly status update does not. Register, after all, was never meant to be uniform; it was meant to be chosen." }
      ],
      speaking: [
        { phrase: "Would you care to join me for lunch?", tip: "'Would you care to' é uma forma muito educada e formal de convidar alguém." },
        { phrase: "That's awesome!", tip: "Tom animado e informal — apropriado entre amigos." },
        { phrase: "I would be grateful if you could confirm the details.", tip: "Frase típica de e-mails profissionais formais." },
        { phrase: "I gotta go, talk to you later!", tip: "Extremamente informal — apenas entre amigos próximos." },
        { phrase: "I must take my leave.", tip: "Extremamente formal — quase arcaico, usado para efeito dramático ou de muita formalidade." },
        { phrase: "Honestly, the way I see it, being able to switch registers on the fly says more about someone's social intelligence than their vocabulary ever could.", tip: "Dê sua opinião sobre por que a flexibilidade de registro importa, depois reformule a mesma ideia em um tom mais formal, como se estivesse em uma entrevista de emprego." }
      ],
      exercises: {
        fillBlanks: [
          { text: "Wanna grab lunch? (versão neutra: Do you ___ to have lunch?)", answer: "want" },
          { text: "I ___ (must/leave). (versão muito formal de 'I gotta go')", answer: "must leave" },
          { text: "Choose the appropriate ___ for the situation. (registro)", answer: "register" },
          { text: "That's a ___ expression, not formal English. (coloquial)", answer: "colloquial" },
          { text: "How should I ___ the CEO? (dirigir-me a)", answer: "address" }
        ],
        matching: [
          { left: "Register", right: "Registro" },
          { left: "Colloquial", right: "Coloquial" },
          { left: "Tone", right: "Tom" },
          { left: "Casual", right: "Casual" },
          { left: "Discretion", right: "Discrição" },
          { left: "Appropriate", right: "Apropriado(a)" }
        ],
        ordering: [
          { words: ["care", "you", "join", "Would", "me", "to", "lunch", "for?"], answer: "Would you care to join me for lunch?" },
          { words: ["grateful", "would", "I", "confirm", "be", "you", "if", "could"], answer: "I would be grateful if you could confirm" },
          { words: ["awesome", "That's"], answer: "That's awesome" },
          { words: ["go", "gotta", "I"], answer: "I gotta go" },
          { words: ["leave", "must", "my", "I", "take"], answer: "I must take my leave" }
        ],
        translation: [
          { direction: "pt-en", text: "Você gostaria de se juntar a mim para o almoço? (formal)", answer: "Would you care to join me for lunch?" },
          { direction: "pt-en", text: "Eu ficaria grato se você pudesse confirmar os detalhes.", answer: "I would be grateful if you could confirm the details." },
          { direction: "pt-en", text: "Isso é demais! (informal)", answer: "That's awesome!" },
          { direction: "en-pt", text: "I gotta go, talk to you later!", answer: "Eu tenho que ir, falo com você depois!" },
          { direction: "en-pt", text: "I must take my leave.", answer: "Eu devo me retirar." },
          { direction: "en-pt", text: "Choose the appropriate register for the situation.", answer: "Escolha o registro apropriado para a situação." }
        ],
        dictation: [
          { audioText: "Would you care to join me for lunch?", answer: "Would you care to join me for lunch?" },
          { audioText: "That's awesome!", answer: "That's awesome!" },
          { audioText: "I would be grateful if you could confirm the details.", answer: "I would be grateful if you could confirm the details." }
        ],
        dialogue: [
          {
            title: "Switching Registers",
            lines: [
              { speaker: "Colleague", text: "Hey, quick question — could you send me the report?" },
              { speaker: "user", prompt: "Responda de forma casual, dizendo que sim, claro:", options: ["Yeah, sure, I'll send it now.", "I would be delighted to comply.", "I must decline your request."], answer: 0 },
              { speaker: "Colleague", text: "Thanks! By the way, the director wants a formal version too." },
              { speaker: "user", prompt: "Responda de forma formal, dizendo que enviará em breve:", options: ["I will send the formal version shortly.", "Yeah, no prob, I'll send it.", "Sure thing!"], answer: 0 },
              { speaker: "Colleague", text: "Perfect, thank you for your flexibility." }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the most formal option.", options: ["Wanna grab lunch?", "Do you want to have lunch?", "Would you care to join me for lunch?", "Lunch?"], answer: 2, explanation: "'Would you care to' é uma construção educada e elaborada, típica de convites em contextos muito formais, ao contrário das opções mais diretas ou reduzidas." },
        { q: "Choose the most informal option.", options: ["I must depart.", "I need to leave.", "I gotta go.", "I am required to leave."], answer: 2, explanation: "'Gotta' é uma contração coloquial de 'got to', usada apenas em fala descontraída entre amigos, nunca em contextos formais." },
        { type: "tf", q: "Register refers to the level of formality in language.", answer: true, explanation: "Por definição, registro é o grau de formalidade adotado conforme o contexto, a relação entre falantes e o propósito da comunicação." },
        { q: "'Colloquial' means:", options: ["Muito formal", "Coloquial/informal", "Técnico", "Acadêmico"], answer: 1, explanation: "'Colloquial' descreve linguagem do dia a dia, usada em conversas informais, o oposto de vocabulário técnico ou acadêmico." },
        { type: "short", q: "Complete: 'Choose the appropriate ___ for the situation.' (registro)", answer: ["register"], explanation: "'Register' é o termo linguístico exato para o nível de formalidade adequado a cada situação comunicativa." },
        { q: "'Tone' means:", options: ["Tom", "Gramática", "Vocabulário", "Pronúncia"], answer: 0, explanation: "'Tone' refere-se à atitude ou emoção transmitida pela forma de falar/escrever, não a regras gramaticais ou pronúncia." },
        { type: "tf", q: "Skilled communicators use the exact same register in every situation.", answer: false, explanation: "Comunicadores habilidosos ajustam o registro de acordo com o contexto, a audiência e o propósito." },
        { q: "Choose the correct formal sentence.", options: ["I would be grateful if you could confirm the details.", "I'd be grateful if you could confirm, dude.", "Confirm the details, please, thanks a bunch.", "Gimme the details, please."], answer: 0, explanation: "Misturar 'I would be grateful' (formal) com gírias como 'dude' ou 'gimme' quebra a consistência do registro, algo que um falante C2 evita." },
        { q: "'Discretion' means:", options: ["Descuido", "Discrição/Bom senso", "Confusão", "Rudeza"], answer: 1, explanation: "'Discretion' é a capacidade de julgar com bom senso o que é apropriado dizer ou fazer em cada situação." },
        { type: "short", q: "Complete: 'How should I ___ the CEO?' (dirigir-me a)", answer: ["address"], explanation: "'Address someone' significa se dirigir formalmente a alguém, especialmente em contextos hierárquicos ou profissionais." },
        { q: "Choose the correct sentence.", options: ["I must take my leave.", "I must taking my leave.", "I must to take my leave.", "I must took my leave."], answer: 0, explanation: "Depois de modal verb ('must'), usa-se o infinitivo sem 'to': 'must take', nunca 'must to take' ou formas com '-ing'/passado." },
        { type: "tf", q: "Using overly formal language with close friends always improves communication.", answer: false, explanation: "Isso pode soar estranho ou distante; o registro deve se adequar ao contexto e à relação entre os falantes." }
      ]
    },
    {
      id: "c2-m2",
      title: "Humor e Ironia",
      subtitle: "Entendendo piadas, ironia e sarcasmo em inglês",
      lesson: {
        intro: "Humor é uma das últimas fronteiras da fluência — entender piadas, ironia e sarcasmo exige domínio cultural e linguístico profundo.",
        sections: [
          {
            heading: "Ironia",
            text: "Ironia ocorre quando o significado real é o oposto do que é dito literalmente, geralmente para efeito humorístico ou crítico.",
            examples: [
              { en: "'What a wonderful day,' he said, soaked from the storm.", pt: "Ironia: o dia claramente não foi maravilhoso." },
              { en: "'Nice job,' she said sarcastically after he spilled the coffee.", pt: "Sarcasmo: elogio que na verdade é uma crítica." }
            ]
          },
          {
            heading: "Trocadilhos (Puns)",
            text: "Trocadilhos usam a ambiguidade ou similaridade sonora entre palavras para criar humor.",
            examples: [
              { en: "I used to be a banker, but I lost interest.", pt: "Trocadilho com 'interest' (juros / interesse)." },
              { en: "A bicycle can't stand on its own because it's two-tired.", pt: "Trocadilho: 'two-tired' soa como 'too tired'." }
            ]
          },
          {
            heading: "Sinais de Ironia e Sarcasmo na Fala",
            text: "Entonação, exagero e contexto ajudam a identificar quando algo é dito ironicamente.",
            examples: [
              { en: "'Oh, great, another Monday.' (said with a flat tone)", pt: "O tom de voz revela que a pessoa não está realmente feliz." },
              { en: "'Sure, because that always works out well...'", pt: "A expressão sugere ceticismo, não concordância real." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "c2-m2-irony", word: "Irony", phonetic: "/ˈaɪrəni/", translation: "Ironia", example: "The irony of the situation wasn't lost on anyone.", exampleTranslation: "A ironia da situação não passou despercebida por ninguém." },
        { id: "c2-m2-sarcasm", word: "Sarcasm", phonetic: "/ˈsɑːrkæzəm/", translation: "Sarcasmo", example: "His comment was dripping with sarcasm.", exampleTranslation: "O comentário dele estava carregado de sarcasmo." },
        { id: "c2-m2-pun", word: "Pun", phonetic: "/pʌn/", translation: "Trocadilho", example: "That joke was a clever pun.", exampleTranslation: "Aquela piada foi um trocadilho inteligente." },
        { id: "c2-m2-deadpan", word: "Deadpan", phonetic: "/ˈdɛdpæn/", translation: "Com cara séria (humor)", example: "He has a great deadpan sense of humor.", exampleTranslation: "Ele tem um ótimo senso de humor com cara séria." },
        { id: "c2-m2-wit", word: "Wit", phonetic: "/wɪt/", translation: "Sagacidade (humor inteligente)", example: "She's known for her sharp wit.", exampleTranslation: "Ela é conhecida por sua sagacidade afiada." },
        { id: "c2-m2-exaggeration", word: "Exaggeration", phonetic: "/ɪɡˌzædʒəˈreɪʃən/", translation: "Exagero", example: "That's a bit of an exaggeration!", exampleTranslation: "Isso é um pouco de exagero!" },
        { id: "c2-m2-punchline", word: "Punchline", phonetic: "/ˈpʌntʃlaɪn/", translation: "Final de uma piada (a graça)", example: "The punchline caught everyone off guard.", exampleTranslation: "O final da piada pegou todo mundo de surpresa." },
        { id: "c2-m2-self-deprecating", word: "Self-deprecating", phonetic: "/sɛlf ˈdɛprəkeɪtɪŋ/", translation: "Autodepreciativo(a)", example: "He made a self-deprecating joke about his height.", exampleTranslation: "Ele fez uma piada autodepreciativa sobre sua altura." },
        { id: "c2-m2-mock", word: "Mock", phonetic: "/mɒk/", translation: "Zombar/Imitar de forma jocosa", example: "They were just mocking each other playfully.", exampleTranslation: "Eles estavam apenas zombando um do outro de forma brincalhona." },
        { id: "c2-m2-get-the-joke", word: "Get the joke", phonetic: "/ɡɛt ðə dʒoʊk/", translation: "Entender a piada", example: "It took me a minute to get the joke.", exampleTranslation: "Levei um minuto para entender a piada." }
      ],
      grammar: {
        title: "Marcadores de Ironia na Linguagem",
        explanation: "Certas palavras e estruturas frequentemente sinalizam ironia ou sarcasmo, especialmente quando combinadas com um tom exagerado ou contrastante.",
        table: {
          headers: ["Marcador", "Exemplo", "Significado Real"],
          rows: [
            ["'Oh, great...'", "Oh, great, more rain.", "Isso não é bom."],
            ["'Sure, because...'", "Sure, because that's totally normal.", "Isso não é normal."],
            ["'Nice one'", "Nice one, you broke it.", "Isso não foi legal."]
          ]
        },
        correct: ["'Oh, great, another meeting,' she said flatly.", "'Sure, that'll definitely work,' he said, rolling his eyes.", "His deadpan delivery made the joke even funnier."],
        incorrect: ["'Oh, great, another meeting,' she said enthusiastically, meaning it sincerely."]
      },
      listening: [
        {
          title: "A Sarcastic Exchange",
          accent: "american",
          transcript: "A: I heard you got a flat tire on the way here. B: Oh, great, exactly what I needed today. A: At least it wasn't raining too. B: Oh sure, because that would've made my day so much better. A: Well, look on the bright side — at least you have a good story now.",
          questions: [
            { q: "How does B feel about the flat tire?", options: ["Genuinely happy", "Annoyed, using sarcasm", "Indifferent", "Excited"], answer: 1 },
            { q: "What does 'Oh, great' suggest here?", options: ["Real enthusiasm", "Sarcasm — the opposite feeling", "Confusion", "Agreement"], answer: 1 },
            { q: "What does A suggest at the end?", options: ["To be angry forever", "To look on the bright side", "To buy a new car", "To ignore the problem"], answer: 1 }
          ]
        },
        {
          title: "Performance Review Season",
          accent: "british",
          transcript: "A: So, how'd your performance review go? B: Oh, spectacularly. Apparently I'm 'exceeding expectations in some areas' — which, if you speak fluent corporate, means I'm doing fine at half my job and nobody's noticed the other half yet. A: Ha! And the raise? B: A generous three percent. I nearly wept. Inflation alone will eat that before Christmas, but sure, I'll take it, thanks so much. A: Did you say any of that to your manager? B: God, no. I sat there nodding like a bobblehead, said 'I really appreciate the feedback,' and saved the actual commentary for you, obviously. A: That's what friends are for — the unfiltered version. B: Exactly. Somebody's got to hear the real review.",
          questions: [
            { q: "What is the main topic of this conversation?", options: ["Planning a holiday", "B's reaction to their performance review and raise", "A job interview", "A disagreement between friends"], answer: 1 },
            { q: "What percentage raise did B receive?", options: ["Ten percent", "Three percent", "No raise at all", "Fifty percent"], answer: 1 },
            { q: "What can be inferred about what B actually said to their manager versus what they say to A?", options: ["B said exactly the same thing to both", "B was openly critical to the manager and polite to A", "B gave a polite, agreeable response to the manager but is being candidly sarcastic with A", "B refused to speak to the manager at all"], answer: 2 }
          ]
        }
      ],
      reading: [
        {
          title: "The Power of a Good Pun",
          text: "Puns are often called the lowest form of humor, but they require surprising linguistic skill. A good pun plays with double meanings or similar sounds, catching the listener off guard. For example, 'I'm reading a book on anti-gravity — it's impossible to put down' uses the double meaning of 'put down' (to stop reading vs. to place something down). While some people groan at puns, others consider them true wordplay artistry.",
          questions: [
            { q: "What are puns often called?", options: ["The highest form of humor", "The lowest form of humor", "Not humor at all", "Only for children"], answer: 1 },
            { q: "What does a good pun play with?", options: ["Grammar rules only", "Double meanings or similar sounds", "Facial expressions", "Nothing specific"], answer: 1 },
            { q: "What does 'put down' mean in the example?", options: ["Only to place something down", "Both to stop reading and to place something down", "Only to stop reading", "Neither meaning"], answer: 1 }
          ]
        },
        {
          title: "In Praise of the Well-Timed Silence",
          text: "There is a particular kind of comic genius that says nothing at all. Consider the colleague who, upon hearing that the printer has once again eaten someone's entire quarterly report, simply raises an eyebrow, exhales slowly through the nose, and returns to typing. No punchline was delivered, and yet the room understood perfectly: this was not the first printer catastrophe, and it would certainly not be the last. Deadpan delivery works on a principle that verbal jokes often ignore — that restraint, not excess, is what makes an audience lean in. A comedian who shouts the joke has already told you how to feel about it; one who says it flatly, or not at all, leaves the interpretive work to you, and audiences are curiously grateful for being trusted with that labor. This is, perhaps, why the single raised eyebrow so reliably outperforms an elaborate bit: it costs nothing, risks nothing, and somehow lands harder than a rehearsed routine. The truly skilled deploy silence the way others deploy punchlines — sparingly, and exactly when it will do the most damage.",
          questions: [
            { q: "What does the colleague do when the printer eats the report?", options: ["They shout angrily", "They raise an eyebrow, exhale, and keep working, without saying a word", "They tell an elaborate joke", "They immediately fix the printer"], answer: 1 },
            { q: "According to the text, what principle does deadpan humor rely on?", options: ["Loud, exaggerated delivery", "Restraint, leaving interpretation to the audience", "Explaining the joke clearly", "Repetition of the punchline"], answer: 1 },
            { q: "What can be inferred about why the room 'understood perfectly' without a punchline?", options: ["Everyone had heard the same joke before rehearsed", "Shared context about repeated printer failures let them fill in the humor themselves", "The colleague explained it afterward", "The printer made a funny noise"], answer: 1 },
            { q: "What is the author's overall attitude toward deadpan, silent humor?", options: ["Dismissive — they think it's a weak substitute for real jokes", "Admiring — they see it as a subtle, high-risk-free comic skill", "Neutral and purely descriptive, without any opinion", "Confused about how it works"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 2 frases irônicas ou sarcásticas sobre situações do dia a dia (ex: trânsito, clima).", minWords: 15, modelAnswer: "Oh, great, another traffic jam — exactly what I needed today. Sure, because waiting an hour is definitely my favorite hobby." },
        { prompt: "Explique, em suas palavras, a diferença entre ironia e sarcasmo, com um exemplo de cada.", minWords: 25, modelAnswer: "Irony is when the opposite of what's expected happens, like rain on your wedding day. Sarcasm is using irony on purpose to mock or criticize, like saying 'Nice job' after someone makes a mistake." },
        { prompt: "Escreva um texto (150-200 palavras) contando, com humor irônico ou sarcástico, uma situação frustrante do cotidiano (pode ser real ou inventada). Use pelo menos um trocadilho e deixe claro, pelo tom, que você está sendo irônico sem precisar dizer 'isso é ironia'.", minWords: 150, minSentences: 10, requiredStructures: ["oh great", "sure, because", "let's just say"], targetWords: ["deadpan", "wit", "punchline", "exaggeration"], modelAnswer: "Let's just say my Monday began the way all the best disasters do: quietly, and with false promise. The coffee machine, which had served me faithfully for two years, chose this particular morning to develop what I can only describe as a personality, hissing at me instead of producing anything drinkable. Oh great, I thought, exactly what I needed before a nine a.m. meeting. Sure, because starting the week caffeine-free is definitely a strategy successful people swear by. I arrived at the office to discover that the meeting had, in fact, been moved to eight, meaning I had missed the first half while standing in the kitchen negotiating with an appliance. My colleague, a woman with a talent for deadpan delivery that borders on professional, looked at me and said, without a flicker of expression, 'Nice timing.' It landed harder than any punchline I could have written myself. I told her, with what little wit I had left, that I was simply too dedicated to punctuality to show up on the correct day. She didn't laugh, which, somehow, was funnier than if she had. Calling the whole morning a catastrophe would be an exaggeration, I admit, but not by much. By noon the coffee machine was fixed. By then, so was my dignity — mostly." }
      ],
      speaking: [
        { phrase: "Oh, great, another Monday.", tip: "Diga com um tom monótono e sem entusiasmo para soar irônico." },
        { phrase: "Sure, because that always works out well.", tip: "O tom cético é essencial — sem ele, a frase soa sincera." },
        { phrase: "That's a clever pun!", tip: "'Pun' rima com 'sun' e 'fun'." },
        { phrase: "He has a great deadpan sense of humor.", tip: "'Deadpan' descreve expressão facial séria ao dizer algo engraçado." },
        { phrase: "It took me a minute to get the joke.", tip: "'Get the joke' é uma expressão comum para dizer que você entendeu a piada." },
        { phrase: "People assume sarcasm is just rudeness, but honestly, at its best it's closer to a compressed form of wit — you're trusting the listener to do half the work.", tip: "Defenda essa opinião sobre o sarcasmo por pelo menos 30 segundos, incluindo um contra-argumento (ex: que sarcasmo pode magoar)." }
      ],
      exercises: {
        fillBlanks: [
          { text: "'Oh, ___, another meeting,' she said flatly. (irônico)", answer: "great" },
          { text: "His comment was dripping with ___. (sarcasmo)", answer: "sarcasm" },
          { text: "That joke was a clever ___. (trocadilho)", answer: "pun" },
          { text: "He has a great ___ sense of humor. (cara séria)", answer: "deadpan" },
          { text: "It took me a minute to ___ the joke. (entender)", answer: "get" }
        ],
        matching: [
          { left: "Irony", right: "Ironia" },
          { left: "Sarcasm", right: "Sarcasmo" },
          { left: "Pun", right: "Trocadilho" },
          { left: "Wit", right: "Sagacidade" },
          { left: "Punchline", right: "Final da piada" },
          { left: "Mock", right: "Zombar" }
        ],
        ordering: [
          { words: ["great", "Oh", "meeting", "another"], answer: "Oh great another meeting" },
          { words: ["sarcasm", "was", "with", "comment", "His", "dripping"], answer: "His comment was dripping with sarcasm" },
          { words: ["pun", "clever", "a", "was", "That", "joke"], answer: "That joke was a clever pun" },
          { words: ["humor", "of", "great", "has", "sense", "He", "a", "deadpan"], answer: "He has a great deadpan sense of humor" },
          { words: ["joke", "get", "the", "took", "me", "minute", "a", "It", "to"], answer: "It took me a minute to get the joke" }
        ],
        translation: [
          { direction: "pt-en", text: "Que dia maravilhoso, disse ele, encharcado pela tempestade. (irônico)", answer: "What a wonderful day, he said, soaked from the storm." },
          { direction: "pt-en", text: "O comentário dele estava carregado de sarcasmo.", answer: "His comment was dripping with sarcasm." },
          { direction: "pt-en", text: "Levei um minuto para entender a piada.", answer: "It took me a minute to get the joke." },
          { direction: "en-pt", text: "That joke was a clever pun.", answer: "Aquela piada foi um trocadilho inteligente." },
          { direction: "en-pt", text: "He has a great deadpan sense of humor.", answer: "Ele tem um ótimo senso de humor com cara séria." },
          { direction: "en-pt", text: "She's known for her sharp wit.", answer: "Ela é conhecida por sua sagacidade afiada." }
        ],
        dictation: [
          { audioText: "His comment was dripping with sarcasm.", answer: "His comment was dripping with sarcasm." },
          { audioText: "That joke was a clever pun.", answer: "That joke was a clever pun." },
          { audioText: "It took me a minute to get the joke.", answer: "It took me a minute to get the joke." }
        ],
        dialogue: [
          {
            title: "A Sarcastic Friend",
            lines: [
              { speaker: "Lia", text: "I just missed my bus AGAIN." },
              { speaker: "user", prompt: "Responda de forma sarcástica (Oh great...):", options: ["Oh great, exactly what you needed today.", "I am so happy for you.", "That is fantastic news."], answer: 0 },
              { speaker: "Lia", text: "Ha! Exactly. At least the weather is nice, right?" },
              { speaker: "user", prompt: "Responda ironicamente, sugerindo que na verdade está chovendo:", options: ["Sure, if you consider rain 'nice'.", "Yes, it's sunny and warm.", "I agree completely."], answer: 0 },
              { speaker: "Lia", text: "Ha, touché!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "'Irony' means:", options: ["Verdade literal", "Situação onde o significado real é o oposto do esperado", "Elogio sincero", "Descrição neutra"], answer: 1, explanation: "Ironia ocorre quando o resultado ou significado real contrasta com o que seria naturalmente esperado, muitas vezes de forma inesperada ou irônica." },
        { q: "'Sarcasm' is best described as:", options: ["Elogio genuíno", "Uso intencional de ironia para criticar ou zombar", "Um tipo de gramática", "Um sotaque"], answer: 1, explanation: "Sarcasmo é uma forma deliberada de ironia usada para criticar, zombar ou expressar desprezo, geralmente com tom de voz característico." },
        { type: "tf", q: "'Oh, great, another meeting' said with a flat tone usually means genuine excitement.", answer: false, explanation: "Dito com tom monótono, geralmente é sarcasmo, o oposto de entusiasmo genuíno." },
        { q: "'Pun' means:", options: ["Discurso formal", "Trocadilho", "Insulto", "Elogio"], answer: 1, explanation: "'Pun' é um jogo de palavras que explora duplo sentido ou semelhança sonora entre termos diferentes, como em 'I lost interest' (juros/interesse)." },
        { type: "short", q: "Complete: 'It took me a minute to ___ the joke.' (entender)", answer: ["get"], explanation: "'Get the joke' é a expressão idiomática padrão para dizer que alguém compreendeu a graça de uma piada." },
        { q: "'Deadpan' describes:", options: ["Uma expressão facial exagerada", "Uma expressão facial séria ao dizer algo engraçado", "Um tom triste", "Um sotaque forte"], answer: 1, explanation: "'Deadpan' é o estilo de humor entregue com expressão facial neutra e séria, o que intensifica o efeito cômico pelo contraste." },
        { type: "tf", q: "Tone of voice is irrelevant when identifying sarcasm.", answer: false, explanation: "O tom de voz é frequentemente essencial para identificar sarcasmo." },
        { q: "Choose the sentence that is likely sarcastic.", options: ["'I'm thrilled, this is my dream come true,' she said, beaming.", "'Oh sure, because that always works out well,' he said, rolling his eyes.", "'Thank you so much for your help,' she said sincerely.", "'This is wonderful news,' he said, smiling genuinely."], answer: 1, explanation: "'Rolling his eyes' e a expressão 'Oh sure, because...' são sinais claros de ceticismo, indicando que a frase quer dizer o oposto do que afirma." },
        { q: "'Wit' means:", options: ["Burrice", "Sagacidade/inteligência para humor", "Tristeza", "Raiva"], answer: 1, explanation: "'Wit' descreve a capacidade de ser engraçado de forma inteligente e rápida, associada à perspicácia verbal." },
        { type: "short", q: "Complete: 'His comment was ___ with sarcasm.' (repleto)", answer: ["dripping"], explanation: "'Dripping with sarcasm' é uma expressão idiomática que enfatiza que algo está extremamente carregado de sarcasmo." },
        { q: "'Punchline' means:", options: ["O início de uma piada", "A parte engraçada final de uma piada", "Um tipo de soco", "Uma crítica séria"], answer: 1, explanation: "'Punchline' é o desfecho de uma piada, o momento final que revela a graça ou o efeito surpresa." },
        { type: "tf", q: "Understanding irony and sarcasm often requires cultural and contextual knowledge, not just vocabulary.", answer: true, explanation: "Ironia e sarcasmo dependem fortemente de tom, contexto e conhecimento cultural compartilhado, não apenas do significado literal das palavras." }
      ]
    },
    {
      id: "c2-m3",
      title: "Gírias e Expressões Coloquiais",
      subtitle: "Slang comum e expressões do inglês falado informal",
      lesson: {
        intro: "Gírias mudam rapidamente e variam por região e geração, mas conhecer as mais comuns ajuda você a soar mais natural em conversas informais.",
        sections: [
          {
            heading: "Gírias Gerais",
            text: "Algumas gírias são amplamente usadas no inglês informal, independentemente da região.",
            examples: [
              { en: "That movie was lit!", pt: "Aquele filme foi incrível! ('lit' = muito bom/animado)" },
              { en: "I'm dead broke this month.", pt: "Estou completamente sem dinheiro este mês." }
            ]
          },
          {
            heading: "Gírias para Concordar/Discordar",
            text: "Formas informais de concordar ou expressar entusiasmo.",
            examples: [
              { en: "For sure!", pt: "Com certeza! (concordância informal)" },
              { en: "No way!", pt: "De jeito nenhum! / Sério?! (surpresa/descrença)" }
            ]
          },
          {
            heading: "Cuidado com o Contexto",
            text: "Gírias são apropriadas em conversas casuais, mas devem ser evitadas em contextos formais ou profissionais.",
            examples: [
              { en: "That's so lit! (casual, entre amigos)", pt: "Evite em um e-mail profissional." },
              { en: "I would like to express my appreciation. (formal)", pt: "Alternativa apropriada para contextos formais." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "c2-m3-lit", word: "Lit", phonetic: "/lɪt/", translation: "Incrível/Animado (gíria)", example: "The party was lit!", exampleTranslation: "A festa foi incrível!" },
        { id: "c2-m3-broke", word: "Broke", phonetic: "/broʊk/", translation: "Sem dinheiro (gíria)", example: "I'm totally broke right now.", exampleTranslation: "Estou completamente sem dinheiro agora." },
        { id: "c2-m3-for-sure", word: "For sure", phonetic: "/fɔːr ʃʊr/", translation: "Com certeza (gíria)", example: "Are you coming? For sure!", exampleTranslation: "Você vem? Com certeza!" },
        { id: "c2-m3-no-way", word: "No way", phonetic: "/noʊ weɪ/", translation: "De jeito nenhum/Sério? (gíria)", example: "No way, that's amazing!", exampleTranslation: "Sério? Isso é incrível!" },
        { id: "c2-m3-chill", word: "Chill", phonetic: "/tʃɪl/", translation: "Relaxar/Tranquilo (gíria)", example: "Let's just chill this weekend.", exampleTranslation: "Vamos só relaxar neste fim de semana." },
        { id: "c2-m3-legit", word: "Legit", phonetic: "/lɪˈdʒɪt/", translation: "De verdade/Legítimo (gíria)", example: "That's a legit concern.", exampleTranslation: "Essa é uma preocupação de verdade." },
        { id: "c2-m3-ghost-someone", word: "Ghost (someone)", phonetic: "/ɡoʊst/", translation: "Sumir/Ignorar alguém sem explicação (gíria)", example: "He ghosted me after the first date.", exampleTranslation: "Ele sumiu sem explicação depois do primeiro encontro." },
        { id: "c2-m3-salty", word: "Salty", phonetic: "/ˈsɔːlti/", translation: "Chateado/Ressentido (gíria)", example: "Don't be salty about losing the game.", exampleTranslation: "Não fique chateado por ter perdido o jogo." },
        { id: "c2-m3-low-key", word: "Low-key", phonetic: "/loʊ kiː/", translation: "Discretamente/Meio que (gíria)", example: "I low-key love this song.", exampleTranslation: "Eu meio que amo essa música." },
        { id: "c2-m3-vibe", word: "Vibe", phonetic: "/vaɪb/", translation: "Clima/Energia (gíria)", example: "This place has a great vibe.", exampleTranslation: "Este lugar tem um clima ótimo." }
      ],
      grammar: {
        title: "Gíria vs. Linguagem Neutra",
        explanation: "Gírias têm equivalentes mais neutros ou formais — saber alternar entre eles é essencial para o contexto certo.",
        table: {
          headers: ["Gíria", "Significado Neutro"],
          rows: [
            ["That's lit!", "That's really good/exciting!"],
            ["I'm broke.", "I don't have much money."],
            ["He ghosted me.", "He stopped responding without explanation."],
            ["Don't be salty.", "Don't be upset/bitter."]
          ]
        },
        correct: ["That party was lit! (casual)", "I don't have much money right now. (neutro)", "He stopped responding without any explanation. (neutro)"],
        incorrect: ["I am currently experiencing a lack of funds, bro. (mistura estranha de registros)"]
      },
      listening: [
        {
          title: "Catching Up with Slang",
          accent: "american",
          transcript: "A: How was the party last night? B: It was lit! Everyone had such a great vibe. A: No way, I wish I'd gone! B: Yeah, but I'm super broke now, I spent too much. A: Classic. Well, don't be salty about it!",
          questions: [
            { q: "How does B describe the party?", options: ["Boring", "Lit (amazing)", "Terrible", "Empty"], answer: 1 },
            { q: "What does B say about money?", options: ["They have plenty", "They're broke", "They found money", "They don't care about money"], answer: 1 },
            { q: "What does A tell B not to be?", options: ["Happy", "Salty", "Broke", "Chill"], answer: 1 }
          ]
        },
        {
          title: "A Grandmother Meets Gen Z Slang",
          accent: "australian",
          transcript: "A: Nan, I need you to tell Mum the trip was low-key amazing, okay? B: Low-key? Was it a secret trip? A: No, no — low-key just means, like, kind of, but actually a lot. B: Right, so it was secretly very amazing. A: Sure, close enough. Also don't mention that I'm a bit broke now because of it. B: Ah, so it was expensive. A: Legit expensive, yeah. But the vibe was incredible, honestly, no cap. B: No cap? Are we talking about hats now? A: (laughing) No, Nan, 'no cap' means I'm not lying. B: Well, why didn't you just say that? Honestly, you lot need subtitles.",
          questions: [
            { q: "What is the grandmother mainly confused about during the conversation?", options: ["The cost of the trip", "The meaning of modern slang expressions", "Where the trip took place", "Who paid for the trip"], answer: 1 },
            { q: "What does A ask the grandmother not to mention to Mum?", options: ["That the trip was amazing", "That A is a bit broke now", "That A lost the tickets", "That A wants to go again"], answer: 1 },
            { q: "What is implied by the grandmother's final comment, 'you lot need subtitles'?", options: ["She thinks the trip needs a video recap", "She's affectionately teasing that the younger generation's slang is like a different language to her", "She wants to watch a movie with subtitles", "She is genuinely angry at A"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "Slang Across Generations",
          text: "Slang evolves quickly, and words that were popular a decade ago might sound outdated today. For instance, younger generations often use words like 'lit,' 'low-key,' and 'vibe' to describe everyday experiences. While slang can make conversations feel more natural and relatable, it's important to recognize when it's appropriate — using too much slang in a job interview, for example, could come across as unprofessional.",
          questions: [
            { q: "What does the text say about slang?", options: ["It never changes", "It evolves quickly", "It's only used by older people", "It's always appropriate"], answer: 1 },
            { q: "What examples of current slang are mentioned?", options: ["Lit, low-key, vibe", "Formal, professional, academic", "Old-fashioned words only", "Technical jargon"], answer: 0 },
            { q: "Where might slang be inappropriate?", options: ["With close friends", "In a job interview", "In casual texts", "At a party"], answer: 1 }
          ]
        },
        {
          title: "The Graveyard of Dead Slang",
          text: "Somewhere, there is an invisible graveyard reserved for slang that has outlived its welcome — a resting place for 'groovy,' 'radical,' and, any day now, presumably 'lit' itself. Slang's entire charm rests on a cruel irony: the very qualities that make a word feel electrifyingly current are the same ones that guarantee its swift expiration. A term becomes cool precisely because it signals membership in an in-group defined by recency, and the moment that word leaks into a parent's vocabulary, or worse, into a corporate marketing email, its currency collapses overnight. This is not decline so much as design; slang is built to be disposable, cycling through generations like fast fashion for the mouth. What's curious is how selectively certain terms escape the graveyard altogether, graduating into standard usage so thoroughly that most speakers forget they were ever considered edgy — 'okay' itself began life as slang. The lesson for the learner, then, is not to memorize today's list as though it were permanent, but to develop an ear for the pattern: notice who uses a given expression, how self-consciously, and whether it still carries any charge, because by the time a textbook prints it, the charge has usually already faded.",
          questions: [
            { q: "What metaphor does the author use to describe outdated slang?", options: ["A treasure chest", "An invisible graveyard", "A museum exhibit", "A locked vault"], answer: 1 },
            { q: "Why does slang tend to expire quickly, according to the text?", options: ["Because it's grammatically incorrect", "Because its coolness depends on signaling recency and in-group membership, which fades once it spreads", "Because dictionaries ban it", "Because only teenagers can legally use it"], answer: 1 },
            { q: "What example does the author give of slang that escaped the 'graveyard'?", options: ["'Lit'", "'Groovy'", "'Okay'", "'Radical'"], answer: 2 },
            { q: "What is the author's implied advice to language learners?", options: ["Memorize a fixed list of current slang and use it forever", "Develop an ear for how and by whom an expression is used, since its 'freshness' is temporary", "Avoid slang entirely at all costs", "Only trust slang printed in textbooks"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 3 frases usando gírias diferentes (lit, broke, chill, legit, low-key, vibe).", minWords: 15, modelAnswer: "That concert was lit! I'm broke this month. Let's just chill and watch a movie." },
        { prompt: "Reescreva 3 frases com gíria para uma versão mais neutra/formal.", minWords: 15, modelAnswer: "That was really exciting. I don't have much money right now. He stopped responding without explanation." },
        { prompt: "Escreva um texto (150-200 palavras) explicando a um estrangeiro fictício por que a gíria muda tão rápido e por que usar gírias 'datadas' pode soar estranho, mesmo que a intenção seja soar descontraído. Dê exemplos.", minWords: 150, minSentences: 9, requiredStructures: ["that said", "in other words", "arguably"], targetWords: ["vibe", "low-key", "legit", "chill"], modelAnswer: "Slang, I'd explain to any newcomer, is arguably the fastest-moving layer of any language, and understanding why it changes so quickly matters more than memorizing today's list. A slang word becomes popular because it signals that the speaker is plugged into something current; in other words, its appeal depends entirely on freshness. The moment a term spreads too widely, especially once older generations start using it earnestly, it stops sounding cool and starts sounding try-hard. That's why saying something was 'totally rad' today would get you a confused look rather than admiration, even though it meant exactly the same thing 'lit' means now. That said, this doesn't mean slang is unimportant or something to avoid; used well, it makes you sound natural rather than textbook-stiff. If a friend says a party was low-key incredible, you don't need to overthink it, you just need to recognize the vibe they're describing and respond in kind, maybe with something legit enthusiastic yourself. The real skill isn't collecting slang like stamps, but learning to chill about getting it slightly wrong, since even native speakers argue constantly about what still counts as current." }
      ],
      speaking: [
        { phrase: "That party was lit!", tip: "Diga com entusiasmo — é uma gíria animada e informal." },
        { phrase: "I'm totally broke right now.", tip: "'Broke' aqui não tem nada a ver com 'quebrado' fisicamente." },
        { phrase: "Don't be salty about it.", tip: "'Salty' aqui é figurado, não literal (sabor)." },
        { phrase: "This place has a great vibe.", tip: "'Vibe' é uma palavra emprestada informalmente de 'vibration'." },
        { phrase: "He ghosted me.", tip: "'Ghosted' vem de 'ghost' (fantasma) — sumir como um fantasma." },
        { phrase: "Honestly, slang from ten years ago sounds way more embarrassing to me than something openly old-fashioned — there's something about trying too hard to sound current that ages worse than just sounding formal.", tip: "Compare essas duas ideias (gíria datada vs. formalidade antiga) com sutileza, explicando qual você acha pior e por quê." }
      ],
      exercises: {
        fillBlanks: [
          { text: "That party was ___! (gíria para incrível)", answer: "lit" },
          { text: "I'm totally ___ right now. (sem dinheiro)", answer: "broke" },
          { text: "Don't be ___ about losing. (chateado)", answer: "salty" },
          { text: "This place has a great ___. (clima/energia)", answer: "vibe" },
          { text: "He ___ me after the first date. (sumiu)", answer: "ghosted" }
        ],
        matching: [
          { left: "Lit", right: "Incrível/Animado" },
          { left: "Broke", right: "Sem dinheiro" },
          { left: "Chill", right: "Relaxar" },
          { left: "Salty", right: "Chateado/Ressentido" },
          { left: "Vibe", right: "Clima/Energia" },
          { left: "Legit", right: "De verdade" }
        ],
        ordering: [
          { words: ["was", "party", "lit", "That"], answer: "That party was lit" },
          { words: ["totally", "broke", "I'm", "now", "right"], answer: "I'm totally broke right now" },
          { words: ["salty", "about", "Don't", "it", "be"], answer: "Don't be salty about it" },
          { words: ["vibe", "has", "This", "great", "a", "place"], answer: "This place has a great vibe" },
          { words: ["ghosted", "me", "He"], answer: "He ghosted me" }
        ],
        translation: [
          { direction: "pt-en", text: "Aquela festa foi incrível! (gíria)", answer: "That party was lit!" },
          { direction: "pt-en", text: "Estou completamente sem dinheiro.", answer: "I'm totally broke." },
          { direction: "pt-en", text: "Este lugar tem um clima ótimo.", answer: "This place has a great vibe." },
          { direction: "en-pt", text: "Don't be salty about it.", answer: "Não fique chateado com isso." },
          { direction: "en-pt", text: "He ghosted me after the first date.", answer: "Ele sumiu sem explicação depois do primeiro encontro." },
          { direction: "en-pt", text: "For sure, I'll be there!", answer: "Com certeza, estarei lá!" }
        ],
        dictation: [
          { audioText: "That party was lit!", answer: "That party was lit!" },
          { audioText: "I'm totally broke right now.", answer: "I'm totally broke right now." },
          { audioText: "This place has a great vibe.", answer: "This place has a great vibe." }
        ],
        dialogue: [
          {
            title: "Slang Talk",
            lines: [
              { speaker: "Jay", text: "How was the concert?" },
              { speaker: "user", prompt: "Diga que foi incrível (lit):", options: ["It was lit!", "It was salty.", "It was broke."], answer: 0 },
              { speaker: "Jay", text: "No way, I'm so jealous! What's the vibe like there usually?" },
              { speaker: "user", prompt: "Diga que o clima é sempre ótimo:", options: ["The vibe is always great.", "The vibe is always broke.", "The vibe is always ghosted."], answer: 0 },
              { speaker: "Jay", text: "I need to go next time!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "'Lit' (slang) means:", options: ["Chato", "Incrível/animado", "Triste", "Caro"], answer: 1, explanation: "'Lit' é uma gíria usada para descrever algo empolgante ou excelente, geralmente sobre festas ou eventos animados." },
        { q: "'Broke' (slang) means:", options: ["Rico", "Sem dinheiro", "Quebrado fisicamente", "Ocupado"], answer: 1, explanation: "Como gíria, 'broke' significa estar sem dinheiro, não se refere a algo fisicamente quebrado." },
        { type: "tf", q: "'Ghosted' means to suddenly stop responding to someone without explanation.", answer: true, explanation: "'Ghost' como verbo de gíria significa sumir/desaparecer de uma relação ou conversa sem qualquer explicação, como um fantasma." },
        { q: "'Vibe' means:", options: ["Regra", "Clima/energia de um lugar ou situação", "Gramática", "Documento"], answer: 1, explanation: "'Vibe' descreve a atmosfera ou energia percebida em um lugar, situação ou entre pessoas." },
        { type: "short", q: "Complete: 'Don't be ___ about losing.' (chateado, gíria)", answer: ["salty"], explanation: "'Salty' é a gíria usada para descrever alguém amargurado ou ressentido, geralmente após uma derrota ou decepção." },
        { q: "'Chill' (slang) means:", options: ["Ficar bravo", "Relaxar", "Trabalhar muito", "Correr"], answer: 1, explanation: "'Chill' como gíria significa relaxar ou ficar tranquilo, sem estresse ou pressa." },
        { type: "tf", q: "Slang is always appropriate in professional job interviews.", answer: false, explanation: "Gírias geralmente não são apropriadas em contextos formais, como entrevistas de emprego." },
        { q: "Choose the correct sentence.", options: ["That was lit party.", "That party was lit.", "Lit was that party.", "Party lit was that."], answer: 1, explanation: "Na ordem padrão do inglês (sujeito-verbo-complemento), 'lit' funciona como adjetivo predicativo após o verbo 'was': 'That party was lit.'" },
        { q: "'Legit' means:", options: ["Falso", "De verdade/legítimo", "Engraçado", "Chato"], answer: 1, explanation: "'Legit' é a forma reduzida e informal de 'legitimate', usada para confirmar que algo é genuíno ou verdadeiro." },
        { type: "short", q: "Complete: 'I ___ love this song.' (meio que, discretamente)", answer: ["low-key"], explanation: "'Low-key' como advérbio de gíria suaviza uma afirmação, indicando que o sentimento é real mas expresso discretamente." },
        { q: "Choose the correct sentence.", options: ["He ghosted me.", "He ghost me.", "He ghosting me.", "He was ghost me."], answer: 0, explanation: "'Ghost' usado como verbo regular no passado simples é 'ghosted'; as demais opções violam a conjugação verbal básica." },
        { type: "tf", q: "Slang changes quickly and can vary by generation and region.", answer: true, explanation: "Gírias são altamente dinâmicas: termos populares entre uma geração ou região podem soar datados ou desconhecidos em outra." }
      ]
    },
    {
      id: "c2-m4",
      title: "Redação de Textos Complexos",
      subtitle: "Argumentação sofisticada e estrutura de textos longos",
      lesson: {
        intro: "No nível C2, a redação deve demonstrar não apenas correção gramatical, mas sofisticação estrutural, nuance argumentativa e um estilo autoral maduro.",
        sections: [
          {
            heading: "Estruturas Complexas de Frase",
            text: "Combine orações subordinadas, cláusulas relativas não-restritivas e estruturas paralelas para criar frases sofisticadas.",
            examples: [
              { en: "Having considered the evidence, which was far from conclusive, the committee decided to postpone its decision.", pt: "Estrutura complexa com oração reduzida e cláusula relativa não-restritiva." },
              { en: "Not only is the theory elegant, but it is also, crucially, testable.", pt: "Estrutura enfática com inserção parentética." }
            ]
          },
          {
            heading: "Nuance Argumentativa",
            text: "Argumentos sofisticados reconhecem complexidade e evitam generalizações simplistas.",
            examples: [
              { en: "While the data suggest a correlation, it would be premature to infer causation.", pt: "Reconhece limitação da evidência, evitando conclusão precipitada." },
              { en: "The issue is far from black and white.", pt: "Reconhece a complexidade de um tema." }
            ]
          },
          {
            heading: "Estilo Autoral",
            text: "Escritores proficientes desenvolvem uma voz distinta através de escolhas lexicais precisas e variação de estrutura de frase.",
            examples: [
              { en: "The city, in all its chaotic splendor, refused to be tamed.", pt: "Escolha lexical vívida e estrutura elaborada." },
              { en: "Simplicity, paradoxically, is often the hardest style to achieve.", pt: "Uso de advérbio conjuntivo para efeito retórico." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "c2-m4-premature", word: "Premature", phonetic: "/ˌpriːməˈtʃʊr/", translation: "Prematuro(a)/Precipitado(a)", example: "It would be premature to draw conclusions.", exampleTranslation: "Seria precipitado tirar conclusões." },
        { id: "c2-m4-correlation", word: "Correlation", phonetic: "/ˌkɒrəˈleɪʃən/", translation: "Correlação", example: "There is a correlation, but not necessarily causation.", exampleTranslation: "Há uma correlação, mas não necessariamente causalidade." },
        { id: "c2-m4-nuanced", word: "Nuanced", phonetic: "/ˈnuːɑːnst/", translation: "Sutil/Com nuances", example: "Her argument was remarkably nuanced.", exampleTranslation: "O argumento dela foi notavelmente sutil." },
        { id: "c2-m4-paradoxically", word: "Paradoxically", phonetic: "/ˌpærəˈdɒksɪkli/", translation: "Paradoxalmente", example: "Paradoxically, less can be more.", exampleTranslation: "Paradoxalmente, menos pode ser mais." },
        { id: "c2-m4-underlying", word: "Underlying", phonetic: "/ˌʌndərˈlaɪɪŋ/", translation: "Subjacente", example: "We must address the underlying issue.", exampleTranslation: "Precisamos abordar a questão subjacente." },
        { id: "c2-m4-coherence", word: "Coherence", phonetic: "/koʊˈhɪrəns/", translation: "Coerência", example: "The essay lacked coherence.", exampleTranslation: "O ensaio carecia de coerência." },
        { id: "c2-m4-rhetoric", word: "Rhetoric", phonetic: "/ˈrɛtərɪk/", translation: "Retórica", example: "His rhetoric was persuasive but empty.", exampleTranslation: "Sua retórica era persuasiva, mas vazia." },
        { id: "c2-m4-ambiguous", word: "Ambiguous", phonetic: "/æmˈbɪɡjuəs/", translation: "Ambíguo(a)", example: "The statement was deliberately ambiguous.", exampleTranslation: "A declaração foi deliberadamente ambígua." },
        { id: "c2-m4-discourse", word: "Discourse", phonetic: "/ˈdɪskɔːrs/", translation: "Discurso/Debate (acadêmico)", example: "This is central to academic discourse.", exampleTranslation: "Isto é central para o discurso acadêmico." },
        { id: "c2-m4-synthesize", word: "Synthesize", phonetic: "/ˈsɪnθəsaɪz/", translation: "Sintetizar", example: "The final chapter synthesizes all the arguments.", exampleTranslation: "O capítulo final sintetiza todos os argumentos." }
      ],
      grammar: {
        title: "Estruturas de Frase Sofisticadas",
        explanation: "No nível C2, varie a estrutura das frases combinando orações reduzidas, cláusulas não-restritivas e inversões para criar um estilo mais elaborado.",
        table: {
          headers: ["Estrutura Simples", "Versão Sofisticada"],
          rows: [
            ["The evidence is not conclusive, so we should wait.", "Given that the evidence is far from conclusive, it would be prudent to wait."],
            ["The theory is elegant and testable.", "Not only is the theory elegant, but it is also, crucially, testable."],
            ["Some experts disagree.", "Not all experts, however, share this view."]
          ]
        },
        correct: ["Having considered the evidence, the committee postponed its decision.", "While the data suggest a correlation, causation remains unproven.", "The issue is far from black and white."],
        incorrect: ["Having consider the evidence, the committee postponed its decision.", "While the data suggest a correlation, but causation remains unproven.", "The issue is far from a black and white."]
      },
      listening: [
        {
          title: "An Elegant Argument",
          accent: "british",
          transcript: "While the data suggest a correlation between the two variables, it would be premature to infer causation without further study. The underlying mechanisms remain poorly understood, and, paradoxically, the more we investigate, the more nuanced the picture becomes. Any coherent conclusion, therefore, must acknowledge this complexity rather than oversimplify it.",
          questions: [
            { q: "What does the speaker say about correlation and causation?", options: ["They are the same thing", "It would be premature to infer causation from correlation alone", "Causation is proven", "There is no correlation"], answer: 1 },
            { q: "What happens as they investigate more, according to the speaker?", options: ["The picture becomes simpler", "The picture becomes more nuanced", "Nothing changes", "The data disappears"], answer: 1 },
            { q: "What must a coherent conclusion do?", options: ["Oversimplify the issue", "Acknowledge the complexity", "Ignore the data", "Avoid any conclusion"], answer: 1 }
          ]
        },
        {
          title: "A Doctoral Defense, Overheard",
          accent: "american",
          transcript: "Examiner: Your third chapter argues that the underlying mechanism is largely cultural rather than economic. How do you respond to the critique that you've underweighted the data on income mobility? Candidate: That's a fair challenge, and I won't pretend the correlation there is trivial. That said, correlation, in this case, doesn't do the explanatory work my critics want it to do — it's consistent with several competing accounts, not just the economic one. Examiner: So you're not dismissing the economic factor entirely? Candidate: Not at all. I'd characterize my position as one of relative weighting rather than exclusion; the economic variable matters, but it's arguably downstream of the cultural shift, not its cause. Examiner: A nuanced distinction. I'll allow it — for now.",
          questions: [
            { q: "What is the main subject of this exchange?", options: ["A cooking recipe", "A doctoral candidate defending an argument about cultural versus economic causes", "A job interview for a bank", "A casual chat about the weather"], answer: 1 },
            { q: "What does the candidate say about the correlation with income mobility data?", options: ["That it's irrelevant and should be ignored", "That it's real but doesn't prove the economic explanation over competing ones", "That it fully confirms the economic explanation", "That the data doesn't exist"], answer: 1 },
            { q: "What can be inferred from the examiner's closing line, 'I'll allow it — for now'?", options: ["The examiner fully agrees and has no more questions", "The examiner is somewhat persuaded but still reserving full judgment", "The examiner rejects the argument completely", "The examiner is ending the defense early out of boredom"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "On the Limits of Certainty",
          text: "It is tempting, when faced with complex phenomena, to seek simple explanations. Yet the most rigorous thinkers resist this temptation, recognizing that premature certainty is often more dangerous than acknowledged doubt. The underlying complexity of most real-world issues rarely lends itself to tidy narratives. Paradoxically, it is often the most nuanced arguments — the ones that resist easy summary — that come closest to capturing the truth.",
          questions: [
            { q: "What is tempting when facing complex phenomena, according to the text?", options: ["Seeking complex explanations", "Seeking simple explanations", "Ignoring the phenomena", "Avoiding any explanation"], answer: 1 },
            { q: "What do rigorous thinkers recognize?", options: ["That certainty is always good", "That premature certainty can be dangerous", "That doubt is useless", "That simplicity is always correct"], answer: 1 },
            { q: "What kind of arguments, paradoxically, come closest to the truth?", options: ["The simplest ones", "The most nuanced ones", "The shortest ones", "The most popular ones"], answer: 1 }
          ]
        },
        {
          title: "In Defense of the Long Sentence",
          text: "Style guides, with their tidy injunctions to keep sentences short, treat length itself as a vice, as though clarity and brevity were synonyms rather than merely frequent companions. This is, at best, an oversimplification, and at worst a small act of intellectual cowardice — an excuse to avoid the harder work of constructing a sentence whose subordinate clauses actually earn their place. Consider the alternative: a writer confronting an idea with three moving parts, related but not equal, can either chop it into three flat, declarative sentences, losing the relationships between them entirely, or construct a single sentence, however long, that makes the hierarchy of ideas visible through subordination itself. The long sentence, properly built, does not obscure thought; it enacts it, mirroring on the page the very structure of the reasoning it contains. None of this, it should be said, is a license for the run-on sentence, that bloated, directionless creature which mistakes accumulation for architecture. The distinction, and it is not a subtle one to a careful reader, lies in whether each clause is doing structural work or merely occupying space. A sentence earns its length the way an argument earns its conclusion — clause by clause, not by decree.",
          questions: [
            { q: "What criticism does the author make of style guides that insist on short sentences?", options: ["That they are always correct and should be followed strictly", "That they wrongly treat brevity and clarity as the same thing", "That they don't exist in modern writing", "That they only apply to academic writing"], answer: 1 },
            { q: "According to the author, what can a long sentence do that three short sentences cannot?", options: ["Nothing — short sentences are always superior", "Make the hierarchy and relationships between ideas visible through subordination", "Save paper", "Avoid all grammar rules"], answer: 1 },
            { q: "What does the author explicitly distinguish the 'proper' long sentence from?", options: ["Short sentences in general", "The run-on sentence, which accumulates without structure", "Poetry", "Formal academic vocabulary"], answer: 1 },
            { q: "What is the author's overall tone toward simplistic writing advice ('keep sentences short')?", options: ["Fully in agreement, no criticism at all", "Mildly and wittily dismissive, treating it as lazy oversimplification", "Angry and personally offended", "Completely neutral and uninterested"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva um parágrafo complexo (6-8 frases) sobre um tema controverso, demonstrando nuance argumentativa (evite generalizações simplistas).", minWords: 50, modelAnswer: "The debate over social media regulation is far from black and white. While proponents argue that regulation protects vulnerable users, critics counter that it risks stifling free expression. Having considered both perspectives, one might argue that a nuanced, context-specific approach is more productive than a blanket policy. Paradoxically, the most effective solutions may require accepting a degree of ambiguity rather than seeking absolute certainty." },
        { prompt: "Reescreva uma frase simples em uma versão mais sofisticada, usando uma oração reduzida ou cláusula não-restritiva.", minWords: 15, modelAnswer: "Simple: The report was flawed, so we rejected it. Sophisticated: Having identified significant flaws in the report, which had already raised concerns among reviewers, the committee chose to reject it." },
        { prompt: "Escreva um ensaio argumentativo (150-200 palavras) sobre se a inteligência artificial vai melhorar ou piorar a qualidade da escrita humana. Estruture seu argumento com nuance, reconhecendo a complexidade do tema e evitando conclusões precipitadas.", minWords: 150, minSentences: 9, requiredStructures: ["it would be premature", "notwithstanding", "far from"], targetWords: ["nuanced", "underlying", "coherence", "synthesize"], modelAnswer: "The question of whether artificial intelligence will improve or degrade human writing is far from a simple one, and it would be premature to render a verdict either way based on the technology's current, still-evolving state. Notwithstanding the genuine anxiety many writers feel, there is a reasonable case that AI tools could raise the underlying floor of written communication, helping people synthesize scattered ideas into something more coherent than they might have managed alone. At the same time, a more nuanced worry persists: if writers increasingly outsource the difficult, clarifying labor of composition itself, the very process by which thinking sharpens against the resistance of the blank page, something less tangible than grammar may quietly erode. Having considered both possibilities, I would argue the outcome depends less on the technology than on how it is used; a tool that assists synthesis without replacing judgment could genuinely elevate coherence, while one used purely to skip the hard thinking would likely flatten it. The honest answer, then, is not optimism or pessimism, but a recognition that the underlying habits of the writer, not the tool itself, will ultimately decide which future we get." }
      ],
      speaking: [
        { phrase: "It would be premature to draw conclusions.", tip: "'Premature' tem acento na terceira sílaba: pre-ma-TURE." },
        { phrase: "There is a correlation, but not necessarily causation.", tip: "'Correlation' e 'causation' são frequentemente contrastadas em argumentos acadêmicos." },
        { phrase: "Paradoxically, less can be more.", tip: "'Paradoxically' tem 5 sílabas: pa-ra-DOX-i-cally." },
        { phrase: "The issue is far from black and white.", tip: "Expressão idiomática comum para dizer que algo é complexo." },
        { phrase: "This is central to academic discourse.", tip: "'Discourse' tem acento na segunda sílaba: dis-COURSE." },
        { phrase: "While I understand the appeal of a simple answer here, having weighed the evidence on both sides, I'd argue the underlying issue is more nuanced than either side of the debate wants to admit.", tip: "Resuma uma posição complexa sobre um tema controverso à sua escolha, reconhecendo explicitamente um contra-argumento antes de concluir." }
      ],
      exercises: {
        fillBlanks: [
          { text: "It would be ___ to draw conclusions. (precipitado)", answer: "premature" },
          { text: "There is a ___, but not necessarily causation. (correlação)", answer: "correlation" },
          { text: "The issue is far from black and ___.", answer: "white" },
          { text: "___, less can be more. (paradoxalmente)", answer: "Paradoxically" },
          { text: "We must address the ___ issue. (subjacente)", answer: "underlying" }
        ],
        matching: [
          { left: "Premature", right: "Prematuro/Precipitado" },
          { left: "Correlation", right: "Correlação" },
          { left: "Coherence", right: "Coerência" },
          { left: "Rhetoric", right: "Retórica" },
          { left: "Ambiguous", right: "Ambíguo(a)" },
          { left: "Synthesize", right: "Sintetizar" }
        ],
        ordering: [
          { words: ["premature", "would", "It", "conclusions", "draw", "to", "be"], answer: "It would be premature to draw conclusions" },
          { words: ["correlation", "a", "There", "is"], answer: "There is a correlation" },
          { words: ["white", "from", "far", "is", "issue", "The", "black", "and"], answer: "The issue is far from black and white" },
          { words: ["more", "be", "can", "less", "Paradoxically"], answer: "Paradoxically less can be more" },
          { words: ["address", "must", "We", "underlying", "issue", "the"], answer: "We must address the underlying issue" }
        ],
        translation: [
          { direction: "pt-en", text: "Seria precipitado tirar conclusões.", answer: "It would be premature to draw conclusions." },
          { direction: "pt-en", text: "Há uma correlação, mas não necessariamente causalidade.", answer: "There is a correlation, but not necessarily causation." },
          { direction: "pt-en", text: "A questão está longe de ser preto no branco.", answer: "The issue is far from black and white." },
          { direction: "en-pt", text: "Paradoxically, less can be more.", answer: "Paradoxalmente, menos pode ser mais." },
          { direction: "en-pt", text: "We must address the underlying issue.", answer: "Precisamos abordar a questão subjacente." },
          { direction: "en-pt", text: "Her argument was remarkably nuanced.", answer: "O argumento dela foi notavelmente sutil." }
        ],
        dictation: [
          { audioText: "It would be premature to draw conclusions.", answer: "It would be premature to draw conclusions." },
          { audioText: "There is a correlation, but not necessarily causation.", answer: "There is a correlation, but not necessarily causation." },
          { audioText: "The issue is far from black and white.", answer: "The issue is far from black and white." }
        ],
        dialogue: [
          {
            title: "An Academic Discussion",
            lines: [
              { speaker: "Dr. Lima", text: "What do you make of these results?" },
              { speaker: "user", prompt: "Diga que seria precipitado tirar conclusões:", options: ["It would be premature to draw conclusions.", "It is definitely true.", "I have no opinion at all."], answer: 0 },
              { speaker: "Dr. Lima", text: "A fair point. How would you describe the relationship between the variables?" },
              { speaker: "user", prompt: "Diga que há uma correlação, mas não necessariamente causalidade:", options: ["There is a correlation, but not necessarily causation.", "There is no relationship at all.", "It is definitely causation."], answer: 0 },
              { speaker: "Dr. Lima", text: "A nuanced and well-reasoned response." }
            ]
          }
        ]
      },
      quiz: [
        { q: "'Premature' means:", options: ["Tardio", "Precipitado/prematuro", "Definitivo", "Simples"], answer: 1, explanation: "'Premature' descreve algo feito cedo demais, antes que haja base suficiente — como tirar uma conclusão antes de ter evidências completas." },
        { q: "'Correlation' means:", options: ["Causa direta", "Correlação, relação estatística", "Contradição", "Conclusão final"], answer: 1, explanation: "'Correlation' indica que duas variáveis estão estatisticamente relacionadas, sem necessariamente uma causar a outra." },
        { type: "tf", q: "Correlation always proves causation.", answer: false, explanation: "Correlação não implica necessariamente causalidade — é um erro lógico comum assumir isso." },
        { q: "'Nuanced' means:", options: ["Simplista", "Sutil, com nuances", "Óbvio", "Confuso"], answer: 1, explanation: "'Nuanced' descreve algo que reconhece sutilezas e complexidade, o oposto de uma visão simplista ou óbvia." },
        { type: "short", q: "Complete: 'We must address the ___ issue.' (subjacente)", answer: ["underlying"], explanation: "'Underlying' descreve algo que está por baixo da superfície, a causa raiz de um problema aparente." },
        { q: "'Paradoxically' means:", options: ["Normalmente", "De forma paradoxal/contraditória", "Claramente", "Rapidamente"], answer: 1, explanation: "'Paradoxically' introduz uma ideia que parece contraditória à primeira vista, mas que é verdadeira, como 'less can be more'." },
        { type: "tf", q: "Sophisticated academic writing often avoids oversimplification.", answer: true, explanation: "Textos acadêmicos sofisticados buscam reconhecer a complexidade dos temas em vez de reduzi-los a generalizações simplistas." },
        { q: "Choose the correct sophisticated sentence.", options: ["Having considered the evidence, the committee postponed its decision.", "Having consider the evidence, the committee postponed its decision.", "Consider having the evidence, the committee postponed.", "The committee, having considered evidence postponed its decision having."], answer: 0, explanation: "A oração reduzida de particípio exige 'having' + particípio passado ('considered'), não a forma base do verbo, como nas demais opções incorretas." },
        { q: "'Coherence' means:", options: ["Confusão", "Coerência", "Contradição", "Ambiguidade"], answer: 1, explanation: "'Coherence' refere-se à clareza lógica e à conexão das ideias em um texto, o oposto de confusão ou contradição." },
        { type: "short", q: "Complete: 'The issue is far from black and ___.'", answer: ["white"], explanation: "'Black and white' é uma expressão idiomática para algo simples e absoluto; 'far from black and white' indica complexidade." },
        { q: "Choose the correct sentence.", options: ["While the data suggest a correlation, causation remains unproven.", "While the data suggest a correlation, but causation remains unproven.", "While data suggests correlation causation remains unproven while.", "The data, while suggest correlation, causation remains unproven."], answer: 0, explanation: "A conjunção 'while' já estabelece o contraste, então usar 'but' na mesma oração é redundante e gramaticalmente incorreto." },
        { type: "tf", q: "A mature academic writing style often uses varied and complex sentence structures.", answer: true, explanation: "Um estilo autoral maduro combina orações reduzidas, cláusulas não-restritivas e estruturas paralelas para criar variação sintática." }
      ]
    },
    {
      id: "c2-m5",
      title: "Literatura e Discursos",
      subtitle: "Interpretando trechos literários e discursos famosos",
      lesson: {
        intro: "No módulo final da plataforma, vamos praticar a interpretação de linguagem literária e retórica de discursos — a culminação da fluência: entender não apenas o que é dito, mas como e por quê.",
        sections: [
          {
            heading: "Linguagem Literária",
            text: "Textos literários frequentemente usam metáfora, simbolismo e estrutura de frase incomum para criar efeito artístico.",
            examples: [
              { en: "The city, in all its chaotic splendor, refused to be tamed.", pt: "Personificação e metáfora usadas para descrever uma cidade." },
              { en: "Hope is the thing with feathers.", pt: "Metáfora famosa de Emily Dickinson comparando esperança a um pássaro." }
            ]
          },
          {
            heading: "Retórica de Discursos",
            text: "Discursos memoráveis usam repetição, paralelismo e apelos emocionais para persuadir e inspirar.",
            examples: [
              { en: "We shall fight on the beaches, we shall fight on the landing grounds...", pt: "Repetição anafórica (Winston Churchill) para efeito retórico." },
              { en: "I have a dream that my four little children will one day live in a nation...", pt: "Apelo emocional e repetição (Martin Luther King Jr.)." }
            ]
          },
          {
            heading: "Interpretando Além do Literal",
            text: "A verdadeira fluência exige entender subtexto, tom e intenção — não apenas o significado literal das palavras.",
            examples: [
              { en: "The silence in the room said more than words ever could.", pt: "O 'silêncio' é usado figurativamente para expressar tensão ou emoção não dita." },
              { en: "Reading between the lines, it's clear she was hurt.", pt: "'Ler nas entrelinhas' significa perceber significados implícitos." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "c2-m5-metaphor", word: "Metaphor", phonetic: "/ˈmɛtəfɔːr/", translation: "Metáfora", example: "The poem is full of powerful metaphors.", exampleTranslation: "O poema está cheio de metáforas poderosas." },
        { id: "c2-m5-symbolism", word: "Symbolism", phonetic: "/ˈsɪmbəlɪzəm/", translation: "Simbolismo", example: "The dove is a symbol of peace.", exampleTranslation: "A pomba é um símbolo de paz." },
        { id: "c2-m5-rhetoric", word: "Rhetoric", phonetic: "/ˈrɛtərɪk/", translation: "Retórica", example: "The speech used powerful rhetoric.", exampleTranslation: "O discurso usou uma retórica poderosa." },
        { id: "c2-m5-anaphora", word: "Anaphora", phonetic: "/əˈnæfərə/", translation: "Anáfora (repetição no início de frases)", example: "Churchill's speech is famous for its use of anaphora.", exampleTranslation: "O discurso de Churchill é famoso pelo uso de anáfora." },
        { id: "c2-m5-subtext", word: "Subtext", phonetic: "/ˈsʌbtɛkst/", translation: "Subtexto", example: "There was a clear subtext to her words.", exampleTranslation: "Havia um subtexto claro nas palavras dela." },
        { id: "c2-m5-allegory", word: "Allegory", phonetic: "/ˈæləɡɔːri/", translation: "Alegoria", example: "The novel is an allegory for political corruption.", exampleTranslation: "O romance é uma alegoria para a corrupção política." },
        { id: "c2-m5-eloquent", word: "Eloquent", phonetic: "/ˈɛləkwənt/", translation: "Eloquente", example: "She gave an eloquent speech.", exampleTranslation: "Ela fez um discurso eloquente." },
        { id: "c2-m5-poignant", word: "Poignant", phonetic: "/ˈpɔɪnjənt/", translation: "Comovente/Pungente", example: "The ending was deeply poignant.", exampleTranslation: "O final foi profundamente comovente." },
        { id: "c2-m5-interpretation", word: "Interpretation", phonetic: "/ɪnˌtɜːrprɪˈteɪʃən/", translation: "Interpretação", example: "There are many interpretations of this poem.", exampleTranslation: "Há muitas interpretações deste poema." },
        { id: "c2-m5-legacy", word: "Legacy", phonetic: "/ˈlɛɡəsi/", translation: "Legado", example: "His speech left a lasting legacy.", exampleTranslation: "Seu discurso deixou um legado duradouro." }
      ],
      grammar: {
        title: "Recursos Retóricos (Rhetorical Devices)",
        explanation: "Discursos e textos literários usam recursos específicos para criar impacto emocional e persuasivo.",
        table: {
          headers: ["Recurso", "Definição", "Exemplo"],
          rows: [
            ["Anaphora", "Repetição no início de frases sucessivas", "'We shall fight... we shall fight...'"],
            ["Metaphor", "Comparação implícita entre coisas diferentes", "'Hope is the thing with feathers.'"],
            ["Rule of three", "Agrupar ideias em conjuntos de três para efeito retórico", "'Government of the people, by the people, for the people.'"]
          ]
        },
        correct: ["The repetition creates a powerful rhetorical effect.", "Her use of metaphor added depth to the speech.", "The rule of three made the argument more memorable."],
        incorrect: ["The repetition create a powerful rhetorical effect.", "Her use of metaphor add depth to the speech."]
      },
      listening: [
        {
          title: "Analyzing a Famous Speech",
          accent: "american",
          transcript: "Great speeches often rely on repetition to drive their message home. When a speaker repeats the same phrase at the beginning of several sentences, this is called anaphora, and it creates a rhythm that audiences remember. Metaphors also play a crucial role, transforming abstract ideas into vivid, relatable images. Together, these devices turn ordinary words into something genuinely moving.",
          questions: [
            { q: "What is anaphora?", options: ["Repetition at the beginning of sentences", "A type of metaphor", "A grammatical error", "A formal greeting"], answer: 0 },
            { q: "What effect does anaphora create?", options: ["Confusion", "A memorable rhythm", "Boredom", "Silence"], answer: 1 },
            { q: "What do metaphors do, according to the speaker?", options: ["Nothing significant", "Transform abstract ideas into vivid images", "Make speeches longer", "Confuse the audience"], answer: 1 }
          ]
        },
        {
          title: "A Eulogy That Almost Wasn't",
          accent: "british",
          transcript: "I'll admit something to you all: I rewrote this eulogy four times, because every version sounded like it was about someone else — some flawless saint who never once burned the Sunday roast or lost an argument on purpose just to see how long he could keep a straight face. My father was not that man, thank goodness, because that man sounds unbearable. He was, instead, a man who once got lost driving to his own surprise party. Who kept, for thirty years, a single terrible joke in rotation, and told it as though it were fresh every single time. Who loved fiercely, and rarely said so directly, preferring instead to show it through a fixed bicycle, a filled petrol tank, a light left on for you. We will remember the roast. We will remember the joke. We will remember, above all, the porch light — always on, however late we came home. That, I think, was his real eulogy, delivered nightly for thirty years before I ever had to write one.",
          questions: [
            { q: "What is the main purpose of this speech?", options: ["To complain about a Sunday roast", "To deliver a eulogy remembering the speaker's father", "To give a formal business presentation", "To tell a scripted joke competition"], answer: 1 },
            { q: "According to the speaker, what did earlier drafts of the eulogy sound like?", options: ["A comedy routine", "A description of a flawless, unbearable saint who wasn't really his father", "A legal document", "A weather report"], answer: 1 },
            { q: "What does the repeated mention of the 'porch light' at the end imply?", options: ["That the father was worried about electricity bills", "That the father's quiet, consistent care was itself a form of love, more meaningful than words", "That the house was often broken into", "That the speaker forgot to mention something important"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "Reading Between the Lines",
          text: "Literature rarely says everything directly. A skilled reader learns to notice what is left unsaid — the subtext beneath the dialogue, the symbolism within an image, the emotion behind a character's silence. When an author describes a wilting flower beside a dying character, the flower is rarely just a flower. Learning to read between the lines transforms a story from a simple sequence of events into a rich, layered experience.",
          questions: [
            { q: "What does a skilled reader learn to notice?", options: ["Only the plot", "What is left unsaid", "Nothing beyond the words", "Only the grammar"], answer: 1 },
            { q: "What does the wilting flower likely represent in the example?", options: ["Nothing symbolic", "Something symbolic, like mortality", "A gardening tip", "An unrelated detail"], answer: 1 },
            { q: "What does reading between the lines do to a story?", options: ["Makes it simpler", "Transforms it into a richer experience", "Makes it shorter", "Removes all meaning"], answer: 1 }
          ]
        },
        {
          title: "The Understatement of the Century",
          text: "There is a peculiarly British instinct for describing catastrophe in the mildest possible terms, and nowhere is it more perfectly preserved than in the ship captain's log entry, allegedly real, describing a collision with an iceberg as 'a bit of unpleasantness with the ice.' Whether apocryphal or not, the line endures because it captures something true about a certain rhetorical tradition: that restraint, deployed at the exact moment excess is expected, produces an effect that hysteria never could. A eulogy that screams its grief is moving; one that simply says 'he is missed at the dinner table' can be devastating, precisely because the enormity of the loss is left for the listener to supply. This is understatement's peculiar power — it does not diminish the emotion so much as trust the audience to complete it, and audiences, flattered by that trust, tend to complete it generously. The rhetorician who shouts has told you exactly how large the feeling is; the one who murmurs has let you discover, on your own, that it is larger than words could have carried anyway. It is no accident that some of literature's most quietly devastating lines are also its shortest.",
          questions: [
            { q: "What example does the author give of British understatement?", options: ["A wedding toast", "A ship captain's log describing an iceberg collision as 'a bit of unpleasantness'", "A weather forecast", "A political speech"], answer: 1 },
            { q: "According to the text, what effect does understatement have compared to open displays of emotion?", options: ["It always fails to move the audience", "It can be more devastating because it invites the audience to supply the missing scale of feeling themselves", "It confuses the audience completely", "It has exactly the same effect as shouting"], answer: 1 },
            { q: "What is implied by the phrase 'audiences, flattered by that trust, tend to complete it generously'?", options: ["Audiences resent being asked to interpret", "Audiences respond warmly when a text credits them with the ability to infer meaning", "Audiences prefer everything explained in detail", "Audiences ignore understated writing"], answer: 1 },
            { q: "What is the author's overall claim about short, understated lines in literature?", options: ["They are usually meaningless", "They are often among the most emotionally powerful, precisely because of what they leave unsaid", "They are a sign of lazy writing", "They only work in comedy"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva um parágrafo curto usando pelo menos uma metáfora e um exemplo de repetição (anáfora) para efeito retórico.", minWords: 30, modelAnswer: "Hope is a flame that never truly dies, however fiercely the wind may blow against it. We will rise from failure. We will rise from doubt. We will rise, together, into whatever uncertain future comes next, carrying that fragile flame with us." },
        { prompt: "Escolha uma frase de um discurso ou texto literário (real ou inventado) e explique seu possível subtexto ou significado simbólico.", minWords: 30, modelAnswer: "The line 'the door remained closed' could symbolize a missed opportunity or a lingering emotional distance between two people, rather than simply describing a physical door left shut. Read symbolically, the closed door becomes a quiet admission that reconciliation, however desired, may no longer be possible." },
        { prompt: "Escreva um pequeno texto literário ou trecho de discurso (150-200 palavras) sobre um tema à sua escolha (perda, esperança, mudança, coragem), usando deliberadamente metáfora, pelo menos um exemplo de anáfora (repetição retórica) e algum grau de subtexto — não diga tudo de forma literal.", minWords: 150, minSentences: 9, requiredStructures: ["we will", "not because", "but because"], targetWords: ["metaphor", "anaphora", "subtext", "eloquent"], modelAnswer: "Change arrives, most often, not as a metaphor we choose but as a tide we are simply required to meet. It rarely announces itself with the eloquent fanfare we imagine in advance; it slips in quietly, rearranging the furniture of a life while we are looking the other way. We will lose things we thought were permanent. We will grieve, in private, for versions of ourselves that no longer fit. We will, eventually, build something new from what remains, not because the old structure deserved to fall, but because nothing built by people was ever meant to be final. There is a subtext beneath every ending, if you know how to read for it: the closed door in the story is never only a door, and the empty chair at the table is never only furniture. What looks like loss, examined closely enough, is so often revealed to be a kind of anaphora in disguise — the same sentence, spoken again, in a voice slightly changed by everything it has survived. We do not return to who we were. We return, instead, to who we were becoming all along." }
      ],
      speaking: [
        { phrase: "The poem is full of powerful metaphors.", tip: "'Metaphor' tem acento na primeira sílaba: MET-a-phor." },
        { phrase: "Churchill's speech is famous for its use of anaphora.", tip: "'Anaphora' tem acento na segunda sílaba: a-NAPH-o-ra." },
        { phrase: "There was a clear subtext to her words.", tip: "'Subtext' junta 'sub' + 'text', ambos claramente pronunciados." },
        { phrase: "She gave an eloquent speech.", tip: "'Eloquent' tem acento na primeira sílaba: EL-o-quent." },
        { phrase: "His speech left a lasting legacy.", tip: "'Legacy' tem acento na primeira sílaba: LEG-a-cy." },
        { phrase: "If I had to identify the single line that has stayed with me longest, it wouldn't be the most dramatic one — it would be the quiet line whose subtext I'm still unpacking years later.", tip: "Reformule essa ideia — descreva um trecho literário ou discurso que te marcou e explique, com nuance, seu subtexto ou significado implícito." }
      ],
      exercises: {
        fillBlanks: [
          { text: "The poem is full of powerful ___. (metáforas)", answer: "metaphors" },
          { text: "Churchill's speech is famous for its use of ___. (anáfora)", answer: "anaphora" },
          { text: "There was a clear ___ to her words. (subtexto)", answer: "subtext" },
          { text: "She gave an ___ speech. (eloquente)", answer: "eloquent" },
          { text: "His speech left a lasting ___. (legado)", answer: "legacy" }
        ],
        matching: [
          { left: "Metaphor", right: "Metáfora" },
          { left: "Symbolism", right: "Simbolismo" },
          { left: "Subtext", right: "Subtexto" },
          { left: "Eloquent", right: "Eloquente" },
          { left: "Legacy", right: "Legado" },
          { left: "Interpretation", right: "Interpretação" }
        ],
        ordering: [
          { words: ["full", "poem", "is", "of", "metaphors", "The", "powerful"], answer: "The poem is full of powerful metaphors" },
          { words: ["clear", "was", "There", "subtext", "a"], answer: "There was a clear subtext" },
          { words: ["eloquent", "gave", "an", "She", "speech"], answer: "She gave an eloquent speech" },
          { words: ["legacy", "left", "lasting", "His", "speech", "a"], answer: "His speech left a lasting legacy" },
          { words: ["symbol", "dove", "peace", "is", "of", "The", "a"], answer: "The dove is a symbol of peace" }
        ],
        translation: [
          { direction: "pt-en", text: "O poema está cheio de metáforas poderosas.", answer: "The poem is full of powerful metaphors." },
          { direction: "pt-en", text: "Havia um subtexto claro nas palavras dela.", answer: "There was a clear subtext to her words." },
          { direction: "pt-en", text: "Ela fez um discurso eloquente.", answer: "She gave an eloquent speech." },
          { direction: "en-pt", text: "His speech left a lasting legacy.", answer: "Seu discurso deixou um legado duradouro." },
          { direction: "en-pt", text: "The dove is a symbol of peace.", answer: "A pomba é um símbolo de paz." },
          { direction: "en-pt", text: "There are many interpretations of this poem.", answer: "Há muitas interpretações deste poema." }
        ],
        dictation: [
          { audioText: "The poem is full of powerful metaphors.", answer: "The poem is full of powerful metaphors." },
          { audioText: "There was a clear subtext to her words.", answer: "There was a clear subtext to her words." },
          { audioText: "She gave an eloquent speech.", answer: "She gave an eloquent speech." }
        ],
        dialogue: [
          {
            title: "Discussing a Poem",
            lines: [
              { speaker: "Teacher", text: "What do you think this poem is really about, beneath the surface?" },
              { speaker: "user", prompt: "Diga que há um subtexto claro sobre perda:", options: ["There is a clear subtext about loss.", "It is only about flowers.", "I don't understand poems."], answer: 0 },
              { speaker: "Teacher", text: "Interesting interpretation! What literary device stood out to you?" },
              { speaker: "user", prompt: "Diga que a metáfora se destacou para você:", options: ["The metaphor stood out to me.", "The grammar stood out to me.", "Nothing stood out."], answer: 0 },
              { speaker: "Teacher", text: "A truly thoughtful reading. Well done." }
            ]
          }
        ]
      },
      quiz: [
        { q: "'Metaphor' means:", options: ["Comparação explícita com 'like' ou 'as'", "Comparação implícita entre coisas diferentes", "Uma rima", "Um erro gramatical"], answer: 1, explanation: "Metáfora compara duas coisas de forma implícita, sem usar 'like' ou 'as' (que caracterizariam um símile)." },
        { q: "'Anaphora' means:", options: ["Repetição no início de frases sucessivas", "Um tipo de metáfora", "Uma pausa dramática", "Um erro de pronúncia"], answer: 0, explanation: "Anáfora é a repetição da mesma palavra ou frase no início de orações sucessivas, como em 'We shall fight... we shall fight...' de Churchill." },
        { type: "tf", q: "'Subtext' refers to the literal, surface meaning of a text.", answer: false, explanation: "'Subtext' refere-se ao significado implícito, não ao significado literal de superfície." },
        { q: "'Eloquent' means:", options: ["Confuso", "Expressivo e persuasivo ao falar/escrever", "Silencioso", "Rude"], answer: 1, explanation: "'Eloquent' descreve quem se expressa de forma clara, fluente e persuasiva, geralmente em discursos ou textos formais." },
        { type: "short", q: "Complete: 'His speech left a lasting ___.' (legado)", answer: ["legacy"], explanation: "'Legacy' é o termo apropriado para algo duradouro deixado por alguém, como um discurso memorável." },
        { q: "'Symbolism' means:", options: ["Uso de símbolos para representar ideias", "Um tipo de gramática", "Um erro de tradução", "Uma forma de silêncio"], answer: 0, explanation: "Simbolismo é o recurso literário de usar objetos ou imagens concretas para representar ideias abstratas, como a pomba representando paz." },
        { type: "tf", q: "'Reading between the lines' means understanding only the literal words.", answer: false, explanation: "Significa perceber significados implícitos, não apenas o texto literal." },
        { q: "Choose the correct sentence.", options: ["The repetition creates a powerful rhetorical effect.", "The repetition create a powerful rhetorical effect.", "The repetition creating powerful rhetorical effect.", "Repetition the creates powerful rhetorical effect."], answer: 0, explanation: "O sujeito singular 'repetition' exige o verbo na terceira pessoa do singular: 'creates', não 'create' ou uma forma em '-ing' sem auxiliar." },
        { q: "'Poignant' means:", options: ["Engraçado", "Comovente/pungente", "Sem sentido", "Neutro"], answer: 1, explanation: "'Poignant' descreve algo emocionalmente tocante ou triste de forma intensa, não algo cômico ou neutro." },
        { type: "short", q: "Complete: 'There was a clear ___ to her words.' (subtexto)", answer: ["subtext"], explanation: "'Subtext' é o significado implícito por trás das palavras ditas, distinto do sentido literal." },
        { q: "Choose the correct sentence.", options: ["She gave an eloquent speech.", "She gave a eloquent speech.", "She give an eloquent speech.", "She gave an eloquently speech."], answer: 0, explanation: "Antes de palavra iniciada por som vocálico ('eloquent'), usa-se o artigo 'an', e o adjetivo (não o advérbio 'eloquently') modifica o substantivo 'speech'." },
        { type: "tf", q: "True fluency includes understanding subtext, tone, and intention, not just literal meaning.", answer: true, explanation: "No nível C2, a fluência verdadeira exige captar o que está implícito — tom, intenção e subtexto — além do significado literal das palavras." }
      ]
    },
    {
      id: "c2-m6",
      title: "Referências Culturais e Alusões",
      subtitle: "Entendendo alusões e referências culturais em inglês nativo",
      lesson: {
        intro: "Falantes nativos frequentemente fazem alusões — referências indiretas a histórias, personagens ou eventos culturais — que exigem conhecimento compartilhado para serem entendidas. Vamos explorar esse último nível de fluência cultural.",
        sections: [
          {
            heading: "O Que É uma Alusão?",
            text: "Uma alusão é uma referência breve e indireta a algo (uma obra, pessoa, evento) sem explicá-la totalmente — espera-se que o ouvinte já saiba o contexto.",
            examples: [
              { en: "His ambition was his Achilles' heel.", pt: "Referência à mitologia grega: um ponto fraco fatal apesar da força geral." },
              { en: "That plan is a real Pandora's box.", pt: "Referência a algo que, uma vez iniciado, libera problemas incontroláveis." }
            ]
          },
          {
            heading: "Referências Literárias e Bíblicas Comuns",
            text: "Muitas expressões do inglês cotidiano vêm de Shakespeare, da Bíblia ou de contos populares, mesmo que o falante não perceba a origem.",
            examples: [
              { en: "It was a Romeo and Juliet situation.", pt: "Referência a um amor proibido/trágico (Shakespeare)." },
              { en: "He acted like a Good Samaritan.", pt: "Referência bíblica: alguém que ajuda um estranho desinteressadamente." }
            ]
          },
          {
            heading: "Referências Pop e Contemporâneas",
            text: "Filmes, séries e eventos históricos também geram alusões amplamente reconhecidas.",
            examples: [
              { en: "This is starting to feel like Groundhog Day.", pt: "Referência ao filme: uma situação que se repete indefinidamente." },
              { en: "That was their Big Brother moment.", pt: "Referência a vigilância excessiva (livro '1984', de Orwell)." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "c2-m6-allusion", word: "Allusion", phonetic: "/əˈluːʒən/", translation: "Alusão", example: "The speech was full of literary allusions.", exampleTranslation: "O discurso estava repleto de alusões literárias." },
        { id: "c2-m6-achilles-heel", word: "Achilles' heel", phonetic: "/əˈkɪliːz hiːl/", translation: "Calcanhar de Aquiles (ponto fraco)", example: "Public speaking is his Achilles' heel.", exampleTranslation: "Falar em público é o calcanhar de Aquiles dele." },
        { id: "c2-m6-pandoras-box", word: "Pandora's box", phonetic: "/pænˈdɔːrəz bɒks/", translation: "Caixa de Pandora", example: "Opening that topic was a Pandora's box.", exampleTranslation: "Abrir aquele assunto foi uma caixa de Pandora." },
        { id: "c2-m6-good-samaritan", word: "Good Samaritan", phonetic: "/ɡʊd səˈmærɪtən/", translation: "Bom samaritano", example: "A Good Samaritan helped the injured man.", exampleTranslation: "Um bom samaritano ajudou o homem ferido." },
        { id: "c2-m6-catch-22", word: "Catch-22", phonetic: "/kætʃ twɛnti tuː/", translation: "Situação sem saída/paradoxal", example: "It's a catch-22: you need experience to get a job, but a job to get experience.", exampleTranslation: "É uma situação sem saída: você precisa de experiência para conseguir um emprego, mas de um emprego para ganhar experiência." },
        { id: "c2-m6-orwellian", word: "Orwellian", phonetic: "/ɔːrˈwɛliən/", translation: "Orwelliano (vigilância/controle excessivo)", example: "The surveillance felt very Orwellian.", exampleTranslation: "A vigilância parecia muito orwelliana." },
        { id: "c2-m6-cinderella-story", word: "Cinderella story", phonetic: "/ˌsɪndəˈrɛlə ˈstɔːri/", translation: "História de Cinderela (ascensão inesperada)", example: "His rise to fame was a real Cinderella story.", exampleTranslation: "Sua ascensão à fama foi uma verdadeira história de Cinderela." },
        { id: "c2-m6-david-and-goliath", word: "David and Goliath", phonetic: "/ˈdeɪvɪd ənd ɡəˈlaɪəθ/", translation: "Davi e Goliath (o pequeno contra o grande)", example: "It was a David and Goliath battle in court.", exampleTranslation: "Foi uma batalha de Davi contra Goliath no tribunal." },
        { id: "c2-m6-shared-context", word: "Shared context", phonetic: "/ʃɛrd ˈkɒntɛkst/", translation: "Contexto compartilhado", example: "Allusions rely on shared cultural context.", exampleTranslation: "Alusões dependem de contexto cultural compartilhado." },
        { id: "c2-m6-reference", word: "Reference", phonetic: "/ˈrɛfrəns/", translation: "Referência", example: "That's a reference to a famous movie.", exampleTranslation: "Essa é uma referência a um filme famoso." }
      ],
      grammar: {
        title: "Estrutura das Alusões em Frases",
        explanation: "Alusões geralmente funcionam como substantivos ou comparações dentro da frase, sem necessidade de explicação adicional para quem compartilha o contexto cultural.",
        table: {
          headers: ["Estrutura", "Exemplo"],
          rows: [
            ["Substantivo direto", "His ambition was his Achilles' heel."],
            ["Comparação com 'like/a'", "This feels like Groundhog Day. / It was a real Cinderella story."],
            ["Adjetivo derivado", "The surveillance felt Orwellian."]
          ]
        },
        correct: ["Her ambition was her Achilles' heel.", "This situation is a real catch-22.", "The surveillance felt Orwellian."],
        incorrect: ["Her ambition was her Achilles heel foot.", "This situation is a real catch twenty-two situation problem."]
      },
      listening: [
        {
          title: "A Cultural Conversation",
          accent: "british",
          transcript: "A: The new policy feels very Orwellian, don't you think? B: Definitely. It's a real catch-22 — they say it protects privacy, but it does the opposite. A: True. Honestly, ambition seems to be this company's Achilles' heel. They keep opening Pandora's boxes they can't close.",
          questions: [
            { q: "What does speaker A compare the policy to?", options: ["A fairy tale", "Something Orwellian", "A sports event", "A cooking show"], answer: 1 },
            { q: "What contradiction does B mention?", options: ["No contradiction", "A catch-22 about privacy", "A math problem", "A weather issue"], answer: 1 },
            { q: "What is described as the company's Achilles' heel?", options: ["Their budget", "Their ambition", "Their location", "Their employees"], answer: 1 }
          ]
        },
        {
          title: "The Office Book Club, Derailed",
          accent: "american",
          transcript: "A: Okay, so today we're discussing chapter one, but honestly, can we talk about Dave for a second? B: What did Dave do now? A: He tried to expense a three-hundred-dollar dinner as 'team building.' C: Classic Dave. Every company has one — the guy who's basically their own personal Pandora's box. B: Ha! True. Though to be fair, management opened that box themselves by never setting spending limits. A: Fair point. It's honestly very David and Goliath, except Dave is Goliath and the finance department is a very tired, very underfunded David. C: (laughing) That's dark, but accurate. Anyway — chapter one? A: Right, right. Chapter one. Though if this company doesn't sort out its expense policy soon, I feel like we're heading for our own little Waterloo.",
          questions: [
            { q: "What is the book club conversation mostly about at first?", options: ["The assigned chapter", "A coworker named Dave and his expense report", "Planning a company party", "A disagreement about the book itself"], answer: 1 },
            { q: "According to speaker B, who is partly responsible for the situation with Dave?", options: ["Nobody, it's entirely Dave's fault", "Management, for never setting spending limits", "The finance department", "The book club organizer"], answer: 1 },
            { q: "What does A imply by reversing the usual David and Goliath comparison (calling Dave 'Goliath' and finance 'David')?", options: ["That Dave is small and finance is powerful", "That Dave, normally an underdog figure, is actually the bigger threat here, with finance as the underfunded underdog", "That David and Goliath were both wrong", "That there is no power imbalance at all"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "Why Allusions Matter",
          text: "Understanding allusions is often the final barrier between advanced and near-native fluency. A phrase like 'that's their Achilles' heel' assumes you know the Greek myth; 'a real catch-22' assumes familiarity with Joseph Heller's novel. Without this shared cultural context, entire layers of meaning simply disappear. Native speakers rarely explain these references — they trust that the listener already shares the context, which is exactly why mastering them signals true fluency.",
          questions: [
            { q: "What is often the final barrier to near-native fluency?", options: ["Grammar rules", "Understanding allusions", "Vocabulary size", "Pronunciation"], answer: 1 },
            { q: "What does 'a real catch-22' assume?", options: ["Nothing specific", "Familiarity with Joseph Heller's novel", "Knowledge of Greek mythology", "Knowledge of the Bible"], answer: 1 },
            { q: "Why do native speakers rarely explain these references?", options: ["They forget them", "They trust the listener shares the context", "They don't understand them either", "It's illegal to explain them"], answer: 1 }
          ]
        },
        {
          title: "The Allusion as Shibboleth",
          text: "There is something almost tribal about the allusion: it functions less as a piece of information than as a password, quietly separating those who belong to a given cultural conversation from those who do not. Say 'this feels like Waterloo' to the wrong audience and you will be met with polite confusion; say it to the right one and an entire narrative of overreach and inevitable defeat arrives instantly, without a single word of explanation required. This is, in a sense, the allusion's whole purpose — not merely to decorate a sentence, but to test, silently and without malice, whether speaker and listener share a library. The learner who has memorized the dictionary definition of 'Pyrrhic victory' has learned a fact; the learner who reaches for it unprompted, at precisely the moment a costly, hollow win presents itself in conversation, has crossed into something closer to cultural fluency. It is worth noting, too, that allusions are not evenly distributed even among native speakers — a reference to a beloved 1990s sitcom may land perfectly with one generation and utterly bewilder the next, proving that the 'shared' in shared cultural context was always provisional, a border that shifts with every new decade and every new audience.",
          questions: [
            { q: "What metaphor does the author use to describe how allusions function socially?", options: ["A recipe", "A password or shibboleth that signals shared cultural belonging", "A grammar rule", "A musical instrument"], answer: 1 },
            { q: "What distinction does the author draw between 'knowing the definition' of an allusion and truly mastering it?", options: ["There is no real difference", "Truly mastering it means being able to deploy it naturally and unprompted at the right moment", "Knowing the definition is actually harder", "Mastery only matters for writers, not speakers"], answer: 1 },
            { q: "What does the example about a 1990s sitcom reference suggest about 'shared' cultural context?", options: ["That all native speakers share identical cultural knowledge permanently", "That the 'shared' context is provisional and shifts between generations and audiences", "That sitcoms are the only source of allusions", "That older references are always better understood"], answer: 1 },
            { q: "What is the overall tone of the passage toward allusions?", options: ["Dismissive, treating them as a trivial party trick", "Analytical and quietly admiring, treating them as a subtle marker of belonging", "Angry, arguing allusions should be avoided", "Purely comedic, with no serious argument"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 3 frases usando alusões diferentes desta lição (Achilles' heel, catch-22, Orwellian, etc.), explicando o contexto entre parênteses.", minWords: 25, modelAnswer: "His pride is his Achilles' heel (his one weakness). This job situation is a catch-22 (no way to win). The new rules feel Orwellian (excessive control)." },
        { prompt: "Escolha uma alusão desta lição e explique, em suas palavras, de onde ela vem e o que significa hoje.", minWords: 25, modelAnswer: "'Achilles' heel' comes from Greek mythology, where the hero Achilles was invincible except for his heel. Today, it means someone's one weakness despite overall strength." },
        { prompt: "Escreva um texto (150-200 palavras) descrevendo uma situação (real ou inventada, pessoal ou profissional) usando pelo menos três alusões culturais diferentes (desta lição ou de seu próprio conhecimento), explicando brevemente o contexto de cada uma para um leitor que talvez não as conheça.", minWords: 150, minSentences: 9, requiredStructures: ["in other words", "much like", "which is to say"], targetWords: ["allusion", "Achilles' heel", "catch-22", "Orwellian"], modelAnswer: "Every workplace, arguably, has its own private mythology, and ours is no exception. Our biggest client is, in other words, the company's Achilles' heel — the one relationship so profitable that nobody dares mention how precariously we depend on it, much like Achilles himself, invincible everywhere except the one spot that mattered most. Meanwhile, the new approval process management introduced last spring has become a genuine catch-22: nothing gets approved without three signatures, and none of the three people will sign first, which is to say the policy has quietly strangled the very efficiency it was designed to protect. And then there's the office badge system, tracking not just who enters the building but how long we linger at the coffee machine — mildly Orwellian, if I'm honest, though everyone has simply learned to live inside it, the way people eventually stop noticing a persistent hum. None of these allusions would mean much to someone outside the company, which is rather the point: they are our private shorthand for absurdities we've collectively decided not to fix." }
      ],
      speaking: [
        { phrase: "His ambition was his Achilles' heel.", tip: "'Achilles' tem o acento na segunda sílaba: a-KIL-eez." },
        { phrase: "This is a real catch-22.", tip: "Diga o número como 'twenty-two', não 'two two'." },
        { phrase: "The surveillance felt very Orwellian.", tip: "'Orwellian' vem do nome do autor George Orwell, com sufixo '-ian'." },
        { phrase: "That's a classic Cinderella story.", tip: "Fale com entonação de reconhecimento/familiaridade cultural." },
        { phrase: "Opening that topic was a Pandora's box.", tip: "'Pandora's' tem apóstrofo — não esqueça na escrita." },
        { phrase: "Honestly, I think our biggest project last year was a bit of a Pandora's box — much like a catch-22, every fix we made seemed to open up two new problems.", tip: "Descreva uma situação (real ou inventada) usando pelo menos duas alusões culturais diferentes, comparando-as com sutileza." }
      ],
      exercises: {
        fillBlanks: [
          { text: "His ambition was his ___' heel. (ponto fraco mitológico)", answer: "Achilles" },
          { text: "This situation is a real catch-___. (número)", answer: "22" },
          { text: "The surveillance felt very ___. (nome do autor + sufixo)", answer: "Orwellian" },
          { text: "A ___ Samaritan helped the injured man.", answer: "Good" },
          { text: "Opening that topic was a ___'s box. (mitologia grega)", answer: "Pandora" }
        ],
        matching: [
          { left: "Allusion", right: "Alusão" },
          { left: "Achilles' heel", right: "Calcanhar de Aquiles" },
          { left: "Catch-22", right: "Situação sem saída" },
          { left: "Orwellian", right: "Orwelliano" },
          { left: "Reference", right: "Referência" },
          { left: "Shared context", right: "Contexto compartilhado" }
        ],
        ordering: [
          { words: ["heel", "was", "ambition", "His", "Achilles'", "his"], answer: "His ambition was his Achilles' heel" },
          { words: ["catch-22", "real", "This", "a", "is"], answer: "This is a real catch-22" },
          { words: ["Orwellian", "felt", "surveillance", "The", "very"], answer: "The surveillance felt very Orwellian" },
          { words: ["box", "was", "topic", "that", "Opening", "a", "Pandora's"], answer: "Opening that topic was a Pandora's box" },
          { words: ["story", "was", "rise", "real", "His", "a", "Cinderella"], answer: "His rise was a real Cinderella story" }
        ],
        translation: [
          { direction: "pt-en", text: "A ambição dele era o calcanhar de Aquiles dele.", answer: "His ambition was his Achilles' heel." },
          { direction: "pt-en", text: "Esta é uma situação sem saída real.", answer: "This is a real catch-22." },
          { direction: "pt-en", text: "A vigilância parecia muito orwelliana.", answer: "The surveillance felt very Orwellian." },
          { direction: "en-pt", text: "A Good Samaritan helped the injured man.", answer: "Um bom samaritano ajudou o homem ferido." },
          { direction: "en-pt", text: "Allusions rely on shared cultural context.", answer: "Alusões dependem de contexto cultural compartilhado." },
          { direction: "en-pt", text: "It was a David and Goliath battle.", answer: "Foi uma batalha de Davi contra Goliath." }
        ],
        dictation: [
          { audioText: "His ambition was his Achilles' heel.", answer: "His ambition was his Achilles' heel." },
          { audioText: "This is a real catch-22.", answer: "This is a real catch-22." },
          { audioText: "The surveillance felt very Orwellian.", answer: "The surveillance felt very Orwellian." }
        ],
        dialogue: [
          {
            title: "Discussing Company Culture",
            lines: [
              { speaker: "Leo", text: "Don't you think this company's ambition is a bit much?" },
              { speaker: "user", prompt: "Diga que é o calcanhar de Aquiles deles:", options: ["It's their Achilles' heel.", "It's their Pandora's box.", "It's their Cinderella story."], answer: 0 },
              { speaker: "Leo", text: "Exactly. And this new policy feels so controlling." },
              { speaker: "user", prompt: "Diga que parece orwelliano:", options: ["It feels Orwellian.", "It feels like a catch-22.", "It feels like a Good Samaritan."], answer: 0 },
              { speaker: "Leo", text: "Couldn't agree more." }
            ]
          }
        ]
      },
      quiz: [
        { q: "'Achilles' heel' means:", options: ["Um ponto forte", "Um ponto fraco apesar da força geral", "Uma vitória total", "Um segredo"], answer: 1, explanation: "A alusão vem da mitologia grega: Aquiles era invencível, exceto pelo calcanhar, seu único ponto vulnerável — daí o sentido de fraqueza apesar da força geral." },
        { q: "'Catch-22' refers to:", options: ["Uma vitória fácil", "Uma situação sem saída/paradoxal", "Um herói", "Uma festa"], answer: 1, explanation: "A expressão vem do romance de Joseph Heller e descreve um dilema paradoxal no qual qualquer escolha leva a um beco sem saída." },
        { type: "tf", q: "'Orwellian' refers to excessive government surveillance/control, from George Orwell's work.", answer: true, explanation: "'Orwellian' deriva do nome do autor George Orwell e de seu romance '1984', referindo-se a vigilância e controle social excessivos." },
        { q: "'Pandora's box' means:", options: ["Um presente maravilhoso", "Algo que libera problemas incontroláveis ao ser aberto", "Uma caixa vazia", "Um cofre seguro"], answer: 1, explanation: "Na mitologia grega, Pandora abriu uma caixa que liberou todos os males do mundo — por isso a expressão descreve ações que desencadeiam problemas incontroláveis." },
        { type: "short", q: "Complete: 'A Good ___ helped the injured man.' (bom samaritano)", answer: ["Samaritan"], explanation: "'Good Samaritan' é uma alusão bíblica a alguém que ajuda um estranho de forma desinteressada." },
        { q: "'Allusion' means:", options: ["Ilusão óptica", "Referência breve e indireta", "Mentira", "Explicação detalhada"], answer: 1, explanation: "'Allusion' é uma referência indireta e breve a algo que se presume ser de conhecimento compartilhado, sem explicação completa." },
        { type: "tf", q: "Allusions are always explained in detail by the speaker.", answer: false, explanation: "Alusões dependem de contexto compartilhado; o falante geralmente não as explica." },
        { q: "'David and Goliath' refers to:", options: ["Dois amigos iguais", "O pequeno enfrentando o grande", "Uma dupla cômica", "Um erro histórico"], answer: 1, explanation: "Referência bíblica ao pastor Davi vencendo o gigante Goliath — usada para descrever o mais fraco enfrentando (e às vezes vencendo) o mais forte." },
        { q: "'Cinderella story' refers to:", options: ["Uma queda repentina", "Uma ascensão inesperada ao sucesso", "Uma tragédia", "Uma vingança"], answer: 1, explanation: "A alusão ao conto de fadas de Cinderela descreve uma ascensão surpreendente de uma posição humilde para o sucesso." },
        { type: "short", q: "Complete: 'This situation is a real catch-___.' (número)", answer: ["22"], explanation: "'Catch-22' é sempre escrito com o número 22, referência direta ao título do romance de Joseph Heller." },
        { q: "Choose the correct sentence.", options: ["His ambition was his Achilles heel foot.", "His ambition was his Achilles' heel.", "His ambition was his heel Achilles.", "His ambition was Achilles' his heel."], answer: 1, explanation: "A forma correta usa o apóstrofo possessivo 'Achilles' heel' — as demais opções alteram a ordem ou adicionam palavras redundantes como 'foot'." },
        { type: "tf", q: "Understanding allusions requires shared cultural knowledge, not just vocabulary.", answer: true, explanation: "Alusões só funcionam se o ouvinte compartilhar o conhecimento cultural referenciado; saber apenas o vocabulário não é suficiente para captar o sentido." }
      ]
    }
  ],
  finalTest: {
    description: "Prova final do nível C2 — 20 questões cobrindo registro formal/informal, humor e ironia, gírias, redação complexa e literatura/discursos.",
    questions: [
      { q: "Choose the most formal option.", options: ["Wanna grab lunch?", "Do you want to have lunch?", "Would you care to join me for lunch?", "Lunch?"], answer: 2, explanation: "'Would you care to' é uma construção educada e elaborada, típica de convites em contextos muito formais, ao contrário das opções mais diretas ou reduzidas." },
      { q: "'Colloquial' means:", options: ["Muito formal", "Coloquial/informal", "Técnico", "Acadêmico"], answer: 1, explanation: "'Colloquial' descreve linguagem do dia a dia, usada em conversas informais, o oposto de vocabulário técnico ou acadêmico." },
      { q: "'Irony' means:", options: ["Verdade literal", "Situação onde o significado real é o oposto do esperado", "Elogio sincero", "Descrição neutra"], answer: 1, explanation: "Ironia ocorre quando o resultado ou significado real contrasta com o que seria naturalmente esperado, muitas vezes de forma inesperada." },
      { q: "Choose the sentence that is likely sarcastic.", options: ["'I'm thrilled, this is my dream come true,' she said, beaming.", "'Oh sure, because that always works out well,' he said, rolling his eyes.", "'Thank you so much for your help,' she said sincerely.", "'This is wonderful news,' he said, smiling genuinely."], answer: 1, explanation: "'Rolling his eyes' e a expressão 'Oh sure, because...' são sinais claros de ceticismo, indicando que a frase quer dizer o oposto do que afirma." },
      { q: "'Lit' (slang) means:", options: ["Chato", "Incrível/animado", "Triste", "Caro"], answer: 1, explanation: "'Lit' é uma gíria usada para descrever algo empolgante ou excelente, geralmente sobre festas ou eventos animados." },
      { type: "tf", q: "'Ghosted' means to suddenly stop responding to someone without explanation.", answer: true, explanation: "'Ghost' como verbo de gíria significa sumir/desaparecer de uma relação ou conversa sem qualquer explicação, como um fantasma." },
      { q: "'Premature' means:", options: ["Tardio", "Precipitado/prematuro", "Definitivo", "Simples"], answer: 1, explanation: "'Premature' descreve algo feito cedo demais, antes que haja base suficiente — como tirar uma conclusão antes de ter evidências completas." },
      { type: "tf", q: "Correlation always proves causation.", answer: false, explanation: "Correlação não implica necessariamente causalidade — é um erro lógico comum assumir isso." },
      { q: "'Nuanced' means:", options: ["Simplista", "Sutil, com nuances", "Óbvio", "Confuso"], answer: 1, explanation: "'Nuanced' descreve algo que reconhece sutilezas e complexidade, o oposto de uma visão simplista ou óbvia." },
      { q: "'Metaphor' means:", options: ["Comparação explícita com 'like' ou 'as'", "Comparação implícita entre coisas diferentes", "Uma rima", "Um erro gramatical"], answer: 1, explanation: "Metáfora compara duas coisas de forma implícita, sem usar 'like' ou 'as' (que caracterizariam um símile)." },
      { q: "'Anaphora' means:", options: ["Repetição no início de frases sucessivas", "Um tipo de metáfora", "Uma pausa dramática", "Um erro de pronúncia"], answer: 0, explanation: "Anáfora é a repetição da mesma palavra ou frase no início de orações sucessivas, como em 'We shall fight... we shall fight...' de Churchill." },
      { type: "short", q: "Complete: 'His speech left a lasting ___.' (legado)", answer: ["legacy"], explanation: "'Legacy' é o termo apropriado para algo duradouro deixado por alguém, como um discurso memorável." },
      { q: "'Register' means:", options: ["Um tipo de dicionário", "O nível de formalidade da linguagem", "Um erro gramatical", "Um sotaque regional"], answer: 1, explanation: "'Register' é o termo linguístico para o nível de formalidade adotado conforme o contexto, a audiência e o propósito da comunicação." },
      { type: "tf", q: "Slang changes quickly and can vary by generation and region.", answer: true, explanation: "Gírias são altamente dinâmicas: termos populares entre uma geração ou região podem soar datados ou desconhecidos em outra." },
      { q: "'Discretion' means:", options: ["Descuido", "Discrição/Bom senso", "Confusão", "Rudeza"], answer: 1, explanation: "'Discretion' é a capacidade de julgar com bom senso o que é apropriado dizer ou fazer em cada situação." },
      { type: "short", q: "Complete: 'Don't be ___ about losing.' (chateado, gíria)", answer: ["salty"], explanation: "'Salty' é a gíria usada para descrever alguém amargurado ou ressentido, geralmente após uma derrota ou decepção." },
      { q: "'Coherence' means:", options: ["Confusão", "Coerência", "Contradição", "Ambiguidade"], answer: 1, explanation: "'Coherence' refere-se à clareza lógica e à conexão das ideias em um texto, o oposto de confusão ou contradição." },
      { type: "tf", q: "True fluency includes understanding subtext, tone, and intention, not just literal meaning.", answer: true, explanation: "No nível C2, a fluência verdadeira exige captar o que está implícito — tom, intenção e subtexto — além do significado literal das palavras." },
      { q: "'Wit' means:", options: ["Burrice", "Sagacidade/inteligência para humor", "Tristeza", "Raiva"], answer: 1, explanation: "'Wit' descreve a capacidade de ser engraçado de forma inteligente e rápida, associada à perspicácia verbal." },
      { q: "'Eloquent' means:", options: ["Confuso", "Expressivo e persuasivo ao falar/escrever", "Silencioso", "Rude"], answer: 1, explanation: "'Eloquent' descreve quem se expressa de forma clara, fluente e persuasiva, geralmente em discursos ou textos formais." }
    ]
  }
};

window.APP_DATA = APP_DATA;
