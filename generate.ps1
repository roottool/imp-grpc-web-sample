#!/bin/sh

$PROJECT_NAME="imp-grpc-web-sample"
$CLIENT_OUTDIR="./client/src/${PROJECT_NAME}"
$SERVER_OUTPUT_DIR="./server/${PROJECT_NAME}"
$PROTOC_GEN_TS_PATH="D:/Documents/VisualStudioCode/imp-grpc-web-sample/client/node_modules/.bin/protoc-gen-ts.cmd"

mkdir -p ${CLIENT_OUTDIR}
mkdir -p ${SERVER_OUTPUT_DIR}

protoc --proto_path=protocol "impGrpcWebSample.proto" `
    --go_out="plugins=grpc:${SERVER_OUTPUT_DIR}" `
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" `
    --js_out="import_style=commonjs,binary:${CLIENT_OUTDIR}" `
    --ts_out="service=true:${CLIENT_OUTDIR}"
