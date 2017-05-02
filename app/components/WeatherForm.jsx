var React = require("react");

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;
    this.refs.location.value = '';

    this.props.onNewData(location);
  },

  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="Enter a city" ref="location"/>
        <button>Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
