import React, { Component } from "react";
import { getMovies } from "../services/FakeMovieService";
import Pagination from "../common/pagination";
import paginate from "../util/paginate";
import ListGroup from "../common/listgroup";
import { getGenres } from "../services/FakeGenreService";
import MovieTable from "./movieTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 5,
    currentPage: 1,
    selectedGenre: {},
    sortColumn: {},
  };

  constructor() {
    super();
    const genres = [{ name: "All", id: 0 }, ...getGenres()];
    this.state.movies = getMovies();
    this.state.genres = genres;
    this.state.selectedGenre = { id: 0, name: "All" };
    this.state.sortColumn = { path: "title", orderBy: "asc" };
  }

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

  onPageClicked = (page) => {
    this.setState({ currentPage: page });
  };

  onGenreSelected = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  onSorting = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPaginatedMovies = () => {
    const {
      movies,
      currentPage,
      pageSize,
      sortColumn,
      selectedGenre,
    } = this.state;

    const filteredMovies =
      selectedGenre.id === 0
        ? movies
        : movies.filter((x) => x.genre.id === selectedGenre.id);
    var sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.orderBy]
    );
    const selectedMovies = paginate(sortedMovies, currentPage, pageSize);
    return { movies: selectedMovies, totalRecords: filteredMovies.length };
  };

  render() {
    const {
      currentPage,
      pageSize,
      genres,
      sortColumn,
      selectedGenre,
    } = this.state;

    const { movies, totalRecords } = this.getPaginatedMovies();

    if (totalRecords === 0) return "No movies found in database";

    return (
      <>
        <main className="container" style={{ marginTop: 50 }}>
          <div className="row">
            <div className="col-3">
              <ListGroup
                selectedItem={selectedGenre}
                onSelected={this.onGenreSelected}
                items={genres}
              />
            </div>
            <div className="col-9">
              Showing {totalRecords} movies from database
              <MovieTable
                movies={movies}
                onLiked={this.onLikeClicked}
                onDelete={this.deleteMovie}
                onSort={this.onSorting}
                sortColumn={sortColumn}
              />
              <Pagination
                pageSize={pageSize}
                totalMovies={totalRecords}
                currentPage={currentPage}
                onPageChange={this.onPageClicked}
              />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Movies;
