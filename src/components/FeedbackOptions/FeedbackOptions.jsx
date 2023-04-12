import css from './FeedbackOptions.module.css';
import clsx from 'clsx';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const firstLetterToUppercase = str => {
    return str[0].toUpperCase() + str.slice(1);
  };
  const feedbackButtonsNameArr = Object.keys(options);
  return (
    <>
      {feedbackButtonsNameArr.map(name => (
        <button
          className={clsx(css.button, {
            [css.good]: name === 'good',
            [css.neutral]: name === 'neutral',
            [css.bad]: name === 'bad',
          })}
          key={name}
          onClick={onLeaveFeedback}
          name={name}
        >
          {firstLetterToUppercase(name)}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
