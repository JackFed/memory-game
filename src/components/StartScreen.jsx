import PropTypes from "prop-types"

const StartScreen = ({ maxScore, score, setScore, setGameOver }) => {

    const handleRestart = () => {
        setScore(0);
        setGameOver(false);
    }

    return (
        <>
            {score === maxScore 
            ? (<div>YOU Win!</div>)
            : (
                <div className="loss">
                    <div>YOU LOSE!</div>
                    <div>Final Score: {score}</div>
                </div>
            )}
            <button onClick={handleRestart}>Play Again</button>
        </>
    )
}

StartScreen.propTypes = {
    score: PropTypes.number.isRequired,
    setScore: PropTypes.func.isRequired,
    setGameOver: PropTypes.func.isRequired
}

export default StartScreen;