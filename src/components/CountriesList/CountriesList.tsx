import * as SC from "./CountriesListStyled"

import { ICountriesProps } from "../../utils/interface";
import CountriesItem from "../CountriesItem/CountriesItem";

const CountriesList: React.FC<ICountriesProps> = ({ countriesList }):JSX.Element => {
    return (<SC.ListStyled>
        {countriesList ? countriesList.map(({ _id, name, capital, population, flags, region }) => <CountriesItem key={_id} name={name} capital={capital} population={population} flags={flags} region={region} />) : null}
        
    </SC.ListStyled> );
}
 
export default CountriesList;