var APP_DATA = window.APP_DATA || {};

APP_DATA.placementQuiz = {
  id: 'placement',
  title: 'Teste de Nivelamento',
  description: 'Responda estas 12 perguntas, do mais fácil ao mais difícil, para descobrirmos o melhor nível para você começar.',
  questions: [
    { level: 'a1', q: 'Choose the correct option: "I ___ from Brazil."', options: ['am', 'is', 'are', 'be'], answer: 0 },
    { level: 'a1', q: 'What is the plural of "book"?', options: ['bookes', 'books', 'bookies', 'book'], answer: 1 },
    { level: 'a2', q: 'Choose the correct sentence.', options: ['She go to work every day.', 'She goes to work every day.', 'She going to work every day.', 'She gone to work every day.'], answer: 1 },
    { level: 'a2', q: 'Complete: "Yesterday, I ___ to the cinema."', options: ['go', 'goes', 'went', 'going'], answer: 2 },
    { level: 'b1', q: 'Complete: "If I ___ more time, I would travel more."', options: ['have', 'had', 'has', 'will have'], answer: 1 },
    { level: 'b1', q: 'Choose the sentence with the correct present perfect.', options: ['I have seen that movie already.', 'I have saw that movie already.', 'I has seen that movie already.', 'I seen that movie already.'], answer: 0 },
    { level: 'b2', q: 'Choose the correct passive voice for: "They built this house in 1990."', options: ['This house built in 1990.', 'This house was built in 1990.', 'This house is building in 1990.', 'This house has build in 1990.'], answer: 1 },
    { level: 'b2', q: 'Choose the correct reported speech for: He said, "I am tired."', options: ['He said he is tired.', 'He said he was tired.', 'He said he tired.', 'He says he was tired.'], answer: 1 },
    { level: 'c1', q: 'Which sentence uses the idiom correctly?', options: ['He decided to bite the bullet and finish the report.', 'He decided to bite the dust and finish the report.', 'He decided to bite the dog and finish the report.', 'He decided to bite the apple and finish the report.'], answer: 0 },
    { level: 'c1', q: 'Choose the most natural academic phrasing.', options: ['The results show a big change in the numbers.', 'The results indicate a significant change in the figures.', 'The results are like really different numbers.', 'The results kind of changed a lot.'], answer: 1 },
    { level: 'c2', q: 'Identify the sentence that uses irony appropriately.', options: ['"What a wonderful day," he said, soaked from the storm.', '"What a terrible day," he said, soaked from the storm.', '"I am happy," he said, soaked from the storm.', '"It is sunny," he said, soaked from the storm.'], answer: 0 },
    { level: 'c2', q: 'Which option best reflects native-level nuance between "I guess" and "I am certain"?', options: ['They mean exactly the same thing in all contexts.', '"I guess" expresses more certainty than "I am certain."', '"I guess" signals tentativeness, while "I am certain" signals confidence.', 'Both are only used in formal writing.'], answer: 2 }
  ],
  levelOrder: ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'],
  recommend: function (correctCount) {
    var order = APP_DATA.placementQuiz.levelOrder;
    var idx = Math.min(order.length - 1, Math.floor(correctCount / 2));
    return order[idx];
  }
};

window.APP_DATA = APP_DATA;
