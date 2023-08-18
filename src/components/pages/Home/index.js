import styled from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  color: red;
`;

const Home = (userId, setUserId) => {
  return (
    <>
      <Title>Home Page</Title>
    </>
  );
};

export default Home;
