# English Path — Briefing de Telas para Design (UI/UX)

Este documento descreve, tela por tela, tudo que existe hoje na plataforma **English Path**, com conteúdo real (não lorem ipsum), estados possíveis e elementos de interface. O objetivo é servir de insumo para uma IA (ou designer humano) redesenhar o visual do sistema sem precisar ler o código-fonte.

**O que é o produto:** plataforma web de ensino de inglês, do nível A1 (iniciante) ao C2 (fluente), 100% gratuita, sem cadastro/login, sem backend. Todo o progresso é salvo no navegador do próprio usuário. Tom de voz: acolhedor, motivador, direto, sem jargão técnico de linguística.

**Estado atual do visual:** funcional, mas com design "de programador" — HTML/CSS simples, cores planas, sem ilustrações, sem tipografia customizada, sem microanimações. É exatamente esse visual que precisa ser redesenhado.

---

## 0. Mapa de navegação

```
/ (Home / Trilha)
├── /placement (Teste de Nivelamento)
├── /flashcards (Flashcards — todos os níveis)
├── /flashcards/:levelId (Flashcards — um nível)
└── /level/:levelId (Página do Nível)
    ├── /level/:levelId/module/:moduleId/:tab   (tab = lesson|vocabulary|grammar|listening|reading|writing|speaking|exercises)
    ├── /level/:levelId/module/:moduleId/quiz    (Quiz do módulo)
    └── /level/:levelId/test                      (Prova final do nível)
```

Navegação é toda por hash (SPA), sem reload de página. Existem 6 "telas-molde" (templates) que se repetem com dados diferentes: Home, Nivelamento, Nível, Módulo (com 8 sub-abas), Quiz (usado 3 vezes: quiz de módulo, prova final, nivelamento) e Flashcards.

---

## 1. Componentes globais (aparecem em toda tela)

### 1.1 Topbar (fixa no topo, sticky)
- **Esquerda:** logomarca — emoji 🇬🇧 + texto "English Path" (link para Home)
- **Direita:** menu horizontal com 3 links de texto — "Trilha" / "Teste de nível" / "Flashcards" — e um "pill" (badge arredondado) mostrando os pontos do usuário: `⭐ 120 pts`
- Em telas estreitas, o menu quebra em várias linhas (wrap), sem menu hambúrguer atualmente

### 1.2 Footer
- Uma linha de texto centralizada, cor cinza-clara: *"English Path — 100% gratuito, sem cadastro. Seu progresso fica salvo apenas neste navegador."*

### 1.3 Paleta de cores atual
| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#f7f8fb` | fundo da página |
| `--surface` | `#ffffff` | cards, painéis |
| `--text` | `#1f2430` | texto principal |
| `--muted` | `#6b7280` | texto secundário |
| `--primary` | `#3b6ef5` | botões primários, links, tabs ativas |
| `--primary-dark` | `#2952c8` | hover do primário |
| `--success` | `#1c9d5b` | feedback correto |
| `--danger` | `#d1435b` | feedback incorreto |
| `--border` | `#e3e6ee` | bordas de cards |
| raio de borda | `14px` | cards; botões usam pill (999px) |

### 1.4 Cor por nível (usada como "sotaque visual" de cada nível — borda esquerda dos cards, tag do código, header da página do nível)
| Nível | Cor |
|---|---|
| A1 — Iniciante | `#4CAF50` verde |
| A2 — Básico | `#2196F3` azul |
| B1 — Intermediário | `#FF9800` laranja |
| B2 — Intermediário-Avançado | `#9C27B0` roxo |
| C1 — Avançado | `#E91E63` rosa |
| C2 — Fluente | `#795548` marrom |

### 1.5 Inventário de ícones (hoje são só emojis nativos, sem ilustração customizada)
`🇬🇧` marca · `⭐` pontos · `🏅` badges · `✅` concluído/exercícios · `▶` desbloqueado/próximo · `🔒` bloqueado · `📖` aula · `🗣` vocabulário · `📐` gramática · `🎧` listening · `📰` reading · `✍️` writing · `🎤` speaking · `🔊` ouvir/tocar áudio · `🇺🇸/🇬🇧/🇦🇺` sotaques (americano/britânico/australiano) · `🎙` gravar pronúncia · `😀/😕` feedback de flashcard · `🗂` flashcards · `🚧` conteúdo em construção · `💡` dica

### 1.6 Botões (variantes existentes)
- **Primário**: pill azul sólido, texto branco, negrito (ex: "Fazer teste de nivelamento")
- **Secundário**: pill cinza-claro, texto escuro (ex: "Refazer quiz")
- **Texto-perigo**: sem fundo, texto vermelho sublinhado (ex: "Limpar todo o meu progresso local")
- **Ícone pequeno**: fundo cinza-claro, usado nos botões de sotaque 🇺🇸🇬🇧🇦🇺 e no botão de tocar áudio 🔊

---

## 2. TELA 1 — Home (Trilha de Aprendizado)

**Rota:** `/`
**Propósito:** primeira tela que o usuário vê. Vender a proposta, oferecer 2 caminhos (fazer teste de nivelamento OU escolher nível livremente) e mostrar a trilha completa A1→C2.

### Conteúdo real (copy):
- **H1:** "Aprenda inglês do zero à fluência, sem cadastro e sem custo."
- **Subtítulo:** "Escolha seu nível na trilha abaixo ou faça um teste rápido de nivelamento para descobrir por onde começar. Todo o seu progresso é salvo apenas neste navegador."
- **Botões de ação:** `[Fazer teste de nivelamento]` (primário) + `[Continuar de onde parei]` (secundário, só aparece se o usuário já tiver navegado antes)
- **Linha de estatísticas** (só aparece se o usuário já tem progresso): pills `⭐ 120 pontos` e `🏅 3 badges`
- **H2:** "Trilha de Aprendizado (A1 → C2)"
- **Grid de 6 cards de nível** (responsivo, quebra em colunas conforme largura), cada card é um link inteiro clicável e contém:
  - Código grande e colorido (ex: "A1") na cor do nível
  - Nome do nível (ex: "Iniciante")
  - Tagline em negrito (ex: "Primeiros passos no inglês")
  - Descrição em cinza (ex: "Alfabeto, pronúncia básica, saudações, números, cores, o verbo 'to be' e vocabulário do dia a dia.")
  - Se o nível **tem conteúdo**: barra de progresso (fill colorido) + legenda "2/5 módulos" +, se aplicável, "· ✅ Prova final concluída"
  - Se o nível **não tem conteúdo ainda** (A2 a C2 hoje): legenda cinza "Conteúdo em construção" (sem barra de progresso)
  - Borda esquerda grossa (6px) na cor do nível — é o único "acento" de cor colorido nesta tela hoje
- **Rodapé da seção:** botão de texto vermelho "Limpar todo o meu progresso local" (com confirmação antes de apagar)

### Estados
- **Zerado** (primeira visita): sem stats row, sem botão "Continuar de onde parei"
- **Com progresso**: stats row visível, cards com barra de progresso parcial/completa

### Dados reais dos 6 cards (para preencher o mock):
1. **A1 — Iniciante** — "Primeiros passos no inglês" — verde `#4CAF50` — 5 módulos disponíveis
2. **A2 — Básico** — "Falando sobre o cotidiano" — azul `#2196F3` — em construção
3. **B1 — Intermediário** — "Expressando opiniões e experiências" — laranja `#FF9800` — em construção
4. **B2 — Intermediário-Avançado** — "Lendo e discutindo temas complexos" — roxo `#9C27B0` — em construção
5. **C1 — Avançado** — "Argumentando com fluidez" — rosa `#E91E63` — em construção
6. **C2 — Fluente** — "Domínio quase nativo" — marrom `#795548` — em construção

---

## 3. TELA 2 — Teste de Nivelamento (Placement)

**Rota:** `/placement`
**Propósito:** 12 perguntas de dificuldade crescente (2 por nível, A1→C2) para recomendar por onde o usuário deve começar.

### Conteúdo real:
- **H1:** "Teste de Nivelamento"
- **Descrição:** "Responda estas 12 perguntas, do mais fácil ao mais difícil, para descobrirmos o melhor nível para você começar."
- **Lista de 12 perguntas**, cada uma com:
  - Número + enunciado (ex: "1. Choose the correct option: 'I ___ from Brazil.'")
  - 4 opções em radio buttons estilizados como linhas com borda (ex: am / is / are / be)
- **Botão primário:** "Ver meu resultado"
- **Após enviar:** cada pergunta ganha um fundo verde-claro (acertou) ou rosa-claro (errou), com um texto de feedback logo abaixo das opções: "✔ Correto!" ou "✘ Resposta correta: <alternativa>"
- **Card de resultado** (aparece no final, com scroll automático até ele):
  - "Você acertou X de 12 questões"
  - "Recomendamos que você comece pelo nível **B1 — Intermediário**."
  - "Lembre-se: você pode escolher qualquer nível na trilha, esta é só uma sugestão." (texto cinza pequeno)
  - Botão primário "Ir para o nível B1"

### Exemplos reais de perguntas (uma de cada nível, para o mock ter variedade visual):
- A1: "Choose the correct option: 'I ___ from Brazil.'" → am / is / are / be
- B1: "Complete: 'If I ___ more time, I would travel more.'" → have / had / has / will have
- C2: "Which option best reflects native-level nuance between 'I guess' and 'I am certain'?" (opções mais longas, testam quebra de linha em telas menores)

---

## 4. TELA 3 — Página do Nível

**Rota:** `/level/:levelId` (exemplo usado: A1)
**Propósito:** mostrar a lista de módulos de um nível, o estado de bloqueio sequencial, e o acesso à prova final.

### Conteúdo real (nível A1):
- Link "← Trilha de níveis" no topo
- **H1:** tag colorida com o código "A1" + nome "Iniciante"
- **Descrição do nível:** "Alfabeto, pronúncia básica, saudações, números, cores, o verbo 'to be' e vocabulário do dia a dia."
- Link "🗂 Praticar flashcards deste nível"
- **Lista vertical de módulos** (5 no caso do A1), cada item é uma linha/card horizontal com:
  - Ícone de status à esquerda: `✅` concluído / `▶` desbloqueado e não concluído / `🔒` bloqueado
  - Título numerado (ex: "1. Primeiros Passos")
  - Subtítulo (ex: "Alfabeto, saudações e pronúncia básica")
  - Se bloqueado: texto cinza "Conclua o módulo anterior para desbloquear" e o item não é clicável (opacidade reduzida)
  - Se desbloqueado: o item inteiro é um link para o módulo
- **Bloco da prova final** (abaixo da lista):
  - Se módulos ainda não existem para o nível: caixa com borda pontilhada "🚧 O conteúdo deste nível ainda está sendo produzido. Volte em breve!"
  - Se existem módulos mas nem todos concluídos: texto cinza "🔒 Conclua todos os módulos para desbloquear a prova final"
  - Se todos concluídos: botão primário "📝 Fazer Prova Final de A1" (ou "✅ Refazer Prova Final de A1" se já foi feita)

### Os 5 módulos reais do A1 (para popular a lista no mock):
1. **Primeiros Passos** — Alfabeto, saudações e pronúncia básica
2. **Quem Sou Eu** — O verbo "to be", números e nacionalidades
3. **Cores e Objetos** — Cores, objetos do dia a dia e "there is/there are"
4. **Minha Família e Rotina** — Família, posse (my/your/his/her) e rotina diária
5. **Compras e Comida** — Vocabulário de compras, alimentos e a diferença entre a/an e some/any

---

## 5. TELA 4 — Módulo (8 sub-abas)

**Rota:** `/level/:levelId/module/:moduleId/:tab`
**Propósito:** é a tela mais densa do produto — cada módulo tem 8 abas de conteúdo/prática, sempre com a mesma estrutura de header + navegação por abas + rodapé com CTA para o quiz.

### Estrutura fixa em todas as abas:
- Link "← A1 — Iniciante" (volta para a página do nível)
- **H1:** título do módulo (ex: "Primeiros Passos")
- Subtítulo cinza (ex: "Alfabeto, saudações e pronúncia básica")
- **Barra de 8 abas** (pills horizontais, quebra em telas pequenas): `📖 Aula` `🗣 Vocabulário` `📐 Gramática` `🎧 Listening` `📰 Reading` `✍️ Writing` `🎤 Speaking` `✅ Exercícios` — a aba ativa fica com fundo azul preenchido
- Card branco com o conteúdo da aba ativa
- Rodapé: botão primário centralizado "📝 Fazer o quiz deste módulo"

### 5.1 Aba "Aula" (lesson)
Texto corrido, didático. Estrutura: intro + N seções, cada seção com título, parágrafo explicativo e uma lista de exemplos bilíngues (inglês em negrito — tradução ao lado, dentro de uma caixa cinza-clara).

**Exemplo real (módulo "Primeiros Passos"):**
> Bem-vindo ao seu primeiro módulo de inglês! Aqui você vai aprender a se apresentar, saudar outras pessoas e conhecer o alfabeto em inglês. Vá com calma — cada passo pequeno te aproxima da fluência.
>
> **Saudações do dia a dia** — Usamos saudações diferentes dependendo da hora do dia e do nível de formalidade...
> - **Good morning!** — Bom dia!
> - **Good afternoon!** — Boa tarde!
> - **Good evening!** — Boa noite! (ao chegar)
> - **Good night!** — Boa noite! (ao se despedir para dormir)

### 5.2 Aba "Vocabulário"
Grade de cards (responsiva, tipo masonry/grid simples), 8 a 10 por módulo. Cada card:
- Palavra em inglês (negrito, grande) + transcrição fonética (cinza, menor) + 3 botõezinhos de bandeira 🇺🇸🇬🇧🇦🇺 (tocam a pronúncia em 3 sotaques via Web Speech API)
- Tradução em português (azul, negrito)
- Frase de exemplo em inglês (itálico/aspas) + tradução em cinza

**Exemplo real:** "Hello /həˈloʊ/ 🇺🇸🇬🇧🇦🇺 — Olá — 'Hello! How are you?' — Olá! Como você está?"

### 5.3 Aba "Gramática"
- Título da estrutura gramatical (ex: "Pronomes Pessoais (Subject Pronouns)")
- Parágrafo de explicação
- **Tabela** (cabeçalho cinza, bordas finas) — ex.: colunas "Inglês / Português / Exemplo", linhas I/you/he/she/it/we/they
- **Duas colunas lado a lado** "Certo" vs "Errado", cada linha com ✔ verde ou ✘ vermelho + frase de exemplo (em telas pequenas essas 2 colunas empilham em 1)

### 5.4 Aba "Listening"
Um ou mais "cards de áudio", cada um com:
- Título com bandeira do sotaque (ex: "🇺🇸 A Conversation at School")
- Botão secundário "▶ Ouvir" (lê o texto em voz alta via TTS, no sotaque indicado)
- Um `<details>` colapsável "Ver transcrição" que revela o texto completo
- 2-3 perguntas de compreensão em múltipla escolha, cada uma com botão "Verificar" e feedback inline (✔ Correto! / ✘ Resposta correta: X)

### 5.5 Aba "Reading"
Card com título, um texto de leitura (parágrafo em caixa cinza-clara) e as mesmas perguntas de compreensão em múltipla escolha com botão "Verificar" (mesmo padrão do listening, sem o player de áudio).

**Exemplo real de texto:** "Hi! My name is Sofia. I am from Portugal. Today is my first day at a new school..."

### 5.6 Aba "Writing"
1-2 exercícios abertos, cada um:
- Enunciado em negrito ("Exercício 1: Escreva 3 frases se apresentando...")
- Sugestão de mínimo de palavras
- `<textarea>` grande para o aluno escrever (o rascunho é salvo automaticamente no navegador enquanto digita)
- Contador de palavras ao vivo, alinhado à direita
- `<details>` colapsável "Ver um modelo de resposta" (resposta-modelo, não é correção automática)

### 5.7 Aba "Speaking"
Cards com:
- Frase entre aspas, grande (ex: "Nice to meet you.")
- Dica de pronúncia em cinza com 💡 (ex: "O 'ee' em 'meet' tem som longo, como em 'feet'.")
- Botões de sotaque 🇺🇸🇬🇧🇦🇺 para ouvir
- Botão secundário "🎙 Praticar pronúncia" (usa reconhecimento de voz do navegador; compara o que foi falado com a frase esperada e dá feedback: "✔ Ótima pronúncia!" ou "Quase lá. Você disse: '...'.")
- Se o navegador não suportar reconhecimento de voz, aparece um aviso e o botão de gravar não é exibido

### 5.8 Aba "Exercícios" (atividades de fixação — a mais rica em interação)
Seis blocos, cada um com seu próprio título de seção:
1. **Complete as lacunas** — frase com espaço em branco; input de texto livre OU um `<select>` quando há alternativas; botão "Verificar" por item; feedback revela a resposta certa se errar
2. **Associação de palavras** — lista de palavras à esquerda, cada uma com um `<select>` de tradução (opções embaralhadas) à direita; um único botão "Verificar tudo" no final checa todas as linhas de uma vez
3. **Organize as frases** — "chips" de palavras embaralhadas (botões) que o aluno clica para montar a frase em uma caixa de resposta acima; clicar num chip já usado o remove de volta; botão "Recomeçar" e botão "Verificar"
4. **Tradução** — frase em PT ou EN, input de texto livre, botão "Verificar" (aceita respostas com pequenas variações de digitação — comparação "aproximada")
5. **Ditado (listening)** — botão "🔊 Ouvir" lê uma frase em voz alta, input de texto para o aluno escrever o que ouviu, botão "Verificar" (também aproximado)
6. **Diálogo interativo** — simula uma conversa: falas de um personagem nativo aparecem como balão de chat com botão de tocar áudio; nos momentos em que é a vez do aluno, aparecem 2-3 botões de resposta (chips) para ele escolher a fala certa; ao escolher, mostra se acertou e, se não, qual seria a melhor resposta

---

## 6. TELA 5 — Quiz (motor genérico)

**Rotas:** `/level/:levelId/module/:moduleId/quiz` (quiz de módulo, 12 perguntas) · `/level/:levelId/test` (prova final, 20 perguntas) · também é a base visual do Teste de Nivelamento (Tela 2)
**Propósito:** avaliação com correção automática e nota mínima de 60% para "passar" e desbloquear o próximo módulo/nível.

### Conteúdo:
- Link "← Voltar ao módulo" (ou "Voltar ao nível X")
- **H1:** "Quiz — <Título do módulo>" ou "Prova Final — A1 Iniciante"
- Subtítulo cinza: "Acerte pelo menos 60% para concluir o módulo." (ou descrição da prova final)
- Lista numerada de perguntas, com **3 tipos de pergunta** misturados:
  - **Múltipla escolha** (padrão): 4 opções em radio buttons
  - **Verdadeiro/Falso**: 2 opções "Verdadeiro" / "Falso"
  - **Resposta curta**: campo de texto livre
- Botão primário "Corrigir respostas"
- **Após corrigir:** cada pergunta ganha fundo verde-claro ou rosa-claro, e logo abaixo das opções aparece "✔ Correto!" ou "✘ Resposta correta: <resposta>", seguido (quando existe) de uma explicação em texto pequeno cinza (ex.: "'Good morning' é usado até por volta do meio-dia."). Todos os inputs ficam desabilitados depois de corrigir.
- **Card de resultado final** (verde se passou, rosa se não passou):
  - "9/12 (75%) em 42s"
  - Mensagem de incentivo ("Muito bem! Você atingiu a nota mínima." ou "Você precisa de pelo menos 60%... Que tal revisar e tentar de novo?")
  - Se ganhou pontos: "+18 pontos!"
  - Botões: "Refazer quiz" (secundário) + "Voltar ao módulo" (primário) +, se passou e há próximo conteúdo, "Próximo módulo →" ou "Ir para o nível B1"

### Exemplos reais de perguntas (prova final A1, para o mock):
- MC: "Choose the correct greeting for the morning." → Good night / **Good morning** / Goodbye / Good evening
- V/F: "'There is' is used with plural nouns." → Falso
- Curta: "Write the number: 10" → ten

---

## 7. TELA 6 — Flashcards

**Rotas:** `/flashcards` (todos os níveis) · `/flashcards/:levelId` (um nível só)
**Propósito:** revisão de vocabulário com repetição espaçada (sistema Leitner de 5 caixas — quem erra volta pra caixa 1, quem acerta sobe de caixa e some da fila por mais tempo).

### Conteúdo:
- Link "← Voltar"
- **H1:** "🗂 Flashcards — A1 — Iniciante" (ou "Todos os níveis")
- "Cartão 3 de 48" (contador)
- **O cartão em si**, centralizado, grande:
  - **Frente:** palavra em inglês grande (ex: "Market"), fonética abaixo, botão "🔊 Ouvir"
  - Botão primário "Mostrar tradução"
  - **Ao clicar, revela o verso** (mesma caixa, sem virar/flip animado hoje): tradução grande em azul (ex: "Mercado") + frase de exemplo com tradução
  - Depois de revelar, os botões mudam para "😕 Não lembrei" (secundário) e "😀 Lembrei" (primário) — a escolha decide se a palavra volta rápido ou demora mais pra reaparecer
- **Estados vazios** (substituem o cartão por uma caixa cinza pontilhada com mensagem):
  - Nenhum vocabulário cadastrado ainda: "Ainda não há vocabulário cadastrado aqui. Explore um módulo primeiro!"
  - Nada pendente de revisão agora: "🎉 Nenhum cartão pendente de revisão agora! Volte mais tarde — a repetição espaçada ajuda a memorizar melhor."
  - Terminou a rodada atual: "🎉 Você revisou todos os 12 cartões pendentes! Volte mais tarde para a próxima rodada."

---

## 8. Estados e microinterações transversais (valem para várias telas)

- **Bloqueado vs desbloqueado vs concluído**: usado em módulos (tela 3) e é o principal indicador de progresso — hoje é só um emoji (🔒/▶/✅), é um ótimo candidato a virar um componente visual mais rico (badge, contorno, etc.)
- **Feedback de certo/errado**: sempre a mesma linguagem visual — verde para certo, vermelho/rosa para errado, sempre mostrando a resposta correta quando errar (regra de produto: nunca deixar o aluno sem saber qual era a resposta certa)
- **Progresso local**: barra de progresso simples (fill colorido dentro de trilho cinza) usada nos cards de nível
- **Empty states**: sempre uma caixa com borda pontilhada + emoji + frase amigável (nunca uma tela em branco)
- **Sem suporte do navegador**: quando reconhecimento de voz não está disponível, a interface se adapta removendo o botão e avisando em texto — não quebra nem trava

---

## 9. Responsividade

Breakpoint único hoje: `640px`. Abaixo dele: menu do topo quebra em várias linhas, título da home encolhe, a comparação "Certo/Errado" da gramática vira 1 coluna (era 2), as abas do módulo encolhem fonte e padding. O grid de cards de nível e de vocabulário já é fluido (`auto-fit`/`minmax`) e se adapta sozinho. Não há tratamento especial para tablet — só mobile (<640px) vs desktop.

---

## 10. Tom de voz / diretrizes de copy (para manter na hora de redesenhar)

- Sempre em português para instruções/feedback, sempre em inglês para o conteúdo a ser aprendido
- Frases curtas, acolhedoras, nunca alarmistas mesmo quando o aluno erra ("Você precisa de pelo menos 60%... Que tal revisar o conteúdo e tentar de novo?" — nunca "Você falhou")
- Emojis usados com moderação como reforço visual, não como decoração aleatória
- Nunca esconder a resposta certa do aluno — é uma regra de produto, não só de copy
