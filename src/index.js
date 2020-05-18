import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/index.css';
import Board from './components/Board.js';
import InstanceWin from './components/InstanceWin.js';
import ResetGame from './components/ResetGame.js';
import VictoryAndRestart from './components/VictoryAndRestart.js';
import StepCounter from './components/StepCounter.js';

class Game extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			gameBoard: Array(25).fill("null"),
			moveNumber: 0,
			win: "false"
		};
	}

	componentDidMount() {
		this.resetGame();
	}

	handleClick(i) {
		const newCount = this.state.moveNumber + 1;

		const currentBoard = this.state.gameBoard;
		const newBoard = makeMove(currentBoard, i);
		const won = winCheck(newBoard);

		this.setState({
			gameBoard: newBoard,
			moveNumber: newCount,
			win: won
		})		
	}	

	resetGame() {
		this.setState({ 
			gameBoard: randomGeneration(),
			moveNumber: 0,
			win: "false"
		});
	}

	instanceWin() {
		const winBoard = Array(25).fill("white");
		const won = winCheck(winBoard);

		this.setState({ 
			gameBoard: winBoard,
			win: won
		});

	}

	render() {
		const currentBoard = this.state.gameBoard;
		const currentSteps = this.state.moveNumber;
		const currentWin = this.state.win;

		return (
			<div className="game">
				<div className="game-board">
					<Board board={currentBoard} onClick={i => this.handleClick(i)} />
				</div>
				<div className="game-other">
					<ResetGame onClick={() => this.resetGame()} />
					<InstanceWin onClick={() => this.instanceWin()} />
					<StepCounter steps={currentSteps} />
				</div>
				<VictoryAndRestart win={currentWin} steps={currentSteps} onClick={() => this.resetGame()} />
			</div>
		);
	}
}
  
// ========================================
  
ReactDOM.render(<Game />, document.getElementById("root"));
  
function randomGeneration() {
	let newGameState = new Array(25);

	for (let v = 0; v < 25; v++) {
		let ranNum = Math.round(Math.random());
		if (ranNum === 0) {
			newGameState[v] = "white";
		}
		else {
			newGameState[v] = "black";			
		}
	}

	return newGameState;
}

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

function toggleSquare(color) {
	if (color === "white") {
		return "black";		
	}
	else {
		return "white";
	}
}

function winCheck(gameBoard) {
	if (gameBoard.includes("black")) {
		return "false"
	}
	else {
		return "true"
	}
}