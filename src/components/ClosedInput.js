import React from 'react';

function ClosedInput(props) {
	return <td colored='true'><input type="text" id={props.id} value={props.value} readonly="readonly"></input></td>;
}

export default ClosedInput;