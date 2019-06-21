package main

import (
	"fmt"
	"log"
	"net"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"impGrpcWebSample/impGrpcWebSample"
)

const (
    port = ":9090"
)

// server is used to implement helloworld.GreeterServer.
type server struct{}

// SayHello implements helloworld.GreeterServer
func (s *server) SayHello() (*pb.getHelloWorld, error) {
    return &pb.getHelloWorld, nil
}

func main() {
    lis, err := net.Listen("tcp", port)
	if err != nil {
        log.Fatalf("failed to listen: %v", err)
	}

	s := grpc-web.NewServer()
    pb.RegisterGreeterServer(s, &server{})
    // Register reflection service on gRPC server.
    reflection.Register(s)
    if err := s.Serve(lis); err != nil {
        log.Fatalf("failed to serve: %v", err)
    }
}
