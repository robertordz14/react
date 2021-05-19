import React, { useState, useEffect } from "react";
import "./ApiExample.css";
import axios from "axios";


const PokeApi = () => {


  //FORMA DOS
  const [pokemon2, setPokemon2] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const handleChange = (e) => {
    setPokemon2(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon2}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (err) {
      console.log(err);
      alert("Numero o nombre invalido")
    }
  };
  console.log(pokemonData);

  return (
    <div className="App">
    <p>Forma 2</p>
    <p>Ingresa el numero o nombre y presiona ENTER para buscar</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="Search"
            type="text"
            onChange={handleChange}
            placeholder="Nombre del pokemon"
          />
        </label>
      </form>

      {pokemonData.map((data) => {
        return (
          <div className="container">
            <h2>{data.name.toUpperCase()}</h2>
            <img className="ImgPoke"
            src={data.sprites["front_default"]} />
            <p>ID: {data.id}</p>
          </div>
        );
      })}
    </div>
  );  
};



export default PokeApi;
