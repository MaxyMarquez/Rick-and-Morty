import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './Characters.css'
import CharacterDetail from './CharacterDetail'

export default function Characters({ fetchApi }) {

    return (
        <div className='card-container'  >
            {
                fetchApi.map((char) => {
                    const { id, image, name, status } = char
                    return (
                        <Link className='card' key={id} to={`/detail/${id}`}>
                            <p className={
                                status === 'Alive'
                                    ? 'status-alive'
                                    : status === 'Dead'
                                        ? 'status-dead'
                                        : 'status-unknown'
                            }>{status}</p>
                            <img src={image} className='img' alt={name} />
                            <p className='name'>{name}</p>
                        </Link>
                    )
                })
            }
        </div >
    )
}


