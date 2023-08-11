import { ChangeEvent, useEffect, useRef, useState } from "react";

import * as SC from "./CountriesListStyled"

import { ICountriesProps } from "../../utils/interface";
import CountriesItem from "../CountriesItem/CountriesItem";
import { Dna } from "react-loader-spinner";
import searchIcon from "../../assets/icons/Shape.png"


const CountriesList: React.FC<ICountriesProps> = ({ countriesList, fetchCountries, totalPages, isLoading }): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const observer = useRef(null);
    const lastItemRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState<string | null>(null);


    const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {

        
            setTimeout(() => {
                const inputSearch = evt.target.value.trim().toLowerCase()
                setSearchQuery(inputSearch)
                setCurrentPage(1)
            }, 1000)
        

    }
    useEffect(() => {
        
        fetchCountries(currentPage, searchQuery)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, searchQuery])

    useEffect(() => {
        const handleObserver = async (entries): Promise<void> => {
            const target = entries[0];
            if (target.isIntersecting && currentPage < totalPages) {
                if (!isLoading) { 
                    setCurrentPage((prevPage) => prevPage + 1);
                }
            }
        };

        observer.current = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        });

        if (lastItemRef.current) {
            observer.current.observe(lastItemRef.current);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [currentPage, totalPages, isLoading]); 

    return (
        <>
            {isLoading ? <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            /> : null}
            <SC.CommonContainer>
                <SC.SearchForm>
                    <SC.SearchLabel>
                        <SC.SearchIcon src={searchIcon} alt="searchIcon" />
                        <SC.SearchInput onChange={handleSearch} type="text" placeholder="Search for a country…" />
                    </SC.SearchLabel>
                </SC.SearchForm> 
            <SC.ListStyled>
                {countriesList ? countriesList.map(({ _id, name, capital, population, flags, region }, index, array) => <SC.CountriesItem key={_id}>
                    <CountriesItem name={name} capital={capital} population={population} flags={flags} region={region} _id={_id} />
                    {index === array.length - 1 && <div key={name} ref={lastItemRef} />}
                </SC.CountriesItem>
                ) : null}

                </SC.ListStyled>
            </SC.CommonContainer>
        </>
            );
}
 
export default CountriesList;