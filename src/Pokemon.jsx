import { useEffect , useState} from 'react'
import { PokemonCard } from './PokemonCard';
export const Pokemon = () => {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=650";
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const fetchPokemon = async() =>{
    try {
      const res = await fetch(API);
      const data = await res.json();
      const detailedPokemonData = data.results.map(async(curPokemon)=>{
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return  data;
      });
      const detailedResponse = await Promise.all(detailedPokemonData);
      setPokemon(detailedResponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }
  useEffect(() => {
    fetch(API);
     fetchPokemon();
  }, [])
  if(loading){
    return <div className='loading'>
      <h1>Loading...</h1>
      </div>
  }
  if(error){
    return <div className='error'>
      <h1>Error: {error}</h1>
    </div>
  }
  const filteredPokemon = pokemon.filter((curPokemon)=>
      curPokemon.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
    <section>
      <header>
        <h1 className='header'>Pokemon</h1>
      </header>
      <div className='pokemon-search'>
        <input type="text" placeholder='Search Pokemon' vlaue ={search} onChange={(e)=>setSearch(e.target.value)}   />
        <button>Search</button>
      </div>
      <div className='pokemon-container'>
        <ul className='pokemon-list'>
     { filteredPokemon.map((curPokemon)=>{
        return <PokemonCard key={curPokemon.id} pokemonData = {curPokemon} />
      })}
        </ul>
      </div>
    </section>
    </>
  )
}
