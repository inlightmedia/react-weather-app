
// require alias' requires Node 5+
var React = require('react');
var {Link} = require('react-router');

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
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are a few examples locations to try out.</p>
			<ol>
				<li>
					<Link to='/?location=Philedelphia'>Philedelphia, PA</Link>
				</li>
				<li>
					<Link to='/?location=Rio'>Rio, Brazil</Link>
				</li>
				<li>
					<Link to='/?location=Paris'>Paris, France</Link>
				</li>
				<li><Link to='/?location=Berlin'>Berlin, Germany</Link></li>
			</ol>
		</div>

	);
}

module.exports = Examples;
