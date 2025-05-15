import { Link } from 'react-router-dom';
import ListHeader from './ListHeader';
import useConfirmDelete from '../hooks/useConfirmDelete';

type ActionConfig<T> = {
  label: string;
  type: 'button' | 'link';
  onClick?: (item: T) => void;
  to?: (item: T) => string;
  className?: string;
};

type ColumnConfig<T> = {
  label: string;
  render: (item: T) => JSX.Element | string;
  linkTo?: (item: T) => string;
};

type GenericListProps<T> = {
  items: T[];
  onDelete: (id: number) => void;
  basePath: string;
  title: string;
  createLabel: string;
  emptyMessage: string;
  columns: ColumnConfig<T>[];
  actions?: ActionConfig<T>[];
};

const GenericList = <T extends { id: number }>({
  items,
  onDelete,
  basePath,
  title,
  createLabel,
  emptyMessage,
  columns,
  actions = [],
}: GenericListProps<T>) => {
  const { confirmDelete } = useConfirmDelete<number>({
    onDelete,
    message: `Tem certeza que deseja eliminar este item?`,
  });

  return (
    <div>
      <ListHeader
        title={title}
        createPath={`${basePath}/new`}
        createLabel={createLabel}
      />
      {items.length === 0 ? (
        <p>{emptyMessage}</p>
      ) : (
        <table className="generic-table">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column.label}</th>
              ))}
              {actions.length > 0 && <th>Ações</th>}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                {columns.map((column, index) => (
                  <td key={index}>
                    {column.linkTo ? (
                      <Link to={column.linkTo(item)} className="table-link">
                        {column.render(item)}
                      </Link>
                    ) : (
                      column.render(item)
                    )}
                  </td>
                ))}
                {actions.length > 0 && (
                  <td>
                    {actions.map((action, index) => (
                      <span key={index}>
                        {action.type === 'button' && action.onClick ? (
                          <button
                            onClick={() => action.onClick!(item)}
                            className={action.className || 'action-button'}
                          >
                            {action.label}
                          </button>
                        ) : action.type === 'link' && action.to ? (
                          <Link
                            to={action.to(item)}
                            className={action.className || 'action-link'}
                          >
                            {action.label}
                          </Link>
                        ) : null}
                      </span>
                    ))}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GenericList;