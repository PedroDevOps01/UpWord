var APP_DATA = window.APP_DATA || {};

APP_DATA.c1 = {
  modules: [
    {
      id: "c1-m1",
      title: "Nuances Gramaticais",
      subtitle: "Used to/would, inversão para ênfase e modais de especulação no passado",
      objective: "Ao final, o aluno consegue diferenciar 'used to' e 'would' para hábitos passados, usar inversão para ênfase (Never have I..., Not only did...) e modais para especular ou criticar ações passadas (must/might/should have), incorporando expressões idiomáticas sutis como 'sleep on it' e 'in hindsight' em contextos apropriados.",
      prerequisites: ["b2-m6"],
      masteryEvidence: "Evidenciado por pontuação de pelo menos 60% no quiz do módulo, revisão concluída das atividades de writing, tentativa registrada das atividades de speaking e conclusão das 9 sessões do módulo.",
      levelCefrNote: "Compatível com as expectativas de compreensão e produção do nível C1 do CEFR (Common European Framework of Reference) — não é uma certificação oficial.",
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
        { id: "c1-m1-nuance", word: "Nuance", phonetic: "/ˈnuːɑːns/", translation: "Nuance/Sutileza", example: "There's a subtle nuance between these two words.", exampleTranslation: "Há uma nuance sutil entre estas duas palavras." },
        { id: "c1-m1-emphasis", word: "Emphasis", phonetic: "/ˈɛmfəsɪs/", translation: "Ênfase", example: "She spoke with great emphasis.", exampleTranslation: "Ela falou com grande ênfase." },
        { id: "c1-m1-habitual", word: "Habitual", phonetic: "/həˈbɪtʃuəl/", translation: "Habitual", example: "This was a habitual practice in her family.", exampleTranslation: "Esta era uma prática habitual na família dela." },
        { id: "c1-m1-speculate", word: "Speculate", phonetic: "/ˈspɛkjəleɪt/", translation: "Especular", example: "We can only speculate about what happened.", exampleTranslation: "Só podemos especular sobre o que aconteceu." },
        { id: "c1-m1-formal-register", word: "Formal register", phonetic: "/ˈfɔːrməl ˈrɛdʒɪstər/", translation: "Registro formal", example: "This inversion is typical of a formal register.", exampleTranslation: "Esta inversão é típica de um registro formal." },
        { id: "c1-m1-rarely", word: "Rarely", phonetic: "/ˈrɛrli/", translation: "Raramente", example: "Rarely have I felt so inspired.", exampleTranslation: "Raramente me senti tão inspirado." },
        { id: "c1-m1-reproach", word: "Reproach", phonetic: "/rɪˈproʊtʃ/", translation: "Repreensão/Censura", example: "His tone carried a hint of reproach.", exampleTranslation: "Seu tom carregava um toque de censura." },
        { id: "c1-m1-assumption", word: "Assumption", phonetic: "/əˈsʌmpʃən/", translation: "Suposição", example: "That's just an assumption, not a fact.", exampleTranslation: "Isso é apenas uma suposição, não um fato." },
        { id: "c1-m1-distinct", word: "Distinct", phonetic: "/dɪˈstɪŋkt/", translation: "Distinto(a)", example: "These two meanings are quite distinct.", exampleTranslation: "Estes dois significados são bem distintos." },
        { id: "c1-m1-subtlety", word: "Subtlety", phonetic: "/ˈsʌtəlti/", translation: "Sutileza", example: "Understanding subtlety takes years of practice.", exampleTranslation: "Entender sutileza leva anos de prática." },
        { id: "c1-m1-in-hindsight", word: "In hindsight", phonetic: "/ɪn ˈhaɪndsaɪt/", translation: "Em retrospecto/pensando bem agora", partOfSpeech: "expressão", example: "In hindsight, I should have asked more questions before agreeing to the plan.", exampleTranslation: "Em retrospecto, eu deveria ter feito mais perguntas antes de concordar com o plano.", synonyms: ["in retrospect", "looking back"] },
        { id: "c1-m1-sleep-on-it", word: "Sleep on it", phonetic: "/sliːp ɒn ɪt/", translation: "Pensar com calma antes de decidir", partOfSpeech: "expressão idiomática", example: "Before you resign, why don't you sleep on it for a night?", exampleTranslation: "Antes de pedir demissão, por que você não pensa com calma por uma noite?", register: "informal", commonError: "Alguns alunos traduzem de forma literal como 'dormir em cima do assunto', mas o sentido real é 'refletir com calma antes de decidir', sem relação física com dormir." },
        { id: "c1-m1-second-guess", word: "Second-guess", phonetic: "/ˈsɛkənd ɡɛs/", translation: "Duvidar de uma decisão já tomada", partOfSpeech: "verbo", example: "Stop second-guessing yourself — you made the right call.", exampleTranslation: "Pare de duvidar de si mesmo — você tomou a decisão certa.", wordFamily: ["guess", "guesswork"] },
        { id: "c1-m1-run-its-course", word: "Run its course", phonetic: "/rʌn ɪts kɔːrs/", translation: "Seguir seu curso natural até o fim", partOfSpeech: "expressão", example: "Some friendships simply run their course, and that's not necessarily anyone's fault.", exampleTranslation: "Algumas amizades simplesmente seguem seu curso natural, e isso não é necessariamente culpa de ninguém." },
        { id: "c1-m1-calcify", word: "Calcify", phonetic: "/ˈkælsɪfaɪ/", translation: "Solidificar-se, tornar-se rígido (figurado)", partOfSpeech: "verbo", example: "Their silence calcified into a distance neither of them knew how to bridge.", exampleTranslation: "O silêncio deles se solidificou numa distância que nenhum dos dois sabia como superar.", commonError: "'Calcify' é usado de forma figurada para hábitos ou situações que se tornam rígidas e permanentes, não apenas no sentido biológico literal." },
        { id: "c1-m1-pinpoint", word: "Pinpoint", phonetic: "/ˈpɪnpɔɪnt/", translation: "Identificar com exatidão", partOfSpeech: "verbo", example: "I can't quite pinpoint when our conversations started to feel forced.", exampleTranslation: "Não consigo identificar exatamente quando nossas conversas começaram a parecer forçadas.", synonyms: ["identify precisely"] },
        { id: "c1-m1-aimless", word: "Aimless", phonetic: "/ˈeɪmləs/", translation: "Sem rumo, à toa", partOfSpeech: "adjetivo", example: "We used to have aimless conversations for hours, and I miss that kind of ease.", exampleTranslation: "Costumávamos ter conversas sem rumo por horas, e sinto falta dessa naturalidade.", antonyms: ["purposeful", "focused"] },
        { id: "c1-m1-immune-to", word: "Immune to", phonetic: "/ɪˈmjuːn tuː/", translation: "Imune a", partOfSpeech: "collocation", example: "I used to think a real friendship was immune to distance and time.", exampleTranslation: "Eu costumava achar que uma amizade de verdade era imune à distância e ao tempo.", commonError: "A preposição correta é 'immune to', não 'immune of' — troca comum entre falantes de português." },
        { id: "c1-m1-overreact", word: "Overreact", phonetic: "/ˌoʊvərriˈækt/", translation: "Reagir de forma exagerada", partOfSpeech: "verbo", example: "Looking back, I might have overreacted to a single bad interview.", exampleTranslation: "Pensando bem, talvez eu tenha reagido de forma exagerada a uma única entrevista ruim.", wordFamily: ["react", "reaction", "overreaction"] },
        { id: "c1-m1-trust-your-instincts", word: "Trust your instincts", phonetic: "/trʌst jɔːr ˈɪnstɪŋkts/", translation: "Confiar no seu instinto", partOfSpeech: "collocation", example: "These days, I just trust my instincts a little more instead of overthinking every decision.", exampleTranslation: "Hoje em dia, eu simplesmente confio mais no meu instinto em vez de pensar demais em cada decisão.", collocations: ["trust your instincts", "go with your gut"] },
        { id: "c1-m1-wistful", word: "Wistful", phonetic: "/ˈwɪstfəl/", translation: "Nostálgico, com uma ponta de melancolia", partOfSpeech: "adjetivo", example: "She sounded wistful when she talked about the friends she'd lost touch with.", exampleTranslation: "Ela soou nostálgica, com uma ponta de melancolia, ao falar dos amigos com quem havia perdido contato.", register: "formal" },
        { id: "c1-m1-estrangement", word: "Estrangement", phonetic: "/ɪˈstreɪndʒmənt/", translation: "Afastamento, distanciamento", partOfSpeech: "substantivo", example: "The estrangement between the two friends happened so gradually that neither noticed it in time.", exampleTranslation: "O afastamento entre os dois amigos aconteceu tão gradualmente que nenhum dos dois percebeu a tempo.", wordFamily: ["estrange", "estranged"] },
        { id: "c1-m1-closure", word: "Closure", phonetic: "/ˈkloʊʒər/", translation: "Encerramento emocional, sensação de resolução", partOfSpeech: "substantivo", example: "Endings without closure are often harder to accept than painful ones with a clear explanation.", exampleTranslation: "Finais sem um encerramento claro costumam ser mais difíceis de aceitar do que finais dolorosos, porém bem explicados.", commonError: "Aqui 'closure' não significa o fechamento de um estabelecimento, e sim a sensação psicológica de encerrar um assunto." },
        { id: "c1-m1-candid", word: "Candid", phonetic: "/ˈkændɪd/", translation: "Sincero, franco", partOfSpeech: "adjetivo", example: "I wish I'd been more candid about how I felt instead of letting the silence grow.", exampleTranslation: "Eu gostaria de ter sido mais sincero sobre o que sentia, em vez de deixar o silêncio crescer.", synonyms: ["frank", "honest"], commonError: "'Candid' não significa 'cândido' (ingênuo) em português — é um falso cognato parcial; em inglês significa 'sincero/direto'." },
        { id: "c1-m1-presumably", word: "Presumably", phonetic: "/prɪˈzjuːməbli/", translation: "Presumivelmente, provavelmente", partOfSpeech: "advérbio", example: "Presumably, she must have had her reasons for staying quiet.", exampleTranslation: "Presumivelmente, ela deve ter tido seus motivos para ficar calada.", wordFamily: ["presume", "presumption"] }
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
          audioSrc: "assets/audio/c1-m1-listen-0.mp3",
          audioSource: "tts-pregenerated",
          speedLevels: [0.75, 1, 1.25],
          transcript: "Never have I been so surprised by a decision. Not only did they cancel the project, but they also refused to explain why. I must have missed something important in that meeting. Looking back, I should have asked more questions when I had the chance.",
          questions: [
            { q: "What structure is used in 'Never have I been so surprised'?", options: ["A question", "An inversion for emphasis", "A conditional", "A passive voice"], answer: 1 },
            { q: "What does the speaker say about the meeting?", options: ["They understood everything", "They must have missed something", "They enjoyed it", "They arrived late"], answer: 1 },
            { q: "What does the speaker regret?", options: ["Attending the meeting", "Not asking more questions", "Canceling the project", "Nothing"], answer: 1 }
          ]
        },
        {
          title: "Second Thoughts About a Decision",
          accent: "american",
          transcript: "A: Honestly, not only did I turn down that job offer, but I also never told anyone why. B: That's surprising — you used to talk about that company all the time. A: I know. I must have changed my mind the moment I pictured myself stuck in the same routine for years. B: Do you regret it? A: Rarely have I felt so relieved about a decision, actually. Though sometimes I wonder — I might have overreacted to a single bad interview. B: Well, you shouldn't have decided so quickly without sleeping on it first, but it sounds like it worked out. A: Maybe. Either way, I used to worry about things like this constantly; now I just trust my instincts a little more.",
          questions: [
            { q: "What is the conversation mainly about?", options: ["Planning a trip", "A decision to turn down a job offer", "A disagreement about money", "A new hobby"], answer: 1 },
            { q: "What does speaker A say about the interview?", options: ["It was excellent", "It might have caused an overreaction", "It never happened", "It was rescheduled"], answer: 1 },
            { q: "What can be inferred about speaker A's current state of mind?", options: ["Full of regret and anxiety", "Fairly at peace with the decision, despite some doubt", "Angry at speaker B", "Completely indifferent"], answer: 1 }
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
        },
        {
          title: "The Weight of Hindsight",
          text: "Rarely does a friendship end with a single dramatic argument; more often, it fades through a series of small silences neither party bothers to break. Not only did we stop calling each other, but we also stopped noticing that we had stopped. When we were younger, we would talk for hours about nothing in particular — the kind of aimless conversation that only exists between people who trust each other completely. I used to assume that trust like that was permanent, immune to distance and time. Looking back, I must have missed the signs: the shorter replies, the postponed visits, the excuses that grew thinner each year. Perhaps I should have reached out before the silence calcified into something harder to name. Then again, she might have been waiting for the same gesture from me, each of us assuming the other would make the first move. There is a particular kind of regret reserved for endings that arrive quietly, without ceremony, leaving you unsure whether anything could have been done — or whether some friendships simply run their natural course.",
          questions: [
            { q: "According to the writer, how do most friendships end?", options: ["With a single dramatic argument", "Through small silences that build up over time", "By a sudden betrayal", "Because of geographic distance"], answer: 1 },
            { q: "What does the writer say about their younger conversations?", options: ["They were always about serious topics", "They were aimless but built on complete trust", "They rarely happened", "They were always interrupted"], answer: 1 },
            { q: "What can be inferred about the writer's attitude toward the friendship's ending?", options: ["They feel completely indifferent about it", "They feel a quiet, unresolved regret", "They are relieved it is over", "They blame their friend entirely"], answer: 1 },
            { q: "What structure does 'Rarely does a friendship end...' demonstrate?", options: ["A conditional clause", "An inversion for emphasis", "A passive voice construction", "Reported speech"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 3 frases usando inversão para ênfase (Never have I..., Not only did..., Rarely do I...).", minWords: 20, modelAnswer: "Never have I seen such dedication. Not only did she finish first, but she also helped others. Rarely do I regret a decision like this." },
        { prompt: "Escreva sobre algo que você acha que 'deveria ter feito diferente' (should have) e algo que provavelmente aconteceu (must have).", minWords: 20, modelAnswer: "I should have studied far more thoroughly before the exam, especially given how challenging it turned out to be. He must have forgotten about our meeting entirely, since he never showed up or even sent a message." },
        { prompt: "Escreva um texto de opinião (150-180 palavras) sobre como uma decisão do passado moldou quem você é hoje. Use pelo menos uma inversão para ênfase (Never have I.../Not only did...), um modal de especulação sobre o passado (must have/should have/might have) e a estrutura 'used to' ou 'would' para hábito passado.", minWords: 150, minSentences: 7, requiredStructures: ["should have", "used to", "not only"], targetWords: ["speculate", "assumption", "subtlety"], modelAnswer: "Looking back on the choices that shaped who I am today, I realize how much of my growth came from decisions I once doubted. I used to believe that every mistake needed to be avoided at all costs, and I built my life around that assumption. Not only did this belief make me overly cautious, but it also kept me from taking risks that might have led somewhere interesting. I should have trusted myself more in my twenties, when uncertainty felt unbearable rather than exciting. Now I can only speculate about the paths I did not take, though I no longer feel much regret about it. There is a subtlety in how experience quietly reshapes our values: what once seemed like failure now looks like necessary preparation. I have learned to notice these small shifts in perspective rather than dismiss them. If I could speak to my younger self, I would say that hesitation costs more than most mistakes ever do, and that trusting your own judgment is rarely as dangerous as it feels in the moment." }
      ],
      speaking: [
        { phrase: "Never have I seen such a beautiful place.", tip: "A inversão soa mais formal — reserve para contextos de ênfase real." },
        { phrase: "She must have forgotten about the meeting.", tip: "'Must have' é frequentemente contraído para 'must've' na fala." },
        { phrase: "You should have called me earlier.", tip: "'Should have' soa como 'shoulda' na fala rápida e informal." },
        { phrase: "Not only did she win, but she also broke a record.", tip: "Após 'not only' no início, há inversão: 'did she win'." },
        { phrase: "I used to live in Paris.", tip: "'Used to' se pronuncia /ˈjuːstə/, com o som do 'd' desaparecendo." },
        { phrase: "In my opinion, people should learn to trust their instincts more, because hesitation often causes more regret than the mistakes themselves would have.", tip: "Dê sua opinião sobre se é melhor seguir a intuição ou pensar cuidadosamente antes de agir. Tente falar por pelo menos 20 segundos, usando um modal de especulação (must have/should have) ou uma inversão." }
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
        { q: "Choose the correct sentence for a past habit (state verb).", options: ["I would know him well.", "I used to know him well.", "I use to know him well.", "I would known him well."], answer: 1, explanation: "'Know' é um verbo de estado, então apenas 'used to' é possível — 'would' não é usado para estados, só para ações repetidas no passado." },
        { q: "Choose the correct inversion.", options: ["Never I have seen that.", "Never have I seen that.", "I never have seen that.", "Have never I seen that."], answer: 1, explanation: "Após advérbios negativos como 'never' no início da frase, ocorre inversão sujeito-auxiliar: 'Never have I seen...', e não 'Never I have seen...'." },
        { type: "tf", q: "'Must have' expresses near certainty about a past event.", answer: true, explanation: "'Must have' + particípio é usado para expressar uma dedução quase certa sobre algo que aconteceu no passado, com base em evidências." },
        { q: "Complete: 'You ___ (should/call) me earlier.'", options: ["should call", "should have called", "should calling", "should to call"], answer: 1, explanation: "'Should have' + particípio expressa crítica ou arrependimento sobre uma ação passada que não ocorreu — a forma correta é 'should have called', não 'should call'." },
        { type: "short", q: "Complete: 'She ___ have forgotten.' (deve)", answer: ["must"], explanation: "'Deve ter esquecido' equivale a uma quase certeza sobre o passado, expressa por 'must have' + particípio." },
        { q: "'Speculate' means:", options: ["Confirmar", "Especular", "Negar", "Explicar"], answer: 1, explanation: "'Speculate' significa formar uma hipótese ou opinião sem ter certeza dos fatos, equivalente a 'especular' em português." },
        { type: "tf", q: "'Would' can be used for past habitual states like 'I would love chocolate as a child.'", answer: false, explanation: "'Would' não é usado para estados (like, know, be); apenas 'used to' funciona para estados." },
        { q: "Choose the correct sentence.", options: ["Not only she won, but also broke a record.", "Not only did she win, but she also broke a record.", "Not only won she, but she also broke a record.", "Not only she did win, but broke a record."], answer: 1, explanation: "Depois de 'Not only' no início da frase ocorre inversão auxiliar-sujeito: 'Not only did she win...', seguido de 'but she also...' na oração principal." },
        { q: "'Assumption' means:", options: ["Fato confirmado", "Suposição", "Prova", "Regra"], answer: 1, explanation: "'Assumption' é algo aceito como verdade sem prova concreta — corresponde a 'suposição' em português." },
        { type: "short", q: "Complete: 'He ___ have missed the train.' (talvez)", answer: ["might"], explanation: "'Might have' expressa possibilidade no passado, mais fraca que 'must have' — equivalente a 'talvez tenha perdido'." },
        { q: "Choose the correct sentence.", options: ["I shouldn't have said that.", "I shouldn't said that.", "I shouldn't to have said that.", "I not should have said that."], answer: 0, explanation: "'Shouldn't have' + particípio expressa arrependimento por algo que foi feito e não deveria ter sido — a forma correta é 'shouldn't have said', sem infinitivo 'to'." },
        { type: "tf", q: "Inversion structures like 'Never have I...' are typical of casual, everyday speech.", answer: false, explanation: "São mais típicas de um registro formal ou enfático, não da conversa casual do dia a dia.", skill: "register", difficulty: "easy" },
        { q: "Choose the correct inversion after a negative adverb.", options: ["Little I knew that she was leaving.", "Little did I know that she was leaving.", "Little did know I that she was leaving.", "I little did know that she was leaving."], answer: 1, explanation: "Depois de 'little' com sentido negativo no início da frase, ocorre inversão auxiliar-sujeito: 'Little did I know...', assim como com 'never' e 'rarely'.", skill: "grammar", difficulty: "medium" },
        { q: "Choose the sentence that correctly mixes a past condition with a present result.", options: ["If I had taken that job, I would be living in London now.", "If I take that job, I would be living in London now.", "If I had taken that job, I will be living in London now.", "If I would take that job, I am living in London now."], answer: 0, explanation: "Condicionais mistos combinam uma condição no passado ('if + past perfect') com um resultado no presente ('would + verbo base'), pois a ação passada ainda afeta a situação atual.", skill: "grammar", difficulty: "hard" },
        { q: "'Pinpoint' means:", options: ["Identificar com exatidão", "Ignorar completamente", "Exagerar muito", "Esquecer por completo"], answer: 0, explanation: "'Pinpoint' significa localizar ou identificar algo com precisão exata, como um momento ou uma causa.", skill: "vocabulary", difficulty: "easy" },
        { type: "short", q: "Complete: 'I used to think trust was ___ to distance and time.' (imune)", answer: ["immune"], explanation: "'Immune to' é a collocation fixa em inglês para 'imune a'; a preposição correta é 'to', não 'of'.", skill: "collocation", difficulty: "medium" },
        { q: "According to 'The Weight of Hindsight', why didn't the writer or their friend reach out first?", options: ["Neither of them cared about the friendship anymore", "Each assumed the other would make the first move", "They had a big, dramatic argument", "They moved to different countries"], answer: 1, explanation: "O texto diz que cada um esperava o mesmo gesto do outro, assumindo que a outra pessoa daria o primeiro passo.", skill: "reading", difficulty: "medium" },
        { q: "In 'Second Thoughts About a Decision', what does speaker A imply about the bad interview?", options: ["It confirmed that her decision was completely rational", "It might have caused her to overreact and decide too quickly", "It never actually took place", "It convinced her to stay at the company"], answer: 1, explanation: "Speaker A admite que talvez tenha reagido de forma exagerada ('might have overreacted') a uma única entrevista ruim.", skill: "listening", difficulty: "medium" },
        { q: "'Their silence calcified into distance' most likely means the silence:", options: ["disappeared quickly and was forgotten", "became fixed and increasingly hard to reverse", "was explained clearly by both sides", "turned into a loud argument"], answer: 1, explanation: "'Calcify' descreve algo que se torna rígido e permanente com o tempo — aqui, o silêncio se tornou uma distância difícil de desfazer.", skill: "vocabulary", difficulty: "hard" },
        { q: "Choose the correct cleft sentence for emphasis.", options: ["It was the meeting that surprised me most.", "It the meeting was that surprised me most.", "Was it the meeting that surprised me most.", "The meeting it was that surprised me most."], answer: 0, explanation: "A estrutura de frase clivada ('cleft sentence') usa 'It is/was + elemento enfatizado + that...' para dar destaque a uma parte específica da frase.", skill: "grammar", difficulty: "hard" },
        { type: "short", q: "Complete the idiom: 'Why don't you ___ on it before deciding?' (pensar com calma)", answer: ["sleep"], explanation: "'Sleep on it' significa refletir com calma, geralmente durante uma noite, antes de tomar uma decisão importante.", skill: "collocation", difficulty: "medium" },
        { q: "Which sentence best paraphrases 'I must have missed something important'?", options: ["I definitely missed nothing important.", "It's likely that I missed something important, though I'm not fully sure.", "I intentionally ignored something important.", "I will miss something important soon."], answer: 1, explanation: "'Must have missed' expressa uma dedução quase certa, mas ainda uma suposição — não uma certeza absoluta nem uma ação futura.", skill: "reading", difficulty: "medium" },
        { q: "'Estrangement' refers to:", options: ["A close, unbreakable bond between friends", "A gradual distancing between people who were once close", "A sudden financial loss", "A formal, written apology"], answer: 1, explanation: "'Estrangement' descreve o afastamento gradual entre pessoas que já foram próximas, como o processo descrito no texto sobre amizade.", skill: "vocabulary", difficulty: "easy" },
        { type: "tf", q: "'I shouldn't have said that' expresses regret about something the speaker actually did say.", answer: true, explanation: "'Shouldn't have' + particípio expressa arrependimento sobre uma ação que de fato aconteceu, mas que o falante acredita ter sido um erro.", skill: "grammar", difficulty: "easy" },
        { q: "In 'Presumably, she must have had her reasons for staying quiet,' what does 'presumably' signal?", options: ["Complete, proven certainty", "A reasonable assumption, not a confirmed fact", "A direct quotation from another person", "A grammatical error in the sentence"], answer: 1, explanation: "'Presumably' introduz uma suposição razoável, mas não confirmada — sinaliza que o falante está especulando com base no que parece provável.", skill: "vocabulary", difficulty: "medium" }
      ]
    },
    {
      id: "c1-m2",
      title: "Expressões Idiomáticas",
      subtitle: "Idioms comuns e como usá-los naturalmente",
      objective: "Ao final, o aluno consegue reconhecer e empregar expressões idiomáticas comuns (bite the bullet, cut to the chase, spill the beans, sit on the fence, entre outras) em conversas naturais, respeitando sua estrutura fixa e o registro predominantemente informal em que aparecem.",
      prerequisites: ["c1-m1"],
      masteryEvidence: "Evidenciado por pontuação de pelo menos 60% no quiz do módulo, revisão concluída das atividades de writing, tentativa registrada das atividades de speaking e conclusão das 9 sessões do módulo.",
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
        { id: "c1-m2-bite-the-bullet", word: "Bite the bullet", phonetic: "/baɪt ðə ˈbʊlɪt/", translation: "Encarar a situação difícil", example: "I decided to bite the bullet and apologize.", exampleTranslation: "Eu decidi encarar a situação e pedir desculpas." },
        { id: "c1-m2-break-the-ice", word: "Break the ice", phonetic: "/breɪk ðiː aɪs/", translation: "Quebrar o gelo", example: "He told a joke to break the ice.", exampleTranslation: "Ele contou uma piada para quebrar o gelo." },
        { id: "c1-m2-piece-of-cake", word: "Piece of cake", phonetic: "/piːs ʌv keɪk/", translation: "Muito fácil", example: "The test was a piece of cake.", exampleTranslation: "A prova foi muito fácil." },
        { id: "c1-m2-under-the-weather", word: "Under the weather", phonetic: "/ˈʌndər ðə ˈwɛðər/", translation: "Um pouco doente", example: "I'm feeling a bit under the weather today.", exampleTranslation: "Estou me sentindo um pouco mal hoje." },
        { id: "c1-m2-hit-the-nail-on-the-head", word: "Hit the nail on the head", phonetic: "/hɪt ðə neɪl ɒn ðə hɛd/", translation: "Acertar em cheio", example: "You hit the nail on the head with that comment.", exampleTranslation: "Você acertou em cheio com esse comentário." },
        { id: "c1-m2-cut-to-the-chase", word: "Cut to the chase", phonetic: "/kʌt tuː ðə tʃeɪs/", translation: "Ir direto ao ponto", example: "Let's cut to the chase and discuss the budget.", exampleTranslation: "Vamos direto ao ponto e discutir o orçamento." },
        { id: "c1-m2-let-the-cat-out-of-the-bag", word: "Let the cat out of the bag", phonetic: "/lɛt ðə kæt aʊt ʌv ðə bæɡ/", translation: "Deixar escapar um segredo", example: "He let the cat out of the bag about the surprise party.", exampleTranslation: "Ele deixou escapar o segredo da festa surpresa." },
        { id: "c1-m2-on-the-ball", word: "On the ball", phonetic: "/ɒn ðə bɔːl/", translation: "Atento/Competente", example: "She's really on the ball at work.", exampleTranslation: "Ela é realmente competente no trabalho." },
        { id: "c1-m2-once-in-a-blue-moon", word: "Once in a blue moon", phonetic: "/wʌns ɪn ə bluː muːn/", translation: "Raramente", example: "We only see each other once in a blue moon.", exampleTranslation: "Só nos vemos raramente." },
        { id: "c1-m2-cost-an-arm-and-a-leg", word: "Cost an arm and a leg", phonetic: "/kɒst ən ɑːrm ənd ə lɛɡ/", translation: "Custar muito caro", example: "That car cost an arm and a leg.", exampleTranslation: "Aquele carro custou uma fortuna." },
        { id: "c1-m2-look-a-gift-horse-in-the-mouth", word: "Look a gift horse in the mouth", phonetic: "/lʊk ə ɡɪft hɔːrs ɪn ðə maʊθ/", translation: "Reclamar de algo bom que ganhou de graça", partOfSpeech: "expressão idiomática", example: "I didn't want to look a gift horse in the mouth, so I accepted the promotion on the spot.", exampleTranslation: "Eu não quis questionar uma sorte tão boa, então aceitei a promoção na hora.", commonError: "Quase sempre usada na forma negativa ('don't look a gift horse in the mouth'), como conselho para não questionar algo bom recebido de graça." },
        { id: "c1-m2-tip-the-scales", word: "Tip the scales", phonetic: "/tɪp ðə skeɪlz/", translation: "Inclinar a balança, ser o fator decisivo", partOfSpeech: "expressão", example: "The extra hours I quietly put in were exactly what tipped the scales in my favor.", exampleTranslation: "As horas extras que eu discretamente dediquei foram exatamente o que inclinou a balança a meu favor." },
        { id: "c1-m2-in-the-works", word: "In the works", phonetic: "/ɪn ðə wɜːrks/", translation: "Em andamento, sendo preparado", partOfSpeech: "expressão", example: "My colleagues admitted the promotion had been in the works for months.", exampleTranslation: "Meus colegas admitiram que a promoção estava sendo preparada há meses." },
        { id: "c1-m2-keep-under-wraps", word: "Keep something under wraps", phonetic: "/kiːp ˈsʌmθɪŋ ˈʌndər ræps/", translation: "Manter algo em segredo", partOfSpeech: "expressão", example: "They managed to keep the surprise party completely under wraps.", exampleTranslation: "Eles conseguiram manter a festa surpresa completamente em segredo.", synonyms: ["keep quiet about"] },
        { id: "c1-m2-spill-the-beans", word: "Spill the beans", phonetic: "/spɪl ðə biːnz/", translation: "Revelar informação, às vezes sem querer", partOfSpeech: "expressão idiomática", example: "Someone spilled the beans about the promotion before it was official.", exampleTranslation: "Alguém revelou a informação sobre a promoção antes de ser oficial.", synonyms: ["let the cat out of the bag"], commonError: "'Spill the beans' e 'let the cat out of the bag' são quase sinônimos, mas 'spill the beans' costuma soar mais casual e às vezes acidental." },
        { id: "c1-m2-lips-are-sealed", word: "My lips are sealed", phonetic: "/maɪ lɪps ɑːr siːld/", translation: "Não vou contar para ninguém", partOfSpeech: "expressão", example: "Don't worry, my lips are sealed about the surprise.", exampleTranslation: "Não se preocupe, minha boca está fechada sobre a surpresa." },
        { id: "c1-m2-get-cold-feet", word: "Get cold feet", phonetic: "/ɡɛt koʊld fiːt/", translation: "Ficar com medo/hesitar na última hora", partOfSpeech: "expressão idiomática", example: "He was about to bite the bullet and quit, but he got cold feet at the last minute.", exampleTranslation: "Ele estava prestes a encarar a situação e pedir demissão, mas ficou com medo na última hora." },
        { id: "c1-m2-jump-on-the-bandwagon", word: "Jump on the bandwagon", phonetic: "/dʒʌmp ɒn ðə ˈbændwæɡən/", translation: "Aderir a uma tendência popular", partOfSpeech: "expressão", example: "Everyone jumped on the bandwagon once the new trend hit the office.", exampleTranslation: "Todo mundo aderiu à tendência assim que ela chegou ao escritório." },
        { id: "c1-m2-back-to-the-drawing-board", word: "Back to the drawing board", phonetic: "/bæk tuː ðə ˈdrɔːɪŋ bɔːrd/", translation: "Recomeçar do zero", partOfSpeech: "expressão", example: "The plan fell through, so it's back to the drawing board.", exampleTranslation: "O plano não deu certo, então é hora de recomeçar do zero." },
        { id: "c1-m2-call-it-a-day", word: "Call it a day", phonetic: "/kɔːl ɪt ə deɪ/", translation: "Encerrar por hoje, parar de trabalhar", partOfSpeech: "expressão", example: "We've made good progress — let's call it a day.", exampleTranslation: "Fizemos um bom progresso — vamos encerrar por hoje." },
        { id: "c1-m2-burn-the-midnight-oil", word: "Burn the midnight oil", phonetic: "/bɜːrn ðə ˈmɪdnaɪt ɔɪl/", translation: "Trabalhar/estudar até tarde da noite", partOfSpeech: "expressão idiomática", example: "She had to burn the midnight oil to finish the report on time.", exampleTranslation: "Ela teve que trabalhar até tarde da noite para terminar o relatório a tempo." },
        { id: "c1-m2-ball-is-in-your-court", word: "The ball is in your court", phonetic: "/ðə bɔːl ɪz ɪn jɔːr kɔːrt/", translation: "A decisão agora é sua", partOfSpeech: "expressão", example: "I've made my offer — the ball is in your court now.", exampleTranslation: "Já fiz minha proposta — a decisão agora é sua.", commonError: "Não confundir com 'on the ball' (ser competente/atento) — expressões diferentes, apesar de ambas usarem 'ball'." },
        { id: "c1-m2-read-between-the-lines", word: "Read between the lines", phonetic: "/riːd bɪˈtwiːn ðə laɪnz/", translation: "Ler nas entrelinhas", partOfSpeech: "expressão", example: "She didn't say it directly, but if you read between the lines, she wasn't happy about the decision.", exampleTranslation: "Ela não disse diretamente, mas se você ler nas entrelinhas, ela não ficou feliz com a decisão." },
        { id: "c1-m2-sit-on-the-fence", word: "Sit on the fence", phonetic: "/sɪt ɒn ðə fɛns/", translation: "Ficar em cima do muro, evitar se posicionar", partOfSpeech: "expressão idiomática", example: "You can't sit on the fence forever — eventually you'll have to bite the bullet and decide.", exampleTranslation: "Você não pode ficar em cima do muro para sempre — em algum momento vai ter que encarar e decidir.", antonyms: ["take a stand"] },
        { id: "c1-m2-throw-in-the-towel", word: "Throw in the towel", phonetic: "/θroʊ ɪn ðə ˈtaʊəl/", translation: "Desistir", partOfSpeech: "expressão idiomática", example: "After months of trying, they finally threw in the towel.", exampleTranslation: "Depois de meses tentando, eles finalmente desistiram.", antonyms: ["bite the bullet", "keep going"] }
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
        },
        {
          title: "Planning a Surprise Party",
          accent: "australian",
          transcript: "A: Don't let the cat out of the bag, okay? Liam still has no idea about the party. B: My lips are sealed, don't worry. Though organizing this has cost me an arm and a leg already — the venue alone was pricey. A: I hear you, but it'll be worth it. Once in a blue moon we get to do something this special for him. B: True. Have you sorted the food yet? A: Nearly. I was going to bite the bullet and just order catering instead of cooking everything myself. B: Smart move. Honestly, compared to last year's event, this one should be a piece of cake to organize. A: Let's hope so — we cut it close enough last time as it is.",
          questions: [
            { q: "What is the conversation mainly about?", options: ["Complaining about a coworker", "Organizing a surprise party without revealing the secret", "Planning a vacation", "Discussing a job interview"], answer: 1 },
            { q: "What has cost speaker B an arm and a leg?", options: ["The food", "The venue", "The decorations", "The invitations"], answer: 1 },
            { q: "What can be inferred about how last year's event went?", options: ["It was perfectly organized with plenty of time to spare", "It was somewhat rushed or stressful", "It didn't happen at all", "Nobody attended"], answer: 1 }
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
        },
        {
          title: "An Unexpected Promotion",
          text: "When my manager called me into her office last Friday, I assumed the worst — perhaps another round of budget cuts, or worse, layoffs. Instead, she cut to the chase and offered me a promotion I had never seen coming. At first, I thought she might be joking, but she assured me it was no joke at all. Admittedly, the timing could not have been more awkward: I had been feeling under the weather all week and could barely think straight, let alone celebrate properly. Still, I didn't want to look a gift horse in the mouth, so I accepted on the spot. My colleagues later admitted that the decision had been in the works for months, though nobody had let the cat out of the bag beforehand. Some things, apparently, really do cost an arm and a leg in terms of effort before they finally pay off. Looking back, I suspect the extra hours I quietly put in over the past year were exactly what tipped the scales in my favor, even if, at the time, none of it felt like anything more than routine, unremarkable work.",
          questions: [
            { q: "Why did the writer initially fear being called into the office?", options: ["They thought they were getting promoted", "They assumed it might be about budget cuts or layoffs", "They thought it was a birthday party", "They had no idea at all"], answer: 1 },
            { q: "How was the writer feeling that week?", options: ["Extremely excited", "A bit under the weather", "Furious", "Bored"], answer: 1 },
            { q: "What does 'let the cat out of the bag' refer to in the text?", options: ["Revealing the promotion news early", "Losing a pet", "Cancelling a meeting", "Firing someone"], answer: 0 },
            { q: "What can be inferred about the writer's attitude toward their own hard work?", options: ["They believe it was irrelevant to the promotion", "They suspect their quiet extra effort ultimately paid off", "They regret working extra hours", "They think the promotion was undeserved"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 3 frases usando idioms diferentes em contextos reais da sua vida.", minWords: 20, modelAnswer: "My exam was a piece of cake. I need to bite the bullet and talk to my landlord. I only see my cousins once in a blue moon." },
        { prompt: "Escreva um pequeno diálogo usando pelo menos 3 idioms desta lição.", minWords: 25, modelAnswer: "A: How was your day? B: A bit under the weather, honestly. A: Sorry to hear that. Let's cut to the chase — do you need help with anything?" },
        { prompt: "Escreva um relato pessoal (130-160 palavras) sobre uma vez em que você teve que 'bite the bullet' e tomar uma decisão difícil. Descreva a situação, o que você sentiu e o resultado, usando pelo menos 4 idioms desta lição de forma natural.", minWords: 130, minSentences: 6, requiredStructures: ["bite the bullet", "in the end", "even though"], targetWords: ["piece of cake", "under the weather", "cut to the chase"], modelAnswer: "Two years ago, I had to bite the bullet and quit a stable job to pursue something riskier. For months, I had been feeling stuck, and even though the salary was good, the work left me completely uninspired. Every morning I woke up feeling almost under the weather, dreading the same tasks all over again. Eventually, I decided to cut to the chase during a meeting with my manager and simply explain that I needed a change, rather than dragging out an awkward conversation for weeks. She was surprisingly understanding, which made handing in my notice far less painful than I expected. Looking back, I assumed leaving would be a piece of cake once I made the decision, but adjusting to freelance work actually took much longer than I imagined. In the end, though, I have no regrets: the discomfort of that first difficult conversation was nothing compared to the freedom I gained afterward." }
      ],
      speaking: [
        { phrase: "It's a piece of cake!", tip: "Diga com entusiasmo — é uma expressão informal e animada." },
        { phrase: "I'm feeling a bit under the weather.", tip: "'Weather' rima com 'feather', não com 'wither'." },
        { phrase: "Let's cut to the chase.", tip: "'Chase' tem o som 'ch' inicial, como em 'chair'." },
        { phrase: "You hit the nail on the head.", tip: "'Nail' tem vogal longa /eɪ/, como em 'mail'." },
        { phrase: "That cost an arm and a leg!", tip: "Enfatize 'arm' e 'leg' para dar o tom exagerado da expressão." },
        { phrase: "To put it simply, after months of feeling under the weather about my job, I finally decided to bite the bullet and make a change.", tip: "Resuma, com suas próprias palavras, uma situação em que você teve que tomar uma decisão difícil. Use pelo menos dois idioms desta lição e fale por cerca de 20-30 segundos." }
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
        { q: "'Piece of cake' means:", options: ["Muito difícil", "Muito fácil", "Muito caro", "Muito raro"], answer: 1, explanation: "'A piece of cake' é um idiom que descreve algo extremamente fácil de fazer, sem relação literal com bolo." },
        { q: "'Under the weather' means:", options: ["Muito feliz", "Um pouco doente", "Com muito frio", "Com muita pressa"], answer: 1, explanation: "'Under the weather' é uma forma idiomática e informal de dizer que alguém está um pouco doente ou indisposto." },
        { type: "tf", q: "'Cut to the chase' means to go straight to the point.", answer: true, explanation: "'Cut to the chase' significa ir direto ao assunto principal, evitando rodeios — muito usada em conversas informais e reuniões." },
        { q: "Complete: 'You hit the ___ on the head.'", options: ["nail", "hammer", "screw", "wall"], answer: 0, explanation: "O idiom fixo é 'hit the nail on the head', que significa acertar exatamente no ponto certo — a palavra não pode ser trocada por sinônimos como 'hammer'." },
        { type: "short", q: "Complete: 'That car cost an arm and a ___.'", answer: ["leg"], explanation: "'Cost an arm and a leg' significa custar muito caro; a expressão fixa termina em 'leg', não em outra parte do corpo." },
        { q: "'Once in a blue moon' means:", options: ["Frequentemente", "Raramente", "Nunca", "Sempre"], answer: 1, explanation: "'Once in a blue moon' descreve algo que acontece muito raramente, numa referência à raridade de uma 'lua azul'." },
        { type: "tf", q: "'Break the ice' means to start a conversation in an awkward situation.", answer: true, explanation: "'Break the ice' descreve a ação de aliviar a tensão ou o desconforto inicial em uma situação social, geralmente com humor ou uma pergunta casual." },
        { q: "Choose the correct idiom for 'deixar escapar um segredo'.", options: ["Let the cat out of the bag", "Break the ice", "Cost an arm and a leg", "Piece of cake"], answer: 0, explanation: "'Let the cat out of the bag' é o idiom que significa revelar um segredo, geralmente sem querer." },
        { q: "'Bite the bullet' means:", options: ["Evitar um problema", "Encarar uma situação difícil", "Comemorar", "Desistir"], answer: 1, explanation: "'Bite the bullet' significa enfrentar corajosamente algo difícil ou desagradável que não pode ser evitado." },
        { type: "short", q: "Complete: 'She's really on the ___ at work.' (atenta)", answer: ["ball"], explanation: "'On the ball' descreve alguém atento, competente e rápido para agir — a expressão fixa usa 'ball', não outra palavra." },
        { q: "Choose the correct sentence.", options: ["The exam was a piece of pie.", "The exam was a piece of cake.", "The exam was a slice of cake.", "The exam was a cake piece."], answer: 1, explanation: "O idiom correto é 'a piece of cake'; variações como 'a piece of pie' ou 'a slice of cake' não são expressões idiomáticas reconhecidas." },
        { type: "tf", q: "Idioms usually keep their exact words, though the verb tense can change.", answer: true, explanation: "A maioria dos idioms tem uma estrutura lexical fixa — as palavras não podem ser substituídas por sinônimos — mas o tempo verbal pode variar normalmente.", skill: "grammar", difficulty: "easy" },
        { q: "'Spill the beans' means:", options: ["Cozinhar um prato específico", "Revelar informação, às vezes sem querer", "Cancelar um evento", "Fazer uma pausa no trabalho"], answer: 1, explanation: "'Spill the beans' significa revelar uma informação, muitas vezes de forma acidental ou casual — próximo em sentido a 'let the cat out of the bag'.", skill: "vocabulary", difficulty: "easy" },
        { q: "'Tip the scales' means:", options: ["Ser o fator decisivo em uma situação", "Perder o equilíbrio fisicamente", "Pesar um objeto em uma balança", "Ignorar completamente um problema"], answer: 0, explanation: "'Tip the scales' descreve o fator que faz a diferença em uma decisão ou resultado, inclinando-o para um dos lados.", skill: "vocabulary", difficulty: "medium" },
        { q: "In 'An Unexpected Promotion', what does the writer suggest ultimately tipped the scales in their favor?", options: ["Office gossip about their personal life", "The quiet extra hours they had put in over the year", "A lucky guess during the interview", "Their manager's good mood that day"], answer: 1, explanation: "O texto sugere que as horas extras discretamente dedicadas ao longo do ano foram o que pesou a favor da promoção, mesmo parecendo trabalho rotineiro na época.", skill: "inference", difficulty: "medium" },
        { q: "In 'Planning a Surprise Party', what can be inferred about how last year's event went?", options: ["It was perfectly organized well in advance", "It was somewhat rushed, since they say they 'cut it close'", "It never actually happened", "Nobody enjoyed attending it"], answer: 1, explanation: "A fala 'we cut it close enough last time as it is' sugere que o evento do ano passado foi organizado em cima da hora, de forma apertada.", skill: "listening", difficulty: "medium" },
        { type: "tf", q: "Idioms like 'spill the beans' can have their noun replaced by any synonym (e.g. 'spill the peas') without changing the meaning.", answer: false, explanation: "Idioms têm estrutura lexical fixa; trocar 'beans' por outro alimento não é reconhecido como o mesmo idiom, mesmo sendo gramaticalmente possível.", skill: "grammar", difficulty: "medium" },
        { q: "Choose the idiom that means 'to keep a secret'.", options: ["Keep something under wraps", "Jump on the bandwagon", "Call it a day", "Burn the midnight oil"], answer: 0, explanation: "'Keep something under wraps' significa manter algo em segredo, sem revelar detalhes até o momento certo.", skill: "collocation", difficulty: "easy" },
        { q: "'Get cold feet' means:", options: ["To feel very cold physically", "To hesitate or lose confidence right before doing something important", "To become sick suddenly", "To celebrate an important success"], answer: 1, explanation: "'Get cold feet' descreve a hesitação ou perda de coragem pouco antes de fazer algo importante, como se casar ou assinar um contrato.", skill: "vocabulary", difficulty: "medium" },
        { type: "tf", q: "Idioms like 'piece of cake' and 'cost an arm and a leg' are typically appropriate in a formal academic essay.", answer: false, explanation: "Idioms são majoritariamente informais e conversacionais; a escrita acadêmica formal geralmente evita esse tipo de expressão.", skill: "register", difficulty: "medium" },
        { q: "How is 'the ball is in your court' different from 'on the ball'?", options: ["They mean exactly the same thing", "'The ball is in your court' means it's someone else's turn to decide; 'on the ball' means being alert and competent", "'On the ball' means to give up on something", "They are unrelated sports terms with no idiomatic meaning"], answer: 1, explanation: "Apesar de ambas usarem 'ball', são expressões distintas: uma indica de quem é a vez de agir, e a outra descreve competência e atenção.", skill: "vocabulary", difficulty: "hard" },
        { type: "short", q: "Complete: 'After months of trying, they finally threw in the ___.' (a toalha)", answer: ["towel"], explanation: "'Throw in the towel' significa desistir; a expressão fixa usa 'towel', em referência ao boxe, quando o técnico joga a toalha para encerrar a luta.", skill: "collocation", difficulty: "medium" },
        { q: "In 'Learning to Take Risks', what does the writer imply by saying it 'doesn't happen once in a blue moon that things work out so perfectly'?", options: ["Things like this happen to the writer all the time", "The writer acknowledges that this level of success is unusually rare", "The writer regrets having taken the risk", "The writer never actually took any risks"], answer: 1, explanation: "Ao usar 'once in a blue moon' de forma quase irônica, o escritor reconhece que um resultado tão perfeito é raro, mesmo tendo acontecido com ele.", skill: "inference", difficulty: "medium" },
        { q: "'Back to the drawing board' means:", options: ["To celebrate an unexpected victory", "To start over after a plan has failed", "To keep an important secret", "To work extremely hard on a deadline"], answer: 1, explanation: "'Back to the drawing board' significa recomeçar o planejamento do zero depois que uma tentativa anterior não deu certo." , skill: "vocabulary", difficulty: "easy" },
        { q: "Which idiom best replaces the underlined idea in: 'He understood what she really meant, even though she never said it directly'?", options: ["He read between the lines", "He threw in the towel", "He got cold feet", "He called it a day"], answer: 0, explanation: "'Read between the lines' significa perceber um significado implícito que não foi dito diretamente — exatamente a situação descrita.", skill: "vocabulary", difficulty: "hard" }
      ]
    },
    {
      id: "c1-m3",
      title: "Redação Formal e Acadêmica",
      subtitle: "Estrutura de redação formal e conectivos (linking words)",
      objective: "Ao final, o aluno consegue estruturar parágrafos formais e acadêmicos com frase-tópico, argumentação e conclusão, empregando conectivos sofisticados de adição, contraste e consequência (furthermore, nevertheless, whereas, consequently) e evitando contrações, gírias e afirmações absolutas.",
      prerequisites: ["c1-m2"],
      masteryEvidence: "Evidenciado por pontuação de pelo menos 60% no quiz do módulo, revisão concluída das atividades de writing, tentativa registrada das atividades de speaking e conclusão das 9 sessões do módulo.",
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
        { id: "c1-m3-furthermore", word: "Furthermore", phonetic: "/ˈfɜːrðərmɔːr/", translation: "Além disso", example: "Furthermore, the results were consistent.", exampleTranslation: "Além disso, os resultados foram consistentes." },
        { id: "c1-m3-nevertheless", word: "Nevertheless", phonetic: "/ˌnɛvərðəˈlɛs/", translation: "No entanto/Mesmo assim", example: "Nevertheless, the project continued.", exampleTranslation: "Mesmo assim, o projeto continuou." },
        { id: "c1-m3-consequently", word: "Consequently", phonetic: "/ˈkɒnsɪkwəntli/", translation: "Consequentemente", example: "Consequently, sales increased.", exampleTranslation: "Consequentemente, as vendas aumentaram." },
        { id: "c1-m3-whereas", word: "Whereas", phonetic: "/wɛərˈæz/", translation: "Enquanto que", example: "Some prefer coffee, whereas others prefer tea.", exampleTranslation: "Alguns preferem café, enquanto outros preferem chá." },
        { id: "c1-m3-in-light-of", word: "In light of", phonetic: "/ɪn laɪt ʌv/", translation: "Em vista de", example: "In light of the results, we changed our strategy.", exampleTranslation: "Em vista dos resultados, mudamos nossa estratégia." },
        { id: "c1-m3-argument", word: "Argument", phonetic: "/ˈɑːrɡjəmənt/", translation: "Argumento", example: "This is a strong argument.", exampleTranslation: "Este é um argumento forte." },
        { id: "c1-m3-evidence", word: "Evidence", phonetic: "/ˈɛvɪdəns/", translation: "Evidência", example: "The evidence supports this theory.", exampleTranslation: "A evidência apoia esta teoria." },
        { id: "c1-m3-conclude", word: "Conclude", phonetic: "/kənˈkluːd/", translation: "Concluir", example: "We can conclude that the method works.", exampleTranslation: "Podemos concluir que o método funciona." },
        { id: "c1-m3-significant", word: "Significant", phonetic: "/sɪɡˈnɪfɪkənt/", translation: "Significativo(a)", example: "There was a significant improvement.", exampleTranslation: "Houve uma melhoria significativa." },
        { id: "c1-m3-perspective", word: "Perspective", phonetic: "/pərˈspɛktɪv/", translation: "Perspectiva", example: "This offers a new perspective on the issue.", exampleTranslation: "Isto oferece uma nova perspectiva sobre a questão." },
        { id: "c1-m3-contend", word: "Contend", phonetic: "/kənˈtɛnd/", translation: "Afirmar, argumentar formalmente", partOfSpeech: "verbo", register: "formal", example: "Proponents contend that automation increases efficiency and reduces costs.", exampleTranslation: "Os proponentes afirmam que a automação aumenta a eficiência e reduz custos.", synonyms: ["argue", "assert"] },
        { id: "c1-m3-disproportionately", word: "Disproportionately", phonetic: "/ˌdɪsprəˈpɔːrʃənətli/", translation: "De forma desproporcional", partOfSpeech: "advérbio", example: "Critics warn that automation's gains are disproportionately distributed.", exampleTranslation: "Críticos alertam que os ganhos da automação são distribuídos de forma desproporcional.", wordFamily: ["proportion", "disproportionate"] },
        { id: "c1-m3-outstrip", word: "Outstrip", phonetic: "/aʊtˈstrɪp/", translation: "Superar, ultrapassar", partOfSpeech: "verbo", example: "The pace of technological change has outstripped many governments' capacity to adapt.", exampleTranslation: "O ritmo da mudança tecnológica superou a capacidade de adaptação de muitos governos.", synonyms: ["surpass", "outpace"] },
        { id: "c1-m3-nuanced", word: "Nuanced", phonetic: "/ˈnuːɑːnst/", translation: "Sutil, cheio de nuances", partOfSpeech: "adjetivo", example: "A more nuanced position acknowledges both the benefits and the costs of automation.", exampleTranslation: "Uma posição mais sutil reconhece tanto os benefícios quanto os custos da automação.", wordFamily: ["nuance"] },
        { id: "c1-m3-shortsighted", word: "Shortsighted", phonetic: "/ˈʃɔːrtˈsaɪtɪd/", translation: "Imediatista, de visão curta", partOfSpeech: "adjetivo", example: "Dismissing automation altogether would be shortsighted, given its contributions to productivity.", exampleTranslation: "Rejeitar a automação por completo seria imediatista, dado o quanto ela contribuiu para a produtividade.", antonyms: ["farsighted"], commonError: "Aqui 'shortsighted' é figurado (falta de visão de longo prazo em uma decisão), não apenas o sentido literal de miopia." },
        { id: "c1-m3-cushion", word: "Cushion", phonetic: "/ˈkʊʃən/", translation: "Amortecer, suavizar o impacto de algo", partOfSpeech: "verbo", example: "Governments should adopt policies that cushion the social costs of automation.", exampleTranslation: "Os governos deveriam adotar políticas que amorteçam os custos sociais da automação.", commonError: "Como verbo, 'cushion' significa amortecer/suavizar um impacto — sentido diferente do substantivo 'cushion' (almofada)." },
        { id: "c1-m3-redistribution", word: "Redistribution", phonetic: "/ˌriːdɪstrɪˈbjuːʃən/", translation: "Redistribuição", partOfSpeech: "substantivo", example: "It remains an open question whether institutions are equipped to manage that redistribution.", exampleTranslation: "Ainda é uma questão em aberto se as instituições estão preparadas para gerir essa redistribuição.", wordFamily: ["distribute", "distribution", "redistribute"] },
        { id: "c1-m3-correlation", word: "Correlation", phonetic: "/ˌkɒrəˈleɪʃən/", translation: "Correlação", partOfSpeech: "substantivo", example: "Studies suggest a correlation between excessive use and increased anxiety.", exampleTranslation: "Estudos sugerem uma correlação entre uso excessivo e aumento da ansiedade.", collocations: ["a correlation between X and Y"], commonError: "Correlação não implica causalidade — um erro lógico comum é assumir que 'correlation' prova uma relação de causa e efeito." },
        { id: "c1-m3-unprecedented", word: "Unprecedented", phonetic: "/ʌnˈprɛsɪdɛntɪd/", translation: "Sem precedentes, inédito", partOfSpeech: "adjetivo", example: "Social media has transformed communication in unprecedented ways.", exampleTranslation: "As redes sociais transformaram a comunicação de maneiras sem precedentes.", wordFamily: ["precedent"] },
        { id: "c1-m3-coexist", word: "Coexist", phonetic: "/ˌkoʊɪɡˈzɪst/", translation: "Coexistir", partOfSpeech: "verbo", example: "Free higher education can coexist with strong academic outcomes, some countries show.", exampleTranslation: "A educação superior gratuita pode coexistir com bons resultados acadêmicos, como mostram alguns países.", wordFamily: ["exist", "coexistence"] },
        { id: "c1-m3-subsidize", word: "Subsidize", phonetic: "/ˈsʌbsɪdaɪz/", translation: "Subsidiar", partOfSpeech: "verbo", example: "Several countries have heavily subsidized higher education for decades.", exampleTranslation: "Vários países subsidiam fortemente a educação superior há décadas.", wordFamily: ["subsidy", "subsidized"] },
        { id: "c1-m3-in-short-supply", word: "In short supply", phonetic: "/ɪn ʃɔːrt səˈplaɪ/", translation: "Escasso, em falta", partOfSpeech: "expressão", example: "Implementing such reforms requires political will, something that has been in short supply.", exampleTranslation: "Implementar essas reformas exige vontade política, algo que tem estado em falta." },
        { id: "c1-m3-on-the-one-hand", word: "On the one hand… on the other hand", phonetic: "/ɒn ðə wʌn hænd … ɒn ði ˈʌðər hænd/", translation: "Por um lado... por outro lado", partOfSpeech: "conectivo", example: "On the one hand, universities need funding; on the other hand, students shouldn't bear all the cost.", exampleTranslation: "Por um lado, as universidades precisam de financiamento; por outro lado, os estudantes não deveriam arcar com todo o custo.", collocations: ["on the one hand", "on the other hand"] },
        { id: "c1-m3-arguably", word: "Arguably", phonetic: "/ˈɑːrɡjuəbli/", translation: "Pode-se argumentar que, possivelmente", partOfSpeech: "advérbio", register: "formal", example: "Primary education arguably needs funding just as urgently as universities do.", exampleTranslation: "Pode-se argumentar que a educação primária precisa de financiamento tão urgentemente quanto as universidades.", commonError: "'Arguably' suaviza uma afirmação (hedging language) — não confundir com uma forma inexistente como 'argumentatively' nesse sentido." },
        { id: "c1-m3-income-share-agreement", word: "Income-share agreement", phonetic: "/ˈɪnkʌm ʃɛr əˈɡriːmənt/", translation: "Acordo de compartilhamento de renda", partOfSpeech: "substantivo", example: "Some institutions have begun experimenting with alternative funding models, such as income-share agreements.", exampleTranslation: "Algumas instituições começaram a experimentar modelos alternativos de financiamento, como acordos de compartilhamento de renda." }
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
        },
        {
          title: "A Panel Discussion on Higher Education",
          accent: "american",
          transcript: "Thank you for having me. I'd like to focus on the rising cost of higher education. On one hand, universities argue that costs reflect necessary investments in research and facilities. On the other hand, students increasingly graduate with debt that takes decades to repay. In light of this tension, some institutions have begun experimenting with alternative funding models, such as income-share agreements. Furthermore, several countries have shown that heavily subsidized or free higher education can coexist with strong academic outcomes. Consequently, I would argue that cost alone should not determine access to education. Nevertheless, implementing such reforms requires significant political will, something that, frankly, has been in short supply.",
          questions: [
            { q: "What is the speaker mainly discussing?", options: ["The history of universities", "The rising cost of higher education", "Sports funding", "Technology in classrooms"], answer: 1 },
            { q: "What alternative funding model does the speaker mention?", options: ["Income-share agreements", "Free textbooks", "Government loans only", "Corporate sponsorships"], answer: 0 },
            { q: "What does the speaker imply about political will for reform?", options: ["It is abundant and strong", "It has been lacking", "It doesn't matter at all", "It is guaranteed to increase"], answer: 1 }
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
        },
        {
          title: "The Ethics of Automation in the Workplace",
          text: "The rapid automation of routine tasks has prompted considerable debate among economists and policymakers alike. Proponents contend that automation increases efficiency, reduces production costs, and ultimately frees workers from monotonous labor. Critics, however, warn that these gains are unevenly distributed, disproportionately benefiting corporations while displacing workers in lower-skilled positions. Moreover, the pace of technological change has outstripped many governments' capacity to retrain displaced workers or adapt social safety nets accordingly. Nevertheless, dismissing automation altogether would be shortsighted, given its demonstrable contributions to productivity growth over the past decade. A more nuanced position might acknowledge both the transformative potential of automation and the urgent need for policies that cushion its social costs — retraining programs, portable benefits, and perhaps even forms of universal basic income. In light of these competing considerations, it seems reasonable to conclude that the central challenge is not whether automation should proceed, but rather how its benefits and burdens ought to be shared. Whether current institutions are equipped to manage that redistribution remains, at best, an open question.",
          questions: [
            { q: "According to proponents, what does automation do?", options: ["It only harms workers", "It increases efficiency and reduces costs", "It has no economic effect", "It is illegal in most countries"], answer: 1 },
            { q: "What do critics warn about automation's benefits?", options: ["They are shared equally", "They are unevenly distributed, favoring corporations", "They don't exist", "They only help workers"], answer: 1 },
            { q: "What does the writer suggest as part of a 'nuanced position'?", options: ["Banning automation completely", "Retraining programs and portable benefits", "Ignoring the issue", "Only helping corporations"], answer: 1 },
            { q: "What can be inferred about the writer's overall stance on automation?", options: ["They believe automation is entirely negative and should be stopped", "They take a balanced view, seeing both value and risk that must be managed", "They are completely indifferent to the topic", "They believe governments should have no role at all"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva um parágrafo formal (5-6 frases) sobre um tema à sua escolha, usando pelo menos 3 conectivos formais.", minWords: 40, modelAnswer: "Remote work has become increasingly common in the modern economy. Furthermore, it offers considerable flexibility, allowing employees to better balance their professional and personal responsibilities. However, it can also lead to feelings of isolation and blur the boundaries between work and home life. Consequently, companies must find an appropriate balance between autonomy and structured collaboration. In conclusion, while remote work undoubtedly has both benefits and challenges, its long-term success ultimately depends on thoughtful implementation." },
        { prompt: "Reescreva 3 frases informais transformando-as em linguagem formal e acadêmica.", minWords: 20, modelAnswer: "It is not possible to confirm this claim without further evidence. The data indicates a significant trend. One might argue that additional research is necessary." },
        { prompt: "Escreva uma redação formal (160-180 palavras) argumentando a favor ou contra o trabalho remoto como modelo padrão de trabalho. Estruture o texto com introdução, desenvolvimento e conclusão, usando pelo menos 3 conectivos formais (furthermore, however, consequently, in conclusion) e evitando contrações.", minWords: 160, minSentences: 7, requiredStructures: ["furthermore", "however", "in conclusion"], targetWords: ["significant", "perspective", "evidence"], modelAnswer: "Remote work has become one of the most debated topics in contemporary labor policy. Furthermore, its rapid adoption during recent years has revealed both considerable advantages and significant drawbacks that deserve careful examination. On one hand, remote arrangements grant employees greater autonomy over their schedules, which numerous studies cite as evidence of improved job satisfaction. However, this flexibility is not without cost: many workers report feelings of isolation, and the boundary between professional and personal life often becomes blurred. Consequently, organizations must adopt policies that address these psychological effects rather than assuming that flexibility alone guarantees wellbeing. Ultimately, evaluating this shift requires evidence rather than assumption, since anecdotal impressions alone cannot capture so significant a transformation in how societies define work. From my perspective, a hybrid model — combining occasional in-person collaboration with remote autonomy — offers the most balanced solution currently available. In conclusion, while remote work undoubtedly represents a significant shift in how we organize labor, its long-term success depends less on the model itself than on the thoughtfulness with which it is implemented." }
      ],
      speaking: [
        { phrase: "Furthermore, the results were consistent.", tip: "'Furthermore' tem 3 sílabas: FUR-ther-more." },
        { phrase: "However, some disagree with this view.", tip: "'However' geralmente vem seguido de vírgula e uma pequena pausa." },
        { phrase: "Consequently, sales increased.", tip: "'Consequently' tem acento na primeira sílaba: CON-se-quent-ly." },
        { phrase: "In conclusion, the study was successful.", tip: "'Conclusion' tem acento na segunda sílaba: con-CLU-sion." },
        { phrase: "This offers a new perspective.", tip: "'Perspective' tem acento na segunda sílaba: per-SPEC-tive." },
        { phrase: "Rather than saying 'you can't just do that,' a more formal way to express the same idea would be: 'It is not advisable to proceed in this manner without further consideration.'", tip: "Pegue uma frase informal e reformule-a em um registro formal e acadêmico, como praticado nesta lição. Diga as duas versões em voz alta." }
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
        { q: "Choose the correct formal connector for addition.", options: ["However", "Furthermore", "Whereas", "Despite"], answer: 1, explanation: "'Furthermore' é usado para acrescentar informação em registro formal, assim como 'moreover' e 'in addition' — diferente de 'however', que indica contraste." },
        { q: "Choose the correct formal connector for contrast.", options: ["Moreover", "In addition", "However", "Consequently"], answer: 2, explanation: "'However' introduz uma ideia contrastante em registro formal; 'moreover' e 'in addition' indicam adição, e 'consequently' indica consequência." },
        { type: "tf", q: "'Consequently' is used to show a result or consequence.", answer: true, explanation: "'Consequently' é um conectivo formal que introduz o resultado ou a consequência de algo mencionado anteriormente, equivalente a 'consequentemente'." },
        { q: "Complete: 'In ___, the results are promising.' (conclusão)", options: ["addition", "conclusion", "contrast", "evidence"], answer: 1, explanation: "'In conclusion' é a expressão formal usada para introduzir o fechamento de um texto ou argumento, resumindo as ideias apresentadas." },
        { type: "short", q: "Complete: 'Some prefer tea, ___ others prefer coffee.' (enquanto que)", answer: ["whereas"], explanation: "'Whereas' é um conectivo formal de contraste usado para comparar duas ideias opostas dentro da mesma frase, equivalente a 'enquanto que'." },
        { q: "'Evidence' means:", options: ["Opinião", "Evidência", "Dúvida", "Erro"], answer: 1, explanation: "'Evidence' refere-se a fatos, dados ou provas que sustentam um argumento ou conclusão." },
        { type: "tf", q: "Formal academic writing typically uses contractions like 'can't' and 'don't'.", answer: false, explanation: "A escrita formal/acadêmica geralmente evita contrações, preferindo formas completas como 'cannot' e 'do not'." },
        { q: "Choose the correct sentence.", options: ["Furthermore but the results support this.", "Furthermore, the results support this.", "The results, furthermore support this and.", "Furthermore results the support this."], answer: 1, explanation: "'Furthermore' deve iniciar a frase seguido de vírgula, sem conjunções redundantes como 'but' logo em seguida." },
        { q: "'Significant' means:", options: ["Insignificante", "Significativo", "Duvidoso", "Impossível"], answer: 1, explanation: "'Significant' descreve algo importante ou notável, com impacto relevante — equivalente a 'significativo'." },
        { type: "short", q: "Complete: 'This offers a new ___ on the issue.' (perspectiva)", answer: ["perspective"], explanation: "'Perspective' significa o ponto de vista ou ângulo sob o qual uma questão é vista, equivalente a 'perspectiva'." },
        { q: "Choose the correct sentence.", options: ["However, some disagree with this view.", "However some, disagree with this view.", "Some, however disagree with this view however.", "However disagree some with this view."], answer: 0, explanation: "'However' aparece corretamente no início da frase seguido de vírgula: 'However, some disagree with this view.' — as demais opções quebram essa estrutura fixa." },
        { type: "tf", q: "'Nevertheless' and 'however' can both be used to show contrast.", answer: true, explanation: "Ambos os conectivos introduzem uma ideia contrastante em relação à anterior, embora 'nevertheless' tenha um tom ligeiramente mais formal e enfático.", skill: "grammar", difficulty: "easy" },
        { q: "'Contend' in an academic context means:", options: ["Lutar fisicamente por algo", "Afirmar ou argumentar de forma formal", "Concordar sem questionar", "Ignorar completamente um argumento"], answer: 1, explanation: "'Contend' é um verbo formal usado para apresentar uma afirmação ou argumento, comum em textos acadêmicos e jornalísticos.", skill: "vocabulary", difficulty: "easy" },
        { q: "'Disproportionately' means:", options: ["De forma equilibrada e justa", "De forma desproporcional", "De forma imediata", "De forma secreta"], answer: 1, explanation: "'Disproportionately' descreve algo distribuído ou afetado de forma desigual, sem equilíbrio entre as partes.", skill: "vocabulary", difficulty: "medium" },
        { q: "According to 'The Ethics of Automation in the Workplace', what does the writer identify as the 'central challenge'?", options: ["Whether automation should be banned entirely", "How automation's benefits and burdens ought to be shared", "Whether robots can replace every job", "Whether governments should ignore the issue completely"], answer: 1, explanation: "O texto conclui que o desafio central não é se a automação deve continuar, mas como seus benefícios e ônus devem ser compartilhados.", skill: "inference", difficulty: "medium" },
        { q: "In the panel discussion on higher education, what does the speaker imply has been 'in short supply'?", options: ["Money for universities", "Political will for reform", "Student applications", "Research funding"], answer: 1, explanation: "O falante afirma que implementar reformas exige vontade política, algo que 'has been in short supply' (tem estado em falta).", skill: "listening", difficulty: "medium" },
        { q: "Choose the sentence that uses hedging language appropriately in an academic argument.", options: ["Automation always destroys every job, no exceptions.", "Automation arguably displaces some workers, though the evidence is mixed.", "Automation never affects employment in any way.", "Automation is definitely good for absolutely everyone."], answer: 1, explanation: "'Arguably' e 'though the evidence is mixed' são exemplos de linguagem de ressalva (hedging), típica do registro acadêmico, que evita afirmações absolutas.", skill: "register", difficulty: "hard" },
        { q: "'Outstrip' means:", options: ["Superar, ultrapassar", "Diminuir gradualmente", "Cancelar por completo", "Copiar de forma idêntica"], answer: 0, explanation: "'Outstrip' significa superar ou ultrapassar algo em ritmo ou intensidade, como no texto sobre a automação superando a capacidade dos governos." , skill: "vocabulary", difficulty: "medium" },
        { type: "tf", q: "Words like 'contend' and 'arguably' are typical of formal academic register, not casual conversation.", answer: true, explanation: "Ambas as palavras são marcadores de registro formal, comuns em ensaios acadêmicos e debates estruturados, raramente usadas em conversas informais.", skill: "register", difficulty: "medium" },
        { type: "short", q: "Complete: 'Studies suggest a ___ between excessive use and anxiety.' (correlação)", answer: ["correlation"], explanation: "'Correlation' é a palavra formal para descrever uma relação estatística entre dois fatores, usada na expressão fixa 'a correlation between X and Y'.", skill: "collocation", difficulty: "medium" },
        { q: "What is the key distinction careful academic writing makes between 'correlation' and causation?", options: ["They mean exactly the same thing", "Correlation shows two things are related, but doesn't prove one causes the other", "Causation is considered less reliable than correlation", "There is no meaningful difference between them"], answer: 1, explanation: "Um princípio central da escrita acadêmica é que correlação não implica causalidade — dois fatores podem estar relacionados sem que um cause o outro.", skill: "vocabulary", difficulty: "hard" },
        { q: "Choose the correct connector pair for contrasting two viewpoints.", options: ["On the one hand… on the other hand", "Furthermore… furthermore", "Because… therefore", "Whereas… whereas"], answer: 0, explanation: "'On the one hand… on the other hand' é o par de conectivos formais usado para apresentar dois lados opostos de uma questão.", skill: "grammar", difficulty: "easy" },
        { q: "What can be inferred about the writer's overall stance in 'The Ethics of Automation in the Workplace'?", options: ["They fully support unregulated automation with no concerns at all", "They argue automation should be completely reversed", "They adopt a nuanced position, weighing both benefits and social costs", "They avoid taking any position on the issue whatsoever"], answer: 2, explanation: "O texto pondera tanto os ganhos de produtividade quanto os custos sociais da automação, adotando uma posição equilibrada e não extremista.", skill: "inference", difficulty: "hard" },
        { q: "'Unprecedented' means:", options: ["Comum e completamente esperado", "Sem precedentes, inédito", "Antigo e ultrapassado", "Proibido por lei"], answer: 1, explanation: "'Unprecedented' descreve algo que nunca aconteceu antes daquela forma ou intensidade, equivalente a 'sem precedentes'.", skill: "vocabulary", difficulty: "easy" },
        { q: "'Subsidize' means:", options: ["Cobrar taxas extras de alguém", "Financiar parcialmente com fundos públicos ou externos", "Proibir o uso de algo", "Aumentar o preço de um produto"], answer: 1, explanation: "'Subsidize' significa financiar ou apoiar financeiramente algo, geralmente com fundos públicos, reduzindo o custo para o usuário final.", skill: "vocabulary", difficulty: "medium" }
      ]
    },
    {
      id: "c1-m4",
      title: "Compreendendo Áudio Nativo",
      subtitle: "Fala conectada, reduções e compreensão de áudio em velocidade natural",
      objective: "Ao final, o aluno consegue reconhecer reduções e fala conectada comuns (gonna, wanna, gotta, whaddaya, lemme) e aplicar estratégias de compreensão auditiva — foco no sentido geral e nas palavras com ênfase — para acompanhar podcasts, filmes e conversas nativas em velocidade natural.",
      prerequisites: ["c1-m3"],
      masteryEvidence: "Evidenciado por pontuação de pelo menos 60% no quiz do módulo, revisão concluída das atividades de writing, tentativa registrada das atividades de speaking e conclusão das 9 sessões do módulo.",
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
        { id: "c1-m4-connected-speech", word: "Connected speech", phonetic: "/kəˈnɛktɪd spiːtʃ/", translation: "Fala conectada", example: "Connected speech can be hard for learners.", exampleTranslation: "A fala conectada pode ser difícil para os aprendizes." },
        { id: "c1-m4-reduction", word: "Reduction", phonetic: "/rɪˈdʌkʃən/", translation: "Redução", example: "'Gonna' is a reduction of 'going to'.", exampleTranslation: "'Gonna' é uma redução de 'going to'." },
        { id: "c1-m4-stress", word: "Stress", phonetic: "/strɛs/", translation: "Ênfase/Acento", example: "Sentence stress changes the meaning.", exampleTranslation: "A ênfase na frase muda o significado." },
        { id: "c1-m4-native-speaker", word: "Native speaker", phonetic: "/ˈneɪtɪv ˈspiːkər/", translation: "Falante nativo", example: "I love listening to native speakers.", exampleTranslation: "Eu adoro ouvir falantes nativos." },
        { id: "c1-m4-slang", word: "Slang", phonetic: "/slæŋ/", translation: "Gíria", example: "That word is slang, not formal English.", exampleTranslation: "Essa palavra é gíria, não inglês formal." },
        { id: "c1-m4-mumble", word: "Mumble", phonetic: "/ˈmʌmbəl/", translation: "Resmungar/Falar sem clareza", example: "He tends to mumble when he's nervous.", exampleTranslation: "Ele tende a falar de forma pouco clara quando está nervoso." },
        { id: "c1-m4-context", word: "Context", phonetic: "/ˈkɒntɛkst/", translation: "Contexto", example: "Context helps you guess unknown words.", exampleTranslation: "O contexto ajuda a adivinhar palavras desconhecidas." },
        { id: "c1-m4-fluent", word: "Fluent", phonetic: "/ˈfluːənt/", translation: "Fluente", example: "She sounds completely fluent now.", exampleTranslation: "Ela soa completamente fluente agora." },
        { id: "c1-m4-accent", word: "Accent", phonetic: "/ˈæksɛnt/", translation: "Sotaque", example: "Every region has a different accent.", exampleTranslation: "Cada região tem um sotaque diferente." },
        { id: "c1-m4-pace", word: "Pace", phonetic: "/peɪs/", translation: "Ritmo/Velocidade", example: "Native speakers often talk at a fast pace.", exampleTranslation: "Falantes nativos costumam falar em um ritmo rápido." },
        { id: "c1-m4-gonna", word: "Gonna", phonetic: "/ˈɡɒnə/", translation: "Vou (forma falada de 'going to')", partOfSpeech: "forma reduzida", register: "informal", example: "I'm gonna grab a coffee before the meeting starts.", exampleTranslation: "Vou pegar um café antes da reunião começar.", commonError: "'Gonna' só é usado antes de um verbo ('going to' + verbo); evite escrevê-lo em textos formais ou acadêmicos." },
        { id: "c1-m4-wanna", word: "Wanna", phonetic: "/ˈwɒnə/", translation: "Quer/quero (forma falada de 'want to')", partOfSpeech: "forma reduzida", register: "informal", example: "Wanna grab a bite after class?", exampleTranslation: "Quer comer alguma coisa depois da aula?" },
        { id: "c1-m4-gotta", word: "Gotta", phonetic: "/ˈɡɒtə/", translation: "Tenho que (forma falada de 'got to'/'have to')", partOfSpeech: "forma reduzida", register: "informal", example: "I gotta run, I'm already late.", exampleTranslation: "Eu tenho que correr, já estou atrasado." },
        { id: "c1-m4-dunno", word: "Dunno", phonetic: "/dəˈnoʊ/", translation: "Não sei (forma falada de 'don't know')", partOfSpeech: "forma reduzida", register: "informal", example: "I dunno what time works best for you.", exampleTranslation: "Não sei que horário funciona melhor para você." },
        { id: "c1-m4-whatcha", word: "Whatcha", phonetic: "/ˈwɒtʃə/", translation: "O que você (forma falada de 'what are you'/'what have you')", partOfSpeech: "forma reduzida", register: "informal", example: "Whatcha havin' today?", exampleTranslation: "O que você vai querer hoje?", commonError: "'Whatcha' pode vir de 'what are you' ou 'what have you' dependendo do contexto — só o contexto revela qual." },
        { id: "c1-m4-gotcha", word: "Gotcha", phonetic: "/ˈɡɒtʃə/", translation: "Entendi / conto com isso (forma falada de 'got you')", partOfSpeech: "forma reduzida", register: "informal", example: "No worries, we gotcha covered.", exampleTranslation: "Sem problemas, a gente resolve isso pra você." },
        { id: "c1-m4-gimme", word: "Gimme", phonetic: "/ˈɡɪmi/", translation: "Me dá (forma falada de 'give me')", partOfSpeech: "forma reduzida", register: "informal", example: "Gimme one of those pastries too, please.", exampleTranslation: "Me dá um daqueles pastéis também, por favor." },
        { id: "c1-m4-kinda-sorta", word: "Kinda / Sorta", phonetic: "/ˈkaɪndə/ /ˈsɔːrtə/", translation: "Meio que, tipo (forma falada de 'kind of'/'sort of')", partOfSpeech: "forma reduzida", register: "informal", example: "It's kinda hard to understand fast speech at first.", exampleTranslation: "É meio difícil entender a fala rápida no início." },
        { id: "c1-m4-get-the-gist", word: "Get the gist", phonetic: "/ɡɛt ðə dʒɪst/", translation: "Entender a ideia geral", partOfSpeech: "expressão", example: "You don't need every word — just try to get the gist of the conversation.", exampleTranslation: "Você não precisa de cada palavra — só tente entender a ideia geral da conversa." },
        { id: "c1-m4-indecipherable", word: "Indecipherable", phonetic: "/ˌɪndɪˈsaɪfərəbəl/", translation: "Indecifrável", partOfSpeech: "adjetivo", example: "What once sounded like an indecipherable blur begins to resolve into recognizable patterns.", exampleTranslation: "O que antes soava como um borrão indecifrável começa a se resolver em padrões reconhecíveis.", wordFamily: ["decipher", "cipher"] },
        { id: "c1-m4-intuitive", word: "Intuitive", phonetic: "/ɪnˈtuːɪtɪv/", translation: "Intuitivo", partOfSpeech: "adjetivo", example: "Relying only on transcripts rarely builds intuitive processing speed.", exampleTranslation: "Depender só de transcrições raramente desenvolve uma velocidade de processamento intuitiva.", wordFamily: ["intuition", "intuitively"] },
        { id: "c1-m4-blur", word: "Blur", phonetic: "/blɜːr/", translation: "Misturar-se, ficar indistinto", partOfSpeech: "verbo", example: "Sentences blur together in fast, connected speech.", exampleTranslation: "As frases se misturam na fala rápida e conectada." },
        { id: "c1-m4-resemblance", word: "Resemblance", phonetic: "/rɪˈzɛmbləns/", translation: "Semelhança", partOfSpeech: "substantivo", example: "Reduced speech bears only a passing resemblance to its written form.", exampleTranslation: "A fala reduzida guarda apenas uma leve semelhança com sua forma escrita.", wordFamily: ["resemble"] },
        { id: "c1-m4-overwhelmed", word: "Overwhelmed", phonetic: "/ˌoʊvərˈwɛlmd/", translation: "Sobrecarregado, tomado por algo difícil", partOfSpeech: "adjetivo", example: "Learners often feel overwhelmed the first time they listen to real native speech.", exampleTranslation: "Aprendizes costumam se sentir sobrecarregados na primeira vez que ouvem a fala nativa real.", wordFamily: ["overwhelm", "overwhelming"] },
        { id: "c1-m4-exposure", word: "Exposure", phonetic: "/ɪkˈspoʊʒər/", translation: "Exposição, contato repetido (a algo)", partOfSpeech: "substantivo", example: "This skill develops naturally with enough exposure to podcasts and real conversations.", exampleTranslation: "Essa habilidade se desenvolve naturalmente com exposição suficiente a podcasts e conversas reais.", collocations: ["exposure to", "repeated exposure"] }
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
        },
        {
          title: "Ordering Coffee, Fast and Casual",
          accent: "british",
          transcript: "Barista: Mornin'! Whatcha havin' today? Customer: Uh, lemme think... I'll havta get a large flat white, I guess. Ya got any of them oat milk options? Barista: Yeah, no worries, we gotcha covered. D'you want anything else with that, or is that gonna be it? Customer: Nah, that's it, thanks. Oh wait — actually, gimme one of those pastries too, whichever's freshest. Barista: No problem. That'll be six-fifty altogether, whenever you're ready. Customer: Cheers. D'you take contactless? Barista: 'Course we do, just tap it there. Customer: Brilliant, thanks so much. Barista: No worries at all — have a good one!",
          questions: [
            { q: "What is happening in this conversation?", options: ["A customer is returning a product", "A customer is ordering coffee and a pastry", "Two friends are catching up", "Someone is applying for a job"], answer: 1 },
            { q: "What milk option does the customer ask about?", options: ["Almond milk", "Soy milk", "Oat milk", "Coconut milk"], answer: 2 },
            { q: "What does the barista's phrase 'no worries' suggest about the tone of the exchange?", options: ["It is tense and formal", "It is relaxed and casual", "It is angry", "It is confusing to both speakers"], answer: 1 }
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
        },
        {
          title: "Podcasts and the Path to Fluency",
          text: "Anyone who has tried to understand a native English podcast after years of classroom study knows the peculiar shock of realizing how little textbook English resembles real speech. Sentences blur together, words drop their endings, and phrases collapse into single sounds that bear only a passing resemblance to their written forms. 'Did you eat yet?' becomes something closer to 'Jeetyet?', and even advanced learners can feel as though they have regressed to their very first lesson. The temptation, at that point, is to reach for a transcript and painstakingly decode every syllable. That approach, however useful for isolated phrases, rarely builds the kind of intuitive processing speed that real conversations demand. A more productive strategy involves repeated, relaxed exposure — listening to the same short clip several times, focusing first on the general gist, then gradually tuning in to specific reductions once the overall meaning is secure. Over months of this kind of practice, what once sounded like an indecipherable blur begins to resolve into recognizable, even predictable, patterns. The ear, it turns out, adapts far more readily than most learners expect — provided they resist the urge to give up during those first frustrating weeks.",
          questions: [
            { q: "What happens to words in real native speech, according to the text?", options: ["They are pronounced very clearly and slowly", "They blur together and drop endings", "They disappear from the sentence entirely", "They are always repeated twice"], answer: 1 },
            { q: "What is one problem with relying only on transcripts, according to the writer?", options: ["It's illegal", "It rarely builds intuitive processing speed", "It's too expensive", "It only works for beginners"], answer: 1 },
            { q: "What strategy does the writer recommend?", options: ["Giving up after one attempt", "Repeated, relaxed listening focusing first on gist", "Reading only, never listening", "Memorizing dictionaries"], answer: 1 },
            { q: "What does the writer imply about learners who quit early?", options: ["They would have succeeded anyway", "They likely give up right before things start to improve", "They made the right decision", "Early quitting has no real consequence"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 3 frases usando formas reduzidas (gonna, wanna, gotta) como você as ouviria faladas.", minWords: 15, modelAnswer: "I'm gonna call her later. Do you wanna come with us? I gotta finish this first." },
        { prompt: "Escreva sobre suas estratégias pessoais para entender falantes nativos de inglês.", minWords: 20, modelAnswer: "I listen to podcasts every day. I focus on the general meaning instead of every word. I watch movies with English subtitles first." },
        { prompt: "Escreva um texto (140-175 palavras) argumentando se as escolas de idiomas deveriam ensinar fala reduzida e conectada (gonna, wanna, whaddaya) desde os níveis iniciais ou apenas em níveis avançados. Justifique sua opinião com pelo menos um exemplo pessoal.", minWords: 140, minSentences: 7, requiredStructures: ["in my opinion", "for example", "on the other hand"], targetWords: ["reduction", "context", "fluent"], modelAnswer: "In my opinion, language schools should introduce connected speech and common reductions much earlier than they currently do, rather than saving them exclusively for advanced levels. For example, when I first tried watching English movies without subtitles, I understood almost nothing, even though I had studied grammar for years — the gap between textbook English and real speech felt enormous. Had my early lessons included even brief exposure to reductions like 'gonna' or 'wanna', I believe I would have developed a more accurate sense of how native speakers actually sound. On the other hand, beginners already face considerable cognitive load while learning basic vocabulary and grammar, so overwhelming them with too many reduced forms too soon could backfire. A reasonable compromise might involve introducing a small, carefully chosen set of reductions once learners reach an intermediate level, gradually expanding their exposure to natural context and pace as their listening skills improve. Ultimately, the goal should be to sound genuinely fluent in real conversations, not simply fluent in a classroom simulation that rarely resembles how people actually speak." }
      ],
      speaking: [
        { phrase: "I'm gonna call you later.", tip: "'Gonna' é uma pronúncia natural, não um erro — mas evite escrever assim em textos formais." },
        { phrase: "Do you wanna go out tonight?", tip: "'Wanna' junta 'want' e 'to' em um único som." },
        { phrase: "I gotta finish this first.", tip: "'Gotta' vem de 'got to', usado como 'tenho que'." },
        { phrase: "Whaddaya think?", tip: "Essa é uma forma extremamente reduzida de 'What do you think?' — comum apenas na fala muito informal." },
        { phrase: "Lemme know when you're free.", tip: "'Lemme' é a redução de 'let me'." },
        { phrase: "Compared to what we learn in textbooks, real native speech is much faster and full of reductions like 'gonna' and 'wanna', which can make everyday conversations far harder to follow at first.", tip: "Compare o inglês que você aprende em sala de aula com o inglês real falado por nativos. Fale por pelo menos 20-30 segundos, mencionando ao menos duas diferenças." }
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
        { q: "What does 'gonna' come from?", options: ["Got to", "Going to", "Want to", "Give to"], answer: 1, explanation: "'Gonna' é a redução informal falada de 'going to', usada para expressar planos ou intenções futuras." },
        { q: "What does 'wanna' come from?", options: ["Want to", "Was not", "Will not", "Want a"], answer: 0, explanation: "'Wanna' é a contração falada de 'want to', comum na fala rápida e informal, mas evitada na escrita formal." },
        { type: "tf", q: "Reduced forms like 'gonna' and 'wanna' should be used in formal academic writing.", answer: false, explanation: "Formas reduzidas são apropriadas para a fala informal, não para a escrita formal/acadêmica." },
        { q: "What does 'gotta' mean?", options: ["Got a", "Have to/Got to", "Going away", "Get out"], answer: 1, explanation: "'Gotta' é a forma reduzida de 'got to' ou 'have to', usada na fala informal para expressar obrigação." },
        { type: "short", q: "Complete: 'Lemme know' means 'Let ___ know'.", answer: ["me"], explanation: "'Lemme' é a redução falada de 'let me', muito comum em pedidos informais como 'lemme know'." },
        { q: "'Native speaker' means:", options: ["Alguém aprendendo um idioma", "Alguém que fala o idioma nativamente", "Um professor", "Um tradutor"], answer: 1, explanation: "'Native speaker' é a pessoa que aprendeu e fala um idioma desde a infância, como sua língua materna." },
        { type: "tf", q: "Understanding every single word is necessary to understand native speech.", answer: false, explanation: "É mais eficaz focar no significado geral e nas palavras com ênfase, não em cada palavra isoladamente." },
        { q: "'Slang' means:", options: ["Linguagem formal", "Gíria", "Gramática", "Pronúncia"], answer: 1, explanation: "'Slang' refere-se a uma linguagem informal e coloquial, geralmente usada por grupos específicos, diferente do inglês formal." },
        { q: "'Context' helps you:", options: ["Ignorar o significado", "Adivinhar palavras desconhecidas", "Falar mais rápido", "Escrever formalmente"], answer: 1, explanation: "O contexto fornece pistas que ajudam a inferir o significado de palavras desconhecidas, sem precisar traduzir cada uma isoladamente." },
        { type: "short", q: "Complete: 'I ___ finish this first.' (gotta)", answer: ["gotta"], explanation: "'Gotta' é a forma reduzida e informal de 'have got to'/'have to', usada para expressar uma obrigação imediata." },
        { q: "Choose the best strategy for understanding fast native speech.", options: ["Translate every word", "Focus on stressed words and context", "Give up listening", "Only read subtitles"], answer: 1, explanation: "A estratégia mais eficaz é focar nas palavras com ênfase e usar o contexto geral, em vez de tentar traduzir cada palavra isoladamente." },
        { type: "tf", q: "'Accent' refers to the way people from different regions pronounce words.", answer: true, explanation: "'Accent' descreve as variações de pronúncia associadas a uma região, país ou grupo social, sem alterar o vocabulário ou a gramática usados.", skill: "vocabulary", difficulty: "easy" },
        { q: "What does 'dunno' mean?", options: ["I know for sure", "I don't know", "I do know something", "I want to know"], answer: 1, explanation: "'Dunno' é a forma reduzida e falada de 'I don't know', muito comum em conversas informais e rápidas.", skill: "vocabulary", difficulty: "easy" },
        { q: "'Gimme' is the reduced form of:", options: ["Give me", "Get me", "Got me", "Go with me"], answer: 0, explanation: "'Gimme' vem da fusão falada de 'give me', usada de forma bastante informal em pedidos rápidos.", skill: "vocabulary", difficulty: "easy" },
        { q: "In 'Ordering Coffee, Fast and Casual', what does 'we gotcha covered' mean in context?", options: ["The barista is literally covering an object", "The barista is reassuring the customer that the request is handled", "The barista is refusing the customer's request", "The barista is confused about the order"], answer: 1, explanation: "'Gotcha covered' é uma forma informal de dizer 'não se preocupe, cuidamos disso', usada aqui para tranquilizar o cliente." , skill: "listening", difficulty: "medium" },
        { q: "'Get the gist' means:", options: ["Understand every single word perfectly", "Understand the general idea of something", "Ignore the conversation completely", "Memorize a text word for word"], answer: 1, explanation: "'Get the gist' significa captar a ideia geral de algo, sem necessariamente entender cada detalhe ou palavra." , skill: "vocabulary", difficulty: "medium" },
        { q: "According to 'Podcasts and the Path to Fluency', what happens to 'Did you eat yet?' in fast native speech?", options: ["It stays exactly the same as in writing", "It becomes something closer to 'Jeetyet?'", "It disappears completely from the sentence", "It becomes more formal and slower"], answer: 1, explanation: "O texto usa exatamente esse exemplo para ilustrar como a fala conectada pode reduzir uma frase inteira a um único bloco sonoro irreconhecível por escrito." , skill: "reading", difficulty: "medium" },
        { q: "What does the writer suggest about learners who rely only on transcripts to study listening?", options: ["They develop the fastest listening skills of everyone", "That approach rarely builds the intuitive processing speed real conversations demand", "They should never use transcripts under any circumstance", "They understand native speech immediately without practice"], answer: 1, explanation: "O texto afirma que decodificar cada sílaba com a transcrição raramente constrói a velocidade de processamento intuitiva exigida por conversas reais." , skill: "inference", difficulty: "hard" },
        { q: "'Indecipherable' means:", options: ["Muito claro e fácil de entender", "Impossível ou muito difícil de decifrar", "Rápido e direto ao ponto", "Formal e educado"], answer: 1, explanation: "'Indecipherable' descreve algo que não pode ser compreendido ou decodificado, como um som ou texto confuso demais." , skill: "vocabulary", difficulty: "medium" },
        { type: "tf", q: "Reduced forms like 'whatcha' and 'gonna' are appropriate to use in a formal written report.", answer: false, explanation: "Formas reduzidas pertencem à fala informal e não devem ser usadas em relatórios ou textos formais escritos." , skill: "register", difficulty: "easy" },
        { type: "short", q: "Complete: 'It's ___ hard to understand fast speech at first.' (meio, tipo)", answer: ["kinda"], explanation: "'Kinda' é a forma reduzida e falada de 'kind of', usada para suavizar uma afirmação, equivalente a 'meio' ou 'tipo' em português." , skill: "collocation", difficulty: "medium" },
        { q: "'Blur' in the context of connected speech describes:", options: ["Words becoming perfectly clear and separated", "Words merging together indistinctly", "Words being translated into another language", "Words being written down carefully"], answer: 1, explanation: "'Blur' descreve o efeito de palavras se misturando de forma indistinta na fala rápida, dificultando a separação de cada som." , skill: "vocabulary", difficulty: "hard" },
        { q: "In 'A Casual Chat (Fast Speech)', what is the speaker's main purpose?", options: ["To complain about a coworker", "To suggest getting food together and check the other person's availability", "To cancel weekend plans entirely", "To request a formal meeting"], answer: 1, explanation: "O falante sugere 'grab some food' e pergunta quando a outra pessoa está livre, mostrando que o objetivo é combinar um encontro casual." , skill: "listening", difficulty: "medium" },
        { q: "'Overwhelmed' describes someone who feels:", options: ["Completely bored and uninterested", "Emotionally or mentally flooded by something difficult", "Extremely confident and relaxed", "Indifferent to what is happening"], answer: 1, explanation: "'Overwhelmed' descreve a sensação de estar tomado ou sobrecarregado por algo difícil de processar, como o choque inicial ao ouvir fala nativa rápida." , skill: "vocabulary", difficulty: "easy" },
        { q: "Which sentence best paraphrases: 'The ear adapts far more readily than most learners expect'?", options: ["Learners' listening skills improve more easily than they think", "Learners never manage to improve their listening skills", "The physical shape of the ear changes over time", "Most learners already expect very fast improvement"], answer: 0, explanation: "A frase original afirma que o ouvido se adapta mais facilmente do que os aprendizes imaginam — ou seja, a habilidade de escuta melhora mais rápido do que se espera." , skill: "inference", difficulty: "hard" }
      ]
    },
    {
      id: "c1-m5",
      title: "Debate e Argumentação",
      subtitle: "Linguagem para debater, concordar, discordar e argumentar formalmente",
      objective: "Ao final, o aluno consegue estruturar argumentos e contra-argumentos de forma persuasiva e educada (I would argue that, I see your point but, while that may be true, I concede that), reconhecendo o ponto de vista oposto antes de defender sua posição com evidências.",
      prerequisites: ["c1-m4", "c1-m3"],
      masteryEvidence: "Evidenciado por pontuação de pelo menos 60% no quiz do módulo, revisão concluída das atividades de writing, tentativa registrada das atividades de speaking e conclusão das 9 sessões do módulo.",
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
        { id: "c1-m5-argue", word: "Argue", phonetic: "/ˈɑːrɡjuː/", translation: "Argumentar", example: "I would argue that this is unfair.", exampleTranslation: "Eu argumentaria que isto é injusto." },
        { id: "c1-m5-counter-argument", word: "Counter-argument", phonetic: "/ˈkaʊntər ˈɑːrɡjəmənt/", translation: "Contra-argumento", example: "Let me offer a counter-argument.", exampleTranslation: "Deixe-me oferecer um contra-argumento." },
        { id: "c1-m5-point-of-view", word: "Point of view", phonetic: "/pɔɪnt ʌv vjuː/", translation: "Ponto de vista", example: "I understand your point of view.", exampleTranslation: "Eu entendo seu ponto de vista." },
        { id: "c1-m5-concede", word: "Concede", phonetic: "/kənˈsiːd/", translation: "Conceder/Admitir", example: "I concede that you have a valid point.", exampleTranslation: "Eu concedo que você tem um ponto válido." },
        { id: "c1-m5-persuade", word: "Persuade", phonetic: "/pərˈsweɪd/", translation: "Persuadir", example: "Her speech persuaded the audience.", exampleTranslation: "O discurso dela persuadiu a audiência." },
        { id: "c1-m5-debatable", word: "Debatable", phonetic: "/dɪˈbeɪtəbəl/", translation: "Discutível", example: "That claim is highly debatable.", exampleTranslation: "Essa afirmação é altamente discutível." },
        { id: "c1-m5-bias", word: "Bias", phonetic: "/ˈbaɪəs/", translation: "Viés/Preconceito", example: "Every source has some bias.", exampleTranslation: "Toda fonte tem algum viés." },
        { id: "c1-m5-valid", word: "Valid", phonetic: "/ˈvælɪd/", translation: "Válido(a)", example: "That's a valid concern.", exampleTranslation: "Essa é uma preocupação válida." },
        { id: "c1-m5-rebuttal", word: "Rebuttal", phonetic: "/rɪˈbʌtəl/", translation: "Réplica/Refutação", example: "Her rebuttal was very convincing.", exampleTranslation: "A réplica dela foi muito convincente." },
        { id: "c1-m5-compromise", word: "Compromise", phonetic: "/ˈkɒmprəmaɪz/", translation: "Compromisso/Meio-termo", example: "We need to find a compromise.", exampleTranslation: "Precisamos encontrar um meio-termo." },
        { id: "c1-m5-proponent", word: "Proponent", phonetic: "/prəˈpoʊnənt/", translation: "Defensor, proponente de uma ideia", partOfSpeech: "substantivo", example: "Proponents argue that technology enhances engagement and prepares students for the modern workforce.", exampleTranslation: "Os defensores argumentam que a tecnologia aumenta o engajamento e prepara os alunos para o mercado de trabalho moderno.", antonyms: ["opponent", "critic"] },
        { id: "c1-m5-hinder", word: "Hinder", phonetic: "/ˈhɪndər/", translation: "Atrapalhar, dificultar", partOfSpeech: "verbo", example: "Critics counter that excessive screen time can hinder deep learning and social skills.", exampleTranslation: "Críticos contra-argumentam que o tempo excessivo de tela pode atrapalhar o aprendizado profundo e as habilidades sociais.", synonyms: ["hamper", "impede"] },
        { id: "c1-m5-all-or-nothing", word: "All-or-nothing", phonetic: "/ɔːl ɔːr ˈnʌθɪŋ/", translation: "Tudo ou nada", partOfSpeech: "adjetivo", example: "A balanced approach, rather than an all-or-nothing stance, may be the most effective compromise.", exampleTranslation: "Uma abordagem equilibrada, em vez de uma postura de tudo ou nada, pode ser o compromisso mais eficaz." },
        { id: "c1-m5-advocate", word: "Advocate", phonetic: "/ˈædvəkeɪt/ (verbo), /ˈædvəkət/ (substantivo)", translation: "Defender/defensor(a)", partOfSpeech: "substantivo/verbo", example: "Advocates of free public universities argue that education is a public good.", exampleTranslation: "Defensores das universidades públicas gratuitas argumentam que a educação é um bem público.", commonError: "A pronúncia muda entre substantivo (/ˈædvəkət/) e verbo (/ˈædvəkeɪt/), embora a grafia seja idêntica." },
        { id: "c1-m5-public-good", word: "Public good", phonetic: "/ˈpʌblɪk ɡʊd/", translation: "Bem público", partOfSpeech: "collocation", example: "Advocates argue that education is a public good, comparable to healthcare.", exampleTranslation: "Defensores argumentam que a educação é um bem público, comparável à saúde." },
        { id: "c1-m5-deter", word: "Deter", phonetic: "/dɪˈtɜːr/", translation: "Desencorajar, dissuadir", partOfSpeech: "verbo", example: "Low-income students are often deterred from applying because of tuition costs.", exampleTranslation: "Estudantes de baixa renda costumam ser desencorajados a se candidatar por causa dos custos da mensalidade.", wordFamily: ["deterrent", "deterrence"] },
        { id: "c1-m5-premise", word: "Premise", phonetic: "/ˈprɛmɪs/", translation: "Premissa", partOfSpeech: "substantivo", example: "Both positions rest on genuinely defensible premises.", exampleTranslation: "Ambas as posições se apoiam em premissas genuinamente defensáveis.", commonError: "'Premise' (premissa de um argumento) não deve ser confundido com 'premises' no sentido de 'instalações/local', que é sempre plural." },
        { id: "c1-m5-social-contract", word: "Social contract", phonetic: "/ˈsoʊʃəl ˈkɒntrækt/", translation: "Contrato social", partOfSpeech: "collocation", example: "The answer may depend as much on a country's broader social contract as on economics.", exampleTranslation: "A resposta pode depender tanto do contrato social mais amplo de um país quanto da economia." },
        { id: "c1-m5-engagement", word: "Engagement", phonetic: "/ɪnˈɡeɪdʒmənt/", translation: "Engajamento", partOfSpeech: "substantivo", example: "Platforms profit enormously from user engagement.", exampleTranslation: "As plataformas lucram enormemente com o engajamento dos usuários.", wordFamily: ["engage", "engaging"] },
        { id: "c1-m5-self-regulation", word: "Self-regulation", phonetic: "/sɛlf ˌrɛɡjəˈleɪʃən/", translation: "Autorregulação", partOfSpeech: "substantivo", example: "Self-regulation alone has clearly failed so far.", exampleTranslation: "A autorregulação sozinha claramente falhou até agora." },
        { id: "c1-m5-oversight", word: "Oversight", phonetic: "/ˈoʊvərsaɪt/", translation: "Supervisão, fiscalização", partOfSpeech: "substantivo", example: "Independent oversight boards could have real enforcement power with clear limits.", exampleTranslation: "Conselhos de supervisão independentes poderiam ter poder real de aplicação com limites claros.", commonError: "'Oversight' tem dois sentidos quase opostos: 'supervisão cuidadosa' e, em outro contexto, 'descuido por falta de atenção' — o contexto define qual." },
        { id: "c1-m5-middle-ground", word: "Middle ground", phonetic: "/ˈmɪdəl ɡraʊnd/", translation: "Meio-termo, terreno comum", partOfSpeech: "substantivo", example: "A reasonable middle ground, it seems, would satisfy both sides.", exampleTranslation: "Um meio-termo razoável, ao que parece, satisfaria ambos os lados.", synonyms: ["compromise"] },
        { id: "c1-m5-backfire", word: "Backfire", phonetic: "/ˈbækfaɪər/", translation: "Sair pela culatra", partOfSpeech: "verbo", example: "Heavy-handed regulation could backfire and push companies to relocate.", exampleTranslation: "Uma regulação excessivamente rígida poderia sair pela culatra e levar empresas a se mudar." },
        { id: "c1-m5-heavy-handed", word: "Heavy-handed", phonetic: "/ˈhɛvi ˈhændɪd/", translation: "Excessivamente rígido, autoritário", partOfSpeech: "adjetivo", example: "Some worry that heavy-handed regulation could backfire.", exampleTranslation: "Alguns temem que uma regulação excessivamente rígida possa sair pela culatra." },
        { id: "c1-m5-devils-advocate", word: "Play devil's advocate", phonetic: "/pleɪ ˈdɛvəlz ˈædvəkət/", translation: "Defender um ponto de vista contrário só para provocar o debate", partOfSpeech: "expressão idiomática", example: "Let me play devil's advocate for a moment: what if the opposite were true?", exampleTranslation: "Deixa eu bancar o advogado do diabo por um momento: e se o contrário fosse verdade?" }
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
        },
        {
          title: "A Radio Debate Segment",
          accent: "australian",
          transcript: "Host: Tonight we're discussing whether social media companies should be held legally responsible for harmful content. Guest: I would argue that platforms profit enormously from user engagement, so they bear at least some responsibility for what spreads on their sites. Host: I see your point, but wouldn't that turn private companies into censors of public speech? Guest: That's a fair concern, and I concede that heavy-handed regulation could backfire. Nevertheless, self-regulation alone has clearly failed so far. Host: So what's your proposed compromise? Guest: Independent oversight boards, perhaps, with real enforcement power but clear limits on what they can remove. Host: A reasonable middle ground, it seems. We'll continue this discussion after the break.",
          questions: [
            { q: "What is the debate mainly about?", options: ["Advertising costs", "Whether social media companies should be legally responsible for harmful content", "Internet speed", "Music streaming"], answer: 1 },
            { q: "What compromise does the guest propose?", options: ["Banning social media entirely", "Independent oversight boards with limited power", "No regulation at all", "Government ownership of platforms"], answer: 1 },
            { q: "What does the host imply by calling the proposal 'a reasonable middle ground'?", options: ["The host completely disagrees with the guest", "The host finds the proposal balanced and acceptable", "The host thinks the debate is pointless", "The host wants stricter censorship"], answer: 1 }
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
        },
        {
          title: "Should Universities Charge Tuition?",
          text: "Few issues in higher education provoke as much disagreement as the question of tuition. Advocates of free public universities argue that education is a public good, comparable to healthcare or basic infrastructure, and that charging tuition simply reproduces existing inequalities across generations. One could counter, however, that entirely free tuition places enormous strain on public budgets, potentially at the expense of primary and secondary education, which arguably need funding just as urgently. Proponents of tuition-based systems, meanwhile, contend that some level of cost-sharing encourages students to take their studies more seriously and gives universities the financial independence to invest in research. Critics respond that this argument, however plausible in theory, tends to ignore the disproportionate burden placed on low-income students, who are often deterred from applying altogether. While both positions rest on genuinely defensible premises, neither fully accounts for the wide variation among countries that have experimented with different models, some successfully, others less so. Rather than settling the debate outright, this variation suggests that the answer may depend as much on a country's broader social contract as on the economics of higher education itself.",
          questions: [
            { q: "What do advocates of free tuition compare education to?", options: ["A luxury good", "A public good like healthcare", "A private investment", "A form of entertainment"], answer: 1 },
            { q: "What do critics say about cost-sharing in tuition-based systems?", options: ["It helps low-income students the most", "It disproportionately burdens low-income students", "It has no effect on students", "It only affects wealthy students"], answer: 1 },
            { q: "What can be inferred about the writer's own position on tuition?", options: ["They strongly favor free tuition for everyone", "They present a balanced view without committing to one side", "They believe tuition should be extremely high", "They think the debate has already been settled"], answer: 1 },
            { q: "What does the variation among countries suggest, according to the writer?", options: ["That there is one universal correct answer", "That the answer may depend on a country's broader social contract", "That tuition should always be free", "That research proves tuition-based systems are best"], answer: 1 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva um parágrafo argumentando sua opinião sobre um tema atual, usando pelo menos 2 estruturas de debate formal.", minWords: 40, modelAnswer: "I would argue that technology has transformed education for the better. While that may be true for access to information, one could counter that it also creates distractions. Nevertheless, I concede that a balanced approach is likely the best solution." },
        { prompt: "Escreva um contra-argumento educado para a seguinte opinião: 'Trabalho remoto é sempre melhor que trabalho presencial.'", minWords: 25, modelAnswer: "I see your point, but I would counter that remote work isn't ideal for every role. While it offers flexibility, some jobs require in-person collaboration to function effectively." },
        { prompt: "Escreva um texto argumentativo (150-175 palavras) defendendo um lado do debate 'A tecnologia melhora ou piora as relações humanas?'. Reconheça o ponto de vista oposto antes de defender sua posição, usando pelo menos duas estruturas de debate formal desta lição (I would argue that, while that may be true, I concede that).", minWords: 150, minSentences: 6, requiredStructures: ["I would argue that", "while that may be true", "I concede that"], targetWords: ["persuade", "valid", "compromise"], modelAnswer: "I would argue that technology has, on balance, strengthened human relationships rather than weakened them, despite widespread concern to the contrary. Critics often point out that constant screen use replaces face-to-face conversation, and while that may be true in some households, it overlooks how video calls and messaging now sustain relationships across distances that would once have ended in silence. I concede that social media can encourage shallow, performative interactions rather than genuine connection, and this is a valid criticism that deserves serious attention. However, blaming the technology itself misses a more important point: the same tools that enable superficial scrolling also allow immigrants to speak daily with family abroad, or old friends to reconnect after decades apart. Rather than framing this as a simple contest between technology and authentic connection, I think what should persuade a fair-minded skeptic is the idea that technology is a neutral instrument whose effect depends entirely on how deliberately it is used. A sensible compromise, then, involves teaching people to use these tools intentionally, rather than either rejecting or blindly embracing them." }
      ],
      speaking: [
        { phrase: "I would argue that this approach is better.", tip: "Soa mais formal e sofisticado do que simplesmente 'I think'." },
        { phrase: "I see your point, but I would counter that...", tip: "Essa estrutura reconhece o outro lado antes de discordar — muito educada." },
        { phrase: "While that may be true, there's another factor to consider.", tip: "'While' aqui significa 'embora', não 'enquanto' (tempo)." },
        { phrase: "I concede that this has some merit.", tip: "'Concede' tem acento na segunda sílaba: con-CEDE." },
        { phrase: "We need to find a compromise.", tip: "'Compromise' tem acento na primeira sílaba: COM-pro-mise." },
        { phrase: "I would argue that remote work benefits most employees, and while that may be true for some roles, I still believe companies should offer it as the default option.", tip: "Defenda uma posição sobre um tema controverso à sua escolha (ex: trabalho remoto, redes sociais, uso de IA). Reconheça o lado oposto antes de argumentar. Fale por pelo menos 25-30 segundos." }
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
        { q: "Choose a sophisticated way to introduce an opinion.", options: ["I think that...", "I would argue that...", "I guess that...", "Maybe that..."], answer: 1, explanation: "'I would argue that...' é uma forma mais sofisticada e formal de apresentar uma opinião do que o simples 'I think', comum em debates e redações acadêmicas." },
        { q: "Choose the polite way to disagree in a formal debate.", options: ["You're wrong.", "I see your point, but I would counter that...", "No way.", "That's stupid."], answer: 1, explanation: "'I see your point, but I would counter that...' reconhece o argumento do outro antes de discordar, uma estratégia educada típica de debates formais." },
        { type: "tf", q: "'Concede' means to fully agree with everything the other person says.", answer: false, explanation: "'Concede' significa admitir que um ponto específico é válido, não concordar com tudo." },
        { q: "'Persuade' means:", options: ["Convencer", "Discordar", "Ignorar", "Confundir"], answer: 0, explanation: "'Persuade' significa convencer alguém a acreditar em algo ou a agir de determinada forma, geralmente por meio de argumentos ou apelos emocionais." },
        { type: "short", q: "Complete: 'We need to find a ___.' (meio-termo)", answer: ["compromise"], explanation: "'Compromise' é a solução intermediária que satisfaz parcialmente as partes envolvidas em um desacordo, equivalente a 'meio-termo'." },
        { q: "'Bias' means:", options: ["Fato", "Viés/Preconceito", "Evidência", "Conclusão"], answer: 1, explanation: "'Bias' refere-se a uma inclinação ou preconceito que afeta a imparcialidade de uma opinião, argumento ou fonte de informação." },
        { type: "tf", q: "'While that may be true' is used to introduce a counter-argument politely.", answer: true, explanation: "Essa estrutura reconhece parcialmente o ponto do interlocutor antes de introduzir um contra-argumento, suavizando o tom do desacordo." },
        { q: "Choose the correct sentence.", options: ["I would argue this is necessary that.", "I would argue that this is necessary.", "I argue would that this is necessary.", "That I would argue is necessary."], answer: 1, explanation: "A ordem correta é 'I would argue that this is necessary', com 'that' introduzindo a oração subordinada logo após o verbo principal." },
        { q: "'Rebuttal' means:", options: ["Concordância", "Réplica/Refutação", "Pergunta", "Resumo"], answer: 1, explanation: "'Rebuttal' é a resposta que refuta ou contesta um argumento apresentado anteriormente, geralmente com evidências ou contra-argumentos." },
        { type: "short", q: "Complete: 'I ___ that you have a valid point.' (concedo)", answer: ["concede"], explanation: "'Concede' significa admitir que um ponto específico do outro é válido, mesmo mantendo uma posição diferente no geral." },
        { q: "Choose the correct sentence.", options: ["I see you point but disagree.", "I see your point, but I disagree.", "I see your point but I am disagree.", "I see your point, but disagreeing."], answer: 1, explanation: "A estrutura correta usa 'but I disagree', com sujeito e verbo completos; as demais opções têm erros gramaticais, como sujeito ausente ou gerúndio incorreto." },
        { type: "tf", q: "Good arguments should be supported by evidence and examples, not just opinion.", answer: true, explanation: "Argumentos convincentes se apoiam em evidências, dados e exemplos concretos, e não apenas em opiniões pessoais sem embasamento.", skill: "writing", difficulty: "easy" },
        { q: "'Proponent' means:", options: ["Alguém que se opõe a uma ideia", "Alguém que defende ou apoia uma ideia", "Um juiz completamente imparcial", "Uma testemunha em um julgamento"], answer: 1, explanation: "'Proponent' é a pessoa que defende ou propõe uma ideia, argumento ou política — o oposto de 'opponent' ou 'critic'." , skill: "vocabulary", difficulty: "easy" },
        { q: "'Hinder' means:", options: ["Ajudar algo a progredir", "Atrapalhar, dificultar", "Ignorar completamente um assunto", "Aumentar rapidamente"], answer: 1, explanation: "'Hinder' significa dificultar ou atrapalhar o progresso de algo, como no texto sobre tecnologia e aprendizado." , skill: "vocabulary", difficulty: "medium" },
        { q: "According to 'Should Universities Charge Tuition?', what is one criticism of cost-sharing tuition systems?", options: ["They have absolutely no effect on any students", "They disproportionately burden low-income students, who may be deterred from applying", "They only ever affect wealthy students", "They make university education completely free"], answer: 1, explanation: "O texto afirma que críticos apontam que o cost-sharing sobrecarrega desproporcionalmente estudantes de baixa renda, que podem ser desencorajados a se candidatar." , skill: "inference", difficulty: "medium" },
        { q: "In the radio debate about social media regulation, why does the host push back on the guest's argument?", options: ["The host agrees completely and raises no concerns", "The host worries it could turn private companies into censors of public speech", "The host doesn't understand what the guest is saying", "The host wants stricter laws with absolutely no exceptions"], answer: 1, explanation: "O apresentador questiona se responsabilizar as plataformas legalmente as transformaria em censoras da fala pública, um contraponto relevante ao argumento do convidado." , skill: "listening", difficulty: "medium" },
        { q: "'Public good' refers to something:", options: ["Owned only by the government for profit", "Available and beneficial to society as a whole, like healthcare or basic infrastructure", "Illegal for private companies to provide", "Useful only to a small group of wealthy people"], answer: 1, explanation: "'Public good' é um bem ou serviço considerado benéfico para toda a sociedade, como saúde, educação ou infraestrutura básica." , skill: "vocabulary", difficulty: "easy" },
        { type: "tf", q: "Expressions like 'I would argue that' and 'one could counter that' are more appropriate in a formal debate than 'you're totally wrong'.", answer: true, explanation: "Expressões mais sofisticadas e educadas são preferidas em debates formais, ao contrário de afirmações diretas e agressivas como 'you're totally wrong'." , skill: "register", difficulty: "medium" },
        { q: "What does 'premise' mean in the sentence 'both positions rest on genuinely defensible premises'?", options: ["A physical building or piece of property", "A basic assumption that an argument is built on", "A final conclusion reached at the end", "A type of legal contract between two parties"], answer: 1, explanation: "'Premise' é a suposição básica sobre a qual um argumento se apoia — diferente de 'premises' (no plural), que significa instalações ou propriedade." , skill: "vocabulary", difficulty: "hard" },
        { type: "short", q: "Complete: 'Independent oversight boards could have real enforcement ___.' (poder)", answer: ["power"], explanation: "'Enforcement power' é a collocation usada para descrever a capacidade real de fazer cumprir regras ou decisões." , skill: "collocation", difficulty: "medium" },
        { q: "Choose the sentence that politely concedes a point before disagreeing.", options: ["That's completely wrong and makes no sense at all.", "I concede that this has some merit, but I still believe the risks outweigh the benefits.", "I don't care what you think about this.", "You clearly haven't thought this through at all."], answer: 1, explanation: "Essa estrutura reconhece parcialmente o argumento do outro ('I concede that...') antes de apresentar uma discordância, uma estratégia educada e sofisticada de debate." , skill: "grammar", difficulty: "hard" },
        { q: "'Backfire' means:", options: ["Funcionar exatamente como planejado", "Sair pela culatra, ter o efeito oposto ao esperado", "Pegar fogo no sentido literal", "Ser aprovado sem qualquer discussão"], answer: 1, explanation: "'Backfire' descreve uma ação que produz um resultado oposto ao pretendido, geralmente pior do que a situação original." , skill: "vocabulary", difficulty: "easy" },
        { q: "What can be inferred about the writer's own position in 'Should Universities Charge Tuition?'?", options: ["They strongly favor completely free tuition everywhere, without reservation", "They present both sides fairly without fully committing to either one", "They believe tuition should always be extremely high", "They think the debate has already been conclusively settled"], answer: 1, explanation: "O texto pondera argumentos de ambos os lados e conclui que a resposta varia conforme o país, sem se posicionar definitivamente por um lado." , skill: "inference", difficulty: "hard" },
        { q: "'Middle ground' is closest in meaning to:", options: ["An extreme, uncompromising position", "A compromise or solution both sides can accept", "A complete victory for one side only", "A total rejection of the entire debate"], answer: 1, explanation: "'Middle ground' descreve uma posição intermediária que busca satisfazer, ao menos parcialmente, ambos os lados de um debate." , skill: "vocabulary", difficulty: "medium" },
        { q: "'Play devil's advocate' means to:", options: ["Genuinely support a harmful or evil cause", "Argue an opposing view on purpose, often to test an argument's strength", "Refuse to participate in any debate", "Always agree with whatever the majority says"], answer: 1, explanation: "'Play devil's advocate' significa defender deliberadamente o lado oposto de um argumento, mesmo sem realmente acreditar nele, para testar sua solidez." , skill: "vocabulary", difficulty: "medium" }
      ]
    },
    {
      id: "c1-m6",
      title: "Collocations Avançadas",
      subtitle: "Combinações naturais de palavras que soam autênticas",
      objective: "Ao final, o aluno consegue usar collocations avançadas com make/do/take/have e combinações adjetivo-advérbio (deeply concerned, highly unlikely, bitterly disappointed) para soar mais natural e idiomático tanto na fala quanto na escrita formal.",
      prerequisites: ["c1-m5"],
      masteryEvidence: "Evidenciado por pontuação de pelo menos 60% no quiz do módulo, revisão concluída das atividades de writing, tentativa registrada das atividades de speaking e conclusão das 9 sessões do módulo.",
      lesson: {
        intro: "Collocations são combinações de palavras que 'soam certas' juntas para falantes nativos, mesmo quando não seguem uma regra lógica clara. Dominar collocations é essencial para soar natural.",
        sections: [
          {
            heading: "O Que São Collocations?",
            text: "Certas palavras naturalmente 'combinam' com outras — trocar uma palavra por um sinônimo pode soar estranho, mesmo estando gramaticalmente correto.",
            examples: [
              { en: "make a decision (não 'do a decision')", pt: "tomar uma decisão" },
              { en: "heavy rain (não 'strong rain')", pt: "chuva forte" }
            ]
          },
          {
            heading: "Collocations com Verbos",
            text: "Verbos como 'make', 'do', 'take' e 'have' combinam com substantivos específicos.",
            examples: [
              { en: "make an effort / make a mistake", pt: "fazer um esforço / cometer um erro" },
              { en: "take a break / take responsibility", pt: "fazer uma pausa / assumir responsabilidade" }
            ]
          },
          {
            heading: "Collocations com Adjetivos",
            text: "Adjetivos também têm parceiros naturais que intensificam o significado.",
            examples: [
              { en: "deeply concerned / bitterly disappointed", pt: "profundamente preocupado / amargamente desapontado" },
              { en: "strictly forbidden / highly unlikely", pt: "estritamente proibido / altamente improvável" }
            ]
          }
        ]
      },
      vocabulary: [
        { id: "c1-m6-make-an-effort", word: "Make an effort", phonetic: "/meɪk ən ˈɛfərt/", translation: "Fazer um esforço", example: "She made a real effort to improve.", exampleTranslation: "Ela fez um esforço real para melhorar." },
        { id: "c1-m6-take-responsibility", word: "Take responsibility", phonetic: "/teɪk rɪˌspɒnsəˈbɪləti/", translation: "Assumir responsabilidade", example: "He took responsibility for the mistake.", exampleTranslation: "Ele assumiu a responsabilidade pelo erro." },
        { id: "c1-m6-heavy-rain", word: "Heavy rain", phonetic: "/ˈhɛvi reɪn/", translation: "Chuva forte", example: "There was heavy rain last night.", exampleTranslation: "Houve chuva forte ontem à noite." },
        { id: "c1-m6-deeply-concerned", word: "Deeply concerned", phonetic: "/ˈdiːpli kənˈsɜːrnd/", translation: "Profundamente preocupado", example: "We are deeply concerned about the results.", exampleTranslation: "Estamos profundamente preocupados com os resultados." },
        { id: "c1-m6-strictly-forbidden", word: "Strictly forbidden", phonetic: "/ˈstrɪktli fərˈbɪdən/", translation: "Estritamente proibido", example: "Smoking is strictly forbidden here.", exampleTranslation: "Fumar é estritamente proibido aqui." },
        { id: "c1-m6-highly-unlikely", word: "Highly unlikely", phonetic: "/ˈhaɪli ənˈlaɪkli/", translation: "Altamente improvável", example: "It's highly unlikely to happen.", exampleTranslation: "É altamente improvável que aconteça." },
        { id: "c1-m6-reach-an-agreement", word: "Reach an agreement", phonetic: "/riːtʃ ən əˈɡriːmənt/", translation: "Chegar a um acordo", example: "They finally reached an agreement.", exampleTranslation: "Eles finalmente chegaram a um acordo." },
        { id: "c1-m6-raise-awareness", word: "Raise awareness", phonetic: "/reɪz əˈwɛrnəs/", translation: "Aumentar a conscientização", example: "The campaign aims to raise awareness.", exampleTranslation: "A campanha visa aumentar a conscientização." },
        { id: "c1-m6-bitterly-disappointed", word: "Bitterly disappointed", phonetic: "/ˈbɪtərli ˌdɪsəˈpɔɪntɪd/", translation: "Amargamente desapontado", example: "I was bitterly disappointed by the result.", exampleTranslation: "Fiquei amargamente desapontado com o resultado." },
        { id: "c1-m6-pay-attention", word: "Pay attention", phonetic: "/peɪ əˈtɛnʃən/", translation: "Prestar atenção", example: "Please pay attention to the details.", exampleTranslation: "Por favor, preste atenção aos detalhes." },
        { id: "c1-m6-make-it-clear", word: "Make it clear", phonetic: "/meɪk ɪt klɪr/", translation: "Deixar claro", partOfSpeech: "collocation", example: "She made it clear that the decision had not been taken lightly.", exampleTranslation: "Ela deixou claro que a decisão não havia sido tomada de forma leviana." },
        { id: "c1-m6-not-taken-lightly", word: "Not taken lightly", phonetic: "/nɒt ˈteɪkən ˈlaɪtli/", translation: "Não ser levado na leviandade, ser levado a sério", partOfSpeech: "collocation", example: "This decision was not taken lightly by the board.", exampleTranslation: "Essa decisão não foi tomada de forma leviana pela diretoria." },
        { id: "c1-m6-take-on-responsibility", word: "Take on responsibility", phonetic: "/teɪk ɒn rɪˌspɒnsəˈbɪləti/", translation: "Assumir (novas) responsabilidades", partOfSpeech: "collocation", example: "Several employees had taken on extra responsibilities over the past year.", exampleTranslation: "Vários funcionários haviam assumido responsabilidades extras ao longo do ano.", commonError: "Diferente de 'take responsibility for' (assumir a culpa por algo que já aconteceu), 'take on responsibility' significa aceitar novas tarefas ou encargos." },
        { id: "c1-m6-make-progress", word: "Make progress", phonetic: "/meɪk ˈprɒɡrɛs/", translation: "Progredir, fazer progresso", partOfSpeech: "collocation", example: "You've made real progress this quarter.", exampleTranslation: "Você fez um progresso real neste trimestre." },
        { id: "c1-m6-take-feedback-seriously", word: "Take feedback seriously", phonetic: "/teɪk ˈfiːdbæk ˈsɪriəsli/", translation: "Levar o feedback a sério", partOfSpeech: "collocation", example: "You've clearly taken that feedback seriously.", exampleTranslation: "Você claramente levou aquele feedback a sério." },
        { id: "c1-m6-take-courage", word: "Take courage", phonetic: "/teɪk ˈkʌrɪdʒ/", translation: "Exigir coragem", partOfSpeech: "collocation", example: "Having that difficult conversation took real courage.", exampleTranslation: "Ter aquela conversa difícil exigiu coragem de verdade." },
        { id: "c1-m6-closed-door", word: "Closed-door", phonetic: "/kloʊzd dɔːr/", translation: "A portas fechadas", partOfSpeech: "adjetivo", example: "The constant closed-door meetings made everyone suspicious.", exampleTranslation: "As constantes reuniões a portas fechadas deixaram todo mundo desconfiado." },
        { id: "c1-m6-go-unnoticed", word: "Go unnoticed", phonetic: "/ɡoʊ ʌnˈnoʊtɪst/", translation: "Passar despercebido", partOfSpeech: "collocation", example: "The CFO's grim expression had not gone unnoticed.", exampleTranslation: "A expressão sombria do diretor financeiro não havia passado despercebida." },
        { id: "c1-m6-uncharacteristically", word: "Uncharacteristically", phonetic: "/ʌnˌkærɪktəˈrɪstɪkli/", translation: "De forma incomum para a pessoa/situação", partOfSpeech: "advérbio", example: "The CFO's uncharacteristically grim expression worried the staff.", exampleTranslation: "A expressão sombria e incomum do diretor financeiro preocupou a equipe.", wordFamily: ["characteristic", "characteristically"] },
        { id: "c1-m6-grim", word: "Grim", phonetic: "/ɡrɪm/", translation: "Sombrio, carregado", partOfSpeech: "adjetivo", example: "Her grim expression suggested the news wasn't good.", exampleTranslation: "Sua expressão sombria sugeria que a notícia não era boa." },
        { id: "c1-m6-redundancy", word: "Redundancy", phonetic: "/rɪˈdʌndənsi/", translation: "Demissão por corte de vaga (inglês britânico)", partOfSpeech: "substantivo", example: "Employees had taken on extra work hoping for promotion rather than redundancy.", exampleTranslation: "Funcionários assumiram trabalho extra na esperança de uma promoção, e não de uma demissão.", commonError: "No inglês britânico, 'redundancy' significa demissão por extinção do cargo — sentido bem diferente da 'redundância' (repetição) em português." },
        { id: "c1-m6-goodwill", word: "Goodwill", phonetic: "/ˈɡʊdwɪl/", translation: "Boa vontade", partOfSpeech: "substantivo", example: "Whatever goodwill the announcement preserved came from how it was delivered.", exampleTranslation: "A boa vontade que o anúncio preservou veio da forma como ele foi comunicado." },
        { id: "c1-m6-see-coming", word: "See something coming", phonetic: "/siː ˈsʌmθɪŋ ˈkʌmɪŋ/", translation: "Prever algo, ver algo se aproximando", partOfSpeech: "collocation", example: "She offered me a promotion I had never seen coming.", exampleTranslation: "Ela me ofereceu uma promoção que eu nunca havia previsto." },
        { id: "c1-m6-pragmatically", word: "Pragmatically", phonetic: "/præɡˈmætɪkli/", translation: "De forma pragmática", partOfSpeech: "advérbio", example: "Others, more pragmatically, had quietly suspected something was wrong for weeks.", exampleTranslation: "Outros, de forma mais pragmática, já suspeitavam discretamente que algo estava errado havia semanas.", wordFamily: ["pragmatic", "pragmatism"] },
        { id: "c1-m6-all-hands-meeting", word: "All-hands meeting", phonetic: "/ɔːl hændz ˈmiːtɪŋ/", translation: "Reunião geral com todos os funcionários", partOfSpeech: "collocation", example: "When the CEO finally called an all-hands meeting, most employees assumed the worst.", exampleTranslation: "Quando a CEO finalmente convocou uma reunião geral, a maioria dos funcionários temeu o pior." }
      ],
      grammar: {
        title: "Collocations com Make, Do, Take e Have",
        explanation: "Estes quatro verbos formam collocations com substantivos específicos que não seguem uma lógica de tradução direta.",
        table: {
          headers: ["Verbo", "Collocations comuns"],
          rows: [
            ["Make", "make a decision, make an effort, make a mistake, make progress"],
            ["Do", "do homework, do business, do a favor, do research"],
            ["Take", "take responsibility, take a break, take a risk, take advantage"],
            ["Have", "have a conversation, have an experience, have a look, have fun"]
          ]
        },
        correct: ["She made a difficult decision.", "He did his homework.", "They took a big risk.", "We had a great conversation."],
        incorrect: ["She did a difficult decision.", "He made his homework.", "They did a big risk.", "We made a great conversation."]
      },
      listening: [
        {
          title: "A Concerned Conversation",
          accent: "american",
          transcript: "A: I'm deeply concerned about the project deadline. B: I understand. Let's make an effort to finish early. A: Agreed. We should also take responsibility for the delays so far. B: True. If we pay attention to details now, it's highly unlikely we'll have more problems.",
          questions: [
            { q: "How does speaker A feel about the deadline?", options: ["Excited", "Deeply concerned", "Indifferent", "Confident"], answer: 1 },
            { q: "What do they agree to do?", options: ["Give up", "Make an effort to finish early", "Ignore the problem", "Blame someone else"], answer: 1 },
            { q: "What does B say is highly unlikely?", options: ["Success", "More problems if they pay attention", "Finishing on time", "Nothing"], answer: 1 }
          ]
        },
        {
          title: "A Job Performance Review",
          accent: "british",
          transcript: "Manager: Thanks for coming in. Overall, you've made real progress this quarter, and I want to say I've paid close attention to your reports. Employee: Thank you, I've made a real effort to take more responsibility on the new project. Manager: It shows. Honestly, I was deeply concerned in January about the missed deadlines, but you've clearly taken that feedback seriously. Employee: I appreciate you saying that. I did have a difficult conversation with the team about it. Manager: That took courage, and it's highly unlikely we'll see the same issues again if this continues. Employee: I'll keep making an effort. Manager: Good. Let's reach an agreement on your goals for next quarter before you go.",
          questions: [
            { q: "What is happening in this conversation?", options: ["A job interview", "A performance review", "A resignation meeting", "A sales pitch"], answer: 1 },
            { q: "What was the manager deeply concerned about in January?", options: ["Missed deadlines", "The employee's attitude", "Budget cuts", "A resignation"], answer: 0 },
            { q: "What does the manager imply about the employee's future at the company?", options: ["The manager expects them to be fired soon", "The manager seems optimistic about their continued improvement", "The manager is indifferent to their performance", "The manager plans to demote them"], answer: 1 }
          ]
        }
      ],
      reading: [
        {
          title: "The Power of Natural Word Combinations",
          text: "Native speakers often use word combinations, or collocations, without thinking twice. A learner might say 'do a mistake,' but a native speaker would say 'make a mistake.' Similarly, we say 'heavy rain,' not 'strong rain,' and 'deeply concerned,' not 'strongly concerned.' Learning collocations as whole chunks, rather than individual words, is one of the most effective ways to sound more natural and fluent.",
          questions: [
            { q: "What might a learner incorrectly say?", options: ["Make a mistake", "Do a mistake", "Take a mistake", "Have a mistake"], answer: 1 },
            { q: "What is the correct collocation for rain?", options: ["Strong rain", "Heavy rain", "Big rain", "Hard rain"], answer: 1 },
            { q: "What is one of the most effective ways to sound natural, according to the text?", options: ["Learning individual words only", "Learning collocations as whole chunks", "Avoiding new words", "Speaking slowly"], answer: 1 }
          ]
        },
        {
          title: "A Difficult Announcement",
          text: "When the CEO finally called an all-hands meeting, most employees assumed the company had reached an agreement with a new investor. Instead, she announced that the firm would be making significant cuts across several departments. She made it clear that this decision had not been taken lightly, and that leadership had made every effort to avoid layoffs before concluding they had no other option. Several employees were bitterly disappointed, having taken on extra responsibilities over the past year in the hope of promotion rather than redundancy. Others, more pragmatically, had quietly suspected something was wrong for weeks — the constant closed-door meetings and the CFO's uncharacteristically grim expression had not gone unnoticed. In her closing remarks, the CEO promised to raise awareness internally about support resources available to affected staff, and urged remaining employees to pay attention to updates over the following days. Whatever goodwill the announcement preserved seemed to rest less on its content than on the evident discomfort with which it was delivered — a discomfort that, oddly, made the news slightly easier to accept.",
          questions: [
            { q: "What did most employees initially assume the meeting was about?", options: ["Layoffs", "A new investor agreement", "A holiday party", "A merger with a competitor"], answer: 1 },
            { q: "What does the text say leadership did before deciding on cuts?", options: ["Made no effort at all", "Made every effort to avoid layoffs", "Immediately fired everyone", "Ignored the problem"], answer: 1 },
            { q: "Why were some employees bitterly disappointed?", options: ["They expected a raise, not layoffs", "They had taken on extra responsibilities hoping for promotion", "They disliked the CEO personally", "They wanted more vacation days"], answer: 1 },
            { q: "What can be inferred about why the announcement was 'slightly easier to accept'?", options: ["Because the CEO seemed visibly uncomfortable delivering it, which humanized the news", "Because employees were told they would all get raises", "Because nobody actually lost their job", "Because the meeting was very short"], answer: 0 }
          ]
        }
      ],
      writing: [
        { prompt: "Escreva 4 frases usando collocations diferentes com make, do, take e have.", minWords: 20, modelAnswer: "I need to make a decision soon. She always does her homework early. He took a big risk last year. We had a wonderful conversation yesterday." },
        { prompt: "Escreva um parágrafo curto sobre uma preocupação atual, usando pelo menos 2 collocations desta lição (deeply concerned, highly unlikely, etc.).", minWords: 25, modelAnswer: "I am deeply concerned about climate change. It's highly unlikely that the problem will solve itself. We need to raise awareness and make an effort to change our habits." },
        { prompt: "Escreva uma carta formal de reclamação (150-170 palavras) a uma empresa sobre um produto ou serviço que causou decepção, usando pelo menos 3 collocations desta lição (deeply concerned, take responsibility, reach an agreement, etc.) de forma natural.", minWords: 150, minSentences: 7, requiredStructures: ["I am writing to", "I would like to", "I look forward to"], targetWords: ["deeply concerned", "take responsibility", "reach an agreement"], modelAnswer: "Dear Customer Service Team, I am writing to express my dissatisfaction with a recent purchase from your online store. I ordered a laptop three weeks ago, and upon arrival, I discovered that it was significantly different from the model advertised on your website. I am deeply concerned that this kind of discrepancy could mislead other customers who make purchasing decisions based on your product descriptions. I would like to point out that I have already made several attempts to contact your support team, without receiving a satisfactory response. In my view, your company needs to take responsibility for this error rather than redirecting me to yet another department. I understand that mistakes happen occasionally, and I have no wish to be unreasonable; however, I do expect a prompt resolution. I would appreciate the opportunity to reach an agreement involving either a full refund or an exchange for the correct model. I look forward to your prompt response and trust that this matter will be resolved fairly." }
      ],
      speaking: [
        { phrase: "She made a difficult decision.", tip: "'Make a decision' é fixo — nunca diga 'do a decision'." },
        { phrase: "We are deeply concerned about the results.", tip: "'Deeply' intensifica 'concerned' — combinação natural e fixa." },
        { phrase: "It's highly unlikely to happen.", tip: "'Highly unlikely' é mais natural que 'very unlikely' em contextos formais." },
        { phrase: "They finally reached an agreement.", tip: "'Reach an agreement' é mais natural que 'arrive at an agreement'." },
        { phrase: "Please pay attention to the details.", tip: "'Pay attention' é fixo — nunca 'give attention' neste sentido." },
        { phrase: "To sum up, our team made a strong effort this quarter, took full responsibility for last year's mistakes, and finally reached an agreement on a clearer plan going forward.", tip: "Resuma uma situação de trabalho (real ou inventada) em que sua equipe teve que assumir responsabilidade por um erro e chegar a um acordo. Use pelo menos duas collocations desta lição." }
      ],
      exercises: {
        fillBlanks: [
          { text: "She ___ a difficult decision. (make, não do)", answer: "made" },
          { text: "He ___ his homework every day. (do)", answer: "does" },
          { text: "They took a big ___. (risco)", answer: "risk" },
          { text: "We are deeply ___ about the results. (preocupados)", answer: "concerned" },
          { text: "It's highly ___ to happen. (improvável)", answer: "unlikely" }
        ],
        matching: [
          { left: "Make a decision", right: "Tomar uma decisão" },
          { left: "Take responsibility", right: "Assumir responsabilidade" },
          { left: "Heavy rain", right: "Chuva forte" },
          { left: "Pay attention", right: "Prestar atenção" },
          { left: "Raise awareness", right: "Aumentar a conscientização" },
          { left: "Reach an agreement", right: "Chegar a um acordo" }
        ],
        ordering: [
          { words: ["decision", "made", "difficult", "She", "a"], answer: "She made a difficult decision" },
          { words: ["responsibility", "took", "the", "He", "mistake", "for"], answer: "He took responsibility for the mistake" },
          { words: ["concerned", "are", "deeply", "We", "results", "about", "the"], answer: "We are deeply concerned about the results" },
          { words: ["unlikely", "It's", "happen", "highly", "to"], answer: "It's highly unlikely to happen" },
          { words: ["attention", "pay", "Please", "details", "the", "to"], answer: "Please pay attention to the details" }
        ],
        translation: [
          { direction: "pt-en", text: "Ela tomou uma decisão difícil.", answer: "She made a difficult decision." },
          { direction: "pt-en", text: "Estamos profundamente preocupados com os resultados.", answer: "We are deeply concerned about the results." },
          { direction: "pt-en", text: "É altamente improvável que aconteça.", answer: "It's highly unlikely to happen." },
          { direction: "en-pt", text: "They finally reached an agreement.", answer: "Eles finalmente chegaram a um acordo." },
          { direction: "en-pt", text: "Please pay attention to the details.", answer: "Por favor, preste atenção aos detalhes." },
          { direction: "en-pt", text: "Smoking is strictly forbidden here.", answer: "Fumar é estritamente proibido aqui." }
        ],
        dictation: [
          { audioText: "She made a difficult decision.", answer: "She made a difficult decision." },
          { audioText: "We are deeply concerned about the results.", answer: "We are deeply concerned about the results." },
          { audioText: "Please pay attention to the details.", answer: "Please pay attention to the details." }
        ],
        dialogue: [
          {
            title: "Discussing a Problem",
            lines: [
              { speaker: "Marta", text: "I'm deeply concerned about this issue." },
              { speaker: "user", prompt: "Diga que devem fazer um esforço para resolver:", options: ["We should make an effort to solve it.", "We should do an effort to solve it.", "We should take an effort to solve it."], answer: 0 },
              { speaker: "Marta", text: "Agreed. Do you think we'll reach an agreement soon?" },
              { speaker: "user", prompt: "Diga que é altamente improvável por agora:", options: ["It's highly unlikely for now.", "It's heavy rain for now.", "It's strictly forbidden for now."], answer: 0 },
              { speaker: "Marta", text: "I see your point." }
            ]
          }
        ]
      },
      quiz: [
        { q: "Choose the correct collocation.", options: ["Do a decision", "Make a decision", "Take a decision", "Have a decision"], answer: 1, explanation: "'Make a decision' é a collocation fixa em inglês; 'do a decision' soa estranho e incorreto para um falante nativo, mesmo sendo gramaticalmente compreensível." },
        { q: "Choose the correct collocation.", options: ["Do homework", "Make homework", "Take homework", "Have homework"], answer: 0, explanation: "'Do homework' é a collocation correta com 'do'; verbos como 'make' ou 'take' não combinam naturalmente com 'homework'." },
        { type: "tf", q: "'Heavy rain' is the natural collocation, not 'strong rain'.", answer: true, explanation: "'Heavy rain' é a collocation natural em inglês para descrever chuva forte; 'strong rain' não é uma combinação usada por falantes nativos." },
        { q: "Choose the correct collocation.", options: ["Take responsibility", "Make responsibility", "Do responsibility", "Have responsibility"], answer: 0, explanation: "'Take responsibility' é a collocation fixa; verbos como 'make', 'do' ou 'have' não combinam naturalmente com 'responsibility' nesse sentido." },
        { type: "short", q: "Complete: 'We are deeply ___ about the results.' (preocupados)", answer: ["concerned"], explanation: "'Deeply concerned' é uma collocation entre advérbio e adjetivo usada para intensificar a preocupação de forma natural e formal." },
        { q: "'Raise awareness' means:", options: ["Diminuir a atenção", "Aumentar a conscientização", "Ignorar o problema", "Esconder informação"], answer: 1, explanation: "'Raise awareness' significa aumentar a conscientização ou o conhecimento público sobre um assunto, geralmente através de campanhas." },
        { type: "tf", q: "'Pay attention' can also be correctly said as 'give attention' in every context.", answer: false, explanation: "'Pay attention' é a collocation fixa e natural; 'give attention' não é comum no mesmo sentido." },
        { q: "Choose the correct sentence.", options: ["They did a big risk.", "They took a big risk.", "They made a big risk.", "They had a big risk."], answer: 1, explanation: "'Take a risk' é a collocation correta com 'take'; verbos como 'do', 'make' ou 'have' não se combinam naturalmente com 'risk'." },
        { q: "'Bitterly disappointed' means:", options: ["Levemente feliz", "Amargamente desapontado", "Moderadamente satisfeito", "Extremamente animado"], answer: 1, explanation: "'Bitterly disappointed' é uma collocation que intensifica 'disappointed' com o advérbio 'bitterly', equivalente a 'amargamente desapontado'." },
        { type: "short", q: "Complete: 'It's highly ___ to happen.' (improvável)", answer: ["unlikely"], explanation: "'Highly unlikely' é a collocation natural para expressar que algo é muito improvável, mais usada que 'very unlikely' em contextos formais." },
        { q: "Choose the correct sentence.", options: ["We made a great conversation.", "We had a great conversation.", "We did a great conversation.", "We took a great conversation."], answer: 1, explanation: "'Have a conversation' é a collocation fixa com o verbo 'have'; 'make', 'do' ou 'take' não combinam naturalmente com 'conversation'." },
        { type: "tf", q: "Collocations should be learned as individual words rather than whole chunks.", answer: false, explanation: "É mais eficaz aprender collocations como blocos inteiros, não palavra por palavra.", skill: "collocation", difficulty: "easy" },
        { q: "'Make it clear' means:", options: ["Deixar algo confuso de propósito", "Deixar algo claro e explícito", "Esconder uma informação importante", "Ignorar completamente um assunto"], answer: 1, explanation: "'Make it clear' significa comunicar algo de forma explícita e inequívoca, sem deixar dúvidas." , skill: "vocabulary", difficulty: "easy" },
        { q: "Choose the correct collocation.", options: ["Take on extra responsibility", "Make on extra responsibility", "Do on extra responsibility", "Have on extra responsibility"], answer: 0, explanation: "'Take on responsibility' é a collocation fixa usada para descrever a ação de aceitar novas tarefas ou encargos." , skill: "collocation", difficulty: "medium" },
        { q: "In 'A Difficult Announcement', what does the writer suggest made the news 'slightly easier to accept'?", options: ["A generous severance package that was offered", "The CEO's visible discomfort while delivering the news", "The fact that nobody actually lost their job", "How short the meeting turned out to be"], answer: 1, explanation: "O texto sugere que o visível desconforto da CEO ao dar a notícia, paradoxalmente, humanizou o anúncio e tornou-o um pouco mais fácil de aceitar." , skill: "inference", difficulty: "medium" },
        { q: "In 'A Job Performance Review', what does the manager imply by saying the employee's conversation with the team 'took courage'?", options: ["The conversation was easy and required no real effort", "Having that conversation was a genuinely difficult, brave thing to do", "The manager is subtly criticizing the employee", "The conversation never actually took place"], answer: 1, explanation: "Ao dizer 'that took courage', o gerente reconhece que a conversa difícil exigiu coragem genuína da parte do funcionário." , skill: "listening", difficulty: "medium" },
        { q: "'Go unnoticed' means:", options: ["Ser percebido imediatamente por todos", "Passar despercebido", "Ser cancelado sem aviso prévio", "Ser anunciado publicamente com destaque"], answer: 1, explanation: "'Go unnoticed' significa passar despercebido, sem que ninguém preste atenção — o oposto de ser notado." , skill: "vocabulary", difficulty: "medium" },
        { q: "'Redundancy' in British workplace English refers to:", options: ["A word or phrase repeated unnecessarily in a sentence", "Being laid off because a position has been eliminated", "A bonus payment for good performance", "A promotion to a senior role"], answer: 1, explanation: "No inglês britânico de contexto trabalhista, 'redundancy' significa ser demitido porque o cargo deixou de existir — diferente do sentido comum de 'redundância' em português." , skill: "vocabulary", difficulty: "hard" },
        { q: "'Uncharacteristically' describes behavior that is:", options: ["Typical and fully expected for that person", "Unusual for that person, out of character", "Extremely aggressive in nature", "Completely random with no pattern"], answer: 1, explanation: "'Uncharacteristically' descreve algo que foge do comportamento habitual de uma pessoa, como uma expressão facial atípica." , skill: "vocabulary", difficulty: "medium" },
        { type: "short", q: "Complete: 'This decision was not ___ lightly.' (tomada de forma leviana)", answer: ["taken"], explanation: "'Not taken lightly' é a collocation fixa usada para enfatizar que uma decisão foi considerada com seriedade, não às pressas." , skill: "collocation", difficulty: "easy" },
        { type: "tf", q: "Collocations like 'make an effort' and 'reach an agreement' sound more natural to a native speaker than a word-for-word translation from Portuguese.", answer: true, explanation: "Traduções literais do português (como 'do an effort') não seguem as collocations naturais do inglês, que exigem combinações fixas específicas." , skill: "register", difficulty: "medium" },
        { q: "'Goodwill' in a business context refers to:", options: ["A formal legal contract", "A feeling of trust and positive regard between people or organizations", "A type of financial penalty", "A mandatory company meeting"], answer: 1, explanation: "'Goodwill' descreve a boa vontade e a confiança mantidas entre pessoas ou organizações, mesmo em situações delicadas." , skill: "vocabulary", difficulty: "medium" },
        { q: "What can be inferred about why employees had suspected 'something was wrong' for weeks before the announcement?", options: ["The CEO had told them directly in advance", "Subtle signs, like closed-door meetings and the CFO's grim expression, had not gone unnoticed", "There were no signs at all before the announcement", "The company had published a public statement earlier"], answer: 1, explanation: "O texto menciona que reuniões a portas fechadas e a expressão sombria do CFO não passaram despercebidas, alimentando as suspeitas dos funcionários." , skill: "inference", difficulty: "hard" },
        { q: "'See something coming' means:", options: ["To be caught completely by surprise", "To anticipate or predict something before it happens", "To deliberately ignore a warning sign", "To arrive late to an important event"], answer: 1, explanation: "'See something coming' significa prever ou antecipar algo antes que aconteça — o texto usa a negativa ('never seen coming') para indicar total surpresa." , skill: "vocabulary", difficulty: "easy" },
        { q: "Choose the correct collocation for a company-wide meeting with all employees.", options: ["An all-hands meeting", "A make-hands meeting", "A do-hands meeting", "A take-hands meeting"], answer: 0, explanation: "'All-hands meeting' é a collocation fixa em inglês de negócios para uma reunião geral que reúne todos os funcionários da empresa." , skill: "collocation", difficulty: "medium" }
      ]
    }
  ],
  finalTest: {
    description: "Prova final do nível C1 — 20 questões cobrindo nuances gramaticais, idioms, redação formal, compreensão de fala nativa e debate.",
    questions: [
      { q: "Choose the correct sentence for a past habit (state verb).", options: ["I would know him well.", "I used to know him well.", "I use to know him well.", "I would known him well."], answer: 1, explanation: "'Know' é um verbo de estado, então apenas 'used to' é possível — 'would' não é usado para estados, só para ações repetidas no passado." },
      { q: "Choose the correct inversion.", options: ["Never I have seen that.", "Never have I seen that.", "I never have seen that.", "Have never I seen that."], answer: 1, explanation: "Após advérbios negativos como 'never' no início da frase, ocorre inversão sujeito-auxiliar: 'Never have I seen...', e não 'Never I have seen...'." },
      { type: "tf", q: "'Must have' expresses near certainty about a past event.", answer: true, explanation: "'Must have' + particípio é usado para expressar uma dedução quase certa sobre algo que aconteceu no passado, com base em evidências." },
      { q: "'Piece of cake' means:", options: ["Muito difícil", "Muito fácil", "Muito caro", "Muito raro"], answer: 1, explanation: "'A piece of cake' é um idiom que descreve algo extremamente fácil de fazer, sem relação literal com bolo." },
      { q: "'Under the weather' means:", options: ["Muito feliz", "Um pouco doente", "Com muito frio", "Com muita pressa"], answer: 1, explanation: "'Under the weather' é uma forma idiomática e informal de dizer que alguém está um pouco doente ou indisposto." },
      { type: "short", q: "Complete: 'That car cost an arm and a ___.'", answer: ["leg"], explanation: "'Cost an arm and a leg' significa custar muito caro; a expressão fixa termina em 'leg', não em outra parte do corpo." },
      { q: "Choose the correct formal connector for addition.", options: ["However", "Furthermore", "Whereas", "Despite"], answer: 1, explanation: "'Furthermore' é usado para acrescentar informação em registro formal, assim como 'moreover' e 'in addition' — diferente de 'however', que indica contraste." },
      { q: "Choose the correct formal connector for contrast.", options: ["Moreover", "In addition", "However", "Consequently"], answer: 2, explanation: "'However' introduz uma ideia contrastante em registro formal; 'moreover' e 'in addition' indicam adição, e 'consequently' indica consequência." },
      { type: "tf", q: "Formal academic writing typically uses contractions like 'can't' and 'don't'.", answer: false, explanation: "A escrita formal/acadêmica geralmente evita contrações, preferindo formas completas como 'cannot' e 'do not'." },
      { q: "What does 'gonna' come from?", options: ["Got to", "Going to", "Want to", "Give to"], answer: 1, explanation: "'Gonna' é a redução informal falada de 'going to', usada para expressar planos ou intenções futuras." },
      { q: "What does 'gotta' mean?", options: ["Got a", "Have to/Got to", "Going away", "Get out"], answer: 1, explanation: "'Gotta' é a forma reduzida de 'got to' ou 'have to', usada na fala informal para expressar obrigação." },
      { type: "tf", q: "Understanding every single word is necessary to understand native speech.", answer: false, explanation: "É mais eficaz focar no significado geral e nas palavras com ênfase, não em cada palavra isoladamente." },
      { q: "Choose a sophisticated way to introduce an opinion.", options: ["I think that...", "I would argue that...", "I guess that...", "Maybe that..."], answer: 1, explanation: "'I would argue that...' é uma forma mais sofisticada e formal de apresentar uma opinião do que o simples 'I think', comum em debates e redações acadêmicas." },
      { q: "'Persuade' means:", options: ["Convencer", "Discordar", "Ignorar", "Confundir"], answer: 0, explanation: "'Persuade' significa convencer alguém a acreditar em algo ou a agir de determinada forma, geralmente por meio de argumentos ou apelos emocionais." },
      { type: "short", q: "Complete: 'We need to find a ___.' (meio-termo)", answer: ["compromise"], explanation: "'Compromise' é a solução intermediária que satisfaz parcialmente as partes envolvidas em um desacordo, equivalente a 'meio-termo'." },
      { type: "tf", q: "'While that may be true' is used to introduce a counter-argument politely.", answer: true, explanation: "Essa estrutura reconhece parcialmente o ponto do interlocutor antes de introduzir um contra-argumento, suavizando o tom do desacordo." },
      { q: "'Assumption' means:", options: ["Fato confirmado", "Suposição", "Prova", "Regra"], answer: 1, explanation: "'Assumption' é algo aceito como verdade sem prova concreta — corresponde a 'suposição' em português." },
      { q: "Choose the correct idiom for 'deixar escapar um segredo'.", options: ["Let the cat out of the bag", "Break the ice", "Cost an arm and a leg", "Piece of cake"], answer: 0, explanation: "'Let the cat out of the bag' é o idiom que significa revelar um segredo, geralmente sem querer." },
      { q: "'Evidence' means:", options: ["Opinião", "Evidência", "Dúvida", "Erro"], answer: 1, explanation: "'Evidence' refere-se a fatos, dados ou provas que sustentam um argumento ou conclusão." },
      { type: "tf", q: "Good arguments should be supported by evidence and examples, not just opinion.", answer: true, explanation: "Argumentos convincentes se apoiam em evidências, dados e exemplos concretos, e não apenas em opiniões pessoais sem embasamento." }
    ]
  }
};

window.APP_DATA = APP_DATA;
