import { combineReducers } from 'redux';
import playersReducer from './players';
import ActiveLine from './active_line';
import SelectedPlayer from './active_player';


const rootReducer = combineReducers({
	players: playersReducer,
	activeLine: ActiveLine,
	activePlayer: SelectedPlayer
});

export default rootReducer;
