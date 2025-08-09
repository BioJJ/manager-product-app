# APP - Sistema de Gestão

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 15.0.4.

## Tecnologias Utilizadas

- Angular 15
- Angular Material 15
- Chart.js 4.1.1 (para gráficos)
- JWT Decode 3.1.2 (para autenticação)
- RxJS 7.5.0
- TypeScript 4.8.2

## Estrutura do Projeto

O sistema é composto por módulos principais:

- Autenticação (Auth)
- Usuários (Users)
- Fornecedores (Suppliers)
- Produtos (Products)
- Compradores (Buyers)
- Pedidos (Orders)

## Rotas da Aplicação

### Autenticação

- `/login` - Página de login

### Página Inicial

- `/home` - Dashboard principal (acesso para ADMIN e USER)

### Módulo de Usuários

- `/users` - Listagem de usuários (ADMIN e USER)
- `/users/create` - Criar novo usuário (somente ADMIN)
- `/users/update/:id` - Editar usuário
- `/users/delete/:id` - Excluir usuário (somente ADMIN)

### Módulo de Fornecedores

- `/suppliers` - Listagem de fornecedores (ADMIN e USER)
- `/suppliers/create` - Criar novo fornecedor (ADMIN e USER)
- `/suppliers/update/:id` - Editar fornecedor (somente ADMIN)
- `/suppliers/delete/:id` - Excluir fornecedor (somente ADMIN)

### Módulo de Produtos

- `/product` - Listagem de produtos (ADMIN e USER)
- `/product/create` - Criar novo produto (ADMIN e USER)
- `/product/update/:id` - Editar produto (somente ADMIN)
- `/product/delete/:id` - Excluir produto (somente ADMIN)

### Módulo de Compradores

- `/buyers` - Listagem de compradores (ADMIN e USER)
- `/buyers/create` - Criar novo comprador (ADMIN e USER)
- `/buyers/update/:id` - Editar comprador (somente ADMIN)
- `/buyers/delete/:id` - Excluir comprador (somente ADMIN)

### Módulo de Pedidos

- `/orders` - Listagem de pedidos (ADMIN e USER)

## Modelos de Dados

### User

- `id`, `name`, `email`, `cpf`, `phone`, `password`, `profile`, `status`

### Supplier

- `id`, `name`, `document`, `address`, `phone`, `email`

### Product

- `id`, `name`, `description`, `supplierId`, `price`, `stockQuantity`

### Buyer

- `id`, `name`, `document`, `address`, `phone`, `email`

### Order

- `id`, `buyerId`, `buyerName`, `supplierId`, `supplierName`, `orderDate`, `items`, `totalAmount`, `status`

### OrderItem

- `productId`, `productName`, `quantity`, `unitPrice`, `totalPrice`

## Configuração do Ambiente

### Pré-requisitos

- Node.js
- Angular CLI (versão 15.0.4)

### Instalação

1. Clone o repositório
2. Execute `npm install` para instalar as dependências

## Comandos Úteis

### Servidor de Desenvolvimento

Execute `ng serve` para iniciar o servidor de desenvolvimento. Navegue para `http://localhost:4200/`. A aplicação irá recarregar automaticamente se você alterar qualquer arquivo fonte.

### Build

Execute `ng build` para construir o projeto. Os artefatos de build serão armazenados no diretório `dist/`.

### Testes

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

### Gerar Componentes

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a página [Visão Geral do Angular CLI e Referência de Comandos](https://angular.io/cli).

## Como Executar a versão de Produção

1. Clone o repositório:

   ```bash
   git clone https://github.com/BioJJ/manager-product-application
   ```

2. Running the app

```bash
# development
$ docker-compose up -d

```

3. Acesse a aplicação pelo browser: localhost:4022

### LOGIN:

```bash
# Login: adm-manager@gmail.com
# Senha: Admin@2025
```

## Stay in touch

- Author - https://www.linkedin.com/in/jefferson-coelho/
- Website - https://github.com/BioJJ
- Twitter - https://twitter.com/bio_jefferson
