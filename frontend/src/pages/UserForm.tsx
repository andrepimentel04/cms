import { useParams } from 'react-router-dom';
import { User } from '../data/dummyData';
import GenericForm from '../components/GenericForm';

type UserFormProps = {
  users?: User[];
  onSave: (user: User) => void;
};

const UserForm = ({ users, onSave }: UserFormProps) => {
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;

  // Buscar o usuário pelo ID, ou usar um usuário padrão para criação
  const initialUser = isEditing
    ? users?.find((user) => user.id === Number(id)) || {
        id: 0,
        name: '',
        email: '',
        role: 'viewer',
        createdAt: new Date().toISOString().split('T')[0],
      }
    : {
        id: 0,
        name: '',
        email: '',
        role: 'viewer',
        createdAt: new Date().toISOString().split('T')[0],
      };

  const fields = [
    { name: 'name', label: 'Nome:', type: 'text', required: true },
    { name: 'email', label: 'Email:', type: 'email', required: true },
    {
      name: 'role',
      label: 'Papel:',
      type: 'select',
      options: [
        { value: 'admin', label: 'Admin' },
        { value: 'editor', label: 'Editor' },
        { value: 'viewer', label: 'Viewer' },
      ],
      required: true,
    },
  ] as const;

  const validate = (data: User): Record<string, string> => {
    const errors: Record<string, string> = {};

    // Validação do nome
    if (!data.name.trim()) {
      errors.name = 'O nome é obrigatório';
    } else if (data.name.length < 2) {
      errors.name = 'O nome deve ter pelo menos 2 caracteres';
    } else if (data.name.length > 100) {
      errors.name = 'O nome não pode ter mais de 100 caracteres';
    }

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      errors.email = 'O email é obrigatório';
    } else if (!emailRegex.test(data.email)) {
      errors.email = 'O email deve ser válido';
    } else if (
      users &&
      users.some((user) => user.email === data.email && user.id !== data.id)
    ) {
      errors.email = 'Este email já está em uso';
    }

    // Validação do role
    if (!['admin', 'editor', 'viewer'].includes(data.role)) {
      errors.role = 'Selecione um papel válido';
    }

    return errors;
  };

  return (
    <GenericForm
      initialData={initialUser}
      dataList={users}
      validate={validate}
      onSave={(data) => {
        const user: User = {
          ...data,
          id: isEditing ? data.id : Date.now(),
          createdAt: data.createdAt || new Date().toISOString().split('T')[0],
        };
        onSave(user);
      }}
      fields={fields}
      basePath="/users"
    />
  );
};

export default UserForm;