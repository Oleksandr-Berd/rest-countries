import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import * as SC from "./CountryDetailsStyled"

import { ICountry, ICountryDetails } from "../../utils/interface";
import { Dna } from "react-loader-spinner";

const CountryDetails: React.FC<ICountryDetails> = ({ fetchCountryDetails, countryDetails }): JSX.Element => {
    const location = useLocation()

    const { pathname } = location
    
    const { flags } = Object.keys(countryDetails).length > 0 && countryDetails as ICountry 
    
    useEffect(() => {
        fetchCountryDetails(pathname)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])    

    return (<>
    {
            Object.keys(countryDetails).length > 0 ? 
                <div>
                    <button>back</button>
                    <div>
                        <SC.Flag src={flags.svg} alt="flag" />
                    </div>
                </div> :
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