export const PokemonCard = ({pokemonData}) => {
  return (
        <li className="pokemon-card">
        <figure>
            <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} className="pokemon-image"/>
        </figure>
        <h1>{pokemonData.name.toUpperCase() }</h1>
        <div className="pokemon-types">
            <p>
            {pokemonData.types.map((curType)=> curType.type.name).join(", ")}
            </p>
        </div>
        <div className="grid-three-col">
            <p className="pokemon-stat">
                <span>Height:</span>
                <span>{pokemonData.height}</span>
            </p>
            <p className="pokemon-stat">
                <span>Weight:</span>
                <span>{pokemonData.weight}</span>
            </p>    
            <p className="pokemon-stat">
                <span>Speed:</span>
                <span>{pokemonData.stats[5].base_stat}</span>
            </p>
        </div>
        <div className="pokemon-abilities">
            <p>
                <span>Experience:</span>
                <span>{pokemonData.base_experience}</span>
            </p>
            <p>
                <span>Attack:</span>
                <span>{pokemonData.stats[1].base_stat}</span>
            </p>
            <p>
                <span>Abilities:</span>
                <span>{pokemonData.abilities.map((curAbility)=> curAbility.ability.name).slice(0,1).join(", ")}</span>
            </p>
        </div>
    </li>
  )
}
