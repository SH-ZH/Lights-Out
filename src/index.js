import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/index.css';

function Square(props) {
	return (
	  <button className="square" onClick={props.onClick} color={props.value}>
		
	  </button>
	);
  }

class Board extends React.Component {
	renderSquare(i) {
		return (
		<Square
			value={this.props.board[i]}
			onClick={() => this.props.onClick(i)}
		/>
		);
	}

	render() {
		return (
		<div>
			<div className="board-row">
				{this.renderSquare(0)}
				{this.renderSquare(1)}
				{this.renderSquare(2)}
				{this.renderSquare(3)}
				{this.renderSquare(4)}			
			</div>
			<div className="board-row">
				{this.renderSquare(5)}
				{this.renderSquare(6)}
				{this.renderSquare(7)}
				{this.renderSquare(8)}
				{this.renderSquare(9)}			
			</div>
			<div className="board-row">
				{this.renderSquare(10)}
				{this.renderSquare(11)}
				{this.renderSquare(12)}
				{this.renderSquare(13)}
				{this.renderSquare(14)}			
			</div>
			<div className="board-row">
				{this.renderSquare(15)}
				{this.renderSquare(16)}
				{this.renderSquare(17)}
				{this.renderSquare(18)}
				{this.renderSquare(19)}			
			</div>
			<div className="board-row">
				{this.renderSquare(20)}
				{this.renderSquare(21)}
				{this.renderSquare(22)}
				{this.renderSquare(23)}
				{this.renderSquare(24)}			
			</div>						
		</div>
		);
	}
}
  
  class Game extends React.Component {
	constructor(props) {
	  super(props);

	  this.resetGame = this.resetGame.bind(this);
	  this.checkWin = this.checkWin.bind(this);

	  this.state = {
		gameBoard: Array(25).fill("null"),
		moveNumber: 0
	  };
	}

	componentDidMount() {
		this.resetGame();
	}

	resetGame() {
		this.setState({ 
			gameBoard: randomGeneration(),
			moveNumber: 0			
		});
	}

	checkWin() {
		let currentBoard = this.state.gameBoard;

		winCheck(currentBoard);
	}

	handleClick(i) {
		const newCount = this.state.moveNumber + 1;

		const currentBoard = this.state.gameBoard;
		const newBoard = createNewBoard(currentBoard, i);

		this.setState({
			gameBoard: newBoard,
			moveNumber: newCount
		})
		console.log("AAAAAAAAAAA");
	  }	
  
	render() {
		const currentBoard = this.state.gameBoard;

		return (
			<div className="game">
				<div className="game-board">
					<Board board={currentBoard} onClick={i => this.handleClick(i)} />
				</div>
				<div className="game-other">
					<button className="game-reset" onClick={this.resetGame}>
						Reset to New Game
					</button>	
					<button className="game-win" onClick={this.checkWin}>
						Test: Check Game Win
					</button>	
					<div className="moveCount">
						Move Count: {this.state.moveNumber}
					</div>					
				</div>
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
		if (ranNum == 0) {
			newGameState[v] = "white";
		}
		else {
			newGameState[v] = "black";			
		}
	}

	return newGameState;
}

function createNewBoard(currentBoard, clickedSquare) {
	let newGameState = new Array(25).fill("white");

	console.log(clickedSquare);

	return newGameState;
}

function winCheck(gameBoard) {
	if (gameBoard.includes("black")) {
		console.log("False");
	}
	else {
		console.log("Win");
	}
}