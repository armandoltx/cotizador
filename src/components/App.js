import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from './../helper';

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // } No hace falta usar constructor:

  state = {
    resultado: '',
    datos: {}
  }

  // Para que se comunique perfectamente la app, los datos del formulario los tenemos que pasar de vuelta hacia App que es el componente padre, para ello anadimos los props a <Formulario /> usando una funcion

  cotizarSeguro = (datos) => {
    // console.log("datos ", datos);
    const {marca, year, plan} = datos;
    // console.log("marca ", marca);

    // 1. Agregar una base de 2000
      let resultado = 2000;

    // 2. Obtener la diferencia de anos y 
      const diferencia = obtenerDiferenciaAnio(year);

    // 3. por cada ano restar el 3% al valor del seguro
      resultado -= ((diferencia * 3) * resultado ) / 100;

      // 4. Americano 15%, Asiatico 5% y Europeo 30% de incremento al valor actual
        resultado = calcularMarca(marca) * resultado;

        console.log("resultado ", resultado);

      // 5. El plan del auto, el basico incrementa el valor un 20% y cobertura completa un 50%
        let incrementoPlan = obtenerPlan(plan);

        console.log("incrementoPlan ", incrementoPlan);

      // 6. Dependiendo del plan incrementar
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

        console.log("resultado final ", resultado);

      // Ya tenemos el costo
      // modificamos es state
      // creamos el objeto para el resumen
      const datosAuto = {
        marca: marca,
        plan: plan,
        year: year
      }
        this.setState({
          resultado: resultado,
          datos: datosAuto,
        })

  }

  render() {
    return (
      <div className="contenedor">
        <Header
          titulo= 'Cotizador de Seguro de Coches'
        />

        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />
          < Resumen
            datos={this.state.datos}
            resultado={this.state.resultado}
          />
        </div>
      </div>
    );
  }
}

export default App;