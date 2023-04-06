
export default function Tile({ image, name, id}) {
    return (
        <div className="Tile">
            <img src={image} alt={name}/>
            <span>{name}</span>
        </div>
    );
}

/*
{pokemons.map(pokemon => {
        return (
          <Tile image={pokemon.image} name={pokemon.name} id={pokemon.id}></Tile>
        )
      })}
*/