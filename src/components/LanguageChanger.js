import React from 'react';

class LanguageChanger extends React.Component {	
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		this.props.onInput(e.target.value);
	}		
  
	render() {
		return (
			<div class="form-group">
			  <label for="lang">Choose Language:</label>
			  <select class="form-control" id="lang" onChange={this.handleChange}>
				<option value="en">English</option>
				<option value="jp">日本語</option>
			  </select>
			</div>
		)
	}
}

export default LanguageChanger;