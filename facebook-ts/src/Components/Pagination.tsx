type props = {
  postsPerPage: number;
  totalPosts: any;
  paginate: any;
  currentPage: any;
  setCurrentPage: any;
};
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}: props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const getPrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  const getNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div
        className="conatiner"
        // style={{ width: "9%", margin: " auto" }}
      >
        <div className="">
          <ul className="pagination d-flex align-items-center justify-content-center">
            <a href="!#" onClick={getPrevious} className="page-link m-3">
              Prev
            </a>
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <a
                  onClick={() => paginate(number)}
                  href="!#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            ))}
            <a href="!#" onClick={getNext} className="page-link m-3">
              Next
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pagination;
