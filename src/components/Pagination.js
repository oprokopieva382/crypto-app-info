import "../App.css";
export const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((p, i) => (
        <button
          onClick={() => setCurrentPage(p)}
          key={i}
          className={p === currentPage ? "active": ""}
        >
          {p}
        </button>
      ))}
    </div>
  );
};
