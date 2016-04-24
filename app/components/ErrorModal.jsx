var React = require('react');

var ErrorModal = React.createClass({
	getDefaultProps: function() {
		return {
			// The deafult modal will be an error modal
			title: 'Error'
		}
	},
	propTypes: {
		title: react.propTypes.string,
		message: React.PropTypes.string.isRequired
	},
	componentDidMount: function() {
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function() {
		var {message, title} = this.props;

		function formatMessage() {
			if (message === 'Error: Not found city') {
				return <span>City not found</span>
			} else {
				return message;
			}
		}

		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{formatMessage()}</p>
				<button className="button hollow" data-close="">Okay</button>
			</div>
		);
	}
});

module.exports = ErrorModal;
