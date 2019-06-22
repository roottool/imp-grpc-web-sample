// package: 
// file: helloWorld.proto

var helloWorld_pb = require("./helloWorld_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var helloWorldService = (function () {
  function helloWorldService() {}
  helloWorldService.serviceName = "helloWorldService";
  return helloWorldService;
}());

helloWorldService.getHelloWorld = {
  methodName: "getHelloWorld",
  service: helloWorldService,
  requestStream: false,
  responseStream: false,
  requestType: helloWorld_pb.hellowWorldRequest,
  responseType: helloWorld_pb.helloWorldResponse
};

exports.helloWorldService = helloWorldService;

function helloWorldServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

helloWorldServiceClient.prototype.getHelloWorld = function getHelloWorld(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(helloWorldService.getHelloWorld, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.helloWorldServiceClient = helloWorldServiceClient;

