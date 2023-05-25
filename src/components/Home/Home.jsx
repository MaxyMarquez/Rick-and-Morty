import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cards from '../Cards/Cards';
import SearchBar from '../SearchBar/SearchBar';


export default function Home() {

    const [characters, setCharacters] = useState([]);

    const onSearch = (id) => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.data)
            .then((data) => {
                if (data.id) {
                    const characterExists = characters.find((char) => char.id === data.id);

                    if (characterExists) {
                        alert('El personaje ya ha sido agregado.');
                    } else {
                        setCharacters([...characters, data]);
                    }
                } else {
                    alert('No se encontró ningún personaje con esa ID.');
                }
            })
    }

    const onClose = (id) => {
        const characterFiltered = characters.filter(character => character.id !== Number(id))
        setCharacters(characterFiltered)
    }

    return (
        <div>
            <SearchBar onSearch={onSearch} />
            <Cards characters={characters} onClose={onClose} />
        </div>
    )
}
