[![MIT License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?style=flat-square)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-13-black?style=flat-square)](https://nextjs.org/)
[![Prisma ORM](https://img.shields.io/badge/Prisma-ORM-blueviolet?style=flat-square)](https://www.prisma.io/)
[![SQLite](https://img.shields.io/badge/SQLite-DB-blue?style=flat-square)](https://www.sqlite.org/)
[![TurboRepo](https://img.shields.io/badge/TurboRepo-monorepo-yellow?style=flat-square)](https://turbo.build/repo)

# ✅ Gerenciador de Tarefas - FutureMe

Aplicação fullstack desenvolvida como parte de um Desafio Técnico para a empresa **FutureMe**.

Permite o cadastro, visualização e gerenciamento de tarefas de forma simples e eficiente. O projeto está estruturado como um **monorepo** utilizando o **Turborepo**, com frontend em **Next.js**, backend em **Node.js + Express**, banco de dados **SQLite** via **Prisma ORM** e arquitetura pronta para deploy em ambientes modernos.

---

## 🧰 Tecnologias Utilizadas

- **Frontend:** [Next.js](https://nextjs.org/)
- **Backend:** [Node.js](https://nodejs.org/) com [Express](https://expressjs.com/)
- **Banco de Dados:** [SQLite](https://www.sqlite.org/) com [Prisma ORM](https://www.prisma.io/)
- **Monorepo:** [Turborepo](https://turbo.build/repo)
- **Linguagem:** TypeScript + JavaScript

---

## 📁 Estrutura do Projeto

/
├── apps/               → Frontend e API  
│   ├── web             → Frontend com Next.js  
│   └── api             → Backend com Express  
├── prisma/             → Migrations e schema do Prisma  
├── packages/           → Pacotes compartilhados (se houver)  
├── turbo.json          → Configuração do Turborepo  
├── package.json        → Scripts e dependências do monorepo  
└── README.md           → Documentação do projeto

---

## ▶️ Como Rodar o Projeto

1. Clone o repositório:
   git clone https://github.com/WallanDavid/futureme-tasks.git  
   cd futureme-tasks

2. Instale as dependências:
   npm install

3. Rode as migrations do Prisma:
   npx prisma migrate dev

4. Inicie o ambiente de desenvolvimento:
   npm run dev

5. Acesse:
   - Frontend: http://localhost:3000  
   - API (caso separada): http://localhost:3333

---

## 🚧 Funcionalidades (MVP)

- [x] Listagem de tarefas
- [x] Criação de novas tarefas
- [x] Edição de tarefas existentes
- [x] Exclusão de tarefas
- [x] Integração frontend + backend
- [x] Armazenamento em banco local (SQLite)

---

## 🧪 Testes

*Em desenvolvimento futuro (opcional):*  
Adicionar testes com Jest, Supertest e React Testing Library para garantir a estabilidade do sistema.

---

## 📦 Scripts Úteis

- `npm run dev` — inicia o projeto com hot reload (frontend e backend)
- `npx prisma studio` — abre o painel visual do banco
- `npx prisma migrate dev` — aplica as migrações locais
- `npx prisma generate` — gera os tipos do Prisma

---

## 📜 Licença

Este projeto está licenciado sob os termos da [MIT License](LICENSE).

---

## 📫 Contato

**Desenvolvedor:** Wallan Peixoto  
**Email:** bobwallan2@gmail.com  
**WhatsApp:** (27) 99256-7995  
**LinkedIn:** https://www.linkedin.com/in/wallanpeixoto  
