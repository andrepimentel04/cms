import { useState } from 'react';
import { Page } from '../data/dummyData';

type PageFormProps = {
  onPageCreated: (page: Page) => void;
};

const PageForm = ({ onPageCreated }: PageFormProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPage: Page = {
      id: Date.now(),
      title,
      content,
    };
    onPageCreated(newPage);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Criar Página</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Conteúdo:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default PageForm;