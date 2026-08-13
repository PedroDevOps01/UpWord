var APP_DATA = window.APP_DATA || {};

APP_DATA.a1 = {
  modules: [
    {
      id: "a1-m1",
      title: "Primeiros Passos",
      subtitle: "Alfabeto, saudações e pronúncia básica",
      lesson: {
        intro: "Bem-vindo ao seu primeiro módulo de inglês! Aqui você vai aprender a se apresentar, saudar outras pessoas e conhecer o alfabeto em inglês. Vá com calma — cada passo pequeno te aproxima da fluência.",
        sections: [
          {
            heading: "O Alfabeto em Inglês",
            text: "O alfabeto inglês tem 26 letras, as mesmas do português, mas alguns nomes são pronunciados de forma diferente. Ouça o vocabulário desta aula e repita em voz alta para treinar.",
            examples: [
              { en: "A, B, C, D, E", pt: "As primeiras cinco letras do alfabeto" },
              { en: "How do you spell your name?", pt: "Como se escreve seu nome? (letra por letra)" }
            ]
          },
          {
            heading: "Saudações do dia a dia",
            text: "Usamos saudações diferentes dependendo da hora do dia e do nível de formalidade. 'Hi' e 'Hello' podem ser usados a qualquer hora; 'Good morning/afternoon/evening' variam conforme o horário.",
            examples: [
              { en: "Good morning!", pt: "Bom dia!" },
              { en: "Good afternoon!", pt: "Boa tarde!" },
              { en: "Good evening!", pt: "Boa noite! (ao chegar)" },
              { en: "Good night!", pt: "Boa noite! (ao se despedir para dormir)" }
            ]
          },
          {
            heading: "Apresentando-se",
            text: "Para se apresentar, você pode usar frases simples como 'My name is...' ou 'I'm...'. Para perguntar o nome de alguém, use 'What's your name?'.",
            examples: [
              { en: "My name is Gabriel.", pt: "Meu nome é Gabriel." },
              { en: "Nice to meet you.", pt: "Prazer em conhecê-lo(a)." },
              { en: "What's your name?", pt: "Qual é o seu nome?" }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "a1-m1-hello", word: "Hello", phonetic: "/həˈloʊ/", translation: "Olá", example: "Hello! How are you?", exampleTranslation: "Olá! Como você está?" },
        { id: "a1-m1-good-morning", word: "Good morning", phonetic: "/ɡʊd ˈmɔːrnɪŋ/", translation: "Bom dia", example: "Good morning, everyone!", exampleTranslation: "Bom dia, pessoal!" },
        { id: "a1-m1-please", word: "Please", phonetic: "/pliːz/", translation: "Por favor", example: "Can you help me, please?", exampleTranslation: "Você pode me ajudar, por favor?" },
        { id: "a1-m1-thank-you", word: "Thank you", phonetic: "/ˈθæŋk juː/", translation: "Obrigado(a)", example: "Thank you very much!", exampleTranslation: "Muito obrigado(a)!" },
        { id: "a1-m1-sorry", word: "Sorry", phonetic: "/ˈsɒri/", translation: "Desculpe", example: "Sorry, I'm late.", exampleTranslation: "Desculpe, estou atrasado(a)." },
        { id: "a1-m1-name", word: "Name", phonetic: "/neɪm/", translation: "Nome", example: "What's your name?", exampleTranslation: "Qual é o seu nome?" },
        { id: "a1-m1-goodbye", word: "Goodbye", phonetic: "/ɡʊdˈbaɪ/", translation: "Tchau/Adeus", example: "Goodbye, see you tomorrow!", exampleTranslation: "Tchau, até amanhã!" },
        { id: "a1-m1-friend", word: "Friend", phonetic: "/frɛnd/", translation: "Amigo(a)", example: "She is my friend.", exampleTranslation: "Ela é minha amiga." }
      ],
      grammar: {
        title: "Pronomes Pessoais (Subject Pronouns)",
        explanation: "Os pronomes pessoais substituem o nome de pessoas ou coisas na frase. Em inglês, eles sempre aparecem antes do verbo.",
        table: {
          headers: ["Inglês", "Português", "Exemplo"],
          rows: [
            ["I", "eu", "I am happy."],
            ["You", "você/tu", "You are kind."],
            ["He", "ele", "He is tall."],
            ["She", "ela", "She is smart."],
            ["It", "ele/ela (coisa/animal)", "It is a cat."],
            ["We", "nós", "We are friends."],
            ["They", "eles/elas", "They are students."]
          ]
        },
        correct: ["I am a student.", "She is my friend.", "They are happy."],
        incorrect: ["I is a student.", "She are my friend.", "They is happy."]
      },
      listening: [
        {
          title: "A Conversation at School",
          accent: "american",
          audioSrc: "assets/audio/a1-m1-listen-0.mp3",
          audioSource: "tts-pregenerated",
          speedLevels: [0.75, 1, 1.25],
          transcript: "Anna: Good morning! My name is Anna. What's your name? Leo: Hi, Anna! My name is Leo. Nice to meet you. Anna: Nice to meet you too! Where are you from? Leo: I'm from Brazil.",
          questions: [
            { q: "What is the girl's name?", options: ["Anna", "Leo", "Maria", "Brazil"], answer: 0 },
            { q: "Where is Leo from?", options: ["The USA", "England", "Brazil", "Australia"], answer: 2 },
            { q: "What does Leo say when he meets Anna?", options: ["Goodbye", "Nice to meet you", "Good night", "Sorry"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "My First Day",
          text: "Hi! My name is Sofia. I am from Portugal. Today is my first day at a new school. I am a little nervous, but everyone is very friendly. My teacher's name is Mr. Silva. He says, 'Good morning, class! Welcome!' I smile and say, 'Good morning!' I think I will like this school.",
          questions: [
            { q: "Where is Sofia from?", options: ["Brazil", "Spain", "Portugal", "Italy"], answer: 2 },
            { q: "How does Sofia feel?", options: ["Angry", "A little nervous", "Very sad", "Bored"], answer: 1 },
            { q: "What is the teacher's name?", options: ["Mr. Silva", "Mr. Leo", "Ms. Anna", "Mr. Smith"], answer: 0 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 3 frases se apresentando: seu nome, de onde você é e uma saudação.", minWords: 10, modelAnswer: "Hello! My name is Carla. I am from Brazil. Nice to meet you!" },
        { prompt: "Escreva um pequeno diálogo (4 linhas) entre duas pessoas se conhecendo por escrito.", minWords: 15, modelAnswer: "A: Hi! What's your name? B: My name is Tom. And you? A: I'm Lucy. Nice to meet you! B: Nice to meet you too!" }
      ],
      speaking: [
        { phrase: "Hello, my name is...", tip: "Dê ênfase na primeira sílaba de 'Hello': HE-llo." },
        { phrase: "Nice to meet you.", tip: "O 'ee' em 'meet' tem som longo, como em 'feet'." },
        { phrase: "What's your name?", tip: "Fale 'what's' rápido, quase como uma palavra só: 'wots'." },
        { phrase: "Good morning, everyone!", tip: "'Morning' tem o som 'or' bem aberto, como em 'more'." },
        { phrase: "Thank you very much.", tip: "O 'th' de 'thank' é feito com a língua entre os dentes, não é 'f' nem 't'." }
      ],
      exercises: {
        fillBlanks: [
          { text: "Good morning! My ___ is Anna.", answer: "name" },
          { text: "___ to meet you!", answer: "Nice" },
          { text: "Thank ___ very much.", answer: "you" },
          { text: "I ___ from Brazil.", answer: "am", options: ["am", "is", "are", "be"] },
          { text: "___ afternoon, everyone!", answer: "Good" }
        ],
        matching: [
          { left: "Hello", right: "Olá" },
          { left: "Goodbye", right: "Tchau/Adeus" },
          { left: "Please", right: "Por favor" },
          { left: "Thank you", right: "Obrigado(a)" },
          { left: "Sorry", right: "Desculpe" },
          { left: "Friend", right: "Amigo(a)" }
        ],
        ordering: [
          { words: ["is", "name", "My", "Anna"], answer: "My name is Anna" },
          { words: ["you", "meet", "to", "Nice"], answer: "Nice to meet you" },
          { words: ["your", "What's", "name?"], answer: "What's your name?" },
          { words: ["Brazil", "from", "I'm"], answer: "I'm from Brazil" },
          { words: ["morning", "Good", "everyone!"], answer: "Good morning everyone!" }
        ],
        translation: [
          { direction: "pt-en", text: "Bom dia!", answer: "Good morning!" },
          { direction: "pt-en", text: "Qual é o seu nome?", answer: "What's your name?" },
          { direction: "pt-en", text: "Muito obrigado.", answer: "Thank you very much." },
          { direction: "en-pt", text: "Nice to meet you.", answer: "Prazer em conhecê-lo." },
          { direction: "en-pt", text: "See you tomorrow!", answer: "Até amanhã!" },
          { direction: "en-pt", text: "I am from Brazil.", answer: "Eu sou do Brasil." }
        ],
        dictation: [
          { audioText: "My name is Anna.", answer: "My name is Anna." },
          { audioText: "Nice to meet you.", answer: "Nice to meet you." },
          { audioText: "Good morning, everyone.", answer: "Good morning, everyone." }
        ],
        dialogue: [
          {
            title: "Meeting a New Friend",
            lines: [
              { speaker: "Anna", text: "Hi! My name is Anna." },
              { speaker: "user", prompt: "Responda apresentando seu nome:", options: ["My name is Leo.", "I am fine, thanks.", "Goodbye!"], answer: 0 },
              { speaker: "Anna", text: "Nice to meet you! Where are you from?" },
              { speaker: "user", prompt: "Diga de onde você é:", options: ["I am from Brazil.", "I am a teacher.", "See you later."], answer: 0 },
              { speaker: "Anna", text: "Cool! Welcome to the class." }
            ]
          }
        ]
      },
      quiz: [
        { q: "How do you say 'Bom dia' in English?", options: ["Good night", "Good morning", "Good afternoon", "Goodbye"], answer: 1, explanation: "'Good morning' é usado até por volta do meio-dia." },
        { q: "Complete: 'My name ___ Carla.'", options: ["is", "am", "are", "be"], answer: 0, explanation: "Usamos 'is' com a terceira pessoa do singular (my name, he, she, it)." },
        { type: "tf", q: "'Goodbye' is used when you meet someone for the first time.", answer: false, explanation: "'Goodbye' é usado para se despedir, não para conhecer alguém." },
        { q: "Which sentence is correct?", options: ["I is happy.", "I am happy.", "I are happy.", "I be happy."], answer: 1, explanation: "Com 'I', usamos sempre 'am'." },
        { type: "short", q: "Complete with one word: 'Thank ___!'", answer: ["you"], explanation: "'Thank you' é a forma padrão de agradecer." },
        { q: "What does 'Nice to meet you' mean?", options: ["Tchau", "Prazer em conhecê-lo", "Bom dia", "Por favor"], answer: 1, explanation: "'Nice to meet you' é usado ao conhecer alguém pela primeira vez e significa 'prazer em conhecê-lo(a)'." },
        { type: "tf", q: "'She' is used to refer to a man.", answer: false, explanation: "'She' se refere a uma mulher; 'he' se refere a um homem." },
        { q: "Choose the correct pronoun: '___ are my friends.'", options: ["He", "She", "They", "It"], answer: 2, explanation: "'They' é usado para grupos de pessoas ou coisas." },
        { q: "'Good ___!' is said when you say goodnight before sleeping.", options: ["morning", "afternoon", "evening", "night"], answer: 3, explanation: "'Good night' é usado para se despedir antes de dormir, diferente de 'good evening', usado ao encontrar alguém à noite." },
        { type: "short", q: "How do you ask someone's name? Complete: 'What's your ___?'", answer: ["name"], explanation: "Perguntamos o nome de alguém com 'What's your name?', usando a palavra 'name' (nome)." },
        { q: "Which is a polite way to apologize?", options: ["Please", "Sorry", "Thanks", "Hello"], answer: 1, explanation: "'Sorry' é a palavra usada para pedir desculpas; 'please' é usado para pedir algo educadamente." },
        { type: "tf", q: "In English, subject pronouns come before the verb.", answer: true, explanation: "Diferente do português, em inglês a ordem sujeito-verbo é fixa." }
      ]
    },
    {
      id: "a1-m2",
      title: "Quem Sou Eu",
      subtitle: "O verbo 'to be', números e nacionalidades",
      lesson: {
        intro: "Neste módulo você vai aprender a falar sobre quem você é: sua idade, nacionalidade e a usar o verbo mais importante do inglês, o 'to be' (ser/estar).",
        sections: [
          {
            heading: "O verbo 'to be'",
            text: "O verbo 'to be' significa 'ser' ou 'estar' e muda de forma dependendo do pronome: am, is ou are.",
            examples: [
              { en: "I am 20 years old.", pt: "Eu tenho 20 anos." },
              { en: "He is Brazilian.", pt: "Ele é brasileiro." },
              { en: "We are students.", pt: "Nós somos estudantes." }
            ]
          },
          {
            heading: "Números de 0 a 20",
            text: "Números são essenciais para falar sobre idade, telefones e quantidades. Pratique a pronúncia com os botões de áudio no vocabulário.",
            examples: [
              { en: "I have two brothers.", pt: "Eu tenho dois irmãos." },
              { en: "She is fifteen years old.", pt: "Ela tem quinze anos." }
            ]
          },
          {
            heading: "Nacionalidades",
            text: "Para falar de onde você é, use 'I am from + país' ou 'I am + nacionalidade'.",
            examples: [
              { en: "I am from Brazil. I am Brazilian.", pt: "Eu sou do Brasil. Eu sou brasileiro(a)." },
              { en: "She is from Japan. She is Japanese.", pt: "Ela é do Japão. Ela é japonesa." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "a1-m2-zero", word: "Zero", phonetic: "/ˈzɪəroʊ/", translation: "Zero", example: "I have zero brothers.", exampleTranslation: "Eu não tenho irmãos." },
        { id: "a1-m2-one", word: "One", phonetic: "/wʌn/", translation: "Um", example: "I have one sister.", exampleTranslation: "Eu tenho uma irmã." },
        { id: "a1-m2-two", word: "Two", phonetic: "/tuː/", translation: "Dois", example: "I have two cats.", exampleTranslation: "Eu tenho dois gatos." },
        { id: "a1-m2-three", word: "Three", phonetic: "/θriː/", translation: "Três", example: "She has three books.", exampleTranslation: "Ela tem três livros." },
        { id: "a1-m2-four", word: "Four", phonetic: "/fɔːr/", translation: "Quatro", example: "I have four books.", exampleTranslation: "Eu tenho quatro livros." },
        { id: "a1-m2-five", word: "Five", phonetic: "/faɪv/", translation: "Cinco", example: "She has five dollars.", exampleTranslation: "Ela tem cinco dólares." },
        { id: "a1-m2-six", word: "Six", phonetic: "/sɪks/", translation: "Seis", example: "We have six chairs.", exampleTranslation: "Nós temos seis cadeiras." },
        { id: "a1-m2-seven", word: "Seven", phonetic: "/ˈsɛvən/", translation: "Sete", example: "He wakes up at seven.", exampleTranslation: "Ele acorda às sete." },
        { id: "a1-m2-eight", word: "Eight", phonetic: "/eɪt/", translation: "Oito", example: "There are eight students in the room.", exampleTranslation: "Há oito estudantes na sala." },
        { id: "a1-m2-nine", word: "Nine", phonetic: "/naɪn/", translation: "Nove", example: "My brother is nine years old.", exampleTranslation: "Meu irmão tem nove anos." },
        { id: "a1-m2-ten", word: "Ten", phonetic: "/tɛn/", translation: "Dez", example: "He is ten years old.", exampleTranslation: "Ele tem dez anos." },
        { id: "a1-m2-eleven", word: "Eleven", phonetic: "/ɪˈlɛvən/", translation: "Onze", example: "I have eleven dollars.", exampleTranslation: "Eu tenho onze dólares." },
        { id: "a1-m2-twelve", word: "Twelve", phonetic: "/twɛlv/", translation: "Doze", example: "There are twelve months in a year.", exampleTranslation: "Há doze meses em um ano." },
        { id: "a1-m2-thirteen", word: "Thirteen", phonetic: "/ˌθɜːrˈtiːn/", translation: "Treze", example: "She is thirteen years old.", exampleTranslation: "Ela tem treze anos." },
        { id: "a1-m2-fourteen", word: "Fourteen", phonetic: "/ˌfɔːrˈtiːn/", translation: "Quatorze", example: "He is fourteen years old.", exampleTranslation: "Ele tem quatorze anos." },
        { id: "a1-m2-fifteen", word: "Fifteen", phonetic: "/ˌfɪfˈtiːn/", translation: "Quinze", example: "I am fifteen years old.", exampleTranslation: "Eu tenho quinze anos." },
        { id: "a1-m2-sixteen", word: "Sixteen", phonetic: "/ˌsɪksˈtiːn/", translation: "Dezesseis", example: "My sister is sixteen years old.", exampleTranslation: "Minha irmã tem dezesseis anos." },
        { id: "a1-m2-seventeen", word: "Seventeen", phonetic: "/ˌsɛvənˈtiːn/", translation: "Dezessete", example: "He is seventeen years old.", exampleTranslation: "Ele tem dezessete anos." },
        { id: "a1-m2-eighteen", word: "Eighteen", phonetic: "/ˌeɪˈtiːn/", translation: "Dezoito", example: "She is eighteen years old.", exampleTranslation: "Ela tem dezoito anos." },
        { id: "a1-m2-nineteen", word: "Nineteen", phonetic: "/ˌnaɪnˈtiːn/", translation: "Dezenove", example: "My cousin is nineteen years old.", exampleTranslation: "Minha prima tem dezenove anos." },
        { id: "a1-m2-twenty", word: "Twenty", phonetic: "/ˈtwɛnti/", translation: "Vinte", example: "My sister is twenty years old.", exampleTranslation: "Minha irmã tem vinte anos." },
        { id: "a1-m2-brazilian", word: "Brazilian", phonetic: "/brəˈzɪljən/", translation: "Brasileiro(a)", example: "I am Brazilian.", exampleTranslation: "Eu sou brasileiro(a)." },
        { id: "a1-m2-american", word: "American", phonetic: "/əˈmɛrɪkən/", translation: "Americano(a)", example: "He is American.", exampleTranslation: "Ele é americano." },
        { id: "a1-m2-country", word: "Country", phonetic: "/ˈkʌntri/", translation: "País", example: "Brazil is a big country.", exampleTranslation: "O Brasil é um país grande." },
        { id: "a1-m2-age", word: "Age", phonetic: "/eɪdʒ/", translation: "Idade", example: "What is your age?", exampleTranslation: "Qual é a sua idade?" }
      ],
      grammar: {
        title: "Verb 'to be' — Afirmativa, Negativa e Perguntas",
        explanation: "O verbo 'to be' tem formas diferentes para afirmar, negar e perguntar.",
        table: {
          headers: ["Pronome", "Afirmativa", "Negativa", "Pergunta"],
          rows: [
            ["I", "I am", "I am not (I'm not)", "Am I...?"],
            ["You/We/They", "You are", "You are not (aren't)", "Are you...?"],
            ["He/She/It", "He is", "He is not (isn't)", "Is he...?"]
          ]
        },
        correct: ["I am not tired.", "Are you Brazilian?", "Is she a teacher?"],
        incorrect: ["I not am tired.", "You is Brazilian?", "She is a teacher is?"]
      },
      listening: [
        {
          title: "How Old Are You?",
          accent: "british",
          transcript: "Tom: Hi! I'm Tom. How old are you? Mia: I'm sixteen years old. And you? Tom: I'm seventeen. Where are you from? Mia: I'm from Australia. Tom: Nice! I'm from England.",
          questions: [
            { q: "How old is Mia?", options: ["Sixteen", "Seventeen", "Sixty", "Six"], answer: 0 },
            { q: "Where is Tom from?", options: ["Australia", "England", "the USA", "Brazil"], answer: 1 },
            { q: "Where is Mia from?", options: ["England", "Canada", "Australia", "Japan"], answer: 2 }
          ]
        }
      ],
      reading: [
        {
          title: "About Me",
          text: "Hello! I am Diego. I am fourteen years old and I am from Mexico. I am not shy, I am very friendly. My best friend is Lucas. He is thirteen years old and he is from Argentina. We are classmates and we are good friends.",
          questions: [
            { q: "How old is Diego?", options: ["Thirteen", "Fourteen", "Forty", "Four"], answer: 1 },
            { q: "Where is Lucas from?", options: ["Mexico", "Argentina", "Chile", "Peru"], answer: 1 },
            { q: "Is Diego shy?", options: ["Yes, very shy", "No, he is friendly", "Sometimes", "We don't know"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 3 frases falando sua idade, sua nacionalidade e o nome de um amigo.", minWords: 12, modelAnswer: "I am sixteen years old. I am Brazilian. My friend's name is Julia." },
        { prompt: "Escreva um pequeno texto (4-5 frases) apresentando um colega imaginário: nome, idade e nacionalidade.", minWords: 20, modelAnswer: "Her name is Emma. She is fifteen years old. She is from Canada. She is very kind. We are good friends." }
      ],
      speaking: [
        { phrase: "How old are you?", tip: "O som de 'old' é uma vogal longa: /oʊld/." },
        { phrase: "I am fifteen years old.", tip: "Cuidado para não confundir 'fifteen' (15) com 'fifty' (50) — a sílaba tônica muda." },
        { phrase: "Where are you from?", tip: "'Where' começa com o som 'w', não 'v'." },
        { phrase: "I am from Brazil.", tip: "O 'z' de 'Brazil' tem som de 'z' mesmo, diferente do português." },
        { phrase: "Are you a student?", tip: "Em perguntas com 'to be', o verbo vem antes do sujeito." }
      ],
      exercises: {
        fillBlanks: [
          { text: "I ___ fifteen years old.", answer: "am" },
          { text: "___ you Brazilian?", answer: "Are" },
          { text: "She ___ from Japan.", answer: "is" },
          { text: "They ___ not students.", answer: "are" },
          { text: "How old ___ he?", answer: "is" }
        ],
        matching: [
          { left: "0", right: "Zero" },
          { left: "1", right: "One" },
          { left: "2", right: "Two" },
          { left: "3", right: "Three" },
          { left: "5", right: "Five" },
          { left: "7", right: "Seven" },
          { left: "10", right: "Ten" },
          { left: "12", right: "Twelve" },
          { left: "15", right: "Fifteen" },
          { left: "20", right: "Twenty" }
        ],
        ordering: [
          { words: ["are", "you", "Where", "from?"], answer: "Where are you from?" },
          { words: ["Brazilian", "am", "I"], answer: "I am Brazilian" },
          { words: ["old", "are", "How", "you?"], answer: "How old are you?" },
          { words: ["not", "We", "students", "are"], answer: "We are not students" },
          { words: ["fifteen", "is", "She", "years", "old"], answer: "She is fifteen years old" }
        ],
        translation: [
          { direction: "pt-en", text: "Eu tenho quinze anos.", answer: "I am fifteen years old." },
          { direction: "pt-en", text: "Você é brasileiro?", answer: "Are you Brazilian?" },
          { direction: "pt-en", text: "Ela não é americana.", answer: "She is not American." },
          { direction: "en-pt", text: "Where are you from?", answer: "De onde você é?" },
          { direction: "en-pt", text: "He is ten years old.", answer: "Ele tem dez anos." },
          { direction: "en-pt", text: "We are friends.", answer: "Nós somos amigos." }
        ],
        dictation: [
          { audioText: "I am from Brazil.", answer: "I am from Brazil." },
          { audioText: "How old are you?", answer: "How old are you?" },
          { audioText: "She is fifteen years old.", answer: "She is fifteen years old." }
        ],
        dialogue: [
          {
            title: "New Classmate",
            lines: [
              { speaker: "Mia", text: "Hi! I'm Mia. How old are you?" },
              { speaker: "user", prompt: "Diga sua idade:", options: ["I am fourteen years old.", "I am from Brazil.", "Goodbye!"], answer: 0 },
              { speaker: "Mia", text: "Cool! Where are you from?" },
              { speaker: "user", prompt: "Diga de onde você é:", options: ["I am a teacher.", "I am from Portugal.", "See you soon."], answer: 1 },
              { speaker: "Mia", text: "Nice! Welcome to our school." }
            ]
          }
        ]
      },
      quiz: [
        { q: "Complete: 'They ___ students.'", options: ["is", "am", "are", "be"], answer: 2, explanation: "Usamos 'are' com 'they' (assim como com 'you' e 'we')." },
        { q: "Choose the negative form: 'He is happy.'", options: ["He isn't happy.", "He not is happy.", "He amn't happy.", "He aren't happy."], answer: 0, explanation: "A negativa de 'is' se forma acrescentando 'not', contraído como 'isn't'." },
        { type: "tf", q: "The number after 'nine' is 'ten'.", answer: true, explanation: "A sequência numérica segue ...eight, nine, ten..., portanto depois de 'nine' vem 'ten'." },
        { q: "How do you ask someone's age?", options: ["What's your age name?", "How old are you?", "Where are you?", "Who are you?"], answer: 1, explanation: "Perguntamos a idade de alguém com a expressão fixa 'How old are you?', sem tradução literal de 'idade'." },
        { type: "short", q: "Write the number: 3", answer: ["three", "Three"], explanation: "O número 3 se escreve 'three' em inglês." },
        { q: "'I am from Brazil' means:", options: ["Eu vou para o Brasil", "Eu sou do Brasil", "Eu gosto do Brasil", "Eu moro no Brasil"], answer: 1, explanation: "'I am from + país' indica a origem/nacionalidade de alguém, equivalente a 'Eu sou de/do...'." },
        { type: "tf", q: "'Are' is used with 'he' and 'she'.", answer: false, explanation: "Usamos 'is' com he/she/it." },
        { q: "Choose the question form: '___ she Brazilian?'", options: ["Is", "Are", "Am", "Be"], answer: 0, explanation: "Com he/she/it, a pergunta com o verbo 'to be' começa com 'Is'." },
        { q: "'Country' means:", options: ["Cidade", "País", "Continente", "Idioma"], answer: 1, explanation: "'Country' significa 'país' em português." },
        { type: "short", q: "Complete: 'I ___ not a teacher.' (to be)", answer: ["am"], explanation: "A negativa do verbo 'to be' com 'I' é 'I am not', usando 'am'." },
        { q: "Which sentence is correct?", options: ["She fifteen years old is.", "She is fifteen years old.", "Is she fifteen years old", "She old is fifteen years."], answer: 1, explanation: "A ordem correta em inglês é sujeito + verbo + complemento: 'She is fifteen years old.'" },
        { type: "tf", q: "'Twenty' is the number 20.", answer: true, explanation: "'Twenty' corresponde ao número 20 em inglês." }
      ]
    },
    {
      id: "a1-m3",
      title: "Cores e Objetos",
      subtitle: "Cores, objetos do dia a dia e 'there is/there are'",
      lesson: {
        intro: "Vamos aprender a descrever objetos ao seu redor usando cores e as palavras certas para indicar 'isto', 'aquilo' e 'existe'.",
        sections: [
          {
            heading: "Cores",
            text: "As cores são adjetivos e geralmente vêm antes do substantivo em inglês.",
            examples: [
              { en: "a red car", pt: "um carro vermelho" },
              { en: "The sky is blue.", pt: "O céu é azul." }
            ]
          },
          {
            heading: "This, That, These, Those",
            text: "Usamos 'this/these' para coisas próximas e 'that/those' para coisas distantes. 'This' e 'that' são singulares; 'these' e 'those' são plurais.",
            examples: [
              { en: "This is my pen.", pt: "Esta é minha caneta." },
              { en: "Those are your books.", pt: "Aqueles são seus livros." }
            ]
          },
          {
            heading: "There is / There are",
            text: "Usamos 'there is' para uma coisa (singular) e 'there are' para várias coisas (plural), para dizer que algo existe em um lugar.",
            table: {
              headers: ["Forma", "Singular", "Plural"],
              rows: [
                ["Afirmativa", "There is a book on the table.", "There are two books on the table."],
                ["Negativa", "There isn't a book on the table.", "There aren't any books on the table."],
                ["Pergunta", "Is there a book on the table?", "Are there any books on the table?"]
              ]
            },
            correct: ["There is a book on the table.", "There are three chairs in the room.", "Is there a pen here?"],
            incorrect: ["There are a book on the table.", "There is three chairs in the room.", "Is there a pens here?"],
            examples: [
              { en: "There is a book on the table.", pt: "Há um livro na mesa." },
              { en: "There are three chairs in the room.", pt: "Há três cadeiras na sala." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "a1-m3-red", word: "Red", phonetic: "/rɛd/", translation: "Vermelho", example: "I have a red bag.", exampleTranslation: "Eu tenho uma bolsa vermelha." },
        { id: "a1-m3-blue", word: "Blue", phonetic: "/bluː/", translation: "Azul", example: "The sky is blue.", exampleTranslation: "O céu é azul." },
        { id: "a1-m3-green", word: "Green", phonetic: "/ɡriːn/", translation: "Verde", example: "The grass is green.", exampleTranslation: "A grama é verde." },
        { id: "a1-m3-yellow", word: "Yellow", phonetic: "/ˈjɛloʊ/", translation: "Amarelo", example: "The sun is yellow.", exampleTranslation: "O sol é amarelo." },
        { id: "a1-m3-black", word: "Black", phonetic: "/blæk/", translation: "Preto", example: "My cat is black.", exampleTranslation: "Meu gato é preto." },
        { id: "a1-m3-white", word: "White", phonetic: "/waɪt/", translation: "Branco", example: "This wall is white.", exampleTranslation: "Esta parede é branca." },
        { id: "a1-m3-book", word: "Book", phonetic: "/bʊk/", translation: "Livro", example: "This is my book.", exampleTranslation: "Este é meu livro." },
        { id: "a1-m3-table", word: "Table", phonetic: "/ˈteɪbəl/", translation: "Mesa", example: "There is a book on the table.", exampleTranslation: "Há um livro na mesa." },
        { id: "a1-m3-chair", word: "Chair", phonetic: "/tʃɛr/", translation: "Cadeira", example: "There are two chairs here.", exampleTranslation: "Há duas cadeiras aqui." },
        { id: "a1-m3-bag", word: "Bag", phonetic: "/bæɡ/", translation: "Bolsa/Mochila", example: "Is this your bag?", exampleTranslation: "Esta é sua bolsa?" }
      ],
      grammar: {
        title: "This / That / These / Those",
        explanation: "Escolhemos a palavra certa de acordo com a distância e a quantidade.",
        table: {
          headers: ["Perto", "Longe"],
          rows: [
            ["This (singular)", "That (singular)"],
            ["These (plural)", "Those (plural)"]
          ]
        },
        correct: ["This is my pen.", "Those are her shoes.", "These are new books."],
        incorrect: ["This are my pen.", "Those is her shoes.", "These is new books."]
      },
      listening: [
        {
          title: "In the Classroom",
          accent: "australian",
          transcript: "Teacher: Look! There is a red book on the table. Student: Is that your book? Teacher: No, it isn't. It's yours! There are also two blue pens here. Student: Thank you! Those are my pens.",
          questions: [
            { q: "What color is the book?", options: ["Blue", "Red", "Green", "Black"], answer: 1 },
            { q: "How many pens are there?", options: ["One", "Two", "Three", "Four"], answer: 1 },
            { q: "Whose book is it?", options: ["The teacher's", "The student's", "Nobody's", "Unknown"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "My Room",
          text: "This is my room. It is small but very cozy. There is a big white bed near the window. There is a blue chair next to my desk. There are many books on the shelf — I love reading! My favorite color is green, so my curtains are green too.",
          questions: [
            { q: "What color is the chair?", options: ["Red", "White", "Blue", "Green"], answer: 2 },
            { q: "What is on the shelf?", options: ["Clothes", "Books", "Toys", "Shoes"], answer: 1 },
            { q: "What is the writer's favorite color?", options: ["Blue", "White", "Black", "Green"], answer: 3 }
          ]
        }
      ],
      writing: [
        { prompt: "Descreva 3 objetos que você vê agora, incluindo a cor de cada um.", minWords: 12, modelAnswer: "This is my phone. It is black. That is my bag. It is red." },
        { prompt: "Escreva sobre seu quarto ou sala usando 'there is/there are' pelo menos 3 vezes.", minWords: 20, minSentences: 3, requiredStructures: ["there is", "there are"], modelAnswer: "There is a table in my room. There are two chairs near the window. There is a green lamp on the desk, and there are some books on the shelf." }
      ],
      speaking: [
        { phrase: "This is my book.", tip: "'This' tem o som 'th' com a língua entre os dentes." },
        { phrase: "There is a red chair here.", tip: "'There' e 'their' têm a mesma pronúncia, cuidado ao escrever!" },
        { phrase: "Those are my pens.", tip: "O plural 'those' rima com 'nose'." },
        { phrase: "What color is it?", tip: "'Color' é pronunciado /ˈkʌlər/, sem o som de 'o' longo." },
        { phrase: "Is that your bag?", tip: "A entoação de pergunta sobe no final da frase." }
      ],
      exercises: {
        fillBlanks: [
          { text: "___ is my book.", answer: "This" },
          { text: "There ___ two chairs in the room.", answer: "are" },
          { text: "The sky is ___.", answer: "blue", options: ["blue", "book", "chair", "this"] },
          { text: "___ are my shoes (over there).", answer: "Those" },
          { text: "There ___ a cat on the bed.", answer: "is" }
        ],
        matching: [
          { left: "Red", right: "Vermelho" },
          { left: "Blue", right: "Azul" },
          { left: "Green", right: "Verde" },
          { left: "Yellow", right: "Amarelo" },
          { left: "Black", right: "Preto" },
          { left: "White", right: "Branco" }
        ],
        ordering: [
          { words: ["is", "my", "This", "book"], answer: "This is my book" },
          { words: ["are", "my", "Those", "pens"], answer: "Those are my pens" },
          { words: ["a", "There", "table", "is"], answer: "There is a table" },
          { words: ["chairs", "are", "There", "two"], answer: "There are two chairs" },
          { words: ["color", "is", "What", "it?"], answer: "What color is it?" }
        ],
        translation: [
          { direction: "pt-en", text: "Isto é meu livro.", answer: "This is my book." },
          { direction: "pt-en", text: "Há três cadeiras aqui.", answer: "There are three chairs here." },
          { direction: "pt-en", text: "O céu é azul.", answer: "The sky is blue." },
          { direction: "en-pt", text: "Those are my shoes.", answer: "Aqueles são meus sapatos." },
          { direction: "en-pt", text: "There is a red bag on the table.", answer: "Há uma bolsa vermelha na mesa." },
          { direction: "en-pt", text: "My cat is black.", answer: "Meu gato é preto." }
        ],
        dictation: [
          { audioText: "This is my book.", answer: "This is my book." },
          { audioText: "There are two chairs.", answer: "There are two chairs." },
          { audioText: "The sky is blue.", answer: "The sky is blue." }
        ],
        dialogue: [
          {
            title: "Whose Bag Is This?",
            lines: [
              { speaker: "Sam", text: "Is this your bag?" },
              { speaker: "user", prompt: "Confirme que é sua bolsa:", options: ["Yes, it is. Thank you!", "No, it is a book.", "There are two."], answer: 0 },
              { speaker: "Sam", text: "What color is it?" },
              { speaker: "user", prompt: "Diga a cor da bolsa:", options: ["It is Tuesday.", "It is red.", "It is a chair."], answer: 1 },
              { speaker: "Sam", text: "Nice bag!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct word: '___ is my pen.' (near)", options: ["This", "That", "These", "Those"], answer: 0, explanation: "'This' é usado para algo singular e próximo de quem fala." },
        { q: "Choose the correct word: '___ are her books.' (far, plural)", options: ["This", "That", "These", "Those"], answer: 3, explanation: "'Those' é usado para coisas plurais e distantes." },
        { type: "tf", q: "'There is' is used with plural nouns.", answer: false, explanation: "'There is' é usado com substantivos singulares; 'there are' com plurais." },
        { q: "Complete: 'There ___ five chairs here.'", options: ["is", "are", "am", "be"], answer: 1, explanation: "Usamos 'are' com substantivos plurais, como 'five chairs'." },
        { type: "short", q: "What color do you get mixing blue and yellow? (in English)", answer: ["green", "Green"], explanation: "Misturar azul (blue) e amarelo (yellow) resulta na cor verde ('green')." },
        { q: "'This is my book' — 'this' refers to something:", options: ["Far away", "Close", "Plural", "In the past"], answer: 1, explanation: "'This' indica algo singular e próximo (perto) de quem fala." },
        { q: "Choose the plural form correctly used:", options: ["These book", "These books", "This books", "That books"], answer: 1, explanation: "O plural de 'this' é 'these', e o substantivo também deve ir para o plural: 'these books'." },
        { type: "tf", q: "'Black' and 'white' are colors.", answer: true, explanation: "'Black' (preto) e 'white' (branco) são nomes de cores em inglês." },
        { q: "Complete: 'Is ___ your bag?' (pointing at something close)", options: ["this", "those", "these", "there"], answer: 0, explanation: "'This' é usado para apontar algo singular e próximo, mesmo em perguntas." },
        { type: "short", q: "Complete: 'There ___ a book on the table.' (to be)", answer: ["is"], explanation: "Usamos 'there is' com substantivos singulares, como 'a book'." },
        { q: "Which sentence correctly uses 'there are'?", options: ["There are a cat.", "There are two cats.", "There is two cats.", "There cats are."], answer: 1, explanation: "'There are two cats' está correta porque 'are' concorda com o substantivo plural 'cats'." },
        { type: "tf", q: "'That' is used for things close to the speaker.", answer: false, explanation: "'That' é usado para coisas distantes; 'this' é usado para coisas próximas." }
      ]
    },
    {
      id: "a1-m4",
      title: "Minha Família e Rotina",
      subtitle: "Família, posse (my/your/his/her) e rotina diária",
      lesson: {
        intro: "Vamos falar sobre a família e o que fazemos todos os dias. Você vai aprender os adjetivos possessivos e vocabulário de rotina.",
        sections: [
          {
            heading: "Vocabulário de Família",
            text: "Conhecer os nomes dos membros da família ajuda muito em conversas do dia a dia.",
            examples: [
              { en: "This is my mother.", pt: "Esta é minha mãe." },
              { en: "He is my brother.", pt: "Ele é meu irmão." }
            ]
          },
          {
            heading: "Adjetivos Possessivos",
            text: "Usamos my, your, his, her, its, our, their para indicar posse, sempre antes do substantivo.",
            examples: [
              { en: "This is her book.", pt: "Este é o livro dela." },
              { en: "Their house is big.", pt: "A casa deles é grande." }
            ]
          },
          {
            heading: "Rotina Diária",
            text: "Verbos de rotina descrevem o que fazemos todos os dias, geralmente no presente simples.",
            examples: [
              { en: "I wake up at seven.", pt: "Eu me levanto às sete." },
              { en: "She goes to school every day.", pt: "Ela vai à escola todos os dias." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "a1-m4-mother", word: "Mother", phonetic: "/ˈmʌðər/", translation: "Mãe", example: "My mother is a doctor.", exampleTranslation: "Minha mãe é médica." },
        { id: "a1-m4-father", word: "Father", phonetic: "/ˈfɑːðər/", translation: "Pai", example: "His father works a lot.", exampleTranslation: "O pai dele trabalha muito." },
        { id: "a1-m4-brother", word: "Brother", phonetic: "/ˈbrʌðər/", translation: "Irmão", example: "I have one brother.", exampleTranslation: "Eu tenho um irmão." },
        { id: "a1-m4-sister", word: "Sister", phonetic: "/ˈsɪstər/", translation: "Irmã", example: "Her sister is funny.", exampleTranslation: "A irmã dela é divertida." },
        { id: "a1-m4-family", word: "Family", phonetic: "/ˈfæməli/", translation: "Família", example: "I love my family.", exampleTranslation: "Eu amo minha família." },
        { id: "a1-m4-wake-up", word: "Wake up", phonetic: "/weɪk ʌp/", translation: "Levantar-se", example: "I wake up at 7 a.m.", exampleTranslation: "Eu me levanto às 7h." },
        { id: "a1-m4-breakfast", word: "Breakfast", phonetic: "/ˈbrɛkfəst/", translation: "Café da manhã", example: "We eat breakfast together.", exampleTranslation: "Nós comemos café da manhã juntos." },
        { id: "a1-m4-work", word: "Work", phonetic: "/wɜːrk/", translation: "Trabalhar/Trabalho", example: "He goes to work by bus.", exampleTranslation: "Ele vai ao trabalho de ônibus." },
        { id: "a1-m4-school", word: "School", phonetic: "/skuːl/", translation: "Escola", example: "She goes to school every day.", exampleTranslation: "Ela vai à escola todos os dias." },
        { id: "a1-m4-sleep", word: "Sleep", phonetic: "/sliːp/", translation: "Dormir", example: "I sleep at ten p.m.", exampleTranslation: "Eu durmo às 22h." }
      ],
      grammar: {
        title: "Possessive Adjectives",
        explanation: "Adjetivos possessivos vêm antes do substantivo e não mudam com o gênero do objeto, apenas com a pessoa.",
        table: {
          headers: ["Pronome", "Possessivo", "Exemplo"],
          rows: [
            ["I", "my", "my book"],
            ["You", "your", "your bag"],
            ["He", "his", "his car"],
            ["She", "her", "her phone"],
            ["It", "its", "its tail"],
            ["We", "our", "our house"],
            ["They", "their", "their dog"]
          ]
        },
        correct: ["This is her phone.", "Their house is big.", "I love my family."],
        incorrect: ["This is she phone.", "They house is big.", "I love I family."]
      },
      listening: [
        {
          title: "A Typical Morning",
          accent: "american",
          transcript: "Every day, my family wakes up early. My father wakes up at six. My mother makes breakfast at half past six. My brother and I wake up at seven. We eat breakfast together, and then we go to school and work.",
          questions: [
            { q: "Who wakes up first?", options: ["The mother", "The father", "The brother", "The speaker"], answer: 1 },
            { q: "What does the mother do at 6:30?", options: ["Sleeps", "Makes breakfast", "Goes to work", "Reads"], answer: 1 },
            { q: "Who eats breakfast together?", options: ["Only the parents", "Only the children", "The whole family", "Nobody"], answer: 2 }
          ]
        }
      ],
      reading: [
        {
          title: "My Family",
          text: "I come from a small family. My father's name is Paulo, and he is an engineer. My mother's name is Rita, and she is a nurse. I have one sister, Bia. She is younger than me. We live in a small house with our dog, Rex. Every evening, we have dinner together and talk about our day.",
          questions: [
            { q: "What is the father's job?", options: ["Doctor", "Nurse", "Engineer", "Teacher"], answer: 2 },
            { q: "Who is Bia?", options: ["The mother", "The sister", "The dog", "The father"], answer: 1 },
            { q: "What is the name of the family's dog?", options: ["Bia", "Rita", "Rex", "Paulo"], answer: 2 }
          ]
        }
      ],
      writing: [
        { prompt: "Descreva 3 pessoas da sua família usando adjetivos possessivos (my, his, her).", minWords: 15, modelAnswer: "My mother is kind. My father is funny. Her name is Ana and his name is Carlos." },
        { prompt: "Escreva sobre sua rotina matinal usando pelo menos 4 verbos de rotina.", minWords: 20, modelAnswer: "I wake up at seven every morning. I eat breakfast with my family. Then I go to school by bus. In the evening, I do my homework and I sleep at ten p.m." }
      ],
      speaking: [
        { phrase: "This is my family.", tip: "'Family' tem o acento na primeira sílaba: FA-mi-ly." },
        { phrase: "My mother is a doctor.", tip: "'Mother' tem o som 'th' vibrante, diferente de 'thank'." },
        { phrase: "I wake up at seven.", tip: "'Wake' rima com 'cake' e 'lake'." },
        { phrase: "We eat breakfast together.", tip: "'Breakfast' é pronunciado /ˈbrɛkfəst/, o 'ea' tem som de 'e' curto aqui." },
        { phrase: "Their house is big.", tip: "'Their' e 'there' se pronunciam igual, mas têm significados diferentes." }
      ],
      exercises: {
        fillBlanks: [
          { text: "This is ___ mother. (eu)", answer: "my" },
          { text: "___ father works a lot. (ele)", answer: "His" },
          { text: "I ___ up at seven every day.", answer: "wake" },
          { text: "She goes to ___ every day. (lugar de estudo)", answer: "school" },
          { text: "We eat ___ together in the morning.", answer: "breakfast" }
        ],
        matching: [
          { left: "Mother", right: "Mãe" },
          { left: "Father", right: "Pai" },
          { left: "Brother", right: "Irmão" },
          { left: "Sister", right: "Irmã" },
          { left: "Family", right: "Família" },
          { left: "Sleep", right: "Dormir" }
        ],
        ordering: [
          { words: ["is", "This", "mother", "my"], answer: "This is my mother" },
          { words: ["at", "wake", "seven", "I", "up"], answer: "I wake up at seven" },
          { words: ["big", "house", "Their", "is"], answer: "Their house is big" },
          { words: ["school", "goes", "She", "to"], answer: "She goes to school" },
          { words: ["together", "eat", "We", "breakfast"], answer: "We eat breakfast together" }
        ],
        translation: [
          { direction: "pt-en", text: "Esta é minha mãe.", answer: "This is my mother." },
          { direction: "pt-en", text: "Eu me levanto às sete.", answer: "I wake up at seven." },
          { direction: "pt-en", text: "A casa deles é grande.", answer: "Their house is big." },
          { direction: "en-pt", text: "He goes to work by bus.", answer: "Ele vai ao trabalho de ônibus." },
          { direction: "en-pt", text: "I have one brother.", answer: "Eu tenho um irmão." },
          { direction: "en-pt", text: "We sleep at ten p.m.", answer: "Nós dormimos às 22h." }
        ],
        dictation: [
          { audioText: "This is my family.", answer: "This is my family." },
          { audioText: "I wake up at seven.", answer: "I wake up at seven." },
          { audioText: "We eat breakfast together.", answer: "We eat breakfast together." }
        ],
        dialogue: [
          {
            title: "Talking About Family",
            lines: [
              { speaker: "Ben", text: "Do you have brothers or sisters?" },
              { speaker: "user", prompt: "Diga que você tem uma irmã:", options: ["I have one sister.", "I wake up at seven.", "This is my school."], answer: 0 },
              { speaker: "Ben", text: "What does your father do?" },
              { speaker: "user", prompt: "Diga a profissão do seu pai (engenheiro):", options: ["My father is a doctor.", "My father is an engineer.", "My father is my brother."], answer: 1 },
              { speaker: "Ben", text: "That's great!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct possessive: 'This is ___ book.' (dela)", options: ["his", "her", "their", "its"], answer: 1, explanation: "'Her' é o adjetivo possessivo usado para 'dela' (she → her)." },
        { q: "'Brother' means:", options: ["Irmã", "Irmão", "Pai", "Mãe"], answer: 1, explanation: "'Brother' significa 'irmão' em português." },
        { type: "tf", q: "'Their' and 'there' sound the same but have different meanings.", answer: true, explanation: "'Their' (deles/delas) e 'there' (lá/há) têm a mesma pronúncia, mas significados diferentes." },
        { q: "Complete: 'We ___ breakfast at 7 a.m.'", options: ["eat", "eats", "eating", "ate"], answer: 0, explanation: "Com 'we', o verbo no presente simples fica na forma base: 'eat'." },
        { type: "short", q: "Complete: 'I wake ___ at seven.' (verbo levantar)", answer: ["up"], explanation: "'Wake up' é o verbo frasal que significa 'levantar-se/acordar'." },
        { q: "Choose the correct possessive for 'they': '___ house is big.'", options: ["Our", "Your", "Their", "His"], answer: 2, explanation: "'Their' é o adjetivo possessivo correspondente a 'they' (eles/elas)." },
        { type: "tf", q: "'Sleep' means 'levantar-se'.", answer: false, explanation: "'Sleep' significa 'dormir'; 'levantar-se' é 'wake up'." },
        { q: "'Family' means:", options: ["Amigo", "Família", "Escola", "Trabalho"], answer: 1, explanation: "'Family' significa 'família' em português." },
        { q: "Choose the correct sentence.", options: ["He house is big.", "His house is big.", "Him house is big.", "He's house is big."], answer: 1, explanation: "Adjetivos possessivos como 'his' vêm antes do substantivo: 'His house is big.'" },
        { type: "short", q: "Complete: 'She goes to ___ every day.' (escola)", answer: ["school"], explanation: "'School' significa 'escola', o lugar para onde vamos estudar." },
        { q: "'My mother is a nurse' — what is her job?", options: ["Teacher", "Doctor", "Nurse", "Engineer"], answer: 2, explanation: "'Nurse' significa 'enfermeira', a profissão mencionada na frase." },
        { type: "tf", q: "Possessive adjectives come after the noun in English.", answer: false, explanation: "Adjetivos possessivos vêm antes do substantivo em inglês, não depois." }
      ]
    },
    {
      id: "a1-m5",
      title: "Compras e Comida",
      subtitle: "Vocabulário de compras, alimentos e a diferença entre a/an e some/any",
      lesson: {
        intro: "Neste último módulo do nível A1, você vai aprender vocabulário essencial para ir ao mercado, pedir comida e perguntar preços.",
        sections: [
          {
            heading: "A / An",
            text: "Usamos 'a' antes de palavras que começam com som de consoante e 'an' antes de som de vogal.",
            examples: [
              { en: "a banana", pt: "uma banana" },
              { en: "an apple", pt: "uma maçã" },
              { en: "an orange", pt: "uma laranja" }
            ]
          },
          {
            heading: "Some / Any",
            text: "'Some' é usado em afirmações e 'any' em negativas e perguntas.",
            examples: [
              { en: "I have some bread.", pt: "Eu tenho um pouco de pão." },
              { en: "Do you have any milk?", pt: "Você tem leite?" },
              { en: "I don't have any sugar.", pt: "Eu não tenho açúcar." }
            ]
          },
          {
            heading: "Perguntando o preço",
            text: "Para saber o preço de algo, usamos 'How much is it?' (singular) ou 'How much are they?' (plural).",
            examples: [
              { en: "How much is this apple?", pt: "Quanto custa esta maçã?" },
              { en: "It's two dollars.", pt: "Custa dois dólares." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "a1-m5-apple", word: "Apple", phonetic: "/ˈæpəl/", translation: "Maçã", example: "I want an apple, please.", exampleTranslation: "Eu quero uma maçã, por favor." },
        { id: "a1-m5-bread", word: "Bread", phonetic: "/brɛd/", translation: "Pão", example: "We need some bread.", exampleTranslation: "Nós precisamos de um pouco de pão." },
        { id: "a1-m5-milk", word: "Milk", phonetic: "/mɪlk/", translation: "Leite", example: "Do you have any milk?", exampleTranslation: "Você tem leite?" },
        { id: "a1-m5-water", word: "Water", phonetic: "/ˈwɔːtər/", translation: "Água", example: "Can I have some water?", exampleTranslation: "Posso ter um pouco de água?" },
        { id: "a1-m5-rice", word: "Rice", phonetic: "/raɪs/", translation: "Arroz", example: "I eat rice every day.", exampleTranslation: "Eu como arroz todos os dias." },
        { id: "a1-m5-market", word: "Market", phonetic: "/ˈmɑːrkɪt/", translation: "Mercado", example: "Let's go to the market.", exampleTranslation: "Vamos ao mercado." },
        { id: "a1-m5-money", word: "Money", phonetic: "/ˈmʌni/", translation: "Dinheiro", example: "I don't have much money.", exampleTranslation: "Eu não tenho muito dinheiro." },
        { id: "a1-m5-price", word: "Price", phonetic: "/praɪs/", translation: "Preço", example: "What is the price of this bag?", exampleTranslation: "Qual é o preço desta bolsa?" },
        { id: "a1-m5-cheap", word: "Cheap", phonetic: "/tʃiːp/", translation: "Barato", example: "This is very cheap!", exampleTranslation: "Isto é muito barato!" },
        { id: "a1-m5-expensive", word: "Expensive", phonetic: "/ɪkˈspɛnsɪv/", translation: "Caro", example: "That car is expensive.", exampleTranslation: "Aquele carro é caro." }
      ],
      grammar: {
        title: "How much / How many",
        explanation: "'How much' é usado com substantivos incontáveis e para perguntar preços; 'how many' é usado com substantivos contáveis no plural.",
        table: {
          headers: ["Pergunta", "Uso", "Exemplo"],
          rows: [
            ["How much", "Incontáveis / preços", "How much is this bread?"],
            ["How many", "Contáveis (plural)", "How many apples do you have?"]
          ]
        },
        correct: ["How much is this?", "How many apples do you want?", "I have some milk."],
        incorrect: ["How many is this?", "How much apples do you want?", "I have some milks."]
      },
      listening: [
        {
          title: "At the Market",
          accent: "british",
          transcript: "Customer: Excuse me, how much is this bread? Seller: It's one dollar. Customer: And how much are these apples? Seller: They are two dollars for five. Customer: Great, I'll take some bread and some apples, please.",
          questions: [
            { q: "How much is the bread?", options: ["One dollar", "Two dollars", "Five dollars", "It's free"], answer: 0 },
            { q: "How many apples cost two dollars?", options: ["Two", "Three", "Four", "Five"], answer: 3 },
            { q: "What does the customer buy?", options: ["Only bread", "Only apples", "Bread and apples", "Milk and rice"], answer: 2 }
          ]
        }
      ],
      reading: [
        {
          title: "Grocery Shopping",
          text: "Every Saturday, my mother and I go to the market. We buy some bread, some fruit, and some vegetables. Apples and bananas are usually cheap, but oranges can be expensive in winter. My mother always asks, 'How much is this?' before buying anything. At the end, we don't have much money left, but we have a lot of good food!",
          questions: [
            { q: "When do they go to the market?", options: ["Every Monday", "Every Saturday", "Every day", "Once a year"], answer: 1 },
            { q: "What can be expensive in winter?", options: ["Bread", "Bananas", "Oranges", "Rice"], answer: 2 },
            { q: "What does the mother always ask?", options: ["'What time is it?'", "'How much is this?'", "'Where is it?'", "'Who is this?'"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva uma lista de compras com pelo menos 5 alimentos, usando 'a', 'an' ou 'some'.", minWords: 15, modelAnswer: "I need some bread, an apple, a banana, some rice, some milk, and some water for the week." },
        { prompt: "Escreva um pequeno diálogo de compra no mercado perguntando o preço de 2 itens.", minWords: 20, modelAnswer: "A: How much is this bread? B: It's one dollar. A: And how much are the apples? B: They are two dollars." }
      ],
      speaking: [
        { phrase: "How much is this?", tip: "A entoação de pergunta com 'how much' sobe levemente no final." },
        { phrase: "I would like some bread, please.", tip: "'Would like' é uma forma educada de dizer o que você quer." },
        { phrase: "This is very cheap!", tip: "'Cheap' tem som de 'ee' longo, como em 'sheep'." },
        { phrase: "That is expensive.", tip: "'Expensive' tem o acento na segunda sílaba: ex-PEN-sive." },
        { phrase: "Do you have any milk?", tip: "Em perguntas, usamos 'any', não 'some'." }
      ],
      exercises: {
        fillBlanks: [
          { text: "I want ___ apple, please.", answer: "an", options: ["a", "an", "some", "any"] },
          { text: "We need ___ bread.", answer: "some", options: ["a", "an", "some", "many"] },
          { text: "___ is this bag?", answer: "How much" },
          { text: "Do you have ___ milk?", answer: "any", options: ["some", "any", "a", "an"] },
          { text: "That car is very ___. (caro)", answer: "expensive" }
        ],
        matching: [
          { left: "Apple", right: "Maçã" },
          { left: "Bread", right: "Pão" },
          { left: "Milk", right: "Leite" },
          { left: "Water", right: "Água" },
          { left: "Cheap", right: "Barato" },
          { left: "Expensive", right: "Caro" }
        ],
        ordering: [
          { words: ["is", "much", "How", "this?"], answer: "How much is this?" },
          { words: ["some", "need", "We", "bread"], answer: "We need some bread" },
          { words: ["any", "have", "you", "Do", "milk?"], answer: "Do you have any milk?" },
          { words: ["is", "very", "This", "cheap"], answer: "This is very cheap" },
          { words: ["an", "want", "I", "apple"], answer: "I want an apple" }
        ],
        translation: [
          { direction: "pt-en", text: "Quanto custa isto?", answer: "How much is this?" },
          { direction: "pt-en", text: "Nós precisamos de um pouco de pão.", answer: "We need some bread." },
          { direction: "pt-en", text: "Isto é muito caro.", answer: "This is very expensive." },
          { direction: "en-pt", text: "Do you have any milk?", answer: "Você tem leite?" },
          { direction: "en-pt", text: "This is very cheap.", answer: "Isto é muito barato." },
          { direction: "en-pt", text: "I want an apple, please.", answer: "Eu quero uma maçã, por favor." }
        ],
        dictation: [
          { audioText: "How much is this?", answer: "How much is this?" },
          { audioText: "We need some bread.", answer: "We need some bread." },
          { audioText: "This is very expensive.", answer: "This is very expensive." }
        ],
        dialogue: [
          {
            title: "Shopping for Fruit",
            lines: [
              { speaker: "Seller", text: "Hello! How can I help you?" },
              { speaker: "user", prompt: "Pergunte o preço das maçãs:", options: ["How much are the apples?", "What is your name?", "I am fine, thanks."], answer: 0 },
              { speaker: "Seller", text: "They are two dollars for five." },
              { speaker: "user", prompt: "Diga que vai levar algumas maçãs:", options: ["I'll take some apples, please.", "I don't like apples.", "This is my family."], answer: 0 },
              { speaker: "Seller", text: "Great choice! Anything else?" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct article: '___ orange'", options: ["a", "an", "some", "any"], answer: 1, explanation: "'An' é usado antes de palavras que começam com som de vogal, como 'orange'." },
        { q: "Choose the correct article: '___ banana'", options: ["a", "an", "some", "any"], answer: 0, explanation: "'A' é usado antes de palavras que começam com som de consoante, como 'banana'." },
        { type: "tf", q: "'Some' is usually used in negative sentences.", answer: false, explanation: "'Some' é mais comum em afirmações; 'any' é usado em negativas e perguntas." },
        { q: "Complete: 'Do you have ___ milk?'", options: ["a", "an", "some", "any"], answer: 3, explanation: "Em perguntas, usamos 'any' em vez de 'some'." },
        { type: "short", q: "Complete: '___ much is this?' (pergunta sobre preço)", answer: ["How"], explanation: "Perguntamos o preço de algo com a expressão 'How much is this?'." },
        { q: "'Cheap' is the opposite of:", options: ["Expensive", "Small", "Big", "Good"], answer: 0, explanation: "'Cheap' (barato) é o oposto de 'expensive' (caro)." },
        { q: "Choose the correct sentence.", options: ["How many is this bread?", "How much is this bread?", "How much are this bread?", "How many this bread?"], answer: 1, explanation: "'How much' é usado com substantivos incontáveis como 'bread' e com o verbo 'is'." },
        { type: "tf", q: "'Expensive' means 'barato'.", answer: false, explanation: "'Expensive' significa 'caro'; 'barato' é 'cheap'." },
        { q: "'Market' means:", options: ["Mercado", "Dinheiro", "Preço", "Comida"], answer: 0, explanation: "'Market' significa 'mercado' em português." },
        { type: "short", q: "Complete: 'I don't have ___ money.' (negativa)", answer: ["any"], explanation: "Em frases negativas, usamos 'any' em vez de 'some'." },
        { q: "Choose the correct plural question.", options: ["How much apples do you have?", "How many apples do you have?", "How much apple you have?", "How many apple do you have?"], answer: 1, explanation: "Com substantivos contáveis no plural, usamos 'how many': 'How many apples do you have?'" },
        { type: "tf", q: "'Water' is countable, so we say 'a water'.", answer: false, explanation: "'Water' é incontável; usamos 'some water' ou 'a glass of water'." }
      ]
    },
    {
      id: "a1-m6",
      title: "Que Horas São?",
      subtitle: "Dizer a hora e preposições de tempo (at, in, on)",
      lesson: {
        intro: "Neste módulo extra, vamos aprender a dizer e perguntar a hora, falar sobre nossa rotina com horários específicos, e usar as preposições de tempo 'at', 'in' e 'on'.",
        sections: [
          {
            heading: "Perguntando e Dizendo a Hora",
            text: "Usamos 'What time is it?' para perguntar a hora e 'It's...' para responder.",
            examples: [
              { en: "What time is it?", pt: "Que horas são?" },
              { en: "It's three o'clock.", pt: "São três horas." },
              { en: "It's half past seven.", pt: "São sete e meia." }
            ]
          },
          {
            heading: "Preposições de Tempo: At, In, On",
            text: "Usamos 'at' com horários exatos, 'in' com partes do dia/meses/anos, e 'on' com dias da semana e datas.",
            examples: [
              { en: "I wake up at seven.", pt: "Eu me levanto às sete." },
              { en: "I study in the morning.", pt: "Eu estudo de manhã." },
              { en: "I have class on Monday.", pt: "Eu tenho aula na segunda-feira." }
            ]
          },
          {
            heading: "Minha Rotina com Horários",
            text: "Combine verbos de rotina com horários para descrever seu dia com detalhes.",
            examples: [
              { en: "I have lunch at noon.", pt: "Eu almoço ao meio-dia." },
              { en: "I go to bed at eleven at night.", pt: "Eu vou dormir às onze da noite." }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "a1-m6-oclock", word: "O'clock", phonetic: "/əˈklɒk/", translation: "Em ponto", example: "It's five o'clock.", exampleTranslation: "São cinco horas em ponto." },
        { id: "a1-m6-half-past", word: "Half past", phonetic: "/hæf pæst/", translation: "E meia", example: "It's half past two.", exampleTranslation: "São duas e meia." },
        { id: "a1-m6-quarter-past", word: "Quarter past", phonetic: "/ˈkwɔːrtər pæst/", translation: "E quinze", example: "It's quarter past six.", exampleTranslation: "São seis e quinze." },
        { id: "a1-m6-quarter-to", word: "Quarter to", phonetic: "/ˈkwɔːrtər tuː/", translation: "Quinze para", example: "It's quarter to nine.", exampleTranslation: "São quinze para as nove." },
        { id: "a1-m6-noon", word: "Noon", phonetic: "/nuːn/", translation: "Meio-dia", example: "We eat lunch at noon.", exampleTranslation: "Almoçamos ao meio-dia." },
        { id: "a1-m6-midnight", word: "Midnight", phonetic: "/ˈmɪdnaɪt/", translation: "Meia-noite", example: "The party ends at midnight.", exampleTranslation: "A festa termina à meia-noite." },
        { id: "a1-m6-morning", word: "Morning", phonetic: "/ˈmɔːrnɪŋ/", translation: "Manhã", example: "I exercise in the morning.", exampleTranslation: "Eu me exercito de manhã." },
        { id: "a1-m6-afternoon", word: "Afternoon", phonetic: "/ˌæftərˈnuːn/", translation: "Tarde", example: "I work in the afternoon.", exampleTranslation: "Eu trabalho de tarde." },
        { id: "a1-m6-schedule", word: "Schedule", phonetic: "/ˈskɛdʒuːl/", translation: "Horário/Agenda", example: "What's your schedule like today?", exampleTranslation: "Como é sua agenda hoje?" },
        { id: "a1-m6-early-late", word: "Early/Late", phonetic: "/ˈɜːrli/leɪt/", translation: "Cedo/Tarde (atrasado)", example: "I don't like to arrive late.", exampleTranslation: "Eu não gosto de chegar atrasado." }
      ],
      grammar: {
        title: "Preposições de Tempo: At, In, On",
        explanation: "A escolha certa da preposição depende do tipo de tempo mencionado.",
        table: {
          headers: ["Preposição", "Uso", "Exemplo"],
          rows: [
            ["At", "Horários exatos", "at seven o'clock, at noon, at midnight"],
            ["In", "Partes do dia, meses, anos", "in the morning, in July, in 2024"],
            ["On", "Dias da semana, datas", "on Monday, on my birthday"]
          ]
        },
        correct: ["I wake up at seven.", "I study in the morning.", "I have class on Monday."],
        incorrect: ["I wake up in seven.", "I study on the morning.", "I have class at Monday."]
      },
      listening: [
        {
          title: "What Time Is It?",
          accent: "american",
          transcript: "A: Excuse me, what time is it? B: It's quarter past four. A: Thank you! Do you know what time the museum closes? B: I think it closes at five thirty, so you still have time. A: Great, thank you so much!",
          questions: [
            { q: "What time is it in the conversation?", options: ["Four o'clock", "Quarter past four", "Half past four", "Quarter to four"], answer: 1 },
            { q: "What time does the museum close?", options: ["Five o'clock", "Five fifteen", "Five thirty", "Six o'clock"], answer: 2 },
            { q: "Does the person have time to visit?", options: ["Yes", "No", "The museum is closed", "Unknown"], answer: 0 }
          ]
        }
      ],
      reading: [
        {
          title: "My Weekday Schedule",
          text: "On weekdays, my schedule is always the same. I wake up at six thirty and have breakfast at seven. I go to work at eight and have lunch at noon. In the afternoon, I usually have meetings. I get home at six in the evening and have dinner at seven thirty. I go to bed at eleven at night. On weekends, my schedule is much more relaxed!",
          questions: [
            { q: "What time does the writer wake up?", options: ["Six o'clock", "Six thirty", "Seven o'clock", "Seven thirty"], answer: 1 },
            { q: "When does the writer usually have meetings?", options: ["In the morning", "At noon", "In the afternoon", "At night"], answer: 2 },
            { q: "How is the writer's schedule on weekends?", options: ["The same", "More relaxed", "Busier", "Unknown"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva sua rotina de um dia da semana com horários específicos, usando at/in/on.", minWords: 25, modelAnswer: "I wake up at seven. In the morning, I study English. I have lunch at noon. On Fridays, I meet my friends in the evening." },
        { prompt: "Escreva um pequeno diálogo perguntando e respondendo que horas são.", minWords: 15, modelAnswer: "A: Excuse me, what time is it? B: It's half past three. A: Thank you very much! B: You're welcome!" }
      ],
      speaking: [
        { phrase: "What time is it?", tip: "Entoação de pergunta simples, sobe levemente no final." },
        { phrase: "It's half past seven.", tip: "'Half past' é usado para 'e meia', sempre depois da hora cheia." },
        { phrase: "I wake up at seven o'clock.", tip: "'O'clock' só é usado com horas exatas (não com 'half past' ou 'quarter to')." },
        { phrase: "I have lunch at noon.", tip: "'Noon' e 'midnight' não usam 'o'clock' junto." },
        { phrase: "My schedule is very busy today.", tip: "'Schedule' pode ser pronunciado /ˈskɛdʒuːl/ ou /ˈʃɛdjuːl/." }
      ],
      exercises: {
        fillBlanks: [
          { text: "What ___ is it? (hora)", answer: "time" },
          { text: "I wake up ___ seven. (preposição)", answer: "at" },
          { text: "I study ___ the morning. (preposição)", answer: "in" },
          { text: "I have class ___ Monday. (preposição)", answer: "on" },
          { text: "It's ___ past three. (e meia)", answer: "half" }
        ],
        matching: [
          { left: "Noon", right: "Meio-dia" },
          { left: "Midnight", right: "Meia-noite" },
          { left: "Schedule", right: "Horário/Agenda" },
          { left: "Morning", right: "Manhã" },
          { left: "Afternoon", right: "Tarde" },
          { left: "Early", right: "Cedo" }
        ],
        ordering: [
          { words: ["time", "is", "What", "it?"], answer: "What time is it?" },
          { words: ["seven", "up", "wake", "I", "at"], answer: "I wake up at seven" },
          { words: ["morning", "study", "I", "the", "in"], answer: "I study in the morning" },
          { words: ["Monday", "class", "have", "I", "on"], answer: "I have class on Monday" },
          { words: ["noon", "lunch", "have", "I", "at"], answer: "I have lunch at noon" }
        ],
        translation: [
          { direction: "pt-en", text: "Que horas são?", answer: "What time is it?" },
          { direction: "pt-en", text: "Eu me levanto às sete.", answer: "I wake up at seven." },
          { direction: "pt-en", text: "São sete e meia.", answer: "It's half past seven." },
          { direction: "en-pt", text: "I have class on Monday.", answer: "Eu tenho aula na segunda-feira." },
          { direction: "en-pt", text: "I study in the morning.", answer: "Eu estudo de manhã." },
          { direction: "en-pt", text: "The party ends at midnight.", answer: "A festa termina à meia-noite." }
        ],
        dictation: [
          { audioText: "What time is it?", answer: "What time is it?" },
          { audioText: "I wake up at seven.", answer: "I wake up at seven." },
          { audioText: "It's half past seven.", answer: "It's half past seven." }
        ],
        dialogue: [
          {
            title: "Asking the Time",
            lines: [
              { speaker: "Ana", text: "Excuse me, what time is it?" },
              { speaker: "user", prompt: "Diga que são quinze para as nove:", options: ["It's quarter to nine.", "It's nine o'clock.", "It's midnight."], answer: 0 },
              { speaker: "Ana", text: "Thanks! Do you know when the store opens?" },
              { speaker: "user", prompt: "Diga que abre às nove:", options: ["It opens at nine.", "It opens in nine.", "It opens on nine."], answer: 0 },
              { speaker: "Ana", text: "Perfect, thank you!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct preposition: 'I wake up ___ seven.'", options: ["in", "on", "at", "to"], answer: 2, explanation: "Usamos 'at' com horários exatos, como 'at seven'." },
        { q: "Choose the correct preposition: 'I study ___ the morning.'", options: ["at", "in", "on", "for"], answer: 1, explanation: "Usamos 'in' com partes do dia, como 'in the morning'." },
        { type: "tf", q: "'On' is used with days of the week.", answer: true, explanation: "Usamos 'on' com dias da semana, como 'on Monday'." },
        { q: "'Half past seven' means:", options: ["7:00", "7:15", "7:30", "7:45"], answer: 2, explanation: "'Half past seven' significa 'sete e meia', ou seja, 7:30." },
        { type: "short", q: "Complete: 'What ___ is it?' (hora)", answer: ["time"], explanation: "Perguntamos as horas com a expressão 'What time is it?'." },
        { q: "'Noon' means:", options: ["Meia-noite", "Meio-dia", "Manhã", "Tarde"], answer: 1, explanation: "'Noon' significa 'meio-dia' em português." },
        { type: "tf", q: "'O'clock' can be used with 'half past three'.", answer: false, explanation: "'O'clock' só é usado com horas exatas, como 'three o'clock'." },
        { q: "Choose the correct preposition: 'I have class ___ Monday.'", options: ["at", "in", "on", "for"], answer: 2, explanation: "Usamos 'on' com dias da semana, como 'on Monday'." },
        { q: "'Schedule' means:", options: ["Horário/Agenda", "Relógio", "Calendário", "Despertador"], answer: 0, explanation: "'Schedule' significa 'horário' ou 'agenda' em português." },
        { type: "short", q: "Complete: 'It's ___ to nine.' (quinze para)", answer: ["quarter"], explanation: "'Quarter to nine' significa 'quinze para as nove'." },
        { q: "Choose the correct sentence.", options: ["I wake up in seven.", "I wake up at seven.", "I wake up on seven.", "I wake up for seven."], answer: 1, explanation: "Usamos 'at' com horários exatos, como 'at seven'." },
        { type: "tf", q: "'Midnight' means twelve o'clock at night.", answer: true, explanation: "'Midnight' significa meia-noite, ou seja, doze horas da noite." }
      ]
    }
  ],
  finalTest: {
    description: "Prova final do nível A1 — 20 questões cobrindo saudações, verbo to be, números, cores, this/that, família, posse e compras.",
    questions: [
      { q: "Choose the correct greeting for the morning.", options: ["Good night", "Good morning", "Goodbye", "Good evening"], answer: 1, explanation: "'Good morning' é a saudação usada pela manhã, até por volta do meio-dia." },
      { q: "Complete: 'I ___ a student.'", options: ["am", "is", "are", "be"], answer: 0, explanation: "Usamos 'am' apenas com o pronome 'I'." },
      { q: "Choose the correct pronoun: '___ is my friend.' (ela)", options: ["He", "She", "They", "It"], answer: 1, explanation: "'She' é o pronome usado para se referir a uma mulher (ela)." },
      { type: "short", q: "Write the number: 10", answer: ["ten", "Ten"], explanation: "O número 10 se escreve 'ten' em inglês." },
      { q: "What color do you get mixing blue and yellow?", options: ["Red", "Purple", "Green", "Orange"], answer: 2, explanation: "Misturar azul (blue) e amarelo (yellow) resulta na cor verde (green)." },
      { q: "Choose the correct word: '___ is my book.' (perto)", options: ["This", "That", "These", "Those"], answer: 0, explanation: "'This' é usado para algo singular e próximo de quem fala." },
      { type: "tf", q: "'There is' is used with plural nouns.", answer: false, explanation: "'There is' é usado com substantivos singulares; 'there are' é usado com plurais." },
      { q: "Choose the correct possessive: '___ house is big.' (deles)", options: ["His", "Her", "Their", "Its"], answer: 2, explanation: "'Their' é o adjetivo possessivo correspondente a 'they' (eles/elas)." },
      { q: "'Brother' means:", options: ["Irmã", "Irmão", "Mãe", "Pai"], answer: 1, explanation: "'Brother' significa 'irmão' em português." },
      { type: "short", q: "Complete: 'I wake ___ at seven.'", answer: ["up"], explanation: "'Wake up' é o verbo frasal que significa 'levantar-se/acordar'." },
      { q: "Choose the correct article: '___ apple'", options: ["a", "an", "some", "any"], answer: 1, explanation: "'An' é usado antes de palavras que começam com som de vogal, como 'apple'." },
      { q: "Complete: 'Do you have ___ milk?'", options: ["a", "an", "some", "any"], answer: 3, explanation: "Em perguntas, usamos 'any' em vez de 'some'." },
      { q: "'Expensive' means:", options: ["Barato", "Caro", "Grátis", "Pequeno"], answer: 1, explanation: "'Expensive' significa 'caro' em português." },
      { type: "tf", q: "'Good night' is used to greet someone in the morning.", answer: false, explanation: "'Good night' é usado para se despedir antes de dormir, não como saudação matinal." },
      { q: "Choose the negative form of 'He is happy.'", options: ["He isn't happy.", "He not is happy.", "He amn't happy.", "He amn't happy"], answer: 0, explanation: "A negativa do verbo 'to be' se forma com 'not', contraído como 'isn't'." },
      { q: "'Nice to meet you' is said when:", options: ["Você se despede", "Você conhece alguém", "Você pede desculpas", "Você agradece"], answer: 1, explanation: "'Nice to meet you' é dito ao conhecer alguém pela primeira vez." },
      { type: "short", q: "Complete: 'How ___ is this?' (pergunta sobre preço)", answer: ["much"], explanation: "Perguntamos o preço de algo com a expressão 'How much is this?'." },
      { q: "Choose the correct sentence.", options: ["They is students.", "They are students.", "They am students.", "They be students."], answer: 1, explanation: "Usamos 'are' com o pronome 'they'." },
      { q: "'Family' means:", options: ["Amigo", "Trabalho", "Família", "Escola"], answer: 2, explanation: "'Family' significa 'família' em português." },
      { type: "tf", q: "'An' is used before words starting with a vowel sound.", answer: true, explanation: "'An' é usado antes de palavras que começam com som de vogal, como 'apple' ou 'orange'." }
    ]
  }
};

window.APP_DATA = APP_DATA;
