import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Dna } from "react-loader-spinner";

import * as SC from "./CountryDetailsStyled"
import {ReactComponent as ArrowSvg} from "../../assets/icons/call-made.svg"
import { ICountry, ICountryDetails } from "../../utils/interface";

const CountryDetails: React.FC<ICountryDetails> = ({ fetchCountryDetails, countryDetails }): JSX.Element => {
    const location = useLocation()
    const navigate = useNavigate()

    const { pathname } = location
    
    const { flags, name, nativeName, population, subregion, region, capital, topLevelDomain, currencies, languages, borders, timezones } = Object.keys(countryDetails).length > 0 && countryDetails as ICountry 

    const formattedPopulation = population ? population.toLocaleString() : ""

    const currenciesName = currencies ? currencies[0].name! : "";
    const currenciesCode = currencies ? currencies[0].code! : "";

    
    useEffect(() => {
        fetchCountryDetails(pathname)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])    

    const navigateBack = () => {
    navigate("/")
}

    return (<>
    {
            Object.keys(countryDetails).length > 0 ? 
                <SC.DetailsContainer>
                    <SC.BackButton onClick={navigateBack}>
                        <ArrowSvg />
                        <span>Back</span>
                        </SC.BackButton>
                    <div>
                        <SC.Flag src={flags.svg} alt="flag" />
                    </div>
                    
                    <h3>{name}</h3>
                    <div>
                        <p>Native name: <span>{nativeName}</span></p>
                        <p>Population: <span>{formattedPopulation}</span></p>
                        <p>Region:  <span>{region}</span></p>
                        <p>Sub Region:  <span>{subregion}</span></p>
                        <p>Capital:  <span>{capital}</span></p>
                    </div>
                    <div>
                        <p>Top Level Domain: {topLevelDomain.map(el => <span key={el}>{el}</span>)}</p>
                        <p>Time Zone: </p>
                        {typeof timezones === "object" ? <ul>{timezones.map(el => <span key={el}>{el}</span>)}</ul> : <span>{timezones}</span>}
                        <p>Currencies: <span>{currenciesName} ({currenciesCode})</span></p>
                        <p>Languages: {languages.map(({ name, nativeName }) => <span key={nativeName}>{name} ({nativeName})</span>)}</p>
                    </div>
                    <h4>Border countries:</h4>
                    <ul>
                        {borders.map(el => <li key={el}>{el}</li>)}
                    </ul>
                </SC.DetailsContainer> :
                <Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
    }
    
    </>
         );
}
 
export default CountryDetails;