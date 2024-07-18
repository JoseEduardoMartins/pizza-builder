# Pizza Builder - Front-end

Este projeto é uma aplicação web desenvolvida com Next, TypeScript e Tailwind CSS, destinada à criação de pizzas personalizadas. O sistema permite aos clientes selecionar o tamanho e sabor da pizza, adicionar personalizações e visualizar um resumo detalhado do pedido, incluindo preço final e tempo de preparo.

## Pré-requisitos

Certifique-se de ter as seguintes dependências instaladas antes de iniciar:

Opção 1

- [Node.js](https://nodejs.org/) (versão 18.0.0 ou superior)
- Pacotes [npm](https://www.npmjs.com/) (Node Package Manager)

Opção 2

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Instruções de Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/JoseEduardoMartins/test-frontend-assemble-pizza.git

cd test-frontend-assemble-pizza
```

### 2. Configurar ambiente.

#### Opção 1: Local

- Instale as dependências:

  ```bash
  npm install
  ```

### 4. Executar a Aplicação

#### Opção 1: Local

- Inicie a aplicação em modo de desenvolvimento:

  ```bash
  npm run dev
  ```

- Para criar uma versão otimizada para produção:

  ```bash
  npm run build
  ```

Os arquivos resultantes estarão na pasta build/.

#### Opção 2: Utilizando Docker

- Inicie a aplicação:

  ```bash
  docker-compose up
  ```

- Crie imagens antes de iniciar contêineres:

  ```bash
  docker-compose up --build
  ```

- Interrompe contêineres e remove contêineres, redes, volumes e imagens criadas pelo `up`:

  ```bash
  docker-compose down
  ```

Acesse http://localhost:3000 em seu navegador.

## Funcionalidades

1. Seleção de Tamanho: Escolha entre tamanhos Pequeno, Médio e Grande, cada um com seu preço e tempo de preparo específico.
2. Escolha de Sabor: Opções incluem Calabresa, Marguerita e Portuguesa, com a Portuguesa adicionando um tempo de preparo extra.
3. Personalizações: Adicione opções como Extra Bacon, Sem Cebola e Borda Recheada, com valores e tempos adicionais.
4. Resumo do Pedido: Visualize o resumo completo do pedido, incluindo detalhes do tamanho, sabor, personalizações, valor total e tempo de preparo.

## Contribuição

Contribuições são bem-vindas! Se encontrar algum problema ou tiver sugestões, por favor, abra uma [issue](https://github.com/JoseEduardoMartins/test-frontend-assemble-pizza/issues/new).

## Autor

- José Eduardo Martins

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo LICENSE.md para obter detalhes.

## Contato

Para qualquer dúvida ou problema, entre em contato com `m4rt1ns.jose@gmail.com`.
