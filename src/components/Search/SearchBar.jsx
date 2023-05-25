import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar({ search, setSearch }) {

    const handleClear = (event) => {
        setSearch('')
    }

    return (
        <form className='searchBar-container' onSubmit={event => event.preventDefault()}>
            <input
                type="text"
                value={search}
                onChange={event => {
                    setSearch(event.target.value)
                }}
                placeholder='Search: Rick Sanchez, Morty Smith...'
            />
            <FontAwesomeIcon
                icon={faXmark}
                onClick={handleClear}
                className='button-clear'
            />
        </form>
    )
}
