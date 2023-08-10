import * as SC from "./CountriesItemStyled"

import { ICountry } from "../../utils/interface";

const CountriesItem: React.FC<Partial<ICountry>> = ({ name, capital, region, flags, population }): JSX.Element => {

    const formattedPopulation = population.toLocaleString()

    return (<SC.ItemStyled>
        <SC.FlagContainer>
            <SC.Flag src={flags.svg} alt="flag" />
        </SC.FlagContainer>
        <SC.ContentContainer>
            <SC.CountryName>{name}</SC.CountryName>
            <SC.Content>Population: <SC.SubContent>{formattedPopulation}</SC.SubContent></SC.Content>
            <SC.Content>Region: <SC.SubContent>{region}</SC.SubContent></SC.Content>
            <SC.Content>Capital: <SC.SubContent>{capital}</SC.SubContent></SC.Content>
        </SC.ContentContainer>
    </SC.ItemStyled>);
}

export default CountriesItem;