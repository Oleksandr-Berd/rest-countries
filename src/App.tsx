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
  const [prevQuery, setPrevQuery] = useState<string | null>(null)
  const [prevFilterRegion, setPrevFilterRegion] = useState<string>("all")

  const [error, setError] = useState(null)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [countryDetails, setCountryDetails] = useState<ICountry | {}>({})
  const [neighbors, setNeighbors] = useState<string[] | null>(null)

  const { theme } = useContext(ThemeContext)

  const commonTheme = theme === "light" ? lightTheme : darkTheme
  const fetchAllCountries = async (page: number, filterRegion: string, query: string | null) => {
    setIsLoading(true);
    console.log(query);

    const countries = await getAll(page, filterRegion, query);

    if (countries.data.message) setError(countries.data.message)
    if (countries.data.result.length ===0) setError("Oops, there is no any Country")

    if (filterRegion !== prevFilterRegion || query !== prevQuery) {
      setCountriesList(countries.data.result);
    } else if (countriesList.length === 0) {
      setCountriesList(countries.data.result);
    } else {
      setCountriesList((prev) => [...prev, ...countries.data.result]);
    }



    setPrevFilterRegion(filterRegion);
    setPrevQuery(query);

    setTotalPages(countries.data.totalPages);
    setIsLoading(false);
  };

  const fetchCountryDetails = async (id:string) => {
    setIsLoading(true)

    const details = await getCountryDetails(id)
    if (details.data.message) setError(details.data.message)
    
    setCountryDetails(details.data.result)
    setNeighbors(details.data.neighbors)

    setIsLoading(false)
  }  

console.log(countriesList);


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
            <Route path='/:id' element={<CountryDetails fetchCountryDetails={fetchCountryDetails} countryDetails={countryDetails} neighbors={neighbors} />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>

    </div>}
    
  </>
  );
}

export default App;
