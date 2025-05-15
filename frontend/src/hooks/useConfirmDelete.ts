import { useState } from 'react';

type ConfirmDeleteProps<T> = {
  onDelete: (id: T) => void;
  message?: string;
};

const useConfirmDelete = <T>({ onDelete, message = 'Tem certeza que deseja eliminar este item?' }: ConfirmDeleteProps<T>) => {
  const [pendingDeleteId, setPendingDeleteId] = useState<T | null>(null);

  const confirmDelete = (id: T) => {
    setPendingDeleteId(id);
    if (window.confirm(message)) {
      onDelete(id);
      setPendingDeleteId(null);
    } else {
      setPendingDeleteId(null);
    }
  };

  return { confirmDelete, pendingDeleteId };
};

export default useConfirmDelete;