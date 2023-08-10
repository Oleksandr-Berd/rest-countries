import { useEffect, useRef, useState } from "react";

import * as SC from "./CountriesListStyled"

import { ICountriesProps } from "../../utils/interface";
import CountriesItem from "../CountriesItem/CountriesItem";
import { Dna } from "react-loader-spinner";

const CountriesList: React.FC<ICountriesProps> = ({ countriesList, fetchCountries, totalPages, isLoading }): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const observer = useRef(null);
    const lastItemRef = useRef(null);

    useEffect(() => {
        fetchCountries(currentPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

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
            <SC.ListStyled>
                {countriesList ? countriesList.map(({ _id, name, capital, population, flags, region }, index, array) => <SC.CountriesItem key={_id}>
                    <CountriesItem name={name} capital={capital} population={population} flags={flags} region={region} _id={_id} />
                    {index === array.length - 1 && <div key={name} ref={lastItemRef} />}
                </SC.CountriesItem>
                ) : null}

            </SC.ListStyled>
        </>
            );
}
 
export default CountriesList;