import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import lightTheme from './styles/lightTheme';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<SharedLayout />}>

          </Route>
        </Routes>
      </ThemeProvider>

    </div>
  );
}

export default App;
