var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
	getDefaultProps: function() {
		return {
			// The deafult modal will be an error modal
			title: 'Error'
		}
	},
	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},
	componentDidMount: function() {
		var {message, title} = this.props;

		function formatMessage() {
			if (message === 'Error: Not found city') {
				return <span>City not found</span>
			} else {
				return message;
			}
		}

		var MarkUp = (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{formatMessage()}</p>
				<button className="button hollow" data-close="">Okay</button>
			</div>
		);

		var $modal = $(ReactDOMServer.renderToString(MarkUp));
		$(ReactDOM.findDOMNode(this)).html($modal);

		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function() {
		return (
			<div></div>
		);
	}
});

module.exports = ErrorModal;
