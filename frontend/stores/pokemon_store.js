let _pokemons = {};

const Store =  require("flux/utils").Store;
const PokemonConstants = require("../constants/pokemon_constants");
const AppDispatcher = require('../dispatcher/dispatcher');
const PokeStore = new Store(AppDispatcher);

PokeStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      PokeStore._resetPokemons(payload.pokemons);
      this.__emitChange();
      break;
    case PokemonConstants.POKEMON_RECEIVED:
      PokeStore._resetPokemon(payload.pokemon);
      this.__emitChange();
      break;
  }
};

PokeStore._resetPokemon = function(pokemon) {
  _pokemons[pokemon.id] = pokemon;
};

PokeStore._resetPokemons = function(pokemons) {
  _pokemons = {};
  pokemons.forEach(pokemon => {
    _pokemons[pokemon.id] = pokemon;
  });

};

PokeStore.all = function() {
  let pokeValues = [];

  Object.keys(_pokemons).forEach(key => {
    pokeValues.push(_pokemons[key]);
  });

  return pokeValues;
};

PokeStore.find = function(n) {
  const pokeId = parseInt(n);

  return _pokemons[n];
};


module.exports = PokeStore;
