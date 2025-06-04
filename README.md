# 🏢 API - Controle de Visitantes em Condomínios

API RESTful desenvolvida como parte de um desafio técnico para gerenciar o fluxo de entrada e saída de visitantes em condomínios.

### ✅ Visitantes
- [x] `GET /visitantes`: Listar todos os visitantes.
- [x] `POST /visitantes`: Cadastrar um novo visitante.
- [x] `PUT /visitantes/{id}`: Atualizar dados de um visitante.
- [x] `DELETE /visitantes/{id}`: Remover um visitante do sistema.

### ✅ Condomínios e Unidades
- [x] `GET /condominios`: Listar todos os condomínios.
- [x] `GET /condominios/{id}/unidades`: Listar unidades por condomínio.
- [x] `GET /condominios/relacao/tudo`: Mostrar relação entre condomínios e suas unidades.

### 🔜 Controle de Acesso (Em desenvolvimento)
- [ ] Liberar entrada de visitante.
- [ ] Listar movimentações por unidade.
- [ ] Registrar saída de visitante.

---

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js v18+
- npm
- (Opcional) Banco de dados relacional (MySQL/PostgreSQL) ou não-relacional

### Instalação
```bash
git clone https://github.com/ThiagoTJ/condominium-system-api
cd condominium-system-api
npm install
npm run dev
```