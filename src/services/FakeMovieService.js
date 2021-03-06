import { getGenres } from "./FakeGenreService";
const movies = [
  {
    id: 1,
    title: "Terminator",
    numberInStock: 6,
    genre: { id: 100, name: "Horror" },
    dailyRentalRate: 12,
    publishDate: "2021-03-23T12:23:45.564Z",
    isLiked: true,
  },
  {
    id: 2,
    title: "Transformer",
    numberInStock: 21,
    genre: { id: 200, name: "Drama" },
    dailyRentalRate: 34,
    publishDate: "2019-04-03T12:23:45.564Z",
    isLiked: false,
  },
  {
    id: 3,
    title: "Godzilla",
    numberInStock: 11,
    genre: { id: 300, name: "Sci-fi" },
    dailyRentalRate: 5,
    publishDate: "1980-03-23T12:23:45.564Z",
    isLiked: true,
  },
  {
    id: 4,
    title: "IceAge",
    numberInStock: 43,
    genre: { id: 400, name: "Cartoon" },
    dailyRentalRate: 13,
    publishDate: "1999-05-13T12:23:45.564Z",
    isLiked: true,
  },
  {
    id: 5,
    title: "The Conjuring",
    numberInStock: 5,
    genre: { id: 500, name: "Horror" },
    dailyRentalRate: 15,
    publishDate: "2011-04-02T12:23:45.564Z",
    isLiked: false,
  },
  {
    id: 6,
    title: "Interstellar",
    numberInStock: 16,
    genre: { id: 600, name: "Sci-fi" },
    dailyRentalRate: 25,
    publishDate: "2002-03-13T12:23:45.564Z",
    isLiked: true,
  },
  {
    id: 7,
    title: "Die Hard",
    numberInStock: 16,
    genre: { id: 100, name: "Horror" },
    dailyRentalRate: 25,
    publishDate: "2002-04-13T12:23:45.564Z",
    isLiked: false,
  },
  {
    id: 8,
    title: "The Grudge",
    numberInStock: 10,
    genre: { id: 100, name: "Horror" },
    dailyRentalRate: 15,
    publishDate: "2004-05-13T12:23:45.564Z",
    isLiked: false,
  },
  {
    id: 9,
    title: "Passangers",
    numberInStock: 16,
    genre: { id: 300, name: "Sci-fi" },
    dailyRentalRate: 25,
    publishDate: "2002-03-13T12:23:45.564Z",
    isLiked: true,
  },
  {
    id: 10,
    title: "Iron Man",
    numberInStock: 16,
    genre: { id: 500, name: "Horror" },
    dailyRentalRate: 25,
    publishDate: "2001-12-13T12:23:45.564Z",
    isLiked: false,
  },
  {
    id: 11,
    title: "Gravity",
    numberInStock: 16,
    genre: { id: 300, name: "Sci-fi" },
    dailyRentalRate: 25,
    publishDate: "2002-03-13T12:23:45.564Z",
    isLiked: true,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(movieId) {
  return movies.find((x) => x.id === movieId);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((x) => x.id === movie.Id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = getGenres().find((g) => g.id === movie.genre.id);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.publishDate = movie.publishDate;
  movieInDb.title = movie.title;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;
}
