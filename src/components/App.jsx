import { useEffect, useState } from "react";
import GetPokemon from "./fetch";

function App() {
  const [pokemonList, setPokemonList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetPokemon(setPokemonList, setLoading)
  }, []);

  return (
    <section className="container-xl">
      <div className="flex items-center justify-between mt-10">
        <h1 className="mt-4 text-4xl font-bold text-center text-amber-400">Pokemon Memory Game</h1>
        <p className="text-lg text-amber-400">
          Score:
          <br />
          Best Score:
        </p>
      </div>
      <br />

      <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-4">
        {
          !loading && pokemonList.map((data) => {
            return (
              <div key={data.id} className="grid gap-2 p-4 transition duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-white/50 hover:scale-95 bg-white/10 backdrop-blur-md place-content-center">
                <img className="w-50 h-50" src={data.image} alt={`${data.name} image`} />
                <p className="font-serif text-2xl italic font-bold text-center uppercase text-amber-400">{data.name}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default App
