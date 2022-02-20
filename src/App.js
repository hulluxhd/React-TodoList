import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas'
import './assets/index.css'
import './assets/App.css';
import { render } from '@testing-library/react';
class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = {
      titulo, texto
    }
    const notas = this.state.notas.slice()
    notas.push(novaNota)
    this.setState({
      notas: notas
    })
    console.log(this.state.notas.length)

  }

  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
