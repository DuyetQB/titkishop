import "./style.scss";
import React from "react";
import { PaginationProps } from "../../types/base"

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) {
    return null; // Hide pagination if there's only one page
  }

  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const maxButtons = 6; // Maximum number of buttons to display
  let startPage = currentPage - Math.floor(maxButtons / 2);
  startPage = startPage > 0 ? startPage : 1;
  const endPage = startPage + maxButtons - 1;
  const visiblePages = range(startPage, endPage);

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      {visiblePages.map((page) => (
        <React.Fragment key={page}>
          {page === 1 && page !== currentPage && (
            <button onClick={() => onPageChange(page)} className="item">
              {page}
            </button>
          )}
          {page === currentPage && (
            <button onClick={() => onPageChange(page)} className="item active">
              {page}
            </button>
          )}
          {page === totalPages && page !== currentPage && (
            <button onClick={() => onPageChange(page)} className="item">
              {page}
            </button>
          )}
          {page !== 1 && page !== totalPages && page !== currentPage && (
            <button onClick={() => onPageChange(page)} className="item">
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
