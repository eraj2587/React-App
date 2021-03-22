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
    selectedGenre: 0,
    filteredMovies: [],
    sortColumn: {},
  };

  constructor() {
    super();
    const genres = [{ name: "All", id: 0 }, ...getGenres()];
    this.state.movies = getMovies();
    this.state.genres = genres;
    this.state.filteredMovies = getMovies();
    this.state.sortColumn = { path: "title", orderBy: "asc" };
  }

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
    this.setState({ selectedGenre: genre.id, currentPage: 1 });
    let movies =
      genre.id === 0
        ? this.state.movies
        : this.state.movies.filter((x) => x.genre.id === genre.id);
    this.setState({ filteredMovies: movies });
  };

  onSorting = (sortColumn) => {
    console.log("parent", sortColumn);
    console.log("parent state", this.state.sortColumn);
    const filteredMovies = _.orderBy(
      this.state.filteredMovies,
      [sortColumn.path],
      [sortColumn.orderBy]
    );
    this.setState({ sortColumn, filteredMovies });
  };

  render() {
    const selectedMovies = paginate(
      this.state.filteredMovies,
      this.state.currentPage,
      this.state.pageSize
    );

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
              Showing {this.state.filteredMovies.length} movies from database
              <MovieTable
                movies={selectedMovies}
                onLiked={this.onLikeClicked}
                onDelete={this.deleteMovie}
                onSort={this.onSorting}
                sortColumn={this.state.sortColumn}
              />
              <Pagination
                pageSize={this.state.pageSize}
                totalMovies={this.state.filteredMovies.length}
                currentPage={this.state.currentPage}
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
