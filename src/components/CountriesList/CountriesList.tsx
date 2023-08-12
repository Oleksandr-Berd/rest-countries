import { ChangeEvent, useEffect, useRef, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Dna } from "react-loader-spinner";

import * as SC from "./CountriesListStyled"

import { ICountriesProps } from "../../utils/interface";
import CountriesItem from "../CountriesItem/CountriesItem";
import searchIcon from "../../assets/icons/Shape.png"
import regions from "../../data/regions.json"


const CountriesList: React.FC<ICountriesProps> = ({ countriesList, fetchCountries, totalPages, isLoading }): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const [filterRegion, setFilterRegion] = useState<string>("all")

    const observer = useRef(null);
    const lastItemRef = useRef(null);

    const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {


        setTimeout(() => {
            const inputSearch = evt.target.value.trim().toLowerCase()
            setSearchQuery(inputSearch)
            setCurrentPage(1)
        }, 1000)


    }


    const handleFilterRegion = (evtKey: string | null): void => { 

        setFilterRegion(evtKey)
        setCurrentPage(1)
    }

    useEffect(() => {

        fetchCountries(currentPage, filterRegion, searchQuery )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, searchQuery, filterRegion])

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
            threshold: 0.5,
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
                    <Dropdown onSelect={handleFilterRegion}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Filter By Region
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {regions.map(({ id, region }) => <Dropdown.Item key={id} eventKey={region}>{region}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
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