import PropTypes from 'prop-types';
import { FeedbackName } from './feedbackResults.styled';

const FeedbackResults = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  totalFeedback,
  goodPercentFeedback,
}) => {
  return (
    <>
      <FeedbackName>Good: {goodFeedback}</FeedbackName>
      <FeedbackName>Neutral: {neutralFeedback}</FeedbackName>
      <FeedbackName>Bad: {badFeedback}</FeedbackName>
      <FeedbackName>Total: {totalFeedback}</FeedbackName>
      <FeedbackName>Positive feedback: {goodPercentFeedback}%</FeedbackName>
    </>
  );
};

export default FeedbackResults;

FeedbackResults.propTypes = {
  goodFeedback: PropTypes.number.isRequired,
  neutralFeedback: PropTypes.number.isRequired,
  badFeedback: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  goodPercentFeedback: PropTypes.number.isRequired,
};
