export interface ICountry {
  _id: string;
  name: string;
  topLevelDomain: [];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: [];
  capital: string;
  altSpellings: [];
  subregion: string;
  region: string;
  population: number;
  latlng: [];
  demonym: string;
  area: number;
  timezones: [];
  borders: [];
  nativeName: string;
  numericCode: string;
  flags: {
    svg: string;
  };
  currencies: [];
  languages: [];
  translations: {};
  flag: string;
  regionalBlocs: [];
  cioc: string;
  independent: string;
}


export interface ICountriesProps {
  countriesList: ICountry[];
    totalPages: number;
    isLoading: boolean;
  fetchCountries: (page: number) => void;
}

export interface ICountryDetails {
  fetchCountryDetails: (id: string) => void;
    countryDetails: ICountry | {};
}