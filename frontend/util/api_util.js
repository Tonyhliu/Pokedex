const PokemonApiUtil = {
  fetchAllPokemon(cb) {
    $.ajax({
      url: '/api/pokemon',
      method: 'GET',
      dataType: 'json',
      success(list) {
        cb(list);
      }
    });
  },

  fetchPokemon(id, cb) {
    $.ajax({
      url: '/api/pokemon/' + id,
      method: 'GET',
      dataType: 'json',
      success(pokemon) {
        cb(pokemon);
      }
    });
  }
};

module.exports = PokemonApiUtil;
