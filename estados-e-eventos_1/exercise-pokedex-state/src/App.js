import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        index: 0
    }
  }

  handleClick = () => {
    this.setState((previousState, _props) => {
      if (previousState.index === pokemons.length - 1) {
        return { index: 0 };
      }
      return {index: previousState.index + 1};
    });
  }

  render() {
    console.log(this.state.index);
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons[this.state.index]} />
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export default App;