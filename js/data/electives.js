var APP_DATA = window.APP_DATA || {};

APP_DATA.electives = [
  {
    id: 'travel',
    code: 'TRV',
    name: 'Inglês para Viagem',
    tagline: 'Fale com confiança em qualquer aeroporto',
    description: 'Check-in, imigração, hospedagem e como pedir ajuda em viagens — vocabulário essencial para viajar tranquilo.',
    color: '#0E7C90'
  },
  {
    id: 'interview',
    code: 'JOB',
    name: 'Inglês para Entrevista',
    tagline: 'Impressione na próxima entrevista',
    description: 'Perguntas comuns de entrevista, como falar de pontos fortes/fracos e experiência profissional em inglês.',
    color: '#6B4FA0'
  },
  {
    id: 'business',
    code: 'BIZ',
    name: 'Business English',
    tagline: 'Comunique-se bem no ambiente corporativo',
    description: 'E-mails profissionais, reuniões e vocabulário corporativo essencial.',
    color: '#8A5A2B'
  }
];

APP_DATA.travel = {
  modules: [
    {
      id: "travel-m1",
      title: "Na Viagem",
      subtitle: "Check-in, imigração e hospedagem",
      lesson: {
        intro: "Viajar para um país de língua inglesa fica muito mais tranquilo quando você domina as frases essenciais do aeroporto ao hotel. Vamos praticar as situações mais comuns.",
        sections: [
          {
            heading: "No Aeroporto",
            text: "No check-in e na imigração, você vai ouvir perguntas parecidas na maioria das vezes.",
            examples: [
              { en: "Can I see your passport and boarding pass, please?", pt: "Posso ver seu passaporte e cartão de embarque, por favor?" },
              { en: "What is the purpose of your visit?", pt: "Qual é o motivo da sua visita?" }
            ]
          },
          {
            heading: "No Hotel",
            text: "No check-in do hotel, você vai precisar confirmar sua reserva e pedir informações.",
            examples: [
              { en: "I have a reservation under the name Silva.", pt: "Eu tenho uma reserva no nome Silva." },
              { en: "What time is check-out?", pt: "Que horas é o check-out?" }
            ]
          },
          {
            heading: "Pedindo Ajuda",
            text: "Frases para pedir ajuda ou indicações quando você estiver perdido ou precisar de algo.",
            examples: [
              { en: "Excuse me, could you help me, please?", pt: "Com licença, você poderia me ajudar, por favor?" },
              { en: "I'm lost. Can you show me on the map?", pt: "Estou perdido. Você pode me mostrar no mapa?" }
            ]
          }
        ]
      },
      vocabulary: [
        { word: "Boarding pass", phonetic: "/ˈbɔːrdɪŋ pæs/", translation: "Cartão de embarque", example: "Please have your boarding pass ready.", exampleTranslation: "Por favor, tenha seu cartão de embarque em mãos." },
        { word: "Customs", phonetic: "/ˈkʌstəmz/", translation: "Alfândega", example: "You need to go through customs.", exampleTranslation: "Você precisa passar pela alfândega." },
        { word: "Luggage claim", phonetic: "/ˈlʌɡɪdʒ kleɪm/", translation: "Retirada de bagagem", example: "The luggage claim is downstairs.", exampleTranslation: "A retirada de bagagem é no andar de baixo." },
        { word: "Reservation", phonetic: "/ˌrɛzərˈveɪʃən/", translation: "Reserva", example: "I have a reservation for two nights.", exampleTranslation: "Eu tenho uma reserva para duas noites." },
        { word: "Check-out", phonetic: "/tʃɛk aʊt/", translation: "Saída do hotel", example: "Check-out is at eleven a.m.", exampleTranslation: "O check-out é às 11h." },
        { word: "Receipt", phonetic: "/rɪˈsiːt/", translation: "Recibo/Comprovante", example: "Can I have a receipt, please?", exampleTranslation: "Posso ter um recibo, por favor?" },
        { word: "Currency exchange", phonetic: "/ˈkʌrənsi ɪksˈtʃeɪndʒ/", translation: "Casa de câmbio", example: "Where is the nearest currency exchange?", exampleTranslation: "Onde fica a casa de câmbio mais próxima?" },
        { word: "Delayed", phonetic: "/dɪˈleɪd/", translation: "Atrasado(a)", example: "Our flight is delayed.", exampleTranslation: "Nosso voo está atrasado." },
        { word: "Gate", phonetic: "/ɡeɪt/", translation: "Portão de embarque", example: "The gate changed to B12.", exampleTranslation: "O portão mudou para B12." },
        { word: "Round trip", phonetic: "/raʊnd trɪp/", translation: "Ida e volta", example: "I'd like a round trip ticket.", exampleTranslation: "Eu gostaria de uma passagem de ida e volta." }
      ],
      grammar: {
        title: "Pedidos Educados com 'Could' e 'Would'",
        explanation: "Em viagens, pedimos coisas de forma educada usando 'Could you...?' e 'Would you...?', mais formais que 'Can you...?'.",
        table: {
          headers: ["Menos formal", "Mais formal"],
          rows: [
            ["Can you help me?", "Could you help me, please?"],
            ["Can I have water?", "Could I have some water, please?"],
            ["Show me the way.", "Would you show me the way, please?"]
          ]
        },
        correct: ["Could you help me with my luggage?", "Would you like anything else?", "Could I have a receipt, please?"],
        incorrect: ["Could you to help me with my luggage?", "Would you liking anything else?", "Could I have a receipt please you?"]
      },
      listening: [
        {
          title: "At the Hotel Front Desk",
          accent: "british",
          transcript: "Receptionist: Good evening! How can I help you? Guest: Hi, I have a reservation under the name Silva. Receptionist: Let me check... Yes, a double room for three nights. Could I see your passport, please? Guest: Sure, here it is. Receptionist: Thank you. Breakfast is included, from 7 to 10 a.m.",
          questions: [
            { q: "How many nights is the reservation for?", options: ["One", "Two", "Three", "Four"], answer: 2 },
            { q: "What does the receptionist ask for?", options: ["A credit card", "A passport", "A boarding pass", "A receipt"], answer: 1 },
            { q: "What time is breakfast?", options: ["6 to 9 a.m.", "7 to 10 a.m.", "8 to 11 a.m.", "Not included"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "Surviving Airport Chaos",
          text: "My flight was delayed by three hours, and the gate changed twice. I went to the information desk and asked, 'Excuse me, could you tell me which gate is for flight 205?' A friendly staff member checked and told me gate B12. I still had time, so I exchanged some money at the currency exchange and grabbed a coffee. Traveling teaches you patience!",
          questions: [
            { q: "What happened to the flight?", options: ["It was cancelled", "It was delayed", "It left early", "Nothing happened"], answer: 1 },
            { q: "What did the writer ask the staff member?", options: ["About the weather", "Which gate was for the flight", "About the price of coffee", "About the hotel"], answer: 1 },
            { q: "What did the writer do while waiting?", options: ["Slept", "Exchanged money and got coffee", "Left the airport", "Complained"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva um pequeno diálogo de check-in em um hotel, pedindo informações sobre café da manhã e horário de check-out.", minWords: 20, modelAnswer: "A: I have a reservation under the name Costa. B: Great, here is your key. A: What time is check-out? B: Check-out is at noon." },
        { prompt: "Escreva 3 frases pedindo ajuda educadamente em situações de viagem (usando could/would).", minWords: 15, modelAnswer: "Could you help me find my gate? Would you show me the way to customs? Could I have a receipt, please?" }
      ],
      speaking: [
        { phrase: "Could you help me with my luggage?", tip: "'Could' soa mais educado que 'can' em pedidos." },
        { phrase: "I have a reservation under the name Silva.", tip: "'Reservation' tem acento na terceira sílaba: re-ser-VA-tion." },
        { phrase: "What time is check-out?", tip: "'Check-out' é pronunciado como duas palavras com acento igual em ambas." },
        { phrase: "Excuse me, could you help me, please?", tip: "'Excuse me' é essencial para chamar a atenção educadamente." },
        { phrase: "Our flight is delayed.", tip: "'Delayed' tem acento na segunda sílaba: de-LAYED." }
      ],
      exercises: {
        fillBlanks: [
          { text: "___ you help me with my luggage? (educado)", answer: "Could" },
          { text: "I have a ___ under the name Silva.", answer: "reservation" },
          { text: "What time is ___? (saída do hotel)", answer: "check-out" },
          { text: "Our flight is ___. (atrasado)", answer: "delayed" },
          { text: "The ___ is downstairs. (retirada de bagagem)", answer: "luggage claim" }
        ],
        matching: [
          { left: "Boarding pass", right: "Cartão de embarque" },
          { left: "Customs", right: "Alfândega" },
          { left: "Gate", right: "Portão de embarque" },
          { left: "Receipt", right: "Recibo" },
          { left: "Delayed", right: "Atrasado(a)" },
          { left: "Round trip", right: "Ida e volta" }
        ],
        ordering: [
          { words: ["you", "help", "Could", "me?"], answer: "Could you help me?" },
          { words: ["reservation", "have", "a", "I"], answer: "I have a reservation" },
          { words: ["check-out", "is", "time", "What?"], answer: "What time is check-out?" },
          { words: ["delayed", "flight", "is", "Our"], answer: "Our flight is delayed" },
          { words: ["please", "help", "me", "Excuse", "could", "you", "me,"], answer: "Excuse me could you help me please" }
        ],
        translation: [
          { direction: "pt-en", text: "Você poderia me ajudar com minha bagagem?", answer: "Could you help me with my luggage?" },
          { direction: "pt-en", text: "Eu tenho uma reserva no nome Silva.", answer: "I have a reservation under the name Silva." },
          { direction: "pt-en", text: "Nosso voo está atrasado.", answer: "Our flight is delayed." },
          { direction: "en-pt", text: "What time is check-out?", answer: "Que horas é o check-out?" },
          { direction: "en-pt", text: "The gate changed to B12.", answer: "O portão mudou para B12." },
          { direction: "en-pt", text: "Where is the nearest currency exchange?", answer: "Onde fica a casa de câmbio mais próxima?" }
        ],
        dictation: [
          { audioText: "Could you help me with my luggage?", answer: "Could you help me with my luggage?" },
          { audioText: "I have a reservation under the name Silva.", answer: "I have a reservation under the name Silva." },
          { audioText: "Our flight is delayed.", answer: "Our flight is delayed." }
        ],
        dialogue: [
          {
            title: "Checking In at the Airport",
            lines: [
              { speaker: "Agent", text: "Good morning! Can I see your passport and boarding pass, please?" },
              { speaker: "user", prompt: "Diga que sim, aqui estão:", options: ["Yes, here they are.", "No, I am lost.", "I have a reservation."], answer: 0 },
              { speaker: "Agent", text: "Thank you. Do you have any luggage to check in?" },
              { speaker: "user", prompt: "Diga que sim, uma mala:", options: ["Yes, one suitcase.", "No, I am delayed.", "Yes, a receipt."], answer: 0 },
              { speaker: "Agent", text: "Perfect, here's your boarding pass. Have a nice flight!" }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the most polite request.", options: ["Give me water.", "Can I have water?", "Could I have some water, please?", "Water now."], answer: 2 },
        { q: "'Boarding pass' means:", options: ["Passaporte", "Cartão de embarque", "Mala", "Recibo"], answer: 1 },
        { type: "tf", q: "'Customs' is where you exchange money.", answer: false, explanation: "'Customs' é a alfândega; câmbio é 'currency exchange'." },
        { q: "'Luggage claim' means:", options: ["Check-in", "Retirada de bagagem", "Portão de embarque", "Reserva"], answer: 1 },
        { type: "short", q: "Complete: 'Our flight is ___.' (atrasado)", answer: ["delayed"] },
        { q: "Choose the correct polite question.", options: ["Could you show me the way?", "Could you to show me the way?", "Could you showing me the way?", "You could show me the way?"], answer: 0 },
        { type: "tf", q: "'Gate' means the front desk of a hotel.", answer: false, explanation: "'Gate' é o portão de embarque no aeroporto, não a recepção do hotel." },
        { q: "'Receipt' means:", options: ["Recibo", "Reserva", "Alfândega", "Portão"], answer: 0 },
        { q: "Choose the correct sentence.", options: ["I have reservation under name Silva.", "I have a reservation under the name Silva.", "I have a reservation under name of Silva.", "I a reservation have under the name Silva."], answer: 1 },
        { type: "short", q: "Complete: 'What time is ___?' (saída do hotel)", answer: ["check-out"] },
        { q: "'Round trip' means:", options: ["Só ida", "Ida e volta", "Cancelado", "Atrasado"], answer: 1 },
        { type: "tf", q: "'Could you help me?' is more polite than 'Help me!'", answer: true }
      ]
    }
  ],
  finalTest: null
};

APP_DATA.interview = {
  modules: [
    {
      id: "interview-m1",
      title: "Entrevista de Emprego em Inglês",
      subtitle: "Frases essenciais para se destacar na entrevista",
      lesson: {
        intro: "Uma entrevista de emprego em inglês pode ser decisiva na sua carreira. Vamos praticar as perguntas mais comuns e como respondê-las com confiança.",
        sections: [
          {
            heading: "Perguntas Comuns",
            text: "Entrevistadores costumam perguntar sobre sua experiência, pontos fortes e fracos, e por que você quer a vaga.",
            examples: [
              { en: "Tell me about yourself.", pt: "Fale sobre você." },
              { en: "Why do you want to work here?", pt: "Por que você quer trabalhar aqui?" }
            ]
          },
          {
            heading: "Falando de Pontos Fortes e Fracos",
            text: "Seja honesto, mas estratégico: mostre como você trabalha em suas fraquezas.",
            examples: [
              { en: "My greatest strength is my attention to detail.", pt: "Meu maior ponto forte é minha atenção aos detalhes." },
              { en: "I sometimes struggle with public speaking, but I've been practicing.", pt: "Eu às vezes tenho dificuldade em falar em público, mas tenho praticado." }
            ]
          },
          {
            heading: "Perguntando ao Entrevistador",
            text: "No final, é comum e bem-visto fazer perguntas sobre a empresa e a vaga.",
            examples: [
              { en: "What does a typical day look like in this role?", pt: "Como é um dia típico nessa função?" },
              { en: "What are the next steps in the process?", pt: "Quais são os próximos passos do processo?" }
            ]
          }
        ]
      },
      vocabulary: [
        { word: "Strength", phonetic: "/strɛŋkθ/", translation: "Ponto forte", example: "My biggest strength is teamwork.", exampleTranslation: "Meu maior ponto forte é trabalho em equipe." },
        { word: "Weakness", phonetic: "/ˈwiːknəs/", translation: "Ponto fraco", example: "My weakness is that I overthink.", exampleTranslation: "Meu ponto fraco é que eu penso demais." },
        { word: "Achievement", phonetic: "/əˈtʃiːvmənt/", translation: "Realização/Conquista", example: "My biggest achievement was leading a team of ten.", exampleTranslation: "Minha maior conquista foi liderar uma equipe de dez pessoas." },
        { word: "Responsibility", phonetic: "/rɪˌspɒnsəˈbɪləti/", translation: "Responsabilidade", example: "I had many responsibilities in my last job.", exampleTranslation: "Eu tinha muitas responsabilidades no meu último emprego." },
        { word: "Deadline", phonetic: "/ˈdɛdlaɪn/", translation: "Prazo", example: "I always meet my deadlines.", exampleTranslation: "Eu sempre cumpro meus prazos." },
        { word: "Team player", phonetic: "/tiːm ˈpleɪər/", translation: "Bom em trabalho de equipe", example: "I consider myself a team player.", exampleTranslation: "Eu me considero uma pessoa boa em trabalho de equipe." },
        { word: "Available", phonetic: "/əˈveɪləbəl/", translation: "Disponível", example: "I am available to start immediately.", exampleTranslation: "Estou disponível para começar imediatamente." },
        { word: "Challenge", phonetic: "/ˈtʃælɪndʒ/", translation: "Desafio", example: "I enjoy a good challenge.", exampleTranslation: "Eu gosto de um bom desafio." },
        { word: "Expectations", phonetic: "/ˌɛkspɛkˈteɪʃənz/", translation: "Expectativas", example: "What are your salary expectations?", exampleTranslation: "Quais são suas expectativas salariais?" },
        { word: "Follow up", phonetic: "/ˈfɒloʊ ʌp/", translation: "Dar retorno/Fazer contato posterior", example: "I will follow up next week.", exampleTranslation: "Eu vou fazer contato de retorno semana que vem." }
      ],
      grammar: {
        title: "Present Perfect para Experiência Profissional",
        explanation: "Usamos o present perfect para falar de experiência acumulada até agora, sem dizer exatamente quando.",
        table: {
          headers: ["Frase", "Uso"],
          rows: [
            ["I have worked in marketing for five years.", "Experiência contínua até agora"],
            ["I have led three major projects.", "Conquistas ao longo da carreira"],
            ["I have never missed a deadline.", "Experiência negativa (nunca)"]
          ]
        },
        correct: ["I have worked here for three years.", "I have managed a small team.", "I have never had a complaint from a client."],
        incorrect: ["I have work here for three years.", "I have managed a small team since three years.", "I never have had a complaint."]
      },
      listening: [
        {
          title: "Interview Practice",
          accent: "american",
          transcript: "Interviewer: Tell me about yourself. Candidate: I have worked in customer service for four years. I consider myself a team player, and my biggest strength is problem-solving. Interviewer: What is your biggest weakness? Candidate: I sometimes take on too many tasks, but I've learned to prioritize better.",
          questions: [
            { q: "How long has the candidate worked in customer service?", options: ["Two years", "Three years", "Four years", "Five years"], answer: 2 },
            { q: "What does the candidate say is their strength?", options: ["Public speaking", "Problem-solving", "Coding", "Sales"], answer: 1 },
            { q: "What is the candidate's weakness?", options: ["Being late", "Taking on too many tasks", "Not liking teamwork", "Poor communication"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "Preparing for Success",
          text: "Before an interview, it's important to research the company and prepare answers to common questions. Practice talking about your strengths, weaknesses, and achievements clearly. It also helps to prepare a few questions to ask the interviewer — this shows genuine interest in the role. Finally, remember to follow up with a thank-you email after the interview. Small details like these can make a big difference.",
          questions: [
            { q: "What should you research before an interview?", options: ["The interviewer's family", "The company", "Nothing", "Only the salary"], answer: 1 },
            { q: "Why should you prepare questions to ask?", options: ["To seem difficult", "To show genuine interest", "It's required by law", "To end the interview quickly"], answer: 1 },
            { q: "What should you do after the interview?", options: ["Nothing", "Follow up with a thank-you email", "Call every day", "Forget about it"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva como você responderia 'Tell me about yourself' em uma entrevista (3-4 frases).", minWords: 25, modelAnswer: "I have worked in sales for three years. I consider myself a team player with strong communication skills. My biggest achievement was increasing sales by twenty percent last year." },
        { prompt: "Escreva 2 perguntas que você faria ao entrevistador no final de uma entrevista.", minWords: 15, modelAnswer: "What does a typical day look like in this role? What are the next steps in the process?" }
      ],
      speaking: [
        { phrase: "Tell me about yourself.", tip: "Comece com sua experiência mais relevante, não sua vida inteira." },
        { phrase: "My biggest strength is my attention to detail.", tip: "'Strength' é difícil — /strɛŋkθ/, várias consoantes juntas." },
        { phrase: "I have worked here for three years.", tip: "Use 'for' com duração (three years), 'since' com ponto no tempo (2021)." },
        { phrase: "What are the next steps in the process?", tip: "Ótima pergunta final para mostrar interesse." },
        { phrase: "I am available to start immediately.", tip: "'Immediately' tem 4 sílabas: im-ME-di-ate-ly." }
      ],
      exercises: {
        fillBlanks: [
          { text: "My biggest ___ is my attention to detail. (ponto forte)", answer: "strength" },
          { text: "I ___ (work) here for three years. (present perfect)", answer: "have worked" },
          { text: "I consider myself a team ___. (jogador de equipe)", answer: "player" },
          { text: "I am ___ to start immediately. (disponível)", answer: "available" },
          { text: "What are your salary ___? (expectativas)", answer: "expectations" }
        ],
        matching: [
          { left: "Strength", right: "Ponto forte" },
          { left: "Weakness", right: "Ponto fraco" },
          { left: "Achievement", right: "Realização/Conquista" },
          { left: "Deadline", right: "Prazo" },
          { left: "Challenge", right: "Desafio" },
          { left: "Responsibility", right: "Responsabilidade" }
        ],
        ordering: [
          { words: ["yourself", "Tell", "about", "me"], answer: "Tell me about yourself" },
          { words: ["strength", "is", "teamwork", "My", "biggest"], answer: "My biggest strength is teamwork" },
          { words: ["here", "worked", "have", "I", "years", "for", "three"], answer: "I have worked here for three years" },
          { words: ["team", "a", "I'm", "player"], answer: "I'm a team player" },
          { words: ["immediately", "available", "I'm", "start", "to"], answer: "I'm available to start immediately" }
        ],
        translation: [
          { direction: "pt-en", text: "Fale sobre você.", answer: "Tell me about yourself." },
          { direction: "pt-en", text: "Meu maior ponto forte é trabalho em equipe.", answer: "My biggest strength is teamwork." },
          { direction: "pt-en", text: "Eu trabalho aqui há três anos.", answer: "I have worked here for three years." },
          { direction: "en-pt", text: "What are your salary expectations?", answer: "Quais são suas expectativas salariais?" },
          { direction: "en-pt", text: "I am available to start immediately.", answer: "Estou disponível para começar imediatamente." },
          { direction: "en-pt", text: "I always meet my deadlines.", answer: "Eu sempre cumpro meus prazos." }
        ],
        dictation: [
          { audioText: "Tell me about yourself.", answer: "Tell me about yourself." },
          { audioText: "My biggest strength is teamwork.", answer: "My biggest strength is teamwork." },
          { audioText: "I am available to start immediately.", answer: "I am available to start immediately." }
        ],
        dialogue: [
          {
            title: "Job Interview Practice",
            lines: [
              { speaker: "Interviewer", text: "Why do you want to work here?" },
              { speaker: "user", prompt: "Diga que admira a empresa e quer crescer lá:", options: ["I admire this company and want to grow here.", "I need money.", "I don't know."], answer: 0 },
              { speaker: "Interviewer", text: "Great answer. Do you have any questions for me?" },
              { speaker: "user", prompt: "Pergunte como é um dia típico na função:", options: ["What does a typical day look like in this role?", "What time is check-out?", "Where is the gate?"], answer: 0 },
              { speaker: "Interviewer", text: "Great question! Let me explain..." }
            ]
          }
        ]
      },
      quiz: [
        { q: "'Strength' means:", options: ["Ponto fraco", "Ponto forte", "Desafio", "Prazo"], answer: 1 },
        { q: "Choose the correct present perfect sentence.", options: ["I have work here for three years.", "I have worked here for three years.", "I has worked here for three years.", "I working here for three years."], answer: 1 },
        { type: "tf", q: "'Weakness' means 'ponto forte'.", answer: false, explanation: "'Weakness' significa 'ponto fraco'; 'ponto forte' é 'strength'." },
        { q: "'Team player' means:", options: ["Chefe", "Pessoa boa em trabalho de equipe", "Cliente", "Candidato"], answer: 1 },
        { type: "short", q: "Complete: 'I am ___ to start immediately.' (disponível)", answer: ["available"] },
        { q: "'Deadline' means:", options: ["Prazo", "Salário", "Entrevista", "Currículo"], answer: 0 },
        { type: "tf", q: "Asking questions at the end of an interview shows disinterest.", answer: false, explanation: "Pelo contrário — mostra interesse genuíno pela vaga." },
        { q: "Choose the correct sentence.", options: ["I have never had a complaint.", "I never have had a complaint.", "I have never has a complaint.", "I never had have a complaint."], answer: 0 },
        { q: "'Achievement' means:", options: ["Erro", "Realização/Conquista", "Desafio", "Fraqueza"], answer: 1 },
        { type: "short", q: "Complete: 'What are your salary ___?' (expectativas)", answer: ["expectations"] },
        { q: "'Follow up' means:", options: ["Ignorar", "Fazer contato posterior", "Desistir", "Recusar"], answer: 1 },
        { type: "tf", q: "It's a good idea to research the company before an interview.", answer: true }
      ]
    }
  ],
  finalTest: null
};

APP_DATA.business = {
  modules: [
    {
      id: "business-m1",
      title: "Business English no Dia a Dia",
      subtitle: "E-mails, reuniões e conversas profissionais",
      lesson: {
        intro: "O inglês corporativo tem suas próprias expressões e formalidades. Vamos aprender a escrever e-mails profissionais e participar de reuniões com confiança.",
        sections: [
          {
            heading: "Escrevendo E-mails Profissionais",
            text: "E-mails profissionais seguem uma estrutura: saudação formal, corpo claro e encerramento educado.",
            examples: [
              { en: "Dear Mr. Johnson, I hope this email finds you well.", pt: "Caro Sr. Johnson, espero que este e-mail o encontre bem." },
              { en: "Please let me know if you have any questions.", pt: "Por favor, me avise se tiver alguma dúvida." }
            ]
          },
          {
            heading: "Participando de Reuniões",
            text: "Frases úteis para dar sua opinião, concordar ou pedir esclarecimento em reuniões.",
            examples: [
              { en: "Could you clarify that point?", pt: "Você poderia esclarecer esse ponto?" },
              { en: "I'd like to add something here.", pt: "Eu gostaria de acrescentar algo aqui." }
            ]
          },
          {
            heading: "Vocabulário Corporativo",
            text: "Termos comuns no ambiente de negócios.",
            examples: [
              { en: "We need to increase our revenue this quarter.", pt: "Precisamos aumentar nossa receita neste trimestre." },
              { en: "Let's schedule a follow-up meeting.", pt: "Vamos agendar uma reunião de acompanhamento." }
            ]
          }
        ]
      },
      vocabulary: [
        { word: "Revenue", phonetic: "/ˈrɛvənjuː/", translation: "Receita", example: "Revenue increased by ten percent.", exampleTranslation: "A receita aumentou dez por cento." },
        { word: "Deadline", phonetic: "/ˈdɛdlaɪn/", translation: "Prazo", example: "The deadline for this project is Friday.", exampleTranslation: "O prazo para este projeto é sexta-feira." },
        { word: "Agenda", phonetic: "/əˈdʒɛndə/", translation: "Pauta/Agenda", example: "Let's go over the agenda first.", exampleTranslation: "Vamos revisar a pauta primeiro." },
        { word: "Stakeholder", phonetic: "/ˈsteɪkhoʊldər/", translation: "Parte interessada", example: "We need approval from all stakeholders.", exampleTranslation: "Precisamos da aprovação de todas as partes interessadas." },
        { word: "Budget", phonetic: "/ˈbʌdʒɪt/", translation: "Orçamento", example: "The budget was approved yesterday.", exampleTranslation: "O orçamento foi aprovado ontem." },
        { word: "Client", phonetic: "/ˈklaɪənt/", translation: "Cliente", example: "Our client requested a change.", exampleTranslation: "Nosso cliente solicitou uma mudança." },
        { word: "Negotiate", phonetic: "/nɪˈɡoʊʃieɪt/", translation: "Negociar", example: "We need to negotiate the terms.", exampleTranslation: "Precisamos negociar os termos." },
        { word: "Attachment", phonetic: "/əˈtætʃmənt/", translation: "Anexo", example: "Please see the attachment for details.", exampleTranslation: "Por favor, veja o anexo para mais detalhes." },
        { word: "Follow-up", phonetic: "/ˈfɒloʊ ʌp/", translation: "Acompanhamento", example: "Let's schedule a follow-up meeting.", exampleTranslation: "Vamos agendar uma reunião de acompanhamento." },
        { word: "Quarter", phonetic: "/ˈkwɔːrtər/", translation: "Trimestre", example: "Sales grew this quarter.", exampleTranslation: "As vendas cresceram neste trimestre." }
      ],
      grammar: {
        title: "Linguagem Formal em E-mails",
        explanation: "E-mails profissionais evitam contrações e usam estruturas educadas para pedidos e encerramentos.",
        table: {
          headers: ["Informal", "Formal (e-mail profissional)"],
          rows: [
            ["Hey, what's up?", "Dear Mr./Ms. [Name],"],
            ["Can you send this?", "Could you please send this at your earliest convenience?"],
            ["Bye!", "Best regards, / Kind regards,"]
          ]
        },
        correct: ["I would appreciate your feedback.", "Please let me know if you have any questions.", "Kind regards,"],
        incorrect: ["I would appreciate you feedback.", "Please let me know if you have questions any.", "Kind regard,"]
      },
      listening: [
        {
          title: "A Business Meeting",
          accent: "british",
          transcript: "Manager: Let's go over the agenda. First, the budget for this quarter. Employee: I'd like to add something here — our revenue increased by ten percent. Manager: Great news! Could you clarify how that happened? Employee: Mainly through better client negotiations.",
          questions: [
            { q: "What is the first item on the agenda?", options: ["Client complaints", "The budget", "A new hire", "The deadline"], answer: 1 },
            { q: "What good news does the employee share?", options: ["Revenue increased", "The budget was cut", "They lost a client", "Nothing"], answer: 0 },
            { q: "Why did revenue increase, according to the employee?", options: ["Luck", "Better client negotiations", "A new product", "Lower prices"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "Writing the Perfect Business Email",
          text: "A good business email is clear, polite, and to the point. Start with a proper greeting, such as 'Dear Mr. Johnson.' State the purpose of your email early. If you're attaching a document, mention it: 'Please see the attachment for details.' End with a polite closing, like 'Best regards.' Avoid slang and contractions — professional emails should sound formal but still friendly.",
          questions: [
            { q: "How should a business email start?", options: ["With slang", "With a proper greeting", "Without any greeting", "With a joke"], answer: 1 },
            { q: "What should you mention if attaching a document?", options: ["Nothing", "That it's attached", "Your salary", "Your schedule"], answer: 1 },
            { q: "What should professional emails avoid?", options: ["Politeness", "Slang and contractions", "Clear purpose", "Proper greetings"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva um e-mail profissional curto pedindo uma reunião de acompanhamento, usando saudação e encerramento formais.", minWords: 30, modelAnswer: "Dear Ms. Alves, I hope this email finds you well. I would like to schedule a follow-up meeting to discuss the budget. Please let me know your availability. Best regards, Carlos." },
        { prompt: "Escreva 3 frases usando vocabulário corporativo (revenue, budget, stakeholder, deadline, client).", minWords: 20, modelAnswer: "Revenue increased this quarter. The budget needs approval from all stakeholders. Our client requested an earlier deadline." }
      ],
      speaking: [
        { phrase: "Could you clarify that point?", tip: "Frase educada e útil em qualquer reunião." },
        { phrase: "I'd like to add something here.", tip: "Boa forma de entrar na conversa educadamente." },
        { phrase: "Let's schedule a follow-up meeting.", tip: "'Schedule' pode ser pronunciado /ˈskɛdʒuːl/ (americano) ou /ˈʃɛdjuːl/ (britânico)." },
        { phrase: "Please let me know if you have any questions.", tip: "Frase de encerramento clássica em e-mails." },
        { phrase: "We need to negotiate the terms.", tip: "'Negotiate' tem 4 sílabas: ne-GO-ti-ate." }
      ],
      exercises: {
        fillBlanks: [
          { text: "Let's go over the ___ first. (pauta)", answer: "agenda" },
          { text: "___ increased by ten percent. (receita)", answer: "Revenue" },
          { text: "Please see the ___ for details. (anexo)", answer: "attachment" },
          { text: "We need approval from all ___. (partes interessadas)", answer: "stakeholders" },
          { text: "Let's schedule a ___ meeting. (acompanhamento)", answer: "follow-up" }
        ],
        matching: [
          { left: "Revenue", right: "Receita" },
          { left: "Budget", right: "Orçamento" },
          { left: "Agenda", right: "Pauta" },
          { left: "Client", right: "Cliente" },
          { left: "Negotiate", right: "Negociar" },
          { left: "Quarter", right: "Trimestre" }
        ],
        ordering: [
          { words: ["agenda", "the", "go", "Let's", "over"], answer: "Let's go over the agenda" },
          { words: ["something", "add", "I'd", "here", "to", "like"], answer: "I'd like to add something here" },
          { words: ["clarify", "you", "that", "Could", "point?"], answer: "Could you clarify that point?" },
          { words: ["increased", "ten", "by", "Revenue", "percent"], answer: "Revenue increased by ten percent" },
          { words: ["meeting", "schedule", "a", "Let's", "follow-up"], answer: "Let's schedule a follow-up meeting" }
        ],
        translation: [
          { direction: "pt-en", text: "Vamos revisar a pauta primeiro.", answer: "Let's go over the agenda first." },
          { direction: "pt-en", text: "A receita aumentou dez por cento.", answer: "Revenue increased by ten percent." },
          { direction: "pt-en", text: "Você poderia esclarecer esse ponto?", answer: "Could you clarify that point?" },
          { direction: "en-pt", text: "Please see the attachment for details.", answer: "Por favor, veja o anexo para mais detalhes." },
          { direction: "en-pt", text: "We need approval from all stakeholders.", answer: "Precisamos da aprovação de todas as partes interessadas." },
          { direction: "en-pt", text: "Let's schedule a follow-up meeting.", answer: "Vamos agendar uma reunião de acompanhamento." }
        ],
        dictation: [
          { audioText: "Let's go over the agenda first.", answer: "Let's go over the agenda first." },
          { audioText: "Revenue increased by ten percent.", answer: "Revenue increased by ten percent." },
          { audioText: "Could you clarify that point?", answer: "Could you clarify that point?" }
        ],
        dialogue: [
          {
            title: "In a Business Meeting",
            lines: [
              { speaker: "Manager", text: "Could you give us an update on the budget?" },
              { speaker: "user", prompt: "Diga que o orçamento foi aprovado ontem:", options: ["The budget was approved yesterday.", "The client is happy.", "Let's schedule a meeting."], answer: 0 },
              { speaker: "Manager", text: "Excellent. Any concerns from stakeholders?" },
              { speaker: "user", prompt: "Diga que gostaria de acrescentar algo:", options: ["I'd like to add something here.", "I don't know anything.", "The deadline is Friday."], answer: 0 },
              { speaker: "Manager", text: "Go ahead, please." }
            ]
          }
        ]
      },
      quiz: [
        { q: "'Revenue' means:", options: ["Despesa", "Receita", "Prazo", "Reunião"], answer: 1 },
        { q: "'Stakeholder' means:", options: ["Concorrente", "Parte interessada", "Funcionário novo", "Cliente insatisfeito"], answer: 1 },
        { type: "tf", q: "Professional emails should use contractions like 'can't' and 'won't'.", answer: false, explanation: "E-mails profissionais geralmente evitam contrações, preferindo formas completas." },
        { q: "'Attachment' means:", options: ["Anexo", "Assunto", "Remetente", "Cópia"], answer: 0 },
        { type: "short", q: "Complete: 'Let's go over the ___.' (pauta)", answer: ["agenda"] },
        { q: "'Negotiate' means:", options: ["Ignorar", "Negociar", "Cancelar", "Aprovar"], answer: 1 },
        { type: "tf", q: "'Kind regards' is a common formal email closing.", answer: true },
        { q: "Choose the correct formal sentence.", options: ["I would appreciate your feedback.", "I would appreciate you feedback.", "I would appreciated your feedback.", "I would appreciate for your feedback."], answer: 0 },
        { q: "'Budget' means:", options: ["Orçamento", "Receita", "Cliente", "Pauta"], answer: 0 },
        { type: "short", q: "Complete: 'Could you ___ that point?' (esclarecer)", answer: ["clarify"] },
        { q: "'Quarter' in business means:", options: ["Um quarto da empresa", "Um trimestre", "Um tipo de reunião", "Um cliente"], answer: 1 },
        { type: "tf", q: "'Follow-up' means a first, initial meeting.", answer: false, explanation: "'Follow-up' significa uma reunião de acompanhamento, não a primeira reunião." }
      ]
    }
  ],
  finalTest: null
};

window.APP_DATA = APP_DATA;
