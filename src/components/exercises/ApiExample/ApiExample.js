import React, { useState, useEffect } from "react";
import "./ApiExample.css";
import InfoPokemon from "./ApiState/ApiState";
import axios from "axios";
import { FilterPokemon } from "../../../utils/getApiCall";

const BASE_API = "https://pokeapi.co/api/v2/";

const PokeApi = () => {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState("");
  const [pokemon, setPokemon] = useState();
  const [shiny, setShinyPokemon] = useState(false);
  const [back, setBackPokemon] = useState(false);

  //FORMA DOS
  // const [pokemon2, setPokemon2] = useState("pikachu");
  // const [pokemonData, setPokemonData] = useState([]);
  // const [pokemonType, setPokemonType] = useState("");
  // const handleChange = (e) => {
  //   setPokemon2(e.target.value.toLowerCase());
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   getPokemon();
  // };
  // const getPokemon = async () => {
  //   const toArray = [];
  //   try {
  //     const url = `https://pokeapi.co/api/v2/pokemon/${pokemon2}`;
  //     const res = await axios.get(url);
  //     toArray.push(res.data);
  //     setPokemonType(res.data.types[0].type.name);
  //     setPokemonData(toArray);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // console.log(pokemonData);

  // return (
  //   <div className="App">
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         <input
  //           className="Search"
  //           type="text"
  //           onChange={handleChange}
  //           placeholder="enter pokemon name"
  //         />
  //       </label>
  //     </form>

  //     {pokemonData.map((data) => {
  //       return (
  //         <div className="container">
  //           <h1>Forma 2 con todos los datos en array</h1>
  //           <h2>{data.name}</h2>
  //           <img src={data.sprites["front_default"]} />
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
  //




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
