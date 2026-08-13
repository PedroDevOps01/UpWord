#!/usr/bin/env bash
# Gera os arquivos de áudio de amostra (1 por nível A1-C2 + 1 por trilha
# eletiva) usando as vozes de sistema do macOS (say) e convertendo para mp3
# com ffmpeg. São vozes sintéticas gravadas em arquivo — não gravações
# humanas — por isso o app rotula esses itens como "TTS pré-gerado" e nunca
# como "gravação real". Requer macOS com os comandos `say` e `ffmpeg`
# disponíveis; não depende de nenhuma API paga ou chave de acesso.
#
# Uso: ./scripts/generate-audio.sh

set -euo pipefail
cd "$(dirname "$0")/.."

SRC_DIR="scripts/audio-source"
OUT_DIR="assets/audio"
mkdir -p "$OUT_DIR"

# id:voice — voice escolhida para bater com o "accent" do item de listening
# correspondente em js/data/*.js (american -> Samantha/en_US,
# british -> Daniel/en_GB, australian -> Karen/en_AU).
ITEMS=(
  "a1-m1-listen-0:Samantha"
  "a2-m1-listen-0:Samantha"
  "b1-m1-listen-0:Samantha"
  "b2-m1-listen-0:Daniel"
  "c1-m1-listen-0:Daniel"
  "c2-m1-listen-0:Daniel"
  "travel-m1-listen-0:Daniel"
  "interview-m1-listen-0:Samantha"
  "business-m1-listen-0:Daniel"
)

for entry in "${ITEMS[@]}"; do
  id="${entry%%:*}"
  voice="${entry##*:}"
  txt="$SRC_DIR/$id.txt"
  aiff="$OUT_DIR/$id.aiff"
  mp3="$OUT_DIR/$id.mp3"

  if [ ! -f "$txt" ]; then
    echo "AVISO: fonte de texto não encontrada para $id ($txt), pulando." >&2
    continue
  fi

  echo "Gerando $mp3 (voz: $voice)..."
  say -v "$voice" -o "$aiff" -f "$txt"
  ffmpeg -y -loglevel error -i "$aiff" -codec:a libmp3lame -qscale:a 4 "$mp3"
  rm -f "$aiff"
done

echo "Concluído. Arquivos em $OUT_DIR/"
