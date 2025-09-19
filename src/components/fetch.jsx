async function GetPokemon(setPokemonList, setLoading){
  try{
    setLoading(true)
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();

    const allData = await Promise.all(
      data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();

        return {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default
        }
      })
    )

    setPokemonList(allData)
    setLoading(false)
  } catch(error){
    console.error(`Error: ${error}`)
  }
}

export default GetPokemon;