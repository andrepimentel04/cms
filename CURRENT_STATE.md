Situação Atual do Projeto CMS Admin v2
Data: 15 de maio de 2025
Visão Geral
O CMS Admin v2 é um painel de administração para gerenciar entidades de um sistema de gerenciamento de conteúdo (CMS), atualmente focado em usuários, com planos para incluir páginas e posts. O projeto é um monorepo com um frontend construído em React, TypeScript, e React Router, usando dados dummy. A arquitetura enfatiza componentes genéricos e reutilizáveis, prontos para expansão e conexão com um backend.
Funcionalidades Implementadas
Usuários

Listagem:
Tabela gerada pelo componente GenericList, exibindo:
Colunas: Nome (com link para futura página /users/show/:id), Email, Papel, Criado em.
Ações: Editar (link para /users/edit/:id), Eliminar (botão com confirmação via window.confirm).


Filtros:
Nome: Busca por texto (case-insensitive, parcial).
Email: Busca por texto (case-insensitive, parcial).
Papel: Seleção de opções (admin, editor, viewer, ou "Todos").


Mensagem "Nenhum usuário encontrado" para lista vazia.
Acessível em /users.


Criação e Edição:
Formulário gerado pelo componente GenericForm, com campos:
Nome (texto)
Email (texto)
Papel (select: admin, editor, viewer)


Validação de campos (obrigatórios, formato de email).
Acessível em /users/new (criar) e /users/edit/:id (editar).


Exclusão:
Ação "Eliminar" na tabela, com confirmação via useConfirmDelete (usa window.confirm).


Navegação:
Links no Nome levam a /users/show/:id (não implementado, retorna 404).
Botão "Criar Novo Usuário" no cabeçalho (via ListHeader).



Componentes Genéricos

GenericList:
Tabela reutilizável para listar qualquer entidade com id.
Suporta colunas configuráveis (label, render, linkTo para links).
Suporta ações personalizadas (label, type: button/link, onClick/to, className).
Suporta filtros configuráveis (label, key, type: text/select, options para select).
Exibe mensagem personalizável para lista vazia.


GenericForm:
Formulário reutilizável para criar/editar entidades.
Suporta campos configuráveis com validação.
Usado para usuários, pronto para páginas e posts.


ListHeader:
Cabeçalho com título e botão "Criar" (caminho configurável).


useConfirmDelete:
Hook genérico para confirmação de exclusão, com mensagem personalizável.



Estrutura do Projeto
O projeto é um monorepo com a seguinte estrutura:
cms-admin-v2/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── GenericForm.tsx
│   │   │   ├── GenericList.tsx
│   │   │   ├── ListHeader.tsx
│   │   │   └── UserList.tsx
│   │   ├── data/
│   │   │   └── dummyData.ts
│   │   ├── hooks/
│   │   │   └── useConfirmDelete.ts
│   │   ├── pages/
│   │   │   └── UserForm.tsx
│   │   ├── App.tsx
│   │   └── styles.css
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── README.md
├── .gitignore
├── CURRENT_STATE.md
└── FUTURE_DEVELOPMENTS.md

Detalhes Técnicos

Frontend:
Tecnologias: React 18, TypeScript, React Router 6, Vite.
Dependências (frontend/package.json):
react, react-dom, react-router-dom
Dev: @vitejs/plugin-react, typescript


Scripts:
npm run dev: Inicia o servidor em http://localhost:5173.
npm run build: Gera build de produção.
npm run preview: Visualiza build.


Estilização: CSS puro (frontend/src/styles.css) com classes para tabela (generic-table), links (table-link), ações (edit-button, delete-button), e filtros (filter-container, filter-item).


Dados:
Dados dummy em frontend/src/data/dummyData.ts:export type User = {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  createdAt: string;
};
export const users: User[] = [
  { id: 1, name: 'João Silva', email: 'joao@email.com', role: 'admin', createdAt: '2025-05-01' },
  { id: 2, name: 'Maria Souza', email: 'maria@email.com', role: 'editor', createdAt: '2025-05-02' },
  { id: 3, name: 'Pedro Santos', email: 'pedro@email.com', role: 'viewer', createdAt: '2025-05-03' },
];




Git:
Repositório inicializado na raiz (cms-admin-v2/).
.gitignore inclui node_modules/, dist/, .env, etc.
Pronto para repositório remoto (ex.: GitHub).



Limitações Atuais

Página /users/show/:id não implementada (links no Nome retornam 404).
Confirmação de exclusão usa window.confirm (não é estilizado).
Apenas usuários implementados; páginas e posts pendentes.
Estilização em CSS puro (sem Tailwind CSS).
Dados dummy, sem backend.

Como Executar

Clone o repositório:git clone <URL_DO_REPOSITORIO>
cd cms-admin-v2


Entre no frontend:cd frontend


Instale dependências:npm install


Rode:npm run dev


Acesse http://localhost:5173/users.

