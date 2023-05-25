import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Gender({ setGender }) {
    const genders = ['Male', 'Female', 'Genderless', 'Unknown']
    return (
        <div className='filter-container'>
            <h2 className='tittle-container' >
                Gender
                <div className='clear'>
                    <label htmlFor="clearGender">
                        <input
                            id='clearGender'
                            type="radio"
                            value=''
                            name='gender'
                            onClick={(event) => {
                                setGender(event.target.value)
                            }}
                        />
                        <FontAwesomeIcon icon={faXmark} />
                    </label>
                </div>
            </h2>
            <div className='filter-button'>
                {
                    genders.map((gender, index) => {
                        return (
                            <div key={gender} className='filter-button'>
                                <label htmlFor={`${gender}-${index}`} className='radio-button'>
                                    <input
                                        id={`${gender}-${index}`}
                                        type="radio"
                                        value={gender}
                                        name='gender'
                                        onClick={(event) => {
                                            setGender(event.target.value)
                                        }}
                                    />
                                    <span className="radio-checkmark"></span>
                                    <span className="radio-label">{gender}</span>
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

