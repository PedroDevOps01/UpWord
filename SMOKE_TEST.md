# UpWord — Roteiro de Smoke Test

Roteiro manual para rodar antes de publicar qualquer alteração. Sirva a pasta localmente
(`python3 -m http.server 8080` ou similar) e abra `http://localhost:8080` num navegador
(Chrome/Safari/Firefox — desktop e mobile, se possível). Verifique o console do navegador
(DevTools) em cada passo: nenhuma mensagem de erro deve aparecer.

Antes de tudo, rode o validador de conteúdo:

```
node scripts/validate-content.js
```

Deve terminar com `OK: nenhum erro encontrado`. Se houver `Erros`, corrija antes de seguir.

## 1. Navegação básica

- [ ] Home carrega sem erro no console.
- [ ] Os 6 níveis (A1–C2) aparecem na trilha, com progresso "0/6 módulos" em cada.
- [ ] As 3 trilhas extras (Viagem, Entrevista, Business) aparecem em "Trilhas extras".
- [ ] Nivelamento (`#/placement`) mostra 24 perguntas (4 por nível) e permite responder.
- [ ] Flashcards (`#/flashcards`) mostra o deck completo, com filtro por nível e checkbox de eletivos.

## 2. Bloqueio de módulo e prova final (rotas)

- [ ] Abrir `#/level/a1` mostra só o módulo 1 desbloqueado; os demais aparecem com cadeado.
- [ ] Digitar diretamente na barra de endereço `#/level/a1/module/a1-m5/lesson` (sem ter concluído
      os módulos anteriores) redireciona para a página do nível A1 com um aviso
      "ainda não foi liberado" — não deve renderizar o conteúdo do módulo.
- [ ] Digitar diretamente `#/level/a1/test` sem ter concluído todos os módulos redireciona para o
      nível com aviso — não deve abrir a prova final.
- [ ] Depois de concluir o módulo 1 (quiz ≥ 60%), o módulo 2 desbloqueia automaticamente.
- [ ] Depois de concluir todos os módulos de um nível, a prova final desbloqueia.
- [ ] Recarregar a página (F5) em qualquer uma dessas rotas mantém o comportamento acima.

## 3. Áudio (listening / reading / ditado)

- [ ] A1-M1, A2-M1, B1-M1, B2-M1, C1-M1, C2-M1 e os 3 eletivos (módulo 1) têm um player de áudio
      real na aba Listening, rotulado "🔊 Áudio: TTS pré-gerado" — play/pause, barra de posição,
      velocidade (0.75x/1x/1.25x) e reiniciar devem funcionar sem recarregar a página.
- [ ] Qualquer outro item de listening mostra o botão "Ouvir com voz do navegador (TTS)" — nunca
      afirma ser áudio real.
- [ ] Reading mostra "Ouvir texto completo (voz do navegador — TTS)" usando o mesmo player.
- [ ] Simular um arquivo de áudio quebrado (renomear temporariamente um `.mp3` em `assets/audio/`)
      não trava a tela — o player mostra erro e cai para o botão de TTS.
- [ ] No exercício de Ditado, o texto ouvido não aparece em texto puro no "Ver código-fonte" da
      página antes de responder.
- [ ] Botões 🇺🇸🇬🇧🇦🇺 tocam o áudio; se a voz pedida não existir no navegador, aparece um aviso de
      fallback em vez de fingir que o sotaque foi usado.

## 4. Speaking

- [ ] Estado inicial explica em português o que será gravado antes de pedir permissão de microfone.
- [ ] Conceder permissão: grava, mostra estado "gravando", permite parar, ouvir a própria gravação
      e apagar.
- [ ] Negar permissão: mostra mensagem clara e oferece caminho alternativo (ouvir modelo + botão
      "Pratiquei"), a tela nunca fica vazia.
- [ ] Se o navegador tiver reconhecimento de voz, aparece "similaridade de transcrição" (não "nota de
      pronúncia") com rubrica leve (inteligibilidade/completude/ritmo) e aviso de que não é
      certificação de fluência.
- [ ] O botão nunca fica preso em "gravando" (testar fechar/reabrir a aba durante a gravação).

## 5. Writing

- [ ] Digitar no campo de resposta salva automaticamente ("Rascunho salvo neste navegador ✓").
- [ ] Recarregar a página mantém o rascunho.
- [ ] "Revisar minha resposta" mostra checklist com "passou"/"revisar"/"não verificável" por
      critério — nunca afirma correção gramatical plena.
- [ ] "Ver um modelo de resposta" só aparece depois de clique explícito, com aviso de que é só um
      exemplo.
- [ ] "Limpar rascunho" pede confirmação antes de apagar.
- [ ] Exportar progresso e conferir que o JSON baixado contém `writingDrafts` com os textos salvos.

## 6. Quiz e prova final

- [ ] Responder certo, errado, verdadeiro/falso, resposta curta e deixar sem responder — cada caso
      mostra feedback e (quando existir) explicação em português.
- [ ] Ao final do quiz, a tela de resultado lista as questões erradas com sua resposta, a resposta
      certa, a explicação e um link para revisar o conteúdo relacionado.
- [ ] "Revisar quiz" reinicia o mesmo quiz do zero.
- [ ] Nivelamento permite refazer sem apagar tentativas anteriores (aparecem na lista de histórico).

## 7. Flashcards

- [ ] Mostra "X cartões no deck · Y pendentes agora".
- [ ] Trocar o filtro de nível atualiza o deck na hora.
- [ ] Marcar "Incluir trilhas extras" adiciona os eletivos ao deck.
- [ ] Revelar um cartão mostra a frase de exemplo e "Visto em `<Nível>` — `<Módulo>`".
- [ ] Atalhos de teclado funcionam: Espaço/Enter revela; ←/→ marcam não lembrei/lembrei.
- [ ] Zerar os cartões pendentes mostra a data da próxima revisão prevista.

## 8. Exportar / importar / resetar

- [ ] Exportar baixa um `.json` válido.
- [ ] Importar esse mesmo arquivo restaura o progresso (recarrega a página).
- [ ] Importar um arquivo JSON inválido (ex.: `{"points": "abc"}`) mostra erro compreensível, sem
      travar nem substituir o progresso atual.
- [ ] Importar um `.json` que não é JSON (ex. um `.txt` renomeado) também mostra erro compreensível.
- [ ] "Apagar todo o meu progresso salvo" pede confirmação explícita mencionando que não pode ser
      desfeito.

## 9. Preferências e acessibilidade

- [ ] Alternar tema claro/escuro e tamanho da fonte funciona e persiste ao recarregar.
- [ ] Navegar só com teclado (Tab/Shift+Tab/Enter/Espaço) chega em todos os controles principais,
      com foco visível.
- [ ] Depois de trocar de rota, o foco vai para o título da tela (sem roubar foco durante digitação
      em campos de texto).
- [ ] Testar em 390px (celular), 768px (tablet) e 1366px (desktop): nenhuma barra de rolagem
      horizontal na página; as abas do módulo rolam horizontalmente em vez de espremer.
- [ ] Com `prefers-reduced-motion` ativado no SO, as transições ficam praticamente instantâneas.

## 10. Conteúdo

- [ ] `node scripts/validate-content.js` sem erros (ver topo deste documento).
- [ ] A1-M2 tem todos os números de 0 a 20 no vocabulário.
- [ ] A1-M3 mostra a tabela formal de "There is / There are" na aba Aula **e** na aba Gramática.
- [ ] C1-M6 não mostra mais o título "Verbos Coletores".
- [ ] Módulos de C1 e C2 têm 2 leituras, 2 listenings, 3 tarefas de writing (uma maior, com
      `minSentences`/`requiredStructures`/`targetWords`) e uma tarefa de speaking contextualizada
      (além do conteúdo original), com 25-30 itens de vocabulário e 24-30 perguntas de quiz por módulo.

## 11. Currículo, referência gramatical e progresso por habilidade

- [ ] `#/curriculum` lista os 39 módulos com objetivo ("Ao final, o aluno consegue..."),
      pré-requisitos e evidência de domínio, com aviso de que não é certificação oficial CEFR.
- [ ] `#/grammar` (link em "Referência gramatical" na home e no rodapé da aba Gramática) permite
      buscar um tópico gramatical e mostra em qual módulo ele foi ensinado.
- [ ] A home mostra "Progresso por habilidade" (vocabulário/gramática/listening/reading/writing/
      speaking) com contagem de módulos por habilidade.
- [ ] Ao final do nivelamento e de quizzes com perguntas marcadas por `skill`, aparece um resumo
      "Resultado por habilidade".
- [ ] Módulo mostra "X/9 sessões" com pontos indicando quais sessões já foram concluídas e qual é o
      próximo passo; a lista de módulos do nível também mostra essa contagem.
- [ ] Abrir uma aba sem responder nada NÃO marca a sessão como concluída — só marcar
      explicitamente ("Marcar sessão como concluída" em Aula/Vocabulário/Gramática) ou uma ação real
      (responder corretamente em listening/reading, revisar writing, tentar speaking) conta.
- [ ] Com muitos flashcards pendentes (15+), a home recomenda revisar antes de continuar um módulo novo.
- [ ] Certificado baixado (PNG) inclui a frase "não é uma certificação oficial de proficiência".

## Limitação conhecida do ambiente de teste

O Chrome headless usado para gerar screenshots automatizados neste projeto não respeita larguras de
janela abaixo de ~500px (limitação do ambiente, confirmada via depuração de `window.innerWidth`) —
por isso a validação real em 390px (celular) precisa ser feita manualmente num navegador de verdade
ou no modo responsivo do DevTools, não só nos screenshots automatizados já capturados.
