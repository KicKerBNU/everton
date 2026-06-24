#!/usr/bin/env bash
# Normalize all book cover images to the same pixel dimensions (286x320).
# Scales each cover to fit inside the frame and pads the canvas so nothing is cropped.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC_DIR="$ROOT_DIR/public"
WIDTH=286
HEIGHT=320
BG="#f8fafc"

FILES=(
  "book-nadaseracomoantes.jpg"
  "book-starrymessenger.jpg"
  "book-diaryofemelyfrank.jpg"
  "book-richestmaninbabylon.png"
  "book-the\$100startup.jpg"
  "book-1984.jpg"
  "book-childrenofbloodandbone.jpg"
  "book-thelastrestaurantinparis.jpg"
  "book-themanwhosolvedthemarket.jpg"
  "book-principles.jpg"
  "book-javiermilei.jpg"
  "book-mariekondo.jpg"
  "book-six.jpg"
  "book-meditations.jpeg"
  "book-intelligentinvestor.jpg"
)

for file in "${FILES[@]}"; do
  input="$PUBLIC_DIR/$file"
  if [[ ! -f "$input" ]]; then
    echo "Skipping missing file: $file"
    continue
  fi

  magick "$input" \
    -resize "${WIDTH}x${HEIGHT}" \
    -background "$BG" \
    -gravity center \
    -extent "${WIDTH}x${HEIGHT}" \
    "$input"

  echo "Normalized $file"
done

echo "Done. All covers are ${WIDTH}x${HEIGHT}px."
