import './App.css';
import { useState, useEffect } from 'react';
import Tile from './components/Tile';
import Score from './components/Score';
function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getPokemon(url) {
    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }

      let data = await response.json();
      let pokemon = data.map((result) => ({
        name: result.name,
        image: result.sprites['front_default'],
        id: result.id
      }));
      return pokemon;
    } catch (err) {
      setError(err.message);
      setPokemons(null);
    } 
  }

  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon/?limit=12&offset=20'
        )
  
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
  
        let data = await response.json();
        let temp = [];
        data['results'].forEach((pokemon) =>
        {
          temp.push(getPokemon(pokemon.url));
        });
        setPokemons(temp);
      } catch (err) {
        setError(err.message);
        setPokemons(null);
      } finally {
        setLoading(false);
      }
    }
    getPokemons();
    console.log(pokemons);
  }, [])

  console.log(pokemons);
  return (
    <div className="Header">
      <div className="Title" >
        <h1>Memory game</h1>
        <p>Click on each image once to get a point, if an image is clicked on twice you lose all your points.
          Try to click on all images once for a maximum score.</p>
      </div>
      <Score score={score} highScore={highScore}></Score>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {pokemons && pokemons.map(pokemon => {
        return (
          <Tile image={pokemon.url} name={pokemon.name} ></Tile>
        )
      })}
    </div>);
}

export default App;
