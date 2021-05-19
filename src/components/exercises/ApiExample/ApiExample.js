import React, { useState, useEffect } from "react";
import "./ApiExample.css";
import InfoPokemon from "./ApiState/ApiState";
import axios from "axios";
import { FilterPokemon } from "../../../utils/getApiCall";

const BASE_API = "https://pokeapi.co/api/v2/";

const PokeApi = () => {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState("pikachu");
  const [pokemon, setPokemon] = useState();
  const [shiny, setShinyPokemon] = useState(false);
  const [back, setBackPokemon] = useState(false);

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch(BASE_API + `pokemon`);
      const result = await response.json();
      console.log(result);
      setData(result);
    };
    callApi();
  }, []);
  const pokeInput = (event) => {
    setFilter(event.target.value.toLowerCase());
  };
  const estadoPoke = () => {
    setShinyPokemon((prePokemonShiny) => !prePokemonShiny);
  };
  const btnPoke = async () => {
    const data = await FilterPokemon(filter);
    setPokemon(data);
  };
  const ladoPoke = () => {
    setBackPokemon((prePokemonBack) => !prePokemonBack);
  };
  const img = pokemon
    ? {
        front: pokemon.sprites.front_default,
        frontShiny: pokemon.sprites.front_shiny,
        back: pokemon.sprites.back_default,
        backShiny: pokemon.sprites.back_shiny,
      }
    : null;

  return (
    <div className="Info">
      <h2 className="Title">Buscar Pokemon</h2>
      <div>
        {data && <input className="Search" type="text" onChange={pokeInput} />}
        <button className="Btn" onClick={btnPoke}>
          Buscar
        </button>
      </div>
      <div>
        {pokemon && (
          <div>
            <InfoPokemon
              images={img}
              front={!back}
              shiny={shiny}
              onChangeType={estadoPoke}
              onFlip={ladoPoke}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PokeApi;
