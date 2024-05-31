# Aplicativo web de delivery

## Visão Geral

Bem-vindo ao projeto Full Stack do nosso Delivery Online! Este projeto tem como objetivo criar uma aplicação web onde os usuários possam navegar e comprar alimentos de forma fácil e rápida. A aplicação terá quatro páginas principais: Login de Usuário, Registro de Usuário, Escolha de Produto e Finalizar Pedido.

#### Clone o repositório

```bash
git clone https://github.com/Fabriziosilveira/foodStore-FullStackApp.git
```
#### Entre na pasta

```bash
cd foodStore-FullStackApp
```

#### Inicie o servidor

```bash
npm start
```

#### Para começar o fluxo de páginas começe abrindo o arquivo ``` login.html```, para isso busque o arquvio nos diretórios ```foodStore-FullStackApp/public/loginPage/login.html ```.

## Estrutura do Projeto

### 1. Login de Usuário

Nesta página, os usuários poderão fazer login em suas contas. O formulário de login solicitará:

- Endereço de e-mail
- Senha

Se o usuário não tiver uma conta, haverá um link para a página de registro.

### 2. Registro de Usuário

Nesta página, novos usuários poderão criar uma conta. O formulário de registro solicitará:

- Nome
- Sobrenome
- Endereço de e-mail
- Senha

Após o registro, os usuários serão redirecionados automaticamente para a página de login.

### 3. Escolha do Produto
Nesta página, os usuários poderão navegar por um menu de produtos disponíveis. Os produtos serão exibidos em cards que contêm:

- Imagem do produto
- Nome do produto
- Descrição curta
- Preço

Os usuários poderão adicionar produtos ao carrinho clicando em um botão de "Adicionar ao Carrinho" em cada card.

Ao clicar na imagem ou no card do produto deve se abrir um caroucel que contém as mesmas informações do produto com pelo menos 2 imagens.

### 4. Finalizar Pedido
Após selecionar os produtos, os usuários serão redirecionados para a página de finalização de pedido. Nesta página, os usuários poderão revisar os itens em seu carrinho, atualizar quantidades ou remover itens. Para finalizar o pedido, será solicitado:

- Endereço de entrega
- Revisão do resumo do pedido

### Funcionalidades Adicionais

- **Autenticação de Usuário:** Implementada para garantir que apenas usuários registrados possam fazer pedidos.

- **Persistência de Dados:** Os dados dos usuários, produtos e pedidos serão armazenados em um banco de dados.

- **Responsividade:** O design da aplicação será responsivo para garantir uma boa experiência em dispositivos móveis e desktops.

## Tecnologias Utilizadas

### Frontend

- **HTML5:** Estrutura das páginas.
- **CSS3:** Estilo das páginas.
- **Bootstrap:** Framework CSS para design responsivo e componentes prontos.

### Backend

- **Node.js:** Ambiente de execução para o servidor.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **Fastify:** Framework web focado em desempenho e baixo overhead.
- **PrismaORM:** ORM para trabalhar com banco de dados de maneira eficiente e tipada.
- **SQLite:** Banco de Dados realacional.

### Autenticação e Segurança
- **bcrypt:** Para criptografia de senhas.

## Regras de Negócio

### Cadastro de Usuários

- Deve ser feito com: Nome Completo, Email e Senha.
- Se conter na base de dados um endereço de Email já cadastrado na base de dados informar que já possui um cadastro.

### Login de Usuários

- Validar Email e Senha para liberar o acesso, caso for negado informe o erro.

### Escolha do Produto

- Ao apertar o botão "Adicionar ao carrinho" o pedido deve ser criado um pedido que tenha o item.
- Ao abrir o carrinho terá que ter a opção de excluir o item do carrinho atual.

### Finalizar Pedido

- Ao selecionar "Finalizar Compra", deve ser feita a confirmação do pedido e o reinício do carrinho removendo os itens para uma possível nova compra.

