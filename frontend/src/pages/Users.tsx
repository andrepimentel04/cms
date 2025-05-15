import UserList from '../components/UserList';
import { User } from '../data/dummyData';

type UsersProps = {
  users: User[];
  onDelete: (id: number) => void;
};

const Users = ({ users, onDelete }: UsersProps) => {
  return (
    <div>
      <UserList users={users} onDelete={onDelete} />
    </div>
  );
};

export default Users;