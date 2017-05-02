var React = require("react");
var WeatherForm = require("./WeatherForm");
var WeatherMessage = require("./WeatherMessage");
var openWeatherMap = require("../api/openWeatherMap")

var Weather = React.createClass({
  getInitialState: function (){
    return {
      isLoading: false
    };
  },
  handleNewData: function(location) {
    var that = this;

    //BreakPoint
    //debugger;
    this.setState({isLoading: true});
      openWeatherMap.getTemp(location).then(function(temp){
        that.setState({
          isLoading: false,
          location: location,
          temperature: temp
        });
      }, function(errorMessage){
        that.setState({
          isLoading: false,
          location: undefined,
          temperature: undefined
        });
        alert(errorMessage);
      })
  },
  render: function (){
    var {isLoading, temperature, location} = this.state;

    function renderMessage(){
      if(isLoading)
      {
        return <h3>Fetching weather...</h3>;
      } else if(temperature && location)
      {
        return <WeatherMessage temperature={temperature} location={location}/>
      }
    }

    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm  onNewData={this.handleNewData} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
