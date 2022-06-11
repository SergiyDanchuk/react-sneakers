import React from "react";

import styles from './Card.module.scss'

const Card = ({ title, imageUrl, price, onFavorite, onCart }) => {
  const [ isAdded, setIsAdded ] = React.useState( false )

  const onClickPlus = () => {
    onCart({ title, imageUrl, price });
    setIsAdded( !isAdded );
  }

  return (
    <div className={ styles.card }>
      <div className={ styles.favorite } onClick={ onFavorite }>
        <img src="/img/unliked.svg" alt="Unliked"/>
      </div>
      <img width={ 133 } height={ 112 } src={ imageUrl } alt="Sneakers"/>
      <h5>{ title }</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна:</span>
          <b>{ price } грн.</b>
        </div>
          <img className="cu-p" onClick={ onClickPlus } src={ isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } alt="Plus"/>
      </div>
    </div>
  )
}

export default Card;

