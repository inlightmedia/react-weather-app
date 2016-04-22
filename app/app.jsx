var React 		= 	require('react');
var ReactDOM 	= 	require('react-dom');

// Initialize Routing
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// The above var is the same as the below but uses an ES6 feature shorthand:
// var Route = require('react-router').Route; var Router = require('react-router').Router; var IndexRoute = require('react-router').IndexRoute; var hashHistory = require('react-router').hashHistory;

// Load foundation
// style! injects into the HTML css! loads into the JS
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Route Components
var Weather 	= 	require('Weather');
var About 		= 	require('About');
var Examples 	= 	require('Examples');

var Main = require('Main');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Weather}/> {/* This is the default route. */}
			<Route path="/about" component={About} />
			<Route path="/examples" component={Examples} />
		</Route>
	</Router>,
	document.getElementById('app')
);
