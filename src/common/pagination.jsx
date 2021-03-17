import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { pageSize, currentPage, totalMovies, onPageChange } = props;
  let noOfPages = Math.ceil(totalMovies / pageSize);
  if (noOfPages === 1) return null;
  let allPages = _.range(1, noOfPages + 1);

  if (totalMovies > 0) {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li key="prev" className="page-item">
            <a className="page-link">Previous</a>
          </li>
          {allPages.map((page) => (
            <li
              key={page}
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
          <li key="next" className="page-item">
            <a className="page-link">Next</a>
          </li>
        </ul>
      </nav>
    );
  }
};

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalMovies: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Pagination;
