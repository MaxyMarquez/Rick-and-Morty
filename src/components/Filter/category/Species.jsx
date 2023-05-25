import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Species({ setSpecies }) {
    const species = [
        'Alien',
        'Animal',
        'Cronenberg',
        'Disease',
        'Human',
        'Humanoid',
        'Mythological Creature',
        'Poopybutthole',
        'Robot',
        'Unknown'
    ]
    return (
        <div className='filter-container'>
            <h2 className='tittle-container' >
                Specie
                <div className='clear'>
                    <label htmlFor="clearSpecies">
                        <input
                            id='clearSpecies'
                            type="radio"
                            value=''
                            name='species'
                            onClick={(event) => {
                                setSpecies(event.target.value)
                            }}
                        />
                        <FontAwesomeIcon icon={faXmark} />
                    </label>
                </div>
            </h2>
            <div className='filter-button'>
                {
                    species.map((specie, index) => {
                        return (
                            <div key={specie}>
                                <label htmlFor={`${specie}-${index}`} className='radio-button'>
                                    <input
                                        id={`${specie}-${index}`}
                                        type="radio"
                                        value={specie}
                                        name='species'
                                        onClick={(event) => {
                                            setSpecies(event.target.value)
                                        }}
                                    />
                                    <span className="radio-checkmark"></span>
                                    <span className="radio-label">{specie}</span>
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
