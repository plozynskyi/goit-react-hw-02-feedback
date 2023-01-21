import PropTypes from 'prop-types';

import Button from '../../../shared/components/Button/Button';

const FeedbackVariants = ({ options, leaveFeedback }) => {
  const elements = options.map(name => (
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
  leaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
