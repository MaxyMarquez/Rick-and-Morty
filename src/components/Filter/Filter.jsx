import React, { useState } from 'react'
import './Filter.css'
import Status from './category/Status';
import Gender from './category/Gender';
import Species from './category/Species';


export default function Filter({ setStatus, setGender, setSpecies }) {

    return (
        <div>
            <Status setStatus={setStatus} />
            <Gender setGender={setGender} />
            <Species setSpecies={setSpecies} />
        </div >
    )
}
