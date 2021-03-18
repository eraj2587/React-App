import React, { Component } from "react";
import { getMovies } from "../services/FakeMovieService";
import Like from "../common/Like";
import Pagination from "../common/pagination";
import paginate from "../util/paginate";
import ListGroup from "../common/listgroup";
import { getGenres } from "../services/FakeGenreService";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 5,
    currentPage: 1,
    selectedGenre: 0,
    filteredMovies: [],
  };

  constructor() {
    super();
    const genres = [{ name: "All", id: 0 }, ...getGenres()];
    this.state.movies = getMovies();
    this.state.genres = genres;
    this.state.filteredMovies = getMovies();
  }
  // componentDidMount() {
  //   this.setState({
  //     movies: getMovies(),
  //     genres: getGenres(),
  //     filteredMovies: getMovies(),
  //   });
  // }

  deleteMovie = (movie) => {
    //console.log(movie);
    let filteredMovies = this.state.filteredMovies.filter(
      (x) => x.id !== movie.id
    );
    this.setState({ filteredMovies });
  };

  onLikeClicked = (movie) => {
    //console.log("movied", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].isLiked = !movies[index].isLiked;
    this.setState({ movies });
  };

  onPageClicked = (page) => {
    this.setState({ currentPage: page });
  };

  onGenreSelected = (genre) => {
    //console.log("genre", genre);
    this.setState({ selectedGenre: genre.id, currentPage: 1 });
    let movies =
      genre.id === 0
        ? this.state.movies
        : this.state.movies.filter((x) => x.genre.id === genre.id);
    this.setState({ filteredMovies: movies });
  };

  render() {
    return (
      <>
        <main className="container" style={{ marginTop: 50 }}>
          <div className="row">
            <div className="col-3">
              <ListGroup
                selectedItem={this.state.selectedGenre}
                onSelected={this.onGenreSelected}
                items={this.state.genres}
              />
            </div>
            <div className="col-9">
              {this.getPageCaption()}
              {this.getTableContent()}
              {this.getPagination()}
            </div>
          </div>
        </main>
      </>
    );
  }

  getPagination() {
    return (
      <Pagination
        pageSize={this.state.pageSize}
        totalMovies={this.state.filteredMovies.length}
        currentPage={this.state.currentPage}
        onPageChange={this.onPageClicked}
      />
    );
  }

  getPageCaption() {
    if (this.state.filteredMovies.length > 0) {
      return (
        <span className="m-2">
          Showing {this.state.filteredMovies.length} movies from database
        </span>
      );
    } else {
      return "";
    }
  }

  getTableContent() {
    const selectedMovies = paginate(
      this.state.filteredMovies,
      this.state.currentPage,
      this.state.pageSize
    );

    if (selectedMovies.length === 0) return "There are no movies in database";
    else {
      return (
        <table className="table table-strip m-2">
          <thead>
            <tr>
              <td style={{ fontWeight: 500 }}>Title</td>
              <td style={{ fontWeight: 500 }}>Genre</td>
              <td style={{ fontWeight: 500 }}>Stock</td>
              <td style={{ fontWeight: 500 }}>Rental</td>
              <td style={{ fontWeight: 500 }}>Published Date</td>
              <td />
              <td />
            </tr>
          </thead>
          <tbody>
            {selectedMovies.map((movie) => (
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
