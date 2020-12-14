# Solução

[![Actions Status](https://github.com/gabrieloak/Trabalho-Individual-2020-1/workflows/CI/badge.svg)](https://github.com/GabrielOak/Trabalho-Individual-2020-1/actions) 
![CD](https://github.com/GabrielOak/Trabalho-Individual-2020-1/workflows/CD/badge.svg) 
[![Maintainability](https://api.codeclimate.com/v1/badges/6bffd7d67adef8efc3bb/maintainability)](https://codeclimate.com/github/GabrielOak/Trabalho-Individual-2020-1/maintainability)

Aluno: Gabriel de Jesus Carvalho  
Matrícula: 16/0120918  

---

## Containerização

Para realizar a containerização, foi utilizado docker e docker-compose, onde cada subsistema (api, client e banco de dados) fica isolado em um container e também foi feito o uso de variáveis de ambiente.

--- 
## Integração contínua

Para a integração contínua foi utilizado o GitHub actions, que faz o build e teste dos códigos submetidos. Para a coleta de métricas foi utilizado o Code Climate, que faz a análise de qualidade dos PRs.

---

## Deploy Contínuo

O deploy da aplicação foi feito no DigitalOcean. Para realizar o deploy contínuo, foi feito um job no GitHub actions, que realiza o deploy toda vez que for feita alguma alteração na branch master.

Para acessar a aplicação em deploy:

Client: [http://157.245.84.59:8080](http://157.245.84.59:8080)   
Api: [http://157.245.84.59:3000](http://157.245.84.59:3000)

---

## Como executar o projeto

Para rodar o projeto é necessário criar um arquivo .env na raiz do projeto.

Exemplo do .env:

    DATABASE_PASSWORD=postgres
    DATABASE_USERNAME=postgres
    DATABASE_HOST=db
    VUE_APP_API_HOST=localhost:3000

Para subir os containers:

    docker-compose up

Para subir os containers sem os logs:  
    
    docker-compose up -d 

Para criar o banco de dados, rode o comando:

    docker-compose run api rake db:create

Para rodar a migração:

    docker-compose run api rake db:migrate


Após rodar os comandos, o client e a api deverão estar disponiveis nos endereços: 

- Api - `localhost:3000`
- Client - `localhost:8080`

---

## Testes

Para executar os testes da api, basta exetucar o comando:

    docker-compose run api bundle exec rails test 

Para executar os testes do cliente, basta executar o comando:

    docker-compose run client yarn run test:unit

---

[GitHub actions](https://github.com/GabrielOak/Trabalho-Individual-2020-1/actions)

[Code Climate](https://codeclimate.com/github/GabrielOak/Trabalho-Individual-2020-1)

---