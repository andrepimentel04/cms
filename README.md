CMS Admin v2
Painel de administração para gerenciar usuários (e futuramente páginas, posts, e backend) de um CMS. O frontend é construído com React, TypeScript, e React Router, usando dados dummy. O projeto está organizado como um monorepo, com espaço para adicionar um backend (ex.: Node.js + Express).
Pré-requisitos

Node.js (v18+)
npm
Git

Como Configurar

Clone o repositório:
git clone <URL_DO_REPOSITORIO>
cd cms-admin-v2


Navegue até o frontend:
cd frontend


Instale as dependências:
npm install


Rode o frontend:
npm run dev


Acesse no navegador:

Abra http://localhost:5173/users.



Funcionalidades

Usuários (Frontend):
Listar em tabela (Nome, Email, Papel, Criado em, Ações).
Criar/editar com formulário validado.
Excluir com confirmação.
Links no Nome (para futura página /users/show/:id).


Componentes Genéricos:
GenericList: Tabela reutilizável.
GenericForm: Formulário reutilizável.
ListHeader e useConfirmDelete para cabeçalho e exclusão.



Testando

Lista: Acesse /users para ver a tabela.
Criar: Clique em "Criar Novo Usuário" (/users/new).
Editar: Clique em "Editar" (/users/edit/:id).
Excluir: Clique em "Eliminar" e confirme.
Link no Nome: Clique no Nome (leva a /users/show/:id, ainda não implementado).

Estrutura
cms-admin-v2/
├── frontend/
│   ├── src/
│   │   ├── components/    # GenericList, GenericForm, UserList, ListHeader
│   │   ├── data/         # dummyData.ts
│   │   ├── hooks/        # useConfirmDelete.ts
│   │   ├── pages/        # UserForm.tsx
│   │   ├── App.tsx       # Rotas
│   │   └── styles.css    # Estilos
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── README.md
└── .gitignore

Problemas?

Erro no npm install: Delete frontend/node_modules e frontend/package-lock.json, depois npm install.
Servidor não inicia: Verifique a porta 5173 ou rode npm run dev novamente.

Próximos Passos

Adicionar PageList e PostList no frontend.
Criar página /users/show/:id.
Adicionar backend (ex.: backend/ com Node.js + Express).

