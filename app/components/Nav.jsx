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
var Nav = React.createClass({
	onSearch: function(e) {
		e.preventDefault();
		var location = this.refs.location.value;
		alert(location);
		var encodedLocation = encodeURIComponent(location);
		if (location.length > 0) {
			this.refs.location.value = '';
			window.location.hash = '#/?location=' + encodedLocation;
		}
	},
	render: function() {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						{/* activeClassName is a React property that sets the class name that will be placed on the active page's link */}
						<li className="menu-text">React Weather App</li>
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
						</li>
						<li>
							<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
						</li>
						<li>
							<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
						</li>

					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li>
								<input type="search" placeholder="Search Weather by City" ref="location"/>
							</li>
							<li>
								<input type="submit" className="button" value="Get Weather"/>
							</li>
						</ul>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Nav;
