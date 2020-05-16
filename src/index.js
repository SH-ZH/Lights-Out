import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/index.css';

function Square(props) {
	return (
	  <button className="square" onClick={props.onClick}>
		{props.value}
	  </button>
	);
  }
  
class Board extends React.Component {
	renderSquare(i) {
		return (
		<Square
			value={this.props.squares[i]}
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
	  this.state = {
		history: [
		  {
			squares: Array(25).fill(null)
		  }
		]
	  };
	}

	handleClick(i) {
		console.log("AAAAAAAAAAA");
	  }	
  
	render() {
		const history = this.state.history;
		const current = history[0];

		return (
			<div className="game">
				<div className="game-board">
				<Board squares={current.squares} onClick={i => this.handleClick(i)} />
				</div>
			</div>
		);
	}
  }
  
  // ========================================
  
  ReactDOM.render(<Game />, document.getElementById("root"));
  
  function calculateWinner(squares) {
	const lines = [
	  [0, 1, 2],
	  [3, 4, 5],
	  [6, 7, 8],
	  [0, 3, 6],
	  [1, 4, 7],
	  [2, 5, 8],
	  [0, 4, 8],
	  [2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
	  const [a, b, c] = lines[i];
	  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
		return squares[a];
	  }
	}
	return null;
  }
  