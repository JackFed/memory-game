import PropTypes from "prop-types";
function Score({ count }) {

    return (
        <div className="scoreCount">
            Score: {count}
        </div>
    )   
}

Score.propTypes = {
    count: PropTypes.number.isRequired
  }

export default Score;
