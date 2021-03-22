import React, { Component } from "react";

class TableHeader extends Component {
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

  renderSortIcon = (column) => {
    console.log("props", this.props);
    console.log("column", column);
    const { sortColumn } = this.props.sortColumn;
    //if (column.path !== sortColumn.path) return null;
    // if (sortColumn.orderBy === "asc") return <i className="fa fa-sort-asc"></i>;
    // return <i className="fa fa-sort-desc"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
              style={{ fontWeight: 500, cursor: "pointer" }}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
