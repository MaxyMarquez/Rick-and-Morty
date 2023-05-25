import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Status({ setStatus }) {
    const status = ['Alive', 'Dead', 'Unknown']
    return (
        <div className='filter-container'>
            <h2 className='tittle-container' >
                Status
                <div className='clear'>
                    <label htmlFor="clearStatus">
                        <input
                            id='clearStatus'
                            type="radio"
                            value=''
                            name='status'
                            onClick={(event) => {
                                setStatus(event.target.value)
                            }}
                        />
                        <FontAwesomeIcon icon={faXmark} />
                    </label>
                </div>
            </h2>
            <div className='filter-button'>
                {
                    status.map((char, index) => {
                        return (
                            <div key={char} className='filter-button'>
                                <label htmlFor={`${char}-${index}`} className='radio-button'>
                                    <input
                                        id={`${char}-${index}`}
                                        type="radio"
                                        value={char}
                                        name='status'
                                        onClick={(event) => {
                                            setStatus(event.target.value)
                                        }}
                                    />
                                    <span className="radio-checkmark"></span>
                                    <span className="radio-label">{char}</span>
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
