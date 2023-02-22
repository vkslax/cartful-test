import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from './Theme';
import Header from './components/header/Header';
import NavigationBar from './components/navigation/NavigationBar';
import { COMPLETED, CURRENT, REMAINING } from './constants/constants';
import Question2 from './pages/question2/Question2';
import Results from './pages/results/Results';

const MainContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryBeige};
  font-family: ${(props) => props.theme.fonts[0]};
  min-height: 90vh;
  flex-grow: 1;
`;

function App() {
  /* hard coded steps but should be dynamic depending
   on the logic to handle the steps not needed at this moment.
   */
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContainer>
        <NavigationBar steps={[
          { name: '1', state: COMPLETED },
          { name: '2', state: CURRENT },
          { name: '3', state: REMAINING },
          { name: '4', state: REMAINING },
        ]}
        />
        <Routes>
          <Route path="/results" element={<Results />} />
          <Route path="/" element={<Question2 />} />
        </Routes>
        <Question2 />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
