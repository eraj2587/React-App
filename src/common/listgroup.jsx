import { checkPropTypes } from "prop-types";
import React, { Component } from "react";
import { getGenres } from "../services/FakeGenreService";

const ListGroup = (props) => {
  const genres = getGenres();
  const { onSelected, selectedGenre } = props;
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          className={
            selectedGenre === genre.id
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
          key={genre.id}
          onClick={() => onSelected(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
