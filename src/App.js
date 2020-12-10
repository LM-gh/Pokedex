import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Jumbotron } from "./components/Jumbotron";
import { Pagination } from "./components/Pagination";
import { TablaPokemones } from "./components/TablaPokemones";
import { PokemonDetails } from "./components/PokemonDetails";

export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const App = () => {
  const pokemonesTotales = 1118;

  const [pokemones, setPokemones] = useState([]);
  const [pokemonesPerPage] = useState(20);

  const [currentPage, setCurrentPage] = useState(1);

  const [pokemon, setCurrentPokemon] = useState(null);

  // Get pokemonesPerPage
  const lastPokemonIndex = currentPage * pokemonesPerPage;
  const firstPokemonIndex = lastPokemonIndex - pokemonesPerPage;
  const currentPokemones = pokemones.slice(firstPokemonIndex, lastPokemonIndex);

  useEffect(() => {
    const fetchPokemons = async () => {
      const objectResponsePokemones = await fetch(
        `${BASE_URL}?offset=0&limit=${pokemonesTotales}`
      )
        .then((r) => r.json())
        .then((r) => r.results)
        .then((r) => setPokemones(r));
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    async function obtenerSprites(pokemones) {
      try {
        for (let i = 0; i < pokemones.length; i++) {
          let url = await fetch(pokemones[i]["url"]);
          let response = await url.json();
          let sprites = await response.sprites;
          let spriteData = await sprites.front_default;
          pokemones[i].sprite = spriteData;
        }
      } catch (e) {
        console.error(e.message);
      }
    }
    obtenerSprites(currentPokemones);
  }, [currentPokemones]);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleButtonID = (event) =>
    setCurrentPokemon(event.currentTarget.dataset.id);

  return (
    <Router>
      <NavBar />

      <Switch>
        <Route
          exact
          path={"/" + currentPage + "/" + pokemon}
          render={(props) => (
            <PokemonDetails {...props} currentPage={currentPage} />
          )}
        />

        <Route path={"/"}>
          <Jumbotron />
          <TablaPokemones
            pokemones={currentPokemones}
            currentPage={currentPage}
            handleButtonID={handleButtonID}
          />
          <Pagination
            pokemonesPerPage={pokemonesPerPage}
            pokemonesTotales={pokemonesTotales}
            paginate={paginate}
            currentPage={currentPage}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
