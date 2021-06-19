import React from 'react'
import './card-list.styles.css'
import Card from '../card/card.component';

export default function CardList(props) {
    
    return (
        <div className="card-list">
            {
                props.pokemons.map(pokemon=>{
                    return <Card key={pokemon.url.slice(34,37)} pokemon={pokemon}/>
                })
            }
        </div>
    )
}
