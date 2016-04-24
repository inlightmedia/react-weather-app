var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false,
			errorMessage: undefined
		};
	},
	handleSearch: function (location) {
		var that = this;
		//debugger; //debugger stops the app at this place in devtools
		this.setState({
			isLoading: true,
			errorMessage: undefined
		});
		OpenWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function (e) {
			// alert('Error: ' + e);
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
		});
	},
	render: function() {
		// This sets the properties of this.state as thier own variable names (for code readablity only)
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage () {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather data...</h3>;
			} else if (temp && location){
				return <WeatherMessage location={location} temp={temp}/>;
			} else {
				// Don't do anything because there is no temp, location, or loading data
			}
		}

		function renderError(){
			if (typeof errorMessage === 'string') {
				return <ErrorModal message={errorMessage} title="Error" />;
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch} />
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;
