import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/index.css';
import Board from './components/Board.js';
import InstanceWin from './components/InstanceWin.js';
import ResetGame from './components/ResetGame.js';
import VictoryAndRestart from './components/VictoryAndRestart.js';
import StepCounter from './components/StepCounter.js';

import randomGeneration from './HelperFunction/randomGeneration.js';
import makeMove from './HelperFunction/makeMove.js';
import winCheck from './HelperFunction/winCheck.js';

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

	justCloseMessage() {
		this.setState({ 
			win: "false"
		});
	}

	instanceWin() {
		const winBoard = Array(25).fill("black");
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
					<StepCounter steps={currentSteps} />
					<ResetGame onClick={() => this.resetGame()} />
					<InstanceWin onClick={() => this.instanceWin()} />
				</div>
				<VictoryAndRestart win={currentWin} steps={currentSteps} onClick={() => this.resetGame()} close={() => this.justCloseMessage()} />
			</div>
		);
	}
}
  
// ========================================
  
ReactDOM.render(<Game />, document.getElementById("root"));