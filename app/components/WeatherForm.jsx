var React = require('react');
var ErrorModal = require('ErrorModal');

var WeatherForm = React.createClass({
	getInitialState: function() {
		return {
			errorMessage: undefined
		};
	},
	onSubmitForm: function(e) {
		e.preventDefault();
		this.setState({
			errorMessage: undefined
		});
		var location = this.refs.location.value;
		if (location.length > 0) {
			this.refs.location.value = '';
			this.props.onSearch(location);
		} else {
			this.setState({
				errorMessage: 'Please Enter a city name (eg. Toronto, ON)'
			});
		}
	},
	render: function() {
		var {errorMessage} = this.state;

		function renderError(){
			if (typeof errorMessage === 'string') {
				return <ErrorModal message={errorMessage} />;
			}
		}

		return (
			<div>
				<form onSubmit={this.onSubmitForm}>
					<input type="search" ref="location" placeholder="Search Weather by City"/>
					<p className="help-text">Ex. London, UK</p>
					<input className="button segmented hollow expanded" type="submit" value="Submit"/>
					{renderError()}
				</form>
			</div>
		);
	}
});

module.exports = WeatherForm;
