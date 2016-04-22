var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		};
	},
	handleSearch: function (location) {
		var that = this;
		//debugger; //debugger stops the app at this place in devtools
		this.setState({isLoading: true});
		OpenWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp
			});
			that.setState({isLoading: false});
		}, function (e) {
			alert('Error: ' + e);
			that.setState({isLoading: false});
		});
		// console.log(temp);
		// this.setState({
		// 	location: location,
		// 	temp: 52
		// });
	},
	render: function() {
		// This sets the properties of this.state as thier own variable names (for code readablity only)
		var {isLoading, temp, location} = this.state;

		function renderMessage () {
			if (isLoading) {
				return <h3>Fetching weather data...</h3>;
			} else if (temp && location){
				return <WeatherMessage location={location} temp={temp}/>;
			} else {
				// Don't do anything because there is no temp, location, or loading data
			}
		}

		return (
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch} />
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;
