import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Users from './pages/Users';
import UserForm from './pages/UserForm';
import UserShow from './pages/UserShow';
import Pages from './pages/Pages';
import Posts from './pages/Posts';
import { User, users as initialUsers } from './data/dummyData';
import './styles.css';

function App() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser: User) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/users">Usuários</Link>
            </li>
            <li>
              <Link to="/pages">Páginas</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/users" element={<Users users={users} onDelete={deleteUser} />} />
          <Route path="/users/new" element={<UserForm onSave={addUser} />} />
          <Route path="/users/edit/:id" element={<UserForm users={users} onSave={updateUser} />} />
          <Route path="/users/show/:id" element={<UserShow />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/" element={<h1>Bem-vindo ao Simple CMS</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;