# DDD Lambda Layer

Este projeto estrutura uma aplicação CRUD de usuário simples utilizando lambdas e serverless como plataforma.

O principal diferencial desse projeto é se aproveitar das **lambda-layers** para agregar todas as dependencias de uma lambda incluindo não apenas libs externas mas também as outras camadas da aplicação compartilhando o código de maneira mais inteligente e isolando a lambda para ser apenas um **executor** sem regras de negócio.

## Start

Para rodar o projeto é necessário setar as credenciais da AWS dentro do arquivo ./deploy/main.tf:

```
provider "aws" {
  region     = "us-east-1"
  access_key = "INSIRA SUA ACCESS KEY AQUI"
  secret_key = "INSIRA SUA SECRET KEY AQUI"
}
```

E em seguida rode o comando de **build** e o comando de **deploy** nessa ordem:

```bash
pnpm run build
```

```bash
pnpm run deploy
```

Isso irá compilar todo o codigo **Typescript** em **Javascript** e executar o **terraform** que irá criar todos os recursos necessários na sua conta AWS para o projeto funcionar.