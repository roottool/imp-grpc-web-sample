FROM golang:1.12.6

ENV GO111MODULE=on

WORKDIR /go/src/imp-grpc-web-sample
COPY . .
RUN go get -u github.com/pilu/fresh
CMD ["fresh"]
EXPOSE 9999
