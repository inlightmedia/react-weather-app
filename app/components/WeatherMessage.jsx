var React = require('react');

// OLD STANDARD SYNTAX
// ===================
// var WeatherMessage = React.createClass({
// 	render: function() {
// 		var {temp, location} = this.props;
// 		return (
// 			<p>In {location} the temperature is {temp}˚C</p>
// 		);
// 	}
// });

// NEW STATELESS FUNCTIONAL REACT COMPONENT SYNTAX
// ===============================================
// var WeatherMessage = (props) => {
// 	var {temp, location} = props;
// 	// Same as var temp = props.temp, location = props.location;
// 	return (
// 		<p>In {location} the temperature is {temp}˚C</p>
// 	);
// }

// THIS USES THE ES6 OBJECT DESTRUCTURING SYNTAX RIGHT IN THE ARGUMENTS AREA OF THE ARROW FUNCTION
var WeatherMessage = ({temp, location}) => {
	// Same as var temp = props.temp, location = props.location;
	return (
		<p>In {location} the temperature is {temp}˚C</p>
	);
}

module.exports = WeatherMessage;
