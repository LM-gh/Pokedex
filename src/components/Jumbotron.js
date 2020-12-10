import React from "react";

export const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container-fluid" id="jumbotron-texto">
        <h1 className="display-4">Hola!</h1>
        <p className="lead">
          Esta aplicación te va a mostrar todos los Pokemones con sus
          respectivas habilidades.
        </p>
        <hr className="my-4" />
        <p>
          Pokémon are the creatures that inhabit the world of the Pokémon games.
          They can be caught using Pokéballs and trained by battling with other
          Pokémon. Each Pokémon belongs to a specific species but may take on a
          variant which makes it differ from other Pokémon of the same species,
          such as base stats, available abilities and typings.
        </p>
        <p className="lead">
          Hay un total de <strong id="total-pokemones">1118</strong> Pokemones.
          Consultalos en el siguiente catálogo.
        </p>
      </div>
    </div>
  );
};
