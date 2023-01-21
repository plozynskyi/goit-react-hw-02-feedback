import PropTypes from 'prop-types';

import { Block, BlockTitle } from './vote-block.styled';

const VoteBlock = ({ children, title }) => {
  return (
    <Block>
      <BlockTitle>{title}</BlockTitle>
      {children}
    </Block>
  );
};

export default VoteBlock;

VoteBlock.prototypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
