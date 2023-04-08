import { useState } from "react";
import Tile from "./Tile";
import { pokemons } from "../pokemons";
export default function Grid(props) {
    const [positions, setPositions] = useState(pokemons.map((value, index) => index))
    
    function randomizePositions() {
        let array = positions;
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setPositions(array);
    }

    return (
        <div className="Grid">
            {positions.map(value => {
                return (
                    <Tile key={pokemons[value].name}
                        pokemon={pokemons[value]}
                        incrementScore={props.incrementScore}
                        randomizePositions={randomizePositions}
                        resetGame={props.resetGame}
                        reset={props.reset}
                    />
                )
            })}
        </div>
    )


}

