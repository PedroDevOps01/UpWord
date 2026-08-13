var APP_DATA = window.APP_DATA || {};

APP_DATA.placementQuiz = {
  id: 'placement',
  title: 'Teste de Nivelamento',
  description: 'Responda estas 24 perguntas, do mais fácil ao mais difícil (4 perguntas por nível), para termos uma estimativa do melhor nível para você começar. É só uma estimativa — você pode refazer o teste quando quiser e sempre pode escolher outro nível manualmente.',
  questions: [
    { level: 'a1', skill: 'grammar', q: 'Choose the correct option: "I ___ from Brazil."', options: ['am', 'is', 'are', 'be'], answer: 0 },
    { level: 'a1', skill: 'vocabulary', q: 'What is the plural of "book"?', options: ['bookes', 'books', 'bookies', 'book'], answer: 1 },
    { level: 'a1', skill: 'vocabulary', q: 'Choose the correct greeting for the morning.', options: ['Good night', 'Good morning', 'Good evening', 'Goodbye'], answer: 1 },
    { level: 'a1', skill: 'grammar', q: 'Complete the question: "___ you a teacher?"', options: ['Am', 'Is', 'Are', 'Be'], answer: 2 },
    { level: 'a2', skill: 'grammar', q: 'Choose the correct sentence.', options: ['She go to work every day.', 'She goes to work every day.', 'She going to work every day.', 'She gone to work every day.'], answer: 1 },
    { level: 'a2', skill: 'grammar', q: 'Complete: "Yesterday, I ___ to the cinema."', options: ['go', 'goes', 'went', 'going'], answer: 2 },
    { level: 'a2', skill: 'grammar', q: 'Choose the correct continuous form: "She ___ dinner right now."', options: ['cook', 'cooks', 'is cooking', 'cooked'], answer: 2 },
    { level: 'a2', skill: 'grammar', q: 'Complete: "There ___ many people at the party last night."', options: ['was', 'were', 'is', 'are'], answer: 1 },
    { level: 'b1', skill: 'grammar', q: 'Complete: "If I ___ more time, I would travel more."', options: ['have', 'had', 'has', 'will have'], answer: 1 },
    { level: 'b1', skill: 'grammar', q: 'Choose the sentence with the correct present perfect.', options: ['I have seen that movie already.', 'I have saw that movie already.', 'I has seen that movie already.', 'I seen that movie already.'], answer: 0 },
    { level: 'b1', skill: 'grammar', q: 'Choose the best sentence for a spontaneous decision made right now.', options: ['I will help you with that.', 'I am going to help you with that tomorrow.', 'I help you with that.', 'I helped you with that.'], answer: 0 },
    { level: 'b1', skill: 'vocabulary', q: 'Which phrasal verb means "to postpone"?', options: ['give up', 'put off', 'look forward to', 'get along'], answer: 1 },
    { level: 'b2', skill: 'grammar', q: 'Choose the correct passive voice for: "They built this house in 1990."', options: ['This house built in 1990.', 'This house was built in 1990.', 'This house is building in 1990.', 'This house has build in 1990.'], answer: 1 },
    { level: 'b2', skill: 'grammar', q: 'Choose the correct reported speech for: He said, "I am tired."', options: ['He said he is tired.', 'He said he was tired.', 'He said he tired.', 'He says he was tired.'], answer: 1 },
    { level: 'b2', skill: 'grammar', q: 'Choose the correct third conditional.', options: ['If I studied more, I would pass.', 'If I had studied more, I would have passed.', 'If I study more, I will pass.', 'If I would study more, I passed.'], answer: 1 },
    { level: 'b2', skill: 'grammar', q: 'Choose the correct passive form for: "They are building a new bridge."', options: ['A new bridge is built.', 'A new bridge is being built.', 'A new bridge was being built.', 'A new bridge builds.'], answer: 1 },
    { level: 'c1', skill: 'vocabulary', q: 'Which sentence uses the idiom correctly?', options: ['He decided to bite the bullet and finish the report.', 'He decided to bite the dust and finish the report.', 'He decided to bite the dog and finish the report.', 'He decided to bite the apple and finish the report.'], answer: 0 },
    { level: 'c1', skill: 'register', q: 'Choose the most natural academic phrasing.', options: ['The results show a big change in the numbers.', 'The results indicate a significant change in the figures.', 'The results are like really different numbers.', 'The results kind of changed a lot.'], answer: 1 },
    { level: 'c1', skill: 'grammar', q: 'Choose the sentence with correct inversion for emphasis.', options: ['Never I have seen such a mess.', 'Never have I seen such a mess.', 'I have never seen such a mess not.', 'Never did I saw such a mess.'], answer: 1 },
    { level: 'c1', skill: 'collocation', q: 'Choose the most natural collocation.', options: ['make a decision', 'do a decision', 'take a decision', 'have a decision'], answer: 0 },
    { level: 'c2', skill: 'inference', q: 'Identify the sentence that uses irony appropriately.', options: ['"What a wonderful day," he said, soaked from the storm.', '"What a terrible day," he said, soaked from the storm.', '"I am happy," he said, soaked from the storm.', '"It is sunny," he said, soaked from the storm.'], answer: 0 },
    { level: 'c2', skill: 'register', q: 'Which option best reflects native-level nuance between "I guess" and "I am certain"?', options: ['They mean exactly the same thing in all contexts.', '"I guess" expresses more certainty than "I am certain."', '"I guess" signals tentativeness, while "I am certain" signals confidence.', 'Both are only used in formal writing.'], answer: 2 },
    { level: 'c2', skill: 'register', q: 'Choose the most appropriate register for a formal business email opening.', options: ['Hey! What\'s up?', 'I am writing to inquire about...', 'Yo, quick question...', 'Sup, need to ask something.'], answer: 1 },
    { level: 'c2', skill: 'inference', q: 'Which sentence best uses a rhetorical question for effect?', options: ['What time is the meeting?', 'Isn\'t it obvious what we should do?', 'Where did you put the keys?', 'How much does this cost?'], answer: 1 }
  ],
  levelOrder: ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'],
  QUESTIONS_PER_LEVEL: 4,
  recommend: function (correctCount) {
    var order = APP_DATA.placementQuiz.levelOrder;
    var perLevel = APP_DATA.placementQuiz.QUESTIONS_PER_LEVEL;
    var idx = Math.min(order.length - 1, Math.floor(correctCount / perLevel));
    return order[idx];
  }
};

window.APP_DATA = APP_DATA;
