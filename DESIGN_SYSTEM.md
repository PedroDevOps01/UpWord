# UpWord Design System — "The Ascent"

Identidade visual da plataforma UpWord. O nome ("up" + "word") guia todas as decisões: a marca comunica **progresso e ascensão gradual** através das palavras — não é só um nome no topo da página.

## Conceito

Um único motivo visual — **degraus ascendentes** — se repete de forma funcional (não decorativa) em toda a plataforma:

- **Logotipo:** 4 barras crescentes, a última em âmbar.
- **Trilha de níveis (home):** os 6 níveis são renderizados como terraços em diagonal, cada um mais alto que o anterior.
- **Barra de progresso do quiz:** degraus (não uma barra lisa) que acendem conforme o aluno avança.
- **Abas do módulo:** pequenos traços ascendentes sob cada aba.

## Paleta

### Núcleo da marca

| Nome | Hex | Uso |
|---|---|---|
| Summit Ink | `#14213D` | Texto principal |
| Basecamp Mist | `#F6F7F4` | Fundo |
| Trail Teal | `#1E8C82` | Ação primária (botões, links, foco) |
| Ascent Amber | `#E8A33D` | Conquista — badges, pontos, celebrações |
| Cloudline Gray | `#7C8798` | Texto secundário, bordas |

### Escala de Elevação (por nível — um único degradê teal → índigo, não cores arco-íris)

| Nível | Hex |
|---|---|
| A1 | `#128077` |
| A2 | `#146E93` |
| B1 | `#1F5C9E` |
| B2 | `#3A4EA0` |
| C1 | `#4B3E93` |
| C2 | `#34285F` |

Todas as 6 cores têm contraste ≥ 4.5:1 contra branco (WCAG AA para texto normal).

### Semânticas

| Nome | Hex | Uso |
|---|---|---|
| Moss | `#2F8F5B` | Resposta correta |
| Coral | `#D9463A` | Resposta incorreta |

## Tipografia

- **Fraunces** (serifada) — títulos, headline, placar de resultado. Personalidade editorial, evita o clichê de sans geométrica genérica.
- **IBM Plex Sans** — corpo de texto (aulas, reading, UI). Alta legibilidade para leitura longa.
- **IBM Plex Mono** — utilitário: fonética (`/həˈloʊ/`), badge de nível, contadores. Dá textura de "dado/precisão".

Carregadas via Google Fonts em `index.html`, com fallback para fontes do sistema.

## Tokens CSS

Todos os valores (cor, espaçamento, raio, sombra) ficam em `css/style.css`, dentro de `:root`, como variáveis CSS (`--ink`, `--teal`, `--sp-4`, `--radius-md` etc.) — nenhum valor mágico solto nos componentes.

## Componentes principais

- `.btn` / `.btn-primary` / `.btn-secondary` — botões, usados em toda a plataforma.
- `.terrace` / `.terrace-card` / `.terrace-riser` — a trilha ascendente (desktop); `.step-list` é a versão empilhada para mobile.
- `.module-item` / `.module-step-marker` — lista de módulos do nível, com ícone de bloqueado/desbloqueado/concluído.
- `.module-tabs` / `.module-tab` / `.module-tab-tick` — abas do módulo com o traço ascendente.
- `.quiz-shell` / `.quiz-progress` / `.quiz-card` / `.option-row` / `.quiz-feedback-banner` / `.result-panel` — motor do quiz (uma pergunta por vez, feedback imediato).
- `.flashcard` — cartão de repetição espaçada.

Ícones são SVGs inline gerados por `js/icons.js` (função `Icon(nome, opções)`), não emoji — exceção feita às bandeiras de sotaque (🇺🇸🇬🇧🇦🇺) e reações de flashcard (😀😕), mantidas por clareza funcional.

## Acessibilidade

- Contraste mínimo AA em todos os textos e elementos interativos.
- Foco de teclado visível (`:focus-visible`) com contorno âmbar em toda a plataforma.
- `prefers-reduced-motion: reduce` desativa todas as transições/animações (inclusive o micro-efeito de "subida" no feedback do quiz).
- Tipografia e espaçamento pensados para leitura prolongada (a plataforma é para estudar, não só navegar).
