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
					<label htmlFor="">Get Weather</label>
					<input type="text" ref="location"/>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		);
	}
});

module.exports = WeatherForm;
