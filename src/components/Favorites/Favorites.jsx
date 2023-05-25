import { useState } from 'react';
import { filter, order } from '../../redux/actions';
import Card from '../Card/Card'
import { connect, useDispatch } from 'react-redux'
import './Favorites.css'

const Favorites = ({ myFavorites }) => {

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const handleOrder = event => {
        dispatch(order(event.target.value))
        aux ? setAux(false) : setAux(true)
    }

    const handleFilter = event => {
        dispatch(filter(event.target.value))
    }

    return (
        <div className='favorites-container'>
            <div className='filters'>
                <select name="order" onChange={handleOrder}>
                    <option value="A">Ascendent</option>
                    <option value="D">Descendent</option>
                </select>
                <select name="filter" id="" onChange={handleFilter}>
                    <option value="All">All Favorites</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div className='cards-container'>
                {
                    myFavorites?.map((favorite) => (
                        <Card
                            key={favorite.id}
                            id={favorite.id}
                            name={favorite.name}
                            status={favorite.status}
                            species={favorite.species}
                            gender={favorite.gender}
                            image={favorite.image}
                            origin={favorite.origin}
                        />
                    ))
                }
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites); 