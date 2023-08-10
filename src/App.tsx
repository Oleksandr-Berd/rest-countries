import { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';
import lightTheme from './styles/lightTheme';
import SharedLayout from './components/SharedLayout/SharedLayout';
import ThemeContext from './context/themeContext';
import darkTheme from './styles/darkTheme';
import { getAll, getCountryDetails } from './utils/services';
import { ICountry } from './utils/interface';
import { Dna } from 'react-loader-spinner';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [countriesList, setCountriesList] = useState<ICountry[]>([])
  const [error, setError] = useState(null)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [countryDetails, setCountryDetails] = useState<ICountry | {}>({})

  


  const { theme } = useContext(ThemeContext)

  const commonTheme = theme === "light" ? lightTheme : darkTheme

  const fetchAllCountries = async (page:number) => {
    setIsLoading(true)

    const countries = await getAll(page)

    if (countries.data.message) setError(countries.data.message)


    if (countriesList.length === 0) {
      setCountriesList(countries.data.result)
    } else {
      setCountriesList(prev => [...prev, ...countries.data.result ])
    }
    setTotalPages(countries.data.totalPages)
    setIsLoading(false)

  }

  const fetchCountryDetails = async (id:string) => {
    setIsLoading(true)

    const details = await getCountryDetails(id)
    if (details.data.message) setError(details.data.message)
    
    setCountryDetails(details.data.result)
    setIsLoading(false)
  }
  

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
            <Route index element={<CountriesList countriesList={countriesList} fetchCountries={fetchAllCountries} totalPages={totalPages} isLoading={isLoading} />} />
            <Route path='/:id' element={<CountryDetails fetchCountryDetails={fetchCountryDetails} countryDetails={countryDetails} />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>

    </div>}
    
  </>
  );
}

export default App;
