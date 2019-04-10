import React, {Component} from 'react';
import Resultado from './Resultado';
import {primeraMayuscula} from './../helper';

class Resumen extends Component {

  mostrarResumen = () => {
    const { marca, year, plan } = this.props.datos; // se usa this.props pq es una class
    if (!marca || !year || !plan) return null;

    return (
      <div className="resumen">
        <h2>Resumen de Cotizacion</h2>
        <li>Marca: {primeraMayuscula(marca)}</li>
        <li>Plan: {primeraMayuscula(plan)}</li>
        <li>Ano del Coche: {year}</li>
      </div>
    )
  }


  render() {
    
    return(
      <div>
        { this.mostrarResumen() }
        <Resultado resultado={this.props.resultado} />
      </div>
    );
  }
}

export default Resumen;