import React, { Component } from "react";
import { getMovies } from "../services/FakeMovieService";
import Like from "../common/Like";
import Pagination from "../common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  deleteMovie = (movie) => {
    //console.log(movie);
    let movies = this.state.movies.filter((x) => x.id !== movie.id);
    this.setState({ movies });
  };

  onLikeClicked = (movie) => {
    //console.log("movied", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].isLiked = !movies[index].isLiked;
    this.setState({ movies });
  };

  render() {
    return (
      <>
        <main className="container">
          {this.getPageCaption()}
          {this.getTableContent()}
          {this.getPagination()}
        </main>
      </>
    );
  }

  getPagination() {
    return <Pagination pageSize="5" totalMovies={this.state.movies.length} />;
  }

  getPageCaption() {
    if (this.state.movies.length > 0) {
      return (
        <span className="m-2">
          Showing {this.state.movies.length} movies from database
        </span>
      );
    } else {
      return "";
    }
  }

  getPagination() {
    const pageSize = 5;
    let { length: totalMovies } = this.state.movies;
    let noOfPages =
      totalMovies % pageSize === 0
        ? totalMovies / pageSize
        : totalMovies / pageSize + 1;
    let allPages = [...Array.from({ length: noOfPages }, (_, i) => i + 1)];

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
  }

  getTableContent() {
    if (this.state.movies.length === 0)
      return "There are no movies in database";
    else {
      return (
        <table className="table table-strip m-2">
          <thead>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rental</th>
            <th>Published Date</th>
            <th />
            <th />
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>{movie.publishDate}</td>
                <td>
                  <Like
                    isLike={movie.isLiked}
                    onclick={() => this.onLikeClicked(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.deleteMovie(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }
}

export default Movies;
