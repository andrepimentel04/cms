import { useParams, Link } from 'react-router-dom';
import { users } from '../data/dummyData';
import ListHeader from '../components/ListHeader';

const UserShow = () => {
  const { id } = useParams<{ id: string }>();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <div className="container">Utilizador não encontrado.</div>;
  }

  return (
    <div className="container">
      <ListHeader
        title={`Detalhes do Utilizador: ${user.name}`}
        createPath="/users"
        createLabel="Voltar para Utilizadores"
      />
      <div className="user-details">
        <div className="detail-item">
          <strong>Nome:</strong> {user.name}
        </div>
        <div className="detail-item">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="detail-item">
          <strong>Papel:</strong> {user.role}
        </div>
        <div className="detail-item">
          <strong>Criado em:</strong> {user.createdAt}
        </div>
        <div className="detail-actions">
          <Link to={`/users/edit/${user.id}`} className="edit-button">
            Editar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserShow;