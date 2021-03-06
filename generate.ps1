#!/bin/sh

$PROTOCOL_NAME="helloWorld"
$CLIENT_OUTDIR="./client/src/${PROTOCOL_NAME}"
$SERVER_OUTPUT_DIR="./server/${PROTOCOL_NAME}"
$PROTOC_GEN_TS_PATH="D:/Documents/VisualStudioCode/imp-grpc-web-sample/client/node_modules/.bin/protoc-gen-ts.cmd"

mkdir -p ${CLIENT_OUTDIR}
mkdir -p ${SERVER_OUTPUT_DIR}

protoc --proto_path=protocol "${PROTOCOL_NAME}.proto" `
    --go_out="plugins=grpc:${SERVER_OUTPUT_DIR}" `
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" `
    --js_out="import_style=commonjs,binary:${CLIENT_OUTDIR}" `
    --ts_out="service=true:${CLIENT_OUTDIR}"
