export const FilterPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err+" POKEMON NO ENCONTRADO");
    alert("Numero o nombre invalido");
  }
};
