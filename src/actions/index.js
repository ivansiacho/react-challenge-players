export function selectLine(line) {
	return {
		type: 'LINE_SELECTED',
		payload: line
	};
}

export function selectedPlayer(playerName) {
	return {
		type: 'PLAYER_SELECTED',
		payload: playerName
	};
}
