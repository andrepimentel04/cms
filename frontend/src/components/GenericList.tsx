import { Link } from 'react-router-dom';
import ListHeader from './ListHeader';
import useConfirmDelete from '../hooks/useConfirmDelete';
import { useState, useMemo } from 'react';

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

type FilterConfig<T> = {
  label: string;
  key: keyof T;
  type: 'text' | 'select';
  options?: { value: string; label: string }[];
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
  filters?: FilterConfig<T>[];
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
  filters = [],
}: GenericListProps<T>) => {
  const { confirmDelete } = useConfirmDelete<number>({
    onDelete,
    message: `Tem a certeza de que deseja eliminar este item?`,
  });

  const [filterValues, setFilterValues] = useState<Record<string, string>>({});

  const handleFilterChange = (key: string, value: string) => {
    setFilterValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return filters.every((filter) => {
        const value = filterValues[filter.key as string]?.toLowerCase() || '';
        if (!value) return true;

        const itemValue = String(item[filter.key]).toLowerCase();
        if (filter.type === 'text') {
          return itemValue.includes(value);
        } else if (filter.type === 'select') {
          return itemValue === value;
        }
        return true;
      });
    });
  }, [items, filterValues, filters]);

  return (
    <div>
      <ListHeader
        title={title}
        createPath={`${basePath}/new`}
        createLabel={createLabel}
      />
      {filters.length > 0 && (
        <div className="filter-container">
          {filters.map((filter) => (
            <div key={String(filter.key)} className="filter-item">
              <label>{filter.label}</label>
              {filter.type === 'text' ? (
                <input
                  type="text"
                  value={filterValues[filter.key as string] || ''}
                  onChange={(e) => handleFilterChange(filter.key as string, e.target.value)}
                  placeholder={`Filtrar por ${filter.label}`}
                />
              ) : (
                <select
                  value={filterValues[filter.key as string] || ''}
                  onChange={(e) => handleFilterChange(filter.key as string, e.target.value)}
                >
                  <option value="">Todos</option>
                  {filter.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>
      )}
      {filteredItems.length === 0 ? (
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
            {filteredItems.map((item) => (
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