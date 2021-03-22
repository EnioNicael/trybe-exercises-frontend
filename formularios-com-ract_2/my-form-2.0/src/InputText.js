import React from 'react';

class InputText extends React.Component {
  render() {
    const { label, limit } = this.props;
    return (
      <div>
        <label>
          {label}
          <input type="text" maxLength={limit} required />
        </label>
      </div>
    );
  }
}

export default InputText;
