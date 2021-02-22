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
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} index={this.state.index} />
        {console.log(this.state.index)}
        <button>Next</button>
      </div>
    );
  }
}

export default App;