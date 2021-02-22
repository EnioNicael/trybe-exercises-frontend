import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        const { pokemons, index } = this.props;
        return (
            <div className="pokedex">
                <Pokemon pokemon={pokemons[index]}/>
                {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
            </div>
        );
    }
}

export default Pokedex;