# Proveniência dos arquivos de áudio

Todos os arquivos `.mp3` nesta pasta são **voz sintética (TTS) pré-gerada em arquivo**,
não gravações humanas. Isso é intencional e está documentado na própria interface: o
player mostra "🔊 Áudio: TTS pré-gerado (voz sintética em arquivo, não é gravação humana)"
para qualquer item que use um desses arquivos.

## Como foram gerados

- Ferramenta: comando `say` do macOS (parte do sistema operacional, sem custo, sem chave
  de API, sem dependência externa) + `ffmpeg` para converter o `.aiff` gerado em `.mp3`.
- Script reprodutível: `scripts/generate-audio.sh`, com os textos-fonte em
  `scripts/audio-source/*.txt`.
- Vozes de sistema usadas (todas embutidas no macOS, não são conteúdo de terceiros):

| Voz | Variante/idioma | Sotaque usado no app |
|---|---|---|
| Samantha | en_US | americano |
| Daniel | en_GB | britânico |
| Karen | en_AU | australiano |

## Licenciamento

As vozes de sistema do macOS (Samantha, Daniel, Karen, etc.) são distribuídas pela Apple
como parte do sistema operacional e ficam disponíveis para qualquer aplicativo rodando
nesse sistema invocar via `say`/`AVSpeechSynthesizer`. Gerar um arquivo de áudio a partir
dessas vozes não é diferente, do ponto de vista de licenciamento, de tocá-las ao vivo via
`SpeechSynthesis` no navegador (o que o restante do app já faz) — é a mesma voz sintética,
só que salva em arquivo em vez de calculada em tempo real. Não há gravação de voz humana,
banco de áudio de terceiros, nem chave/serviço pago envolvido.

## Arquivos

| Arquivo | Nível/trilha | Módulo | Fonte do texto |
|---|---|---|---|
| a1-m1-listen-0.mp3 | A1 | a1-m1 | scripts/audio-source/a1-m1-listen-0.txt |
| a2-m1-listen-0.mp3 | A2 | a2-m1 | scripts/audio-source/a2-m1-listen-0.txt |
| b1-m1-listen-0.mp3 | B1 | b1-m1 | scripts/audio-source/b1-m1-listen-0.txt |
| b2-m1-listen-0.mp3 | B2 | b2-m1 | scripts/audio-source/b2-m1-listen-0.txt |
| c1-m1-listen-0.mp3 | C1 | c1-m1 | scripts/audio-source/c1-m1-listen-0.txt |
| c2-m1-listen-0.mp3 | C2 | c2-m1 | scripts/audio-source/c2-m1-listen-0.txt |
| travel-m1-listen-0.mp3 | Eletiva: Viagem | travel-m1 | scripts/audio-source/travel-m1-listen-0.txt |
| interview-m1-listen-0.mp3 | Eletiva: Entrevista | interview-m1 | scripts/audio-source/interview-m1-listen-0.txt |
| business-m1-listen-0.mp3 | Eletiva: Business | business-m1 | scripts/audio-source/business-m1-listen-0.txt |

## Pendência conhecida (não resolvida nesta fase)

O pedido original de evolução da plataforma pede a substituição progressiva desses TTS por
**gravações humanas licenciadas**, começando por A1-A2 e depois C1-C2, com diversidade de
vozes/idades/gêneros/sotaques. Isso exige acesso a locutores reais ou a um banco de áudio
com licença clara (ex.: Creative Commons, domínio público, ou licença comercial paga) —
nenhuma dessas fontes está disponível neste ambiente de desenvolvimento. A arquitetura do
player (`js/player.js`) já está pronta para receber `audioSrc` reais no lugar dos atuais
assim que gravações licenciadas existirem; a troca é só de dado (`audioSrc`/`audioSource`
no item de listening correspondente em `js/data/*.js`), sem mudança de código.
