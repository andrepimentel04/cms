Lista de Possíveis Desenvolvimentos para CMS Admin v2
Data: 15 de maio de 2025
Visão Geral
O CMS Admin v2 está funcional para gerenciamento de usuários no frontend, com uma arquitetura genérica pronta para expansão. Abaixo estão sugestões de desenvolvimentos para melhorar a usabilidade, escalabilidade, e funcionalidades, organizadas por área e prioridade.
Frontend
Alta Prioridade

Página "Show" para Usuários:
Implementar /users/show/:id para exibir detalhes de um usuário (ex.: Nome, Email, Papel, Criado em).
Usar um componente genérico (ex.: GenericDetails) para reutilização em páginas e posts.
Testar links na coluna "Nome" da tabela.


Modal de Confirmação:
Substituir window.confirm por um modal estilizado para exclusão (ex.: com CSS puro ou Chakra UI).
Permitir mensagens personalizáveis.



Média Prioridade

Ordenação de Colunas:
Permitir clicar nos cabeçalhos da tabela (ex.: Nome, Criado em) para ordenar (ascendente/descendente).
Implementar no GenericList com configuração opcional.


Páginas e Posts:
Criar PageList.tsx e PostList.tsx usando GenericList.
Criar PageForm.tsx e PostForm.tsx usando GenericForm.
Definir colunas (ex.: Título, Conteúdo) e validações.
Adicionar rotas /pages, /posts, /pages/new, /posts/new, etc.


Migração para Tailwind CSS:
Substituir styles.css por Tailwind CSS para estilização mais rápida e responsiva.
Atualizar GenericList, GenericForm, e ListHeader.



Baixa Prioridade

Ações Adicionais:
Adicionar ações como "Visualizar" ou "Duplicar" na tabela (via prop actions do GenericList).
Criar estilos específicos (ex.: view-button).


Responsividade:
Ajustar tabela e filtros para telas pequenas (ex.: empilhar colunas, ocultar ações).
Usar media queries ou Tailwind CSS.


Testes:
Adicionar testes unitários para GenericList, GenericForm, e useConfirmDelete com Vitest.



Backend
Alta Prioridade

API REST:
Criar pasta backend/ com Node.js + Express.
Implementar endpoints para usuários:
GET /api/users: Listar.
POST /api/users: Criar.
PUT /api/users/:id: Editar.
DELETE /api/users/:id: Excluir.


Usar um banco de dados (ex.: SQLite para simplicidade, ou PostgreSQL).


Integração com Frontend:
Substituir dummyData.ts por chamadas HTTP com Axios.
Atualizar App.tsx, UserList, e UserForm para buscar/salvar dados na API.



Média Prioridade

Autenticação:
Adicionar login no backend (ex.: JWT).
Proteger rotas do admin (ex.: apenas admin pode excluir usuários).
Criar tela de login no frontend.


API para Páginas e Posts:
Implementar endpoints para páginas e posts, alinhados com PageList e PostList.
Suportar campos como Título, Conteúdo, Autor, Data.



Baixa Prioridade

WebSockets:
Adicionar atualizações em tempo real (ex.: notificar quando um usuário é criado).
Usar Socket.IO no backend e frontend.



Git e Deploy
Alta Prioridade

Licença:
Adicionar licença (ex.: MIT) ao repositório.
Incluir em LICENSE.md.


Deploy:
Publicar frontend no Vercel.
Configurar backend em um servidor (ex.: Render, Heroku).



Média Prioridade

CI/CD:
Configurar GitHub Actions for:
Rodar testes (quando implementados).
Fazer build do frontend.
Deploy automático para Vercel.




Documentação:
Documentar API (ex.: com Swagger) quando backend for implementado.
Adicionar guia de contribuição em CONTRIBUTING.md.



Outros

Tipos Compartilhados:
Criar pasta shared/ na raiz para tipos TypeScript compartilhados entre frontend e backend (ex.: User, Page, Post).


Internacionalização:
Adicionar suporte a múltiplos idiomas (ex.: português e inglês) com i18next.



Priorização

Imediato: Página "Show", modal de confirmação.
Curto Prazo: Ordenação de colunas, páginas/posts, Tailwind CSS, backend com API.
Longo Prazo: Autenticação, WebSockets, internacionalização.

