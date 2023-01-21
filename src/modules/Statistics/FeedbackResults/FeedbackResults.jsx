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
  total: PropTypes.number.isRequired,
  goodPercent: PropTypes.number.isRequired,
  neutralPercent: PropTypes.number.isRequired,
  badPercent: PropTypes.number.isRequired,
};
