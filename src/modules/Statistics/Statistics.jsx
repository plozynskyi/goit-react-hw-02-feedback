import PropTypes from 'prop-types';

import FeedbackResults from './FeedbackResults/FeedbackResults';
import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total ? (
    <FeedbackResults
      totalFeedback={total}
      goodFeedback={good}
      neutralFeedback={neutral}
      badFeedback={bad}
      goodPercentFeedback={positivePercentage}
    />
  ) : (
    <Notification text={'There is no feedback'} />
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
