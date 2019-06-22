// package: 
// file: helloWorld.proto

import * as helloWorld_pb from "./helloWorld_pb";
import {grpc} from "@improbable-eng/grpc-web";

type helloWorldServicegetHelloWorld = {
  readonly methodName: string;
  readonly service: typeof helloWorldService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof helloWorld_pb.hellowWorldRequest;
  readonly responseType: typeof helloWorld_pb.helloWorldResponse;
};

export class helloWorldService {
  static readonly serviceName: string;
  static readonly getHelloWorld: helloWorldServicegetHelloWorld;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class helloWorldServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getHelloWorld(
    requestMessage: helloWorld_pb.hellowWorldRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: helloWorld_pb.helloWorldResponse|null) => void
  ): UnaryResponse;
  getHelloWorld(
    requestMessage: helloWorld_pb.hellowWorldRequest,
    callback: (error: ServiceError|null, responseMessage: helloWorld_pb.helloWorldResponse|null) => void
  ): UnaryResponse;
}

