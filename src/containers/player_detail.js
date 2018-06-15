import React, { Component } from 'React';
import { connect } from 'react-redux';

class PlayerDetail extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	renderList(players, activeLine) {
		return players[`${activeLine}`].map((player, index) => {
			return (
				<li
					key={index}
					className="">
					{player.name}
				</li>
			);
		});
	}

	render() {
		const { activeLine, players } = this.props;

		if (!activeLine) {
			return (
				<div>lololo</div>
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
		players: state.players
	};
}

export default connect(mapStateToProps)(PlayerDetail);