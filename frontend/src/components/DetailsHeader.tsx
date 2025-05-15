import { Link } from 'react-router-dom';

type ActionConfig = {
  label: string;
  type: 'button' | 'link';
  onClick?: () => void;
  to?: string;
  className?: string;
};

type DetailsHeaderProps = {
  title: string;
  actions?: ActionConfig[];
};

const DetailsHeader = ({ title, actions = [] }: DetailsHeaderProps) => {
  return (
    <div className="details-header">
      <h2>{title}</h2>
      <div className="header-actions">
        {actions.map((action, index) => (
          <span key={index}>
            {action.type === 'button' && action.onClick ? (
              <button
                onClick={action.onClick}
                className={action.className || 'action-button'}
              >
                {action.label}
              </button>
            ) : action.type === 'link' && action.to ? (
              <Link
                to={action.to}
                className={action.className || 'action-link'}
              >
                {action.label}
              </Link>
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DetailsHeader;