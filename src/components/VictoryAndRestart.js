import React from 'react';
import ResetGame from './ResetGame.js';

function VictoryAndRestart(props) {
	if (props.win === "true") {
		return (
			<div className="victoryModal">
				<div className="victoryMessage">
					<p>You have won! It took you {props.steps}!</p>
					<ResetGame onClick={props.onClick} />
				</div>
			</div>
		)
	}
	else {
		return null;
	}
}

export default VictoryAndRestart;