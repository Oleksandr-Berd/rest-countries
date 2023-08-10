import { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';
import lightTheme from './styles/lightTheme';
import SharedLayout from './components/SharedLayout/SharedLayout';
import ThemeContext from './context/themeContext';
import darkTheme from './styles/darkTheme';
import { getAll } from './utils/services';
import { ICountry } from './utils/interface';
import { H1 } from '@blueprintjs/core';
import { Dna } from 'react-loader-spinner';
import CountriesList from './components/CountriesList/CountriesList';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [countriesList, setCountriesList] = useState<ICountry[]>([])
  const [error, setError] = useState(null)
  


  const { theme } = useContext(ThemeContext)

  const commonTheme = theme === "light" ? lightTheme : darkTheme

  useEffect(() => {
    setIsLoading(true)
    const fetchAllCountries = async () => {
      const countries = await getAll()

      if (countries.data.message) setError(countries.data.message)

      setCountriesList(countries.data)
    }

    fetchAllCountries()
    setIsLoading(false)
  }, [])

  return (<>
    {error ? <h1>{error} </h1> : <div className="App">
      {isLoading ? <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />  : null}
      <ThemeProvider theme={commonTheme}>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<CountriesList countriesList={countriesList} /> } />
          </Route>
        </Routes>
      </ThemeProvider>

    </div>}
    
  </>
  );
}

export default App;
