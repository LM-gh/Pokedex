import React from "react";
import { Link } from "react-router-dom";

export const Pagination = ({
  pokemonesPerPage,
  pokemonesTotales,
  paginate,
}) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(pokemonesTotales / pokemonesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div id="div-pagination">
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <Link to={"/Pokedex/" + number}>
                <a
                  onClick={() => paginate(number)}
                  href={number}
                  className="page-link text-danger"
                >
                  {number}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
