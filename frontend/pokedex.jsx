const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;

const App = require('./components/app');
const PokemonsIndex = require('./components/pokemons/pokemons_index');
const PokemonDetail = require('./components/pokemons/pokemon_details');
const ToyDetail = require('./components/toys/toy_detail');

const Pokedex = React.createClass({
  render() {
    return (
      <div>
      </div>
    );
  }
});

const routes = (
  <Route path="/" component={App}>
    <Route path="/pokemon/:pokemonId" component={PokemonDetail}>
      <Route path="/toys/:toyId" component={ToyDetail}/>
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
	  <Router history={hashHistory}>{routes}</Router>,
	  document.getElementById('root')
  );
});
