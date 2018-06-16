import React from 'react';
import { Component } from 'react';

import PlayerList from '../containers/player_list';
import PlayerDetail from '../containers/player_detail';

export default class App extends Component {
  render() {
    return (
	    <div className="soccer-field">
      	<PlayerList playerPosition="goalkeepers"/>
        <PlayerList playerPosition="defenders"/>
        <PlayerList playerPosition="midfielders"/>
        <PlayerList playerPosition="fordwards"/>
      	<PlayerDetail/>
      </div>
    );
  }
}
