import React from 'react';

class StatesOptions extends React.Component {
  render() {
    const { uf } = this.props;
    return (
      <option value={uf}>{uf}</option>
    );
  }
}

export default StatesOptions;
