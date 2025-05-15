import { useState } from 'react';
import { User } from '../data/dummyData';

type UserFormProps = {
  onUserCreated: (user: User) => void;
};

const UserForm = ({ onUserCreated }: UserFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = {
      id: Date.now(), // ID temporário
      name,
      email,
    };
    onUserCreated(newUser);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Criar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default UserForm;