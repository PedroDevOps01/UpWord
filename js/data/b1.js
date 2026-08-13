var APP_DATA = window.APP_DATA || {};

APP_DATA.b1 = {
  modules: [
    {
      id: "b1-m1",
      title: "Planos e Previsões",
      subtitle: "Will vs. Going to para o futuro",
      objective: "Ao final, o aluno consegue falar sobre planos futuros e fazer previsões usando corretamente 'will' e 'going to' conforme o contexto (decisão espontânea vs. plano já decidido).",
      prerequisites: ["a2-m6"],
      masteryEvidence: "O aluno atingiu pelo menos 60% de acerto no quiz do módulo, completou o exercício de writing com revisão e praticou ao menos uma frase na seção de speaking.",
      levelCefrNote: "Compatível com as expectativas de compreensão e produção do nível B1 do CEFR (Common European Framework of Reference) — não é uma certificação oficial.",
      lesson: {
        intro: "Neste módulo você vai aprender as duas formas mais comuns de falar sobre o futuro em inglês: 'will' e 'going to', e quando usar cada uma.",
        sections: [
          {
            heading: "Will para Decisões Espontâneas e Previsões",
            text: "Usamos 'will' para decisões tomadas na hora, promessas, ofertas e previsões sem evidência concreta.",
            examples: [
              { en: "I think it will rain tomorrow.", pt: "Eu acho que vai chover amanhã." },
              { en: "I'll help you with that.", pt: "Eu vou te ajudar com isso. (decisão espontânea)" }
            ]
          },
          {
            heading: "Going to para Planos e Evidências",
            text: "Usamos 'going to' para planos já decididos e previsões baseadas em evidências presentes.",
            examples: [
              { en: "She is going to have a baby.", pt: "Ela vai ter um bebê. (evidência: já grávida)" },
              { en: "Look at those clouds! It's going to rain.", pt: "Olhe aquelas nuvens! Vai chover. (evidência visível)" }
            ]
          },
          {
            heading: "Will vs. Going to: Comparando",
            text: "A diferença principal: 'going to' = plano/evidência; 'will' = decisão espontânea/opinião sobre o futuro.",
            examples: [
              { en: "I will call you later.", pt: "Eu vou te ligar mais tarde. (decisão agora)" },
              { en: "I'm going to call my mom tonight.", pt: "Eu vou ligar para minha mãe hoje à noite. (já planejado)" }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "b1-m1-prediction", word: "Prediction", phonetic: "/prɪˈdɪkʃən/", translation: "Previsão", example: "My prediction is that we will win.", exampleTranslation: "Minha previsão é que vamos ganhar." },
        { id: "b1-m1-decision", word: "Decision", phonetic: "/dɪˈsɪʒən/", translation: "Decisão", example: "I made a quick decision.", exampleTranslation: "Eu tomei uma decisão rápida." },
        { id: "b1-m1-promise", word: "Promise", phonetic: "/ˈprɒmɪs/", translation: "Promessa", example: "I promise I will call you.", exampleTranslation: "Eu prometo que vou te ligar." },
        { id: "b1-m1-forecast", word: "Forecast", phonetic: "/ˈfɔːrkæst/", translation: "Previsão (do tempo)", example: "The weather forecast says it will be sunny.", exampleTranslation: "A previsão do tempo diz que vai fazer sol." },
        { id: "b1-m1-career", word: "Career", phonetic: "/kəˈrɪr/", translation: "Carreira", example: "She is going to start a new career.", exampleTranslation: "Ela vai começar uma nova carreira." },
        { id: "b1-m1-goal", word: "Goal", phonetic: "/ɡoʊl/", translation: "Meta/Objetivo", example: "My goal is to speak fluent English.", exampleTranslation: "Minha meta é falar inglês fluente." },
        { id: "b1-m1-probably", word: "Probably", phonetic: "/ˈprɒbəbli/", translation: "Provavelmente", example: "It will probably rain later.", exampleTranslation: "Provavelmente vai chover mais tarde." },
        { id: "b1-m1-definitely", word: "Definitely", phonetic: "/ˈdɛfɪnətli/", translation: "Definitivamente", example: "I will definitely go to the party.", exampleTranslation: "Eu definitivamente vou à festa." },
        { id: "b1-m1-soon", word: "Soon", phonetic: "/suːn/", translation: "Em breve", example: "We will finish soon.", exampleTranslation: "Nós vamos terminar em breve." },
        { id: "b1-m1-eventually", word: "Eventually", phonetic: "/ɪˈvɛntʃuəli/", translation: "Eventualmente/Por fim", example: "She will eventually understand.", exampleTranslation: "Ela vai eventualmente entender." }
      ],
      grammar: {
        title: "Will vs. Going to",
        explanation: "Use 'will' para decisões espontâneas, promessas e previsões sem evidência clara. Use 'going to' para planos já decididos e previsões com evidência presente.",
        table: {
          headers: ["Situação", "Forma correta", "Exemplo"],
          rows: [
            ["Decisão espontânea", "will", "'The phone is ringing.' 'I'll get it!'"],
            ["Plano decidido", "going to", "'I'm going to visit Paris next year.'"],
            ["Previsão com evidência", "going to", "'Look at the sky, it's going to rain.'"],
            ["Previsão sem evidência", "will", "'I think she will like the gift.'"]
          ]
        },
        correct: ["I will help you carry that.", "We are going to move to a new house next month.", "I think it will be a great trip."],
        incorrect: ["I going help you carry that.", "We will to move to a new house next month.", "I think it going be a great trip."]
      },
      listening: [
        {
          title: "Future Plans",
          accent: "american",
          audioSrc: "assets/audio/b1-m1-listen-0.mp3",
          audioSource: "tts-pregenerated",
          speedLevels: [0.75, 1, 1.25],
          transcript: "Sarah: What are your plans for the weekend? Tom: I'm going to visit my parents on Saturday. What about you? Sarah: I don't know yet, but I think I will stay home and relax. Tom: That sounds nice too!",
          questions: [
            { q: "What is Tom going to do?", options: ["Stay home", "Visit his parents", "Travel abroad", "Work"], answer: 1 },
            { q: "Is Sarah's plan already decided?", options: ["Yes, completely", "No, she isn't sure yet", "She is traveling", "She is working"], answer: 1 },
            { q: "What does Sarah think she will do?", options: ["Visit friends", "Stay home and relax", "Go shopping", "Study"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "My Goals for Next Year",
          text: "Next year, I am going to make some big changes in my life. I already enrolled in an English course, and I am going to study every day. I think I will also travel more — maybe to Europe! I'm not sure exactly where yet, but I will definitely save money for it. I believe these changes will make me happier.",
          questions: [
            { q: "What has the writer already done?", options: ["Traveled to Europe", "Enrolled in an English course", "Bought plane tickets", "Nothing yet"], answer: 1 },
            { q: "Is the writer sure about where to travel?", options: ["Yes, to Europe exactly", "No, not exactly", "Yes, to Asia", "They aren't traveling"], answer: 1 },
            { q: "What does the writer believe?", options: ["Nothing will change", "The changes will make them happier", "They will fail", "Money isn't important"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 3 planos decididos para o próximo ano usando 'going to'.", minWords: 20, modelAnswer: "Next year, I am going to travel to Portugal. I am going to study English every day. I am going to save more money." },
        { prompt: "Escreva 3 previsões ou promessas espontâneas usando 'will'.", minWords: 15, modelAnswer: "I think it will rain tomorrow. I promise I will help you. I believe things will get better." }
      ],
      speaking: [
        { phrase: "I think it will rain tomorrow.", tip: "'Will' é frequentemente contraído para 'll na fala: 'It'll rain.'" },
        { phrase: "I'm going to visit my parents.", tip: "'Going to' soa como 'gonna' na fala rápida e informal." },
        { phrase: "I promise I will call you.", tip: "'Promise' tem acento na primeira sílaba: PROM-ise." },
        { phrase: "She is going to start a new career.", tip: "'Career' tem acento na segunda sílaba: ca-REER." },
        { phrase: "We will probably arrive late.", tip: "'Probably' geralmente perde uma sílaba na fala rápida: 'prob'ly'." }
      ],
      exercises: {
        fillBlanks: [
          { text: "I think it ___ (will/rain) tomorrow.", answer: "will rain" },
          { text: "Look at those clouds! It ___ (going to/rain).", answer: "is going to rain" },
          { text: "I ___ (will/help) you with that.", answer: "will help" },
          { text: "She ___ (going to/have) a baby.", answer: "is going to have" },
          { text: "We ___ (will/probably/arrive) late.", answer: "will probably arrive" }
        ],
        matching: [
          { left: "Prediction", right: "Previsão" },
          { left: "Decision", right: "Decisão" },
          { left: "Promise", right: "Promessa" },
          { left: "Goal", right: "Meta" },
          { left: "Soon", right: "Em breve" },
          { left: "Eventually", right: "Eventualmente" }
        ],
        ordering: [
          { words: ["rain", "will", "It", "tomorrow"], answer: "It will rain tomorrow" },
          { words: ["visit", "going", "I'm", "to", "Paris"], answer: "I'm going to visit Paris" },
          { words: ["help", "will", "you", "I"], answer: "I will help you" },
          { words: ["have", "going", "She", "to", "is", "a", "baby"], answer: "She is going to have a baby" },
          { words: ["arrive", "will", "We", "late", "probably"], answer: "We will probably arrive late" }
        ],
        translation: [
          { direction: "pt-en", text: "Eu acho que vai chover amanhã.", answer: "I think it will rain tomorrow." },
          { direction: "pt-en", text: "Eu vou visitar meus pais.", answer: "I am going to visit my parents." },
          { direction: "pt-en", text: "Eu prometo que vou te ajudar.", answer: "I promise I will help you." },
          { direction: "en-pt", text: "She is going to start a new career.", answer: "Ela vai começar uma nova carreira." },
          { direction: "en-pt", text: "We will probably arrive late.", answer: "Nós provavelmente vamos chegar tarde." },
          { direction: "en-pt", text: "I will definitely go to the party.", answer: "Eu definitivamente vou à festa." }
        ],
        dictation: [
          { audioText: "I think it will rain tomorrow.", answer: "I think it will rain tomorrow." },
          { audioText: "I am going to visit my parents.", answer: "I am going to visit my parents." },
          { audioText: "I promise I will help you.", answer: "I promise I will help you." }
        ],
        dialogue: [
          {
            title: "Weekend Plans",
            lines: [
              { speaker: "Rita", text: "What are your plans for the weekend?" },
              { speaker: "user", prompt: "Diga que você vai visitar seus pais (plano já decidido):", options: ["I am going to visit my parents.", "I will visit my parents maybe.", "I visited my parents."], answer: 0 },
              { speaker: "Rita", text: "Nice! And what about Sunday?" },
              { speaker: "user", prompt: "Diga que provavelmente vai descansar (previsão, sem certeza):", options: ["I will probably rest.", "I am rest.", "I rested."], answer: 0 },
              { speaker: "Rita", text: "Sounds like a good weekend!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct sentence for a spontaneous decision.", options: ["I'm going to answer the phone.", "I will answer the phone!", "I answer the phone.", "I answered the phone."], answer: 1, explanation: "Decisões tomadas no momento da fala usam 'will', não 'going to' (que indica um plano já decidido antes)." },
        { q: "Choose the correct sentence for a decided plan.", options: ["I will travel next year, I already bought the ticket.", "I am going to travel next year, I already bought the ticket.", "I travel next year.", "I travelled next year."], answer: 1, explanation: "Um plano já decidido, evidenciado pela compra da passagem, usa 'going to', não 'will'." },
        { type: "tf", q: "'Going to' is used for plans already decided.", answer: true, explanation: "Correto: 'going to' expressa planos que já foram decididos antes do momento da fala." },
        { q: "Complete: 'Look at the sky! It ___ rain.'", options: ["will", "is going to", "was going to", "would"], answer: 1, explanation: "Há evidência visível (o céu escuro) de que vai chover, então usamos 'going to', não 'will'." },
        { type: "short", q: "Complete: 'I ___ help you.' (promessa espontânea)", answer: ["will"], explanation: "Promessas feitas espontaneamente no momento da fala usam 'will'." },
        { q: "'Prediction' means:", options: ["Decisão", "Previsão", "Promessa", "Meta"], answer: 1, explanation: "'Prediction' significa 'previsão', uma afirmação sobre o que pode acontecer no futuro." },
        { type: "tf", q: "'Probably' means 'com certeza'.", answer: false, explanation: "'Probably' significa 'provavelmente'; 'com certeza' é 'definitely' ou 'certainly'." },
        { q: "Choose the correct question.", options: ["Will you help me?", "Will you to help me?", "Do you will help me?", "Are you will help me?"], answer: 0, explanation: "Perguntas com 'will' seguem a ordem 'Will + sujeito + verbo base', sem 'to' e sem auxiliar extra." },
        { q: "'Goal' means:", options: ["Meta", "Previsão", "Decisão", "Promessa"], answer: 0, explanation: "'Goal' significa 'meta' ou 'objetivo' que se deseja alcançar." },
        { type: "short", q: "Complete: 'She is ___ to have a baby.' (evidência presente)", answer: ["going"], explanation: "Com evidência presente (ela já está grávida), usamos 'going to', formando 'is going to'." },
        { q: "Choose the correct sentence.", options: ["I will to call you.", "I will call you.", "I going call you.", "I call will you."], answer: 1, explanation: "Depois de 'will' usamos o verbo base sem 'to': 'I will call you.'" },
        { type: "tf", q: "We use 'will' for evidence-based predictions, like looking at dark clouds.", answer: false, explanation: "Para previsões com evidência visível usamos 'going to'; 'will' é mais opinativo, sem evidência concreta." }
      ]
    },
    {
      id: "b1-m2",
      title: "Experiências de Vida",
      subtitle: "Present Perfect: ever, never, already, yet",
      objective: "Ao final, o aluno consegue falar sobre experiências de vida usando o present perfect com 'ever', 'never', 'already' e 'yet', sem precisar especificar quando exatamente ocorreram.",
      prerequisites: ["b1-m1"],
      masteryEvidence: "O aluno atingiu pelo menos 60% de acerto no quiz do módulo, completou o exercício de writing com revisão e praticou ao menos uma frase na seção de speaking.",
      lesson: {
        intro: "O Present Perfect conecta o passado com o presente — perfeito para falar sobre experiências de vida, sem dizer exatamente quando aconteceram.",
        sections: [
          {
            heading: "Formação do Present Perfect",
            text: "Formamos o present perfect com have/has + particípio passado (verbo na 3ª forma).",
            examples: [
              { en: "I have traveled to five countries.", pt: "Eu já viajei para cinco países." },
              { en: "She has visited Japan twice.", pt: "Ela já visitou o Japão duas vezes." }
            ]
          },
          {
            heading: "Ever e Never",
            text: "'Ever' é usado em perguntas ('alguma vez') e 'never' em afirmações negativas ('nunca').",
            examples: [
              { en: "Have you ever eaten sushi?", pt: "Você já comeu sushi alguma vez?" },
              { en: "I have never been to Africa.", pt: "Eu nunca fui à África." }
            ]
          },
          {
            heading: "Already e Yet",
            text: "'Already' (já) é usado em afirmações; 'yet' (ainda/já) é usado em negativas e perguntas, geralmente no final da frase.",
            examples: [
              { en: "I have already finished my homework.", pt: "Eu já terminei minha lição de casa." },
              { en: "I haven't finished it yet.", pt: "Eu ainda não terminei." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "b1-m2-experience", word: "Experience", phonetic: "/ɪkˈspɪriəns/", translation: "Experiência", example: "That was an amazing experience.", exampleTranslation: "Aquela foi uma experiência incrível." },
        { id: "b1-m2-already", word: "Already", phonetic: "/ɔːlˈrɛdi/", translation: "Já", example: "I have already seen that movie.", exampleTranslation: "Eu já vi aquele filme." },
        { id: "b1-m2-yet", word: "Yet", phonetic: "/jɛt/", translation: "Ainda (negativa/pergunta)", example: "Have you finished yet?", exampleTranslation: "Você já terminou?" },
        { id: "b1-m2-ever", word: "Ever", phonetic: "/ˈɛvər/", translation: "Alguma vez", example: "Have you ever traveled alone?", exampleTranslation: "Você já viajou sozinho alguma vez?" },
        { id: "b1-m2-never", word: "Never", phonetic: "/ˈnɛvər/", translation: "Nunca", example: "I have never tried sushi.", exampleTranslation: "Eu nunca experimentei sushi." },
        { id: "b1-m2-abroad", word: "Abroad", phonetic: "/əˈbrɔːd/", translation: "No exterior", example: "Have you ever lived abroad?", exampleTranslation: "Você já morou no exterior alguma vez?" },
        { id: "b1-m2-achievement", word: "Achievement", phonetic: "/əˈtʃiːvmənt/", translation: "Conquista", example: "Graduating was a big achievement.", exampleTranslation: "Se formar foi uma grande conquista." },
        { id: "b1-m2-so-far", word: "So far", phonetic: "/soʊ fɑːr/", translation: "Até agora", example: "So far, I have visited ten countries.", exampleTranslation: "Até agora, eu visitei dez países." },
        { id: "b1-m2-recently", word: "Recently", phonetic: "/ˈriːsəntli/", translation: "Recentemente", example: "I have recently started a new job.", exampleTranslation: "Eu comecei um novo emprego recentemente." },
        { id: "b1-m2-twice", word: "Twice", phonetic: "/twaɪs/", translation: "Duas vezes", example: "I have been to London twice.", exampleTranslation: "Eu já fui a Londres duas vezes." }
      ],
      grammar: {
        title: "Present Perfect (have/has + particípio)",
        explanation: "Usamos o present perfect para experiências de vida sem tempo específico. Para dizer quando exatamente, usamos o passado simples.",
        table: {
          headers: ["Pronome", "Afirmativa", "Negativa", "Pergunta"],
          rows: [
            ["I/You/We/They", "I have visited Paris.", "I haven't visited Paris.", "Have you visited Paris?"],
            ["He/She/It", "She has visited Paris.", "She hasn't visited Paris.", "Has she visited Paris?"]
          ]
        },
        correct: ["I have never eaten sushi.", "Has she ever been to Brazil?", "We have already finished."],
        incorrect: ["I have never ate sushi.", "Has she ever went to Brazil?", "We have already finish."]
      },
      listening: [
        {
          title: "Life Experiences",
          accent: "british",
          transcript: "Interviewer: Have you ever traveled alone? Guest: Yes, I have. I traveled alone to Thailand last year. It was an amazing experience. Interviewer: Have you ever tried any extreme sports? Guest: No, I haven't. I have never been brave enough for that!",
          questions: [
            { q: "Has the guest traveled alone?", options: ["No, never", "Yes, to Thailand", "Yes, to Brazil", "Unknown"], answer: 1 },
            { q: "How does the guest describe the trip?", options: ["Boring", "Terrible", "An amazing experience", "Too expensive"], answer: 2 },
            { q: "Has the guest tried extreme sports?", options: ["Yes, many times", "No, never", "Once", "They didn't say"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "An Interesting Life",
          text: "My grandmother has had an incredibly interesting life. She has traveled to over twenty countries. She has already written two books, and she has recently started painting. She has never been afraid of trying new things. I think she is the most adventurous person I have ever met.",
          questions: [
            { q: "How many countries has the grandmother traveled to?", options: ["Ten", "Fifteen", "Over twenty", "Five"], answer: 2 },
            { q: "What has she recently started?", options: ["Writing", "Painting", "Traveling", "Cooking"], answer: 1 },
            { q: "How does the writer describe the grandmother?", options: ["Boring", "The most adventurous person they have ever met", "Afraid of everything", "Very quiet"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 4 experiências de vida usando present perfect (já fez / nunca fez).", minWords: 20, modelAnswer: "I have traveled to three countries. I have never tried skydiving. I have already read that book. I have recently learned to cook." },
        { prompt: "Escreva sobre algo que você ainda não fez, mas gostaria de fazer (usando 'yet' ou 'never').", minWords: 15, modelAnswer: "I haven't visited Europe yet, but I would love to go someday. I have never seen snow." }
      ],
      speaking: [
        { phrase: "Have you ever traveled alone?", tip: "Em perguntas com present perfect, 'have' vem antes do sujeito." },
        { phrase: "I have never tried sushi.", tip: "'Never' vem entre 'have' e o particípio." },
        { phrase: "I have already finished.", tip: "'Already' geralmente fica entre 'have' e o verbo principal." },
        { phrase: "Have you finished yet?", tip: "'Yet' fica no final da frase em perguntas e negativas." },
        { phrase: "She has visited Japan twice.", tip: "'Twice' (duas vezes) geralmente vai no final da frase." }
      ],
      exercises: {
        fillBlanks: [
          { text: "I ___ (never/try) sushi.", answer: "have never tried" },
          { text: "___ you ever been to Brazil?", answer: "Have" },
          { text: "She ___ (already/finish) her homework.", answer: "has already finished" },
          { text: "We ___ (not/finish) yet.", answer: "haven't finished" },
          { text: "He ___ (visit) London twice.", answer: "has visited" }
        ],
        matching: [
          { left: "Already", right: "Já" },
          { left: "Yet", right: "Ainda" },
          { left: "Ever", right: "Alguma vez" },
          { left: "Never", right: "Nunca" },
          { left: "Recently", right: "Recentemente" },
          { left: "Twice", right: "Duas vezes" }
        ],
        ordering: [
          { words: ["ever", "Have", "traveled", "you", "alone?"], answer: "Have you ever traveled alone?" },
          { words: ["never", "have", "sushi", "I", "tried"], answer: "I have never tried sushi" },
          { words: ["already", "has", "She", "finished"], answer: "She has already finished" },
          { words: ["yet", "finished", "haven't", "We"], answer: "We haven't finished yet" },
          { words: ["twice", "visited", "has", "He", "London"], answer: "He has visited London twice" }
        ],
        translation: [
          { direction: "pt-en", text: "Você já viajou sozinho?", answer: "Have you ever traveled alone?" },
          { direction: "pt-en", text: "Eu nunca experimentei sushi.", answer: "I have never tried sushi." },
          { direction: "pt-en", text: "Ela já terminou o dever de casa.", answer: "She has already finished her homework." },
          { direction: "en-pt", text: "We haven't finished yet.", answer: "Nós ainda não terminamos." },
          { direction: "en-pt", text: "He has visited London twice.", answer: "Ele já visitou Londres duas vezes." },
          { direction: "en-pt", text: "I have recently started a new job.", answer: "Eu comecei um novo emprego recentemente." }
        ],
        dictation: [
          { audioText: "Have you ever traveled alone?", answer: "Have you ever traveled alone?" },
          { audioText: "I have never tried sushi.", answer: "I have never tried sushi." },
          { audioText: "She has already finished.", answer: "She has already finished." }
        ],
        dialogue: [
          {
            title: "Talking About Experiences",
            lines: [
              { speaker: "Diego", text: "Have you ever been to another country?" },
              { speaker: "user", prompt: "Diga que sim, você já esteve no Chile:", options: ["Yes, I have been to Chile.", "No, I never travel.", "Yes, I am in Chile."], answer: 0 },
              { speaker: "Diego", text: "Cool! Have you ever tried skydiving?" },
              { speaker: "user", prompt: "Diga que nunca tentou:", options: ["I have never tried it.", "I have already tried it.", "I am trying it now."], answer: 0 },
              { speaker: "Diego", text: "Maybe one day!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct present perfect form.", options: ["I have visit Paris.", "I have visited Paris.", "I has visited Paris.", "I having visited Paris."], answer: 1, explanation: "O present perfect é formado com 'have/has' + particípio passado; com 'I' usamos 'have visited'." },
        { q: "Choose the correct question.", options: ["Have you ever eaten sushi?", "Do you ever eaten sushi?", "Have you ever eat sushi?", "Did you ever eaten sushi?"], answer: 0, explanation: "Perguntas no present perfect seguem 'Have/Has + sujeito + particípio passado': 'Have you ever eaten...?'" },
        { type: "tf", q: "'Yet' is usually used in negative sentences and questions.", answer: true, explanation: "Correto: 'yet' aparece tipicamente em frases negativas e perguntas, geralmente no final." },
        { q: "Complete: 'She ___ already finished.'", options: ["have", "has", "is", "was"], answer: 1, explanation: "Com a 3ª pessoa do singular (she) usamos 'has' no present perfect." },
        { type: "short", q: "Complete: 'I have ___ tried sushi.' (nunca)", answer: ["never"], explanation: "'Never' (nunca) é o advérbio de frequência negativo usado com o present perfect." },
        { q: "'Achievement' means:", options: ["Experiência", "Conquista", "Viagem", "Trabalho"], answer: 1, explanation: "'Achievement' significa 'conquista', algo alcançado com esforço." },
        { type: "tf", q: "'Already' is usually used in negative sentences.", answer: false, explanation: "'Already' é mais comum em frases afirmativas; 'yet' é usado em negativas e perguntas." },
        { q: "Choose the correct sentence.", options: ["We haven't finished yet.", "We haven't finished already.", "We have finished yet.", "We haven't yet finish."], answer: 0, explanation: "'Yet' é usado em frases negativas, geralmente no final: 'We haven't finished yet.'" },
        { q: "'So far' means:", options: ["No futuro", "Até agora", "Ontem", "Nunca"], answer: 1, explanation: "'So far' significa 'até agora', indicando o período até o momento presente." },
        { type: "short", q: "Complete: 'Has she ___ been to Brazil?' (alguma vez)", answer: ["ever"], explanation: "'Ever' (alguma vez) é usado em perguntas no present perfect." },
        { q: "Choose the correct sentence.", options: ["He has visit London twice.", "He has visited London twice.", "He have visited London twice.", "He visited has London twice."], answer: 1, explanation: "Com 'he' usamos 'has' + particípio passado: 'has visited'." },
        { type: "tf", q: "Present perfect is used to say exactly when something happened, like 'yesterday'.", answer: false, explanation: "Para dizer exatamente quando, usamos o passado simples; o present perfect não especifica o momento exato." }
      ]
    },
    {
      id: "b1-m3",
      title: "Se Isso Acontecer...",
      subtitle: "Primeiro Condicional (real e possível no futuro)",
      objective: "Ao final, o aluno consegue formar e usar frases no primeiro condicional (if + presente simples, will + verbo base) para expressar situações reais e possíveis no futuro.",
      prerequisites: ["b1-m2", "b1-m1"],
      masteryEvidence: "O aluno atingiu pelo menos 60% de acerto no quiz do módulo, completou o exercício de writing com revisão e praticou ao menos uma frase na seção de speaking.",
      lesson: {
        intro: "O primeiro condicional é usado para falar sobre situações reais e possíveis no futuro — 'se isso acontecer, aquilo vai acontecer'.",
        sections: [
          {
            heading: "Estrutura do Primeiro Condicional",
            text: "Formamos o primeiro condicional com 'If + presente simples, will + verbo base'.",
            examples: [
              { en: "If it rains, I will stay home.", pt: "Se chover, eu vou ficar em casa." },
              { en: "If you study hard, you will pass the exam.", pt: "Se você estudar bastante, você vai passar na prova." }
            ]
          },
          {
            heading: "Quando Usar",
            text: "Usamos o primeiro condicional para condições reais e possíveis, não hipotéticas ou imaginárias.",
            examples: [
              { en: "If I have time, I will call you.", pt: "Se eu tiver tempo, eu vou te ligar." },
              { en: "If she finishes early, she will go home.", pt: "Se ela terminar cedo, ela vai para casa." }
            ]
          },
          {
            heading: "Ordem das Orações",
            text: "A oração com 'if' pode vir antes ou depois da oração principal. Quando vem antes, usamos vírgula.",
            examples: [
              { en: "If you don't hurry, you will miss the bus.", pt: "Se você não se apressar, vai perder o ônibus." },
              { en: "You will miss the bus if you don't hurry.", pt: "Você vai perder o ônibus se não se apressar." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "b1-m3-condition", word: "Condition", phonetic: "/kənˈdɪʃən/", translation: "Condição", example: "There is one condition.", exampleTranslation: "Há uma condição." },
        { id: "b1-m3-possible", word: "Possible", phonetic: "/ˈpɒsəbəl/", translation: "Possível", example: "It's possible that it will rain.", exampleTranslation: "É possível que chova." },
        { id: "b1-m3-hurry", word: "Hurry", phonetic: "/ˈhɜːri/", translation: "Apressar-se", example: "If you don't hurry, you'll be late.", exampleTranslation: "Se você não se apressar, vai se atrasar." },
        { id: "b1-m3-miss", word: "Miss", phonetic: "/mɪs/", translation: "Perder (ônibus, oportunidade)", example: "You will miss the bus.", exampleTranslation: "Você vai perder o ônibus." },
        { id: "b1-m3-pass", word: "Pass", phonetic: "/pæs/", translation: "Passar (numa prova)", example: "If you study, you will pass.", exampleTranslation: "Se você estudar, você vai passar." },
        { id: "b1-m3-depend-on", word: "Depend on", phonetic: "/dɪˈpɛnd ɒn/", translation: "Depender de", example: "It depends on the weather.", exampleTranslation: "Depende do tempo." },
        { id: "b1-m3-unless", word: "Unless", phonetic: "/ənˈlɛs/", translation: "A menos que", example: "I won't go unless you come too.", exampleTranslation: "Eu não vou a menos que você venha também." },
        { id: "b1-m3-arrive", word: "Arrive", phonetic: "/əˈraɪv/", translation: "Chegar", example: "If we leave now, we will arrive on time.", exampleTranslation: "Se sairmos agora, vamos chegar na hora." },
        { id: "b1-m3-succeed", word: "Succeed", phonetic: "/səkˈsiːd/", translation: "Ter sucesso/Conseguir", example: "If you try hard, you will succeed.", exampleTranslation: "Se você se esforçar, você vai conseguir." },
        { id: "b1-m3-result", word: "Result", phonetic: "/rɪˈzʌlt/", translation: "Resultado", example: "The result will be different.", exampleTranslation: "O resultado vai ser diferente." }
      ],
      grammar: {
        title: "Primeiro Condicional (If + Presente, Will + Base)",
        explanation: "A oração com 'if' usa o presente simples, mesmo falando do futuro; a oração principal usa 'will'.",
        table: {
          headers: ["Oração com If", "Oração Principal"],
          rows: [
            ["If it rains,", "I will stay home."],
            ["If you study,", "you will pass."],
            ["If she calls,", "I will answer."]
          ]
        },
        correct: ["If it rains, I will stay home.", "If you study hard, you will pass.", "She will help you if you ask."],
        incorrect: ["If it will rain, I will stay home.", "If you will study hard, you will pass.", "She will help you if you will ask."]
      },
      listening: [
        {
          title: "If It Rains...",
          accent: "american",
          transcript: "Anna: What are we going to do this weekend? Ben: If it's sunny, we will go to the beach. Anna: And if it rains? Ben: If it rains, we will watch movies at home instead. Anna: Sounds like a good plan either way!",
          questions: [
            { q: "What will they do if it's sunny?", options: ["Watch movies", "Go to the beach", "Stay home", "Go shopping"], answer: 1 },
            { q: "What will they do if it rains?", options: ["Go to the beach", "Go shopping", "Watch movies at home", "Cancel everything"], answer: 2 },
            { q: "How does Anna feel about the plan?", options: ["She hates it", "She thinks it's a good plan", "She is confused", "She doesn't care"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "Study Tips",
          text: "If you want to learn English faster, there are some things you can do. If you practice every day, you will improve quickly. If you watch movies in English, you will get used to the sounds of the language. And if you don't understand something, don't worry — if you keep trying, you will eventually succeed.",
          questions: [
            { q: "What will happen if you practice every day?", options: ["You will forget everything", "You will improve quickly", "Nothing will change", "You will get bored"], answer: 1 },
            { q: "What helps you get used to the sounds of English?", options: ["Reading books", "Watching movies in English", "Sleeping", "Cooking"], answer: 1 },
            { q: "What does the text say about not understanding something?", options: ["Give up", "Don't worry, keep trying", "Ask for a refund", "Stop studying"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 3 frases no primeiro condicional sobre seus planos para o fim de semana.", minWords: 20, modelAnswer: "If it's sunny, I will go to the park. If it rains, I will stay home. If I have time, I will study English." },
        { prompt: "Escreva sobre o que vai acontecer se você estudar inglês todos os dias.", minWords: 15, modelAnswer: "If I study English every day, I will improve quickly. If I practice speaking, I will become more confident." }
      ],
      speaking: [
        { phrase: "If it rains, I will stay home.", tip: "A oração com 'if' tem uma pequena pausa de entoação antes da vírgula." },
        { phrase: "If you study hard, you will pass.", tip: "'Hard' aqui significa 'muito/duro', não 'difícil'." },
        { phrase: "Unless you hurry, you will be late.", tip: "'Unless' já tem sentido negativo — cuidado ao traduzir." },
        { phrase: "I will help you if you ask.", tip: "Quando 'if' vem depois, não precisa de vírgula." },
        { phrase: "If we leave now, we will arrive on time.", tip: "'Arrive' tem acento na segunda sílaba: ar-RIVE." }
      ],
      exercises: {
        fillBlanks: [
          { text: "If it ___ (rain), I will stay home.", answer: "rains" },
          { text: "If you study hard, you ___ (will/pass).", answer: "will pass" },
          { text: "If we leave now, we ___ (will/arrive) on time.", answer: "will arrive" },
          { text: "I ___ (will/help) you if you ask.", answer: "will help" },
          { text: "If she ___ (call), I will answer.", answer: "calls" }
        ],
        matching: [
          { left: "Condition", right: "Condição" },
          { left: "Possible", right: "Possível" },
          { left: "Hurry", right: "Apressar-se" },
          { left: "Succeed", right: "Ter sucesso" },
          { left: "Unless", right: "A menos que" },
          { left: "Result", right: "Resultado" }
        ],
        ordering: [
          { words: ["rains", "it", "If", "stay", "I", "home", "will"], answer: "If it rains I will stay home" },
          { words: ["study", "If", "you", "pass", "hard", "will", "you"], answer: "If you study hard you will pass" },
          { words: ["help", "will", "I", "you", "ask", "if", "you"], answer: "I will help you if you ask" },
          { words: ["now", "we", "leave", "If", "arrive", "will", "we"], answer: "If we leave now we will arrive" },
          { words: ["calls", "she", "If", "answer", "I", "will"], answer: "If she calls I will answer" }
        ],
        translation: [
          { direction: "pt-en", text: "Se chover, eu vou ficar em casa.", answer: "If it rains, I will stay home." },
          { direction: "pt-en", text: "Se você estudar bastante, vai passar.", answer: "If you study hard, you will pass." },
          { direction: "pt-en", text: "Se sairmos agora, vamos chegar na hora.", answer: "If we leave now, we will arrive on time." },
          { direction: "en-pt", text: "I will help you if you ask.", answer: "Eu vou te ajudar se você pedir." },
          { direction: "en-pt", text: "Unless you hurry, you will be late.", answer: "A menos que você se apresse, você vai se atrasar." },
          { direction: "en-pt", text: "If she calls, I will answer.", answer: "Se ela ligar, eu vou atender." }
        ],
        dictation: [
          { audioText: "If it rains, I will stay home.", answer: "If it rains, I will stay home." },
          { audioText: "If you study hard, you will pass.", answer: "If you study hard, you will pass." },
          { audioText: "I will help you if you ask.", answer: "I will help you if you ask." }
        ],
        dialogue: [
          {
            title: "Weekend Weather",
            lines: [
              { speaker: "Mia", text: "What will we do if it rains this weekend?" },
              { speaker: "user", prompt: "Diga que vocês vão assistir filmes:", options: ["We will watch movies.", "We watched movies.", "We are watching movies."], answer: 0 },
              { speaker: "Mia", text: "And if it's sunny?" },
              { speaker: "user", prompt: "Diga que vocês vão à praia:", options: ["We will go to the beach.", "We went to the beach.", "We go beach."], answer: 0 },
              { speaker: "Mia", text: "Perfect plan either way!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct first conditional sentence.", options: ["If it rains, I will stay home.", "If it will rain, I stay home.", "If it rains, I stay will home.", "If it rain, I will stay home."], answer: 0, explanation: "No primeiro condicional, a oração com 'if' usa presente simples ('rains') e a principal usa 'will': 'If it rains, I will stay home.'" },
        { q: "Complete: 'If you study hard, you ___ pass.'", options: ["will", "would", "are", "was"], answer: 0, explanation: "A oração principal do primeiro condicional usa 'will' + verbo base." },
        { type: "tf", q: "In the first conditional, the 'if' clause uses the present simple.", answer: true, explanation: "Correto: mesmo se referindo ao futuro, a oração com 'if' usa o presente simples." },
        { q: "Complete: 'If she ___ (call), I will answer.'", options: ["call", "calls", "will call", "called"], answer: 1, explanation: "Na oração com 'if', usamos o presente simples com a 3ª pessoa do singular: 'calls'." },
        { type: "short", q: "Complete: 'I ___ help you if you ask.' (will)", answer: ["will"], explanation: "A oração principal do primeiro condicional usa 'will' + verbo base." },
        { q: "'Unless' means:", options: ["Se", "A menos que", "Porque", "Embora"], answer: 1, explanation: "'Unless' significa 'a menos que', introduzindo uma condição negativa." },
        { type: "tf", q: "The first conditional describes imaginary, impossible situations.", answer: false, explanation: "O primeiro condicional descreve situações reais e possíveis no futuro; situações imaginárias usam o segundo condicional." },
        { q: "Choose the correct sentence.", options: ["If we leave now, we will arrive on time.", "If we will leave now, we arrive on time.", "If we leave now, we arrive will on time.", "If we leaving now, we will arrive on time."], answer: 0, explanation: "A oração com 'if' usa presente simples ('leave') e a oração principal usa 'will' + verbo base ('will arrive')." },
        { q: "'Succeed' means:", options: ["Falhar", "Ter sucesso", "Desistir", "Esperar"], answer: 1, explanation: "'Succeed' significa 'ter sucesso' ou 'conseguir' alcançar um objetivo." },
        { type: "short", q: "Complete: 'If you don't hurry, you will ___ the bus.' (perder)", answer: ["miss"], explanation: "'Miss' aqui significa 'perder' (o ônibus, uma oportunidade)." },
        { q: "Choose the correct sentence.", options: ["You will miss the bus if you don't hurry.", "You miss will the bus if you don't hurry.", "You will miss the bus if you won't hurry.", "You will missed the bus if you don't hurry."], answer: 0, explanation: "A oração com 'if' usa presente simples negativo ('don't hurry'), não 'won't', e a principal usa 'will miss'." },
        { type: "tf", q: "In first conditional sentences, both clauses use 'will'.", answer: false, explanation: "Apenas a oração principal usa 'will'; a oração com 'if' usa o presente simples." }
      ]
    },
    {
      id: "b1-m4",
      title: "Sonhos e Hipóteses",
      subtitle: "Segundo Condicional (situações hipotéticas e imaginárias)",
      objective: "Ao final, o aluno consegue formar e usar frases no segundo condicional (if + passado simples, would + verbo base) para falar de situações hipotéticas, imaginárias ou improváveis, incluindo o uso de 'were' com todas as pessoas.",
      prerequisites: ["b1-m3"],
      masteryEvidence: "O aluno atingiu pelo menos 60% de acerto no quiz do módulo, completou o exercício de writing com revisão e praticou ao menos uma frase na seção de speaking.",
      lesson: {
        intro: "O segundo condicional é usado para falar de situações hipotéticas, imaginárias ou pouco prováveis — perfeito para sonhar acordado em inglês!",
        sections: [
          {
            heading: "Estrutura do Segundo Condicional",
            text: "Formamos com 'If + passado simples, would + verbo base'.",
            examples: [
              { en: "If I won the lottery, I would travel the world.", pt: "Se eu ganhasse na loteria, eu viajaria pelo mundo." },
              { en: "If I had more time, I would learn to play guitar.", pt: "Se eu tivesse mais tempo, eu aprenderia a tocar violão." }
            ]
          },
          {
            heading: "O Verbo 'to be' no Segundo Condicional",
            text: "No segundo condicional, usamos 'were' para todas as pessoas com o verbo 'to be' (inclusive I/he/she/it), especialmente na expressão 'If I were you'.",
            examples: [
              { en: "If I were you, I would apologize.", pt: "Se eu fosse você, eu pediria desculpas." },
              { en: "If she were richer, she would buy a house.", pt: "Se ela fosse mais rica, ela compraria uma casa." }
            ]
          },
          {
            heading: "Real vs. Hipotético",
            text: "Compare o primeiro condicional (real/possível) com o segundo (hipotético/improvável).",
            examples: [
              { en: "If it rains, I will stay home.", pt: "Se chover, eu vou ficar em casa. (possibilidade real)" },
              { en: "If I lived on the moon, I would need a spacesuit.", pt: "Se eu morasse na lua, eu precisaria de um traje espacial. (hipotético)" }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "b1-m4-lottery", word: "Lottery", phonetic: "/ˈlɒtəri/", translation: "Loteria", example: "If I won the lottery, I would be rich.", exampleTranslation: "Se eu ganhasse na loteria, eu seria rico." },
        { id: "b1-m4-wish", word: "Wish", phonetic: "/wɪʃ/", translation: "Desejo/Desejar", example: "I wish I could travel more.", exampleTranslation: "Eu queria poder viajar mais." },
        { id: "b1-m4-imagine", word: "Imagine", phonetic: "/ɪˈmædʒɪn/", translation: "Imaginar", example: "Imagine if you could fly.", exampleTranslation: "Imagine se você pudesse voar." },
        { id: "b1-m4-would", word: "Would", phonetic: "/wʊd/", translation: "Verbo modal 'iria/faria'", example: "I would help you if I could.", exampleTranslation: "Eu te ajudaria se pudesse." },
        { id: "b1-m4-apologize", word: "Apologize", phonetic: "/əˈpɒlədʒaɪz/", translation: "Pedir desculpas", example: "If I were you, I would apologize.", exampleTranslation: "Se eu fosse você, eu pediria desculpas." },
        { id: "b1-m4-rich", word: "Rich", phonetic: "/rɪtʃ/", translation: "Rico(a)", example: "If I were rich, I would buy a big house.", exampleTranslation: "Se eu fosse rico, eu compraria uma casa grande." },
        { id: "b1-m4-spacesuit", word: "Spacesuit", phonetic: "/ˈspeɪssuːt/", translation: "Traje espacial", example: "I would need a spacesuit on the moon.", exampleTranslation: "Eu precisaria de um traje espacial na lua." },
        { id: "b1-m4-unlikely", word: "Unlikely", phonetic: "/ənˈlaɪkli/", translation: "Improvável", example: "It's unlikely, but if it happened...", exampleTranslation: "É improvável, mas se acontecesse..." },
        { id: "b1-m4-advice", word: "Advice", phonetic: "/ədˈvaɪs/", translation: "Conselho", example: "If I were you, I would take her advice.", exampleTranslation: "Se eu fosse você, eu seguiria o conselho dela." },
        { id: "b1-m4-fluent", word: "Fluent", phonetic: "/ˈfluːənt/", translation: "Fluente", example: "If I lived abroad, I would become fluent faster.", exampleTranslation: "Se eu morasse no exterior, eu ficaria fluente mais rápido." }
      ],
      grammar: {
        title: "Segundo Condicional (If + Passado, Would + Base)",
        explanation: "Usamos o segundo condicional para situações hipotéticas, imaginárias ou muito improváveis no presente/futuro.",
        table: {
          headers: ["Oração com If (passado)", "Oração Principal (would)"],
          rows: [
            ["If I had more money,", "I would travel more."],
            ["If I were you,", "I would apologize."],
            ["If she studied more,", "she would get better grades."]
          ]
        },
        correct: ["If I won the lottery, I would travel.", "If I were you, I would apologize.", "She would help if she could."],
        incorrect: ["If I will win the lottery, I would travel.", "If I were you, I will apologize.", "She would help if she cans."]
      },
      listening: [
        {
          title: "If I Won the Lottery",
          accent: "australian",
          transcript: "Interviewer: If you won the lottery, what would you do? Guest: If I won the lottery, I would travel around the world first. Then I would buy a house for my parents. Interviewer: Would you keep working? Guest: No, I wouldn't. I would retire and relax!",
          questions: [
            { q: "What would the guest do first?", options: ["Buy a house", "Travel around the world", "Keep working", "Retire immediately"], answer: 1 },
            { q: "What would the guest buy for their parents?", options: ["A car", "A house", "A trip", "Nothing"], answer: 1 },
            { q: "Would the guest keep working?", options: ["Yes, definitely", "No, they would retire", "They aren't sure", "They would work more"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "If I Could Change One Thing",
          text: "If I could change one thing about my life, I would probably choose to travel more. If I had more free time and money, I would visit every continent. I would learn new languages and try different foods. Some people say if they were rich, they would stop working completely, but I think I would still want to do something meaningful.",
          questions: [
            { q: "What would the writer change?", options: ["Their job", "Traveling more", "Their house", "Their family"], answer: 1 },
            { q: "What would the writer do with more free time and money?", options: ["Sleep more", "Visit every continent", "Buy a car", "Stop learning"], answer: 1 },
            { q: "What do some people say they would do if rich?", options: ["Travel less", "Stop working completely", "Work more", "Nothing changes"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva o que você faria se ganhasse na loteria, usando o segundo condicional.", minWords: 20, modelAnswer: "If I won the lottery, I would travel the world. I would buy a house for my family. I would also help other people." },
        { prompt: "Escreva um conselho para um amigo usando 'If I were you...'.", minWords: 15, modelAnswer: "If I were you, I would apologize to her. If I were you, I would study more before the exam." }
      ],
      speaking: [
        { phrase: "If I won the lottery, I would travel.", tip: "'Would' geralmente é contraído para 'd na fala: 'I'd travel.'" },
        { phrase: "If I were you, I would apologize.", tip: "Usamos 'were' com 'I' neste tipo de frase, não 'was'." },
        { phrase: "I wish I could travel more.", tip: "'Wish' soa parecido com 'witch', mas com 'sh' mais suave no final." },
        { phrase: "Imagine if you could fly.", tip: "'Imagine' tem acento na segunda sílaba: i-MA-gine." },
        { phrase: "She would help if she could.", tip: "'Could' aqui tem som reduzido: /kəd/." }
      ],
      exercises: {
        fillBlanks: [
          { text: "If I ___ (win) the lottery, I would travel.", answer: "won" },
          { text: "If I were you, I ___ (would/apologize).", answer: "would apologize" },
          { text: "If she ___ (have) more time, she would learn guitar.", answer: "had" },
          { text: "I ___ (would/help) you if I could.", answer: "would help" },
          { text: "If they ___ (be) richer, they would travel more.", answer: "were" }
        ],
        matching: [
          { left: "Lottery", right: "Loteria" },
          { left: "Wish", right: "Desejo" },
          { left: "Imagine", right: "Imaginar" },
          { left: "Rich", right: "Rico(a)" },
          { left: "Advice", right: "Conselho" },
          { left: "Unlikely", right: "Improvável" }
        ],
        ordering: [
          { words: ["won", "If", "lottery", "I", "the", "travel", "would", "I"], answer: "If I won the lottery I would travel" },
          { words: ["you", "If", "were", "I", "apologize", "would", "I"], answer: "If I were you I would apologize" },
          { words: ["help", "would", "I", "could", "I", "if"], answer: "I would help if I could" },
          { words: ["time", "had", "If", "more", "I"], answer: "If I had more time" },
          { words: ["richer", "were", "If", "they", "travel", "would", "they", "more"], answer: "If they were richer they would travel more" }
        ],
        translation: [
          { direction: "pt-en", text: "Se eu ganhasse na loteria, eu viajaria.", answer: "If I won the lottery, I would travel." },
          { direction: "pt-en", text: "Se eu fosse você, eu pediria desculpas.", answer: "If I were you, I would apologize." },
          { direction: "pt-en", text: "Eu queria poder viajar mais.", answer: "I wish I could travel more." },
          { direction: "en-pt", text: "She would help if she could.", answer: "Ela ajudaria se pudesse." },
          { direction: "en-pt", text: "If I had more time, I would learn guitar.", answer: "Se eu tivesse mais tempo, eu aprenderia violão." },
          { direction: "en-pt", text: "If I were rich, I would buy a house.", answer: "Se eu fosse rico, eu compraria uma casa." }
        ],
        dictation: [
          { audioText: "If I won the lottery, I would travel.", answer: "If I won the lottery, I would travel." },
          { audioText: "If I were you, I would apologize.", answer: "If I were you, I would apologize." },
          { audioText: "I wish I could travel more.", answer: "I wish I could travel more." }
        ],
        dialogue: [
          {
            title: "If You Could Change Anything",
            lines: [
              { speaker: "Sofia", text: "If you could change one thing about your life, what would it be?" },
              { speaker: "user", prompt: "Diga que você viajaria mais:", options: ["I would travel more.", "I travel more.", "I will travel more."], answer: 0 },
              { speaker: "Sofia", text: "That sounds nice! If you won the lottery, what would you do first?" },
              { speaker: "user", prompt: "Diga que compraria uma casa para a família:", options: ["I would buy a house for my family.", "I bought a house.", "I buy a house."], answer: 0 },
              { speaker: "Sofia", text: "What a lovely idea!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct second conditional sentence.", options: ["If I win the lottery, I would travel.", "If I won the lottery, I would travel.", "If I would win the lottery, I travel.", "If I won the lottery, I will travel."], answer: 1, explanation: "No segundo condicional, a oração com 'if' usa passado simples ('won') e a principal usa 'would' + verbo base." },
        { q: "Complete: 'If I ___ you, I would apologize.'", options: ["am", "was", "were", "be"], answer: 2, explanation: "No segundo condicional, usamos 'were' com todas as pessoas do verbo 'to be', inclusive 'I', como em 'If I were you'." },
        { type: "tf", q: "The second conditional describes real, possible future situations.", answer: false, explanation: "O segundo condicional descreve situações hipotéticas ou improváveis; o primeiro condicional descreve situações reais e possíveis." },
        { q: "Complete: 'If she had more time, she ___ learn guitar.'", options: ["will", "would", "was", "is"], answer: 1, explanation: "A oração principal do segundo condicional usa 'would' + verbo base." },
        { type: "short", q: "Complete: 'I wish I ___ travel more.' (poder)", answer: ["could"], explanation: "'Could' expressa a capacidade hipotética de fazer algo, usada após 'wish'." },
        { q: "'Lottery' means:", options: ["Loteria", "Conselho", "Desejo", "Sonho"], answer: 0, explanation: "'Lottery' significa 'loteria', um sorteio de prêmios." },
        { type: "tf", q: "'Advice' means 'conselho'.", answer: true, explanation: "Correto: 'advice' significa 'conselho' e é normalmente incontável em inglês (não se diz 'an advice')." },
        { q: "Choose the correct sentence.", options: ["If I had money, I would travel.", "If I have money, I would travel.", "If I had money, I will travel.", "If I would have money, I travel."], answer: 0, explanation: "O segundo condicional exige passado simples na oração com 'if' ('had') e 'would' na oração principal." },
        { q: "'Unlikely' means:", options: ["Provável", "Improvável", "Certo", "Impossível de saber"], answer: 1, explanation: "'Unlikely' significa 'improvável', algo com pouca chance de acontecer." },
        { type: "short", q: "Complete: 'If I were you, I ___ apologize.' (would)", answer: ["would"], explanation: "A oração principal do segundo condicional usa 'would' + verbo base." },
        { q: "Choose the correct sentence.", options: ["She would help if she could.", "She would help if she can.", "She will help if she could.", "She helped if she would."], answer: 0, explanation: "No segundo condicional, a oração com 'if' usa passado ('could') e a principal usa 'would'." },
        { type: "tf", q: "In the second conditional, we can use 'were' with 'I' even though it's grammatically plural.", answer: true, explanation: "Correto: no segundo condicional, 'were' é usado com todos os pronomes, incluindo 'I', especialmente em 'If I were you'." }
      ]
    },
    {
      id: "b1-m5",
      title: "Phrasal Verbs do Dia a Dia",
      subtitle: "Phrasal verbs comuns e como expressar opiniões",
      objective: "Ao final, o aluno consegue usar phrasal verbs comuns do dia a dia (give up, look for, turn on/off, look after, find out, come back) e expressar opiniões com 'I think', 'In my opinion' e 'I agree/disagree'.",
      prerequisites: ["b1-m4"],
      masteryEvidence: "O aluno atingiu pelo menos 60% de acerto no quiz do módulo, completou o exercício de writing com revisão e praticou ao menos uma frase na seção de speaking.",
      lesson: {
        intro: "Phrasal verbs são combinações de verbo + preposição/advérbio que mudam o significado original — são essenciais para soar mais natural em inglês. Vamos também aprender a expressar opiniões.",
        sections: [
          {
            heading: "O Que São Phrasal Verbs?",
            text: "Um phrasal verb combina um verbo com uma partícula (like up, on, out) e cria um significado novo, muitas vezes diferente do verbo original.",
            examples: [
              { en: "I never give up on my dreams.", pt: "Give up = desistir" },
              { en: "I'm looking for my keys.", pt: "Look for = procurar" }
            ]
          },
          {
            heading: "Phrasal Verbs Comuns",
            text: "Alguns dos phrasal verbs mais usados no dia a dia incluem: get up, turn on/off, look after, find out, come back.",
            examples: [
              { en: "I get up at seven every day.", pt: "Eu me levanto às sete todos os dias." },
              { en: "Can you turn off the lights?", pt: "Você pode desligar as luzes?" }
            ]
          },
          {
            heading: "Expressando Opiniões",
            text: "Frases como 'I think', 'In my opinion', 'I agree/disagree' são úteis para dar sua opinião em conversas.",
            examples: [
              { en: "In my opinion, learning English is important.", pt: "Na minha opinião, aprender inglês é importante." },
              { en: "I agree with you.", pt: "Eu concordo com você." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "b1-m5-give-up", word: "Give up", phonetic: "/ɡɪv ʌp/", translation: "Desistir", example: "Don't give up on your dreams.", exampleTranslation: "Não desista dos seus sonhos." },
        { id: "b1-m5-look-for", word: "Look for", phonetic: "/lʊk fɔːr/", translation: "Procurar", example: "I'm looking for my phone.", exampleTranslation: "Estou procurando meu celular." },
        { id: "b1-m5-get-up", word: "Get up", phonetic: "/ɡɛt ʌp/", translation: "Levantar-se", example: "I get up at seven.", exampleTranslation: "Eu me levanto às sete." },
        { id: "b1-m5-turn-on-off", word: "Turn on/off", phonetic: "/tɜːrn ɒn/ɒf/", translation: "Ligar/Desligar", example: "Turn off the TV, please.", exampleTranslation: "Desligue a TV, por favor." },
        { id: "b1-m5-look-after", word: "Look after", phonetic: "/lʊk ˈæftər/", translation: "Cuidar de", example: "She looks after her little brother.", exampleTranslation: "Ela cuida do irmão mais novo." },
        { id: "b1-m5-find-out", word: "Find out", phonetic: "/faɪnd aʊt/", translation: "Descobrir", example: "I need to find out the truth.", exampleTranslation: "Eu preciso descobrir a verdade." },
        { id: "b1-m5-come-back", word: "Come back", phonetic: "/kʌm bæk/", translation: "Voltar", example: "He will come back tomorrow.", exampleTranslation: "Ele vai voltar amanhã." },
        { id: "b1-m5-opinion", word: "Opinion", phonetic: "/əˈpɪnjən/", translation: "Opinião", example: "In my opinion, it's a great idea.", exampleTranslation: "Na minha opinião, é uma ótima ideia." },
        { id: "b1-m5-agree", word: "Agree", phonetic: "/əˈɡriː/", translation: "Concordar", example: "I agree with you.", exampleTranslation: "Eu concordo com você." },
        { id: "b1-m5-disagree", word: "Disagree", phonetic: "/ˌdɪsəˈɡriː/", translation: "Discordar", example: "I disagree, I think it's too expensive.", exampleTranslation: "Eu discordo, acho que é muito caro." }
      ],
      grammar: {
        title: "Phrasal Verbs Separáveis e Inseparáveis",
        explanation: "Alguns phrasal verbs podem ser separados pelo objeto (turn off the light / turn the light off), enquanto outros não podem ser separados (look after her).",
        table: {
          headers: ["Tipo", "Exemplo"],
          rows: [
            ["Separável", "Turn off the light. / Turn the light off."],
            ["Separável (com pronome, obrigatório separar)", "Turn it off. (não: Turn off it.)"],
            ["Inseparável", "Look after the children. (não: Look the children after.)"]
          ]
        },
        correct: ["Turn off the light.", "Turn it off.", "She looks after her brother."],
        incorrect: ["Turn off it.", "Turn the it off.", "She looks her brother after."]
      },
      listening: [
        {
          title: "A Conversation About Opinions",
          accent: "american",
          transcript: "Leo: In my opinion, learning phrasal verbs is really difficult. Kate: I disagree. I think it's easier if you learn them in context, like in movies or songs. Leo: That's true, actually. I never gave up trying, and now I understand a lot more. Kate: See? Don't give up!",
          questions: [
            { q: "What does Leo think about phrasal verbs?", options: ["They are easy", "They are really difficult", "They don't exist", "They are useless"], answer: 1 },
            { q: "What does Kate suggest?", options: ["Giving up", "Learning them in context", "Ignoring them", "Only reading books"], answer: 1 },
            { q: "Did Leo give up?", options: ["Yes", "No, he never gave up", "He is not sure", "He gave up once"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "My Opinion on Learning English",
          text: "In my opinion, the best way to learn English is by practicing every day. I always look for new ways to practice, like watching movies or talking to people online. Sometimes I want to give up because it feels difficult, but I never do. I look forward to the day when I can speak fluently. I agree with the idea that consistency is more important than perfection.",
          questions: [
            { q: "What does the writer look for?", options: ["A new job", "New ways to practice English", "A new phone", "A new friend"], answer: 1 },
            { q: "Does the writer ever want to give up?", options: ["No, never", "Sometimes, but they don't", "Yes, they already gave up", "They don't study"], answer: 1 },
            { q: "What does the writer agree with?", options: ["That perfection is more important", "That consistency is more important than perfection", "That English is easy", "That practice isn't necessary"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 4 frases usando phrasal verbs diferentes (give up, look for, turn on/off, look after).", minWords: 20, modelAnswer: "I never give up easily. I am looking for a new book. Please turn off the lights. She looks after her dog every day." },
        { prompt: "Dê sua opinião sobre aprender inglês, usando 'In my opinion' e 'I agree/disagree'.", minWords: 20, modelAnswer: "In my opinion, learning English opens many doors. I agree that practice is the most important part. I disagree that grammar is more important than speaking." }
      ],
      speaking: [
        { phrase: "Don't give up on your dreams.", tip: "'Give up' tem o acento em 'up': give-UP." },
        { phrase: "I'm looking for my keys.", tip: "'Looking for' costuma ser dito rápido, quase junto: 'lookin-for'." },
        { phrase: "Turn off the lights, please.", tip: "'Turn off' pode ser separado: 'Turn the lights off.'" },
        { phrase: "In my opinion, it's a great idea.", tip: "'Opinion' tem 3 sílabas: o-PIN-ion." },
        { phrase: "I agree with you.", tip: "'Agree' tem acento na segunda sílaba: a-GREE." }
      ],
      exercises: {
        fillBlanks: [
          { text: "Don't ___ ___ on your dreams. (desistir)", answer: "give up" },
          { text: "I'm ___ ___ my phone. (procurando)", answer: "looking for" },
          { text: "___ off the lights, please.", answer: "Turn" },
          { text: "She ___ ___ her little brother. (cuida de)", answer: "looks after" },
          { text: "In my ___, it's a great idea.", answer: "opinion" }
        ],
        matching: [
          { left: "Give up", right: "Desistir" },
          { left: "Look for", right: "Procurar" },
          { left: "Get up", right: "Levantar-se" },
          { left: "Look after", right: "Cuidar de" },
          { left: "Find out", right: "Descobrir" },
          { left: "Come back", right: "Voltar" }
        ],
        ordering: [
          { words: ["up", "give", "your", "on", "Don't", "dreams"], answer: "Don't give up on your dreams" },
          { words: ["for", "looking", "my", "I'm", "keys"], answer: "I'm looking for my keys" },
          { words: ["off", "lights", "Turn", "the"], answer: "Turn off the lights" },
          { words: ["after", "brother", "looks", "her", "She"], answer: "She looks after her brother" },
          { words: ["you", "agree", "with", "I"], answer: "I agree with you" }
        ],
        translation: [
          { direction: "pt-en", text: "Não desista dos seus sonhos.", answer: "Don't give up on your dreams." },
          { direction: "pt-en", text: "Estou procurando minhas chaves.", answer: "I'm looking for my keys." },
          { direction: "pt-en", text: "Eu concordo com você.", answer: "I agree with you." },
          { direction: "en-pt", text: "Turn off the lights, please.", answer: "Desligue as luzes, por favor." },
          { direction: "en-pt", text: "She looks after her little brother.", answer: "Ela cuida do irmãozinho dela." },
          { direction: "en-pt", text: "I disagree, I think it's too expensive.", answer: "Eu discordo, acho que é muito caro." }
        ],
        dictation: [
          { audioText: "Don't give up on your dreams.", answer: "Don't give up on your dreams." },
          { audioText: "I'm looking for my keys.", answer: "I'm looking for my keys." },
          { audioText: "I agree with you.", answer: "I agree with you." }
        ],
        dialogue: [
          {
            title: "Sharing Opinions",
            lines: [
              { speaker: "Paulo", text: "In my opinion, English grammar is the hardest part. What do you think?" },
              { speaker: "user", prompt: "Diga que discorda, e que acha o vocabulário mais difícil:", options: ["I disagree, I think vocabulary is harder.", "I agree completely.", "I never study grammar."], answer: 0 },
              { speaker: "Paulo", text: "That's interesting! Do you ever want to give up?" },
              { speaker: "user", prompt: "Diga que às vezes, mas você nunca desiste:", options: ["Sometimes, but I never give up.", "Yes, I gave up already.", "No, I never study."], answer: 0 },
              { speaker: "Paulo", text: "That's the right attitude!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "'Give up' means:", options: ["Continuar", "Desistir", "Procurar", "Voltar"], answer: 1, explanation: "'Give up' é um phrasal verb que significa 'desistir'." },
        { q: "Choose the correct sentence.", options: ["I'm looking my keys for.", "I'm looking for my keys.", "I'm for looking my keys.", "I'm looking keys for my."], answer: 1, explanation: "'Look for' (procurar) não se separa dessa forma: a ordem correta é 'looking for my keys'." },
        { type: "tf", q: "'Look after' means 'cuidar de'.", answer: true, explanation: "Correto: 'look after' é um phrasal verb que significa 'cuidar de'." },
        { q: "Complete: 'Turn ___ the lights, please.' (desligar)", options: ["on", "off", "up", "for"], answer: 1, explanation: "'Turn off' significa 'desligar'; 'turn on' seria 'ligar'." },
        { type: "short", q: "Complete: 'In my ___, it's a great idea.' (opinião)", answer: ["opinion"], explanation: "'Opinion' significa 'opinião', usado na expressão 'in my opinion'." },
        { q: "'Find out' means:", options: ["Esquecer", "Descobrir", "Ignorar", "Perder"], answer: 1, explanation: "'Find out' significa 'descobrir' uma informação." },
        { type: "tf", q: "'Agree' means 'discordar'.", answer: false, explanation: "'Agree' significa 'concordar'; 'discordar' é 'disagree'." },
        { q: "Choose the correct separable phrasal verb usage with a pronoun.", options: ["Turn off it.", "Turn it off.", "Turn it on off.", "Off turn it."], answer: 1, explanation: "Com pronomes, phrasal verbs separáveis exigem que o pronome fique entre o verbo e a partícula: 'Turn it off.'" },
        { q: "'Come back' means:", options: ["Ir embora", "Voltar", "Chegar cedo", "Desistir"], answer: 1, explanation: "'Come back' significa 'voltar' a um lugar." },
        { type: "short", q: "Complete: 'I ___ with you.' (concordo)", answer: ["agree"], explanation: "'Agree' significa 'concordar'." },
        { q: "Choose the correct sentence.", options: ["She looks her brother after.", "She looks after her brother.", "She after looks her brother.", "She looks after brother her."], answer: 1, explanation: "'Look after' é inseparável quando o objeto é um substantivo: 'She looks after her brother.'" },
        { type: "tf", q: "'Look after' can be separated by the object, like 'look the children after'.", answer: false, explanation: "'Look after' é inseparável — o objeto sempre vem depois da expressão completa." }
      ]
    },
    {
      id: "b1-m6",
      title: "Descrevendo com Detalhes",
      subtitle: "Orações relativas com who, which e that",
      objective: "Ao final, o aluno consegue combinar informações sobre pessoas, coisas e lugares em uma única frase usando orações relativas com 'who', 'which' e 'that'.",
      prerequisites: ["b1-m5"],
      masteryEvidence: "O aluno atingiu pelo menos 60% de acerto no quiz do módulo, completou o exercício de writing com revisão, praticou ao menos uma frase na seção de speaking e concluiu todas as 9 sessões do módulo.",
      lesson: {
        intro: "Orações relativas nos permitem dar mais informações sobre pessoas, coisas e lugares em uma única frase, tornando sua fala mais natural e sofisticada.",
        sections: [
          {
            heading: "Who para Pessoas",
            text: "Usamos 'who' para adicionar informação sobre pessoas.",
            examples: [
              { en: "The woman who lives next door is a doctor.", pt: "A mulher que mora ao lado é médica." },
              { en: "I have a friend who speaks four languages.", pt: "Eu tenho um amigo que fala quatro idiomas." }
            ]
          },
          {
            heading: "Which para Coisas",
            text: "Usamos 'which' para adicionar informação sobre objetos, animais e ideias.",
            examples: [
              { en: "The book which I'm reading is fascinating.", pt: "O livro que estou lendo é fascinante." },
              { en: "This is the car which I bought last year.", pt: "Este é o carro que eu comprei ano passado." }
            ]
          },
          {
            heading: "That para Pessoas ou Coisas",
            text: "'That' pode substituir 'who' ou 'which' em orações relativas restritivas (informação essencial), especialmente na fala informal.",
            examples: [
              { en: "The man that called you is my boss.", pt: "O homem que te ligou é meu chefe." },
              { en: "This is the movie that everyone is talking about.", pt: "Este é o filme que todo mundo está falando." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "b1-m6-neighbor", word: "Neighbor", phonetic: "/ˈneɪbər/", translation: "Vizinho(a)", example: "My neighbor who lives upstairs is very kind.", exampleTranslation: "Meu vizinho que mora no andar de cima é muito gentil." },
        { id: "b1-m6-describe", word: "Describe", phonetic: "/dɪˈskraɪb/", translation: "Descrever", example: "Can you describe the person who helped you?", exampleTranslation: "Você pode descrever a pessoa que te ajudou?" },
        { id: "b1-m6-fascinating", word: "Fascinating", phonetic: "/ˈfæsəneɪtɪŋ/", translation: "Fascinante", example: "The book which I'm reading is fascinating.", exampleTranslation: "O livro que estou lendo é fascinante." },
        { id: "b1-m6-author", word: "Author", phonetic: "/ˈɔːθər/", translation: "Autor(a)", example: "The author who wrote this book is famous.", exampleTranslation: "O autor que escreveu este livro é famoso." },
        { id: "b1-m6-nearby", word: "Nearby", phonetic: "/nɪrˈbaɪ/", translation: "Próximo/Nas proximidades", example: "There's a café nearby that I love.", exampleTranslation: "Há um café nas proximidades que eu amo." },
        { id: "b1-m6-owner", word: "Owner", phonetic: "/ˈoʊnər/", translation: "Proprietário(a)", example: "The owner who runs this shop is friendly.", exampleTranslation: "O proprietário que administra esta loja é simpático." },
        { id: "b1-m6-belong", word: "Belong", phonetic: "/bɪˈlɒŋ/", translation: "Pertencer", example: "This is the bag which belongs to my sister.", exampleTranslation: "Esta é a bolsa que pertence à minha irmã." },
        { id: "b1-m6-recommend", word: "Recommend", phonetic: "/ˌrɛkəˈmɛnd/", translation: "Recomendar", example: "The restaurant that you recommended was great.", exampleTranslation: "O restaurante que você recomendou foi ótimo." },
        { id: "b1-m6-colleague", word: "Colleague", phonetic: "/ˈkɒliːɡ/", translation: "Colega de trabalho", example: "My colleague who sits next to me is very helpful.", exampleTranslation: "Meu colega que se senta ao meu lado é muito prestativo." },
        { id: "b1-m6-memorable", word: "Memorable", phonetic: "/ˈmɛmərəbəl/", translation: "Memorável", example: "It was a trip that I will never forget.", exampleTranslation: "Foi uma viagem que eu nunca vou esquecer." }
      ],
      grammar: {
        title: "Orações Relativas: Who, Which, That",
        explanation: "'Who' para pessoas, 'which' para coisas, 'that' pode substituir ambos em orações restritivas (informação essencial para identificar o substantivo).",
        table: {
          headers: ["Pronome", "Usado para", "Exemplo"],
          rows: [
            ["Who", "Pessoas", "The man who called is my boss."],
            ["Which", "Coisas/animais", "The car which I bought is red."],
            ["That", "Pessoas ou coisas (informal/restritivo)", "The book that I read was great."]
          ]
        },
        correct: ["The woman who lives next door is a doctor.", "This is the book which I bought.", "The man that called you is my boss."],
        incorrect: ["The woman which lives next door is a doctor.", "This is the book who I bought.", "The man, that called you, is my boss."]
      },
      listening: [
        {
          title: "Describing People",
          accent: "american",
          transcript: "A: Do you know the woman who just walked in? B: Yes, that's my colleague who works in marketing. She's the one who organized last year's conference, the one that everyone loved. A: Oh, I remember! It was an event that people still talk about.",
          questions: [
            { q: "Who is the woman?", options: ["A stranger", "A's sister", "B's colleague", "The manager"], answer: 2 },
            { q: "What did the woman organize?", options: ["A party", "Last year's conference", "A wedding", "A trip"], answer: 1 },
            { q: "How do people feel about the event?", options: ["They forgot it", "They still talk about it", "They disliked it", "They ignore it"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "A City Worth Visiting",
          text: "I recently visited a city that completely surprised me. The people who live there are incredibly friendly, and the food which they serve in local restaurants is amazing. I met a local guide who showed me hidden spots that most tourists never see. It was a trip that I will never forget, and it's a place which I definitely want to visit again.",
          questions: [
            { q: "How did the writer feel about the people?", options: ["They were unfriendly", "They were incredibly friendly", "They were indifferent", "Unknown"], answer: 1 },
            { q: "Who showed the writer hidden spots?", options: ["A stranger", "A local guide", "A tourist", "No one"], answer: 1 },
            { q: "Does the writer want to return?", options: ["No, never", "Yes, definitely", "Maybe", "They didn't say"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 3 frases descrevendo pessoas que você conhece usando orações relativas com 'who'.", minWords: 20, modelAnswer: "I have a friend who lives in Canada. My neighbor who has a dog is very friendly. My colleague who sits next to me helps me a lot." },
        { prompt: "Escreva sobre um lugar ou objeto especial usando 'which' ou 'that'.", minWords: 15, modelAnswer: "This is the necklace which my grandmother gave me. It's an object that means a lot to me." }
      ],
      speaking: [
        { phrase: "The woman who lives next door is a doctor.", tip: "'Who' aqui liga a informação sem pausa — fale a frase toda de forma contínua." },
        { phrase: "This is the book which I bought.", tip: "'Which' é usado quase sempre para coisas, não pessoas." },
        { phrase: "The man that called you is my boss.", tip: "'That' em orações restritivas nunca tem vírgula antes." },
        { phrase: "It was a trip that I will never forget.", tip: "'Forget' tem acento na segunda sílaba: for-GET." },
        { phrase: "My colleague who sits next to me is helpful.", tip: "'Colleague' se pronuncia /ˈkɒliːɡ/, terminando em som de 'g', não 'gue'." }
      ],
      exercises: {
        fillBlanks: [
          { text: "The woman ___ lives next door is a doctor. (pessoa)", answer: "who" },
          { text: "This is the book ___ I bought. (coisa)", answer: "which" },
          { text: "The man ___ called you is my boss. (pessoa ou coisa, informal)", answer: "that" },
          { text: "I have a friend ___ speaks four languages.", answer: "who" },
          { text: "The restaurant ___ you recommended was great.", answer: "that" }
        ],
        matching: [
          { left: "Neighbor", right: "Vizinho(a)" },
          { left: "Author", right: "Autor(a)" },
          { left: "Owner", right: "Proprietário(a)" },
          { left: "Colleague", right: "Colega de trabalho" },
          { left: "Recommend", right: "Recomendar" },
          { left: "Memorable", right: "Memorável" }
        ],
        ordering: [
          { words: ["who", "woman", "The", "door", "lives", "next", "is", "a", "doctor"], answer: "The woman who lives next door is a doctor" },
          { words: ["book", "is", "This", "bought", "I", "which", "the"], answer: "This is the book which I bought" },
          { words: ["boss", "man", "The", "called", "that", "you", "is", "my"], answer: "The man that called you is my boss" },
          { words: ["friend", "have", "who", "I", "languages", "speaks", "four", "a"], answer: "I have a friend who speaks four languages" },
          { words: ["forget", "was", "It", "never", "trip", "will", "that", "I", "a"], answer: "It was a trip that I will never forget" }
        ],
        translation: [
          { direction: "pt-en", text: "A mulher que mora ao lado é médica.", answer: "The woman who lives next door is a doctor." },
          { direction: "pt-en", text: "Este é o livro que eu comprei.", answer: "This is the book which I bought." },
          { direction: "pt-en", text: "O homem que te ligou é meu chefe.", answer: "The man that called you is my boss." },
          { direction: "en-pt", text: "I have a friend who speaks four languages.", answer: "Eu tenho um amigo que fala quatro idiomas." },
          { direction: "en-pt", text: "It was a trip that I will never forget.", answer: "Foi uma viagem que eu nunca vou esquecer." },
          { direction: "en-pt", text: "The restaurant that you recommended was great.", answer: "O restaurante que você recomendou foi ótimo." }
        ],
        dictation: [
          { audioText: "The woman who lives next door is a doctor.", answer: "The woman who lives next door is a doctor." },
          { audioText: "This is the book which I bought.", answer: "This is the book which I bought." },
          { audioText: "The man that called you is my boss.", answer: "The man that called you is my boss." }
        ],
        dialogue: [
          {
            title: "Talking About People",
            lines: [
              { speaker: "Sara", text: "Who is the man who just left?" },
              { speaker: "user", prompt: "Diga que é o colega que trabalha em marketing:", options: ["That's the colleague who works in marketing.", "That's the book which I bought.", "That's a trip I loved."], answer: 0 },
              { speaker: "Sara", text: "Oh nice! Is he the one who organized the event?" },
              { speaker: "user", prompt: "Diga que sim, é ele:", options: ["Yes, that's him.", "No, that's the neighbor.", "Yes, that's the author."], answer: 0 },
              { speaker: "Sara", text: "Cool, I'd like to meet him." }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct relative pronoun: 'The woman ___ called is my sister.'", options: ["which", "who", "whose", "whom"], answer: 1, explanation: "Usamos 'who' para nos referirmos a pessoas: 'The woman who called...'" },
        { q: "Choose the correct relative pronoun: 'This is the car ___ I bought.'", options: ["who", "which", "whom", "whose"], answer: 1, explanation: "Usamos 'which' para nos referirmos a coisas/objetos: 'the car which I bought'." },
        { type: "tf", q: "'That' can replace both 'who' and 'which' in restrictive clauses.", answer: true, explanation: "Correto: em orações restritivas, 'that' pode substituir tanto 'who' (pessoas) quanto 'which' (coisas)." },
        { q: "Choose the correct sentence.", options: ["The book who I read was great.", "The book which I read was great.", "The book whom I read was great.", "The book whose I read was great."], answer: 1, explanation: "'Book' é uma coisa, então usamos 'which', não 'who' (usado para pessoas)." },
        { type: "short", q: "Complete: 'I have a friend ___ speaks four languages.' (who)", answer: ["who"], explanation: "'Who' é usado para se referir a uma pessoa ('a friend')." },
        { q: "'Neighbor' means:", options: ["Autor", "Vizinho(a)", "Proprietário", "Colega"], answer: 1, explanation: "'Neighbor' significa 'vizinho(a)'." },
        { type: "tf", q: "Restrictive relative clauses with 'that' use a comma before 'that'.", answer: false, explanation: "Orações restritivas com 'that' nunca usam vírgula." },
        { q: "'Recommend' means:", options: ["Esquecer", "Recomendar", "Pertencer", "Descrever"], answer: 1, explanation: "'Recommend' significa 'recomendar'." },
        { q: "Choose the correct sentence.", options: ["The man that called you is my boss.", "The man, that called you, is my boss.", "The man that called you, is my boss.", "The man that, called you is my boss."], answer: 0, explanation: "Orações restritivas com 'that' não usam vírgulas antes ou depois." },
        { type: "short", q: "Complete: 'It was a trip that I will never ___.' (esquecer)", answer: ["forget"], explanation: "'Forget' significa 'esquecer'." },
        { q: "'Memorable' means:", options: ["Esquecível", "Memorável", "Comum", "Chato"], answer: 1, explanation: "'Memorable' significa 'memorável', algo digno de ser lembrado." },
        { type: "tf", q: "'Which' is typically used for people, not things.", answer: false, explanation: "'Which' é usado para coisas/animais; 'who' é usado para pessoas." }
      ]
    }
  ],
  finalTest: {
    description: "Prova final do nível B1 — 20 questões cobrindo will/going to, present perfect, primeiro e segundo condicional, e phrasal verbs/opiniões.",
    questions: [
      { q: "Choose the correct sentence for a spontaneous decision.", options: ["I'm going to answer the phone.", "I will answer the phone!", "I answer the phone.", "I answered the phone."], answer: 1, explanation: "Decisões tomadas no momento da fala usam 'will', não 'going to' (que indica um plano já decidido)." },
      { q: "Choose the correct sentence for a decided plan.", options: ["I will travel next year, I already bought the ticket.", "I am going to travel next year, I already bought the ticket.", "I travel next year.", "I travelled next year."], answer: 1, explanation: "Um plano já decidido, evidenciado pela compra da passagem, usa 'going to', não 'will'." },
      { q: "Choose the correct present perfect form.", options: ["I have visit Paris.", "I have visited Paris.", "I has visited Paris.", "I having visited Paris."], answer: 1, explanation: "O present perfect com 'I' é formado por 'have' + particípio passado: 'have visited'." },
      { type: "short", q: "Complete: 'I have ___ tried sushi.' (nunca)", answer: ["never"], explanation: "'Never' (nunca) é o advérbio usado para negar experiências no present perfect." },
      { q: "Choose the correct first conditional sentence.", options: ["If it rains, I will stay home.", "If it will rain, I stay home.", "If it rains, I stay will home.", "If it rain, I will stay home."], answer: 0, explanation: "No primeiro condicional, a oração com 'if' usa presente simples e a principal usa 'will'." },
      { type: "tf", q: "In the first conditional, the 'if' clause uses the present simple.", answer: true, explanation: "Correto: mesmo tratando do futuro, a oração com 'if' no primeiro condicional usa o presente simples." },
      { q: "Choose the correct second conditional sentence.", options: ["If I win the lottery, I would travel.", "If I won the lottery, I would travel.", "If I would win the lottery, I travel.", "If I won the lottery, I will travel."], answer: 1, explanation: "No segundo condicional, a oração com 'if' usa passado simples ('won') e a principal usa 'would'." },
      { q: "Complete: 'If I ___ you, I would apologize.'", options: ["am", "was", "were", "be"], answer: 2, explanation: "No segundo condicional, usa-se 'were' com todas as pessoas, inclusive 'I', na expressão 'If I were you'." },
      { q: "'Give up' means:", options: ["Continuar", "Desistir", "Procurar", "Voltar"], answer: 1, explanation: "'Give up' significa 'desistir'." },
      { q: "Choose the correct sentence.", options: ["I'm looking my keys for.", "I'm looking for my keys.", "I'm for looking my keys.", "I'm looking keys for my."], answer: 1, explanation: "'Look for' (procurar) mantém a partícula 'for' antes do objeto: 'looking for my keys'." },
      { type: "tf", q: "'Agree' means 'discordar'.", answer: false, explanation: "Incorreto: 'agree' significa 'concordar'; 'discordar' é 'disagree'." },
      { q: "'Prediction' means:", options: ["Decisão", "Previsão", "Promessa", "Meta"], answer: 1, explanation: "'Prediction' significa 'previsão'." },
      { type: "short", q: "Complete: 'Has she ___ been to Brazil?' (alguma vez)", answer: ["ever"], explanation: "'Ever' (alguma vez) é usado em perguntas no present perfect." },
      { q: "'Unless' means:", options: ["Se", "A menos que", "Porque", "Embora"], answer: 1, explanation: "'Unless' significa 'a menos que'." },
      { type: "tf", q: "The second conditional describes real, possible future situations.", answer: false, explanation: "Incorreto: o segundo condicional descreve situações hipotéticas ou improváveis; o primeiro condicional trata de situações reais e possíveis." },
      { type: "short", q: "Complete: 'In my ___, it's a great idea.'", answer: ["opinion"], explanation: "'Opinion' significa 'opinião', usado na expressão 'in my opinion'." },
      { q: "'Achievement' means:", options: ["Experiência", "Conquista", "Viagem", "Trabalho"], answer: 1, explanation: "'Achievement' significa 'conquista'." },
      { q: "Choose the correct sentence.", options: ["If we leave now, we will arrive on time.", "If we will leave now, we arrive on time.", "If we leave now, we arrive will on time.", "If we leaving now, we will arrive on time."], answer: 0, explanation: "A oração com 'if' usa presente simples ('leave') e a principal usa 'will' + verbo base ('will arrive')." },
      { type: "tf", q: "'Going to' is used for plans already decided.", answer: true, explanation: "Correto: 'going to' é usado para planos já decididos antes do momento da fala." },
      { q: "'Find out' means:", options: ["Esquecer", "Descobrir", "Ignorar", "Perder"], answer: 1, explanation: "'Find out' significa 'descobrir'." }
    ]
  }
};

window.APP_DATA = APP_DATA;
