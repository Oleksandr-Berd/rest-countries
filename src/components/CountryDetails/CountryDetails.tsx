import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import { useMediaQuery } from "usehooks-ts";

import * as SC from "./CountryDetailsStyled"
import {ReactComponent as ArrowSvg} from "../../assets/icons/call-made.svg"
import { ICountry, ICountryDetails } from "../../utils/interface";

const CountryDetails: React.FC<ICountryDetails> = ({ fetchCountryDetails, countryDetails, neighbors }): JSX.Element => {
    const location = useLocation()
    const navigate = useNavigate()

    const { pathname } = location
    
    const {
      flags,
      name,
      nativeName,
      population,
      subregion,
      region,
      capital,
      topLevelDomain,
      currencies,
      languages,
      timezones,
    } = Object.keys(countryDetails).length > 0 && (countryDetails as ICountry); 

    const formattedPopulation = population ? population.toLocaleString() : ""

    const currenciesName = currencies ? currencies[0].name! : "";
    const currenciesCode = currencies ? currencies[0].code! : "";

    const isDesktop = useMediaQuery("(min-width:1440px)")
    
    useEffect(() => {
        fetchCountryDetails(pathname)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])    

    const navigateBack = () => {
    navigate("/")
}    
    
console.log(neighbors);


    return (
      <>
        {Object.keys(countryDetails).length > 0 ? (
          <SC.DetailsContainer>
            {isDesktop ? (
              <>
                <SC.BackButton onClick={navigateBack}>
                  <ArrowSvg />
                  <SC.Content>Back</SC.Content>
                </SC.BackButton>
                <SC.DesktopContainer>
                  <SC.FlagContainer>
                    <SC.Flag src={flags.svg} alt="flag" />
                  </SC.FlagContainer>
                  <SC.DesktopContent>
                    <SC.CountryName>{name}</SC.CountryName>
                    <SC.MainContent>
                      <SC.ContentContainer>
                        <SC.ContentTitle>
                          Native name: <SC.Content>{nativeName}</SC.Content>
                        </SC.ContentTitle>
                        <SC.ContentTitle>
                          Population:{" "}
                          <SC.Content>{formattedPopulation}</SC.Content>
                        </SC.ContentTitle>
                        <SC.ContentTitle>
                          Region: <SC.Content>{region}</SC.Content>
                        </SC.ContentTitle>
                        <SC.ContentTitle>
                          Sub Region: <SC.Content>{subregion}</SC.Content>
                        </SC.ContentTitle>
                        <SC.ContentTitle>
                          Capital: <SC.Content>{capital}</SC.Content>
                        </SC.ContentTitle>
                      </SC.ContentContainer>
                      <SC.ContentContainer>
                        <SC.ContentTitle>
                          Top Level Domain:{" "}
                          {topLevelDomain.map((el) => (
                            <SC.Content key={el}>{el}</SC.Content>
                          ))}
                        </SC.ContentTitle>
                        <SC.ContentTitle>Time Zone: </SC.ContentTitle>
                        {typeof timezones === "object" ? (
                          <SC.ContentList>
                            {timezones.map((el) => (
                              <SC.ListItem key={el}>{el}</SC.ListItem>
                            ))}
                          </SC.ContentList>
                        ) : (
                          <SC.Content>{timezones}</SC.Content>
                        )}
                        <SC.ContentTitle>
                          Currencies:{" "}
                          <SC.Content>
                            {currenciesName} ({currenciesCode})
                          </SC.Content>
                        </SC.ContentTitle>

                        <SC.ContentTitle>Languages: </SC.ContentTitle>
                        <SC.ContentList>
                          {languages.map(({ name, nativeName }) => (
                            <SC.ListItem key={nativeName}>
                              {name} ({nativeName})
                            </SC.ListItem>
                          ))}
                        </SC.ContentList>
                      </SC.ContentContainer>
                    </SC.MainContent>
                    {neighbors && neighbors.length > 0 ? (
                      <>
                        <SC.SubTitle>Border countries:</SC.SubTitle>
                        <SC.ContentList>
                          {neighbors.map((el) => (
                            <SC.Neighbor
                              onClick={() => navigate(`/${el}`)}
                              key={el}
                            >
                              {el}
                            </SC.Neighbor>
                          ))}
                        </SC.ContentList>
                      </>
                    ) : null}
                  </SC.DesktopContent>
                </SC.DesktopContainer>
              </>
            ) : (
              <>
                <SC.BackButton onClick={navigateBack}>
                  <ArrowSvg />
                  <SC.Content>Back</SC.Content>
                </SC.BackButton>
                <SC.FlagContainer>
                  <SC.Flag src={flags.svg} alt="flag" />
                </SC.FlagContainer>

                <SC.CountryName>{name}</SC.CountryName>
                <SC.ContentContainer>
                  <SC.ContentTitle>
                    Native name: <SC.Content>{nativeName}</SC.Content>
                  </SC.ContentTitle>
                  <SC.ContentTitle>
                    Population: <SC.Content>{formattedPopulation}</SC.Content>
                  </SC.ContentTitle>
                  <SC.ContentTitle>
                    Region: <SC.Content>{region}</SC.Content>
                  </SC.ContentTitle>
                  <SC.ContentTitle>
                    Sub Region: <SC.Content>{subregion}</SC.Content>
                  </SC.ContentTitle>
                  <SC.ContentTitle>
                    Capital: <SC.Content>{capital}</SC.Content>
                  </SC.ContentTitle>
                </SC.ContentContainer>
                <SC.ContentContainer>
                  <SC.ContentTitle>
                    Top Level Domain:{" "}
                    {topLevelDomain.map((el) => (
                      <SC.Content key={el}>{el}</SC.Content>
                    ))}
                  </SC.ContentTitle>
                  <SC.ContentTitle>Time Zone: </SC.ContentTitle>
                  {typeof timezones === "object" ? (
                    <SC.ContentList>
                      {timezones.map((el) => (
                        <SC.ListItem key={el}>{el}</SC.ListItem>
                      ))}
                    </SC.ContentList>
                  ) : (
                    <SC.Content>{timezones}</SC.Content>
                  )}
                  <SC.ContentTitle>
                    Currencies:{" "}
                    <SC.Content>
                      {currenciesName} ({currenciesCode})
                    </SC.Content>
                  </SC.ContentTitle>

                  <SC.ContentTitle>Languages: </SC.ContentTitle>
                  <SC.ContentList>
                    {languages.map(({ name, nativeName }) => (
                      <SC.ListItem key={nativeName}>
                        {name} ({nativeName})
                      </SC.ListItem>
                    ))}
                  </SC.ContentList>
                </SC.ContentContainer>
                {neighbors && neighbors.length > 0 ? (
                  <>
                    <SC.SubTitle>Border countries:</SC.SubTitle>
                    <SC.ContentList>
                      {neighbors.map((el) => (
                        <SC.Neighbor
                          onClick={() => navigate(`/${el}`)}
                          key={el}
                        >
                          {el}
                        </SC.Neighbor>
                      ))}
                    </SC.ContentList>
                  </>
                ) : null}
              </>
            )}
          </SC.DetailsContainer>
        ) : (
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        )}
      </>
    );
}
 
export default CountryDetails;