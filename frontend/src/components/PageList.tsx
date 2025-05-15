import { Page } from '../data/dummyData';

type PageListProps = {
  pages: Page[];
};

const PageList = ({ pages }: PageListProps) => {
  return (
    <div>
      <h2>Páginas</h2>
      {pages.length === 0 ? (
        <p>Nenhuma página encontrada.</p>
      ) : (
        <ul>
          {pages.map((page) => (
            <li key={page.id}>
              <h3>{page.title}</h3>
              <p>{page.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PageList;