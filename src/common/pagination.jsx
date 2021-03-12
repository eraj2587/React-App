import React, { Component } from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { pageSize, totalMovies } = props;
  let noOfPages = Math.ceil(totalMovies / pageSize);
  if (noOfPages === 1) return null;
  let allPages = _.range(1, noOfPages + 1);

  if (totalMovies > 0) {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a class="page-link">Previous</a>
          </li>
          {allPages.map((page) => (
            <li className="page-item">
              <a class="page-link">{page}</a>
            </li>
          ))}
          <li className="page-item">
            <a class="page-link">Next</a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Pagination;
