const React = require('react');
const ToyDetail = require('./toy_detail');
const HashHistory = require('react-router').hashHistory;


const ToyIndexItem = React.createClass({
  showToy() {
    const pokemonId = this.props.toy.pokemon_id;
    const toyId = this.props.toy.id;

    HashHistory.push("/pokemon/" + pokemonId + "/toys/" + toyId);
  },

  render() {
    return (
      <div className='toy-list-item'onClick={this.showToy}>
        <li>{this.props.toy.name}</li>
        <li>{this.props.toy.happiness}</li>
        <li>{this.props.toy.price}</li>
      </div>
    );
  }
});

module.exports = ToyIndexItem;
