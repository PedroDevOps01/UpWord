var APP_DATA = window.APP_DATA || {};

APP_DATA.c1 = {
  modules: [
    {
      id: "c1-m1",
      title: "Nuances Gramaticais",
      subtitle: "Used to/would, inversão para ênfase e modais de especulação no passado",
      lesson: {
        intro: "Neste módulo avançado, vamos refinar sua gramática com estruturas que dão mais precisão e sofisticação à sua fala: hábitos passados, inversão para ênfase, e modais para especular sobre o passado.",
        sections: [
          {
            heading: "Used to vs. Would (Hábitos Passados)",
            text: "Ambos descrevem hábitos passados que não são mais verdade, mas 'would' não é usado para estados (like, know, be) — apenas para ações repetidas.",
            examples: [
              { en: "I used to live in Paris.", pt: "Eu costumava morar em Paris. (estado — só 'used to')" },
              { en: "When I was young, I would visit my grandmother every summer.", pt: "Quando eu era jovem, eu costumava visitar minha avó todo verão. (ação repetida)" }
            ]
          },
          {
            heading: "Inversão para Ênfase",
            text: "Em registros mais formais ou enfáticos, invertemos a ordem sujeito-verbo após certos advérbios negativos, como 'never', 'rarely', 'not only'.",
            examples: [
              { en: "Never have I seen such a beautiful place.", pt: "Nunca vi um lugar tão bonito. (forma enfática)" },
              { en: "Not only did she win the award, but she also broke a record.", pt: "Ela não apenas ganhou o prêmio, como também quebrou um recorde." }
            ]
          },
          {
            heading: "Modais de Especulação no Passado",
            text: "Usamos 'must have', 'might have', 'should have' + particípio para especular ou criticar ações passadas.",
            examples: [
              { en: "She must have forgotten about the meeting.", pt: "Ela deve ter esquecido da reunião." },
              { en: "You should have called me earlier.", pt: "Você deveria ter me ligado mais cedo." }
            ]
          }
        ]
      },
      vocabulary: [
        { word: "Nuance", phonetic: "/ˈnuːɑːns/", translation: "Nuance/Sutileza", example: "There's a subtle nuance between these two words.", exampleTranslation: "Há uma nuance sutil entre estas duas palavras." },
        { word: "Emphasis", phonetic: "/ˈɛmfəsɪs/", translation: "Ênfase", example: "She spoke with great emphasis.", exampleTranslation: "Ela falou com grande ênfase." },
        { word: "Habitual", phonetic: "/həˈbɪtʃuəl/", translation: "Habitual", example: "This was a habitual practice in her family.", exampleTranslation: "Esta era uma prática habitual na família dela." },
        { word: "Speculate", phonetic: "/ˈspɛkjəleɪt/", translation: "Especular", example: "We can only speculate about what happened.", exampleTranslation: "Só podemos especular sobre o que aconteceu." },
        { word: "Formal register", phonetic: "/ˈfɔːrməl ˈrɛdʒɪstər/", translation: "Registro formal", example: "This inversion is typical of a formal register.", exampleTranslation: "Esta inversão é típica de um registro formal." },
        { word: "Rarely", phonetic: "/ˈrɛrli/", translation: "Raramente", example: "Rarely have I felt so inspired.", exampleTranslation: "Raramente me senti tão inspirado." },
        { word: "Reproach", phonetic: "/rɪˈproʊtʃ/", translation: "Repreensão/Censura", example: "His tone carried a hint of reproach.", exampleTranslation: "Seu tom carregava um toque de censura." },
        { word: "Assumption", phonetic: "/əˈsʌmpʃən/", translation: "Suposição", example: "That's just an assumption, not a fact.", exampleTranslation: "Isso é apenas uma suposição, não um fato." },
        { word: "Distinct", phonetic: "/dɪˈstɪŋkt/", translation: "Distinto(a)", example: "These two meanings are quite distinct.", exampleTranslation: "Estes dois significados são bem distintos." },
        { word: "Subtlety", phonetic: "/ˈsʌtəlti/", translation: "Sutileza", example: "Understanding subtlety takes years of practice.", exampleTranslation: "Entender sutileza leva anos de prática." }
      ],
      grammar: {
        title: "Modais de Especulação no Passado",
        explanation: "'Must have' expressa quase certeza; 'might/could have' expressa possibilidade; 'should have' expressa crítica ou arrependimento sobre uma ação passada que não ocorreu como esperado.",
        table: {
          headers: ["Modal", "Significado", "Exemplo"],
          rows: [
            ["Must have + particípio", "Quase certeza", "She must have left already."],
            ["Might/Could have + particípio", "Possibilidade", "He might have missed the bus."],
            ["Should have + particípio", "Crítica/arrependimento", "You should have told me sooner."],
            ["Shouldn't have + particípio", "Crítica sobre algo feito", "I shouldn't have said that."]
          ]
        },
        correct: ["She must have forgotten.", "You should have called me.", "He might have missed the train."],
        incorrect: ["She must forgot.", "You should call me yesterday for that critique.", "He might missed the train."]
      },
      listening: [
        {
          title: "A Nuanced Conversation",
          accent: "british",
          transcript: "Never have I been so surprised by a decision. Not only did they cancel the project, but they also refused to explain why. I must have missed something important in that meeting. Looking back, I should have asked more questions when I had the chance.",
          questions: [
            { q: "What structure is used in 'Never have I been so surprised'?", options: ["A question", "An inversion for emphasis", "A conditional", "A passive voice"], answer: 1 },
            { q: "What does the speaker say about the meeting?", options: ["They understood everything", "They must have missed something", "They enjoyed it", "They arrived late"], answer: 1 },
            { q: "What does the speaker regret?", options: ["Attending the meeting", "Not asking more questions", "Canceling the project", "Nothing"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "Reflections on Change",
          text: "Rarely do people appreciate change while it is happening. When I was a child, I would spend hours outside without a phone in sight. Not only has technology transformed how we communicate, but it has also reshaped how we think. I must have adapted somewhere along the way, though I can't pinpoint exactly when. Perhaps I should have paid more attention to the transition as it unfolded.",
          questions: [
            { q: "What inversion structure appears at the beginning?", options: ["'Rarely do people...'", "'I would spend...'", "'I can't pinpoint...'", "'Perhaps I should...'"], answer: 0 },
            { q: "What does the writer say technology has reshaped?", options: ["Only communication", "How we think, not just how we communicate", "Nothing important", "Only entertainment"], answer: 1 },
            { q: "What does the writer express regret about?", options: ["Using technology", "Not paying more attention to the transition", "Being a child", "Nothing"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 3 frases usando inversão para ênfase (Never have I..., Not only did..., Rarely do I...).", minWords: 20, modelAnswer: "Never have I seen such dedication. Not only did she finish first, but she also helped others. Rarely do I regret a decision like this." },
        { prompt: "Escreva sobre algo que você acha que 'deveria ter feito diferente' (should have) e algo que provavelmente aconteceu (must have).", minWords: 20, modelAnswer: "I should have studied more before the exam. He must have forgotten our meeting because he never showed up." }
      ],
      speaking: [
        { phrase: "Never have I seen such a beautiful place.", tip: "A inversão soa mais formal — reserve para contextos de ênfase real." },
        { phrase: "She must have forgotten about the meeting.", tip: "'Must have' é frequentemente contraído para 'must've' na fala." },
        { phrase: "You should have called me earlier.", tip: "'Should have' soa como 'shoulda' na fala rápida e informal." },
        { phrase: "Not only did she win, but she also broke a record.", tip: "Após 'not only' no início, há inversão: 'did she win'." },
        { phrase: "I used to live in Paris.", tip: "'Used to' se pronuncia /ˈjuːstə/, com o som do 'd' desaparecendo." }
      ],
      exercises: {
        fillBlanks: [
          { text: "___ have I seen such dedication. (nunca)", answer: "Never" },
          { text: "She ___ (must/forget) about the meeting.", answer: "must have forgotten" },
          { text: "You ___ (should/call) me earlier.", answer: "should have called" },
          { text: "Not only ___ she win, but she also broke a record. (did)", answer: "did" },
          { text: "When I was young, I ___ (would/visit) my grandmother every summer.", answer: "would visit" }
        ],
        matching: [
          { left: "Nuance", right: "Nuance/Sutileza" },
          { left: "Emphasis", right: "Ênfase" },
          { left: "Speculate", right: "Especular" },
          { left: "Rarely", right: "Raramente" },
          { left: "Assumption", right: "Suposição" },
          { left: "Distinct", right: "Distinto(a)" }
        ],
        ordering: [
          { words: ["seen", "have", "Never", "I", "this"], answer: "Never have I seen this" },
          { words: ["have", "must", "forgotten", "She"], answer: "She must have forgotten" },
          { words: ["have", "should", "called", "You", "me"], answer: "You should have called me" },
          { words: ["only", "she", "Not", "win", "did"], answer: "Not only did she win" },
          { words: ["used", "live", "I", "Paris", "to", "in"], answer: "I used to live in Paris" }
        ],
        translation: [
          { direction: "pt-en", text: "Nunca vi um lugar tão bonito.", answer: "Never have I seen such a beautiful place." },
          { direction: "pt-en", text: "Ela deve ter esquecido da reunião.", answer: "She must have forgotten about the meeting." },
          { direction: "pt-en", text: "Você deveria ter me ligado mais cedo.", answer: "You should have called me earlier." },
          { direction: "en-pt", text: "Not only did she win, but she also broke a record.", answer: "Ela não apenas ganhou, como também quebrou um recorde." },
          { direction: "en-pt", text: "I used to live in Paris.", answer: "Eu costumava morar em Paris." },
          { direction: "en-pt", text: "He might have missed the train.", answer: "Ele pode ter perdido o trem." }
        ],
        dictation: [
          { audioText: "Never have I seen such dedication.", answer: "Never have I seen such dedication." },
          { audioText: "She must have forgotten about the meeting.", answer: "She must have forgotten about the meeting." },
          { audioText: "You should have called me earlier.", answer: "You should have called me earlier." }
        ],
        dialogue: [
          {
            title: "A Missed Opportunity",
            lines: [
              { speaker: "Carlos", text: "Do you think she knew about the change of plans?" },
              { speaker: "user", prompt: "Diga que ela deve ter esquecido:", options: ["She must have forgotten.", "She must forget.", "She forgets it."], answer: 0 },
              { speaker: "Carlos", text: "That's possible. What should we have done differently?" },
              { speaker: "user", prompt: "Diga que vocês deveriam ter ligado mais cedo:", options: ["We should have called earlier.", "We should call earlier.", "We call earlier."], answer: 0 },
              { speaker: "Carlos", text: "You're right. Lesson learned." }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct sentence for a past habit (state verb).", options: ["I would know him well.", "I used to know him well.", "I use to know him well.", "I would known him well."], answer: 1 },
        { q: "Choose the correct inversion.", options: ["Never I have seen that.", "Never have I seen that.", "I never have seen that.", "Have never I seen that."], answer: 1 },
        { type: "tf", q: "'Must have' expresses near certainty about a past event.", answer: true },
        { q: "Complete: 'You ___ (should/call) me earlier.'", options: ["should call", "should have called", "should calling", "should to call"], answer: 1 },
        { type: "short", q: "Complete: 'She ___ have forgotten.' (deve)", answer: ["must"] },
        { q: "'Speculate' means:", options: ["Confirmar", "Especular", "Negar", "Explicar"], answer: 1 },
        { type: "tf", q: "'Would' can be used for past habitual states like 'I would love chocolate as a child.'", answer: false, explanation: "'Would' não é usado para estados (like, know, be); apenas 'used to' funciona para estados." },
        { q: "Choose the correct sentence.", options: ["Not only she won, but also broke a record.", "Not only did she win, but she also broke a record.", "Not only won she, but she also broke a record.", "Not only she did win, but broke a record."], answer: 1 },
        { q: "'Assumption' means:", options: ["Fato confirmado", "Suposição", "Prova", "Regra"], answer: 1 },
        { type: "short", q: "Complete: 'He ___ have missed the train.' (talvez)", answer: ["might"] },
        { q: "Choose the correct sentence.", options: ["I shouldn't have said that.", "I shouldn't said that.", "I shouldn't to have said that.", "I not should have said that."], answer: 0 },
        { type: "tf", q: "Inversion structures like 'Never have I...' are typical of casual, everyday speech.", answer: false, explanation: "São mais típicas de um registro formal ou enfático, não da conversa casual do dia a dia." }
      ]
    },
    {
      id: "c1-m2",
      title: "Expressões Idiomáticas",
      subtitle: "Idioms comuns e como usá-los naturalmente",
      lesson: {
        intro: "Expressões idiomáticas são frases cujo significado não pode ser deduzido literalmente — dominá-las é um sinal claro de fluência avançada.",
        sections: [
          {
            heading: "O Que São Idioms?",
            text: "Um idiom tem um significado figurado, diferente da soma literal das palavras.",
            examples: [
              { en: "It's raining cats and dogs.", pt: "Está chovendo muito. (não literalmente gatos e cachorros)" },
              { en: "Break a leg!", pt: "Boa sorte! (usado antes de uma apresentação)" }
            ]
          },
          {
            heading: "Idioms sobre Desafios e Decisões",
            text: "Muitos idioms descrevem situações difíceis ou decisões importantes.",
            examples: [
              { en: "I need to bite the bullet and talk to my boss.", pt: "Eu preciso encarar a situação e falar com meu chefe." },
              { en: "We're between a rock and a hard place.", pt: "Estamos entre a cruz e a espada." }
            ]
          },
          {
            heading: "Idioms sobre Comunicação",
            text: "Alguns idioms descrevem formas de se comunicar ou revelar informações.",
            examples: [
              { en: "She let the cat out of the bag.", pt: "Ela deixou escapar o segredo." },
              { en: "Let's cut to the chase.", pt: "Vamos direto ao ponto." }
            ]
          }
        ]
      },
      vocabulary: [
        { word: "Bite the bullet", phonetic: "/baɪt ðə ˈbʊlɪt/", translation: "Encarar a situação difícil", example: "I decided to bite the bullet and apologize.", exampleTranslation: "Eu decidi encarar a situação e pedir desculpas." },
        { word: "Break the ice", phonetic: "/breɪk ðiː aɪs/", translation: "Quebrar o gelo", example: "He told a joke to break the ice.", exampleTranslation: "Ele contou uma piada para quebrar o gelo." },
        { word: "Piece of cake", phonetic: "/piːs ʌv keɪk/", translation: "Muito fácil", example: "The test was a piece of cake.", exampleTranslation: "A prova foi muito fácil." },
        { word: "Under the weather", phonetic: "/ˈʌndər ðə ˈwɛðər/", translation: "Um pouco doente", example: "I'm feeling a bit under the weather today.", exampleTranslation: "Estou me sentindo um pouco mal hoje." },
        { word: "Hit the nail on the head", phonetic: "/hɪt ðə neɪl ɒn ðə hɛd/", translation: "Acertar em cheio", example: "You hit the nail on the head with that comment.", exampleTranslation: "Você acertou em cheio com esse comentário." },
        { word: "Cut to the chase", phonetic: "/kʌt tuː ðə tʃeɪs/", translation: "Ir direto ao ponto", example: "Let's cut to the chase and discuss the budget.", exampleTranslation: "Vamos direto ao ponto e discutir o orçamento." },
        { word: "Let the cat out of the bag", phonetic: "/lɛt ðə kæt aʊt ʌv ðə bæɡ/", translation: "Deixar escapar um segredo", example: "He let the cat out of the bag about the surprise party.", exampleTranslation: "Ele deixou escapar o segredo da festa surpresa." },
        { word: "On the ball", phonetic: "/ɒn ðə bɔːl/", translation: "Atento/Competente", example: "She's really on the ball at work.", exampleTranslation: "Ela é realmente competente no trabalho." },
        { word: "Once in a blue moon", phonetic: "/wʌns ɪn ə bluː muːn/", translation: "Raramente", example: "We only see each other once in a blue moon.", exampleTranslation: "Só nos vemos raramente." },
        { word: "Cost an arm and a leg", phonetic: "/kɒst ən ɑːrm ənd ə lɛɡ/", translation: "Custar muito caro", example: "That car cost an arm and a leg.", exampleTranslation: "Aquele carro custou uma fortuna." }
      ],
      grammar: {
        title: "Estrutura Fixa dos Idioms",
        explanation: "A maioria dos idioms tem uma estrutura fixa e não pode ser alterada livremente (não se pode trocar palavras dentro deles), embora o tempo verbal geralmente possa mudar.",
        table: {
          headers: ["Idiom (forma fixa)", "Variação possível"],
          rows: [
            ["break the ice", "broke the ice / breaking the ice (tempo verbal muda)"],
            ["piece of cake", "a piece of cake / it was a piece of cake"],
            ["cost an arm and a leg", "costs/cost/will cost an arm and a leg"]
          ]
        },
        correct: ["The exam was a piece of cake.", "He broke the ice with a joke.", "This trip will cost an arm and a leg."],
        incorrect: ["The exam was a piece of pie.", "He broke the water with a joke.", "This trip will cost a hand and a foot."]
      },
      listening: [
        {
          title: "Office Small Talk",
          accent: "american",
          transcript: "Tom: How was the interview? Sara: Honestly, it was a piece of cake! I think I hit the nail on the head with my answers. Tom: That's great! I'm feeling a bit under the weather today, so I couldn't focus much. Sara: Sorry to hear that. Let's cut to the chase — do you think you got the promotion?",
          questions: [
            { q: "How does Sara describe the interview?", options: ["Very difficult", "A piece of cake", "Boring", "Too long"], answer: 1 },
            { q: "How is Tom feeling?", options: ["Great", "A bit under the weather", "Excited", "Angry"], answer: 1 },
            { q: "What does Sara want to do?", options: ["Talk about the weather", "Cut to the chase about the promotion", "End the conversation", "Avoid the topic"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "Learning to Take Risks",
          text: "For years, I avoided making big decisions, always waiting for the 'right moment.' Eventually, I realized I needed to bite the bullet and take a risk. My friends told me the opportunity would cost an arm and a leg, but I decided it was worth it. Looking back, I think my decision really hit the nail on the head — it turned out to be the best choice I ever made, even though it doesn't happen once in a blue moon that things work out so perfectly.",
          questions: [
            { q: "What did the writer avoid for years?", options: ["Traveling", "Making big decisions", "Working", "Studying"], answer: 1 },
            { q: "What did the writer's friends say about the opportunity?", options: ["It was free", "It would cost an arm and a leg", "It was easy", "It was risky but cheap"], answer: 1 },
            { q: "How does the writer feel about the decision now?", options: ["Regretful", "It hit the nail on the head", "Confused", "Indifferent"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 3 frases usando idioms diferentes em contextos reais da sua vida.", minWords: 20, modelAnswer: "My exam was a piece of cake. I need to bite the bullet and talk to my landlord. I only see my cousins once in a blue moon." },
        { prompt: "Escreva um pequeno diálogo usando pelo menos 3 idioms desta lição.", minWords: 25, modelAnswer: "A: How was your day? B: A bit under the weather, honestly. A: Sorry to hear that. Let's cut to the chase — do you need help with anything?" }
      ],
      speaking: [
        { phrase: "It's a piece of cake!", tip: "Diga com entusiasmo — é uma expressão informal e animada." },
        { phrase: "I'm feeling a bit under the weather.", tip: "'Weather' rima com 'feather', não com 'wither'." },
        { phrase: "Let's cut to the chase.", tip: "'Chase' tem o som 'ch' inicial, como em 'chair'." },
        { phrase: "You hit the nail on the head.", tip: "'Nail' tem vogal longa /eɪ/, como em 'mail'." },
        { phrase: "That cost an arm and a leg!", tip: "Enfatize 'arm' e 'leg' para dar o tom exagerado da expressão." }
      ],
      exercises: {
        fillBlanks: [
          { text: "The exam was a ___ of cake. (muito fácil)", answer: "piece" },
          { text: "I'm feeling a bit under the ___ today.", answer: "weather" },
          { text: "Let's ___ to the chase. (ir direto ao ponto)", answer: "cut" },
          { text: "You hit the ___ on the head with that comment.", answer: "nail" },
          { text: "That trip will cost an ___ and a leg.", answer: "arm" }
        ],
        matching: [
          { left: "Piece of cake", right: "Muito fácil" },
          { left: "Under the weather", right: "Um pouco doente" },
          { left: "Break the ice", right: "Quebrar o gelo" },
          { left: "Cut to the chase", right: "Ir direto ao ponto" },
          { left: "Once in a blue moon", right: "Raramente" },
          { left: "Cost an arm and a leg", right: "Custar muito caro" }
        ],
        ordering: [
          { words: ["was", "exam", "piece", "The", "cake", "a", "of"], answer: "The exam was a piece of cake" },
          { words: ["feeling", "I'm", "under", "weather", "the"], answer: "I'm feeling under the weather" },
          { words: ["cut", "Let's", "chase", "the", "to"], answer: "Let's cut to the chase" },
          { words: ["nail", "hit", "the", "You", "head", "the", "on"], answer: "You hit the nail on the head" },
          { words: ["arm", "cost", "will", "This", "a", "leg", "and"], answer: "This will cost an arm and a leg" }
        ],
        translation: [
          { direction: "pt-en", text: "A prova foi muito fácil.", answer: "The exam was a piece of cake." },
          { direction: "pt-en", text: "Eu estou me sentindo um pouco mal.", answer: "I'm feeling under the weather." },
          { direction: "pt-en", text: "Vamos direto ao ponto.", answer: "Let's cut to the chase." },
          { direction: "en-pt", text: "You hit the nail on the head.", answer: "Você acertou em cheio." },
          { direction: "en-pt", text: "That car cost an arm and a leg.", answer: "Aquele carro custou uma fortuna." },
          { direction: "en-pt", text: "We only see each other once in a blue moon.", answer: "Só nos vemos raramente." }
        ],
        dictation: [
          { audioText: "The exam was a piece of cake.", answer: "The exam was a piece of cake." },
          { audioText: "Let's cut to the chase.", answer: "Let's cut to the chase." },
          { audioText: "You hit the nail on the head.", answer: "You hit the nail on the head." }
        ],
        dialogue: [
          {
            title: "Catching Up",
            lines: [
              { speaker: "Bruno", text: "How was the exam?" },
              { speaker: "user", prompt: "Diga que foi muito fácil (piece of cake):", options: ["It was a piece of cake.", "It was under the weather.", "It cost an arm and a leg."], answer: 0 },
              { speaker: "Bruno", text: "Nice! And how are you feeling today?" },
              { speaker: "user", prompt: "Diga que está um pouco mal (under the weather):", options: ["I'm feeling a bit under the weather.", "I'm feeling a piece of cake.", "I'm cutting to the chase."], answer: 0 },
              { speaker: "Bruno", text: "Get well soon!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "'Piece of cake' means:", options: ["Muito difícil", "Muito fácil", "Muito caro", "Muito raro"], answer: 1 },
        { q: "'Under the weather' means:", options: ["Muito feliz", "Um pouco doente", "Com muito frio", "Com muita pressa"], answer: 1 },
        { type: "tf", q: "'Cut to the chase' means to go straight to the point.", answer: true },
        { q: "Complete: 'You hit the ___ on the head.'", options: ["nail", "hammer", "screw", "wall"], answer: 0 },
        { type: "short", q: "Complete: 'That car cost an arm and a ___.'", answer: ["leg"] },
        { q: "'Once in a blue moon' means:", options: ["Frequentemente", "Raramente", "Nunca", "Sempre"], answer: 1 },
        { type: "tf", q: "'Break the ice' means to start a conversation in an awkward situation.", answer: true },
        { q: "Choose the correct idiom for 'deixar escapar um segredo'.", options: ["Let the cat out of the bag", "Break the ice", "Cost an arm and a leg", "Piece of cake"], answer: 0 },
        { q: "'Bite the bullet' means:", options: ["Evitar um problema", "Encarar uma situação difícil", "Comemorar", "Desistir"], answer: 1 },
        { type: "short", q: "Complete: 'She's really on the ___ at work.' (atenta)", answer: ["ball"] },
        { q: "Choose the correct sentence.", options: ["The exam was a piece of pie.", "The exam was a piece of cake.", "The exam was a slice of cake.", "The exam was a cake piece."], answer: 1 },
        { type: "tf", q: "Idioms usually keep their exact words, though the verb tense can change.", answer: true }
      ]
    },
    {
      id: "c1-m3",
      title: "Redação Formal e Acadêmica",
      subtitle: "Estrutura de redação formal e conectivos (linking words)",
      lesson: {
        intro: "Escrever de forma formal e acadêmica exige uma estrutura clara e o uso correto de conectivos que organizam suas ideias de forma lógica.",
        sections: [
          {
            heading: "Estrutura de um Parágrafo Formal",
            text: "Um bom parágrafo formal tem uma frase-tópico, argumentos de apoio e uma conclusão.",
            examples: [
              { en: "Furthermore, this approach has proven effective in several studies.", pt: "Além disso, esta abordagem se mostrou eficaz em vários estudos." },
              { en: "In conclusion, the evidence strongly supports this view.", pt: "Em conclusão, a evidência apoia fortemente esta visão." }
            ]
          },
          {
            heading: "Conectivos de Adição e Contraste",
            text: "Palavras como 'moreover', 'furthermore', 'however', 'nevertheless' conectam ideias de forma sofisticada.",
            examples: [
              { en: "The policy is popular. However, it has significant drawbacks.", pt: "A política é popular. No entanto, tem desvantagens significativas." },
              { en: "Moreover, the data suggests a clear trend.", pt: "Além disso, os dados sugerem uma tendência clara." }
            ]
          },
          {
            heading: "Evitando Linguagem Informal",
            text: "Na redação formal, evitamos contrações, gírias e frases muito diretas, preferindo estruturas mais elaboradas.",
            examples: [
              { en: "It is not possible to draw such a conclusion.", pt: "Não é possível chegar a tal conclusão. (formal)" },
              { en: "You can't say that for sure.", pt: "Você não pode dizer isso com certeza. (informal — evitar)" }
            ]
          }
        ]
      },
      vocabulary: [
        { word: "Furthermore", phonetic: "/ˈfɜːrðərmɔːr/", translation: "Além disso", example: "Furthermore, the results were consistent.", exampleTranslation: "Além disso, os resultados foram consistentes." },
        { word: "Nevertheless", phonetic: "/ˌnɛvərðəˈlɛs/", translation: "No entanto/Mesmo assim", example: "Nevertheless, the project continued.", exampleTranslation: "Mesmo assim, o projeto continuou." },
        { word: "Consequently", phonetic: "/ˈkɒnsɪkwəntli/", translation: "Consequentemente", example: "Consequently, sales increased.", exampleTranslation: "Consequentemente, as vendas aumentaram." },
        { word: "Whereas", phonetic: "/wɛərˈæz/", translation: "Enquanto que", example: "Some prefer coffee, whereas others prefer tea.", exampleTranslation: "Alguns preferem café, enquanto outros preferem chá." },
        { word: "In light of", phonetic: "/ɪn laɪt ʌv/", translation: "Em vista de", example: "In light of the results, we changed our strategy.", exampleTranslation: "Em vista dos resultados, mudamos nossa estratégia." },
        { word: "Argument", phonetic: "/ˈɑːrɡjəmənt/", translation: "Argumento", example: "This is a strong argument.", exampleTranslation: "Este é um argumento forte." },
        { word: "Evidence", phonetic: "/ˈɛvɪdəns/", translation: "Evidência", example: "The evidence supports this theory.", exampleTranslation: "A evidência apoia esta teoria." },
        { word: "Conclude", phonetic: "/kənˈkluːd/", translation: "Concluir", example: "We can conclude that the method works.", exampleTranslation: "Podemos concluir que o método funciona." },
        { word: "Significant", phonetic: "/sɪɡˈnɪfɪkənt/", translation: "Significativo(a)", example: "There was a significant improvement.", exampleTranslation: "Houve uma melhoria significativa." },
        { word: "Perspective", phonetic: "/pərˈspɛktɪv/", translation: "Perspectiva", example: "This offers a new perspective on the issue.", exampleTranslation: "Isto oferece uma nova perspectiva sobre a questão." }
      ],
      grammar: {
        title: "Conectivos Formais (Linking Words)",
        explanation: "Conectivos formais organizam ideias de adição, contraste, causa e conclusão de forma sofisticada.",
        table: {
          headers: ["Função", "Conectivos", "Exemplo"],
          rows: [
            ["Adição", "furthermore, moreover, in addition", "Furthermore, the data is reliable."],
            ["Contraste", "however, nevertheless, whereas", "However, some disagree with this view."],
            ["Causa/Consequência", "therefore, consequently, thus", "Therefore, we must reconsider the plan."],
            ["Conclusão", "in conclusion, to sum up, overall", "In conclusion, the results are promising."]
          ]
        },
        correct: ["Furthermore, the results support our hypothesis.", "However, not everyone agrees.", "In conclusion, the study was successful."],
        incorrect: ["Furthermore but the results support our hypothesis.", "However not everyone agrees the point.", "In conclusion the study was successful, but."]
      },
      listening: [
        {
          title: "An Academic Lecture",
          accent: "british",
          transcript: "Today, we will examine the impact of remote work on productivity. Furthermore, we will consider the psychological effects of isolation. Some studies suggest productivity increases; however, other research indicates the opposite. Consequently, we must consider multiple factors before drawing conclusions. In conclusion, this is a complex issue that requires further research.",
          questions: [
            { q: "What is the lecture about?", options: ["Cooking", "The impact of remote work on productivity", "Ancient history", "Sports"], answer: 1 },
            { q: "What do some studies suggest?", options: ["Productivity always decreases", "Productivity increases", "Nothing changes", "Productivity is unrelated"], answer: 1 },
            { q: "What does the lecturer conclude?", options: ["The issue is simple", "The issue is complex and needs more research", "There is no issue", "The topic is closed"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "The Debate on Social Media",
          text: "Social media has transformed communication in unprecedented ways. Furthermore, it has created new opportunities for businesses and individuals alike. However, this transformation is not without significant drawbacks. Numerous studies suggest a correlation between excessive use and increased anxiety. Consequently, many experts argue for more balanced usage. In conclusion, while social media offers considerable benefits, its consequences must be carefully managed.",
          questions: [
            { q: "What has social media transformed?", options: ["Nothing", "Communication", "Only business", "Only entertainment"], answer: 1 },
            { q: "What do studies suggest about excessive use?", options: ["It has no effect", "A correlation with increased anxiety", "It always improves mood", "It's unrelated to mental health"], answer: 1 },
            { q: "What is the conclusion of the text?", options: ["Social media should be banned", "Benefits and consequences must be balanced", "There are no drawbacks", "Nothing needs to change"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva um parágrafo formal (5-6 frases) sobre um tema à sua escolha, usando pelo menos 3 conectivos formais.", minWords: 40, modelAnswer: "Remote work has become increasingly common. Furthermore, it offers flexibility to employees. However, it can also lead to isolation. Consequently, companies must find a balance. In conclusion, remote work has both benefits and challenges." },
        { prompt: "Reescreva 3 frases informais transformando-as em linguagem formal e acadêmica.", minWords: 20, modelAnswer: "It is not possible to confirm this claim without further evidence. The data indicates a significant trend. One might argue that additional research is necessary." }
      ],
      speaking: [
        { phrase: "Furthermore, the results were consistent.", tip: "'Furthermore' tem 3 sílabas: FUR-ther-more." },
        { phrase: "However, some disagree with this view.", tip: "'However' geralmente vem seguido de vírgula e uma pequena pausa." },
        { phrase: "Consequently, sales increased.", tip: "'Consequently' tem acento na primeira sílaba: CON-se-quent-ly." },
        { phrase: "In conclusion, the study was successful.", tip: "'Conclusion' tem acento na segunda sílaba: con-CLU-sion." },
        { phrase: "This offers a new perspective.", tip: "'Perspective' tem acento na segunda sílaba: per-SPEC-tive." }
      ],
      exercises: {
        fillBlanks: [
          { text: "___, the results were consistent. (além disso)", answer: "Furthermore" },
          { text: "The policy is popular. ___, it has drawbacks. (no entanto)", answer: "However" },
          { text: "___, sales increased. (consequentemente)", answer: "Consequently" },
          { text: "In ___, the study was successful. (conclusão)", answer: "conclusion" },
          { text: "Some prefer coffee, ___ others prefer tea. (enquanto que)", answer: "whereas" }
        ],
        matching: [
          { left: "Furthermore", right: "Além disso" },
          { left: "Nevertheless", right: "No entanto/Mesmo assim" },
          { left: "Consequently", right: "Consequentemente" },
          { left: "Whereas", right: "Enquanto que" },
          { left: "Evidence", right: "Evidência" },
          { left: "Perspective", right: "Perspectiva" }
        ],
        ordering: [
          { words: ["results", "Furthermore", "were", "consistent", "the"], answer: "Furthermore the results were consistent" },
          { words: ["disagree", "However", "some", "view", "this", "with"], answer: "However some disagree with this view" },
          { words: ["increased", "Consequently", "sales"], answer: "Consequently sales increased" },
          { words: ["conclusion", "was", "In", "study", "successful", "the"], answer: "In conclusion the study was successful" },
          { words: ["perspective", "offers", "new", "This", "a"], answer: "This offers a new perspective" }
        ],
        translation: [
          { direction: "pt-en", text: "Além disso, os resultados foram consistentes.", answer: "Furthermore, the results were consistent." },
          { direction: "pt-en", text: "No entanto, alguns discordam desta visão.", answer: "However, some disagree with this view." },
          { direction: "pt-en", text: "Em conclusão, o estudo foi bem-sucedido.", answer: "In conclusion, the study was successful." },
          { direction: "en-pt", text: "Consequently, sales increased.", answer: "Consequentemente, as vendas aumentaram." },
          { direction: "en-pt", text: "This offers a new perspective on the issue.", answer: "Isto oferece uma nova perspectiva sobre a questão." },
          { direction: "en-pt", text: "The evidence supports this theory.", answer: "A evidência apoia esta teoria." }
        ],
        dictation: [
          { audioText: "Furthermore, the results were consistent.", answer: "Furthermore, the results were consistent." },
          { audioText: "However, some disagree with this view.", answer: "However, some disagree with this view." },
          { audioText: "In conclusion, the study was successful.", answer: "In conclusion, the study was successful." }
        ],
        dialogue: [
          {
            title: "Discussing an Essay",
            lines: [
              { speaker: "Professor", text: "Your essay needs stronger connectors between paragraphs. Do you know any formal linking words?" },
              { speaker: "user", prompt: "Diga que você pode usar 'furthermore' e 'however':", options: ["I can use 'furthermore' and 'however'.", "I can use 'and' and 'but'.", "I don't know any."], answer: 0 },
              { speaker: "Professor", text: "Good choices. How would you conclude your essay?" },
              { speaker: "user", prompt: "Diga que usaria 'in conclusion':", options: ["I would use 'in conclusion'.", "I would just stop writing.", "I would use 'so'."], answer: 0 },
              { speaker: "Professor", text: "That's a solid academic approach!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct formal connector for addition.", options: ["However", "Furthermore", "Whereas", "Despite"], answer: 1 },
        { q: "Choose the correct formal connector for contrast.", options: ["Moreover", "In addition", "However", "Consequently"], answer: 2 },
        { type: "tf", q: "'Consequently' is used to show a result or consequence.", answer: true },
        { q: "Complete: 'In ___, the results are promising.' (conclusão)", options: ["addition", "conclusion", "contrast", "evidence"], answer: 1 },
        { type: "short", q: "Complete: 'Some prefer tea, ___ others prefer coffee.' (enquanto que)", answer: ["whereas"] },
        { q: "'Evidence' means:", options: ["Opinião", "Evidência", "Dúvida", "Erro"], answer: 1 },
        { type: "tf", q: "Formal academic writing typically uses contractions like 'can't' and 'don't'.", answer: false, explanation: "A escrita formal/acadêmica geralmente evita contrações, preferindo formas completas como 'cannot' e 'do not'." },
        { q: "Choose the correct sentence.", options: ["Furthermore but the results support this.", "Furthermore, the results support this.", "The results, furthermore support this and.", "Furthermore results the support this."], answer: 1 },
        { q: "'Significant' means:", options: ["Insignificante", "Significativo", "Duvidoso", "Impossível"], answer: 1 },
        { type: "short", q: "Complete: 'This offers a new ___ on the issue.' (perspectiva)", answer: ["perspective"] },
        { q: "Choose the correct sentence.", options: ["However, some disagree with this view.", "However some, disagree with this view.", "Some, however disagree with this view however.", "However disagree some with this view."], answer: 0 },
        { type: "tf", q: "'Nevertheless' and 'however' can both be used to show contrast.", answer: true }
      ]
    },
    {
      id: "c1-m4",
      title: "Compreendendo Áudio Nativo",
      subtitle: "Fala conectada, reduções e compreensão de áudio em velocidade natural",
      lesson: {
        intro: "Falantes nativos frequentemente reduzem e conectam palavras na fala rápida — entender esses padrões é essencial para compreender podcasts, filmes e conversas reais.",
        sections: [
          {
            heading: "Fala Conectada (Connected Speech)",
            text: "Palavras se conectam e mudam de som quando faladas naturalmente, especialmente entre consoante final e vogal inicial.",
            examples: [
              { en: "'What are you doing?' soa como 'Whaddaya doing?'", pt: "Fala conectada e reduzida" },
              { en: "'I don't know' soa como 'I dunno'.", pt: "Redução comum em fala informal" }
            ]
          },
          {
            heading: "Reduções Comuns",
            text: "Palavras como 'going to', 'want to', 'have to' são frequentemente reduzidas na fala rápida.",
            examples: [
              { en: "'going to' → 'gonna'", pt: "Redução comum" },
              { en: "'want to' → 'wanna'", pt: "Redução comum" }
            ]
          },
          {
            heading: "Estratégias de Compreensão",
            text: "Focar em palavras-chave, usar o contexto, e não tentar entender cada palavra isoladamente são estratégias essenciais para entender áudio nativo.",
            examples: [
              { en: "Listen for stressed words, not every single word.", pt: "Ouça as palavras com ênfase, não cada palavra isoladamente." },
              { en: "Context often reveals meaning even when a word is unclear.", pt: "O contexto muitas vezes revela o significado mesmo quando uma palavra não fica clara." }
            ]
          }
        ]
      },
      vocabulary: [
        { word: "Connected speech", phonetic: "/kəˈnɛktɪd spiːtʃ/", translation: "Fala conectada", example: "Connected speech can be hard for learners.", exampleTranslation: "A fala conectada pode ser difícil para os aprendizes." },
        { word: "Reduction", phonetic: "/rɪˈdʌkʃən/", translation: "Redução", example: "'Gonna' is a reduction of 'going to'.", exampleTranslation: "'Gonna' é uma redução de 'going to'." },
        { word: "Stress", phonetic: "/strɛs/", translation: "Ênfase/Acento", example: "Sentence stress changes the meaning.", exampleTranslation: "A ênfase na frase muda o significado." },
        { word: "Native speaker", phonetic: "/ˈneɪtɪv ˈspiːkər/", translation: "Falante nativo", example: "I love listening to native speakers.", exampleTranslation: "Eu adoro ouvir falantes nativos." },
        { word: "Slang", phonetic: "/slæŋ/", translation: "Gíria", example: "That word is slang, not formal English.", exampleTranslation: "Essa palavra é gíria, não inglês formal." },
        { word: "Mumble", phonetic: "/ˈmʌmbəl/", translation: "Resmungar/Falar sem clareza", example: "He tends to mumble when he's nervous.", exampleTranslation: "Ele tende a falar de forma pouco clara quando está nervoso." },
        { word: "Context", phonetic: "/ˈkɒntɛkst/", translation: "Contexto", example: "Context helps you guess unknown words.", exampleTranslation: "O contexto ajuda a adivinhar palavras desconhecidas." },
        { word: "Fluent", phonetic: "/ˈfluːənt/", translation: "Fluente", example: "She sounds completely fluent now.", exampleTranslation: "Ela soa completamente fluente agora." },
        { word: "Accent", phonetic: "/ˈæksɛnt/", translation: "Sotaque", example: "Every region has a different accent.", exampleTranslation: "Cada região tem um sotaque diferente." },
        { word: "Pace", phonetic: "/peɪs/", translation: "Ritmo/Velocidade", example: "Native speakers often talk at a fast pace.", exampleTranslation: "Falantes nativos costumam falar em um ritmo rápido." }
      ],
      grammar: {
        title: "Reduções Comuns na Fala Nativa",
        explanation: "Estas reduções são extremamente comuns na fala informal e devem ser reconhecidas na escuta, embora raramente sejam usadas na escrita formal.",
        table: {
          headers: ["Forma Completa", "Redução Falada"],
          rows: [
            ["going to", "gonna"],
            ["want to", "wanna"],
            ["have to", "hafta"],
            ["what are you", "whaddaya"],
            ["kind of / sort of", "kinda / sorta"]
          ]
        },
        correct: ["I'm gonna call you later. (fala informal)", "Do you wanna go out tonight? (fala informal)", "I have to finish this report. (por escrito)"],
        incorrect: ["I'm gonna call you later. (em uma redação formal)", "Do you wanna go out tonight? (em uma redação formal)"]
      },
      listening: [
        {
          title: "A Casual Chat (Fast Speech)",
          accent: "american",
          transcript: "Hey, whaddaya doing later? I was thinking we could grab some food, if you wanna. I dunno what time works for you, but I gotta finish some stuff first. Lemme know when you're free!",
          questions: [
            { q: "What does 'whaddaya' mean?", options: ["What are you", "What did you", "What do you want", "Where are you"], answer: 0 },
            { q: "What does the speaker suggest?", options: ["Studying together", "Grabbing some food", "Going to work", "Watching a movie"], answer: 1 },
            { q: "What does 'gotta' mean?", options: ["Got to / have to", "Going to", "Want to", "Got you"], answer: 0 }
          ]
        }
      ],
      reading: [
        {
          title: "Understanding Native Speech",
          text: "When learners first listen to native speakers, they often feel overwhelmed. Words blend together, and common phrases get reduced — 'going to' becomes 'gonna,' and 'want to' becomes 'wanna.' The key to understanding is not translating every word, but rather listening for the overall meaning and stressed words. With enough exposure to podcasts, movies, and real conversations, this skill develops naturally over time.",
          questions: [
            { q: "What happens to words in native speech?", options: ["They are pronounced very slowly", "They blend together and get reduced", "They disappear completely", "Nothing changes"], answer: 1 },
            { q: "What is the key to understanding, according to the text?", options: ["Translating every word", "Listening for overall meaning and stressed words", "Memorizing scripts", "Avoiding native content"], answer: 1 },
            { q: "How does this skill develop, according to the text?", options: ["Instantly", "Through enough exposure over time", "It can't be developed", "Only in a classroom"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 3 frases usando formas reduzidas (gonna, wanna, gotta) como você as ouviria faladas.", minWords: 15, modelAnswer: "I'm gonna call her later. Do you wanna come with us? I gotta finish this first." },
        { prompt: "Escreva sobre suas estratégias pessoais para entender falantes nativos de inglês.", minWords: 20, modelAnswer: "I listen to podcasts every day. I focus on the general meaning instead of every word. I watch movies with English subtitles first." }
      ],
      speaking: [
        { phrase: "I'm gonna call you later.", tip: "'Gonna' é uma pronúncia natural, não um erro — mas evite escrever assim em textos formais." },
        { phrase: "Do you wanna go out tonight?", tip: "'Wanna' junta 'want' e 'to' em um único som." },
        { phrase: "I gotta finish this first.", tip: "'Gotta' vem de 'got to', usado como 'tenho que'." },
        { phrase: "Whaddaya think?", tip: "Essa é uma forma extremamente reduzida de 'What do you think?' — comum apenas na fala muito informal." },
        { phrase: "Lemme know when you're free.", tip: "'Lemme' é a redução de 'let me'." }
      ],
      exercises: {
        fillBlanks: [
          { text: "'Gonna' is a reduction of '___ to'.", answer: "going" },
          { text: "'Wanna' is a reduction of 'want ___'.", answer: "to" },
          { text: "'Gotta' comes from 'got ___'.", answer: "to" },
          { text: "'Lemme' means 'let ___'.", answer: "me" },
          { text: "Listening for ___ words helps you understand fast speech. (com ênfase)", answer: "stressed" }
        ],
        matching: [
          { left: "Connected speech", right: "Fala conectada" },
          { left: "Reduction", right: "Redução" },
          { left: "Native speaker", right: "Falante nativo" },
          { left: "Slang", right: "Gíria" },
          { left: "Context", right: "Contexto" },
          { left: "Accent", right: "Sotaque" }
        ],
        ordering: [
          { words: ["call", "gonna", "I'm", "later", "you"], answer: "I'm gonna call you later" },
          { words: ["wanna", "you", "Do", "come", "us", "with?"], answer: "Do you wanna come with us?" },
          { words: ["finish", "gotta", "I", "this", "first"], answer: "I gotta finish this first" },
          { words: ["know", "Lemme", "you're", "when", "free"], answer: "Lemme know when you're free" },
          { words: ["think", "Whaddaya"], answer: "Whaddaya think" }
        ],
        translation: [
          { direction: "pt-en", text: "Eu vou te ligar mais tarde. (forma falada)", answer: "I'm gonna call you later." },
          { direction: "pt-en", text: "Você quer sair hoje à noite? (forma falada)", answer: "Do you wanna go out tonight?" },
          { direction: "pt-en", text: "Eu tenho que terminar isso primeiro. (forma falada)", answer: "I gotta finish this first." },
          { direction: "en-pt", text: "Context helps you guess unknown words.", answer: "O contexto ajuda a adivinhar palavras desconhecidas." },
          { direction: "en-pt", text: "Native speakers often talk at a fast pace.", answer: "Falantes nativos costumam falar em um ritmo rápido." },
          { direction: "en-pt", text: "Sentence stress changes the meaning.", answer: "A ênfase na frase muda o significado." }
        ],
        dictation: [
          { audioText: "I'm gonna call you later.", answer: "I'm gonna call you later." },
          { audioText: "Do you wanna come with us?", answer: "Do you wanna come with us?" },
          { audioText: "I gotta finish this first.", answer: "I gotta finish this first." }
        ],
        dialogue: [
          {
            title: "Casual Plans",
            lines: [
              { speaker: "Kim", text: "Whaddaya doing this weekend?" },
              { speaker: "user", prompt: "Diga que você vai (gonna) descansar:", options: ["I'm gonna rest.", "I have rested.", "I rest yesterday."], answer: 0 },
              { speaker: "Kim", text: "Nice! Wanna grab coffee before that?" },
              { speaker: "user", prompt: "Diga que sim, você quer:", options: ["Yeah, I wanna.", "Yeah, I want.", "Yeah, I wanting."], answer: 0 },
              { speaker: "Kim", text: "Cool, see you then!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "What does 'gonna' come from?", options: ["Got to", "Going to", "Want to", "Give to"], answer: 1 },
        { q: "What does 'wanna' come from?", options: ["Want to", "Was not", "Will not", "Want a"], answer: 0 },
        { type: "tf", q: "Reduced forms like 'gonna' and 'wanna' should be used in formal academic writing.", answer: false, explanation: "Formas reduzidas são apropriadas para a fala informal, não para a escrita formal/acadêmica." },
        { q: "What does 'gotta' mean?", options: ["Got a", "Have to/Got to", "Going away", "Get out"], answer: 1 },
        { type: "short", q: "Complete: 'Lemme know' means 'Let ___ know'.", answer: ["me"] },
        { q: "'Native speaker' means:", options: ["Alguém aprendendo um idioma", "Alguém que fala o idioma nativamente", "Um professor", "Um tradutor"], answer: 1 },
        { type: "tf", q: "Understanding every single word is necessary to understand native speech.", answer: false, explanation: "É mais eficaz focar no significado geral e nas palavras com ênfase, não em cada palavra isoladamente." },
        { q: "'Slang' means:", options: ["Linguagem formal", "Gíria", "Gramática", "Pronúncia"], answer: 1 },
        { q: "'Context' helps you:", options: ["Ignorar o significado", "Adivinhar palavras desconhecidas", "Falar mais rápido", "Escrever formalmente"], answer: 1 },
        { type: "short", q: "Complete: 'I ___ finish this first.' (gotta)", answer: ["gotta"] },
        { q: "Choose the best strategy for understanding fast native speech.", options: ["Translate every word", "Focus on stressed words and context", "Give up listening", "Only read subtitles"], answer: 1 },
        { type: "tf", q: "'Accent' refers to the way people from different regions pronounce words.", answer: true }
      ]
    },
    {
      id: "c1-m5",
      title: "Debate e Argumentação",
      subtitle: "Linguagem para debater, concordar, discordar e argumentar formalmente",
      lesson: {
        intro: "Neste último módulo do C1, vamos aprender a estruturar argumentos, apresentar contra-argumentos e participar de debates de forma persuasiva e educada.",
        sections: [
          {
            heading: "Apresentando um Argumento",
            text: "Frases como 'I would argue that', 'It seems to me that', 'One could say that' introduzem opiniões de forma mais sofisticada que 'I think'.",
            examples: [
              { en: "I would argue that this policy is flawed.", pt: "Eu argumentaria que esta política é falha." },
              { en: "It seems to me that we need more evidence.", pt: "Parece-me que precisamos de mais evidências." }
            ]
          },
          {
            heading: "Concordando e Discordando Formalmente",
            text: "Em debates formais, discordamos de forma educada, reconhecendo o outro ponto de vista antes de contra-argumentar.",
            examples: [
              { en: "I see your point, but I would counter that...", pt: "Eu entendo seu ponto, mas eu contra-argumentaria que..." },
              { en: "While that may be true, it's also worth considering...", pt: "Embora isso possa ser verdade, também vale considerar..." }
            ]
          },
          {
            heading: "Fortalecendo Argumentos com Evidências",
            text: "Bons argumentos são apoiados por evidências, exemplos e lógica, não apenas opinião.",
            examples: [
              { en: "Studies have shown that this approach reduces costs.", pt: "Estudos mostraram que esta abordagem reduz custos." },
              { en: "For instance, consider the case of...", pt: "Por exemplo, considere o caso de..." }
            ]
          }
        ]
      },
      vocabulary: [
        { word: "Argue", phonetic: "/ˈɑːrɡjuː/", translation: "Argumentar", example: "I would argue that this is unfair.", exampleTranslation: "Eu argumentaria que isto é injusto." },
        { word: "Counter-argument", phonetic: "/ˈkaʊntər ˈɑːrɡjəmənt/", translation: "Contra-argumento", example: "Let me offer a counter-argument.", exampleTranslation: "Deixe-me oferecer um contra-argumento." },
        { word: "Point of view", phonetic: "/pɔɪnt ʌv vjuː/", translation: "Ponto de vista", example: "I understand your point of view.", exampleTranslation: "Eu entendo seu ponto de vista." },
        { word: "Concede", phonetic: "/kənˈsiːd/", translation: "Conceder/Admitir", example: "I concede that you have a valid point.", exampleTranslation: "Eu concedo que você tem um ponto válido." },
        { word: "Persuade", phonetic: "/pərˈsweɪd/", translation: "Persuadir", example: "Her speech persuaded the audience.", exampleTranslation: "O discurso dela persuadiu a audiência." },
        { word: "Debatable", phonetic: "/dɪˈbeɪtəbəl/", translation: "Discutível", example: "That claim is highly debatable.", exampleTranslation: "Essa afirmação é altamente discutível." },
        { word: "Bias", phonetic: "/ˈbaɪəs/", translation: "Viés/Preconceito", example: "Every source has some bias.", exampleTranslation: "Toda fonte tem algum viés." },
        { word: "Valid", phonetic: "/ˈvælɪd/", translation: "Válido(a)", example: "That's a valid concern.", exampleTranslation: "Essa é uma preocupação válida." },
        { word: "Rebuttal", phonetic: "/rɪˈbʌtəl/", translation: "Réplica/Refutação", example: "Her rebuttal was very convincing.", exampleTranslation: "A réplica dela foi muito convincente." },
        { word: "Compromise", phonetic: "/ˈkɒmprəmaɪz/", translation: "Compromisso/Meio-termo", example: "We need to find a compromise.", exampleTranslation: "Precisamos encontrar um meio-termo." }
      ],
      grammar: {
        title: "Estruturas para Debate Formal",
        explanation: "Estas estruturas ajudam a apresentar, reconhecer e contrapor argumentos de forma educada e sofisticada.",
        table: {
          headers: ["Função", "Estrutura", "Exemplo"],
          rows: [
            ["Apresentar opinião", "I would argue that...", "I would argue that this is necessary."],
            ["Reconhecer outro ponto", "I see your point, but...", "I see your point, but I disagree."],
            ["Contra-argumentar", "While that may be true,...", "While that may be true, there's another factor."],
            ["Conceder parcialmente", "I concede that...", "I concede that this has some merit."]
          ]
        },
        correct: ["I would argue that this approach is better.", "I see your point, but I still disagree.", "While that may be true, it doesn't change the outcome."],
        incorrect: ["I would argue this approach is better than.", "I see you point, but I disagree still.", "While may be true that, it doesn't change."]
      },
      listening: [
        {
          title: "A Formal Debate",
          accent: "british",
          transcript: "Speaker A: I would argue that remote work increases productivity overall. Speaker B: I see your point, but I would counter that it depends heavily on the role. While that may be true for some jobs, others require in-person collaboration. Speaker A: That's a valid concern, and I concede that a hybrid model might be the best compromise.",
          questions: [
            { q: "What does Speaker A argue?", options: ["Remote work decreases productivity", "Remote work increases productivity", "Nothing about productivity", "Remote work is illegal"], answer: 1 },
            { q: "What does Speaker B counter?", options: ["That it depends on the role", "That remote work is always bad", "That nothing matters", "That productivity is unrelated to work type"], answer: 0 },
            { q: "What compromise does Speaker A concede to?", options: ["Fully remote work only", "Fully in-person work only", "A hybrid model", "No compromise at all"], answer: 2 }
          ]
        }
      ],
      reading: [
        {
          title: "The Great Debate: Technology in Schools",
          text: "Educators have long debated the role of technology in classrooms. Proponents argue that technology enhances engagement and prepares students for the modern workforce. Critics, however, counter that excessive screen time can hinder deep learning and social skills. While both sides raise valid concerns, a growing number of experts suggest that a balanced, thoughtful approach — rather than an all-or-nothing stance — may be the most effective compromise.",
          questions: [
            { q: "What do proponents of technology argue?", options: ["It has no benefits", "It enhances engagement and prepares students for work", "It should be banned", "It's only useful for games"], answer: 1 },
            { q: "What do critics counter?", options: ["Technology is always good", "Excessive screen time can hinder learning and social skills", "There are no critics", "Technology is required by law"], answer: 1 },
            { q: "What do many experts suggest?", options: ["Banning technology completely", "A balanced, thoughtful approach", "Ignoring the debate", "Using technology all day"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva um parágrafo argumentando sua opinião sobre um tema atual, usando pelo menos 2 estruturas de debate formal.", minWords: 40, modelAnswer: "I would argue that technology has transformed education for the better. While that may be true for access to information, one could counter that it also creates distractions. Nevertheless, I concede that a balanced approach is likely the best solution." },
        { prompt: "Escreva um contra-argumento educado para a seguinte opinião: 'Trabalho remoto é sempre melhor que trabalho presencial.'", minWords: 25, modelAnswer: "I see your point, but I would counter that remote work isn't ideal for every role. While it offers flexibility, some jobs require in-person collaboration to function effectively." }
      ],
      speaking: [
        { phrase: "I would argue that this approach is better.", tip: "Soa mais formal e sofisticado do que simplesmente 'I think'." },
        { phrase: "I see your point, but I would counter that...", tip: "Essa estrutura reconhece o outro lado antes de discordar — muito educada." },
        { phrase: "While that may be true, there's another factor to consider.", tip: "'While' aqui significa 'embora', não 'enquanto' (tempo)." },
        { phrase: "I concede that this has some merit.", tip: "'Concede' tem acento na segunda sílaba: con-CEDE." },
        { phrase: "We need to find a compromise.", tip: "'Compromise' tem acento na primeira sílaba: COM-pro-mise." }
      ],
      exercises: {
        fillBlanks: [
          { text: "I would ___ that this policy is flawed. (argumentar)", answer: "argue" },
          { text: "I see your point, ___ I would counter that...", answer: "but" },
          { text: "___ that may be true, there's another factor. (embora)", answer: "While" },
          { text: "I ___ that you have a valid point. (concedo)", answer: "concede" },
          { text: "We need to find a ___. (meio-termo)", answer: "compromise" }
        ],
        matching: [
          { left: "Argue", right: "Argumentar" },
          { left: "Persuade", right: "Persuadir" },
          { left: "Concede", right: "Conceder" },
          { left: "Bias", right: "Viés" },
          { left: "Valid", right: "Válido(a)" },
          { left: "Compromise", right: "Compromisso/Meio-termo" }
        ],
        ordering: [
          { words: ["argue", "would", "this", "I", "necessary", "is"], answer: "I would argue this is necessary" },
          { words: ["point", "your", "see", "I", "but"], answer: "I see your point but" },
          { words: ["may", "that", "true", "While", "be"], answer: "While that may be true" },
          { words: ["concede", "merit", "some", "I", "has", "this", "that"], answer: "I concede that this has some merit" },
          { words: ["find", "need", "We", "compromise", "a", "to"], answer: "We need to find a compromise" }
        ],
        translation: [
          { direction: "pt-en", text: "Eu argumentaria que esta política é falha.", answer: "I would argue that this policy is flawed." },
          { direction: "pt-en", text: "Eu entendo seu ponto, mas eu discordo.", answer: "I see your point, but I disagree." },
          { direction: "pt-en", text: "Precisamos encontrar um meio-termo.", answer: "We need to find a compromise." },
          { direction: "en-pt", text: "While that may be true, it's worth considering another factor.", answer: "Embora isso possa ser verdade, vale considerar outro fator." },
          { direction: "en-pt", text: "I concede that you have a valid point.", answer: "Eu concedo que você tem um ponto válido." },
          { direction: "en-pt", text: "Her rebuttal was very convincing.", answer: "A réplica dela foi muito convincente." }
        ],
        dictation: [
          { audioText: "I would argue that this policy is flawed.", answer: "I would argue that this policy is flawed." },
          { audioText: "I see your point, but I disagree.", answer: "I see your point, but I disagree." },
          { audioText: "We need to find a compromise.", answer: "We need to find a compromise." }
        ],
        dialogue: [
          {
            title: "A Classroom Debate",
            lines: [
              { speaker: "Moderator", text: "What is your position on this issue?" },
              { speaker: "user", prompt: "Diga que você argumentaria a favor:", options: ["I would argue in favor of it.", "I have argument it.", "I arguing for it."], answer: 0 },
              { speaker: "Moderator", text: "Interesting. How would you respond to critics?" },
              { speaker: "user", prompt: "Diga que você concorda parcialmente, mas discorda:", options: ["I concede some points, but I still disagree overall.", "I concede nothing.", "I disagree concede."], answer: 0 },
              { speaker: "Moderator", text: "A well-reasoned response. Thank you." }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose a sophisticated way to introduce an opinion.", options: ["I think that...", "I would argue that...", "I guess that...", "Maybe that..."], answer: 1 },
        { q: "Choose the polite way to disagree in a formal debate.", options: ["You're wrong.", "I see your point, but I would counter that...", "No way.", "That's stupid."], answer: 1 },
        { type: "tf", q: "'Concede' means to fully agree with everything the other person says.", answer: false, explanation: "'Concede' significa admitir que um ponto específico é válido, não concordar com tudo." },
        { q: "'Persuade' means:", options: ["Convencer", "Discordar", "Ignorar", "Confundir"], answer: 0 },
        { type: "short", q: "Complete: 'We need to find a ___.' (meio-termo)", answer: ["compromise"] },
        { q: "'Bias' means:", options: ["Fato", "Viés/Preconceito", "Evidência", "Conclusão"], answer: 1 },
        { type: "tf", q: "'While that may be true' is used to introduce a counter-argument politely.", answer: true },
        { q: "Choose the correct sentence.", options: ["I would argue this is necessary that.", "I would argue that this is necessary.", "I argue would that this is necessary.", "That I would argue is necessary."], answer: 1 },
        { q: "'Rebuttal' means:", options: ["Concordância", "Réplica/Refutação", "Pergunta", "Resumo"], answer: 1 },
        { type: "short", q: "Complete: 'I ___ that you have a valid point.' (concedo)", answer: ["concede"] },
        { q: "Choose the correct sentence.", options: ["I see you point but disagree.", "I see your point, but I disagree.", "I see your point but I am disagree.", "I see your point, but disagreeing."], answer: 1 },
        { type: "tf", q: "Good arguments should be supported by evidence and examples, not just opinion.", answer: true }
      ]
    }
  ],
  finalTest: {
    description: "Prova final do nível C1 — 20 questões cobrindo nuances gramaticais, idioms, redação formal, compreensão de fala nativa e debate.",
    questions: [
      { q: "Choose the correct sentence for a past habit (state verb).", options: ["I would know him well.", "I used to know him well.", "I use to know him well.", "I would known him well."], answer: 1 },
      { q: "Choose the correct inversion.", options: ["Never I have seen that.", "Never have I seen that.", "I never have seen that.", "Have never I seen that."], answer: 1 },
      { type: "tf", q: "'Must have' expresses near certainty about a past event.", answer: true },
      { q: "'Piece of cake' means:", options: ["Muito difícil", "Muito fácil", "Muito caro", "Muito raro"], answer: 1 },
      { q: "'Under the weather' means:", options: ["Muito feliz", "Um pouco doente", "Com muito frio", "Com muita pressa"], answer: 1 },
      { type: "short", q: "Complete: 'That car cost an arm and a ___.'", answer: ["leg"] },
      { q: "Choose the correct formal connector for addition.", options: ["However", "Furthermore", "Whereas", "Despite"], answer: 1 },
      { q: "Choose the correct formal connector for contrast.", options: ["Moreover", "In addition", "However", "Consequently"], answer: 2 },
      { type: "tf", q: "Formal academic writing typically uses contractions like 'can't' and 'don't'.", answer: false },
      { q: "What does 'gonna' come from?", options: ["Got to", "Going to", "Want to", "Give to"], answer: 1 },
      { q: "What does 'gotta' mean?", options: ["Got a", "Have to/Got to", "Going away", "Get out"], answer: 1 },
      { type: "tf", q: "Understanding every single word is necessary to understand native speech.", answer: false },
      { q: "Choose a sophisticated way to introduce an opinion.", options: ["I think that...", "I would argue that...", "I guess that...", "Maybe that..."], answer: 1 },
      { q: "'Persuade' means:", options: ["Convencer", "Discordar", "Ignorar", "Confundir"], answer: 0 },
      { type: "short", q: "Complete: 'We need to find a ___.' (meio-termo)", answer: ["compromise"] },
      { type: "tf", q: "'While that may be true' is used to introduce a counter-argument politely.", answer: true },
      { q: "'Assumption' means:", options: ["Fato confirmado", "Suposição", "Prova", "Regra"], answer: 1 },
      { q: "Choose the correct idiom for 'deixar escapar um segredo'.", options: ["Let the cat out of the bag", "Break the ice", "Cost an arm and a leg", "Piece of cake"], answer: 0 },
      { q: "'Evidence' means:", options: ["Opinião", "Evidência", "Dúvida", "Erro"], answer: 1 },
      { type: "tf", q: "Good arguments should be supported by evidence and examples, not just opinion.", answer: true }
    ]
  }
};

window.APP_DATA = APP_DATA;
