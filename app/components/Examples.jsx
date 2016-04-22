
// require alias' requires Node 5+
var React = require('react');

// OLD STANDARD SYNTAX
// ===================
// var Examples = React.createClass({
// 	render: function() {
// 		return (
// 			<h3>Examples Header</h3>
// 		);
// 	}
// });

// Stateless Functional React Component Syntax (same functionality as above)
// This can only but used with components with state or methods for just presentation
// var Examples = function(props) {
// 	return (
// 		<h3>Examples Header</h3>
// 	);
// }

// NEW STATELESS FUNCTIONAL REACT COMPONENT SYNTAX
// ===============================================
var Examples = (props) => {
	return (
		<h3>Examples Header</h3>
	);
}

module.exports = Examples;
