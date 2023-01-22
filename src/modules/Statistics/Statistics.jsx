import { Component } from 'react';

import FeedbackVariants from './FeedbackVariants/FeedbackVariants';
import FeedbackResults from './FeedbackResults/FeedbackResults';
import FeedbackBlock from './FeedbackBlock/FeedbackBlock';
import Notification from '../Notification/Notification';

import { Title, Wrapper } from './statistics.styled';

const FeedbackOptions = ['good', 'neutral', 'bad'];

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const totalGoodFeedback = good;
    const result = ((totalGoodFeedback / total) * 100).toFixed();
    return Number(result);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const goodFeedback = good;
    const neutralFeedback = neutral;
    const badFeedback = bad;
    const totalFeedback = this.countTotalFeedback();
    const goodPercentFeedback = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Title>Please leave feedback</Title>
        <Wrapper>
          <FeedbackBlock title="Leave feedback">
            <FeedbackVariants
              feedbackOptions={FeedbackOptions}
              leaveFeedback={this.leaveFeedback}
            />
          </FeedbackBlock>
          <FeedbackBlock title="Statistics:">
            {totalFeedback ? (
              <FeedbackResults
                totalFeedback={totalFeedback}
                goodFeedback={goodFeedback}
                neutralFeedback={neutralFeedback}
                badFeedback={badFeedback}
                goodPercentFeedback={goodPercentFeedback}
              />
            ) : (
              <Notification text={'There is no feedback'} />
            )}
          </FeedbackBlock>
        </Wrapper>
      </>
    );
  }
}

export default Statistics;
