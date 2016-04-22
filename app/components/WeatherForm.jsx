var React = require('react');

var WeatherForm = React.createClass({
	onSubmitForm: function(e) {
		e.preventDefault();
		var location = this.refs.location.value;
		if (location.length > 0) {
			this.refs.location.value = '';
			this.props.onSearch(location);
		} else {
			alert('Please enter a city.');
		}
	},
	render: function() {
		return (
			<div>
				<form onSubmit={this.onSubmitForm}>
					<input type="text" ref="location" placeholder="Enter City Name Here"/>
					<p className="help-text">Ex. London, UK</p>
					<input className="button segmented hollow expanded" type="submit" value="Submit"/>
				</form>
			</div>
		);
	}
});

module.exports = WeatherForm;
