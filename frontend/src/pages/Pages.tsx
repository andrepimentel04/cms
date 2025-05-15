import { useState } from 'react';
import PageList from '../components/PageList';
import PageForm from '../components/PageForm';
import { Page, pages as initialPages } from '../data/dummyData';

const Pages = () => {
  const [pages, setPages] = useState<Page[]>(initialPages);

  const handlePageCreated = (newPage: Page) => {
    setPages([...pages, newPage]);
  };

  return (
    <div>
      <h1>Gerenciar Páginas</h1>
      <PageForm onPageCreated={handlePageCreated} />
      <PageList pages={pages} />
    </div>
  );
};

export default Pages;