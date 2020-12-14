FROM node:lts-alpine

WORKDIR /client

COPY package*.json /client/

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["yarn", "serve"]

