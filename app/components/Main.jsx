var React = require('react');
// var Nav = require('./Nav.jsx');
var Nav = require('Nav');

// OLD STANDARD SYNTAX
// ===================
// var Main = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<Nav/>
// 				<h2>Main Component</h2>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// });


// NEW STATELESS FUNCTIONAL REACT COMPONENT SYNTAX
// ===============================================
var Main = (props) => {
	return (
		<div>
			<Nav/>
			<div className="row">
				<div className="main columns medium-6 large-4 small-centered">
					{props.children}
				</div>
			</div>


		</div>
	);
}

module.exports = Main;
