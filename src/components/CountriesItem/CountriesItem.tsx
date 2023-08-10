import * as SC from "./CountriesItemStyled"

import { ICountry } from "../../utils/interface";
import { useNavigate } from "react-router-dom";

const CountriesItem: React.FC<Partial<ICountry>> = ({ name, capital, region, flags, population, _id }): JSX.Element => {
    const navigate = useNavigate()

    const formattedPopulation = population.toLocaleString()

    const handleClickNavigate = () => {
        navigate(`/${_id}`)
    }

    return (<SC.ItemStyled onClick={handleClickNavigate}>
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