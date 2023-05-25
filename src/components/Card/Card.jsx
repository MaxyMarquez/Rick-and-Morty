import { addFav, removeFav } from '../../redux/actions'
import { connect } from "react-redux"
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import './Card.css'
import { Link } from 'react-router-dom';


function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {

  const [isFav, setIsFav] = useState(false);

  const handleFavorites = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id)
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image })
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true)
      }
    });
  }, [myFavorites]);

  return (
    <div>
      <div className="Card">
        <button className={isFav ? 'isFavorite' : 'favorite'} onClick={handleFavorites} ><FontAwesomeIcon icon={faHeart} /></button>
        <button className='card-button' onClick={() => onClose(id)}>X</button>
        <Link className='card' key={id} to={`/detail/${id}`}>
          <img src={image} className='img' alt={name} />
          <p className='name'>{name}</p>
          <p className={
            status === 'Alive'
              ? 'status-alive'
              : status === 'Dead'
                ? 'status-dead'
                : 'status-unknown'
          }>{status}</p>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
