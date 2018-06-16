import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectLine } from '../actions/index';
import { bindActionCreators } from 'redux';

class PlayerList extends Component {
	renderList() {
		const { playerPosition, selectLine, players } = this.props;
		const playerList = players[`${playerPosition}`].filter((player) => player.active);

		return playerList.map((player, index) => {
			return (
				<li
					key={index}
					className={`section-players__player ${playerPosition}${index} ${player.active ? 'active' : ''}`}
					onClick={() => selectLine(playerPosition)}>
					{player.name}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className={`section-players ${this.props.playerPosition}`}>
				{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	/* Whatever is returned will show up as props inside of PlayerList */
	return {
		players: state.players
	};
}

/* Anything returned of this function will end up as props on the PlayerList container */
function mapDispatchToProps(dispatch) {
	/* Whenever selectLine is called, the result should be passed to all our reducers */
	return bindActionCreators({ selectLine: selectLine }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);