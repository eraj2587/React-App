import React, { Component } from "react";
import { getMovies } from "../services/FakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  deleteMovie = (movie) => {
    //console.log(movie);
    let movies = this.state.movies.filter((x) => x.id !== movie.id);
    this.setState({ movies });
  };

  render() {
    return <>{this.getTableContent()}</>;
  }

  getTableContent() {
    if (this.state.movies.length == 0) return "There are no movies in database";
    else {
      return (
        <table className="table table-strip">
          <thead>
            <td>Title</td>
            <td>Genre</td>
            <td>Stock</td>
            <td>Rental</td>
            <td>Published Date</td>
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
                  <button
                    onClick={() => this.deleteMovie(movie)}
                    className="button btn-primary"
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
