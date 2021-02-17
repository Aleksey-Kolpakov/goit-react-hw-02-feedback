import React, { Component } from 'react';
import styles from "./FeedBack.module.css"

const options = ['good', 'neutral', 'bad'];
class FeedBack extends Component {
    state = {
        good: 3,
        neutral: 0,
        bad: 3
    };
    addFeedback = (option) => {
        this.setState((prevState) => {
            return { [option]: prevState[option] + 1, };
        })
    }
    calculateTotalFeedback = () => {
        return Object.values(this.state).reduce((total, element) => total += element, 0);
    }
    calculatePersentPositiveFeedback = () => {
        const totalFeedback = this.calculateTotalFeedback();
        return Math.round(this.state.good / totalFeedback * 100);
    }
    render() {
        return (
            <div>
                <h2>Please leave Feedback</h2>
                {options.map(option => (
                    <button
                        key={option}
                        className={styles.button}
                        onClick={() => this.addFeedback(option)}
                    >{option}</button>
                ))}
                <h3>Statistic</h3>
                <ul>
                    <li>Good:{this.state.good}</li>
                    <li>Neutral:{this.state.neutral}</li>
                    <li>Bad:{this.state.bad}</li>
                    <li>Total:{this.calculateTotalFeedback()}</li>
                    <li>Positive Feedback:{this.calculatePersentPositiveFeedback()}%</li>
                </ul>
            </div>
        );
    }
}

export default FeedBack;