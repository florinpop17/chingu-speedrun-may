import React, { Component } from 'react';
import jsonp from 'jsonp';

class App extends Component {
	constructor() {
		super();

		this.state = {
			streamers: []
		}
	}

	componentDidMount() {
		const init_streamers = ["cinnamontoastken", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

		init_streamers.forEach(streamer => {

			jsonp(`https://wind-bow.gomix.me/twitch-api/users/${streamer}`, (err, res) => {
				let { streamers } = this.state;

				this.setState({ streamers: [...streamers, res] });
			})
		})
	}

	render() {
		const { streamers } = this.state;

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<h2>Hello to React App</h2>
					</div>

					<ul>
						{ streamers ? streamers.map((streamer, idx) => (
							<li key={ idx }>{ streamer.display_name }</li>
						)) : '' }
					</ul>

					<footer className="nav navbar-inverse navbar-fixed-bottom">
						<div className="container">
							<p className="text-center">Create with <i className="fa fa-heart"></i> by <a target="_blank" href="http://www.florin-pop.com">Florin Pop</a>. Github <a target="_blank" href="https://github.com/florinpop17/chingu-speedrun-may">repo</a>.</p>
						</div>
					</footer>
				</div>
			</div>
		);
	}
}

export default App;
