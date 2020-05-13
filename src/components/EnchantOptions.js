import React from 'react';

let en = require('../languages/en.json');
let jp = require('../languages/jp.json');

function EnchantOptions(props) {
	const lang = props.lang;
	const searching_text = props.etype;
	let text = '';	
	
	if (lang === 'en') {
		text = en[searching_text];
	}
	else if (lang === 'jp') {
		text = jp[searching_text];
	}		
	
	return (
		<option value={props.etype}>{text}</option>
	)
}

export default EnchantOptions;