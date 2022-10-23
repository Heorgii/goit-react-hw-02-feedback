// import PropTypes from 'prop-types';
export const Feedback = ({ state }) => {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    return (
        <div>
            <h1>Please leave feedback</h1>
            <div>
                <button className="btn-character" type="button">Good</button>
                <button className="btn-character" type="button">Neutral</button>
                <button className="btn-character" type="button">Bad</button>
            </div>

            <h2>Statistics</h2>
            <div>
                <p className="val">Good:{state.good}</p>
                <p className="val">Neutral:{state.neutral}</p>
                <p className="val">Bad:{state.bad}</p>

            </div>
        </div>
    );
}
