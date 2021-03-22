import React from 'react';

class StatesOptions extends React.Component {
  render() {
    const { key, value } = this.props.uf;
    return (
      <option value={key}>{value}</option>
    );
  }
}

export default StatesOptions;
