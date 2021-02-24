import React from 'react';

class InputText extends React.Component {
  render() {
    const { label } = this.props;
    return (
      <div>
        <label>
          {label}
          <input type="text"/>
        </label>
      </div>
    );
  }
}

export default InputText;
