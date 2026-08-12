# UpWord

Plataforma web de ensino de inglês (A1 → C2), 100% front-end, sem cadastro, sem login e sem backend. Todo o conteúdo fica embutido nos arquivos `.js` do projeto e todo o progresso do aluno é salvo apenas no `localStorage` do navegador.

**Design system:** ver `DESIGN_SYSTEM.md` para a identidade visual (paleta "Elevation Scale", tipografia Fraunces/IBM Plex, motivo dos terraços).

## Como abrir

Não precisa de build nem de servidor: basta abrir `index.html` no navegador, ou hospedar a pasta inteira em qualquer host estático (GitHub Pages, Netlify, Vercel, etc.).

Algumas funcionalidades (pronúncia por voz e reconhecimento de fala) usam a Web Speech API do navegador. Chrome e Edge têm o melhor suporte; Firefox e Safari têm suporte parcial (a síntese de voz funciona, o reconhecimento de fala pode não estar disponível — nesse caso a plataforma degrada graciosamente e avisa o usuário).

## Estrutura do projeto

```
index.html              shell da aplicação (SPA com roteamento por hash: #/...)
css/style.css           estilos, responsivo
js/
  app.js                roteador (lê location.hash e chama a view certa)
  storage.js            progresso local (localStorage): módulos concluídos, pontos,
                         badges, histórico de quizzes, flashcards (repetição espaçada)
  speech.js             Web Speech API: texto-para-voz (sotaques) e reconhecimento de voz
  data/
    levels.js            metadados dos 6 níveis (A1-C2) + helpers (getModule, getLevel...)
    placementQuiz.js      teste de nivelamento inicial
    a1.js, a2.js, ...     conteúdo de cada nível (módulos + prova final)
  render/
    home.js               trilha de níveis (tela inicial)
    placement.js           tela do teste de nivelamento
    level.js               lista de módulos de um nível + prova final
    module.js               abas de um módulo (aula, vocabulário, gramática, listening,
                             reading, writing, speaking, exercícios)
    exercises.js            atividades de fixação (lacunas, associação, ordenar frases,
                             tradução, ditado, diálogo interativo)
    quiz.js                 motor de quiz genérico (usado no quiz do módulo e na prova final)
    flashcards.js            flashcards com repetição espaçada (sistema Leitner)
```

Os arquivos são carregados via `<script>` simples (sem bundler, sem `import`/`export`), então a ordem no `index.html` importa: dados primeiro, depois `storage.js`/`speech.js`, depois as views, depois `app.js`.

## Estado atual do conteúdo

- **A1 (Iniciante)**: completo — 5 módulos + prova final, cada módulo com aula, vocabulário, gramática, listening, reading, writing, speaking e todas as atividades de fixação.
- **A2, B1, B2, C1, C2**: estrutura pronta, mas com `modules: []` — aparecem na trilha como "conteúdo em construção" até serem preenchidos.

## Como adicionar conteúdo a um nível (ex: A2)

Edite `js/data/a2.js` seguindo exatamente o formato de `js/data/a1.js`. Cada módulo é um objeto com este formato:

```js
{
  id: "a2-m1",              // único, prefixado com o nível
  title: "Título do módulo",
  subtitle: "Resumo curto",
  lesson: {
    intro: "Texto de abertura da aula.",
    sections: [
      { heading: "Título da seção", text: "Explicação.", examples: [{ en: "...", pt: "..." }] }
    ]
  },
  vocabulary: [
    { word: "Example", phonetic: "/ɪɡˈzæmpəl/", translation: "Exemplo", example: "This is an example.", exampleTranslation: "Isto é um exemplo." }
  ],
  grammar: {
    title: "Nome da estrutura gramatical",
    explanation: "Explicação clara.",
    table: { headers: ["...", "..."], rows: [["...", "..."]] },
    correct: ["Frase certa."],
    incorrect: ["Frase errada."]
  },
  listening: [
    { title: "...", accent: "american|british|australian", transcript: "...",
      questions: [{ q: "...", options: ["...","...","...","..."], answer: 0 }] }
  ],
  reading: [
    { title: "...", text: "...", questions: [{ q: "...", options: [...], answer: 0 }] }
  ],
  writing: [
    { prompt: "...", minWords: 15, modelAnswer: "..." }
  ],
  speaking: [
    { phrase: "...", tip: "..." }
  ],
  exercises: {
    fillBlanks: [{ text: "I ___ happy.", answer: "am", options: ["am","is","are"] /* options é opcional */ }],
    matching: [{ left: "Word", right: "Tradução" }],
    ordering: [{ words: ["is","This","test"], answer: "This is test" }],
    translation: [{ direction: "pt-en", text: "...", answer: "..." }],
    dictation: [{ audioText: "...", answer: "..." }],
    dialogue: [{ title: "...", lines: [
      { speaker: "Nome", text: "..." },
      { speaker: "user", prompt: "...", options: ["...","...","..."], answer: 0 }
    ] }]
  },
  quiz: [
    { q: "...", options: ["...","...","...","..."], answer: 0, explanation: "..." },      // múltipla escolha (padrão)
    { type: "tf", q: "...", answer: true, explanation: "..." },                            // verdadeiro/falso
    { type: "short", q: "...", answer: ["resposta", "Resposta"], explanation: "..." }       // resposta curta
  ]
}
```

Depois de adicionar módulos, defina também `finalTest` no mesmo arquivo:

```js
APP_DATA.a2 = {
  modules: [ /* seus módulos */ ],
  finalTest: {
    description: "Prova final do nível A2...",
    questions: [ /* mesmo formato das questões de quiz acima, tipicamente 15-25 */ ]
  }
};
```

Nenhum outro arquivo precisa mudar: a trilha, o desbloqueio sequencial de módulos, os flashcards e as provas finais já leem os dados de `APP_DATA.a2` automaticamente pelos helpers em `levels.js`.

## Progresso e dados salvos

Tudo fica em uma única chave do `localStorage` (`englishpath_progress_v1`): módulos concluídos, badges, pontos, histórico de tentativas de quiz e o estado de repetição espaçada dos flashcards. Nada é enviado para nenhum servidor. O botão "Limpar todo o meu progresso" na tela inicial apaga esses dados.
