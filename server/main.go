package main

import (
	"log"
    "net"
    "golang.org/x/net/context"
    "google.golang.org/grpc"
    "google.golang.org/grpc/reflection"
	pb "imp-grpc-web-sample-server/helloWorld"
)

const (
    port = ":9090"
)

// server is used to implement helloworld.GreeterServer.
type server struct{}

// GetHelloWorld implements helloworld.GreeterServer
func (s *server) GetHelloWorld(ctx context.Context, in *pb.HellowWorldRequest) (*pb.HelloWorldResponse, error) {
    result := &pb.HelloWorldResponse{
        ReturnText: "Hello World!",
    }
    return result, nil
}

func main() {
    lis, err := net.Listen("tcp", port)
	if err != nil {
        log.Fatalf("failed to listen: %v", err)
	}

    grpcServer := grpc.NewServer()
    pb.RegisterHelloWorldServiceServer(grpcServer, &server{})
    // Register reflection service on gRPC server.
    reflection.Register(grpcServer)
    if err := grpcServer.Serve(lis); err != nil {
        log.Fatalf("failed to serve: %v", err)
    }
}
