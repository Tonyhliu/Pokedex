const AppDispatcher = require('../dispatcher/dispatcher');
const ApiUtil = require('../util/api_util');
const PokemonConstants = require('../constants/pokemon_constants');

const PokemonActions = {
  receiveAllPokemon(pokemons) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons
    });
  },

  receiveSinglePokemon(pokemon) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon
    });
  },

  fetchAllPokemon() {
    ApiUtil.fetchAllPokemon(PokemonActions.receiveAllPokemon);
  },

  fetchPokemon(id) {
    ApiUtil.fetchPokemon(id, PokemonActions.receiveSinglePokemon);
  }
};

module.exports = PokemonActions;
