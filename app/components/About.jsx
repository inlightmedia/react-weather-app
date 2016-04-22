
// require alias' requires Node 5+
var React = require('react');

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
		<h3>About Component</h3>
	);
}

module.exports = About;
