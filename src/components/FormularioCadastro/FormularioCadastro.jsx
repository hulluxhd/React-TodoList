import React, { Component } from 'react'
import './style.css'

export default class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.titulo = null;
        this.texto = null;
    }

    handleMudancaTitulo(titulo) {
        this.titulo = titulo.target.value
    }
    handleMudancaTexto(texto) {
        this.texto = texto.target.value
    }
    _criarNota(nota) {
        nota.preventDefault()
        nota.stopPropagation()
        this.props.criarNota(this.titulo, this.texto)
    }
    render() {
        return (
            <form className='form-cadastro'
                onSubmit={this._criarNota.bind(this)}
            >

                <input
                    type='text'
                    placeholder='titulo'
                    className='form-cadastro_input'
                    onChange={this.handleMudancaTitulo.bind(this)}
                />
                <textarea
                    placeholder='escreva a nota...'
                    rows={15}
                    cols={30}
                    className='form-cadastro_input'
                    onChange={this.handleMudancaTexto.bind(this)}

                />
                <button className='form-cadastro_submit form-cadastro_input'>Criar</button>
            </form>
        )
    }
}