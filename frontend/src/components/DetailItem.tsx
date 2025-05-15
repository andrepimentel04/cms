import { ReactNode } from 'react';

type DetailItemProps = {
  label: string;
  value: ReactNode;
};

const DetailItem = ({ label, value }: DetailItemProps) => {
  return (
    <div className="detail-item">
      <strong>{label}</strong> {value}
    </div>
  );
};

export default DetailItem;