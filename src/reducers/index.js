import { combineReducers } from 'redux';
import playersReducer from './players';
import ActiveLine from './active_line';


const rootReducer = combineReducers({
	players: playersReducer,
	activeLine: ActiveLine
});

export default rootReducer;
