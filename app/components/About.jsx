
// require alias' requires Node 5+
var React = require('react');
var {Link} = require('react-router');
// OLD STANDARD SYNTAX
// ===============================================
// var About = React.createClass({
// 	render: function() {
// 		return (
// 			<h3>About Component</h3>
// 		);
// 	}
// });

// NEW STATELESS FUNCTIONAL REACT COMPONENT SYNTAX
// ===============================================
var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This is a weather applicaiton built using React javascipt framework.</p>
			<p>Here are some fo the tools I used:</p>
			<ul>
				<li><a href="https:/facebook.github.io/react">React</a> - This is the link to React (Javascript Framework)</li>
				<li><a href="http://www.openweathermap.org">OpenWeatherMap.Org</a> - This is the weather API</li>
			</ul>

		</div>

	);
}

module.exports = About;
