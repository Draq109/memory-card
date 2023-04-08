import { useState, useEffect } from "react";
export default function Tile(props) {
    const [clicked, setClicked] = useState(false);

    function tileClicked() {
        if (clicked === true)
            props.resetGame();
        else {
            setClicked(true);
            props.incrementScore();
            props.randomizePositions();
        }
    }

    useEffect(() => {
        if (!props.reset) {
            setClicked(false);
        }
    }, [props.reset])

    return (
        <div className="Tile">
            <img src={props.pokemon.image} alt={props.pokemon.name} onClick={tileClicked} />
            <span>{props.pokemon.name}</span>
        </div>
    );
}
