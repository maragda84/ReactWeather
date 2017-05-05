var React = require("react");

// $button-palette: map-merge($foundation-palette, (
//     purple: #bb00ff
// )) !default;

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
        <button className="button warning">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
