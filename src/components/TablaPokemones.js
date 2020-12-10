import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { capitalizarPrimerLetra } from "./PokemonDetails";

export const TablaPokemones = ({ pokemones, currentPage, handleButtonID }) => {
  const [loading, setLoading] = useState(true);

  let grid = [];

  for (let i = 0; i < pokemones.length; i++) {
    grid.push(i);
  }

  useEffect(() => {
    const $titulos = document.querySelectorAll(".card-title");
    const $imgs = document.querySelectorAll(".card-img-top");

    const setSprites = (pokemones) => {
      for (let i = 0; i < pokemones.length; i++) {
        $titulos[i].textContent = capitalizarPrimerLetra(pokemones[i]["name"]);
        $imgs[i].src = pokemones[i]["sprite"];
      }
    };

    try {
      setSprites(pokemones);
      setLoading(false);
    } catch (e) {
      console.error(e.message);
    }
  }, [pokemones]);

  return (
    <div className="container-fluid" id="tabla-pokemones">
      {loading ? (
        <p>Cargando tabla de pokemones...</p>
      ) : (
        <div className="row">
          {grid.map((element, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card">
                  <div className="h-25 w-50">
                    <img
                      className="card-img-top"
                      src={pokemones[index]["sprite"]}
                      alt="Cargando sprite..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{pokemones[index]["name"]}</h5>
                    <Link
                      to={"/" + currentPage + "/" + pokemones[index]["name"]}
                    >
                      <a
                        href={
                          "/" + currentPage + "/" + pokemones[index]["name"]
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
      )}
    </div>
  );
};
