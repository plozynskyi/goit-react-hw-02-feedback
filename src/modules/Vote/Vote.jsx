import { Component } from 'react';

import VoteVariants from './VoteVariants/VoteVariants';
import VoteResults from './VoteResults/VoteResults';
import VoteBlock from './VoteBlock/VoteBlock';
import Notification from '../Notification/Notification';

import { Title, Wrapper } from './vote.styled';

const voteOptions = ['good', 'neutral', 'bad'];

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveVote = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  calcTotal() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  calcPercent(propName) {
    const total = this.calcTotal();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  }

  render() {
    const total = this.calcTotal();
    const goodPercent = this.calcPercent('good');
    const neutralPercent = this.calcPercent('neutral');
    const badPercent = this.calcPercent('bad');

    return (
      <>
        <Title>Please leav feedback</Title>
        <Wrapper>
          <VoteBlock title="Leav feedback">
            <VoteVariants options={voteOptions} leaveVote={this.leaveVote} />
          </VoteBlock>
          <VoteBlock title="Statistics:">
            {total ? (
              <VoteResults
                total={total}
                goodPercent={goodPercent}
                neutralPercent={neutralPercent}
                badPercent={badPercent}
              />
            ) : (
              <Notification text={'There is no feedback'} />
            )}
          </VoteBlock>
        </Wrapper>
      </>
    );
  }
}

export default Statistics;
