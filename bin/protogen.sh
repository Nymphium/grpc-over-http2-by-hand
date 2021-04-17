#!/usr/bin/bash

set -eu

protoc \
  --plugin="protoc-plugin-ts=$(npx which protoc-gen-ts)" \
  --js_out="import_style=commonjs,binary:$2" \
  --ts_out="$2" \
  $1
