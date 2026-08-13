var APP_DATA = window.APP_DATA || {};

APP_DATA.a2 = {
  modules: [
    {
      id: "a2-m1",
      title: "Rotina e Presente Contínuo",
      subtitle: "Presente simples vs. presente contínuo e advérbios de frequência",
      lesson: {
        intro: "Neste módulo você vai aprender a diferença entre o Presente Simples (para hábitos e rotinas) e o Presente Contínuo (para ações acontecendo agora), além de vocabulário para descrever sua rotina com mais detalhes.",
        sections: [
          {
            heading: "Presente Simples",
            text: "Usamos o presente simples para hábitos, rotinas e fatos gerais. Com he/she/it, adicionamos -s ou -es ao verbo.",
            examples: [
              { en: "I work from Monday to Friday.", pt: "Eu trabalho de segunda a sexta." },
              { en: "She studies English every day.", pt: "Ela estuda inglês todos os dias." }
            ]
          },
          {
            heading: "Presente Contínuo",
            text: "Usamos o presente contínuo (to be + verbo-ing) para ações acontecendo neste momento ou planos próximos.",
            examples: [
              { en: "I am studying right now.", pt: "Eu estou estudando agora." },
              { en: "They are watching a movie.", pt: "Eles estão assistindo um filme." }
            ]
          },
          {
            heading: "Advérbios de Frequência",
            text: "Palavras como always, usually, often, sometimes, never indicam com que frequência algo acontece e geralmente vêm antes do verbo principal (mas depois do verbo 'to be').",
            examples: [
              { en: "I always wake up early.", pt: "Eu sempre acordo cedo." },
              { en: "She is never late.", pt: "Ela nunca está atrasada." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "a2-m1-usually", word: "Usually", phonetic: "/ˈjuːʒuəli/", translation: "Geralmente", example: "I usually have coffee in the morning.", exampleTranslation: "Eu geralmente tomo café pela manhã." },
        { id: "a2-m1-sometimes", word: "Sometimes", phonetic: "/ˈsʌmtaɪmz/", translation: "Às vezes", example: "Sometimes I walk to work.", exampleTranslation: "Às vezes eu vou andando ao trabalho." },
        { id: "a2-m1-never", word: "Never", phonetic: "/ˈnɛvər/", translation: "Nunca", example: "He never eats meat.", exampleTranslation: "Ele nunca come carne." },
        { id: "a2-m1-right-now", word: "Right now", phonetic: "/raɪt naʊ/", translation: "Agora mesmo", example: "I am eating right now.", exampleTranslation: "Eu estou comendo agora mesmo." },
        { id: "a2-m1-study", word: "Study", phonetic: "/ˈstʌdi/", translation: "Estudar", example: "She studies at night.", exampleTranslation: "Ela estuda à noite." },
        { id: "a2-m1-watch-tv", word: "Watch TV", phonetic: "/wɒtʃ tiːˈviː/", translation: "Assistir TV", example: "We watch TV after dinner.", exampleTranslation: "Nós assistimos TV depois do jantar." },
        { id: "a2-m1-clean", word: "Clean", phonetic: "/kliːn/", translation: "Limpar", example: "He cleans the house on Saturdays.", exampleTranslation: "Ele limpa a casa aos sábados." },
        { id: "a2-m1-cook", word: "Cook", phonetic: "/kʊk/", translation: "Cozinhar", example: "I am cooking dinner now.", exampleTranslation: "Eu estou cozinhando o jantar agora." },
        { id: "a2-m1-weekend", word: "Weekend", phonetic: "/ˈwiːkɛnd/", translation: "Fim de semana", example: "What do you do on the weekend?", exampleTranslation: "O que você faz no fim de semana?" },
        { id: "a2-m1-exercise", word: "Exercise", phonetic: "/ˈɛksərsaɪz/", translation: "Exercitar-se", example: "They exercise every morning.", exampleTranslation: "Eles se exercitam toda manhã." }
      ],
      grammar: {
        title: "Presente Simples vs. Presente Contínuo",
        explanation: "O presente simples descreve hábitos e verdades gerais; o presente contínuo descreve ações em progresso agora ou planos temporários.",
        table: {
          headers: ["Uso", "Presente Simples", "Presente Contínuo"],
          rows: [
            ["Hábito", "I play tennis every week.", "—"],
            ["Agora", "—", "I am playing tennis now."],
            ["Negativa", "I don't play tennis.", "I am not playing tennis."],
            ["Pergunta", "Do you play tennis?", "Are you playing tennis?"]
          ]
        },
        correct: ["She works every day.", "She is working right now.", "Do you like coffee?"],
        incorrect: ["She working every day.", "She is work right now.", "Do you liking coffee?"]
      },
      listening: [
        {
          title: "A Busy Morning",
          accent: "american",
          audioSrc: "assets/audio/a2-m1-listen-0.mp3",
          audioSource: "tts-pregenerated",
          speedLevels: [0.75, 1, 1.25],
          transcript: "Every morning, Laura wakes up at six thirty. She usually exercises for twenty minutes, and then she takes a shower. Right now, she is cooking breakfast because her children are still sleeping. She never leaves the house without eating breakfast first.",
          questions: [
            { q: "What time does Laura usually wake up?", options: ["Six o'clock", "Six thirty", "Seven o'clock", "Seven thirty"], answer: 1 },
            { q: "What is Laura doing right now?", options: ["Sleeping", "Exercising", "Cooking breakfast", "Taking a shower"], answer: 2 },
            { q: "What does Laura never do?", options: ["Exercise", "Leave without breakfast", "Wake up early", "Cook"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "Weekend Habits",
          text: "On weekdays, Marcos works in an office. He usually wakes up early and takes the bus to work. But on weekends, his routine is different. He doesn't wake up early — he usually sleeps until ten! On Saturdays, he cleans his apartment and cooks a big lunch. Right now, it's Saturday afternoon, and he is relaxing on the sofa, watching a movie.",
          questions: [
            { q: "How does Marcos usually get to work?", options: ["By car", "By bus", "By bike", "On foot"], answer: 1 },
            { q: "What does Marcos do on Saturdays?", options: ["He works", "He cleans and cooks", "He studies", "He exercises"], answer: 1 },
            { q: "What is Marcos doing right now?", options: ["Working", "Cleaning", "Watching a movie", "Cooking"], answer: 2 }
          ]
        }
      ],
      writing: [
        { prompt: "Descreva sua rotina semanal usando presente simples e pelo menos 2 advérbios de frequência.", minWords: 20, modelAnswer: "I usually wake up at seven every morning. I always have breakfast before work, and I sometimes exercise in the evening after dinner." },
        { prompt: "Escreva 3 frases no presente contínuo descrevendo o que as pessoas ao seu redor estão fazendo agora.", minWords: 15, modelAnswer: "My brother is watching TV. My mother is cooking dinner. I am writing this sentence." }
      ],
      speaking: [
        { phrase: "I usually wake up at seven.", tip: "'Usually' tem o acento na primeira sílaba: U-su-al-ly." },
        { phrase: "I am studying right now.", tip: "Contraia 'I am' para 'I'm' na fala natural: 'I'm studying'." },
        { phrase: "She never eats meat.", tip: "O 's' de 'eats' (terceira pessoa) tem som de 'ts'." },
        { phrase: "What are you doing?", tip: "A entoação de pergunta com 'wh-' geralmente desce no final." },
        { phrase: "We watch TV every night.", tip: "'Watch' tem o som 'ch' final, como em 'catch'." }
      ],
      exercises: {
        fillBlanks: [
          { text: "She ___ (study) English every day.", answer: "studies" },
          { text: "I ___ (cook) dinner right now.", answer: "am cooking" },
          { text: "They ___ (never/watch) TV in the morning.", answer: "never watch" },
          { text: "___ you like coffee?", answer: "Do" },
          { text: "He ___ (clean) the house on Saturdays.", answer: "cleans" }
        ],
        matching: [
          { left: "Usually", right: "Geralmente" },
          { left: "Sometimes", right: "Às vezes" },
          { left: "Never", right: "Nunca" },
          { left: "Weekend", right: "Fim de semana" },
          { left: "Study", right: "Estudar" },
          { left: "Cook", right: "Cozinhar" }
        ],
        ordering: [
          { words: ["works", "every", "She", "day"], answer: "She works every day" },
          { words: ["cooking", "am", "dinner", "I"], answer: "I am cooking dinner" },
          { words: ["eats", "never", "meat", "He"], answer: "He never eats meat" },
          { words: ["you", "doing", "are", "What?"], answer: "What are you doing?" },
          { words: ["morning", "exercise", "every", "They"], answer: "They exercise every morning" }
        ],
        translation: [
          { direction: "pt-en", text: "Eu geralmente acordo cedo.", answer: "I usually wake up early." },
          { direction: "pt-en", text: "Ela está estudando agora.", answer: "She is studying now." },
          { direction: "pt-en", text: "Nós nunca assistimos TV de manhã.", answer: "We never watch TV in the morning." },
          { direction: "en-pt", text: "What do you do on the weekend?", answer: "O que você faz no fim de semana?" },
          { direction: "en-pt", text: "He is cleaning the house.", answer: "Ele está limpando a casa." },
          { direction: "en-pt", text: "I always have breakfast.", answer: "Eu sempre tomo café da manhã." }
        ],
        dictation: [
          { audioText: "She studies every day.", answer: "She studies every day." },
          { audioText: "I am cooking right now.", answer: "I am cooking right now." },
          { audioText: "We never watch TV in the morning.", answer: "We never watch TV in the morning." }
        ],
        dialogue: [
          {
            title: "What Are You Doing?",
            lines: [
              { speaker: "Carla", text: "Hi! What are you doing right now?" },
              { speaker: "user", prompt: "Diga que você está estudando inglês:", options: ["I am studying English.", "I usually study English.", "I studied English."], answer: 0 },
              { speaker: "Carla", text: "Nice! Do you study every day?" },
              { speaker: "user", prompt: "Diga que sim, geralmente:", options: ["Yes, I usually study every day.", "No, I am not studying.", "Yes, I studied yesterday."], answer: 0 },
              { speaker: "Carla", text: "That's great practice!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Complete: 'She ___ to work every day.'", options: ["go", "goes", "going", "gone"], answer: 1, explanation: "Com he/she/it no presente simples, acrescentamos '-s' ou '-es' ao verbo; 'go' se torna 'goes'." },
        { q: "Complete: 'I ___ dinner right now.'", options: ["cook", "cooks", "am cooking", "cooking"], answer: 2, explanation: "'Right now' indica uma ação acontecendo neste momento, por isso usamos o presente contínuo (to be + verbo-ing)." },
        { type: "tf", q: "'Never' means 'sempre'.", answer: false, explanation: "'Never' significa 'nunca'; 'sempre' é 'always'." },
        { q: "Choose the correct question.", options: ["Do you like coffee?", "Does you like coffee?", "Are you like coffee?", "Like you coffee?"], answer: 0, explanation: "Perguntas no presente simples com 'you' são formadas com 'Do' + sujeito + verbo na forma base." },
        { type: "short", q: "Complete: 'He ___ (watch) TV every night.' (presente simples)", answer: ["watches"], explanation: "Verbos terminados em 'ch' recebem '-es' na terceira pessoa do singular: watch → watches." },
        { q: "'Right now' is used with which tense?", options: ["Present Simple", "Present Continuous", "Past Simple", "Future"], answer: 1, explanation: "'Right now' expressa uma ação em progresso no momento da fala, por isso é usado com o presente contínuo." },
        { type: "tf", q: "We use '-s' with 'he/she/it' in the present simple.", answer: true, explanation: "No presente simples, a terceira pessoa do singular (he/she/it) recebe '-s' ou '-es' no verbo." },
        { q: "Choose the correct negative: 'They ___ studying.'", options: ["doesn't", "don't", "isn't", "aren't"], answer: 3, explanation: "No presente contínuo, a negativa usa o verbo 'to be' + not; com 'they', a forma é 'aren't'." },
        { q: "'Weekend' means:", options: ["Semana", "Fim de semana", "Feriado", "Fim de mês"], answer: 1, explanation: "'Weekend' significa 'fim de semana', os dias de sábado e domingo." },
        { type: "short", q: "Complete: 'What ___ you doing?' (to be)", answer: ["are"], explanation: "Perguntas no presente contínuo usam o verbo 'to be' antes do sujeito; com 'you', é 'are'." },
        { q: "Choose the correct sentence.", options: ["She is work now.", "She working now.", "She is working now.", "She works now right."], answer: 2, explanation: "O presente contínuo exige o verbo 'to be' conjugado + verbo com '-ing': 'is working'." },
        { type: "tf", q: "Frequency adverbs like 'usually' come after the main verb but before 'to be'.", answer: false, explanation: "Advérbios de frequência vêm antes do verbo principal, mas depois do verbo 'to be'." }
      ]
    },
    {
      id: "a2-m2",
      title: "Minha Cidade e Direções",
      subtitle: "Lugares na cidade, preposições de lugar e como pedir/dar direções",
      lesson: {
        intro: "Vamos aprender a falar sobre lugares na cidade e como pedir e dar direções — essencial para quando você viajar ou explorar um lugar novo!",
        sections: [
          {
            heading: "Lugares na Cidade",
            text: "Conhecer o vocabulário de lugares comuns ajuda muito a se localizar e conversar sobre onde as coisas ficam.",
            examples: [
              { en: "The bank is next to the supermarket.", pt: "O banco fica ao lado do supermercado." },
              { en: "There is a pharmacy near here.", pt: "Há uma farmácia perto daqui." }
            ]
          },
          {
            heading: "Preposições de Lugar",
            text: "Preposições como in, on, next to, between, across from indicam a posição de um lugar.",
            examples: [
              { en: "The park is between the school and the hospital.", pt: "O parque fica entre a escola e o hospital." },
              { en: "The café is across from the bank.", pt: "O café fica em frente ao banco." }
            ]
          },
          {
            heading: "Dando Direções (Imperativo)",
            text: "Usamos o modo imperativo (verbo sem sujeito) para dar instruções, como direções.",
            examples: [
              { en: "Turn left at the corner.", pt: "Vire à esquerda na esquina." },
              { en: "Go straight and cross the street.", pt: "Siga em frente e atravesse a rua." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "a2-m2-bank", word: "Bank", phonetic: "/bæŋk/", translation: "Banco", example: "The bank is open until 4 p.m.", exampleTranslation: "O banco está aberto até as 16h." },
        { id: "a2-m2-supermarket", word: "Supermarket", phonetic: "/ˈsuːpərmɑːrkɪt/", translation: "Supermercado", example: "I need to go to the supermarket.", exampleTranslation: "Eu preciso ir ao supermercado." },
        { id: "a2-m2-pharmacy", word: "Pharmacy", phonetic: "/ˈfɑːrməsi/", translation: "Farmácia", example: "Is there a pharmacy near here?", exampleTranslation: "Há uma farmácia perto daqui?" },
        { id: "a2-m2-hospital", word: "Hospital", phonetic: "/ˈhɒspɪtl/", translation: "Hospital", example: "The hospital is next to the park.", exampleTranslation: "O hospital fica ao lado do parque." },
        { id: "a2-m2-corner", word: "Corner", phonetic: "/ˈkɔːrnər/", translation: "Esquina", example: "Turn left at the corner.", exampleTranslation: "Vire à esquerda na esquina." },
        { id: "a2-m2-straight", word: "Straight", phonetic: "/streɪt/", translation: "Em frente/Reto", example: "Go straight for two blocks.", exampleTranslation: "Siga em frente por duas quadras." },
        { id: "a2-m2-street", word: "Street", phonetic: "/striːt/", translation: "Rua", example: "Cross the street carefully.", exampleTranslation: "Atravesse a rua com cuidado." },
        { id: "a2-m2-between", word: "Between", phonetic: "/bɪˈtwiːn/", translation: "Entre", example: "The café is between the bank and the school.", exampleTranslation: "O café fica entre o banco e a escola." },
        { id: "a2-m2-near", word: "Near", phonetic: "/nɪr/", translation: "Perto", example: "My house is near the station.", exampleTranslation: "Minha casa fica perto da estação." },
        { id: "a2-m2-map", word: "Map", phonetic: "/mæp/", translation: "Mapa", example: "Can you show me on the map?", exampleTranslation: "Você pode me mostrar no mapa?" }
      ],
      grammar: {
        title: "Imperativo para Direções",
        explanation: "O imperativo é usado sem sujeito, geralmente com o verbo na forma base. Para negar, usamos 'don't' antes do verbo.",
        table: {
          headers: ["Afirmativa", "Negativa"],
          rows: [
            ["Turn left.", "Don't turn left."],
            ["Go straight.", "Don't go straight."],
            ["Cross the street.", "Don't cross the street."]
          ]
        },
        correct: ["Turn right at the corner.", "Go straight ahead.", "Don't cross here."],
        incorrect: ["You turn right at the corner.", "Going straight ahead.", "No cross here."]
      },
      listening: [
        {
          title: "Excuse Me, Where Is the Bank?",
          accent: "british",
          transcript: "Tourist: Excuse me, where is the bank? Local: Go straight for two blocks, then turn left. The bank is on the corner, next to the pharmacy. Tourist: Is it far? Local: No, it's near here, about five minutes on foot.",
          questions: [
            { q: "Where is the bank located?", options: ["Next to the hospital", "On the corner, next to the pharmacy", "Across from the school", "Inside the supermarket"], answer: 1 },
            { q: "How should the tourist go first?", options: ["Turn left", "Turn right", "Go straight", "Cross the street"], answer: 2 },
            { q: "How far is the bank?", options: ["Very far", "About five minutes on foot", "One hour by bus", "It's unknown"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "Finding My Way",
          text: "When I visit a new city, I always ask people for directions. Yesterday, I wanted to find a good restaurant. A friendly local told me, 'Go straight for three blocks, then turn right. The restaurant is between a bookstore and a bank.' I followed the directions and found it easily. The food was delicious!",
          questions: [
            { q: "What was the writer looking for?", options: ["A bank", "A restaurant", "A bookstore", "A hospital"], answer: 1 },
            { q: "Where is the restaurant located?", options: ["Next to the hospital", "Between a bookstore and a bank", "Across from the school", "Near the park"], answer: 1 },
            { q: "How did the writer find the restaurant?", options: ["By map", "By asking a local", "By phone", "By accident"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva direções (4-5 frases) de sua casa até um lugar próximo, usando o imperativo.", minWords: 20, modelAnswer: "Go straight for two blocks and turn left at the corner. Cross the street carefully. The supermarket is next to the bank, near the school." },
        { prompt: "Descreva onde 3 lugares importantes ficam na sua cidade, usando preposições de lugar.", minWords: 15, modelAnswer: "The hospital is near my house. The bank is between the school and the park. The pharmacy is across from the supermarket." }
      ],
      speaking: [
        { phrase: "Excuse me, where is the bank?", tip: "'Excuse me' é essencial para começar uma pergunta educadamente." },
        { phrase: "Turn left at the corner.", tip: "'Turn' tem som de 'er' no meio, como em 'burn'." },
        { phrase: "Go straight for two blocks.", tip: "'Straight' é uma palavra difícil — o 'gh' é mudo: /streɪt/." },
        { phrase: "Is it far from here?", tip: "A entoação de pergunta sobe no final." },
        { phrase: "The pharmacy is next to the bank.", tip: "'Pharmacy' tem o acento na primeira sílaba: PHAR-ma-cy." }
      ],
      exercises: {
        fillBlanks: [
          { text: "___ left at the corner. (imperativo)", answer: "Turn" },
          { text: "The bank is ___ to the pharmacy.", answer: "next", options: ["next", "between", "near", "straight"] },
          { text: "Go ___ for two blocks.", answer: "straight" },
          { text: "The park is ___ the school and the hospital.", answer: "between" },
          { text: "Excuse me, ___ is the supermarket?", answer: "where" }
        ],
        matching: [
          { left: "Bank", right: "Banco" },
          { left: "Supermarket", right: "Supermercado" },
          { left: "Pharmacy", right: "Farmácia" },
          { left: "Hospital", right: "Hospital" },
          { left: "Corner", right: "Esquina" },
          { left: "Street", right: "Rua" }
        ],
        ordering: [
          { words: ["left", "corner", "Turn", "the", "at"], answer: "Turn left at the corner" },
          { words: ["straight", "two", "Go", "blocks", "for"], answer: "Go straight for two blocks" },
          { words: ["is", "the", "bank", "Where?"], answer: "Where is the bank?" },
          { words: ["between", "is", "café", "The", "school", "the"], answer: "The café is between the school" },
          { words: ["here", "near", "is", "It"], answer: "It is near here" }
        ],
        translation: [
          { direction: "pt-en", text: "Onde fica o banco?", answer: "Where is the bank?" },
          { direction: "pt-en", text: "Vire à esquerda na esquina.", answer: "Turn left at the corner." },
          { direction: "pt-en", text: "É perto daqui.", answer: "It is near here." },
          { direction: "en-pt", text: "Go straight for two blocks.", answer: "Siga em frente por duas quadras." },
          { direction: "en-pt", text: "The pharmacy is next to the hospital.", answer: "A farmácia fica ao lado do hospital." },
          { direction: "en-pt", text: "Can you show me on the map?", answer: "Você pode me mostrar no mapa?" }
        ],
        dictation: [
          { audioText: "Turn left at the corner.", answer: "Turn left at the corner." },
          { audioText: "The bank is near here.", answer: "The bank is near here." },
          { audioText: "Go straight for two blocks.", answer: "Go straight for two blocks." }
        ],
        dialogue: [
          {
            title: "Asking for Directions",
            lines: [
              { speaker: "Tourist", text: "Excuse me, where is the supermarket?" },
              { speaker: "user", prompt: "Diga para ir em frente por duas quadras:", options: ["Go straight for two blocks.", "Turn left now.", "It is very far."], answer: 0 },
              { speaker: "Tourist", text: "Thank you! Is it near the bank?" },
              { speaker: "user", prompt: "Confirme que é perto do banco:", options: ["Yes, it's next to the bank.", "No, it's a pharmacy.", "I don't know the bank."], answer: 0 },
              { speaker: "Tourist", text: "Great, thank you very much!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct imperative.", options: ["You turn left.", "Turn left.", "Turning left.", "Turned left."], answer: 1, explanation: "O imperativo usa o verbo na forma base, sem sujeito, para dar instruções: 'Turn left.'" },
        { q: "'Pharmacy' means:", options: ["Banco", "Farmácia", "Hospital", "Supermercado"], answer: 1, explanation: "'Pharmacy' significa 'farmácia', o lugar onde compramos remédios." },
        { type: "tf", q: "'Between' is used to describe something in the middle of two things.", answer: true, explanation: "'Between' significa 'entre' e é usado para posicionar algo no meio de dois pontos de referência." },
        { q: "Complete: 'The bank is ___ the pharmacy.' (ao lado)", options: ["between", "next to", "near", "far"], answer: 1, explanation: "'Next to' significa 'ao lado de', indicando que dois lugares estão um ao lado do outro." },
        { type: "short", q: "Complete: '___ straight for two blocks.' (imperativo)", answer: ["Go"], explanation: "O imperativo para dar direções começa com o verbo na forma base, como em 'Go straight'." },
        { q: "Choose the polite way to start a question to a stranger.", options: ["Hey you!", "Excuse me,", "Tell me,", "You there,"], answer: 1, explanation: "'Excuse me' é a forma educada de chamar a atenção de alguém antes de fazer uma pergunta." },
        { type: "tf", q: "'Corner' means 'esquina'.", answer: true, explanation: "'Corner' significa 'esquina', o ponto onde duas ruas se encontram." },
        { q: "Choose the negative imperative.", options: ["Don't cross here.", "Not cross here.", "Crossing not here.", "No crosses here."], answer: 0, explanation: "A negativa do imperativo é formada com 'don't' antes do verbo: 'Don't cross here.'" },
        { q: "'Straight' means:", options: ["Torto", "Em frente/reto", "Perto", "Longe"], answer: 1, explanation: "'Straight' significa 'em frente' ou 'reto', indicando continuar na mesma direção." },
        { type: "short", q: "Complete: 'Is it far ___ here?'", answer: ["from"], explanation: "Usamos a preposição 'from' na expressão 'far from' para indicar distância de um ponto de referência." },
        { q: "Choose the correct sentence.", options: ["The park between the bank and school.", "The park is between the bank and the school.", "The park is between bank and school.", "The park between the bank school."], answer: 1, explanation: "'Between' exige dois elementos conectados por 'and', cada um com seu artigo quando necessário: 'between the bank and the school'." },
        { type: "tf", q: "'Map' means 'rua'.", answer: false, explanation: "'Map' significa 'mapa'; 'rua' é 'street'." }
      ]
    },
    {
      id: "a2-m3",
      title: "O Passado",
      subtitle: "Passado simples (verbos regulares e irregulares) e expressões de tempo",
      lesson: {
        intro: "Hora de aprender a falar sobre o passado! Vamos ver como formar o passado simples com verbos regulares e irregulares, e as expressões de tempo mais usadas.",
        sections: [
          {
            heading: "Verbos Regulares",
            text: "Verbos regulares formam o passado adicionando '-ed' ao final.",
            examples: [
              { en: "I worked yesterday.", pt: "Eu trabalhei ontem." },
              { en: "She studied last night.", pt: "Ela estudou ontem à noite." }
            ]
          },
          {
            heading: "Verbos Irregulares",
            text: "Muitos verbos comuns são irregulares e têm formas próprias no passado, que precisam ser memorizadas.",
            examples: [
              { en: "I went to the market.", pt: "Eu fui ao mercado. (go → went)" },
              { en: "She saw a movie.", pt: "Ela viu um filme. (see → saw)" }
            ]
          },
          {
            heading: "Expressões de Tempo no Passado",
            text: "Palavras como yesterday, last week, last year, ago ajudam a situar a ação no passado.",
            examples: [
              { en: "I visited my grandmother last week.", pt: "Eu visitei minha avó semana passada." },
              { en: "They moved here two years ago.", pt: "Eles se mudaram para cá há dois anos." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "a2-m3-yesterday", word: "Yesterday", phonetic: "/ˈjɛstərdeɪ/", translation: "Ontem", example: "I called her yesterday.", exampleTranslation: "Eu liguei para ela ontem." },
        { id: "a2-m3-last-week", word: "Last week", phonetic: "/læst wiːk/", translation: "Semana passada", example: "We traveled last week.", exampleTranslation: "Nós viajamos semana passada." },
        { id: "a2-m3-ago", word: "Ago", phonetic: "/əˈɡoʊ/", translation: "Atrás/Há", example: "He arrived two hours ago.", exampleTranslation: "Ele chegou há duas horas." },
        { id: "a2-m3-went", word: "Went", phonetic: "/wɛnt/", translation: "Foi (go)", example: "I went to the beach.", exampleTranslation: "Eu fui à praia." },
        { id: "a2-m3-saw", word: "Saw", phonetic: "/sɔː/", translation: "Viu (see)", example: "She saw an old friend.", exampleTranslation: "Ela viu uma amiga antiga." },
        { id: "a2-m3-had", word: "Had", phonetic: "/hæd/", translation: "Teve (have)", example: "We had a great time.", exampleTranslation: "Nós tivemos um ótimo momento." },
        { id: "a2-m3-bought", word: "Bought", phonetic: "/bɔːt/", translation: "Comprou (buy)", example: "He bought a new car.", exampleTranslation: "Ele comprou um carro novo." },
        { id: "a2-m3-visited", word: "Visited", phonetic: "/ˈvɪzɪtɪd/", translation: "Visitou (visit)", example: "I visited my grandmother.", exampleTranslation: "Eu visitei minha avó." },
        { id: "a2-m3-arrived", word: "Arrived", phonetic: "/əˈraɪvd/", translation: "Chegou (arrive)", example: "They arrived late.", exampleTranslation: "Eles chegaram tarde." },
        { id: "a2-m3-happened", word: "Happened", phonetic: "/ˈhæpənd/", translation: "Aconteceu (happen)", example: "What happened yesterday?", exampleTranslation: "O que aconteceu ontem?" }
      ],
      grammar: {
        title: "Passado Simples: Afirmativa, Negativa e Pergunta",
        explanation: "Para negar e perguntar no passado, usamos 'did' + verbo na forma base (mesmo com verbos irregulares!).",
        table: {
          headers: ["Forma", "Estrutura", "Exemplo"],
          rows: [
            ["Afirmativa", "sujeito + verbo-ed/irregular", "I worked. / I went."],
            ["Negativa", "sujeito + didn't + verbo base", "I didn't work. / I didn't go."],
            ["Pergunta", "Did + sujeito + verbo base?", "Did you work? / Did you go?"]
          ]
        },
        correct: ["I didn't go to the party.", "Did you see the movie?", "She visited her friend last week."],
        incorrect: ["I didn't went to the party.", "Did you saw the movie?", "She visited to her friend last week."]
      },
      listening: [
        {
          title: "My Trip Last Month",
          accent: "australian",
          transcript: "Last month, I traveled to Sydney with my family. We arrived on a Friday and stayed for five days. We visited the beach, saw the Opera House, and bought some souvenirs. We didn't have any problems during the trip, and we had a wonderful time.",
          questions: [
            { q: "When did they travel?", options: ["Last week", "Last month", "Yesterday", "Two years ago"], answer: 1 },
            { q: "How many days did they stay?", options: ["Three", "Four", "Five", "Seven"], answer: 2 },
            { q: "Did they have problems during the trip?", options: ["Yes, many", "No, none", "Just one", "We don't know"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "A Difficult Day",
          text: "Yesterday was a difficult day for Marcelo. He woke up late and missed the bus. He didn't have time for breakfast, so he arrived at work hungry and tired. During lunch, he finally relaxed and ate a big meal. In the evening, he called his mother and told her about his day. She laughed and said, 'Tomorrow will be better!'",
          questions: [
            { q: "Why did Marcelo arrive at work hungry?", options: ["He didn't like the food", "He didn't have time for breakfast", "He forgot his lunch", "He wasn't hungry"], answer: 1 },
            { q: "What did Marcelo do in the evening?", options: ["He slept early", "He called his mother", "He went to work", "He traveled"], answer: 1 },
            { q: "What did his mother say?", options: ["'That's terrible!'", "'Tomorrow will be better!'", "'Call me tomorrow.'", "Nothing"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva sobre o que você fez ontem, usando pelo menos 4 verbos no passado.", minWords: 20, modelAnswer: "Yesterday, I woke up early and I studied English for an hour. Then I visited my friend, and later we had lunch together at a restaurant." },
        { prompt: "Escreva sobre uma viagem que você fez no passado (real ou imaginária).", minWords: 25, modelAnswer: "Last year, I traveled to the beach with my family. We stayed for one week in a small hotel. I saw dolphins and I bought some souvenirs for my friends. It was an amazing trip." }
      ],
      speaking: [
        { phrase: "I went to the market yesterday.", tip: "'Went' se pronuncia /wɛnt/, rima com 'sent'." },
        { phrase: "Did you see the movie?", tip: "Em perguntas com 'did', o verbo principal volta para a forma base." },
        { phrase: "I didn't have time.", tip: "'Didn't' é a contração de 'did not', pronunciada /ˈdɪdnt/." },
        { phrase: "She visited her grandmother last week.", tip: "O '-ed' de 'visited' soa como uma sílaba extra: /ˈvɪzɪtɪd/." },
        { phrase: "We had a great time.", tip: "'Had' rima com 'sad' e 'bad'." }
      ],
      exercises: {
        fillBlanks: [
          { text: "I ___ (go) to the beach yesterday.", answer: "went" },
          { text: "She ___ (not/have) breakfast this morning.", answer: "didn't have" },
          { text: "___ you see the movie?", answer: "Did" },
          { text: "They ___ (arrive) late last night.", answer: "arrived" },
          { text: "He ___ (buy) a new car last month.", answer: "bought" }
        ],
        matching: [
          { left: "Yesterday", right: "Ontem" },
          { left: "Ago", right: "Atrás/Há" },
          { left: "Went", right: "Foi" },
          { left: "Saw", right: "Viu" },
          { left: "Bought", right: "Comprou" },
          { left: "Visited", right: "Visitou" }
        ],
        ordering: [
          { words: ["went", "I", "yesterday", "market", "the", "to"], answer: "I went to the market yesterday" },
          { words: ["you", "the", "Did", "movie", "see?"], answer: "Did you see the movie?" },
          { words: ["have", "didn't", "breakfast", "She"], answer: "She didn't have breakfast" },
          { words: ["arrived", "late", "They"], answer: "They arrived late" },
          { words: ["ago", "two", "arrived", "He", "hours"], answer: "He arrived two hours ago" }
        ],
        translation: [
          { direction: "pt-en", text: "Eu fui ao mercado ontem.", answer: "I went to the market yesterday." },
          { direction: "pt-en", text: "Você viu o filme?", answer: "Did you see the movie?" },
          { direction: "pt-en", text: "Ela não teve tempo.", answer: "She didn't have time." },
          { direction: "en-pt", text: "They arrived late last night.", answer: "Eles chegaram tarde ontem à noite." },
          { direction: "en-pt", text: "He bought a new car.", answer: "Ele comprou um carro novo." },
          { direction: "en-pt", text: "We had a great time.", answer: "Nós tivemos um ótimo momento." }
        ],
        dictation: [
          { audioText: "I went to the market yesterday.", answer: "I went to the market yesterday." },
          { audioText: "Did you see the movie?", answer: "Did you see the movie?" },
          { audioText: "They arrived late last night.", answer: "They arrived late last night." }
        ],
        dialogue: [
          {
            title: "Talking About Yesterday",
            lines: [
              { speaker: "Ana", text: "What did you do yesterday?" },
              { speaker: "user", prompt: "Diga que você foi à praia:", options: ["I went to the beach.", "I go to the beach.", "I am going to the beach."], answer: 0 },
              { speaker: "Ana", text: "Nice! Did you have fun?" },
              { speaker: "user", prompt: "Diga que sim, você teve um ótimo momento:", options: ["Yes, I had a great time.", "No, I didn't go.", "Yes, I have fun always."], answer: 0 },
              { speaker: "Ana", text: "That sounds wonderful!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Complete: 'I ___ to the market yesterday.'", options: ["go", "goes", "went", "going"], answer: 2, explanation: "'Go' é um verbo irregular; seu passado é 'went', e não segue a regra do '-ed'." },
        { q: "Choose the correct question.", options: ["Did you saw it?", "Did you see it?", "Do you saw it?", "Did you seeing it?"], answer: 1, explanation: "Perguntas no passado simples usam 'Did' + sujeito + verbo na forma base, mesmo com verbos irregulares: 'Did you see it?'" },
        { type: "tf", q: "'Didn't' is the contraction of 'did not'.", answer: true, explanation: "'Didn't' é de fato a contração de 'did not', usada para negar no passado simples." },
        { q: "Complete: 'She ___ (not/have) time.'", options: ["don't have", "doesn't have", "didn't have", "not had"], answer: 2, explanation: "A negativa no passado simples é formada com 'didn't' + verbo na forma base, independente do sujeito." },
        { type: "short", q: "Write the past tense of 'buy'.", answer: ["bought", "Bought"], explanation: "'Buy' é um verbo irregular; seu passado é 'bought'." },
        { q: "'Ago' is used to say:", options: ["Que algo vai acontecer", "Quanto tempo atrás algo aconteceu", "Que algo está acontecendo agora", "Nada disso"], answer: 1, explanation: "'Ago' é usado após uma expressão de tempo para indicar quanto tempo atrás algo aconteceu, como em 'two hours ago'." },
        { type: "tf", q: "Regular verbs form the past by adding '-ed'.", answer: true, explanation: "Verbos regulares formam o passado simples acrescentando '-ed' ao final, como 'work' → 'worked'." },
        { q: "Choose the correct sentence.", options: ["They arrived lately last night.", "They arrived late last night.", "They arrive late last night.", "They arriving late last night."], answer: 1, explanation: "'Late' (tarde) não recebe '-ly' aqui, e o verbo regular 'arrive' forma o passado com '-ed': 'arrived'." },
        { q: "Choose the past tense of 'see'.", options: ["Seed", "Saw", "Seen", "Sees"], answer: 1, explanation: "'See' é um verbo irregular; seu passado é 'saw'." },
        { type: "short", q: "Complete: '___ you see the movie?' (pergunta no passado)", answer: ["Did"], explanation: "Perguntas no passado simples começam com o auxiliar 'Did', antes do sujeito." },
        { q: "'Last week' refers to:", options: ["O futuro", "O presente", "O passado", "Um hábito"], answer: 2, explanation: "'Last week' significa 'semana passada', uma expressão de tempo usada com o passado." },
        { type: "tf", q: "In past simple questions, the main verb changes to the past form too (e.g. 'Did you went?').", answer: false, explanation: "No passado, apenas 'did' muda; o verbo principal volta para a forma base: 'Did you go?'" }
      ]
    },
    {
      id: "a2-m4",
      title: "Viagens e Planos",
      subtitle: "Vocabulário de viagens, transporte e o futuro com 'going to'",
      lesson: {
        intro: "Vamos aprender a falar sobre planos futuros e vocabulário essencial para viagens — de reservar uma passagem a pegar um táxi.",
        sections: [
          {
            heading: "Going to (Planos Futuros)",
            text: "Usamos 'going to' + verbo para falar de planos e intenções já decididas.",
            examples: [
              { en: "I am going to travel next month.", pt: "Eu vou viajar mês que vem." },
              { en: "They are going to visit Paris.", pt: "Eles vão visitar Paris." }
            ]
          },
          {
            heading: "Meios de Transporte",
            text: "Usamos 'by' + meio de transporte para dizer como viajamos.",
            examples: [
              { en: "I usually travel by plane.", pt: "Eu geralmente viajo de avião." },
              { en: "She goes to work by train.", pt: "Ela vai ao trabalho de trem." }
            ]
          },
          {
            heading: "Vocabulário de Viagem",
            text: "Palavras essenciais para o aeroporto, hotel e passeios.",
            examples: [
              { en: "Where is the check-in counter?", pt: "Onde fica o balcão de check-in?" },
              { en: "I have a reservation.", pt: "Eu tenho uma reserva." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "a2-m4-airport", word: "Airport", phonetic: "/ˈɛərpɔːrt/", translation: "Aeroporto", example: "The airport is very busy today.", exampleTranslation: "O aeroporto está muito movimentado hoje." },
        { id: "a2-m4-ticket", word: "Ticket", phonetic: "/ˈtɪkɪt/", translation: "Passagem/Bilhete", example: "I bought my ticket online.", exampleTranslation: "Eu comprei minha passagem online." },
        { id: "a2-m4-suitcase", word: "Suitcase", phonetic: "/ˈsuːtkeɪs/", translation: "Mala", example: "My suitcase is very heavy.", exampleTranslation: "Minha mala está muito pesada." },
        { id: "a2-m4-passport", word: "Passport", phonetic: "/ˈpæspɔːrt/", translation: "Passaporte", example: "Don't forget your passport!", exampleTranslation: "Não esqueça seu passaporte!" },
        { id: "a2-m4-flight", word: "Flight", phonetic: "/flaɪt/", translation: "Voo", example: "Our flight leaves at 9 a.m.", exampleTranslation: "Nosso voo sai às 9h." },
        { id: "a2-m4-hotel", word: "Hotel", phonetic: "/hoʊˈtɛl/", translation: "Hotel", example: "We are staying at a nice hotel.", exampleTranslation: "Estamos nos hospedando em um hotel bom." },
        { id: "a2-m4-reservation", word: "Reservation", phonetic: "/ˌrɛzərˈveɪʃən/", translation: "Reserva", example: "I have a reservation for two nights.", exampleTranslation: "Eu tenho uma reserva para duas noites." },
        { id: "a2-m4-luggage", word: "Luggage", phonetic: "/ˈlʌɡɪdʒ/", translation: "Bagagem", example: "Where can I leave my luggage?", exampleTranslation: "Onde posso deixar minha bagagem?" },
        { id: "a2-m4-train", word: "Train", phonetic: "/treɪn/", translation: "Trem", example: "We are going to travel by train.", exampleTranslation: "Nós vamos viajar de trem." },
        { id: "a2-m4-abroad", word: "Abroad", phonetic: "/əˈbrɔːd/", translation: "No exterior", example: "She is going to study abroad.", exampleTranslation: "Ela vai estudar no exterior." }
      ],
      grammar: {
        title: "Going to + verbo",
        explanation: "'Going to' é usado para planos futuros já decididos, diferente do 'will' (usado para decisões espontâneas ou previsões).",
        table: {
          headers: ["Pronome", "Afirmativa", "Negativa", "Pergunta"],
          rows: [
            ["I", "I am going to travel.", "I am not going to travel.", "Am I going to travel?"],
            ["You/We/They", "You are going to travel.", "You aren't going to travel.", "Are you going to travel?"],
            ["He/She/It", "He is going to travel.", "He isn't going to travel.", "Is he going to travel?"]
          ]
        },
        correct: ["I am going to visit my family.", "Are you going to travel by plane?", "She isn't going to work tomorrow."],
        incorrect: ["I going to visit my family.", "Are you go to travel by plane?", "She isn't going work tomorrow."]
      },
      listening: [
        {
          title: "Planning a Trip",
          accent: "american",
          transcript: "Mark: We are going to travel to Portugal next summer. Julia: That's exciting! Are you going by plane? Mark: Yes, our flight leaves on July 10th. We're going to stay at a small hotel near the beach. Julia: Sounds amazing! Don't forget your passport!",
          questions: [
            { q: "Where are Mark and Julia going to travel?", options: ["Spain", "Portugal", "Brazil", "France"], answer: 1 },
            { q: "When does their flight leave?", options: ["June 10th", "July 10th", "August 10th", "July 1st"], answer: 1 },
            { q: "Where are they going to stay?", options: ["A big hotel in the city", "A small hotel near the beach", "With family", "In a hostel"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "My Trip Plans",
          text: "Next month, I am going to travel to Japan for the first time. I already bought my ticket and I have a hotel reservation in Tokyo. I am going to visit famous temples, try new food, and take a lot of pictures. My flight is going to be very long — almost 24 hours! But I am so excited that I don't mind.",
          questions: [
            { q: "Where is the writer going to travel?", options: ["China", "Japan", "Korea", "Thailand"], answer: 1 },
            { q: "What has the writer already done?", options: ["Nothing yet", "Bought a ticket and booked a hotel", "Learned Japanese", "Packed the suitcase"], answer: 1 },
            { q: "How long is the flight going to be?", options: ["2 hours", "10 hours", "Almost 24 hours", "1 week"], answer: 2 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva sobre seus planos de viagem (reais ou imaginários) usando 'going to'.", minWords: 20, modelAnswer: "Next year, I am going to travel to Italy. I am going to visit Rome and try Italian food. I am going to stay for two weeks." },
        { prompt: "Escreva um pequeno diálogo de check-in em um hotel, usando vocabulário de viagem.", minWords: 15, modelAnswer: "A: Hello, I have a reservation. B: What's your name? A: My name is Ana. B: Great, here is your key." }
      ],
      speaking: [
        { phrase: "I am going to travel next month.", tip: "Na fala natural, 'going to' costuma soar como 'gonna': /ˈɡʌnə/." },
        { phrase: "Where is the check-in counter?", tip: "'Counter' tem o acento na primeira sílaba: COUN-ter." },
        { phrase: "I have a reservation.", tip: "'Reservation' tem 4 sílabas: re-ser-VA-tion." },
        { phrase: "Don't forget your passport!", tip: "'Passport' tem duas sílabas fortes: PASS-port." },
        { phrase: "We are going to stay for a week.", tip: "'Stay' tem som de vogal longa /eɪ/, como em 'day'." }
      ],
      exercises: {
        fillBlanks: [
          { text: "I ___ (going to/travel) next month.", answer: "am going to travel" },
          { text: "___ you going to visit Paris?", answer: "Are" },
          { text: "She ___ (not/going to/work) tomorrow.", answer: "isn't going to work" },
          { text: "Don't forget your ___! (documento para viajar)", answer: "passport" },
          { text: "We are going to stay at a ___ near the beach.", answer: "hotel", options: ["hotel", "airport", "ticket", "luggage"] }
        ],
        matching: [
          { left: "Airport", right: "Aeroporto" },
          { left: "Ticket", right: "Passagem" },
          { left: "Suitcase", right: "Mala" },
          { left: "Passport", right: "Passaporte" },
          { left: "Flight", right: "Voo" },
          { left: "Luggage", right: "Bagagem" }
        ],
        ordering: [
          { words: ["going", "I", "travel", "to", "am"], answer: "I am going to travel" },
          { words: ["going", "you", "Are", "travel", "to?"], answer: "Are you going to travel?" },
          { words: ["your", "forget", "Don't", "passport"], answer: "Don't forget your passport" },
          { words: ["a", "have", "I", "reservation"], answer: "I have a reservation" },
          { words: ["by", "travel", "plane", "We"], answer: "We travel by plane" }
        ],
        translation: [
          { direction: "pt-en", text: "Eu vou viajar mês que vem.", answer: "I am going to travel next month." },
          { direction: "pt-en", text: "Não esqueça seu passaporte.", answer: "Don't forget your passport." },
          { direction: "pt-en", text: "Nós temos uma reserva.", answer: "We have a reservation." },
          { direction: "en-pt", text: "Our flight leaves at 9 a.m.", answer: "Nosso voo sai às 9h." },
          { direction: "en-pt", text: "She is going to study abroad.", answer: "Ela vai estudar no exterior." },
          { direction: "en-pt", text: "Where is the check-in counter?", answer: "Onde fica o balcão de check-in?" }
        ],
        dictation: [
          { audioText: "I am going to travel next month.", answer: "I am going to travel next month." },
          { audioText: "Don't forget your passport.", answer: "Don't forget your passport." },
          { audioText: "We have a reservation.", answer: "We have a reservation." }
        ],
        dialogue: [
          {
            title: "At the Airport",
            lines: [
              { speaker: "Agent", text: "Hello! Do you have your passport?" },
              { speaker: "user", prompt: "Diga que sim, aqui está:", options: ["Yes, here it is.", "No, I am going to work.", "I have a suitcase."], answer: 0 },
              { speaker: "Agent", text: "Great. How many suitcases do you have?" },
              { speaker: "user", prompt: "Diga que você tem uma mala:", options: ["I have one suitcase.", "I am going to Japan.", "My flight is late."], answer: 0 },
              { speaker: "Agent", text: "Perfect, have a nice flight!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct sentence.", options: ["I going to travel.", "I am going to travel.", "I am go to travel.", "I am going travel."], answer: 1, explanation: "'Going to' exige o verbo 'to be' conjugado antes: 'I am going to travel.'" },
        { q: "'Passport' means:", options: ["Passagem", "Passaporte", "Mala", "Aeroporto"], answer: 1, explanation: "'Passport' significa 'passaporte', o documento necessário para viajar ao exterior." },
        { type: "tf", q: "'Going to' is used for future plans already decided.", answer: true, explanation: "Usamos 'going to' para falar de planos futuros que já foram decididos antes do momento da fala." },
        { q: "Complete: '___ you going to visit Paris?'", options: ["Do", "Are", "Is", "Does"], answer: 1, explanation: "Perguntas com 'going to' usam o verbo 'to be' antes do sujeito; com 'you', é 'Are'." },
        { type: "short", q: "Complete: 'We travel ___ plane.' (meio de transporte)", answer: ["by"], explanation: "Usamos a preposição 'by' antes do meio de transporte: 'by plane', 'by train', etc." },
        { q: "'Luggage' means:", options: ["Bagagem", "Passaporte", "Hotel", "Voo"], answer: 0, explanation: "'Luggage' significa 'bagagem', as malas que levamos numa viagem." },
        { type: "tf", q: "'Flight' means 'hotel'.", answer: false, explanation: "'Flight' significa 'voo'; 'hotel' é 'hotel' mesmo (cognato)." },
        { q: "Choose the negative form: 'She is going to work.'", options: ["She isn't going to work.", "She don't going to work.", "She not going to work.", "She isn't go to work."], answer: 0, explanation: "A negativa com 'going to' usa o verbo 'to be' + not antes de 'going to': 'isn't going to work'." },
        { q: "'Reservation' means:", options: ["Reserva", "Passaporte", "Bagagem", "Aeroporto"], answer: 0, explanation: "'Reservation' significa 'reserva', como a de um hotel ou voo." },
        { type: "short", q: "Complete: 'Don't ___ your passport!' (esquecer)", answer: ["forget"], explanation: "'Don't forget' é o imperativo negativo de 'forget' (esquecer), usado para lembrar alguém de algo importante." },
        { q: "Choose the correct question.", options: ["Are you going travel?", "Are you going to travel?", "Do you going to travel?", "Is you going to travel?"], answer: 1, explanation: "A pergunta com 'going to' segue a ordem: 'to be' + sujeito + 'going to' + verbo: 'Are you going to travel?'" },
        { type: "tf", q: "'Suitcase' means 'passagem'.", answer: false, explanation: "'Suitcase' significa 'mala'; 'passagem' é 'ticket'." }
      ]
    },
    {
      id: "a2-m5",
      title: "Descrevendo Pessoas e Lugares",
      subtitle: "Adjetivos, comparativos e superlativos",
      lesson: {
        intro: "No último módulo do A2, vamos aprender a descrever pessoas e lugares e a comparar coisas usando adjetivos comparativos e superlativos.",
        sections: [
          {
            heading: "Adjetivos de Aparência e Personalidade",
            text: "Adjetivos descrevem características físicas e de personalidade.",
            examples: [
              { en: "She is tall and friendly.", pt: "Ela é alta e simpática." },
              { en: "He is short but very funny.", pt: "Ele é baixo mas muito engraçado." }
            ]
          },
          {
            heading: "Comparativos",
            text: "Para comparar duas coisas, adicionamos '-er' a adjetivos curtos ou usamos 'more' com adjetivos longos, seguido de 'than'.",
            examples: [
              { en: "This city is bigger than mine.", pt: "Esta cidade é maior que a minha." },
              { en: "She is more intelligent than him.", pt: "Ela é mais inteligente que ele." }
            ]
          },
          {
            heading: "Superlativos",
            text: "Para dizer que algo é o 'mais' de todos, usamos '-est' ou 'most', com 'the' antes.",
            examples: [
              { en: "This is the tallest building in the city.", pt: "Este é o prédio mais alto da cidade." },
              { en: "He is the most interesting person I know.", pt: "Ele é a pessoa mais interessante que eu conheço." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "a2-m5-tall", word: "Tall", phonetic: "/tɔːl/", translation: "Alto", example: "My brother is very tall.", exampleTranslation: "Meu irmão é muito alto." },
        { id: "a2-m5-short", word: "Short", phonetic: "/ʃɔːrt/", translation: "Baixo", example: "She is shorter than me.", exampleTranslation: "Ela é mais baixa que eu." },
        { id: "a2-m5-friendly", word: "Friendly", phonetic: "/ˈfrɛndli/", translation: "Simpático(a)", example: "Our neighbors are very friendly.", exampleTranslation: "Nossos vizinhos são muito simpáticos." },
        { id: "a2-m5-funny", word: "Funny", phonetic: "/ˈfʌni/", translation: "Engraçado(a)", example: "He is the funniest person I know.", exampleTranslation: "Ele é a pessoa mais engraçada que conheço." },
        { id: "a2-m5-beautiful", word: "Beautiful", phonetic: "/ˈbjuːtɪfəl/", translation: "Bonito(a)", example: "This city is beautiful.", exampleTranslation: "Esta cidade é bonita." },
        { id: "a2-m5-quiet", word: "Quiet", phonetic: "/ˈkwaɪət/", translation: "Quieto(a)/Calmo(a)", example: "The library is very quiet.", exampleTranslation: "A biblioteca é muito quieta." },
        { id: "a2-m5-crowded", word: "Crowded", phonetic: "/ˈkraʊdɪd/", translation: "Lotado(a)", example: "The market is crowded on Saturdays.", exampleTranslation: "O mercado fica lotado aos sábados." },
        { id: "a2-m5-expensive", word: "Expensive", phonetic: "/ɪkˈspɛnsɪv/", translation: "Caro(a)", example: "This restaurant is more expensive than that one.", exampleTranslation: "Este restaurante é mais caro que aquele." },
        { id: "a2-m5-modern", word: "Modern", phonetic: "/ˈmɒdərn/", translation: "Moderno(a)", example: "The new building is very modern.", exampleTranslation: "O prédio novo é muito moderno." },
        { id: "a2-m5-similar", word: "Similar", phonetic: "/ˈsɪmɪlər/", translation: "Parecido(a)", example: "These two cities are similar.", exampleTranslation: "Estas duas cidades são parecidas." }
      ],
      grammar: {
        title: "Comparativos e Superlativos",
        explanation: "Adjetivos curtos (1 sílaba) recebem '-er'/'-est'; adjetivos longos usam 'more'/'most'; alguns são irregulares.",
        table: {
          headers: ["Adjetivo", "Comparativo", "Superlativo"],
          rows: [
            ["tall", "taller", "the tallest"],
            ["big", "bigger", "the biggest"],
            ["beautiful", "more beautiful", "the most beautiful"],
            ["good", "better", "the best"],
            ["bad", "worse", "the worst"]
          ]
        },
        correct: ["This house is bigger than that one.", "She is the most interesting person here.", "This is the best restaurant in town."],
        incorrect: ["This house is more big than that one.", "She is the interestingest person here.", "This is the goodest restaurant in town."]
      },
      listening: [
        {
          title: "Comparing Two Cities",
          accent: "british",
          transcript: "I have lived in two cities: London and my hometown. London is much bigger and more crowded than my hometown. It's also more expensive. But my hometown is quieter and friendlier. Both cities are beautiful, but in different ways. I think London is more modern, but my hometown feels more like home.",
          questions: [
            { q: "Which city is bigger?", options: ["The hometown", "London", "Both are the same size", "Unknown"], answer: 1 },
            { q: "Which city is quieter?", options: ["London", "The hometown", "Both", "Neither"], answer: 1 },
            { q: "How does the speaker feel about the hometown?", options: ["It feels more like home", "It's too crowded", "It's too expensive", "They dislike it"], answer: 0 }
          ]
        }
      ],
      reading: [
        {
          title: "Two Friends, Two Personalities",
          text: "Marina and Julia are best friends, but they are very different. Marina is tall, quiet, and a little shy. She loves reading books at home. Julia is shorter than Marina, but she is much more talkative and outgoing. She loves going to crowded parties. Even though they are different, they are the best of friends.",
          questions: [
            { q: "How is Marina described?", options: ["Short and loud", "Tall and quiet", "Talkative and tall", "Short and shy"], answer: 1 },
            { q: "Who is more outgoing?", options: ["Marina", "Julia", "Both equally", "Neither"], answer: 1 },
            { q: "What does Julia love doing?", options: ["Reading at home", "Going to crowded parties", "Staying quiet", "Studying alone"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Compare duas pessoas que você conhece usando comparativos (ex: mais alto, mais engraçado).", minWords: 20, modelAnswer: "My sister is taller than me, and she is also funnier than I am. But I am more organized than her, and I am a better cook." },
        { prompt: "Descreva sua cidade usando pelo menos 3 adjetivos e um superlativo.", minWords: 20, modelAnswer: "My city is beautiful and modern, but it is a little crowded on weekends. Even so, it is the friendliest city I know, and everyone is kind." }
      ],
      speaking: [
        { phrase: "This city is bigger than mine.", tip: "O '-er' em 'bigger' soa como /ər/, sem enfatizar muito." },
        { phrase: "She is the most interesting person I know.", tip: "'Interesting' tem 3 sílabas fortes: IN-ter-est-ing." },
        { phrase: "He is shorter than me.", tip: "'Shorter' rima com 'sorter'." },
        { phrase: "This is the best restaurant in town.", tip: "'Best' tem som curto de 'e', como em 'bed'." },
        { phrase: "My hometown is quieter and friendlier.", tip: "'Quieter' tem 3 sílabas: QUI-et-er." }
      ],
      exercises: {
        fillBlanks: [
          { text: "This city is ___ (big) than mine.", answer: "bigger" },
          { text: "She is the ___ (funny) person I know.", answer: "funniest" },
          { text: "This restaurant is ___ (expensive) than that one.", answer: "more expensive" },
          { text: "He is ___ (good) than me at English.", answer: "better" },
          { text: "This is the ___ (bad) day ever!", answer: "worst" }
        ],
        matching: [
          { left: "Tall", right: "Alto" },
          { left: "Short", right: "Baixo" },
          { left: "Friendly", right: "Simpático(a)" },
          { left: "Funny", right: "Engraçado(a)" },
          { left: "Crowded", right: "Lotado(a)" },
          { left: "Modern", right: "Moderno(a)" }
        ],
        ordering: [
          { words: ["than", "bigger", "This", "mine", "is", "city"], answer: "This city is bigger than mine" },
          { words: ["is", "She", "person", "funniest", "the"], answer: "She is the funniest person" },
          { words: ["expensive", "more", "This", "is"], answer: "This is more expensive" },
          { words: ["restaurant", "the", "This", "best", "is"], answer: "This is the best restaurant" },
          { words: ["quieter", "is", "hometown", "My"], answer: "My hometown is quieter" }
        ],
        translation: [
          { direction: "pt-en", text: "Esta cidade é maior que a minha.", answer: "This city is bigger than mine." },
          { direction: "pt-en", text: "Ele é a pessoa mais engraçada que conheço.", answer: "He is the funniest person I know." },
          { direction: "pt-en", text: "Este restaurante é mais caro.", answer: "This restaurant is more expensive." },
          { direction: "en-pt", text: "My hometown is quieter and friendlier.", answer: "Minha cidade natal é mais quieta e mais simpática." },
          { direction: "en-pt", text: "This is the best restaurant in town.", answer: "Este é o melhor restaurante da cidade." },
          { direction: "en-pt", text: "She is taller than her sister.", answer: "Ela é mais alta que a irmã dela." }
        ],
        dictation: [
          { audioText: "This city is bigger than mine.", answer: "This city is bigger than mine." },
          { audioText: "She is the funniest person I know.", answer: "She is the funniest person I know." },
          { audioText: "This is the best restaurant in town.", answer: "This is the best restaurant in town." }
        ],
        dialogue: [
          {
            title: "Comparing Cities",
            lines: [
              { speaker: "Leo", text: "Is your hometown bigger than this city?" },
              { speaker: "user", prompt: "Diga que não, é menor:", options: ["No, it's smaller.", "Yes, it's the biggest.", "No, it's more expensive."], answer: 0 },
              { speaker: "Leo", text: "Is it quieter too?" },
              { speaker: "user", prompt: "Diga que sim, é mais quieta:", options: ["Yes, it's quieter.", "No, it's louder.", "Yes, it's bigger."], answer: 0 },
              { speaker: "Leo", text: "Sounds like a nice place to live!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the comparative of 'tall'.", options: ["More tall", "Taller", "Tallest", "Tall-er"], answer: 1, explanation: "Adjetivos curtos de uma sílaba formam o comparativo com '-er': tall → taller." },
        { q: "Choose the superlative of 'good'.", options: ["Gooder", "Goodest", "Best", "More good"], answer: 2, explanation: "'Good' é irregular; seu superlativo é 'the best', não segue o padrão '-est'." },
        { type: "tf", q: "Long adjectives use 'more' to form the comparative.", answer: true, explanation: "Adjetivos longos (geralmente com duas ou mais sílabas) formam o comparativo com 'more' antes do adjetivo." },
        { q: "Complete: 'This house is ___ than that one.' (big)", options: ["big", "bigger", "biggest", "more big"], answer: 1, explanation: "'Big' é um adjetivo curto; dobra a consoante final e recebe '-er': big → bigger." },
        { type: "short", q: "Write the comparative of 'happy'.", answer: ["happier", "Happier"], explanation: "Adjetivos terminados em consoante + 'y' trocam o 'y' por 'i' antes de '-er': happy → happier." },
        { q: "'Crowded' means:", options: ["Vazio", "Lotado", "Silencioso", "Moderno"], answer: 1, explanation: "'Crowded' significa 'lotado', cheio de pessoas." },
        { type: "tf", q: "'Friendly' means 'tímido'.", answer: false, explanation: "'Friendly' significa 'simpático'; 'tímido' é 'shy'." },
        { q: "Choose the correct superlative sentence.", options: ["She is the intelligentest.", "She is the most intelligent.", "She is intelligenter.", "She is more intelligentest."], answer: 1, explanation: "Adjetivos longos formam o superlativo com 'the most', não com '-est': 'the most intelligent'." },
        { q: "'Quiet' is the opposite of:", options: ["Loud", "Tall", "Short", "Modern"], answer: 0, explanation: "'Quiet' (quieto/silencioso) é o oposto de 'loud' (barulhento)." },
        { type: "short", q: "Complete: 'This is ___ best restaurant in town.' (artigo)", answer: ["the"], explanation: "Superlativos são sempre precedidos pelo artigo definido 'the': 'the best restaurant'." },
        { q: "Choose the correct sentence.", options: ["He is more short than me.", "He is shorter than me.", "He is the shorter than me.", "He shorter than me."], answer: 1, explanation: "O comparativo de 'short' é formado com '-er': 'shorter than'." },
        { type: "tf", q: "'Similar' means 'diferente'.", answer: false, explanation: "'Similar' significa 'parecido'; 'diferente' é 'different'." }
      ]
    },
    {
      id: "a2-m6",
      title: "Habilidades e Permissão",
      subtitle: "Can, could e be able to para habilidade e pedidos",
      lesson: {
        intro: "Vamos aprender a falar sobre habilidades (o que você sabe/consegue fazer) e a pedir permissão educadamente usando 'can', 'could' e 'be able to'.",
        sections: [
          {
            heading: "Can para Habilidade no Presente",
            text: "Usamos 'can' para dizer o que alguém sabe ou consegue fazer agora.",
            examples: [
              { en: "I can swim very well.", pt: "Eu sei nadar muito bem." },
              { en: "She can speak three languages.", pt: "Ela sabe falar três idiomas." }
            ]
          },
          {
            heading: "Could para Habilidade no Passado",
            text: "Usamos 'could' para habilidades que alguém tinha no passado.",
            examples: [
              { en: "When I was young, I could run very fast.", pt: "Quando eu era jovem, eu conseguia correr muito rápido." },
              { en: "I couldn't swim when I was five.", pt: "Eu não sabia nadar quando eu tinha cinco anos." }
            ]
          },
          {
            heading: "Pedindo Permissão",
            text: "Usamos 'can', 'could' e 'may' para pedir permissão, do mais informal ao mais formal.",
            examples: [
              { en: "Can I open the window?", pt: "Posso abrir a janela? (informal)" },
              { en: "Could I ask you a question?", pt: "Eu poderia te fazer uma pergunta? (mais educado)" }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "a2-m6-ability", word: "Ability", phonetic: "/əˈbɪləti/", translation: "Habilidade", example: "Swimming is a useful ability.", exampleTranslation: "Nadar é uma habilidade útil." },
        { id: "a2-m6-permission", word: "Permission", phonetic: "/pərˈmɪʃən/", translation: "Permissão", example: "You need permission to enter.", exampleTranslation: "Você precisa de permissão para entrar." },
        { id: "a2-m6-allowed", word: "Allowed", phonetic: "/əˈlaʊd/", translation: "Permitido(a)", example: "Smoking is not allowed here.", exampleTranslation: "Fumar não é permitido aqui." },
        { id: "a2-m6-able-to", word: "Able to", phonetic: "/ˈeɪbəl tuː/", translation: "Capaz de", example: "I am able to solve this problem.", exampleTranslation: "Eu sou capaz de resolver este problema." },
        { id: "a2-m6-skill", word: "Skill", phonetic: "/skɪl/", translation: "Habilidade/Competência", example: "Cooking is a great skill.", exampleTranslation: "Cozinhar é uma ótima habilidade." },
        { id: "a2-m6-fluently", word: "Fluently", phonetic: "/ˈfluːəntli/", translation: "Fluentemente", example: "She speaks English fluently.", exampleTranslation: "Ela fala inglês fluentemente." },
        { id: "a2-m6-instrument", word: "Instrument", phonetic: "/ˈɪnstrəmənt/", translation: "Instrumento", example: "Can you play an instrument?", exampleTranslation: "Você sabe tocar um instrumento?" },
        { id: "a2-m6-request", word: "Request", phonetic: "/rɪˈkwɛst/", translation: "Pedido/Solicitar", example: "I have a small request.", exampleTranslation: "Eu tenho um pequeno pedido." },
        { id: "a2-m6-borrow", word: "Borrow", phonetic: "/ˈbɒroʊ/", translation: "Pegar emprestado", example: "Could I borrow your pen?", exampleTranslation: "Eu poderia pegar sua caneta emprestada?" },
        { id: "a2-m6-manage-to", word: "Manage to", phonetic: "/ˈmænɪdʒ tuː/", translation: "Conseguir (fazer algo difícil)", example: "I managed to finish on time.", exampleTranslation: "Eu consegui terminar a tempo." }
      ],
      grammar: {
        title: "Can / Could / Be able to",
        explanation: "'Can' e 'could' são modais (não mudam de forma); 'be able to' pode ser usado em todos os tempos verbais, incluindo futuro.",
        table: {
          headers: ["Modal", "Tempo", "Exemplo"],
          rows: [
            ["Can", "Presente", "I can swim."],
            ["Could", "Passado", "I could swim when I was six."],
            ["Will be able to", "Futuro", "I will be able to swim after lessons."],
            ["Have been able to", "Present Perfect", "I have been able to swim since I was six."]
          ]
        },
        correct: ["I can speak English.", "I could swim when I was young.", "I will be able to help tomorrow."],
        incorrect: ["I can to speak English.", "I could to swim when I was young.", "I will can help tomorrow."]
      },
      listening: [
        {
          title: "Talking About Skills",
          accent: "british",
          transcript: "A: Can you play any instruments? B: Yes, I can play the guitar. I could play a little piano too when I was younger, but I've forgotten most of it. A: That's impressive! Could you teach me guitar sometime? B: Sure, I'd be happy to!",
          questions: [
            { q: "What instrument can B play?", options: ["Piano", "Guitar", "Violin", "Drums"], answer: 1 },
            { q: "What could B play when younger?", options: ["Guitar", "Drums", "A little piano", "Nothing"], answer: 2 },
            { q: "What does A ask B?", options: ["To borrow money", "To teach guitar", "To buy an instrument", "To sing"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "Learning New Skills",
          text: "When I was a child, I couldn't do many things — I couldn't cook, drive, or speak a foreign language. Now, as an adult, I am able to do all of these things. I can cook simple meals, I can drive a car, and I can speak English fairly well. I believe anyone is able to learn new skills with enough practice and patience.",
          questions: [
            { q: "What couldn't the writer do as a child?", options: ["Nothing", "Cook, drive, speak a foreign language", "Only cook", "Only drive"], answer: 1 },
            { q: "What can the writer do now?", options: ["Nothing new", "Cook, drive, and speak English", "Only speak English", "Only cook"], answer: 1 },
            { q: "What does the writer believe?", options: ["Skills can't be learned", "Anyone can learn new skills with practice", "Only children can learn", "Learning is impossible"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 3 frases sobre coisas que você sabe fazer hoje (can) e 2 que você conseguia fazer quando criança (could).", minWords: 20, modelAnswer: "I can cook well. I can drive a car. I can speak two languages. When I was a child, I could climb trees easily. I could also run very fast." },
        { prompt: "Escreva um pequeno diálogo pedindo permissão educadamente para algo (usando could/may).", minWords: 15, modelAnswer: "A: Could I borrow your pen, please? B: Sure, here you go. A: Thank you so much!" }
      ],
      speaking: [
        { phrase: "I can speak two languages.", tip: "'Can' geralmente é pronunciado rápido e sem ênfase: /kən/." },
        { phrase: "I could swim when I was young.", tip: "'Could' tem o 'l' silencioso: /kʊd/." },
        { phrase: "Could I ask you a question?", tip: "Frase muito útil e educada para começar um pedido." },
        { phrase: "She plays the guitar fluently.", tip: "'Fluently' tem acento na primeira sílaba: FLU-ent-ly." },
        { phrase: "I managed to finish on time.", tip: "'Managed' tem acento na primeira sílaba: MAN-aged." }
      ],
      exercises: {
        fillBlanks: [
          { text: "I ___ speak two languages. (habilidade presente)", answer: "can" },
          { text: "When I was young, I ___ run very fast. (habilidade passada)", answer: "could" },
          { text: "___ I ask you a question? (pedido educado)", answer: "Could" },
          { text: "I ___ (be able to) help tomorrow. (futuro)", answer: "will be able to" },
          { text: "Smoking is not ___ here. (permitido)", answer: "allowed" }
        ],
        matching: [
          { left: "Ability", right: "Habilidade" },
          { left: "Permission", right: "Permissão" },
          { left: "Allowed", right: "Permitido(a)" },
          { left: "Skill", right: "Habilidade/Competência" },
          { left: "Borrow", right: "Pegar emprestado" },
          { left: "Fluently", right: "Fluentemente" }
        ],
        ordering: [
          { words: ["speak", "can", "languages", "I", "two"], answer: "I can speak two languages" },
          { words: ["young", "could", "I", "was", "swim", "when", "I"], answer: "I could swim when I was young" },
          { words: ["ask", "Could", "you", "question", "a", "I?"], answer: "Could I ask you a question?" },
          { words: ["guitar", "plays", "the", "She", "fluently"], answer: "She plays the guitar fluently" },
          { words: ["finish", "managed", "to", "I", "time", "on"], answer: "I managed to finish on time" }
        ],
        translation: [
          { direction: "pt-en", text: "Eu sei falar dois idiomas.", answer: "I can speak two languages." },
          { direction: "pt-en", text: "Quando eu era jovem, eu sabia nadar.", answer: "When I was young, I could swim." },
          { direction: "pt-en", text: "Eu poderia te fazer uma pergunta?", answer: "Could I ask you a question?" },
          { direction: "en-pt", text: "Smoking is not allowed here.", answer: "Fumar não é permitido aqui." },
          { direction: "en-pt", text: "I will be able to help tomorrow.", answer: "Eu vou conseguir ajudar amanhã." },
          { direction: "en-pt", text: "She speaks English fluently.", answer: "Ela fala inglês fluentemente." }
        ],
        dictation: [
          { audioText: "I can speak two languages.", answer: "I can speak two languages." },
          { audioText: "Could I ask you a question?", answer: "Could I ask you a question?" },
          { audioText: "Smoking is not allowed here.", answer: "Smoking is not allowed here." }
        ],
        dialogue: [
          {
            title: "Asking for Permission",
            lines: [
              { speaker: "Colleague", text: "Could I borrow your pen for a moment?" },
              { speaker: "user", prompt: "Diga que sim, claro:", options: ["Sure, here you go.", "No, I can't swim.", "I could play piano."], answer: 0 },
              { speaker: "Colleague", text: "Thanks! By the way, can you speak Spanish?" },
              { speaker: "user", prompt: "Diga que sim, você fala um pouco:", options: ["Yes, I can speak a little.", "Yes, I am allowed.", "No, I borrowed it."], answer: 0 },
              { speaker: "Colleague", text: "That's great!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct sentence for present ability.", options: ["I can to swim.", "I can swim.", "I cans swim.", "I canning swim."], answer: 1, explanation: "'Can' é seguido do verbo na forma base, sem 'to' e sem '-s': 'I can swim.'" },
        { q: "Choose the correct sentence for past ability.", options: ["I could swim when I was young.", "I can swim when I was young.", "I could to swim when I was young.", "I able swim when I was young."], answer: 0, explanation: "'Could' expressa habilidade no passado e é seguido do verbo na forma base, sem 'to'." },
        { type: "tf", q: "'Could' is used for future ability.", answer: false, explanation: "'Could' é usado para habilidade no passado; para o futuro usamos 'will be able to'." },
        { q: "Choose the most polite request.", options: ["Give me your pen.", "Can I have your pen?", "Could I borrow your pen, please?", "Pen now."], answer: 2, explanation: "'Could' combinado com 'please' torna o pedido mais educado e formal do que 'can'." },
        { type: "short", q: "Complete: 'I ___ speak two languages.' (habilidade presente)", answer: ["can"], explanation: "'Can' é o modal usado para expressar habilidade no presente." },
        { q: "'Allowed' means:", options: ["Proibido", "Permitido", "Impossível", "Difícil"], answer: 1, explanation: "'Allowed' significa 'permitido', o oposto de proibido." },
        { type: "tf", q: "'Be able to' can be used in the future tense, unlike 'can'.", answer: true, explanation: "'Can' não tem forma de futuro; usamos 'will be able to' para expressar habilidade no futuro." },
        { q: "Choose the correct sentence.", options: ["I will can help tomorrow.", "I will be able to help tomorrow.", "I will able to help tomorrow.", "I can help tomorrow future."], answer: 1, explanation: "No futuro, usamos 'will be able to' em vez de 'will can', pois dois modais não podem ser combinados diretamente." },
        { q: "'Skill' means:", options: ["Erro", "Habilidade/Competência", "Permissão", "Pedido"], answer: 1, explanation: "'Skill' significa 'habilidade' ou 'competência', uma capacidade desenvolvida com prática." },
        { type: "short", q: "Complete: 'Could I ___ your pen?' (pegar emprestado)", answer: ["borrow"], explanation: "'Borrow' significa 'pegar emprestado', usado para pedir algo emprestado temporariamente." },
        { q: "Choose the correct sentence.", options: ["She speak English fluently.", "She speaks English fluently.", "She speaking English fluently.", "She to speak English fluently."], answer: 1, explanation: "Com 'she' no presente simples, o verbo recebe '-s': 'speaks'." },
        { type: "tf", q: "'Manage to' means to succeed in doing something difficult.", answer: true, explanation: "'Manage to' significa 'conseguir fazer algo', geralmente algo difícil ou que exigiu esforço." }
      ]
    }
  ],
  finalTest: {
    description: "Prova final do nível A2 — 20 questões cobrindo presente simples/contínuo, direções, passado simples, viagens/futuro e comparativos.",
    questions: [
      { q: "Complete: 'She ___ to work every day.'", options: ["go", "goes", "going", "gone"], answer: 1, explanation: "Com he/she/it no presente simples, o verbo recebe '-s' ou '-es': go → goes." },
      { q: "Complete: 'I ___ dinner right now.'", options: ["cook", "cooks", "am cooking", "cooked"], answer: 2, explanation: "'Right now' pede o presente contínuo (to be + verbo-ing) para uma ação em andamento." },
      { q: "Choose the correct imperative.", options: ["You turn left.", "Turn left.", "Turning left.", "Turned left."], answer: 1, explanation: "O imperativo usa o verbo na forma base, sem sujeito: 'Turn left.'" },
      { type: "short", q: "Complete: 'The bank is ___ to the pharmacy.' (ao lado)", answer: ["next"], explanation: "'Next to' significa 'ao lado de'; a resposta completa a expressão fixa 'next to'." },
      { q: "Complete: 'I ___ to the market yesterday.'", options: ["go", "goes", "went", "going"], answer: 2, explanation: "'Go' é irregular; seu passado é 'went', usado com 'yesterday'." },
      { type: "tf", q: "'Didn't' is the contraction of 'did not'.", answer: true, explanation: "'Didn't' é realmente a forma contraída de 'did not', usada para negar no passado simples." },
      { q: "Choose the correct question in the past.", options: ["Did you saw it?", "Did you see it?", "Do you saw it?", "Did you seeing it?"], answer: 1, explanation: "Perguntas no passado simples usam 'Did' + sujeito + verbo na forma base, mesmo com verbos irregulares." },
      { q: "Choose the correct sentence.", options: ["I going to travel.", "I am going to travel.", "I am go to travel.", "I am going travel."], answer: 1, explanation: "'Going to' precisa do verbo 'to be' conjugado antes: 'I am going to travel.'" },
      { type: "short", q: "Complete: 'We travel ___ plane.'", answer: ["by"], explanation: "Usamos a preposição 'by' para indicar o meio de transporte: 'by plane'." },
      { q: "'Passport' means:", options: ["Passagem", "Passaporte", "Mala", "Aeroporto"], answer: 1, explanation: "'Passport' significa 'passaporte', documento necessário para viajar ao exterior." },
      { q: "Choose the comparative of 'tall'.", options: ["More tall", "Taller", "Tallest", "Tall-er"], answer: 1, explanation: "Adjetivos curtos formam o comparativo com '-er': tall → taller." },
      { type: "tf", q: "Long adjectives use 'more' to form the comparative.", answer: true, explanation: "Adjetivos com duas ou mais sílabas geralmente formam o comparativo com 'more' antes do adjetivo." },
      { q: "'Crowded' means:", options: ["Vazio", "Lotado", "Silencioso", "Moderno"], answer: 1, explanation: "'Crowded' significa 'lotado', cheio de gente." },
      { type: "short", q: "Write the comparative of 'happy'.", answer: ["happier", "Happier"], explanation: "Adjetivos terminados em consoante + 'y' trocam o 'y' por 'i' antes de '-er': happy → happier." },
      { q: "'Right now' is used with which tense?", options: ["Present Simple", "Present Continuous", "Past Simple", "Future"], answer: 1, explanation: "'Right now' indica uma ação em progresso no momento da fala, por isso é usado com o presente contínuo." },
      { q: "'Ago' is used to say:", options: ["Que algo vai acontecer", "Quanto tempo atrás algo aconteceu", "Que algo está acontecendo agora", "Nada disso"], answer: 1, explanation: "'Ago' indica quanto tempo atrás algo aconteceu, como em 'two years ago'." },
      { type: "tf", q: "'Never' means 'sempre'.", answer: false, explanation: "'Never' significa 'nunca'; 'sempre' é 'always'." },
      { q: "Choose the correct negative: 'They ___ studying.'", options: ["doesn't", "don't", "isn't", "aren't"], answer: 3, explanation: "No presente contínuo, a negativa usa o verbo 'to be' + not; com 'they' a forma é 'aren't'." },
      { q: "'Luggage' means:", options: ["Bagagem", "Passaporte", "Hotel", "Voo"], answer: 0, explanation: "'Luggage' significa 'bagagem', as malas levadas em uma viagem." },
      { type: "tf", q: "'Going to' is used for future plans already decided.", answer: true, explanation: "Usamos 'going to' para planos futuros que já foram decididos antes do momento da fala." }
    ]
  }
};

window.APP_DATA = APP_DATA;
