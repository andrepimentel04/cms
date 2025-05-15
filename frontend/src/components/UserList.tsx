import { User } from '../data/dummyData';
import GenericList from './GenericList';

type UserListProps = {
  users: User[];
  onDelete: (id: number) => void;
};

const UserList = ({ users, onDelete }: UserListProps) => {
  const columns = [
    {
      label: 'Nome',
      render: (user: User) => user.name,
      linkTo: (user: User) => `/users/show/${user.id}`,
    },
    { label: 'Email', render: (user: User) => user.email },
    { label: 'Papel', render: (user: User) => user.role },
    { label: 'Criado em', render: (user: User) => user.createdAt },
  ];

  const actions = [
    {
      label: 'Editar',
      type: 'link',
      to: (user: User) => `/users/edit/${user.id}`,
      className: 'edit-button',
    },
    {
      label: 'Eliminar',
      type: 'button',
      onClick: (user: User) => onDelete(user.id),
      className: 'delete-button',
    },
  ];

  return (
    <GenericList
      items={users}
      onDelete={onDelete}
      basePath="/users"
      title="Usuários"
      createLabel="Criar Novo Usuário"
      emptyMessage="Nenhum usuário encontrado."
      columns={columns}
      actions={actions}
    />
  );
};

export default UserList;