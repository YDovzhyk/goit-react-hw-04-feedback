import { useState } from "react";

import FeedbackOptions from "./FeedbackForm/FeedbackOptions/FeedbackOptions";
import Statistics from "./FeedbackForm/Statistics/Statistics";
import SectionTitle from "./FeedbackForm/SectionTitle/SectionTitle";
import NotificationMessage from "./FeedbackForm/NotificationMessage/NotificationMessage";

import s from "./FeedbackForm/feedbackForm.module.css"

export const App = () => {
    const [state, setState] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const onLeaveFeedback = (propertyName) => {
        setState(prevState => {
            return {
                ...prevState,
                [propertyName]: prevState[propertyName] + 1
            }
        });
    }
    const {good, neutral, bad} = state;
    const totalFeedback = good + neutral + bad;

    const countPercentage = (propertyName) => {
        if(!totalFeedback) {
            return 0;
        }
        const value = state[propertyName];
        const result = (value / totalFeedback) * 100;
        return Number(result.toFixed(2));
    }

    const goodPercent = countPercentage("good");

    return (
        <div className={s.feedbackForm}>
            <SectionTitle title="Please leave feedback">
                <FeedbackOptions options={state} onLeaveFeedback={onLeaveFeedback} />
            </SectionTitle>
            <SectionTitle title="Statistics">
                {totalFeedback > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={goodPercent}></Statistics> : <NotificationMessage title="There is no feedback"></NotificationMessage>}
            </SectionTitle>
        </div>
    )
}

export default App;