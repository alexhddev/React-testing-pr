import { range } from "../utils";

const Pagination = (props: { total: number, limit:number, currentPage: number, selectPage: Function }) => {
  const pagesCount = Math.ceil(props.total / props.limit);
  const pages = range(1, pagesCount + 1);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          data-testid="page-container"
          key={page}
          onClick={() => props.selectPage(page)}
          className={`page-item ${props.currentPage === page ? "active" : ""}`}
        >
          <span className="page-link">{page}</span>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
