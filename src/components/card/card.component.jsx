import React from 'react'
import './card.styles.css'

export default function Card(props) {
    return (
        <div className="card-container">
            <img 
                alt="monster" 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.url.slice(34,37)}.png`}        
            />
            <h2>{props.pokemon.name.toUpperCase()}</h2>
        </div>
    )
}
