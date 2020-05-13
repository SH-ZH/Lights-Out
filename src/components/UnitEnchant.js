import React from 'react';
import EnchantOptions from './EnchantOptions.js';

class UnitEnchant extends React.Component {	
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
			  <select class="form-control" id="lang" onChange={this.handleChange}>
				<EnchantOptions etype="roughsea" lang={this.props.lang} />
				<EnchantOptions etype="fullmoon" lang={this.props.lang} />
				<EnchantOptions etype="onered" lang={this.props.lang} />
				<EnchantOptions etype="oneblue" lang={this.props.lang} />
				<EnchantOptions etype="onegreen" lang={this.props.lang} />
				<EnchantOptions etype="twored" lang={this.props.lang} />
				<EnchantOptions etype="twoblue" lang={this.props.lang} />
				<EnchantOptions etype="twogreen" lang={this.props.lang} />
			  </select>
			</div>
		)
	}
}

export default UnitEnchant;