import React, { Component } from 'react'
import CardNota from '../CardNota/CardNota'
import './style.css'

export default class ListaDeNotas extends Component {
    
    render() {
        return (
            <ul className='lista-notas'>
               {this.props.notas.map((notas, i) => {
                    return (
                        <li key={i} className='lista-notas_item'>
                            <span>{}</span>
                            <CardNota notas={notas} />
                        </li>
                    )
                })}
            </ul>
        )
    }

}

/* export default ListaDeNotas */