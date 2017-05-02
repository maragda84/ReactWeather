var React = require("react");

var WeatherMessage = ({temperature, location}) => {
  // var {temp, location} = props;
    return (
      <h2>{location} hat {temperature} Grad</h2>
    )
  };

module.exports = WeatherMessage;
