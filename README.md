# 🛒 E-Commerce React + TypeScript + Vite

Este projeto é um e-commerce simples desenvolvido com **React + TypeScript + Vite**, usando **Chakra UI v3** para interface e uma **Mock API local** criada dentro do próprio projeto para listar produtos, filtrar e simular carrinho.

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
GET /products
GET /products?category=running
GET /products?gender=feminino
GET /products?search=air

Carrinho
GET /cart
POST /cart
DELETE /cart/:id

---

## 🧪 Testes

Tecnologias de teste:

Jest

React Testing Library

jsdom
