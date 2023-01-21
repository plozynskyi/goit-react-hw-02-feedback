import PropTypes from 'prop-types';

import { Block, BlockTitle } from './feedback-block.styled';

const FeedbackBlock = ({ children, title }) => {
  return (
    <Block>
      <BlockTitle>{title}</BlockTitle>
      {children}
    </Block>
  );
};

export default FeedbackBlock;

FeedbackBlock.prototypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
