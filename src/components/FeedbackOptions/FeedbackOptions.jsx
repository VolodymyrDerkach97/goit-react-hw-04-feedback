import css from './FeedbackOptions.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
