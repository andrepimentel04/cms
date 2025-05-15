import { useState } from 'react';
import { Post } from '../data/dummyData';

type PostFormProps = {
  onPostCreated: (post: Post) => void;
};

const PostForm = ({ onPostCreated }: PostFormProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: Post = {
      id: Date.now(),
      title,
      content,
      author,
    };
    onPostCreated(newPost);
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <div>
      <h2>Criar Post</h2>
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
        <div>
          <label>Autor:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default PostForm;