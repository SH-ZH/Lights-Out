import React from 'react';

function ResetGame(props) {
	return (
		<button className="game-reset" onClick={props.onClick}>
			Reset to New Game
		</button>			
	)
}

export default ResetGame;