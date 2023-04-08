export default function Score({score,highScore}) {
    return(
    <div className="Score">
        <p>
            Score: {score}
            High Score: {highScore}
        </p>
    </div>
    );
}