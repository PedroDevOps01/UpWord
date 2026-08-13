var APP_DATA = window.APP_DATA || {};

APP_DATA.b2 = {
  modules: [
    {
      id: "b2-m1",
      title: "Voz Passiva",
      subtitle: "Voz passiva no presente e no passado",
      objective: "Ao final, o aluno consegue formar e usar a voz passiva no presente e no passado para descrever ações, processos e fatos sem focar em quem os pratica.",
      prerequisites: ["b1-m6"],
      masteryEvidence: "Domínio demonstrado por pelo menos 60% de acerto no quiz, revisão da atividade de writing concluída, tentativa de speaking registrada e as 9 sessões do módulo completas.",
      levelCefrNote: "Compatível com as expectativas de compreensão e produção do nível B2 do CEFR (Common European Framework of Reference) — não é uma certificação oficial.",
      lesson: {
        intro: "Vamos aprender a voz passiva, usada quando o foco está na ação ou no objeto, não em quem a pratica — muito comum em notícias e textos formais.",
        sections: [
          {
            heading: "Formação da Voz Passiva",
            text: "Formamos a voz passiva com 'to be' + particípio passado. O sujeito da ativa vira o agente (opcional, com 'by').",
            examples: [
              { en: "They built this house in 1990.", pt: "Eles construíram esta casa em 1990. (ativa)" },
              { en: "This house was built in 1990.", pt: "Esta casa foi construída em 1990. (passiva)" }
            ]
          },
          {
            heading: "Voz Passiva no Presente",
            text: "No presente, usamos 'am/is/are + particípio'.",
            examples: [
              { en: "The report is written every month.", pt: "O relatório é escrito todo mês." },
              { en: "These products are made in Brazil.", pt: "Estes produtos são feitos no Brasil." }
            ]
          },
          {
            heading: "Quando Usar a Voz Passiva",
            text: "Usamos a passiva quando quem pratica a ação é desconhecido, óbvio, ou menos importante que a ação em si — muito comum em notícias.",
            examples: [
              { en: "The bridge was damaged by the storm.", pt: "A ponte foi danificada pela tempestade." },
              { en: "English is spoken all over the world.", pt: "Inglês é falado no mundo todo." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "b2-m1-built", word: "Built", phonetic: "/bɪlt/", translation: "Construído(a)", example: "This building was built in 2005.", exampleTranslation: "Este prédio foi construído em 2005." },
        { id: "b2-m1-discovered", word: "Discovered", phonetic: "/dɪˈskʌvərd/", translation: "Descoberto(a)", example: "Penicillin was discovered by accident.", exampleTranslation: "A penicilina foi descoberta por acidente." },
        { id: "b2-m1-damaged", word: "Damaged", phonetic: "/ˈdæmɪdʒd/", translation: "Danificado(a)", example: "The car was damaged in the accident.", exampleTranslation: "O carro foi danificado no acidente." },
        { id: "b2-m1-produced", word: "Produced", phonetic: "/prəˈdjuːst/", translation: "Produzido(a)", example: "This wine is produced in France.", exampleTranslation: "Este vinho é produzido na França." },
        { id: "b2-m1-delivered", word: "Delivered", phonetic: "/dɪˈlɪvərd/", translation: "Entregue", example: "The package was delivered yesterday.", exampleTranslation: "O pacote foi entregue ontem." },
        { id: "b2-m1-invented", word: "Invented", phonetic: "/ɪnˈvɛntɪd/", translation: "Inventado(a)", example: "The telephone was invented by Bell.", exampleTranslation: "O telefone foi inventado por Bell." },
        { id: "b2-m1-announced", word: "Announced", phonetic: "/əˈnaʊnst/", translation: "Anunciado(a)", example: "The winner was announced last night.", exampleTranslation: "O vencedor foi anunciado ontem à noite." },
        { id: "b2-m1-published", word: "Published", phonetic: "/ˈpʌblɪʃt/", translation: "Publicado(a)", example: "The book was published last year.", exampleTranslation: "O livro foi publicado no ano passado." },
        { id: "b2-m1-elected", word: "Elected", phonetic: "/ɪˈlɛktɪd/", translation: "Eleito(a)", example: "She was elected president.", exampleTranslation: "Ela foi eleita presidente." },
        { id: "b2-m1-cancelled", word: "Cancelled", phonetic: "/ˈkænsəld/", translation: "Cancelado(a)", example: "The flight was cancelled due to weather.", exampleTranslation: "O voo foi cancelado por causa do tempo." }
      ],
      grammar: {
        title: "Voz Ativa vs. Voz Passiva",
        explanation: "Na passiva, o objeto da frase ativa se torna o sujeito. Usamos 'by' para mencionar quem praticou a ação, quando relevante.",
        table: {
          headers: ["Ativa", "Passiva"],
          rows: [
            ["They built this house in 1990.", "This house was built in 1990."],
            ["Bell invented the telephone.", "The telephone was invented by Bell."],
            ["They speak English here.", "English is spoken here."]
          ]
        },
        correct: ["The window was broken by the storm.", "English is spoken in many countries.", "The report was written last week."],
        incorrect: ["The window was break by the storm.", "English is speak in many countries.", "The report was write last week."]
      },
      listening: [
        {
          title: "How Chocolate Is Made",
          accent: "british",
          audioSrc: "assets/audio/b2-m1-listen-0.mp3",
          audioSource: "tts-pregenerated",
          speedLevels: [0.75, 1, 1.25],
          transcript: "Chocolate is made from cocoa beans. First, the beans are harvested and dried. Then, they are roasted and ground into a paste. Sugar and milk are added to the paste, and finally, the chocolate is shaped and packaged. It's a fascinating process!",
          questions: [
            { q: "What is chocolate made from?", options: ["Sugar cane", "Cocoa beans", "Milk", "Wheat"], answer: 1 },
            { q: "What happens to the beans first?", options: ["They are packaged", "They are harvested and dried", "They are eaten", "They are shipped"], answer: 1 },
            { q: "What is added to the paste?", options: ["Water and salt", "Sugar and milk", "Only sugar", "Nothing"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "A City Transformed",
          text: "This old neighborhood has been completely transformed in the last ten years. New parks were built, old buildings were renovated, and a new metro line was constructed. Thousands of new trees were planted, and the streets were made safer for pedestrians. Today, this area is visited by tourists from all over the world.",
          questions: [
            { q: "What was built in the neighborhood?", options: ["New parks", "A stadium", "A shopping mall", "Nothing"], answer: 0 },
            { q: "What was constructed?", options: ["An airport", "A new metro line", "A bridge", "A tunnel"], answer: 1 },
            { q: "Who visits the area today?", options: ["Only locals", "Tourists from all over the world", "No one", "Only students"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Reescreva 3 frases da voz ativa para a voz passiva.", minWords: 15, modelAnswer: "The cake was made by my mother. The window was broken by the wind. The letter was sent yesterday." },
        { prompt: "Escreva sobre como um produto do seu dia a dia é fabricado, usando a voz passiva.", minWords: 20, modelAnswer: "Coffee is grown in many countries. The beans are harvested and roasted. Then, the coffee is packaged and sold in stores." }
      ],
      speaking: [
        { phrase: "This house was built in 1990.", tip: "'Built' é irregular — não existe 'builded'." },
        { phrase: "English is spoken all over the world.", tip: "'Spoken' é o particípio de 'speak', pronunciado /ˈspoʊkən/." },
        { phrase: "The package was delivered yesterday.", tip: "'Delivered' tem acento na segunda sílaba: de-LIV-ered." },
        { phrase: "The flight was cancelled.", tip: "No inglês britânico 'cancelled' tem dois 'l'; no americano, geralmente um só." },
        { phrase: "The winner was announced last night.", tip: "'Announced' tem o som 'ao' nasal, como em 'ounce'." }
      ],
      exercises: {
        fillBlanks: [
          { text: "This house ___ (build) in 1990. (passiva)", answer: "was built" },
          { text: "English ___ (speak) all over the world.", answer: "is spoken" },
          { text: "The package ___ (deliver) yesterday.", answer: "was delivered" },
          { text: "The telephone ___ (invent) by Bell.", answer: "was invented" },
          { text: "The book ___ (publish) last year.", answer: "was published" }
        ],
        matching: [
          { left: "Built", right: "Construído" },
          { left: "Discovered", right: "Descoberto" },
          { left: "Damaged", right: "Danificado" },
          { left: "Invented", right: "Inventado" },
          { left: "Published", right: "Publicado" },
          { left: "Elected", right: "Eleito" }
        ],
        ordering: [
          { words: ["was", "house", "This", "1990", "built", "in"], answer: "This house was built in 1990" },
          { words: ["is", "English", "world", "spoken", "the", "all", "over"], answer: "English is spoken all over the world" },
          { words: ["was", "package", "delivered", "The", "yesterday"], answer: "The package was delivered yesterday" },
          { words: ["was", "telephone", "The", "Bell", "invented", "by"], answer: "The telephone was invented by Bell" },
          { words: ["was", "book", "published", "The", "year", "last"], answer: "The book was published last year" }
        ],
        translation: [
          { direction: "pt-en", text: "Esta casa foi construída em 1990.", answer: "This house was built in 1990." },
          { direction: "pt-en", text: "Inglês é falado no mundo todo.", answer: "English is spoken all over the world." },
          { direction: "pt-en", text: "O pacote foi entregue ontem.", answer: "The package was delivered yesterday." },
          { direction: "en-pt", text: "The telephone was invented by Bell.", answer: "O telefone foi inventado por Bell." },
          { direction: "en-pt", text: "The flight was cancelled due to weather.", answer: "O voo foi cancelado por causa do tempo." },
          { direction: "en-pt", text: "The winner was announced last night.", answer: "O vencedor foi anunciado ontem à noite." }
        ],
        dictation: [
          { audioText: "This house was built in 1990.", answer: "This house was built in 1990." },
          { audioText: "English is spoken all over the world.", answer: "English is spoken all over the world." },
          { audioText: "The package was delivered yesterday.", answer: "The package was delivered yesterday." }
        ],
        dialogue: [
          {
            title: "Talking About a Product",
            lines: [
              { speaker: "Rafael", text: "Do you know how this phone was made?" },
              { speaker: "user", prompt: "Diga que foi feito no Japão:", options: ["It was made in Japan.", "It makes in Japan.", "It is making in Japan."], answer: 0 },
              { speaker: "Rafael", text: "Interesting! When was it released?" },
              { speaker: "user", prompt: "Diga que foi lançado ano passado:", options: ["It was released last year.", "It releases last year.", "It is released last year."], answer: 0 },
              { speaker: "Rafael", text: "Thanks for the info!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct passive sentence.", options: ["This house built in 1990.", "This house was built in 1990.", "This house is building in 1990.", "This house has build in 1990."], answer: 1, explanation: "A passiva no passado usa 'was/were + particípio passado': 'was built', não o verbo sozinho." },
        { q: "Choose the passive form of 'They speak English here.'", options: ["English speaks here.", "English is spoken here.", "English was spoken here.", "English speaking here."], answer: 1, explanation: "Como a frase original está no presente simples, a passiva usa 'is/are + particípio': 'is spoken'." },
        { type: "tf", q: "In the passive voice, the object of the active sentence becomes the subject.", answer: true, explanation: "Na transformação para a passiva, o objeto da ativa ('this house', 'the telephone') passa a ocupar a posição de sujeito." },
        { q: "Complete: 'The book ___ (publish) last year.'", options: ["publishes", "was published", "is published", "published"], answer: 1, explanation: "Como a ação ocorreu no passado ('last year'), a passiva correta é 'was published'." },
        { type: "short", q: "Write the past participle of 'build'.", answer: ["built", "Built"], explanation: "'Build' é um verbo irregular; seu particípio passado é 'built', igual ao passado simples." },
        { q: "'Discovered' means:", options: ["Inventado", "Descoberto", "Construído", "Publicado"], answer: 1, explanation: "'Discovered' é o particípio de 'discover', que significa 'descobrir'." },
        { type: "tf", q: "We always need to mention who did the action in a passive sentence.", answer: false, explanation: "O agente ('by...') é opcional na voz passiva — usamos apenas quando é relevante." },
        { q: "Choose the correct sentence.", options: ["The window was broken by the storm.", "The window broken was by the storm.", "The window was break by the storm.", "The window is broken by the storm yesterday."], answer: 0, explanation: "A ordem correta na passiva é 'sujeito + was/were + particípio + by + agente': 'was broken by the storm'." },
        { q: "'Cancelled' means:", options: ["Confirmado", "Cancelado", "Entregue", "Anunciado"], answer: 1, explanation: "'Cancelled' é o particípio de 'cancel', que significa 'cancelar'." },
        { type: "short", q: "Complete: 'The winner ___ (announce) last night.'", answer: ["was announced"], explanation: "Ação pontual no passado com foco no resultado: passiva no passado é 'was announced'." },
        { q: "Choose the correct sentence.", options: ["This wine produced in France.", "This wine is produced in France.", "This wine produces in France.", "This wine was produce in France."], answer: 1, explanation: "Fato geral no presente exige 'is produced', com o auxiliar 'is' e o particípio 'produced'." },
        { type: "tf", q: "The passive voice is common in news and formal texts when the action is more important than who did it.", answer: true, explanation: "Notícias e textos formais frequentemente priorizam a ação ou o resultado, por isso preferem a voz passiva." }
      ]
    },
    {
      id: "b2-m2",
      title: "Discurso Indireto",
      subtitle: "Reported Speech: afirmações e perguntas",
      objective: "Ao final, o aluno consegue relatar o que outras pessoas disseram ou perguntaram usando discurso indireto, aplicando corretamente a mudança de tempos verbais e a ordem das perguntas relatadas.",
      prerequisites: ["b2-m1"],
      masteryEvidence: "Domínio demonstrado por pelo menos 60% de acerto no quiz, revisão da atividade de writing concluída, tentativa de speaking registrada e as 9 sessões do módulo completas.",
      lesson: {
        intro: "O discurso indireto é usado para relatar o que alguém disse, sem citar as palavras exatas. Isso geralmente muda o tempo verbal e os pronomes.",
        sections: [
          {
            heading: "Discurso Direto vs. Indireto",
            text: "No discurso direto, citamos exatamente o que a pessoa disse, entre aspas. No indireto, relatamos a ideia, geralmente 'voltando' o tempo verbal.",
            examples: [
              { en: "She said, 'I am tired.'", pt: "Ela disse: 'Estou cansada.' (direto)" },
              { en: "She said she was tired.", pt: "Ela disse que estava cansada. (indireto)" }
            ]
          },
          {
            heading: "Mudança de Tempos Verbais",
            text: "Geralmente, o tempo verbal 'volta' um passo: presente vira passado, passado vira past perfect, etc.",
            examples: [
              { en: "'I work here.' → He said he worked here.", pt: "'Eu trabalho aqui.' → Ele disse que trabalhava aqui." },
              { en: "'I will call you.' → She said she would call me.", pt: "'Eu vou te ligar.' → Ela disse que ligaria para mim." }
            ]
          },
          {
            heading: "Perguntas no Discurso Indireto",
            text: "Perguntas no discurso indireto perdem a inversão sujeito-verbo e o ponto de interrogação.",
            examples: [
              { en: "'Where do you live?' → He asked where I lived.", pt: "'Onde você mora?' → Ele perguntou onde eu morava." },
              { en: "'Are you happy?' → She asked if I was happy.", pt: "'Você está feliz?' → Ela perguntou se eu estava feliz." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "b2-m2-said", word: "Said", phonetic: "/sɛd/", translation: "Disse (say)", example: "He said he was busy.", exampleTranslation: "Ele disse que estava ocupado." },
        { id: "b2-m2-told", word: "Told", phonetic: "/toʊld/", translation: "Contou (tell)", example: "She told me she was leaving.", exampleTranslation: "Ela me contou que estava indo embora." },
        { id: "b2-m2-asked", word: "Asked", phonetic: "/æskt/", translation: "Perguntou", example: "He asked if I was okay.", exampleTranslation: "Ele perguntou se eu estava bem." },
        { id: "b2-m2-explained", word: "Explained", phonetic: "/ɪkˈspleɪnd/", translation: "Explicou", example: "She explained that she was late because of traffic.", exampleTranslation: "Ela explicou que estava atrasada por causa do trânsito." },
        { id: "b2-m2-mentioned", word: "Mentioned", phonetic: "/ˈmɛnʃənd/", translation: "Mencionou", example: "He mentioned that he would come.", exampleTranslation: "Ele mencionou que viria." },
        { id: "b2-m2-claimed", word: "Claimed", phonetic: "/kleɪmd/", translation: "Alegou", example: "She claimed she didn't know.", exampleTranslation: "Ela alegou que não sabia." },
        { id: "b2-m2-admitted", word: "Admitted", phonetic: "/ədˈmɪtɪd/", translation: "Admitiu", example: "He admitted that he was wrong.", exampleTranslation: "Ele admitiu que estava errado." },
        { id: "b2-m2-denied", word: "Denied", phonetic: "/dɪˈnaɪd/", translation: "Negou", example: "She denied breaking the vase.", exampleTranslation: "Ela negou ter quebrado o vaso." },
        { id: "b2-m2-wondered", word: "Wondered", phonetic: "/ˈwʌndərd/", translation: "Ficou imaginando", example: "I wondered if she would come.", exampleTranslation: "Eu fiquei imaginando se ela viria." },
        { id: "b2-m2-reported", word: "Reported", phonetic: "/rɪˈpɔːrtɪd/", translation: "Relatou", example: "The witness reported what she saw.", exampleTranslation: "A testemunha relatou o que viu." }
      ],
      grammar: {
        title: "Discurso Indireto: Mudança de Tempo Verbal",
        explanation: "Ao relatar o discurso de alguém, o tempo verbal geralmente recua um passo.",
        table: {
          headers: ["Discurso Direto", "Discurso Indireto"],
          rows: [
            ["'I am tired.'", "She said (that) she was tired."],
            ["'I work here.'", "He said (that) he worked here."],
            ["'I will help you.'", "She said (that) she would help me."],
            ["'Where do you live?'", "He asked where I lived."]
          ]
        },
        correct: ["She said she was tired.", "He asked where I lived.", "They said they would come."],
        incorrect: ["She said she is tired.", "He asked where did I live.", "They said they will come."]
      },
      listening: [
        {
          title: "What Did She Say?",
          accent: "american",
          transcript: "Maria said she was very happy with her new job. She told me she worked in a big company downtown. She also mentioned that she would start a new project next month. When I asked if she liked her boss, she said her boss was very supportive.",
          questions: [
            { q: "How does Maria feel about her job?", options: ["Unhappy", "Very happy", "Confused", "Bored"], answer: 1 },
            { q: "What did Maria mention about next month?", options: ["A vacation", "A new project", "Quitting her job", "A promotion"], answer: 1 },
            { q: "What did Maria say about her boss?", options: ["Her boss was strict", "Her boss was very supportive", "She has no boss", "Her boss was absent"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "The Interview",
          text: "During the interview, the candidate said he had five years of experience in marketing. He explained that he had worked for two different companies before. When asked about his weaknesses, he admitted that he sometimes worked too much. He also mentioned that he was excited about the opportunity. The interviewer said she would contact him soon.",
          questions: [
            { q: "What did the candidate say about his experience?", options: ["He had no experience", "He had five years of experience", "He had ten years", "He didn't say"], answer: 1 },
            { q: "What did he admit?", options: ["He was lazy", "He sometimes worked too much", "He hated marketing", "He was always late"], answer: 1 },
            { q: "What did the interviewer say?", options: ["She would reject him", "She would contact him soon", "She hired him immediately", "Nothing"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Reescreva 3 frases de discurso direto para discurso indireto.", minWords: 15, modelAnswer: "He said he was tired. She told me she liked the movie. They said they would arrive late." },
        { prompt: "Escreva um pequeno relato de uma conversa (real ou imaginária) usando discurso indireto.", minWords: 25, modelAnswer: "My friend told me she was moving to another city. She explained that she had found a new job there. She mentioned that she would miss her family." }
      ],
      speaking: [
        { phrase: "She said she was tired.", tip: "'Said' se pronuncia /sɛd/, não como 'paid'." },
        { phrase: "He asked where I lived.", tip: "Em perguntas indiretas, não há inversão: 'where I lived', não 'where did I live'." },
        { phrase: "They told me they would come.", tip: "'Told' já inclui a pessoa: 'told me', diferente de 'said to me'." },
        { phrase: "She admitted that she was wrong.", tip: "'Admitted' tem 3 sílabas: ad-MIT-ted." },
        { phrase: "He denied breaking the vase.", tip: "'Denied' rima com 'applied'." }
      ],
      exercises: {
        fillBlanks: [
          { text: "She said she ___ (be) tired. (discurso indireto de 'I am tired')", answer: "was" },
          { text: "He ___ (tell) me he was leaving.", answer: "told" },
          { text: "She asked ___ I was okay. (se)", answer: "if" },
          { text: "They said they ___ (will/come). (discurso indireto)", answer: "would come" },
          { text: "He ___ (admit) that he was wrong.", answer: "admitted" }
        ],
        matching: [
          { left: "Said", right: "Disse" },
          { left: "Told", right: "Contou" },
          { left: "Asked", right: "Perguntou" },
          { left: "Admitted", right: "Admitiu" },
          { left: "Denied", right: "Negou" },
          { left: "Explained", right: "Explicou" }
        ],
        ordering: [
          { words: ["was", "said", "She", "tired", "she"], answer: "She said she was tired" },
          { words: ["asked", "lived", "He", "where", "I"], answer: "He asked where I lived" },
          { words: ["would", "said", "They", "come", "they"], answer: "They said they would come" },
          { words: ["that", "admitted", "wrong", "He", "was", "he"], answer: "He admitted that he was wrong" },
          { words: ["breaking", "denied", "the", "She", "vase"], answer: "She denied breaking the vase" }
        ],
        translation: [
          { direction: "pt-en", text: "Ela disse que estava cansada.", answer: "She said she was tired." },
          { direction: "pt-en", text: "Ele perguntou onde eu morava.", answer: "He asked where I lived." },
          { direction: "pt-en", text: "Eles disseram que viriam.", answer: "They said they would come." },
          { direction: "en-pt", text: "He admitted that he was wrong.", answer: "Ele admitiu que estava errado." },
          { direction: "en-pt", text: "She denied breaking the vase.", answer: "Ela negou ter quebrado o vaso." },
          { direction: "en-pt", text: "She told me she was leaving.", answer: "Ela me contou que estava indo embora." }
        ],
        dictation: [
          { audioText: "She said she was tired.", answer: "She said she was tired." },
          { audioText: "He asked where I lived.", answer: "He asked where I lived." },
          { audioText: "They said they would come.", answer: "They said they would come." }
        ],
        dialogue: [
          {
            title: "Reporting What Happened",
            lines: [
              { speaker: "Julia", text: "What did the teacher say about the exam?" },
              { speaker: "user", prompt: "Diga que ela disse que seria difícil:", options: ["She said it would be difficult.", "She says it is difficult.", "She said it is difficult."], answer: 0 },
              { speaker: "Julia", text: "Oh no! Did she mention when it would be?" },
              { speaker: "user", prompt: "Diga que ela mencionou que seria na sexta-feira:", options: ["She mentioned it would be on Friday.", "She mention it is on Friday.", "She mentioned it is Friday."], answer: 0 },
              { speaker: "Julia", text: "Thanks for letting me know!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct reported speech for: 'I am tired.'", options: ["She said she is tired.", "She said she was tired.", "She said she tired.", "She says she was tired."], answer: 1, explanation: "No discurso indireto, o presente ('am') recua para o passado ('was')." },
        { q: "Choose the correct reported question for: 'Where do you live?'", options: ["He asked where do I live.", "He asked where I lived.", "He asked where I live.", "He asked me where did I live."], answer: 1, explanation: "Perguntas indiretas não têm inversão sujeito-verbo e o tempo verbal recua: 'where I lived'." },
        { type: "tf", q: "In reported speech, verb tenses usually move back one step.", answer: true, explanation: "É a regra geral do 'backshift': presente vira passado, passado vira past perfect, e assim por diante." },
        { q: "Complete: 'They said they ___ come.' (discurso indireto de 'will come')", options: ["will", "would", "are", "were"], answer: 1, explanation: "No discurso indireto, 'will' vira 'would' quando o verbo introdutório está no passado." },
        { type: "short", q: "Complete: 'She told ___ she was leaving.' (para mim)", answer: ["me"], explanation: "'Tell' exige um objeto direto para a pessoa ouvinte: 'told me', diferente de 'said to me'." },
        { q: "'Admitted' means:", options: ["Negou", "Admitiu", "Perguntou", "Explicou"], answer: 1, explanation: "'Admitted' é o passado de 'admit', que significa 'admitir' ou 'reconhecer'." },
        { type: "tf", q: "'Denied' means 'admitiu'.", answer: false, explanation: "'Denied' significa 'negou'; 'admitiu' é 'admitted'." },
        { q: "Choose the correct sentence.", options: ["He asked if I was okay.", "He asked if was I okay.", "He asked I was okay.", "He asked if I am okay."], answer: 0, explanation: "Perguntas indiretas de sim/não usam 'if' e mantêm a ordem normal sujeito-verbo: 'if I was okay'." },
        { q: "'Mentioned' means:", options: ["Escondeu", "Mencionou", "Negou", "Gritou"], answer: 1, explanation: "'Mentioned' é o passado de 'mention', que significa 'mencionar' ou 'citar de passagem'." },
        { type: "short", q: "Complete: 'He ___ (say) he worked here.' (passado)", answer: ["said"], explanation: "'Say' no passado é 'said' — irregular, pronunciado /sɛd/." },
        { q: "Choose the correct sentence.", options: ["She told me she was leaving.", "She told to me she was leaving.", "She said me she was leaving.", "She tell me she was leaving."], answer: 0, explanation: "'Tell' é seguido diretamente pelo objeto ('told me'), sem preposição 'to'." },
        { type: "tf", q: "Reported questions keep the question mark and subject-verb inversion.", answer: false, explanation: "Perguntas no discurso indireto perdem a inversão e o ponto de interrogação." }
      ]
    },
    {
      id: "b2-m3",
      title: "Condicionais Avançados",
      subtitle: "Terceiro condicional e condicionais mistos",
      objective: "Ao final, o aluno consegue formar o terceiro condicional e condicionais mistos para falar sobre situações hipotéticas do passado e suas consequências, reais ou imaginadas, no passado ou no presente.",
      prerequisites: ["b2-m2"],
      masteryEvidence: "Domínio demonstrado por pelo menos 60% de acerto no quiz, revisão da atividade de writing concluída, tentativa de speaking registrada e as 9 sessões do módulo completas.",
      lesson: {
        intro: "Vamos além dos condicionais básicos: o terceiro condicional fala sobre o passado que não aconteceu, e os condicionais mistos combinam tempos diferentes.",
        sections: [
          {
            heading: "Terceiro Condicional",
            text: "Usado para situações hipotéticas no passado que não aconteceram. Estrutura: If + past perfect, would have + particípio.",
            examples: [
              { en: "If I had studied, I would have passed the exam.", pt: "Se eu tivesse estudado, eu teria passado na prova." },
              { en: "If she had known, she would have come.", pt: "Se ela tivesse sabido, ela teria vindo." }
            ]
          },
          {
            heading: "Condicionais Mistos",
            text: "Combinam uma condição no passado com um resultado no presente (ou vice-versa).",
            examples: [
              { en: "If I had studied medicine, I would be a doctor now.", pt: "Se eu tivesse estudado medicina, eu seria médico agora." },
              { en: "If she were more organized, she wouldn't have missed the deadline.", pt: "Se ela fosse mais organizada, ela não teria perdido o prazo." }
            ]
          },
          {
            heading: "Comparando os Condicionais",
            text: "Zero (fatos/verdades), Primeiro (real/futuro), Segundo (hipotético/presente-futuro), Terceiro (hipotético/passado).",
            examples: [
              { en: "If you heat ice, it melts.", pt: "Se você aquece gelo, ele derrete. (zero)" },
              { en: "If it rains, I will stay home.", pt: "Se chover, eu vou ficar em casa. (primeiro)" }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "b2-m3-regret", word: "Regret", phonetic: "/rɪˈɡrɛt/", translation: "Arrependimento/Arrepender-se", example: "I regret not studying more.", exampleTranslation: "Eu me arrependo de não ter estudado mais." },
        { id: "b2-m3-deadline", word: "Deadline", phonetic: "/ˈdɛdlaɪn/", translation: "Prazo", example: "She missed the deadline.", exampleTranslation: "Ela perdeu o prazo." },
        { id: "b2-m3-opportunity", word: "Opportunity", phonetic: "/ˌɒpərˈtjuːnəti/", translation: "Oportunidade", example: "I missed a great opportunity.", exampleTranslation: "Eu perdi uma ótima oportunidade." },
        { id: "b2-m3-would-have", word: "Would have", phonetic: "/wʊd hæv/", translation: "Teria (feito algo)", example: "I would have helped you.", exampleTranslation: "Eu teria te ajudado." },
        { id: "b2-m3-had-known", word: "Had known", phonetic: "/hæd noʊn/", translation: "Tivesse sabido", example: "If I had known, I would have come.", exampleTranslation: "Se eu tivesse sabido, eu teria vindo." },
        { id: "b2-m3-mistake", word: "Mistake", phonetic: "/mɪˈsteɪk/", translation: "Erro", example: "It was a big mistake.", exampleTranslation: "Foi um grande erro." },
        { id: "b2-m3-consequence", word: "Consequence", phonetic: "/ˈkɒnsɪkwəns/", translation: "Consequência", example: "There are consequences for our choices.", exampleTranslation: "Há consequências para nossas escolhas." },
        { id: "b2-m3-prevent", word: "Prevent", phonetic: "/prɪˈvɛnt/", translation: "Prevenir/Evitar", example: "We could have prevented this.", exampleTranslation: "Nós poderíamos ter evitado isso." },
        { id: "b2-m3-realize", word: "Realize", phonetic: "/ˈriːəlaɪz/", translation: "Perceber/Dar-se conta", example: "I didn't realize it was so late.", exampleTranslation: "Eu não percebi que já era tão tarde." },
        { id: "b2-m3-organized", word: "Organized", phonetic: "/ˈɔːrɡənaɪzd/", translation: "Organizado(a)", example: "If she were more organized, this wouldn't have happened.", exampleTranslation: "Se ela fosse mais organizada, isso não teria acontecido." }
      ],
      grammar: {
        title: "Terceiro Condicional (If + Past Perfect, Would Have + Particípio)",
        explanation: "Fala sobre o passado imaginário — coisas que não aconteceram, geralmente com um tom de arrependimento ou reflexão.",
        table: {
          headers: ["Oração com If (past perfect)", "Resultado (would have + particípio)"],
          rows: [
            ["If I had studied,", "I would have passed."],
            ["If she had known,", "she would have come."],
            ["If we had left earlier,", "we wouldn't have missed the train."]
          ]
        },
        correct: ["If I had studied, I would have passed.", "If she had known, she would have come.", "I wouldn't have done that if I had known."],
        incorrect: ["If I studied, I would have passed.", "If she had known, she would come.", "I wouldn't have done that if I knew."]
      },
      listening: [
        {
          title: "Regrets and Reflections",
          accent: "british",
          transcript: "If I had known how difficult the exam would be, I would have studied more. I regret not asking my teacher for help. If I had asked, she would have explained the difficult parts. Now I understand that if I had managed my time better, I wouldn't have failed.",
          questions: [
            { q: "What does the speaker regret?", options: ["Studying too much", "Not asking the teacher for help", "Taking the exam", "Passing the exam"], answer: 1 },
            { q: "What would have happened if the speaker had asked for help?", options: ["Nothing would change", "The teacher would have explained the difficult parts", "The exam would be cancelled", "They would have failed anyway"], answer: 1 },
            { q: "What does the speaker realize now?", options: ["The exam was easy", "Better time management would have helped", "Studying doesn't matter", "They will retake the exam"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "A Life-Changing Decision",
          text: "If I hadn't moved to another country ten years ago, my life would be very different today. If I had stayed in my hometown, I probably would have taken over my family's business. Instead, I decided to take a risk. If I hadn't taken that opportunity, I wouldn't have met my wife, learned a new language, or built the career I have now. Looking back, I don't regret it at all.",
          questions: [
            { q: "What did the writer do ten years ago?", options: ["Started a business", "Moved to another country", "Got married", "Learned to cook"], answer: 1 },
            { q: "What would have happened if the writer had stayed?", options: ["They would have traveled more", "They probably would have taken over the family business", "Nothing would change", "They would have become a teacher"], answer: 1 },
            { q: "How does the writer feel about the decision now?", options: ["Full of regret", "They don't regret it at all", "Confused", "Angry"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 3 frases no terceiro condicional sobre algo que você faria diferente no passado.", minWords: 20, modelAnswer: "If I had studied more, I would have gotten a better grade. If I had saved money, I would have traveled more. If I had known, I would have helped." },
        { prompt: "Escreva sobre uma decisão importante da sua vida usando um condicional misto (passado + presente).", minWords: 20, modelAnswer: "If I hadn't moved to this city, I wouldn't have this job now. If I had chosen differently, my life would be different today." }
      ],
      speaking: [
        { phrase: "If I had studied, I would have passed.", tip: "'Would have' geralmente é contraído para 'would've', soando quase como 'would of' na fala." },
        { phrase: "I regret not asking for help.", tip: "'Regret' tem acento na segunda sílaba: re-GRET." },
        { phrase: "If she had known, she would have come.", tip: "'Had known' é o past perfect de 'know'." },
        { phrase: "We could have prevented this.", tip: "'Could have' também é reduzido: 'could've'." },
        { phrase: "I didn't realize it was so late.", tip: "'Realize' tem 3 sílabas: RE-a-lize." }
      ],
      exercises: {
        fillBlanks: [
          { text: "If I ___ (study), I would have passed.", answer: "had studied" },
          { text: "If she had known, she ___ (would/come).", answer: "would have come" },
          { text: "We ___ (could/prevent) this if we had tried.", answer: "could have prevented" },
          { text: "If I ___ (not/move), my life would be different.", answer: "hadn't moved" },
          { text: "I ___ (regret) not asking for help.", answer: "regret" }
        ],
        matching: [
          { left: "Regret", right: "Arrependimento" },
          { left: "Deadline", right: "Prazo" },
          { left: "Mistake", right: "Erro" },
          { left: "Opportunity", right: "Oportunidade" },
          { left: "Consequence", right: "Consequência" },
          { left: "Prevent", right: "Prevenir/Evitar" }
        ],
        ordering: [
          { words: ["studied", "had", "I", "If", "passed", "would", "have", "I"], answer: "If I had studied I would have passed" },
          { words: ["known", "had", "she", "If", "come", "would", "have", "she"], answer: "If she had known she would have come" },
          { words: ["prevented", "have", "We", "this", "could"], answer: "We could have prevented this" },
          { words: ["moved", "hadn't", "If", "I", "different", "would", "life", "my", "be"], answer: "If I hadn't moved my life would be different" },
          { words: ["realize", "late", "didn't", "I", "was", "it", "so"], answer: "I didn't realize it was so late" }
        ],
        translation: [
          { direction: "pt-en", text: "Se eu tivesse estudado, eu teria passado.", answer: "If I had studied, I would have passed." },
          { direction: "pt-en", text: "Eu me arrependo de não ter perguntado.", answer: "I regret not asking." },
          { direction: "pt-en", text: "Nós poderíamos ter evitado isso.", answer: "We could have prevented this." },
          { direction: "en-pt", text: "If she had known, she would have come.", answer: "Se ela tivesse sabido, ela teria vindo." },
          { direction: "en-pt", text: "If I hadn't moved, my life would be different.", answer: "Se eu não tivesse me mudado, minha vida seria diferente." },
          { direction: "en-pt", text: "I didn't realize it was so late.", answer: "Eu não percebi que já era tão tarde." }
        ],
        dictation: [
          { audioText: "If I had studied, I would have passed.", answer: "If I had studied, I would have passed." },
          { audioText: "I regret not asking for help.", answer: "I regret not asking for help." },
          { audioText: "We could have prevented this.", answer: "We could have prevented this." }
        ],
        dialogue: [
          {
            title: "Looking Back",
            lines: [
              { speaker: "Nina", text: "Do you regret anything about your career choice?" },
              { speaker: "user", prompt: "Diga que se tivesse estudado medicina, seria médico agora:", options: ["If I had studied medicine, I would be a doctor now.", "If I study medicine, I am a doctor.", "If I studied medicine, I will be a doctor."], answer: 0 },
              { speaker: "Nina", text: "Interesting! Would you change anything?" },
              { speaker: "user", prompt: "Diga que não se arrepende de nada:", options: ["I don't regret anything.", "I regret everything.", "I would regret it."], answer: 0 },
              { speaker: "Nina", text: "That's a great attitude to have!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct third conditional sentence.", options: ["If I studied, I would have passed.", "If I had studied, I would have passed.", "If I had studied, I would pass.", "If I have studied, I would have passed."], answer: 1, explanation: "A estrutura correta é 'If + past perfect, would have + particípio': 'If I had studied, I would have passed.'" },
        { q: "Complete: 'If she had known, she ___ have come.'", options: ["will", "would", "was", "is"], answer: 1, explanation: "O resultado do terceiro condicional usa 'would have + particípio', por isso 'would'." },
        { type: "tf", q: "The third conditional talks about hypothetical situations in the past.", answer: true, explanation: "O terceiro condicional descreve situações imaginárias que não aconteceram no passado, muitas vezes com arrependimento." },
        { q: "Complete: 'We ___ (could/prevent) this if we had tried.'", options: ["could prevent", "could have prevented", "can prevent", "could preventing"], answer: 1, explanation: "Com uma condição no past perfect ('had tried'), o resultado usa 'could have + particípio'." },
        { type: "short", q: "Complete: 'I ___ studying more.' (arrependo-me de)", answer: ["regret"], explanation: "'Regret' significa 'arrepender-se de' e é seguido de gerúndio quando fala de algo já feito ou não feito." },
        { q: "'Deadline' means:", options: ["Prazo", "Oportunidade", "Erro", "Consequência"], answer: 0, explanation: "'Deadline' é o prazo final para entregar ou concluir algo." },
        { type: "tf", q: "Mixed conditionals can combine a past condition with a present result.", answer: true, explanation: "Condicionais mistos misturam tempos, como uma condição no passado ('If I had studied medicine') com um resultado no presente ('I would be a doctor now')." },
        { q: "Choose the correct sentence.", options: ["If I hadn't moved, my life would be different.", "If I didn't move, my life would be different.", "If I hadn't moved, my life will be different.", "If I haven't moved, my life would be different."], answer: 0, explanation: "Esse é um condicional misto: condição no passado ('hadn't moved') com resultado no presente ('would be different')." },
        { q: "'Opportunity' means:", options: ["Erro", "Oportunidade", "Prazo", "Consequência"], answer: 1, explanation: "'Opportunity' significa 'oportunidade', uma chance favorável de fazer algo." },
        { type: "short", q: "Complete: 'I didn't ___ it was so late.' (perceber)", answer: ["realize"], explanation: "'Realize' significa 'perceber' ou 'dar-se conta de algo'." },
        { q: "Choose the correct sentence.", options: ["We could have prevented this.", "We could prevented this.", "We could have prevent this.", "We could having prevented this."], answer: 0, explanation: "'Could have + particípio' expressa uma possibilidade não realizada no passado: 'could have prevented'." },
        { type: "tf", q: "The third conditional uses 'will' in the main clause.", answer: false, explanation: "O terceiro condicional usa 'would have + particípio', não 'will'." }
      ]
    },
    {
      id: "b2-m4",
      title: "Mundo do Trabalho",
      subtitle: "Vocabulário profissional, entrevistas de emprego e modais de obrigação",
      objective: "Ao final, o aluno consegue usar vocabulário do mundo do trabalho e os modais must, have to e should para expressar obrigação e dar conselhos em contextos profissionais, como entrevistas de emprego.",
      prerequisites: ["b2-m3"],
      masteryEvidence: "Domínio demonstrado por pelo menos 60% de acerto no quiz, revisão da atividade de writing concluída, tentativa de speaking registrada e as 9 sessões do módulo completas.",
      lesson: {
        intro: "Vamos explorar o vocabulário do mundo do trabalho, como se sair bem em uma entrevista de emprego, e os modais de obrigação: must, have to e should.",
        sections: [
          {
            heading: "Must vs. Have to",
            text: "'Must' expressa obrigação pessoal/forte opinião do falante; 'have to' expressa obrigação externa (regras, leis).",
            examples: [
              { en: "I must finish this report today.", pt: "Eu preciso terminar este relatório hoje. (urgência pessoal)" },
              { en: "You have to wear a uniform at this job.", pt: "Você tem que usar uniforme neste trabalho. (regra da empresa)" }
            ]
          },
          {
            heading: "Should para Conselhos",
            text: "Usamos 'should' para dar conselhos ou recomendações, não obrigações.",
            examples: [
              { en: "You should prepare well for the interview.", pt: "Você deveria se preparar bem para a entrevista." },
              { en: "She should ask for a raise.", pt: "Ela deveria pedir um aumento." }
            ]
          },
          {
            heading: "Vocabulário de Entrevista de Emprego",
            text: "Palavras-chave para falar sobre experiência profissional e entrevistas.",
            examples: [
              { en: "Tell me about your work experience.", pt: "Fale-me sobre sua experiência profissional." },
              { en: "What are your strengths and weaknesses?", pt: "Quais são seus pontos fortes e fracos?" }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "b2-m4-resume", word: "Résumé", phonetic: "/ˈrɛzʊmeɪ/", translation: "Currículo", example: "Please send me your résumé.", exampleTranslation: "Por favor, me envie seu currículo." },
        { id: "b2-m4-interview", word: "Interview", phonetic: "/ˈɪntərvjuː/", translation: "Entrevista", example: "I have a job interview tomorrow.", exampleTranslation: "Eu tenho uma entrevista de emprego amanhã." },
        { id: "b2-m4-skill", word: "Skill", phonetic: "/skɪl/", translation: "Habilidade", example: "Communication is an important skill.", exampleTranslation: "Comunicação é uma habilidade importante." },
        { id: "b2-m4-deadline", word: "Deadline", phonetic: "/ˈdɛdlaɪn/", translation: "Prazo", example: "We must meet the deadline.", exampleTranslation: "Nós precisamos cumprir o prazo." },
        { id: "b2-m4-colleague", word: "Colleague", phonetic: "/ˈkɒliːɡ/", translation: "Colega de trabalho", example: "My colleague helped me with the project.", exampleTranslation: "Meu colega me ajudou com o projeto." },
        { id: "b2-m4-salary", word: "Salary", phonetic: "/ˈsæləri/", translation: "Salário", example: "The salary is negotiable.", exampleTranslation: "O salário é negociável." },
        { id: "b2-m4-promotion", word: "Promotion", phonetic: "/prəˈmoʊʃən/", translation: "Promoção", example: "She got a promotion last month.", exampleTranslation: "Ela conseguiu uma promoção mês passado." },
        { id: "b2-m4-apply", word: "Apply", phonetic: "/əˈplaɪ/", translation: "Candidatar-se", example: "I applied for the job online.", exampleTranslation: "Eu me candidatei para a vaga online." },
        { id: "b2-m4-hire", word: "Hire", phonetic: "/ˈhaɪər/", translation: "Contratar", example: "The company decided to hire her.", exampleTranslation: "A empresa decidiu contratá-la." },
        { id: "b2-m4-strength", word: "Strength", phonetic: "/strɛŋkθ/", translation: "Ponto forte", example: "My biggest strength is teamwork.", exampleTranslation: "Meu maior ponto forte é trabalho em equipe." }
      ],
      grammar: {
        title: "Must, Have to e Should",
        explanation: "'Must' e 'have to' expressam obrigação (com nuances diferentes); 'should' expressa conselho, não obrigação.",
        table: {
          headers: ["Modal", "Uso", "Exemplo"],
          rows: [
            ["Must", "Obrigação pessoal/forte", "I must finish this today."],
            ["Have to", "Obrigação externa (regra)", "You have to arrive by 9 a.m."],
            ["Should", "Conselho/recomendação", "You should prepare for the interview."],
            ["Don't have to", "Ausência de obrigação", "You don't have to wear a suit."]
          ]
        },
        correct: ["You have to submit the report by Friday.", "You should practice more before the interview.", "I don't have to work on Sundays."],
        incorrect: ["You have submit the report by Friday.", "You should to practice more before the interview.", "I don't must work on Sundays."]
      },
      listening: [
        {
          title: "Job Interview Tips",
          accent: "american",
          transcript: "If you want to succeed in a job interview, you should prepare well. You have to research the company beforehand. You must also bring a copy of your résumé. You don't have to memorize every answer, but you should practice common questions. And remember: you should always arrive on time!",
          questions: [
            { q: "What should you research before an interview?", options: ["Nothing", "The company", "Your competitors", "The weather"], answer: 1 },
            { q: "What must you bring?", options: ["A gift", "A copy of your résumé", "Money", "Nothing"], answer: 1 },
            { q: "Do you have to memorize every answer?", options: ["Yes, absolutely", "No, but you should practice", "It doesn't matter", "Only for big companies"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "My First Job Interview",
          text: "Yesterday, I had my first job interview. I was very nervous, but I remembered that I should stay calm and be myself. The interviewer asked about my skills and experience. I explained that I have strong communication skills and that I always meet deadlines. She said the company was looking for someone reliable. At the end, she told me they would contact me about the salary and start date.",
          questions: [
            { q: "How did the writer feel?", options: ["Confident", "Very nervous", "Angry", "Bored"], answer: 1 },
            { q: "What skill did the writer mention?", options: ["Cooking", "Communication skills", "Driving", "Painting"], answer: 1 },
            { q: "What is the company looking for?", options: ["Someone reliable", "Someone rich", "Someone famous", "Someone young"], answer: 0 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 3 conselhos para alguém se preparar para uma entrevista de emprego usando 'should'.", minWords: 20, modelAnswer: "You should research the company thoroughly before the interview. You should also practice answering common questions with a friend. Finally, you should arrive at least ten minutes early to make a good impression." },
        { prompt: "Descreva suas próprias habilidades e experiência profissional (reais ou imaginárias).", minWords: 20, modelAnswer: "I have three years of experience in marketing. My biggest strength is teamwork. I always meet deadlines and communicate clearly with my colleagues." }
      ],
      speaking: [
        { phrase: "You should prepare well for the interview.", tip: "'Should' tem som reduzido /ʃʊd/, sem enfatizar muito." },
        { phrase: "I have to submit this report by Friday.", tip: "'Have to' na fala rápida soa como 'hafta'." },
        { phrase: "What are your strengths and weaknesses?", tip: "'Strengths' é difícil de pronunciar — /strɛŋkθs/, com vários sons consonantais juntos." },
        { phrase: "I applied for the job online.", tip: "'Applied' tem acento na segunda sílaba: ap-PLIED." },
        { phrase: "She got a promotion last month.", tip: "'Promotion' tem acento na segunda sílaba: pro-MO-tion." }
      ],
      exercises: {
        fillBlanks: [
          { text: "You ___ (should) prepare for the interview.", answer: "should" },
          { text: "I ___ (have to) finish this report today.", answer: "have to" },
          { text: "You ___ (don't have to) wear a suit.", answer: "don't have to" },
          { text: "She ___ (apply) for the job last week.", answer: "applied" },
          { text: "My biggest ___ is teamwork. (ponto forte)", answer: "strength" }
        ],
        matching: [
          { left: "Résumé", right: "Currículo" },
          { left: "Interview", right: "Entrevista" },
          { left: "Skill", right: "Habilidade" },
          { left: "Salary", right: "Salário" },
          { left: "Colleague", right: "Colega de trabalho" },
          { left: "Promotion", right: "Promoção" }
        ],
        ordering: [
          { words: ["should", "interview", "the", "for", "prepare", "You"], answer: "You should prepare for the interview" },
          { words: ["today", "finish", "have", "report", "this", "to", "I"], answer: "I have to finish this report today" },
          { words: ["a", "have", "to", "suit", "don't", "You", "wear"], answer: "You don't have to wear a suit" },
          { words: ["job", "for", "applied", "the", "She"], answer: "She applied for the job" },
          { words: ["strength", "is", "teamwork", "My", "biggest"], answer: "My biggest strength is teamwork" }
        ],
        translation: [
          { direction: "pt-en", text: "Você deveria se preparar para a entrevista.", answer: "You should prepare for the interview." },
          { direction: "pt-en", text: "Eu tenho que terminar este relatório hoje.", answer: "I have to finish this report today." },
          { direction: "pt-en", text: "Meu maior ponto forte é trabalho em equipe.", answer: "My biggest strength is teamwork." },
          { direction: "en-pt", text: "You don't have to wear a suit.", answer: "Você não precisa usar terno." },
          { direction: "en-pt", text: "She got a promotion last month.", answer: "Ela conseguiu uma promoção mês passado." },
          { direction: "en-pt", text: "The salary is negotiable.", answer: "O salário é negociável." }
        ],
        dictation: [
          { audioText: "You should prepare for the interview.", answer: "You should prepare for the interview." },
          { audioText: "I have to finish this report today.", answer: "I have to finish this report today." },
          { audioText: "My biggest strength is teamwork.", answer: "My biggest strength is teamwork." }
        ],
        dialogue: [
          {
            title: "Job Interview",
            lines: [
              { speaker: "Interviewer", text: "Tell me about your work experience." },
              { speaker: "user", prompt: "Diga que você tem 3 anos de experiência em marketing:", options: ["I have three years of experience in marketing.", "I have to work in marketing.", "I should work in marketing."], answer: 0 },
              { speaker: "Interviewer", text: "Great! What is your biggest strength?" },
              { speaker: "user", prompt: "Diga que é trabalho em equipe:", options: ["My biggest strength is teamwork.", "My biggest weakness is teamwork.", "I don't have strengths."], answer: 0 },
              { speaker: "Interviewer", text: "Thank you, we'll be in touch!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the sentence that expresses advice, not obligation.", options: ["You must arrive on time.", "You have to arrive on time.", "You should arrive on time.", "You had to arrive on time."], answer: 2, explanation: "'Should' expressa conselho ou recomendação, enquanto 'must' e 'have to' expressam obrigação." },
        { q: "Complete: 'You ___ wear a uniform at this job.' (regra da empresa)", options: ["should", "must", "have to", "would"], answer: 2, explanation: "'Have to' expressa uma obrigação externa, imposta por uma regra da empresa, não uma opinião pessoal." },
        { type: "tf", q: "'Should' expresses strong obligation, like a law.", answer: false, explanation: "'Should' expressa conselho ou recomendação, não obrigação forte." },
        { q: "'Résumé' means:", options: ["Entrevista", "Currículo", "Salário", "Promoção"], answer: 1, explanation: "'Résumé' significa 'currículo', o documento com o histórico profissional de alguém." },
        { type: "short", q: "Complete: 'My biggest ___ is teamwork.' (ponto forte)", answer: ["strength"], explanation: "'Strength' significa 'ponto forte' ou 'força', usado em entrevistas para falar de qualidades." },
        { q: "'Colleague' means:", options: ["Chefe", "Colega de trabalho", "Cliente", "Candidato"], answer: 1, explanation: "'Colleague' significa 'colega de trabalho', alguém que trabalha na mesma empresa." },
        { type: "tf", q: "'Don't have to' means the same as 'must not'.", answer: false, explanation: "'Don't have to' significa que não há obrigação (é opcional); 'must not' significa proibição." },
        { q: "Choose the correct sentence.", options: ["You have finish the report.", "You have to finish the report.", "You has to finish the report.", "You having to finish the report."], answer: 1, explanation: "A forma correta do modal é 'have to + verbo no infinitivo sem to': 'have to finish'." },
        { q: "'Promotion' means:", options: ["Demissão", "Promoção", "Entrevista", "Currículo"], answer: 1, explanation: "'Promotion' significa 'promoção', uma subida de cargo ou responsabilidade no trabalho." },
        { type: "short", q: "Complete: 'I ___ for the job online.' (candidatei-me)", answer: ["applied"], explanation: "'Apply' no passado é 'applied', usado com a preposição 'for' para indicar a vaga." },
        { q: "Choose the correct sentence.", options: ["She should to practice more.", "She should practices more.", "She should practice more.", "She shoulds practice more."], answer: 2, explanation: "Modais como 'should' são seguidos de verbo no infinitivo sem 'to' e sem flexão: 'should practice'." },
        { type: "tf", q: "'Salary' means 'entrevista'.", answer: false, explanation: "'Salary' significa 'salário'; 'entrevista' é 'interview'." }
      ]
    },
    {
      id: "b2-m5",
      title: "Saúde e Tecnologia",
      subtitle: "Vocabulário de saúde e tecnologia, leitura de textos jornalísticos",
      objective: "Ao final, o aluno consegue compreender textos jornalísticos sobre saúde e tecnologia, reconhecendo o uso combinado de voz passiva e discurso indireto, além de empregar vocabulário da área.",
      prerequisites: ["b2-m4", "b2-m1", "b2-m2"],
      masteryEvidence: "Domínio demonstrado por pelo menos 60% de acerto no quiz, revisão da atividade de writing concluída, tentativa de speaking registrada e as 9 sessões do módulo completas.",
      lesson: {
        intro: "Neste último módulo do B2, vamos expandir seu vocabulário sobre saúde e tecnologia, e praticar a leitura de textos no estilo jornalístico.",
        sections: [
          {
            heading: "Vocabulário de Saúde",
            text: "Palavras essenciais para falar sobre sintomas, tratamentos e bem-estar.",
            examples: [
              { en: "I have a headache and a sore throat.", pt: "Eu estou com dor de cabeça e dor de garganta." },
              { en: "The doctor prescribed some medication.", pt: "O médico prescreveu alguns remédios." }
            ]
          },
          {
            heading: "Vocabulário de Tecnologia",
            text: "Termos comuns sobre dispositivos, internet e inovação.",
            examples: [
              { en: "Artificial intelligence is changing the world.", pt: "A inteligência artificial está mudando o mundo." },
              { en: "I need to update my software.", pt: "Eu preciso atualizar meu software." }
            ]
          },
          {
            heading: "Lendo Textos Jornalísticos",
            text: "Textos de notícias costumam usar voz passiva, vocabulário formal e frases mais longas e complexas do que a conversação do dia a dia.",
            examples: [
              { en: "A new vaccine has been developed by researchers.", pt: "Uma nova vacina foi desenvolvida por pesquisadores." },
              { en: "Experts warn that technology use is increasing rapidly.", pt: "Especialistas alertam que o uso de tecnologia está aumentando rapidamente." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "b2-m5-symptom", word: "Symptom", phonetic: "/ˈsɪmptəm/", translation: "Sintoma", example: "Fever is a common symptom.", exampleTranslation: "Febre é um sintoma comum." },
        { id: "b2-m5-treatment", word: "Treatment", phonetic: "/ˈtriːtmənt/", translation: "Tratamento", example: "The treatment lasted two weeks.", exampleTranslation: "O tratamento durou duas semanas." },
        { id: "b2-m5-prescribe", word: "Prescribe", phonetic: "/prɪˈskraɪb/", translation: "Prescrever", example: "The doctor prescribed antibiotics.", exampleTranslation: "O médico prescreveu antibióticos." },
        { id: "b2-m5-recover", word: "Recover", phonetic: "/rɪˈkʌvər/", translation: "Recuperar-se", example: "She recovered quickly from the flu.", exampleTranslation: "Ela se recuperou rapidamente da gripe." },
        { id: "b2-m5-well-being", word: "Well-being", phonetic: "/wɛl ˈbiːɪŋ/", translation: "Bem-estar", example: "Exercise improves mental well-being.", exampleTranslation: "Exercício melhora o bem-estar mental." },
        { id: "b2-m5-device", word: "Device", phonetic: "/dɪˈvaɪs/", translation: "Dispositivo", example: "This device connects to your phone.", exampleTranslation: "Este dispositivo se conecta ao seu celular." },
        { id: "b2-m5-artificial-intelligence", word: "Artificial intelligence", phonetic: "/ˌɑːrtɪˈfɪʃəl ɪnˈtɛlɪdʒəns/", translation: "Inteligência artificial", example: "Artificial intelligence is everywhere now.", exampleTranslation: "A inteligência artificial está em todo lugar agora." },
        { id: "b2-m5-update", word: "Update", phonetic: "/ʌpˈdeɪt/", translation: "Atualizar/Atualização", example: "I need to update my phone.", exampleTranslation: "Eu preciso atualizar meu telefone." },
        { id: "b2-m5-innovation", word: "Innovation", phonetic: "/ˌɪnəˈveɪʃən/", translation: "Inovação", example: "This company is known for innovation.", exampleTranslation: "Esta empresa é conhecida por inovação." },
        { id: "b2-m5-researcher", word: "Researcher", phonetic: "/rɪˈsɜːrtʃər/", translation: "Pesquisador(a)", example: "Researchers developed a new vaccine.", exampleTranslation: "Pesquisadores desenvolveram uma nova vacina." }
      ],
      grammar: {
        title: "Revisão: Passiva + Discurso Indireto em Textos Formais",
        explanation: "Textos jornalísticos combinam voz passiva e discurso indireto para relatar informações de forma objetiva e formal.",
        table: {
          headers: ["Recurso", "Exemplo em notícia"],
          rows: [
            ["Voz passiva", "A new law was announced yesterday."],
            ["Discurso indireto", "Officials said the law would take effect in June."],
            ["Vocabulário formal", "Experts warn that the situation is concerning."]
          ]
        },
        correct: ["A new vaccine has been developed.", "Experts said the results were promising.", "The technology is being tested worldwide."],
        incorrect: ["A new vaccine has developed.", "Experts said the results are promising.", "The technology is testing worldwide."]
      },
      listening: [
        {
          title: "Health News Report",
          accent: "british",
          transcript: "Researchers have announced that a new treatment has been developed for common colds. According to the study, patients who used the treatment recovered twice as fast. Doctors said the results were very promising, but more research is needed before the treatment becomes widely available.",
          questions: [
            { q: "What was developed?", options: ["A new phone", "A new treatment for colds", "A new vaccine for flu", "A new hospital"], answer: 1 },
            { q: "How did patients who used the treatment do?", options: ["They got worse", "They recovered twice as fast", "No difference", "They recovered slower"], answer: 1 },
            { q: "What do doctors say is needed?", options: ["Nothing else", "More research", "More patients", "More money only"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "Technology and Well-Being",
          text: "A recent study has shown that too much screen time can negatively affect mental well-being. Researchers found that people who used devices for more than six hours a day reported higher stress levels. Experts recommend taking regular breaks and limiting notifications. However, technology also has benefits — many health apps have been developed to help people track their symptoms and improve their overall health.",
          questions: [
            { q: "What did the study find about screen time?", options: ["It has no effect", "It can negatively affect mental well-being", "It always improves health", "It's not related to stress"], answer: 1 },
            { q: "What do experts recommend?", options: ["Using devices more", "Taking regular breaks", "Buying new devices", "Ignoring notifications completely"], answer: 1 },
            { q: "What benefit of technology is mentioned?", options: ["Health apps that track symptoms", "Faster internet", "Cheaper phones", "Nothing"], answer: 0 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva uma pequena notícia (estilo jornalístico) sobre uma descoberta na área de saúde ou tecnologia, usando voz passiva.", minWords: 25, modelAnswer: "A new device has been developed to help patients monitor their health. Researchers said the device could change how doctors treat common illnesses. Experts believe it will be available next year." },
        { prompt: "Descreva 3 sintomas comuns e o tratamento recomendado para eles.", minWords: 15, modelAnswer: "A headache can be treated with rest and water. A sore throat often improves with warm tea. A fever usually requires medication and rest." }
      ],
      speaking: [
        { phrase: "The doctor prescribed some medication.", tip: "'Prescribed' tem acento na segunda sílaba: pre-SCRIBED." },
        { phrase: "Artificial intelligence is changing the world.", tip: "'Artificial' tem 4 sílabas: ar-ti-FI-cial." },
        { phrase: "I need to update my software.", tip: "'Update' como verbo tem acento na segunda sílaba: up-DATE." },
        { phrase: "She recovered quickly from the flu.", tip: "'Recovered' tem acento na segunda sílaba: re-COV-ered." },
        { phrase: "Researchers developed a new vaccine.", tip: "'Researchers' tem acento na segunda sílaba: re-SEARCH-ers." }
      ],
      exercises: {
        fillBlanks: [
          { text: "The doctor ___ (prescribe) some medication.", answer: "prescribed" },
          { text: "She ___ (recover) quickly from the flu.", answer: "recovered" },
          { text: "I need to ___ my software. (atualizar)", answer: "update" },
          { text: "___ ___ is changing the world. (inteligência artificial)", answer: "Artificial intelligence" },
          { text: "A new vaccine ___ (develop) by researchers. (voz passiva)", answer: "was developed" }
        ],
        matching: [
          { left: "Symptom", right: "Sintoma" },
          { left: "Treatment", right: "Tratamento" },
          { left: "Device", right: "Dispositivo" },
          { left: "Update", right: "Atualizar" },
          { left: "Innovation", right: "Inovação" },
          { left: "Researcher", right: "Pesquisador(a)" }
        ],
        ordering: [
          { words: ["prescribed", "doctor", "The", "medication", "some"], answer: "The doctor prescribed some medication" },
          { words: ["recovered", "She", "the", "from", "flu", "quickly"], answer: "She recovered quickly from the flu" },
          { words: ["update", "need", "my", "to", "software", "I"], answer: "I need to update my software" },
          { words: ["changing", "is", "intelligence", "Artificial", "world", "the"], answer: "Artificial intelligence is changing the world" },
          { words: ["developed", "vaccine", "was", "A", "new"], answer: "A new vaccine was developed" }
        ],
        translation: [
          { direction: "pt-en", text: "O médico prescreveu alguns remédios.", answer: "The doctor prescribed some medication." },
          { direction: "pt-en", text: "Ela se recuperou rapidamente da gripe.", answer: "She recovered quickly from the flu." },
          { direction: "pt-en", text: "Eu preciso atualizar meu software.", answer: "I need to update my software." },
          { direction: "en-pt", text: "Artificial intelligence is changing the world.", answer: "A inteligência artificial está mudando o mundo." },
          { direction: "en-pt", text: "A new vaccine has been developed by researchers.", answer: "Uma nova vacina foi desenvolvida por pesquisadores." },
          { direction: "en-pt", text: "Experts recommend taking regular breaks.", answer: "Especialistas recomendam fazer pausas regulares." }
        ],
        dictation: [
          { audioText: "The doctor prescribed some medication.", answer: "The doctor prescribed some medication." },
          { audioText: "I need to update my software.", answer: "I need to update my software." },
          { audioText: "A new vaccine was developed.", answer: "A new vaccine was developed." }
        ],
        dialogue: [
          {
            title: "At the Doctor's Office",
            lines: [
              { speaker: "Doctor", text: "What symptoms are you experiencing?" },
              { speaker: "user", prompt: "Diga que você está com dor de cabeça e febre:", options: ["I have a headache and a fever.", "I have a new phone.", "I updated my software."], answer: 0 },
              { speaker: "Doctor", text: "I see. I'm going to prescribe some medication." },
              { speaker: "user", prompt: "Pergunte quanto tempo levará para se recuperar:", options: ["How long will it take to recover?", "How much does the device cost?", "What is artificial intelligence?"], answer: 0 },
              { speaker: "Doctor", text: "You should recover within a week." }
            ]
          }
        ]
      },
      quiz: [
        { q: "'Symptom' means:", options: ["Tratamento", "Sintoma", "Dispositivo", "Pesquisador"], answer: 1, explanation: "'Symptom' significa 'sintoma', um sinal de que algo está errado com a saúde." },
        { q: "Choose the correct sentence.", options: ["The doctor prescribe medication.", "The doctor prescribed medication.", "The doctor prescribing medication.", "The doctor prescribes medication yesterday."], answer: 1, explanation: "A ação já aconteceu, então o verbo fica no passado simples: 'prescribed'." },
        { type: "tf", q: "'Recover' means 'adoecer'.", answer: false, explanation: "'Recover' significa 'recuperar-se'; 'adoecer' é 'get sick'." },
        { q: "'Device' means:", options: ["Doença", "Dispositivo", "Tratamento", "Sintoma"], answer: 1, explanation: "'Device' significa 'dispositivo', um aparelho ou equipamento eletrônico." },
        { type: "short", q: "Complete: 'I need to ___ my software.' (atualizar)", answer: ["update"], explanation: "'Update' significa 'atualizar', comum no vocabulário de tecnologia." },
        { q: "Choose the correct passive sentence for a news report.", options: ["Researchers develop a new vaccine.", "A new vaccine has been developed by researchers.", "A new vaccine develop by researchers.", "Researchers has developed a new vaccine."], answer: 1, explanation: "Notícias costumam usar a passiva no present perfect ('has been developed') para destacar o resultado, não quem fez." },
        { type: "tf", q: "News articles often use passive voice and formal vocabulary.", answer: true, explanation: "Textos jornalísticos preferem a voz passiva e um registro mais formal para soar objetivos." },
        { q: "'Innovation' means:", options: ["Doença", "Inovação", "Tratamento", "Sintoma"], answer: 1, explanation: "'Innovation' significa 'inovação', a criação de algo novo." },
        { q: "Choose the correct sentence.", options: ["Experts recommend to take breaks.", "Experts recommend taking breaks.", "Experts recommends take breaks.", "Experts recommend takes breaks."], answer: 1, explanation: "'Recommend' é seguido por gerúndio, não infinitivo: 'recommend taking'." },
        { type: "short", q: "Complete: 'Doctors said the results ___ (be) promising.' (discurso indireto)", answer: ["were"], explanation: "No discurso indireto, o presente ('are') recua para o passado ('were')." },
        { q: "'Well-being' means:", options: ["Doença", "Bem-estar", "Tratamento", "Sintoma"], answer: 1, explanation: "'Well-being' significa 'bem-estar', o estado geral de saúde física e mental." },
        { type: "tf", q: "'Researcher' means 'paciente'.", answer: false, explanation: "'Researcher' significa 'pesquisador'; 'paciente' é 'patient'." }
      ]
    },
    {
      id: "b2-m6",
      title: "Gerúndio e Infinitivo",
      subtitle: "Padrões verbais: verbo + gerúndio vs. verbo + infinitivo",
      objective: "Ao final, o aluno consegue escolher corretamente entre gerúndio e infinitivo depois de diferentes verbos, incluindo casos em que a escolha muda o significado da frase.",
      prerequisites: ["b2-m5"],
      masteryEvidence: "Domínio demonstrado por pelo menos 60% de acerto no quiz, revisão da atividade de writing concluída, tentativa de speaking registrada e as 9 sessões do módulo completas.",
      lesson: {
        intro: "Alguns verbos em inglês são seguidos por gerúndio (-ing), outros por infinitivo (to + verbo), e alguns aceitam ambos com mudança de sentido. Vamos organizar essas regras.",
        sections: [
          {
            heading: "Verbos Seguidos por Gerúndio",
            text: "Verbos como 'enjoy', 'avoid', 'suggest' e 'finish' são sempre seguidos por gerúndio.",
            examples: [
              { en: "I enjoy reading before bed.", pt: "Eu gosto de ler antes de dormir." },
              { en: "She avoided answering the question.", pt: "Ela evitou responder à pergunta." }
            ]
          },
          {
            heading: "Verbos Seguidos por Infinitivo",
            text: "Verbos como 'want', 'decide', 'need' e 'promise' são seguidos por infinitivo (to + verbo).",
            examples: [
              { en: "I want to travel next year.", pt: "Eu quero viajar ano que vem." },
              { en: "She decided to change jobs.", pt: "Ela decidiu mudar de emprego." }
            ]
          },
          {
            heading: "Verbos que Mudam de Sentido",
            text: "Alguns verbos, como 'stop', 'remember' e 'try', mudam de significado dependendo se são seguidos por gerúndio ou infinitivo.",
            examples: [
              { en: "I stopped smoking.", pt: "Eu parei de fumar. (abandonei o hábito)" },
              { en: "I stopped to smoke.", pt: "Eu parei [o que estava fazendo] para fumar." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "b2-m6-avoid", word: "Avoid", phonetic: "/əˈvɔɪd/", translation: "Evitar", example: "I avoid eating late at night.", exampleTranslation: "Eu evito comer tarde da noite." },
        { id: "b2-m6-suggest", word: "Suggest", phonetic: "/səˈdʒɛst/", translation: "Sugerir", example: "I suggest checking the schedule first.", exampleTranslation: "Eu sugiro verificar o horário primeiro." },
        { id: "b2-m6-decide", word: "Decide", phonetic: "/dɪˈsaɪd/", translation: "Decidir", example: "We decided to move to another city.", exampleTranslation: "Nós decidimos nos mudar para outra cidade." },
        { id: "b2-m6-promise", word: "Promise", phonetic: "/ˈprɒmɪs/", translation: "Prometer", example: "He promised to call me back.", exampleTranslation: "Ele prometeu me ligar de volta." },
        { id: "b2-m6-consider", word: "Consider", phonetic: "/kənˈsɪdər/", translation: "Considerar", example: "I'm considering changing careers.", exampleTranslation: "Estou considerando mudar de carreira." },
        { id: "b2-m6-afford", word: "Afford", phonetic: "/əˈfɔːrd/", translation: "Poder pagar/se dar ao luxo", example: "We can't afford to travel this year.", exampleTranslation: "Nós não podemos nos dar ao luxo de viajar este ano." },
        { id: "b2-m6-postpone", word: "Postpone", phonetic: "/poʊstˈpoʊn/", translation: "Adiar", example: "We postponed meeting until next week.", exampleTranslation: "Adiamos a reunião até a próxima semana." },
        { id: "b2-m6-manage", word: "Manage", phonetic: "/ˈmænɪdʒ/", translation: "Conseguir/Administrar", example: "She managed to finish on time.", exampleTranslation: "Ela conseguiu terminar a tempo." },
        { id: "b2-m6-mind", word: "Mind", phonetic: "/maɪnd/", translation: "Importar-se/Ter objeção", example: "Would you mind closing the door?", exampleTranslation: "Você se importaria de fechar a porta?" },
        { id: "b2-m6-regret", word: "Regret", phonetic: "/rɪˈɡrɛt/", translation: "Arrepender-se", example: "I regret not studying more.", exampleTranslation: "Eu me arrependo de não ter estudado mais." }
      ],
      grammar: {
        title: "Verbo + Gerúndio vs. Verbo + Infinitivo",
        explanation: "Não há uma regra fonética simples — o melhor é memorizar os grupos mais comuns de verbos.",
        table: {
          headers: ["Grupo", "Verbos comuns", "Exemplo"],
          rows: [
            ["+ Gerúndio", "enjoy, avoid, suggest, finish, consider, mind", "I enjoy traveling."],
            ["+ Infinitivo", "want, decide, need, promise, afford, manage", "I want to travel."],
            ["Ambos (sentido diferente)", "stop, remember, try", "I stopped to rest. / I stopped resting."]
          ]
        },
        correct: ["I enjoy traveling.", "I want to travel.", "I stopped smoking last year."],
        incorrect: ["I enjoy to travel.", "I want traveling.", "I stopped to smoke last year."]
      },
      listening: [
        {
          title: "Making Decisions",
          accent: "british",
          transcript: "A: I've decided to change careers. B: Really? What made you consider doing that? A: I avoid admitting it, but I don't enjoy working in finance anymore. B: I understand. Have you managed to find something new yet? A: Not yet, but I promise to let you know when I do.",
          questions: [
            { q: "What did the speaker decide?", options: ["To stay in finance", "To change careers", "To travel", "To retire"], answer: 1 },
            { q: "What does the speaker avoid admitting?", options: ["That they are rich", "That they don't enjoy their job anymore", "That they are lazy", "Nothing"], answer: 1 },
            { q: "What does the speaker promise?", options: ["To quit immediately", "To let their friend know when they find something", "To stay in finance", "Nothing"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "Changing Habits",
          text: "Many people decide to change their habits at the beginning of the year. Some try to exercise more, while others consider eating healthier food. It's easy to suggest making big changes, but it's harder to actually manage to keep them. Experts recommend avoiding drastic changes and instead promise yourself small, realistic goals. This way, you're more likely to succeed without giving up.",
          questions: [
            { q: "When do many people decide to change habits?", options: ["Middle of the year", "Beginning of the year", "End of the year", "Never"], answer: 1 },
            { q: "What is harder than suggesting changes, according to the text?", options: ["Talking about changes", "Actually keeping them", "Writing them down", "Nothing"], answer: 1 },
            { q: "What do experts recommend?", options: ["Drastic changes", "Small, realistic goals", "No goals at all", "Giving up quickly"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 4 frases usando verbos diferentes seguidos de gerúndio ou infinitivo (enjoy, want, avoid, decide).", minWords: 20, modelAnswer: "I enjoy reading before bed. I want to travel more this year. I avoid eating late at night. I decided to learn a new skill." },
        { prompt: "Escreva sobre uma decisão importante que você tomou, usando 'decide to' e 'promise to'.", minWords: 20, modelAnswer: "Last year, I decided to change my career. I promised myself to work harder and learn new skills every day." }
      ],
      speaking: [
        { phrase: "I enjoy traveling.", tip: "'Enjoy' é sempre seguido de gerúndio, nunca 'to'." },
        { phrase: "I want to travel next year.", tip: "'Want' é sempre seguido de infinitivo." },
        { phrase: "I stopped smoking last year.", tip: "'Stop + gerúndio' significa abandonar um hábito." },
        { phrase: "We can't afford to travel this year.", tip: "'Afford' é seguido de infinitivo." },
        { phrase: "Would you mind closing the door?", tip: "'Mind' é sempre seguido de gerúndio, mesmo sendo um pedido educado." }
      ],
      exercises: {
        fillBlanks: [
          { text: "I enjoy ___ (travel). (gerúndio)", answer: "traveling" },
          { text: "I want ___ (travel) next year. (infinitivo)", answer: "to travel" },
          { text: "She decided ___ (change) jobs. (infinitivo)", answer: "to change" },
          { text: "I avoid ___ (eat) late at night. (gerúndio)", answer: "eating" },
          { text: "He promised ___ (call) me back. (infinitivo)", answer: "to call" }
        ],
        matching: [
          { left: "Avoid", right: "Evitar" },
          { left: "Suggest", right: "Sugerir" },
          { left: "Promise", right: "Prometer" },
          { left: "Afford", right: "Poder pagar" },
          { left: "Postpone", right: "Adiar" },
          { left: "Regret", right: "Arrepender-se" }
        ],
        ordering: [
          { words: ["traveling", "enjoy", "I"], answer: "I enjoy traveling" },
          { words: ["travel", "want", "to", "I", "year", "next"], answer: "I want to travel next year" },
          { words: ["jobs", "decided", "change", "She", "to"], answer: "She decided to change jobs" },
          { words: ["eating", "avoid", "night", "I", "late", "at"], answer: "I avoid eating late at night" },
          { words: ["back", "promised", "call", "He", "me", "to"], answer: "He promised to call me back" }
        ],
        translation: [
          { direction: "pt-en", text: "Eu gosto de viajar.", answer: "I enjoy traveling." },
          { direction: "pt-en", text: "Eu quero viajar ano que vem.", answer: "I want to travel next year." },
          { direction: "pt-en", text: "Ela decidiu mudar de emprego.", answer: "She decided to change jobs." },
          { direction: "en-pt", text: "I avoid eating late at night.", answer: "Eu evito comer tarde da noite." },
          { direction: "en-pt", text: "He promised to call me back.", answer: "Ele prometeu me ligar de volta." },
          { direction: "en-pt", text: "We can't afford to travel this year.", answer: "Nós não podemos nos dar ao luxo de viajar este ano." }
        ],
        dictation: [
          { audioText: "I enjoy traveling.", answer: "I enjoy traveling." },
          { audioText: "I want to travel next year.", answer: "I want to travel next year." },
          { audioText: "She decided to change jobs.", answer: "She decided to change jobs." }
        ],
        dialogue: [
          {
            title: "Talking About Plans",
            lines: [
              { speaker: "Rui", text: "What do you want to do this weekend?" },
              { speaker: "user", prompt: "Diga que você gosta de caminhar no parque:", options: ["I enjoy walking in the park.", "I want walking in the park.", "I decided walking in the park."], answer: 0 },
              { speaker: "Rui", text: "Nice! Have you considered joining a hiking group?" },
              { speaker: "user", prompt: "Diga que você está considerando isso:", options: ["I'm considering it.", "I avoid it.", "I promise it."], answer: 0 },
              { speaker: "Rui", text: "You should! It's a lot of fun." }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct sentence.", options: ["I enjoy to travel.", "I enjoy traveling.", "I enjoy travel.", "I enjoying travel."], answer: 1, explanation: "'Enjoy' é sempre seguido de gerúndio (-ing), nunca de infinitivo com 'to'." },
        { q: "Choose the correct sentence.", options: ["I want traveling.", "I want to travel.", "I want travel.", "I wanting to travel."], answer: 1, explanation: "'Want' é sempre seguido de infinitivo ('to' + verbo), nunca de gerúndio." },
        { type: "tf", q: "'Avoid' is followed by the gerund (-ing).", answer: true, explanation: "'Avoid' pertence ao grupo de verbos seguidos por gerúndio, como em 'avoid eating late'." },
        { q: "Choose the correct sentence.", options: ["She decided change jobs.", "She decided to change jobs.", "She decided changing jobs.", "She decided change to jobs."], answer: 1, explanation: "'Decide' é seguido de infinitivo: 'decided to change'." },
        { type: "short", q: "Complete: 'He promised ___ call me back.' (to)", answer: ["to"], explanation: "'Promise' é seguido de infinitivo: 'promised to call'." },
        { q: "'Postpone' means:", options: ["Cancelar", "Adiar", "Confirmar", "Lembrar"], answer: 1, explanation: "'Postpone' significa 'adiar', deixar algo para depois." },
        { type: "tf", q: "'Mind' is followed by the infinitive (to + verb).", answer: false, explanation: "'Mind' é seguido por gerúndio (-ing), como em 'Would you mind closing the door?'." },
        { q: "Choose the correct sentence.", options: ["We can't afford traveling this year.", "We can't afford to travel this year.", "We can't afford travel this year.", "We can't afford to traveling this year."], answer: 1, explanation: "'Afford' é seguido de infinitivo: 'afford to travel'." },
        { q: "'Regret' means:", options: ["Comemorar", "Arrepender-se", "Esquecer", "Ignorar"], answer: 1, explanation: "'Regret' significa 'arrepender-se', sentir pesar por algo feito ou não feito." },
        { type: "short", q: "Complete: 'I ___ (avoid) eating late.' (gerúndio)", answer: ["avoid eating"], explanation: "'Avoid' exige gerúndio logo em seguida: 'avoid eating'." },
        { q: "Choose the sentence meaning 'parei de fumar' (abandoning a habit).", options: ["I stopped to smoke.", "I stopped smoking.", "I stop smoke.", "I stopping smoke."], answer: 1, explanation: "'Stop + gerúndio' indica abandonar um hábito: 'stopped smoking' = parei de fumar." },
        { type: "tf", q: "Some verbs change meaning depending on whether they're followed by gerund or infinitive.", answer: true, explanation: "Verbos como 'stop', 'remember' e 'try' mudam de sentido conforme são seguidos de gerúndio ou infinitivo." }
      ]
    }
  ],
  finalTest: {
    description: "Prova final do nível B2 — 20 questões cobrindo voz passiva, discurso indireto, condicionais avançados, mundo do trabalho e saúde/tecnologia.",
    questions: [
      { q: "Choose the correct passive sentence.", options: ["This house built in 1990.", "This house was built in 1990.", "This house is building in 1990.", "This house has build in 1990."], answer: 1, explanation: "A passiva no passado usa 'was/were + particípio passado': 'was built'." },
      { q: "Choose the passive form of 'They speak English here.'", options: ["English speaks here.", "English is spoken here.", "English was spoken here.", "English speaking here."], answer: 1, explanation: "Como a frase original está no presente simples, a passiva usa 'is/are + particípio': 'is spoken'." },
      { q: "Choose the correct reported speech for: 'I am tired.'", options: ["She said she is tired.", "She said she was tired.", "She said she tired.", "She says she was tired."], answer: 1, explanation: "No discurso indireto, o presente ('am') recua para o passado ('was')." },
      { q: "Choose the correct reported question for: 'Where do you live?'", options: ["He asked where do I live.", "He asked where I lived.", "He asked where I live.", "He asked me where did I live."], answer: 1, explanation: "Perguntas indiretas não têm inversão sujeito-verbo e o tempo verbal recua: 'where I lived'." },
      { q: "Choose the correct third conditional sentence.", options: ["If I studied, I would have passed.", "If I had studied, I would have passed.", "If I had studied, I would pass.", "If I have studied, I would have passed."], answer: 1, explanation: "A estrutura correta é 'If + past perfect, would have + particípio': 'If I had studied, I would have passed.'" },
      { type: "tf", q: "The third conditional talks about hypothetical situations in the past.", answer: true, explanation: "O terceiro condicional descreve situações imaginárias que não aconteceram no passado, muitas vezes com arrependimento." },
      { q: "Choose the sentence that expresses advice, not obligation.", options: ["You must arrive on time.", "You have to arrive on time.", "You should arrive on time.", "You had to arrive on time."], answer: 2, explanation: "'Should' expressa conselho ou recomendação, enquanto 'must' e 'have to' expressam obrigação." },
      { q: "'Résumé' means:", options: ["Entrevista", "Currículo", "Salário", "Promoção"], answer: 1, explanation: "'Résumé' significa 'currículo', o documento com o histórico profissional de alguém." },
      { q: "'Symptom' means:", options: ["Tratamento", "Sintoma", "Dispositivo", "Pesquisador"], answer: 1, explanation: "'Symptom' significa 'sintoma', um sinal de que algo está errado com a saúde." },
      { q: "Choose the correct passive sentence for a news report.", options: ["Researchers develop a new vaccine.", "A new vaccine has been developed by researchers.", "A new vaccine develop by researchers.", "Researchers has developed a new vaccine."], answer: 1, explanation: "Notícias costumam usar a passiva no present perfect ('has been developed') para destacar o resultado, não quem fez." },
      { type: "tf", q: "'Should' expresses strong obligation, like a law.", answer: false, explanation: "'Should' expressa conselho ou recomendação, não obrigação forte." },
      { type: "short", q: "Complete: 'She told ___ she was leaving.' (para mim)", answer: ["me"], explanation: "'Tell' exige um objeto direto para a pessoa ouvinte: 'told me', diferente de 'said to me'." },
      { q: "'Admitted' means:", options: ["Negou", "Admitiu", "Perguntou", "Explicou"], answer: 1, explanation: "'Admitted' é o passado de 'admit', que significa 'admitir' ou 'reconhecer'." },
      { type: "short", q: "Complete: 'I ___ studying more.' (arrependo-me de)", answer: ["regret"], explanation: "'Regret' significa 'arrepender-se de' e é seguido de gerúndio quando fala de algo já feito ou não feito." },
      { q: "'Deadline' means:", options: ["Prazo", "Oportunidade", "Erro", "Consequência"], answer: 0, explanation: "'Deadline' é o prazo final para entregar ou concluir algo." },
      { type: "tf", q: "'Don't have to' means the same as 'must not'.", answer: false, explanation: "'Don't have to' significa que não há obrigação (é opcional); 'must not' significa proibição." },
      { q: "'Colleague' means:", options: ["Chefe", "Colega de trabalho", "Cliente", "Candidato"], answer: 1, explanation: "'Colleague' significa 'colega de trabalho', alguém que trabalha na mesma empresa." },
      { type: "short", q: "Complete: 'I need to ___ my software.' (atualizar)", answer: ["update"], explanation: "'Update' significa 'atualizar', comum no vocabulário de tecnologia." },
      { type: "tf", q: "News articles often use passive voice and formal vocabulary.", answer: true, explanation: "Textos jornalísticos preferem a voz passiva e um registro mais formal para soar objetivos." },
      { q: "'Innovation' means:", options: ["Doença", "Inovação", "Tratamento", "Sintoma"], answer: 1, explanation: "'Innovation' significa 'inovação', a criação de algo novo." }
    ]
  }
};

window.APP_DATA = APP_DATA;
