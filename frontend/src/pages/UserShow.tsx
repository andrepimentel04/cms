import { useParams, useNavigate } from 'react-router-dom';
import { users } from '../data/dummyData';
import DetailsHeader from '../components/DetailsHeader';
import DetailsContainer from '../components/DetailsContainer';
import DetailItem from '../components/DetailItem';
import useConfirmDelete from '../hooks/useConfirmDelete';

const UserShow = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const user = users.find((u) => u.id === Number(id));

  const { confirmDelete } = useConfirmDelete<number>({
    onDelete: (userId) => {
      // Simula eliminação (substituir por API no futuro)
      console.log('Eliminar utilizador:', userId);
      navigate('/users');
    },
  });

  if (!user) {
    return <div className="container">Utilizador não encontrado.</div>;
  }

  const actions = [
    {
      label: 'Editar',
      type: 'link',
      to: `/users/edit/${user.id}`,
      className: 'edit-button',
    },
    {
      label: 'Eliminar',
      type: 'button',
      onClick: () => confirmDelete(user.id),
      className: 'delete-button',
    },
  ];

  return (
    <div className="container">
      <DetailsHeader
        title="Detalhes do Utilizador"
        actions={actions}
      />
      <DetailsContainer>
        <DetailItem label="Nome" value={user.name} />
        <DetailItem label="Email" value={user.email} />
        <DetailItem
          label="Papel"
          value={
            user.role === 'admin'
              ? 'Administrador'
              : user.role === 'editor'
              ? 'Editor'
              : 'Visualizador'
          }
        />
        <DetailItem label="Criado em" value={user.createdAt} />
      </DetailsContainer>
    </div>
  );
};

export default UserShow;