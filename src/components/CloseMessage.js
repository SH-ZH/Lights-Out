import React from 'react';

function CloseMessage(props) {
	return (
		<button className="game-close" onClick={props.onClick}>
			Close Message
		</button>			
	)
}

export default CloseMessage;