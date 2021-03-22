import React from 'react';

import InputText from './InputText';
import StatesOptions from './StatesOptions';
import states from './data';

class DadosPessoais extends React.Component {
  render() {
    return (
      <fieldset className="container">
        <legend>Dados Pessoais</legend>
        <InputText limit={40} label={'Name'} />
        <InputText limit={50} label={'Email'} />
        <InputText limit={11} label={'CPF'} />
        <InputText limit={200} label={'Endereco'} />
        <InputText limit={28} label={'Cidade'} />
        <div>
        <label htmlFor="uf">Estado</label>
        <select name="uf" id="uf" required>
          {states.map(state => <StatesOptions uf={state} key={state.key} />)}
        </select>
      </div>
      <div>
        <p>Complemento</p>
        <label htmlFor="casa">
          casa
          <input type="radio" name="casa" id="casa"/>
        </label>
        <label htmlFor="apartamento">
          apartamento
          <input type="radio" name="apartamento" id="apartamento"/>
        </label>
      </div>
      </fieldset>
    );
  }
}

export default DadosPessoais;
