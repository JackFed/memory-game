import PropTypes from "prop-types";
function Score({ count }) {

    return (
        <div className="scoreCount">
            <h1>Score: {count}</h1>
        </div>
    )   
}

Score.propTypes = {
    count: PropTypes.number.isRequired
  }

export default Score;
