FROM  node:10.16.0-alpine

WORKDIR /client

COPY . .
RUN yarn install
CMD ["yarn", "run", "start"]
EXPOSE 8080
