export function selectLine(line) {
	return {
		type: 'LINE_SELECTED',
		payload: line
	};
}