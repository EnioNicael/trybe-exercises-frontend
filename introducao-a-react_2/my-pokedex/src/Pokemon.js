import React from 'react';
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.pokemon.name}</p>
        <p>{this.props.pokemon.type}</p>
        <p>
          Average weight: {this.props.pokemon.averageWeight.value}
          <span>{this.props.pokemon.averageWeight.measurementUnit}</span>
        </p>
        <img src={this.props.pokemon.image} alt={`Imagem do ${this.props.pokemon.name}`} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
  image: PropTypes.string,
};

export default Pokemon;