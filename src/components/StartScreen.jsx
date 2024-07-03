import PropTypes from "prop-types"

const StartScreen = ({ maxScore, score, setScore, setGameOver }) => {

    const handleRestart = () => {
        setScore(0);
        setGameOver(false);
    }

    return (
        <>
            {score === maxScore 
            ? (<h1>YOU WIN!</h1>)
            : (
                <div className="loss">
                    <h1>YOU LOSE!</h1>
                    <h1>Final Score: {score}</h1>
                </div>
            )}
            <button onClick={handleRestart}>Play Again</button>
        </>
    )
}

StartScreen.propTypes = {
    maxScore: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    setScore: PropTypes.func.isRequired,
    setGameOver: PropTypes.func.isRequired
}

export default StartScreen;