function winCheck(gameBoard) {
	if (gameBoard.includes("black")) {
		return "false"
	}
	else {
		return "true"
	}
}

export default winCheck;