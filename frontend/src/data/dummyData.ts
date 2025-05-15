export type User = {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  createdAt: string;
};

export type Page = {
  id: number;
  title: string;
  content: string;
};

export type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

export const users: User[] = [
  { id: 1, name: 'João Silva', email: 'joao@email.com', role: 'admin', createdAt: '2025-05-01' },
  { id: 2, name: 'Maria Souza', email: 'maria@email.com', role: 'editor', createdAt: '2025-05-02' },
  { id: 3, name: 'Pedro Santos', email: 'pedro@email.com', role: 'viewer', createdAt: '2025-05-03' },
];

export const pages: Page[] = [
  { id: 1, title: 'Sobre', content: 'Sobre nossa empresa...' },
  { id: 2, title: 'Contato', content: 'Entre em contato conosco...' },
];

export const posts: Post[] = [
  { id: 1, title: 'Primeiro Post', content: 'Conteúdo do post...', author: 'João' },
  { id: 2, title: 'Segundo Post', content: 'Outro conteúdo...', author: 'Maria' },
];