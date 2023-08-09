import React, { useContext } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import {  ThemeProvider } from 'styled-components';
import lightTheme from './styles/lightTheme';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import ThemeContext from './context/themeContext';
import darkTheme from './styles/darkTheme';

function App() {

  const { theme } = useContext(ThemeContext)

  const commonTheme = theme === "light" ? lightTheme : darkTheme

  console.log(theme);


  return (
    <div className="App">
      <ThemeProvider theme={commonTheme}>
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
