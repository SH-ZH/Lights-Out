import toggleSquare from './toggleSquare.js';

function makeMove(currentBoard, clickedSquare) {
	let newGameState = currentBoard;

	// Toggle clicked square
	newGameState[clickedSquare] = toggleSquare(currentBoard[clickedSquare]);

	// Toggle left square
	if (clickedSquare % 5 !== 0) {
		newGameState[clickedSquare - 1] = toggleSquare(currentBoard[clickedSquare - 1]);
	}
	//Toggle above square
	if (clickedSquare - 5 >= 0) {
		newGameState[clickedSquare - 5] = toggleSquare(currentBoard[clickedSquare - 5]);
	}	

	// Toggle right square
	if (clickedSquare % 5 !== 4) {
		newGameState[clickedSquare + 1] = toggleSquare(currentBoard[clickedSquare + 1]);
	}

	// Toggle bottom square
	if (clickedSquare + 5 <= 24) {
		newGameState[clickedSquare + 5] = toggleSquare(currentBoard[clickedSquare + 5]);
	}	

	return newGameState;
}

export default makeMove;