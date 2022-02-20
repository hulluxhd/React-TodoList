import React, { Component } from 'react';
import "./style.css"
class CardNota extends Component {
    render() {
        return (
            <section className='card-nota'>
                <header className='card-nota_cabecalho'>
                    <h3>{this.props.notas.titulo}</h3>
                </header>
                <p className='card-nota_texto'>
                    {this.props.notas.texto}
                </p>
                
            </section>
        );
    }
}

export default CardNota;
