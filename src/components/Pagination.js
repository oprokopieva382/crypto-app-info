export const Pagination = ({
  countPerPage,
  totalCrypto,
  currentPage,
  setCurrentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalCrypto / countPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((p, i) => {
        return (
          <button
            onClick={() => setCurrentPage(p)}
            key={i}
            className={p === currentPage ? "active" : ""}
          >
            {p}
          </button>
        );
      })}
    </div>
  );
};
