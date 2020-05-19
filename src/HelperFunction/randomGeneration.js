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

export default randomGeneration;