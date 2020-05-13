import React from 'react';

class OpenInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		this.props.onInput(e.target.value);
	}	
	
	render() {		
		return (
			<td><input type="text" id={this.props.id} onChange={this.handleChange} ></input></td>
		)
	}	
}

export default OpenInput;