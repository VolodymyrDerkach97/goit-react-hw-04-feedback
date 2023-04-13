import React, { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  totalStatistic = () =>
    Object.values(this.state).reduce((acc, item) => acc + item, 0);

  positivePercentageStatistics = () => {
    const { good } = this.state;
    const total = this.totalStatistic();
    return Math.round((good / total) * 100)
      ? Math.round((good / total) * 100)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalStatistic();
    const positivePercentage = this.positivePercentageStatistics();

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {total === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
