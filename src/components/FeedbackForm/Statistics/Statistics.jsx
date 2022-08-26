import PropTypes from 'prop-types';
import s from "./statistics.module.css"

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {

    return (
    <ul className={s.statisticsList}>
        <li className={s.statisticsItem}>Good: {good}</li>
        <li className={s.statisticsItem}>Neutral: {neutral}</li>
        <li className={s.statisticsItem}>Bad: {bad}</li>
        <li className={s.statisticsItem}>Total: {total}</li>
        <li className={s.statisticsItem}>Positive feedback: {positivePercentage}%</li>
    </ul>);
}

export default Statistics;

Statistics.defaultProps = {}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    }