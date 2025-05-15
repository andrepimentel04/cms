Situação Atual do Projeto CMS Admin v2
Data: 15 de maio de 2025
Visão Geral
O CMS Admin v2 é um painel de administração para gerir entidades de um sistema de gestão de conteúdos (CMS), atualmente focado em utilizadores, com planos para incluir páginas e publicações. O projeto é um monorepo com um frontend construído em React, TypeScript, e React Router, usando dados dummy. A arquitetura enfatiza componentes genéricos e reutilizáveis, prontos para expansão e ligação a um backend.
Funcionalidades Implementadas
Utilizadores

Listagem:
Tabela gerada pelo componente GenericList, exibindo:
Colunas: Nome (com ligação para /users/show/:id), Email, Papel, Criado em.
Ações: Editar (ligação para /users/edit/:id), Eliminar (botão com confirmação via window.confirm).


Filtros:
Nome: Pesquisa por texto (insensível a maiúsculas, parcial).
Email: Pesquisa por texto (insensível a maiúsculas, parcial).
Papel: Seleção de opções (administrador, editor, visualizador, ou "Todos").


Mensagem "Nenhum utilizador encontrado" para lista vazia.
Acessível em /users.


Detalhes:
Página /users/show/:id exibe:
Nome, Email, Papel, Criado em.
Botão "Editar" (ligação para /users/edit/:id).
Botão "Voltar" (ligação para /users).


Mensagem "Utilizador não encontrado" para IDs inválidos.


Criação e Edição:
Formulário gerado pelo componente GenericForm, com campos:
Nome (texto)
Email (texto)
Papel (select: administrador, editor, visualizador)


Validação de campos (obrigatórios, formato de email).
Acessível em /users/new (criar) e /users/edit/:id (editar).


Eliminação:
Ação "Eliminar" na tabela, com confirmação via useConfirmDelete (usa window.confirm).


Navegação:
Ligações no Nome levam a /users/show/:id.
Botão "Criar Novo Utilizador" no cabeçalho (via ListHeader).



Componentes Genéricos

GenericList:
Tabela reutilizável para listar qualquer entidade com id.
Suporta colunas configuráveis (label, render, linkTo para ligações).
Suporta ações personalizadas (label, type: button/link, onClick/to, className).
Suporta filtros configuráveis (label, key, type: text/select, options para select).
Exibe mensagem personalizável para lista vazia.


GenericForm:
Formulário reutilizável para criar/editar entidades.
Suporta campos configuráveis com validação.
Usado para utilizadores, pronto para páginas e publicações.


ListHeader:
Cabeçalho com título e botão "Criar" (caminho configurável).


useConfirmDelete:
Hook genérico para confirmação de eliminação, com mensagem personalizável.



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
│   │   │   ├── UserForm.tsx
│   │   │   └── UserShow.tsx
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


Estilização: CSS puro (frontend/src/styles.css) com classes para tabela (generic-table), ligações (table-link), ações (edit-button, delete-button), filtros (filter-container, filter-item), e detalhes (user-details, detail-item).


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

Confirmação de eliminação usa window.confirm (não estilizado).
Apenas utilizadores implementados; páginas e publicações pendentes.
Estilização em CSS puro (sem Tailwind CSS).
Dados dummy, sem backend.

Como Executar

Clone o repositório:git clone <URL_DO_REPOSITORIO>
cd cms-admin-v2


Entre no frontend:cd frontend


Instale dependências:npm install


Execute:npm run dev


Acesse http://localhost:5173/users.

