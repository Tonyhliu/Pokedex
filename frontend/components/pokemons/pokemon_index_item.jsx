const React = require('react');
const HashHistory = require('react-router').hashHistory;

const PokemonIndexItem = React.createClass({
  showDetail() {
    const pokeid = this.props.pokemon.id;
    HashHistory.push('/pokemon/'+ pokeid);
  },

  render() {
    return (
      <li className='poke-list-item' onClick={this.showDetail}>
        {this.props.pokemon.name}
        <br></br>
        {this.props.pokemon.poke_type}
      </li>
    );
  }
});

module.exports = PokemonIndexItem;
