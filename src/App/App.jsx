import { Component } from 'react';

import FeedbackVariants from '../modules/Statistics/FeedbackVariants/FeedbackVariants';
import FeedbackBlock from '../modules/Statistics/FeedbackBlock/FeedbackBlock';
import Statistics from '../modules/Statistics/Statistics';

import { MainSection, Title, Wrapper } from './app.styled';

const FeedbackOptions = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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

  leaveFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <MainSection>
        <Title>Please leave feedback</Title>
        <Wrapper>
          <FeedbackBlock title="Leave feedback">
            <FeedbackVariants
              feedbackOptions={FeedbackOptions}
              leaveFeedback={this.leaveFeedback}
            />
          </FeedbackBlock>
          <FeedbackBlock title="Statistics:">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </FeedbackBlock>
          ;
        </Wrapper>
      </MainSection>
    );
  }
}

export default App;
