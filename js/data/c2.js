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
        { word: "Register", phonetic: "/ˈrɛdʒɪstər/", translation: "Registro (linguístico)", example: "Choose the appropriate register for the situation.", exampleTranslation: "Escolha o registro apropriado para a situação." },
        { word: "Colloquial", phonetic: "/kəˈloʊkwiəl/", translation: "Coloquial", example: "That's a colloquial expression.", exampleTranslation: "Essa é uma expressão coloquial." },
        { word: "Formal", phonetic: "/ˈfɔːrməl/", translation: "Formal", example: "Please use formal language in this letter.", exampleTranslation: "Por favor, use linguagem formal nesta carta." },
        { word: "Tone", phonetic: "/toʊn/", translation: "Tom", example: "The tone of the email seemed cold.", exampleTranslation: "O tom do e-mail pareceu frio." },
        { word: "Appropriate", phonetic: "/əˈproʊpriɪt/", translation: "Apropriado(a)", example: "That comment wasn't appropriate for the meeting.", exampleTranslation: "Aquele comentário não foi apropriado para a reunião." },
        { word: "Address (someone)", phonetic: "/əˈdrɛs/", translation: "Dirigir-se a (alguém)", example: "How should I address the CEO?", exampleTranslation: "Como devo me dirigir ao CEO?" },
        { word: "Casual", phonetic: "/ˈkæʒuəl/", translation: "Casual/Descontraído", example: "The meeting had a surprisingly casual tone.", exampleTranslation: "A reunião teve um tom surpreendentemente casual." },
        { word: "Nuanced", phonetic: "/ˈnuːɑːnst/", translation: "Sutil/Com nuances", example: "Her response was nuanced and thoughtful.", exampleTranslation: "A resposta dela foi sutil e cuidadosa." },
        { word: "Code-switch", phonetic: "/koʊd swɪtʃ/", translation: "Alternar registro/código", example: "Bilingual speakers often code-switch.", exampleTranslation: "Falantes bilíngues costumam alternar entre códigos." },
        { word: "Discretion", phonetic: "/dɪˈskrɛʃən/", translation: "Discrição/Bom senso", example: "Use your discretion when choosing your words.", exampleTranslation: "Use seu bom senso ao escolher suas palavras." }
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
          transcript: "Email one: Hey! Just checking if you're free for coffee tomorrow. Let me know! Email two: Dear Dr. Adams, I am writing to inquire about the possibility of scheduling a meeting at your earliest convenience. I look forward to your response.",
          questions: [
            { q: "Which email is informal?", options: ["Email one", "Email two", "Both", "Neither"], answer: 0 },
            { q: "What does 'at your earliest convenience' suggest about the register?", options: ["It's very casual", "It's very formal", "It's rude", "It's ambiguous"], answer: 1 },
            { q: "What is the purpose of the formal email?", options: ["To say hello", "To schedule a meeting", "To cancel a meeting", "To complain"], answer: 1 }
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
        }
      ],
      writing: [
        { prompt: "Escreva a mesma mensagem (convidar alguém para um café) em registro informal e depois em registro formal.", minWords: 30, modelAnswer: "Informal: Hey, wanna grab coffee sometime this week? Formal: I would like to invite you for coffee at your earliest convenience this week." },
        { prompt: "Escreva um parágrafo sobre por que a flexibilidade de registro é importante em ambientes profissionais.", minWords: 25, modelAnswer: "Register flexibility allows professionals to connect with different audiences effectively. Using overly formal language with close colleagues can feel distant, while overly casual language with clients can seem unprofessional." }
      ],
      speaking: [
        { phrase: "Would you care to join me for lunch?", tip: "'Would you care to' é uma forma muito educada e formal de convidar alguém." },
        { phrase: "That's awesome!", tip: "Tom animado e informal — apropriado entre amigos." },
        { phrase: "I would be grateful if you could confirm the details.", tip: "Frase típica de e-mails profissionais formais." },
        { phrase: "I gotta go, talk to you later!", tip: "Extremamente informal — apenas entre amigos próximos." },
        { phrase: "I must take my leave.", tip: "Extremamente formal — quase arcaico, usado para efeito dramático ou de muita formalidade." }
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
        { q: "Choose the most formal option.", options: ["Wanna grab lunch?", "Do you want to have lunch?", "Would you care to join me for lunch?", "Lunch?"], answer: 2 },
        { q: "Choose the most informal option.", options: ["I must depart.", "I need to leave.", "I gotta go.", "I am required to leave."], answer: 2 },
        { type: "tf", q: "Register refers to the level of formality in language.", answer: true },
        { q: "'Colloquial' means:", options: ["Muito formal", "Coloquial/informal", "Técnico", "Acadêmico"], answer: 1 },
        { type: "short", q: "Complete: 'Choose the appropriate ___ for the situation.' (registro)", answer: ["register"] },
        { q: "'Tone' means:", options: ["Tom", "Gramática", "Vocabulário", "Pronúncia"], answer: 0 },
        { type: "tf", q: "Skilled communicators use the exact same register in every situation.", answer: false, explanation: "Comunicadores habilidosos ajustam o registro de acordo com o contexto, a audiência e o propósito." },
        { q: "Choose the correct formal sentence.", options: ["I would be grateful if you could confirm the details.", "I'd be grateful if you could confirm, dude.", "Confirm the details, please, thanks a bunch.", "Gimme the details, please."], answer: 0 },
        { q: "'Discretion' means:", options: ["Descuido", "Discrição/Bom senso", "Confusão", "Rudeza"], answer: 1 },
        { type: "short", q: "Complete: 'How should I ___ the CEO?' (dirigir-me a)", answer: ["address"] },
        { q: "Choose the correct sentence.", options: ["I must take my leave.", "I must taking my leave.", "I must to take my leave.", "I must took my leave."], answer: 0 },
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
        { word: "Irony", phonetic: "/ˈaɪrəni/", translation: "Ironia", example: "The irony of the situation wasn't lost on anyone.", exampleTranslation: "A ironia da situação não passou despercebida por ninguém." },
        { word: "Sarcasm", phonetic: "/ˈsɑːrkæzəm/", translation: "Sarcasmo", example: "His comment was dripping with sarcasm.", exampleTranslation: "O comentário dele estava carregado de sarcasmo." },
        { word: "Pun", phonetic: "/pʌn/", translation: "Trocadilho", example: "That joke was a clever pun.", exampleTranslation: "Aquela piada foi um trocadilho inteligente." },
        { word: "Deadpan", phonetic: "/ˈdɛdpæn/", translation: "Com cara séria (humor)", example: "He has a great deadpan sense of humor.", exampleTranslation: "Ele tem um ótimo senso de humor com cara séria." },
        { word: "Wit", phonetic: "/wɪt/", translation: "Sagacidade (humor inteligente)", example: "She's known for her sharp wit.", exampleTranslation: "Ela é conhecida por sua sagacidade afiada." },
        { word: "Exaggeration", phonetic: "/ɪɡˌzædʒəˈreɪʃən/", translation: "Exagero", example: "That's a bit of an exaggeration!", exampleTranslation: "Isso é um pouco de exagero!" },
        { word: "Punchline", phonetic: "/ˈpʌntʃlaɪn/", translation: "Final de uma piada (a graça)", example: "The punchline caught everyone off guard.", exampleTranslation: "O final da piada pegou todo mundo de surpresa." },
        { word: "Self-deprecating", phonetic: "/sɛlf ˈdɛprəkeɪtɪŋ/", translation: "Autodepreciativo(a)", example: "He made a self-deprecating joke about his height.", exampleTranslation: "Ele fez uma piada autodepreciativa sobre sua altura." },
        { word: "Mock", phonetic: "/mɒk/", translation: "Zombar/Imitar de forma jocosa", example: "They were just mocking each other playfully.", exampleTranslation: "Eles estavam apenas zombando um do outro de forma brincalhona." },
        { word: "Get the joke", phonetic: "/ɡɛt ðə dʒoʊk/", translation: "Entender a piada", example: "It took me a minute to get the joke.", exampleTranslation: "Levei um minuto para entender a piada." }
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
        }
      ],
      writing: [
        { prompt: "Escreva 2 frases irônicas ou sarcásticas sobre situações do dia a dia (ex: trânsito, clima).", minWords: 15, modelAnswer: "Oh, great, another traffic jam — exactly what I needed today. Sure, because waiting an hour is definitely my favorite hobby." },
        { prompt: "Explique, em suas palavras, a diferença entre ironia e sarcasmo, com um exemplo de cada.", minWords: 25, modelAnswer: "Irony is when the opposite of what's expected happens, like rain on your wedding day. Sarcasm is using irony on purpose to mock or criticize, like saying 'Nice job' after someone makes a mistake." }
      ],
      speaking: [
        { phrase: "Oh, great, another Monday.", tip: "Diga com um tom monótono e sem entusiasmo para soar irônico." },
        { phrase: "Sure, because that always works out well.", tip: "O tom cético é essencial — sem ele, a frase soa sincera." },
        { phrase: "That's a clever pun!", tip: "'Pun' rima com 'sun' e 'fun'." },
        { phrase: "He has a great deadpan sense of humor.", tip: "'Deadpan' descreve expressão facial séria ao dizer algo engraçado." },
        { phrase: "It took me a minute to get the joke.", tip: "'Get the joke' é uma expressão comum para dizer que você entendeu a piada." }
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
        { q: "'Irony' means:", options: ["Verdade literal", "Situação onde o significado real é o oposto do esperado", "Elogio sincero", "Descrição neutra"], answer: 1 },
        { q: "'Sarcasm' is best described as:", options: ["Elogio genuíno", "Uso intencional de ironia para criticar ou zombar", "Um tipo de gramática", "Um sotaque"], answer: 1 },
        { type: "tf", q: "'Oh, great, another meeting' said with a flat tone usually means genuine excitement.", answer: false, explanation: "Dito com tom monótono, geralmente é sarcasmo, o oposto de entusiasmo genuíno." },
        { q: "'Pun' means:", options: ["Discurso formal", "Trocadilho", "Insulto", "Elogio"], answer: 1 },
        { type: "short", q: "Complete: 'It took me a minute to ___ the joke.' (entender)", answer: ["get"] },
        { q: "'Deadpan' describes:", options: ["Uma expressão facial exagerada", "Uma expressão facial séria ao dizer algo engraçado", "Um tom triste", "Um sotaque forte"], answer: 1 },
        { type: "tf", q: "Tone of voice is irrelevant when identifying sarcasm.", answer: false, explanation: "O tom de voz é frequentemente essencial para identificar sarcasmo." },
        { q: "Choose the sentence that is likely sarcastic.", options: ["'I'm thrilled, this is my dream come true,' she said, beaming.", "'Oh sure, because that always works out well,' he said, rolling his eyes.", "'Thank you so much for your help,' she said sincerely.", "'This is wonderful news,' he said, smiling genuinely."], answer: 1 },
        { q: "'Wit' means:", options: ["Burrice", "Sagacidade/inteligência para humor", "Tristeza", "Raiva"], answer: 1 },
        { type: "short", q: "Complete: 'His comment was ___ with sarcasm.' (repleto)", answer: ["dripping"] },
        { q: "'Punchline' means:", options: ["O início de uma piada", "A parte engraçada final de uma piada", "Um tipo de soco", "Uma crítica séria"], answer: 1 },
        { type: "tf", q: "Understanding irony and sarcasm often requires cultural and contextual knowledge, not just vocabulary.", answer: true }
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
        { word: "Lit", phonetic: "/lɪt/", translation: "Incrível/Animado (gíria)", example: "The party was lit!", exampleTranslation: "A festa foi incrível!" },
        { word: "Broke", phonetic: "/broʊk/", translation: "Sem dinheiro (gíria)", example: "I'm totally broke right now.", exampleTranslation: "Estou completamente sem dinheiro agora." },
        { word: "For sure", phonetic: "/fɔːr ʃʊr/", translation: "Com certeza (gíria)", example: "Are you coming? For sure!", exampleTranslation: "Você vem? Com certeza!" },
        { word: "No way", phonetic: "/noʊ weɪ/", translation: "De jeito nenhum/Sério? (gíria)", example: "No way, that's amazing!", exampleTranslation: "Sério? Isso é incrível!" },
        { word: "Chill", phonetic: "/tʃɪl/", translation: "Relaxar/Tranquilo (gíria)", example: "Let's just chill this weekend.", exampleTranslation: "Vamos só relaxar neste fim de semana." },
        { word: "Legit", phonetic: "/lɪˈdʒɪt/", translation: "De verdade/Legítimo (gíria)", example: "That's a legit concern.", exampleTranslation: "Essa é uma preocupação de verdade." },
        { word: "Ghost (someone)", phonetic: "/ɡoʊst/", translation: "Sumir/Ignorar alguém sem explicação (gíria)", example: "He ghosted me after the first date.", exampleTranslation: "Ele sumiu sem explicação depois do primeiro encontro." },
        { word: "Salty", phonetic: "/ˈsɔːlti/", translation: "Chateado/Ressentido (gíria)", example: "Don't be salty about losing the game.", exampleTranslation: "Não fique chateado por ter perdido o jogo." },
        { word: "Low-key", phonetic: "/loʊ kiː/", translation: "Discretamente/Meio que (gíria)", example: "I low-key love this song.", exampleTranslation: "Eu meio que amo essa música." },
        { word: "Vibe", phonetic: "/vaɪb/", translation: "Clima/Energia (gíria)", example: "This place has a great vibe.", exampleTranslation: "Este lugar tem um clima ótimo." }
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
        }
      ],
      writing: [
        { prompt: "Escreva 3 frases usando gírias diferentes (lit, broke, chill, legit, low-key, vibe).", minWords: 15, modelAnswer: "That concert was lit! I'm broke this month. Let's just chill and watch a movie." },
        { prompt: "Reescreva 3 frases com gíria para uma versão mais neutra/formal.", minWords: 15, modelAnswer: "That was really exciting. I don't have much money right now. He stopped responding without explanation." }
      ],
      speaking: [
        { phrase: "That party was lit!", tip: "Diga com entusiasmo — é uma gíria animada e informal." },
        { phrase: "I'm totally broke right now.", tip: "'Broke' aqui não tem nada a ver com 'quebrado' fisicamente." },
        { phrase: "Don't be salty about it.", tip: "'Salty' aqui é figurado, não literal (sabor)." },
        { phrase: "This place has a great vibe.", tip: "'Vibe' é uma palavra emprestada informalmente de 'vibration'." },
        { phrase: "He ghosted me.", tip: "'Ghosted' vem de 'ghost' (fantasma) — sumir como um fantasma." }
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
        { q: "'Lit' (slang) means:", options: ["Chato", "Incrível/animado", "Triste", "Caro"], answer: 1 },
        { q: "'Broke' (slang) means:", options: ["Rico", "Sem dinheiro", "Quebrado fisicamente", "Ocupado"], answer: 1 },
        { type: "tf", q: "'Ghosted' means to suddenly stop responding to someone without explanation.", answer: true },
        { q: "'Vibe' means:", options: ["Regra", "Clima/energia de um lugar ou situação", "Gramática", "Documento"], answer: 1 },
        { type: "short", q: "Complete: 'Don't be ___ about losing.' (chateado, gíria)", answer: ["salty"] },
        { q: "'Chill' (slang) means:", options: ["Ficar bravo", "Relaxar", "Trabalhar muito", "Correr"], answer: 1 },
        { type: "tf", q: "Slang is always appropriate in professional job interviews.", answer: false, explanation: "Gírias geralmente não são apropriadas em contextos formais, como entrevistas de emprego." },
        { q: "Choose the correct sentence.", options: ["That was lit party.", "That party was lit.", "Lit was that party.", "Party lit was that."], answer: 1 },
        { q: "'Legit' means:", options: ["Falso", "De verdade/legítimo", "Engraçado", "Chato"], answer: 1 },
        { type: "short", q: "Complete: 'I ___ love this song.' (meio que, discretamente)", answer: ["low-key"] },
        { q: "Choose the correct sentence.", options: ["He ghosted me.", "He ghost me.", "He ghosting me.", "He was ghost me."], answer: 0 },
        { type: "tf", q: "Slang changes quickly and can vary by generation and region.", answer: true }
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
        { word: "Premature", phonetic: "/ˌpriːməˈtʃʊr/", translation: "Prematuro(a)/Precipitado(a)", example: "It would be premature to draw conclusions.", exampleTranslation: "Seria precipitado tirar conclusões." },
        { word: "Correlation", phonetic: "/ˌkɒrəˈleɪʃən/", translation: "Correlação", example: "There is a correlation, but not necessarily causation.", exampleTranslation: "Há uma correlação, mas não necessariamente causalidade." },
        { word: "Nuanced", phonetic: "/ˈnuːɑːnst/", translation: "Sutil/Com nuances", example: "Her argument was remarkably nuanced.", exampleTranslation: "O argumento dela foi notavelmente sutil." },
        { word: "Paradoxically", phonetic: "/ˌpærəˈdɒksɪkli/", translation: "Paradoxalmente", example: "Paradoxically, less can be more.", exampleTranslation: "Paradoxalmente, menos pode ser mais." },
        { word: "Underlying", phonetic: "/ˌʌndərˈlaɪɪŋ/", translation: "Subjacente", example: "We must address the underlying issue.", exampleTranslation: "Precisamos abordar a questão subjacente." },
        { word: "Coherence", phonetic: "/koʊˈhɪrəns/", translation: "Coerência", example: "The essay lacked coherence.", exampleTranslation: "O ensaio carecia de coerência." },
        { word: "Rhetoric", phonetic: "/ˈrɛtərɪk/", translation: "Retórica", example: "His rhetoric was persuasive but empty.", exampleTranslation: "Sua retórica era persuasiva, mas vazia." },
        { word: "Ambiguous", phonetic: "/æmˈbɪɡjuəs/", translation: "Ambíguo(a)", example: "The statement was deliberately ambiguous.", exampleTranslation: "A declaração foi deliberadamente ambígua." },
        { word: "Discourse", phonetic: "/ˈdɪskɔːrs/", translation: "Discurso/Debate (acadêmico)", example: "This is central to academic discourse.", exampleTranslation: "Isto é central para o discurso acadêmico." },
        { word: "Synthesize", phonetic: "/ˈsɪnθəsaɪz/", translation: "Sintetizar", example: "The final chapter synthesizes all the arguments.", exampleTranslation: "O capítulo final sintetiza todos os argumentos." }
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
        }
      ],
      writing: [
        { prompt: "Escreva um parágrafo complexo (6-8 frases) sobre um tema controverso, demonstrando nuance argumentativa (evite generalizações simplistas).", minWords: 50, modelAnswer: "The debate over social media regulation is far from black and white. While proponents argue that regulation protects vulnerable users, critics counter that it risks stifling free expression. Having considered both perspectives, one might argue that a nuanced, context-specific approach is more productive than a blanket policy. Paradoxically, the most effective solutions may require accepting a degree of ambiguity rather than seeking absolute certainty." },
        { prompt: "Reescreva uma frase simples em uma versão mais sofisticada, usando uma oração reduzida ou cláusula não-restritiva.", minWords: 15, modelAnswer: "Simple: The report was flawed, so we rejected it. Sophisticated: Having identified significant flaws in the report, which had already raised concerns among reviewers, the committee chose to reject it." }
      ],
      speaking: [
        { phrase: "It would be premature to draw conclusions.", tip: "'Premature' tem acento na terceira sílaba: pre-ma-TURE." },
        { phrase: "There is a correlation, but not necessarily causation.", tip: "'Correlation' e 'causation' são frequentemente contrastadas em argumentos acadêmicos." },
        { phrase: "Paradoxically, less can be more.", tip: "'Paradoxically' tem 5 sílabas: pa-ra-DOX-i-cally." },
        { phrase: "The issue is far from black and white.", tip: "Expressão idiomática comum para dizer que algo é complexo." },
        { phrase: "This is central to academic discourse.", tip: "'Discourse' tem acento na segunda sílaba: dis-COURSE." }
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
        { q: "'Premature' means:", options: ["Tardio", "Precipitado/prematuro", "Definitivo", "Simples"], answer: 1 },
        { q: "'Correlation' means:", options: ["Causa direta", "Correlação, relação estatística", "Contradição", "Conclusão final"], answer: 1 },
        { type: "tf", q: "Correlation always proves causation.", answer: false, explanation: "Correlação não implica necessariamente causalidade — é um erro lógico comum assumir isso." },
        { q: "'Nuanced' means:", options: ["Simplista", "Sutil, com nuances", "Óbvio", "Confuso"], answer: 1 },
        { type: "short", q: "Complete: 'We must address the ___ issue.' (subjacente)", answer: ["underlying"] },
        { q: "'Paradoxically' means:", options: ["Normalmente", "De forma paradoxal/contraditória", "Claramente", "Rapidamente"], answer: 1 },
        { type: "tf", q: "Sophisticated academic writing often avoids oversimplification.", answer: true },
        { q: "Choose the correct sophisticated sentence.", options: ["Having considered the evidence, the committee postponed its decision.", "Having consider the evidence, the committee postponed its decision.", "Consider having the evidence, the committee postponed.", "The committee, having considered evidence postponed its decision having."], answer: 0 },
        { q: "'Coherence' means:", options: ["Confusão", "Coerência", "Contradição", "Ambiguidade"], answer: 1 },
        { type: "short", q: "Complete: 'The issue is far from black and ___.'", answer: ["white"] },
        { q: "Choose the correct sentence.", options: ["While the data suggest a correlation, causation remains unproven.", "While the data suggest a correlation, but causation remains unproven.", "While data suggests correlation causation remains unproven while.", "The data, while suggest correlation, causation remains unproven."], answer: 0 },
        { type: "tf", q: "A mature academic writing style often uses varied and complex sentence structures.", answer: true }
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
        { word: "Metaphor", phonetic: "/ˈmɛtəfɔːr/", translation: "Metáfora", example: "The poem is full of powerful metaphors.", exampleTranslation: "O poema está cheio de metáforas poderosas." },
        { word: "Symbolism", phonetic: "/ˈsɪmbəlɪzəm/", translation: "Simbolismo", example: "The dove is a symbol of peace.", exampleTranslation: "A pomba é um símbolo de paz." },
        { word: "Rhetoric", phonetic: "/ˈrɛtərɪk/", translation: "Retórica", example: "The speech used powerful rhetoric.", exampleTranslation: "O discurso usou uma retórica poderosa." },
        { word: "Anaphora", phonetic: "/əˈnæfərə/", translation: "Anáfora (repetição no início de frases)", example: "Churchill's speech is famous for its use of anaphora.", exampleTranslation: "O discurso de Churchill é famoso pelo uso de anáfora." },
        { word: "Subtext", phonetic: "/ˈsʌbtɛkst/", translation: "Subtexto", example: "There was a clear subtext to her words.", exampleTranslation: "Havia um subtexto claro nas palavras dela." },
        { word: "Allegory", phonetic: "/ˈæləɡɔːri/", translation: "Alegoria", example: "The novel is an allegory for political corruption.", exampleTranslation: "O romance é uma alegoria para a corrupção política." },
        { word: "Eloquent", phonetic: "/ˈɛləkwənt/", translation: "Eloquente", example: "She gave an eloquent speech.", exampleTranslation: "Ela fez um discurso eloquente." },
        { word: "Poignant", phonetic: "/ˈpɔɪnjənt/", translation: "Comovente/Pungente", example: "The ending was deeply poignant.", exampleTranslation: "O final foi profundamente comovente." },
        { word: "Interpretation", phonetic: "/ɪnˌtɜːrprɪˈteɪʃən/", translation: "Interpretação", example: "There are many interpretations of this poem.", exampleTranslation: "Há muitas interpretações deste poema." },
        { word: "Legacy", phonetic: "/ˈlɛɡəsi/", translation: "Legado", example: "His speech left a lasting legacy.", exampleTranslation: "Seu discurso deixou um legado duradouro." }
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
        }
      ],
      writing: [
        { prompt: "Escreva um parágrafo curto usando pelo menos uma metáfora e um exemplo de repetição (anáfora) para efeito retórico.", minWords: 30, modelAnswer: "Hope is a flame that never truly dies. We will rise from failure. We will rise from doubt. We will rise, together, into whatever comes next." },
        { prompt: "Escolha uma frase de um discurso ou texto literário (real ou inventado) e explique seu possível subtexto ou significado simbólico.", minWords: 30, modelAnswer: "The line 'the door remained closed' could symbolize a missed opportunity or emotional distance, rather than simply describing a physical door." }
      ],
      speaking: [
        { phrase: "The poem is full of powerful metaphors.", tip: "'Metaphor' tem acento na primeira sílaba: MET-a-phor." },
        { phrase: "Churchill's speech is famous for its use of anaphora.", tip: "'Anaphora' tem acento na segunda sílaba: a-NAPH-o-ra." },
        { phrase: "There was a clear subtext to her words.", tip: "'Subtext' junta 'sub' + 'text', ambos claramente pronunciados." },
        { phrase: "She gave an eloquent speech.", tip: "'Eloquent' tem acento na primeira sílaba: EL-o-quent." },
        { phrase: "His speech left a lasting legacy.", tip: "'Legacy' tem acento na primeira sílaba: LEG-a-cy." }
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
        { q: "'Metaphor' means:", options: ["Comparação explícita com 'like' ou 'as'", "Comparação implícita entre coisas diferentes", "Uma rima", "Um erro gramatical"], answer: 1 },
        { q: "'Anaphora' means:", options: ["Repetição no início de frases sucessivas", "Um tipo de metáfora", "Uma pausa dramática", "Um erro de pronúncia"], answer: 0 },
        { type: "tf", q: "'Subtext' refers to the literal, surface meaning of a text.", answer: false, explanation: "'Subtext' refere-se ao significado implícito, não ao significado literal de superfície." },
        { q: "'Eloquent' means:", options: ["Confuso", "Expressivo e persuasivo ao falar/escrever", "Silencioso", "Rude"], answer: 1 },
        { type: "short", q: "Complete: 'His speech left a lasting ___.' (legado)", answer: ["legacy"] },
        { q: "'Symbolism' means:", options: ["Uso de símbolos para representar ideias", "Um tipo de gramática", "Um erro de tradução", "Uma forma de silêncio"], answer: 0 },
        { type: "tf", q: "'Reading between the lines' means understanding only the literal words.", answer: false, explanation: "Significa perceber significados implícitos, não apenas o texto literal." },
        { q: "Choose the correct sentence.", options: ["The repetition creates a powerful rhetorical effect.", "The repetition create a powerful rhetorical effect.", "The repetition creating powerful rhetorical effect.", "Repetition the creates powerful rhetorical effect."], answer: 0 },
        { q: "'Poignant' means:", options: ["Engraçado", "Comovente/pungente", "Sem sentido", "Neutro"], answer: 1 },
        { type: "short", q: "Complete: 'There was a clear ___ to her words.' (subtexto)", answer: ["subtext"] },
        { q: "Choose the correct sentence.", options: ["She gave an eloquent speech.", "She gave a eloquent speech.", "She give an eloquent speech.", "She gave an eloquently speech."], answer: 0 },
        { type: "tf", q: "True fluency includes understanding subtext, tone, and intention, not just literal meaning.", answer: true }
      ]
    }
  ],
  finalTest: {
    description: "Prova final do nível C2 — 20 questões cobrindo registro formal/informal, humor e ironia, gírias, redação complexa e literatura/discursos.",
    questions: [
      { q: "Choose the most formal option.", options: ["Wanna grab lunch?", "Do you want to have lunch?", "Would you care to join me for lunch?", "Lunch?"], answer: 2 },
      { q: "'Colloquial' means:", options: ["Muito formal", "Coloquial/informal", "Técnico", "Acadêmico"], answer: 1 },
      { q: "'Irony' means:", options: ["Verdade literal", "Situação onde o significado real é o oposto do esperado", "Elogio sincero", "Descrição neutra"], answer: 1 },
      { q: "Choose the sentence that is likely sarcastic.", options: ["'I'm thrilled, this is my dream come true,' she said, beaming.", "'Oh sure, because that always works out well,' he said, rolling his eyes.", "'Thank you so much for your help,' she said sincerely.", "'This is wonderful news,' he said, smiling genuinely."], answer: 1 },
      { q: "'Lit' (slang) means:", options: ["Chato", "Incrível/animado", "Triste", "Caro"], answer: 1 },
      { type: "tf", q: "'Ghosted' means to suddenly stop responding to someone without explanation.", answer: true },
      { q: "'Premature' means:", options: ["Tardio", "Precipitado/prematuro", "Definitivo", "Simples"], answer: 1 },
      { type: "tf", q: "Correlation always proves causation.", answer: false },
      { q: "'Nuanced' means:", options: ["Simplista", "Sutil, com nuances", "Óbvio", "Confuso"], answer: 1 },
      { q: "'Metaphor' means:", options: ["Comparação explícita com 'like' ou 'as'", "Comparação implícita entre coisas diferentes", "Uma rima", "Um erro gramatical"], answer: 1 },
      { q: "'Anaphora' means:", options: ["Repetição no início de frases sucessivas", "Um tipo de metáfora", "Uma pausa dramática", "Um erro de pronúncia"], answer: 0 },
      { type: "short", q: "Complete: 'His speech left a lasting ___.' (legado)", answer: ["legacy"] },
      { q: "'Register' means:", options: ["Um tipo de dicionário", "O nível de formalidade da linguagem", "Um erro gramatical", "Um sotaque regional"], answer: 1 },
      { type: "tf", q: "Slang changes quickly and can vary by generation and region.", answer: true },
      { q: "'Discretion' means:", options: ["Descuido", "Discrição/Bom senso", "Confusão", "Rudeza"], answer: 1 },
      { type: "short", q: "Complete: 'Don't be ___ about losing.' (chateado, gíria)", answer: ["salty"] },
      { q: "'Coherence' means:", options: ["Confusão", "Coerência", "Contradição", "Ambiguidade"], answer: 1 },
      { type: "tf", q: "True fluency includes understanding subtext, tone, and intention, not just literal meaning.", answer: true },
      { q: "'Wit' means:", options: ["Burrice", "Sagacidade/inteligência para humor", "Tristeza", "Raiva"], answer: 1 },
      { q: "'Eloquent' means:", options: ["Confuso", "Expressivo e persuasivo ao falar/escrever", "Silencioso", "Rude"], answer: 1 }
    ]
  }
};

window.APP_DATA = APP_DATA;
