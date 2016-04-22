var React = require('react');

// Initialize the react-router 'Link' Object Property
// IndexLink fixes an issue with applying styles to the active Index element with nested links the problem is that the index page will always receive the styles because it's address is / and all links contaon the / for ex. /about
var {Link, IndexLink} = require('react-router');

// OLD STANDARD SYNTAX
// ===================
// var Nav = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<h3>Nav Component</h3>
// 				{/* activeClassName is a React property that sets the class name that will be placed on the active page's link */}
// 				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
// 				<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
// 				<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
// 			</div>
// 		);
// 	}
// });


// NEW STATELESS FUNCTIONAL REACT COMPONENT SYNTAX
// ===============================================
var Nav = (props) => {
	return (
		<div>
			<h3>Nav Component</h3>
			{/* activeClassName is a React property that sets the class name that will be placed on the active page's link */}
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
			<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
			<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
		</div>
	);
}

module.exports = Nav;
