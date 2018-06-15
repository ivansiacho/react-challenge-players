import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectLine } from '../actions/index';
import { bindActionCreators } from 'redux';

class PlayerList extends Component {
	renderList() {
		console.log(this.props.activeLine);
		const { playerPosition, selectLine } = this.props;

		return this.props.players[`${playerPosition}`].map((player, index) => {
			return (
				<li
					key={index}
					className={player.active ? 'list-group-item active' : 'list-group-item'}
					onClick={() => selectLine(playerPosition)}>
					{player.name}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-md-4">
				{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	/* Whatever is returned will show up as props inside of PlayerList */
	return {
		players: state.players,
		activeLine: state.activeLine
	};
}

/* Anything returned of this function will end up as props on the PlayerList container */
function mapDispatchToProps(dispatch) {
	/* Whenever selectLine is called, the result should be passed to all our reducers */
	return bindActionCreators({ selectLine: selectLine }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);