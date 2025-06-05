# 🏢 API - Controle de Visitantes em Condomínios

API RESTful desenvolvida como parte de um desafio técnico para gerenciar o fluxo de entrada e saída de visitantes em condomínios.

### ✅ Visitantes
- [x] `GET /visitantes`: Listar todos os visitantes.
- [x] `POST /visitantes`: Cadastrar um novo visitante.
- [x] `PUT /visitantes/{id}`: Atualizar dados de um visitante.
- [x] `DELETE /visitantes/{id}`: Remover um visitante do sistema.

#### 🏢 Condomínios
- [x] `GET /condominios`: Listar todos os condomínios.
- [x] `POST /condominios`: Criar novo condomínio.
- [x] `PUT /condominios/{id}`: Atualizar condomínio existente.
- [x] `DELETE /condominios/{id}`: Remover condomínio do sistema.

#### 🧱 Unidades
- [x] `GET /condominios/{id}/unidades`: Listar unidades de um condomínio específico.
- [x] `GET /condominios/relacao/tudo`: Listar todos os condomínios com suas unidades associadas.

### ✅ Controle de Acesso
- [x] `POST /acesso`: Liberar entrada de visitante.
- [x] `GET /unidades/{id}/acessos`: Listar movimentações por unidade.
- [x] `PUT /acesso/{id}/saida`: Registrar saída de visitante.
---

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js v18+
- npm
- (Opcional) Banco de dados relacional (MySQL/PostgreSQL) ou não-relacional
---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize (ORM)
- SQLite (banco de dados leve e local)
- Swagger (documentação de API)
- Nodemon (ambiente de desenvolvimento)
- Git

### Instalação
```bash
git clone https://github.com/ThiagoTJ/condominium-system-api
cd condominium-system-api
npm install

npm run dev
```

### ✅ Swagger Documentation
- [x] Documentação interativa disponível em:  
  👉 [`/api-docs`](http://localhost:3000/api-docs)