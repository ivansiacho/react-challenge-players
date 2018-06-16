import React, { Component } from 'React';
import { connect } from 'react-redux';
import { selectedPlayer } from '../actions/index';
import { bindActionCreators } from 'redux';

class PlayerDetail extends Component {
	renderList(players, activeLine) {
		return players[`${activeLine}`].map((player, index) => {
			return (
				<li
					key={index}
					className=""
					onClick={() => this.props.selectedPlayer(player.name)}>
					{player.name}
				</li>
			);
		});
	}

	render() {
		const { activeLine, players, activePlayer } = this.props;
		console.log(activePlayer);
		
		if (!activeLine) {
			return (
				<div>no players</div>
			);
		}

		return (
			<div>
				<ul>
					{this.renderList(players, activeLine)}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		activeLine: state.activeLine,
		players: state.players,
		activePlayer: state.activePlayer
	};
}

/* Anything returned of this function will end up as props on the PlayerList container */
function mapDispatchToProps(dispatch) {
	/* Whenever selectLine is called, the result should be passed to all our reducers */
	return bindActionCreators({ selectedPlayer: selectedPlayer }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerDetail);