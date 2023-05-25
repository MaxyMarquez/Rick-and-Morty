import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SearchBar from '../Search/SearchBar';
import Characters from '../Characters/Characters';
import Filter from '../Filter/Filter';
import './Wiki.css'


export default function Wiki() {
    const [fetchApi, setFetchApi] = useState([]);
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    const [species, setSpecies] = useState('');


    const api = `https://rickandmortyapi.com/api/character/?name=${search}&status=${status}&gender=${gender}&species=${species}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(api);
                setFetchApi(data.results)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [api])

    return (
        <div className='wiki-container'>
            <div className='wiki-search'>
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />
                <Filter
                    setStatus={setStatus}
                    setGender={setGender}
                    setSpecies={setSpecies}
                />
            </div>
            <Characters fetchApi={fetchApi} />
        </div>
    )
}

