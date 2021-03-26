import React, { Component } from "react";
import Like from "../common/Like";
import Table from "../common/table";

class MovieTable extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (path === sortColumn.path) {
      sortColumn.orderBy = sortColumn.orderBy === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.orderBy = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { movies, onSort, sortColumn } = this.props;
    const columns = [
      { path: "title", label: "Title" },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" },
      { path: "publishDate", label: "Published Date" },
      {
        key: "like",
        content: (movie) => (
          <Like
            isLike={movie.isLiked}
            onclick={() => this.props.onLiked(movie)}
          />
        ),
      },
      {
        key: "delete",
        content: (movie) => (
          <button
            onClick={() => this.props.onDelete(movie)}
            className="btn btn-danger"
          >
            Delete
          </button>
        ),
      },
      {},
    ];
    return (
      <Table
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
      />
    );
  }
}

export default MovieTable;
