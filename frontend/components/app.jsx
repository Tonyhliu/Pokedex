const React = require('react');
const PokemonsIndex = require('./pokemons/pokemons_index');


const App = React.createClass({
  render(){
    return(
      <div id='pokedex'>
        <div className='pokemon-index-pane'>
          <PokemonsIndex />
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
