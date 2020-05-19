import React from 'react';
import ResetGame from './ResetGame.js';
import CloseMessage from './CloseMessage.js';

function VictoryAndRestart(props) {
	if (props.win === "true") {
		return (
			<div className="victoryModal">
				<div className="victoryMessage">
					<p>You have won! It took you {props.steps} moves!</p>
					<ResetGame onClick={props.onClick} />
					<CloseMessage onClick={props.close} />
				</div>
			</div>
		)
	}
	else {
		return null;
	}
}

export default VictoryAndRestart;