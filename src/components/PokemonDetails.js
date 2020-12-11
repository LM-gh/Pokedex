import React, { useState, useEffect } from "react";
import { BASE_URL } from "../App";

export const PokemonDetails = ({ match, currentPage }) => {
  const [loading, setLoading] = useState(true);

  const [pokemonData, setPokemonData] = useState({});

  const toSlice = `/Pokedex/${currentPage}/`;

  let pokemonName = match.path.replace(toSlice, "");

  useEffect(() => {
    const fetchPokemonData = async () => {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = await fetch(proxyurl + BASE_URL + pokemonName);
      const response = await url.json();
      try {
        setPokemonData(response);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPokemonData();
  }, [pokemonName]);

  return (
    <div className="container-fluid">
      {loading ? (
        <h1>Cargando data...</h1>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <p className="h1">
                Stats para {capitalizarPrimerLetra(pokemonData.name)}:{" "}
              </p>
              <div className="row">
                <div className="col">
                  <div className="card">
                    <img
                      src={pokemonData.sprites.front_default}
                      className="img-thumbnail"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Muestra stats, peso y tipo */}
          <div className="container-fluid" id="stats, peso y tipo">
            <div className="row" id="types">
              {Object.keys(pokemonData.types).map((index, subindex) => {
                return (
                  <div className="col-6">
                    <p className="h4">
                      Type #{subindex + 1}:{" "}
                      {capitalizarPrimerLetra(
                        pokemonData.types[index].type.name
                      )}{" "}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Muestra height and weight */}
            <div className="row" id="height and weight">
              <div className="col-6">
                <p className="h4">Height: {pokemonData.height} </p>
              </div>
              <div className="col-6">
                <p className="h4">Weight: {pokemonData.weight} </p>
              </div>
            </div>

            {/* Muestra stats y su valor */}
            <div className="row" id="stats">
              {Object.keys(pokemonData.stats).map((index) => {
                return (
                  <div className="col">
                    <ul className="list-group">
                      <li
                        className="list-group-item align-items-center"
                        key={index}
                      >
                        {capitalizarPrimerLetra(
                          pokemonData.stats[index].stat.name
                        )}
                        :{" "}
                        <span className="badge badge-primary badge-pill">
                          {pokemonData.stats[index].base_stat}
                        </span>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
            {/*  */}
          </div>
        </div>
      )}
    </div>
  );
};

export function capitalizarPrimerLetra(palabra) {
  palabra = palabra.charAt(0).toUpperCase() + palabra.slice(1);
  return palabra;
}
