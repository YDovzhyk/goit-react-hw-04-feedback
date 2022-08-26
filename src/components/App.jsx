import { Component } from "react";

import FeedbackOptions from "./FeedbackForm/FeedbackOptions/FeedbackOptions";
import Statistics from "./FeedbackForm/Statistics/Statistics";
import SectionTitle from "./FeedbackForm/SectionTitle/SectionTitle";
import NotificationMessage from "./FeedbackForm/NotificationMessage/NotificationMessage";

import s from "./FeedbackForm/feedbackForm.module.css"


export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    countTotalFeedback() {
        const {good, neutral, bad} = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage(propertyName) {
        const total = this.countTotalFeedback();
        if(!total) {
            return 0;
        }
        const value = this.state[propertyName];
        const result = (value / total) * 100;
        return Number(result.toFixed(2));
    }

    onLeaveFeedback = propertyName => {
        this.setState(prevState => ({
            [propertyName]: prevState[propertyName] + 1,
        }));
    }

    render(){
        const {good, neutral, bad} = this.state;

        const total = this.countTotalFeedback();

        const goodPercent = this.countPositiveFeedbackPercentage("good");

        return (
            <div className={s.feedbackForm}>
                <SectionTitle title="Please leave feedback">
                    <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
                </SectionTitle>
                <SectionTitle title="Statistics">
                    {total > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={goodPercent}></Statistics> : <NotificationMessage title="There is no feedback"></NotificationMessage>}
                </SectionTitle>
            </div>
        )
    }
}

export default App;