import React from 'react';
import './App.css';

import DadosPessoais from './DadosPessoais';
import EmpregosAnteriores from './EmpregosAnteriores';

class App extends React.Component {
  render() {

    return (
      <form>
        <DadosPessoais />
        <EmpregosAnteriores />
      </form>
    );
  }
}

export default App;
