import React, { useState, useEffect } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, settotal] = useState(0);
  const [positiveStatistic, setPositiveStatistic] = useState(0);

  useEffect(() => {
    setPositiveStatistic(
      Math.round((good / total) * 100) ? Math.round((good / total) * 100) : 0
    );

    settotal(good + neutral + bad);
  }, [good, neutral, bad, total]);

  const onLeaveFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevent => prevent + 1);
        break;
      case 'neutral':
        setNeutral(prevent => prevent + 1);
        break;
      case 'bad':
        setBad(prevent => prevent + 1);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
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
            positivePercentage={positiveStatistic}
          />
        )}
      </Section>
    </>
  );
};
