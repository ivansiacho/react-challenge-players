export default (state = null, action) => {
	switch(action.type) {
		case 'LINE_SELECTED':
			return action.payload;
	}

	return state;
}