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
  currencies: [{name: string, code: string}];
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
  fetchCountries: (
    page: number,
    filterRegion:string,
    query?: string
  ) => void;
}

export interface ICountryDetails {
  fetchCountryDetails: (id: string) => void;
  countryDetails: ICountry | {};
  neighbors: string[];
}

export interface IPropsInterface {
    errors:string
}