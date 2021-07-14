import React from "react";
import classes from "./Pagination.module.css";

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  const numberOfPages = Math.ceil(totalUsers / usersPerPage);

  for (let i = 0; i < numberOfPages; i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <nav>
      <ul className={classes.pagination}>
        {pageNumbers.map((number) => {
          return (
            <li key={number} className={classes.pageItem}>
              <button
                onClick={() => paginate(number)}
                className={classes.pageLink}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
