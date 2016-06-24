const React = require('react');
const PokeStore = require('../../stores/pokemon_store');
const PokemonActions = require('../../actions/pokemon_actions');
const ToyIndex = require('../toys/toys_index');

const PokemonDetail = React.createClass({
  getInitialState(){
    return {pokemon: this.getStateFromStore() };
  },

  getStateFromStore() {
    return PokeStore.find(this.props.params.pokemonId);
  },

  resetState() {
    this.setState({ pokemon: this.getStateFromStore() });
  },

  componentDidMount() {
    this.pokeListener = PokeStore.addListener(this.resetState);
    PokemonActions.fetchPokemon(parseInt(this.props.params.pokemonId));
  },

  componentWillUnmount() {
    this.pokeListener.remove();
  },

  componentWillReceiveProps(nextProps) {
    this.setState({ pokemon: PokeStore.find(nextProps.params.pokemonId) });
  },

  render(){

    if (this.state.pokemon) {
      let pokeToys = "";

      if(this.state.pokemon.toys) {
        pokeToys = <ToyIndex toys={this.state.pokemon.toys}/>;
      }
      return(
        <div>
          <div className='pokemon-detail-pane'>
            <div className='detail'>
              <img src={this.state.pokemon.image_url}/>
              <li>{this.state.pokemon.name}</li>
              <li>{this.state.pokemon.attack}</li>
              <li>{this.state.pokemon.defense}</li>
              <li>{this.state.pokemon.poke_type}</li>
              <li>{this.state.pokemon.moves}</li>
              {pokeToys}
            </div>
          </div>
          {this.props.children}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
});

module.exports = PokemonDetail;
