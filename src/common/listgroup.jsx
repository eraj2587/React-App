import React, { Component } from "react";

const ListGroup = (props) => {
  const { onSelected, selectedItem, items, _id, _textValue } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className={
            selectedItem === item[_id]
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
          key={item[_id]}
          onClick={() => onSelected(item)}
        >
          {item[_textValue]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  _id: "id",
  _textValue: "name",
};

export default ListGroup;
