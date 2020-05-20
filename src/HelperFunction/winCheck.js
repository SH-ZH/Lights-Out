function winCheck(gameBoard) {
	if (gameBoard.includes("white")) {
		return "false"
	}
	else {
		return "true"
	}
}

export default winCheck;