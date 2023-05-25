import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Characters.css'

export default function CharacterDetail() {
    const history = useNavigate();
    const { id } = useParams();
    const api = `https://rickandmortyapi.com/api/character/${id}`;

    const [character, setCharacter] = useState([]);
    let { name, location, origin, gender, image, status, species } = character;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(api);
                setCharacter(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [api])

    const handleGoBack = () => {
        history(-1)
    }

    return (
        <div className='cd-container'>
            <button className='button-back' onClick={handleGoBack}>BACK</button>
            <h2>{name}</h2>
            <div className='cd-info-container'>
                <div className='cd-img'>
                    <img src={image} alt={name} />
                </div>
                <ul>
                    <li><span className='cd-span'>Status:</span> {status}</li>
                    <li><span className='cd-span'>Specie:</span> {species}</li>
                    <li><span className='cd-span'>Gender:</span> {gender}</li>
                    <li><span className='cd-span'>Origin:</span> {origin?.name}</li>
                    <li><span className='cd-span'>Location:</span> {location?.name}</li>
                </ul>
            </div>

        </div>
    )
}
