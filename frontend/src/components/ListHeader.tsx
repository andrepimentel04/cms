import { Link } from 'react-router-dom';

type ListHeaderProps = {
  title: string;
  createPath: string;
  createLabel: string;
};

const ListHeader = ({ title, createPath, createLabel }: ListHeaderProps) => {
  return (
    <div className="list-header">
      <h2>{title}</h2>
      <Link to={createPath} className="create-button">
        {createLabel}
      </Link>
    </div>
  );
};

export default ListHeader;