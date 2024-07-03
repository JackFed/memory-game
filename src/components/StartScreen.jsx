import PropTypes from "prop-types"

const StartScreen = ({ score, setScore, setGameOver }) => {

    const handleRestart = () => {
        setScore(0);
        setGameOver(false);
    }

    return (
        <>
            {score === 3 
            ? (<div>YOU Win!</div>)
            : (<div>YOU LOSE!</div>)}
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