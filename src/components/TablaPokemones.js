import React from "react";
import { Link } from "react-router-dom";
import { capitalizarPrimerLetra } from "./PokemonDetails";

export const TablaPokemones = ({ pokemones, currentPage, handleButtonID }) => {
  let grid = [];

  for (let i = 0; i < pokemones.length; i++) {
    grid.push(i);
  }

  return (
    <div className="container-fluid" id="tabla-pokemones">
      <div className="row">
        {grid.map((element, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card">
                <div className="h-25 w-50">
                  <img
                    className="card-img-top"
                    src={pokemones[index]["sprite"]}
                    alt={
                      pokemones[index]["sprite"] === null
                        ? "Sprite no disponible para este Pokemon"
                        : "Cargando sprite..."
                    }
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    {capitalizarPrimerLetra(pokemones[index]["name"])}
                  </h5>
                  <Link
                    to={
                      "/" +
                      currentPage +
                      "/" +
                      capitalizarPrimerLetra(pokemones[index]["name"])
                    }
                  >
                    <a
                      href={
                        "/Pokedex/" +
                        currentPage +
                        "/" +
                        pokemones[index]["name"]
                      }
                      className="btn btn-primary"
                      key={pokemones[index]["name"]}
                      data-id={pokemones[index]["name"]}
                      onClick={handleButtonID}
                    >
                      Ver detalles
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
