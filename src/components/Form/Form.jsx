import { useState } from 'react'
import imgForm from '../../assets/rick-and-morty-form.png'
import validation from './validation.js'
import './Form.css'

export default function Form({ login }) {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = event => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return (
        <div className='form'>
            <div className='form-container'>
                <img src={imgForm} alt="" />
                <form onSubmit={handleSubmit}>

                    <label>Email</label>
                    <input
                        type="email"
                        name='email'
                        value={userData.email}
                        className='input'
                        placeholder='example@example.com'
                        onChange={handleChange}
                    />

                    {errors.email && <p>{errors.email}</p>}

                    <label>Password</label>
                    <input
                        type="password"
                        name='password'
                        value={userData.password}
                        className='input'
                        placeholder='**********'
                        onChange={handleChange}
                    />
                    {
                        errors.password && <p>{errors.password}</p>
                    }

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div >
    )
}
