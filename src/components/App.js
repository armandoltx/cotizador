import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component {

  // Para que se comunique perfectamente la app, los datos del formulario los tenemos que pasar de vuelta hacia App que es el componente padre, para ello anadimos los props a <Formulario /> usando una funcion

  cotizarSeguro = (datos) => {
    console.log("datos ", datos);

  }

  render() {
    return (
      <div className="contenedor">
        <Header
          titulo= 'Cotizador de Seguro de Coches'
        />

        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />
        </div>
      </div>
    );
  }
}

export default App;