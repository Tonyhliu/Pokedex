const React = require('react');
const PokeStore = require('../../stores/pokemon_store');
const PokemonActions = require('../../actions/pokemon_actions');
const PokemonIndexItem = require('./pokemon_index_item');


const PokemonsIndex = React.createClass({
  getInitialState() {
    return { pokemons: PokeStore.all() };
  },

  _onChange() {
    this.setState(this.state.pokemons = PokeStore.all());
  },

  componentDidMount() {
    this.pokeListener = PokeStore.addListener(this._onChange);
    PokemonActions.fetchAllPokemon();
  },

  componentWillUnmount() {
    this.pokeListener.remove();
  },

  render() {
    return(
      <div>
        <ul>
        {
          this.state.pokemons.map(pokemon => {
            return <PokemonIndexItem  key={pokemon.id} pokemon={pokemon}/>;
          })
        }
        </ul>
      </div>
    );
  }
});

module.exports = PokemonsIndex;
