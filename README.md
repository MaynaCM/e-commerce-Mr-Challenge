# 🛒 E-Commerce React + TypeScript + Vite

Este repositório é um pequeno projeto open source colaborativo desenvolvido entre a mentora (eu) e minha mentorada, como parte das atividades do WorldWide Women in Tech.
Todo o fluxo foi pensado para simular um ambiente profissional de engenharia e reforçar boas práticas de colaboração.

O objetivo é servir como exercício prático de front-end, incluindo:
- Componentização
- Busca e filtros
- Chakra UI 3 com tema customizado
- Consumo de API mockada
- Testes com Jest + React Testing Library

---

## 🚀 Como Rodar o Projeto

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar o frontend (Vite)
```bash
npm run dev
```

## 📦 Scripts Disponíveis

| Script             | Descrição                    |
| ------------------ | ---------------------------- |
| `npm run dev`      | Inicia o frontend com Vite   |
| `npm run build`    | Gera build de produção       |
| `npm run preview`  | Pré-visualiza o build        |
| `npm run lint`     | Executa o ESLint             |
| `npm run mock-api` | Inicia a Mock API local      |
| `npm test`         | Roda os testes               |


--- 

## Mock API (Local)

A mock API está localizada em:

src/
 └── mock-api/
       ├── server.js
       ├── products.json
       └── cart.json

### 🔗 Endpoints Disponíveis

Produtos
- GET /products
- GET /products?category=running
- GET /products?gender=feminino
- GET /products?search=air

Carrinho
- GET /cart
- POST /cart
- DELETE /cart/:id

---
## Atualizando Tema Chakra UI

Para garantir que o TypeScript reconheça corretamente todos os tokens, cores, espaçamentos e componentes personalizados definidos no tema, é necessário gerar automaticamente as tipagens (type definitions)
Para isso use o comando:

`npx @chakra-ui/cli typegen src/theme.ts`

---

## 🧪 Testes

Tecnologias de teste:

- Jest
- React Testing Library
- jsdom

## 🔄 Fluxo de Trabalho via Pull Requests

### 1. Criar uma branch para cada tarefa
Sempre crie uma nova branch baseada na main.

Exemplos de nomes válidos:

- feature/header
- feature/product-filter
- fix/cart-item-update
- refactor/product-card
- chore/update-readme

### 2. Nada é commitado diretamente na main

A main é sempre protegida.
Todas as mudanças devem passar por revisão antes do merge.

### 3. Abrir um Pull Request

Ao finalizar a tarefa, abra um PR contendo:

- Título claro (ex: “Add product filter by gender”)
- Descrição objetiva explicando o que foi feito
- Checklist, quando necessário (ex.: testes, responsividade, etc.)

### 4. Revisão de Código (Code Review)

A revisão será feita pela mentora, com foco em:

- Boas práticas de React + TypeScript
- Arquitetura e organização dos componentes
- Acessibilidade (a11y)
- Responsividade
- Clareza e legibilidade do código
- Oportunidades de refatoração
- Pontos de aprendizado para evolução contínua

Após ajustes solicitados e aprovação, o PR será mesclado na main.

### 5. Após o merge

A tarefa é considerada concluída

A próxima feature deve começar a partir da main atualizada

---

## Links úteis

### Figma: 
- 👉 [link](https://www.figma.com/design/McZJ53lQZC8JNEntmjKz1h/Untitled?t=O4tTY9rGaXdGlAAa-1)

### Chakra UI Doc
- 👉 [ChakraUI Doc](https://chakra-ui.com/docs/components/concepts/overview)
