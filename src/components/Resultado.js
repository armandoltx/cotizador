import React, { Component } from 'react';

class Resultado extends Component {
  render() {
    return (
      <div>
        {this.props.resultado}
      </div>
    );
  }
}

export default Resultado;