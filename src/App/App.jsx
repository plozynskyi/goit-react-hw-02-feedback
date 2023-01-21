import '../shared/styles/styles.scss';
import Statistics from '../modules/Vote/Vote';
import { MainSection } from './app.styled';

export const App = () => {
  return (
    <MainSection>
      <Statistics />
    </MainSection>
  );
};
