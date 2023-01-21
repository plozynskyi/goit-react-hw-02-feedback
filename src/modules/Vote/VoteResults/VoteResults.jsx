import PropTypes from 'prop-types';
import { VoteName } from './voteResults.styled';

const VoteResults = ({ total, goodPercent, neutralPercent, badPercent }) => {
  return (
    <>
      <VoteName>Good: {goodPercent}%</VoteName>
      <VoteName>Neutral: {neutralPercent}%</VoteName>
      <VoteName>Bad: {badPercent}%</VoteName>
      <VoteName>Total: {total}</VoteName>
      <VoteName>Positive feetback: {total}</VoteName>
    </>
  );
};

export default VoteResults;

VoteResults.propTypes = {
  total: PropTypes.number.isRequired,
  goodPercent: PropTypes.number.isRequired,
  neutralPercent: PropTypes.number.isRequired,
  badPercent: PropTypes.number.isRequired,
};
