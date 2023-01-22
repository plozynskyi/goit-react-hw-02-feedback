import PropTypes from 'prop-types';

import Button from '../../../shared/components/Button/Button';

const FeedbackVariants = ({ feedbackOptions, leaveFeedback }) => {
  const elements = feedbackOptions.map(name => (
    <p key={name}>
      <Button onClick={() => leaveFeedback(name)} type="button">
        {name}
      </Button>
    </p>
  ));
  return <>{elements}</>;
};

export default FeedbackVariants;

FeedbackVariants.propTypes = {
  feedbackOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};
