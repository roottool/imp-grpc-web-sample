// package: impGrpcWebSample
// file: imp-grpc-web-sample.proto

import * as jspb from "google-protobuf";

export class hellowWorldRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): hellowWorldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: hellowWorldRequest): hellowWorldRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: hellowWorldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): hellowWorldRequest;
  static deserializeBinaryFromReader(message: hellowWorldRequest, reader: jspb.BinaryReader): hellowWorldRequest;
}

export namespace hellowWorldRequest {
  export type AsObject = {
  }
}

export class helloWorldResponse extends jspb.Message {
  getReturntext(): string;
  setReturntext(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): helloWorldResponse.AsObject;
  static toObject(includeInstance: boolean, msg: helloWorldResponse): helloWorldResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: helloWorldResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): helloWorldResponse;
  static deserializeBinaryFromReader(message: helloWorldResponse, reader: jspb.BinaryReader): helloWorldResponse;
}

export namespace helloWorldResponse {
  export type AsObject = {
    returntext: string,
  }
}

