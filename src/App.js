import React, { Component } from 'react';
import styles from './App.module.css';
import FeedBack from './components/FeedBack/FeedBack';
import Statistics from './components/Statistics/Statistics';
import SectionTitle from './components/SectionTitle/SectionTitle';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification'


const options = ['good', 'neutral', 'bad'];
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
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
    const { good, neutral, bad } = this.state;
    const total = this.calculateTotalFeedback();
    const positivePercentage = this.calculatePersentPositiveFeedback();
    return (
      <div className={styles.container}>
        <SectionTitle title="Please leave Feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.addFeedback} />
          {total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} /> : <Notification message="No feedback given" />}
        </SectionTitle>
      </div>
    );
  }
}

export default App;

