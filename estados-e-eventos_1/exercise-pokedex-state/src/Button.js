import React from 'react';

class Button extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <>
        <button>{value}</button>
      </>
    )
  }
}

export default Button;