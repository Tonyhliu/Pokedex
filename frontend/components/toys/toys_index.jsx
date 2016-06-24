const React = require('react');
const ToyIndexItem = require('./toy_index_item');

const ToyIndex = React.createClass({
  render() {
    return (
      <div >
        {
          this.props.toys.map(toy => {
            return <ToyIndexItem toy={toy} key={toy.id}/>;
          })
        }
      </div>
    );
  }
});

module.exports = ToyIndex;
