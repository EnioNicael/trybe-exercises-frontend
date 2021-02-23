import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Button from './Button';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        index: 0,
        filteredPokemons: []
    }
  }

  handleClick = () => {
    this.setState((previousState, _props) => {
      //if (previousState.index === filteredPokemons.length - 1) {
      if (previousState.index === pokemons.length - 1) {
        return { index: 0 };
      }
      return {index: previousState.index + 1};
    });
  }

  filtersArrayOfPokemon = () => {
    this.setState((previousState, _props) => {
      previousState = pokemons.filter(pokemon => pokemon.type === 'Psychic');
      console.log('previousState');
      return { filteredPokemons: previousState }
    })
  }

  render() {
    //this.filteredPokemons = ;
    this.filtersArrayOfPokemon();
    console.log(this.state);
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.filteredPokemons[this.state.index]} />
        <div>
          <Button value={'Psychic'} />
        </div>
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export default App;