import React from 'react';

import InputText from './InputText';

class EmpregosAnteriores extends React.Component {
  render() {
    return (
      <fieldset className="container">
        <legend>Ultimo Emprego</legend>
        <div className="container">
          <label htmlFor="resume">
            Resumo do Curriculo
            <textarea
              name="resume"
              id="resume"
              cols="30"
              rows="10"
              maxLength="1000"
              required
              ></textarea>
          </label>
        </div>
        <div className="container">
          <label htmlFor="job-description">Descricao do cargo</label>
          <textarea
            name="job-description"
            id="job-description"
            cols="30"
            rows="10"
            maxLength="500"
            required
            ></textarea>
        </div>
        <InputText limit={40} label={'Cargo'} />
      </fieldset>
    );
  }
}

export default EmpregosAnteriores;
