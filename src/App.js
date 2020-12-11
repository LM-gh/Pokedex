import "./App.css";
import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Jumbotron } from "./components/Jumbotron";
import { Pagination } from "./components/Pagination";
import { TablaPokemones } from "./components/TablaPokemones";
import { PokemonDetails } from "./components/PokemonDetails";

export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const App = () => {
  const [totalPokemones, setTotalPokemones] = useState(null);
  const [pokemones, setPokemones] = useState([]);
  const [pokemonesPerPage] = useState(20);
  const [pokemon, setCurrentPokemon] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);

  // Get pokemonesPerPage
  const lastPokemonIndex = currentPage * pokemonesPerPage;
  const firstPokemonIndex = lastPokemonIndex - pokemonesPerPage;

  useEffect(() => {
    const fetchPokemons = async () => {
      let pokemones = await fetch(
        `${BASE_URL}?offset=${
          (currentPage - 1) * pokemonesPerPage
        }&limit=${pokemonesPerPage}`
      )
        .then((r) => r.json())
        .then((r) => r.results);
      await Promise.all(
        pokemones.map(async (pokemon, index) => {
          const url = await fetch(pokemon.url);
          const response = await url.json();
          const sprites = await response.sprites;
          const spriteData = sprites.front_default;
          pokemones[index].sprite = spriteData;
        })
      );

      const total = await fetch(BASE_URL);
      const res = await total.json();
      const count = await res.count;
      setTotalPokemones(count);
      setPokemones(pokemones);
    };
    try {
      fetchPokemons();
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [currentPage]);

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
          <Jumbotron total={totalPokemones} />
          {loading ? (
            <div>
              <p className="h5">Cargando data de los Pokemones...</p>
            </div>
          ) : (
            <Fragment>
              <TablaPokemones
                pokemones={pokemones}
                currentPage={currentPage}
                handleButtonID={handleButtonID}
              />
              <Pagination
                pokemonesPerPage={pokemonesPerPage}
                pokemonesTotales={totalPokemones}
                paginate={paginate}
              />
            </Fragment>
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
