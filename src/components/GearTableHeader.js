import React from 'react';
import TableHead from './TableHead.js';

function GearTableHeader(props) {
	return (
	  <thead class="thead-dark">
		<tr>
			<TableHead text={props.tableHeader} lang={props.lang} />
			<TableHead text="weapon" lang={props.lang} />
			<TableHead text="armor" lang={props.lang} />
			<TableHead text="helmet" lang={props.lang} />
			<TableHead text="acc" lang={props.lang} />
			<TableHead text="mastery" lang={props.lang} />
		</tr>
	  </thead>
	)
}

export default GearTableHeader;