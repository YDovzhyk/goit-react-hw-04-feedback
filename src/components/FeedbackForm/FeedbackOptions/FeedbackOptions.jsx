import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    const props = Object.getOwnPropertyNames(options);
    return (
        <div>
            {props.map((element) => (
            <button key={nanoid()} className={s.button} type="button" onClick={()=> onLeaveFeedback(element)}>
                {element}
                </button>
            ))}
        
        </div>
    )
}

export default FeedbackOptions;

FeedbackOptions.defaultProps = {}

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        }),
    onLeaveFeedback: PropTypes.func.isRequired,
    }