import React from 'react'
import './card.styles.css'

export const Card  = (props) => (
    <div className='card-container'>
        <img alt='monster' src={ `https://robohash.org/${props.monster.id}?set=2&size=320x320` }></img>
        <h2> { props.monster.name } </h2>
        <p> { props.monster.email } </p>
    </div>
)
