import { useEffect, useState } from "react";
import GetPokemon from "./fetch";
import Shuffle from "../utils/shuffle";


function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemonSelectedList, setPokemonSelectedList] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // handle select upon clicking the card
  const handleSelect = (e, id) => {
    if(pokemonSelectedList.includes(id)) {
      // reset
      alert('GAME OVER!');
      setPokemonSelectedList([]);
      setScore(0);
    } else {
      // set score
      const newScore = score + 1;
      setScore(newScore);
      if(newScore > bestScore) setBestScore(newScore);
      // add selected
      setPokemonSelectedList((prevList) => [...prevList, id])
      // shuffle
      setPokemonList((prevList) => Shuffle(prevList));

      if(newScore == 10){
        alert('YOU WIN');
        setPokemonSelectedList([]);
        setScore(0);
      }
    }
  }

  // fetch data once
  useEffect(() => {
    GetPokemon(setPokemonList, setLoading)
  }, []);

  return (
    <section className="container-xl">
      <div className="flex flex-col justify-between gap-4 mt-10 sm:items-center sm:flex-row">
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl text-amber-400 sm:text-center">Pokemon Memory Game</h1>
        <p className="text-lg text-amber-400">
          Score: {score}
          <br />
          Best Score: {bestScore}
        </p>
      </div>
      <br />

      <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {
          !loading && pokemonList.map((data) => {
            return (
              <div 
                key={data.id} 
                onClick={(e) => handleSelect(e, data.id)}
                className="grid gap-2 p-4 transition duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-white/50 hover:scale-95 bg-white/10 backdrop-blur-md place-content-center"
              >
                <img 
                  className="w-50 h-50" 
                  src={data.image} 
                  alt={`${data.name} image`} 
                />
                <p 
                  className="font-serif text-2xl italic font-bold text-center uppercase text-amber-400"
                >
                  {data.name}
                </p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default App;
