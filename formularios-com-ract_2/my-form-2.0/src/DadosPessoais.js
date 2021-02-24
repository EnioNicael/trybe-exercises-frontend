import React from 'react';

import InputText from './InputText';
import StatesOptions from './StatesOptions';
import states from './data';

class DadosPessoais extends React.Component {
  render() {
    return (
      <fieldset>
        <InputText label={'Name'} />
        <InputText label={'Email'} />
        <InputText label={'CPF'} />
        <InputText label={'Endereco'} />
        <InputText label={'Cidade'} />
        <div>
        <label htmlFor="uf">Estado</label>
        <select name="uf" id="uf">
          {states.map((state, index) => <StatesOptions uf={state} key={index} />)}
        </select>
      </div>
      </fieldset>
    );
  }
}

export default DadosPessoais;
