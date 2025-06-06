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
- [x] `GET /condominios/{id}/unidades`: Listar unidades de um condomínio.

#### 🧱 Unidades
- [x] `POST /unidades`: Criar uma nova unidade (vinculada a um condomínio).
- [x] `PUT /unidades/{id}`: Atualizar dados de uma unidade.
- [x] `DELETE /unidades/{id}`: Remover uma unidade específica.

### ✅ Acessos
- [x] `POST /acesso/entrada`: Liberar entrada de um visitante em uma unidade de um condomínio.
- [x] `PATCH /acesso/saida/{id}`: Registrar saída de visitante.
- [x] `GET /acesso/unidades/{unidadeId}`: Lista movimentação por unidade.
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

## 🧭 Guia de Uso da API (Fluxo Recomendado)

Esta API segue uma lógica de relacionamento entre entidades: **Condomínios**, **Unidades**, **Visitantes** e **Controle de Acesso**. Utilize os endpoints na ordem abaixo para garantir a consistência dos dados e a funcionalidade completa da aplicação.

---

### 1️⃣ Cadastro e Gerenciamento de Condomínios

- 📥 **Criar condomínio**  
  `POST /condominios`

- 📋 **Listar todos os condomínios**  
  `GET /condominios`

- ✏️ **Atualizar um condomínio** - ( se necessário )

  `PUT /condominios/{id}`

- ❌ **Excluir um condomínio** - ( se necessário )

  `DELETE /condominios/{id}`

> Após esta etapa, você terá o `condominioId` necessário para o relacionamento com unidades.

---

### 2️⃣ Cadastro e Gerenciamento de Unidades

- 📥 **Criar unidade** (relacionada ao `condominioId`)  
  `POST /unidades`

- 📋 **Listar unidades de um condomínio específico**  
  `GET /condominios/{id}/unidades`

- ✏️ **Atualizar uma unidade** - ( se necessário )

  `PUT /unidades/{id}`

- ❌ **Excluir uma unidade** - ( se necessário )

  `DELETE /unidades/{id}`

> Isso gera o `unidadeId`, essencial para vincular acessos.

---

### 3️⃣ Cadastro e Gerenciamento de Visitantes

- 📥 **Cadastrar visitante**  
  `POST /visitantes`

- 📋 **Listar todos os visitantes**  
  `GET /visitantes`

- ✏️ **Atualizar um visitante** - ( se necessário )

  `PUT /visitantes/{id}`

- ❌ **Excluir um visitante** - ( se necessário )

  `DELETE /visitantes/{id}`

> Esta etapa gera o `visitanteId`, utilizado na liberação de acessos.

---

### 4️⃣ Controle de Acesso

- ✅ **Liberar entrada de visitante**  
  `POST /acesso/entrada`  
  **Requer:** `visitanteId`, `condominioId`, `unidadeId`  
  O horário de entrada é registrado automaticamente.

- 📄 **Listar acessos por unidade**  
  `GET acesso/unidades/{id}`  
  Ideal para rastrear visitantes ativos ou históricos.

- 🚶‍♂️ **Registrar saída de visitante**  
  `PATCH /acesso/saida/{visitanteId}`  
  Atualiza o registro com a hora de saída.
---
