import styled from '@emotion/styled';

const MainSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40;
  color: #010101;
`;
const Title = styled.h1`
  color: #113fbec5;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  display: grid;

  grid-template-columns: 300px 300px;
  grid-template-rows: 270px 270px;
  gap: 30px;
`;

export { MainSection, Title, Wrapper };
