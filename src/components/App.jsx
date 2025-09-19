import { useEffect, useState } from "react";
import GetPokemon from "./fetch";

function App() {
  const [pokemonList, setPokemonList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetPokemon(setPokemonList, setLoading)
  }, []);

  return (
    <>
      <h1>POKEMON</h1>

      {
        !loading && pokemonList.map((data) => {
          return (
            <div key={data.id}>
              <img src={data.image} alt={`${data.name} image`} />
              <p>{data.name}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
