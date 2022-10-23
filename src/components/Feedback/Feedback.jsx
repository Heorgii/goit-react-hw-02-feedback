// import PropTypes from 'prop-types';

const good = document.querySelector('.btn-good');
const neutral = document.querySelector('.btn-neutral');
const bad = document.querySelector('.btn-bad');


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
                <button className="btn-good" type="button">Good</button>
                <button className="btn-neutral" type="button">Neutral</button>
                <button className="btn-bad" type="button">Bad</button>
            </div>

            <h2>Statistics</h2>
            <div>
                <p className="good_val">Good:{state.good}</p>
                <p className="neutral_val">Neutral:{state.neutral}</p>
                <p className="bad_val">Bad:{state.bad}</p>

            </div>
        </div>
    );
}
