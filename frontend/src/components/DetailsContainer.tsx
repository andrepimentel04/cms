import { ReactNode } from 'react';

type DetailsContainerProps = {
  children: ReactNode;
};

const DetailsContainer = ({ children }: DetailsContainerProps) => {
  return <div className="details-container">{children}</div>;
};

export default DetailsContainer;