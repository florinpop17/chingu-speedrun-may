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
		const init_streamers = ["brunofin", "comster404", "cinnamontoastken", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

		init_streamers.forEach(streamer => {

			jsonp(`https://wind-bow.gomix.me/twitch-api/users/${streamer}`, (err, res) => {
				let { streamers } = this.state;

				if(!res.error) // only push if it's not an error
				this.setState({ streamers: [...streamers, res] });

					jsonp(`https://wind-bow.gomix.me/twitch-api/streams/${streamer}`, (err, res) => {
						let { streamers } = this.state;

						if(res.stream) { // only push if it's a stream
							let user_name = res._links.self.split('/')[5];

							streamers = streamers.map(streamer => {
								if(streamer.display_name === user_name){
									streamer.streams = true;
									streamer.status = res.stream.channel.status;
								}

								return streamer;
							})

							this.setState({ streamers });
						}
					});
			});

		});
	}

	render() {
		const { streamers } = this.state;

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">
						{ streamers ? streamers.map(streamer => (
							<div key={ streamer._id } className="panel panel-primary">
								<div className="panel-body">
									<div className="media">
										<div className="media-left">
											<a href={ `https://www.twitch.tv${streamer.url}` }>
												<img src={ streamer.logo } alt={ streamer.name + ' logo' } className="logo"/>
											</a>
										</div>
										<div className="media-body">
											<a href={ `https://www.twitch.tv${streamer.url}` }>{ streamer.display_name }</a>
											<p>{ streamer.bio || 'No bio provided' }</p>
											{ streamer.status ? (<p className="text-info">{ streamer.status }</p>) : '' }
										</div>
										{ streamer.streams ? (
											<div className="media-right text-center">
												<p>Online</p>
												<a href={ `https://www.twitch.tv${streamer.url}` } className="btn btn-primary"><i className="fa fa-play"></i></a>
											</div>
										) : 'Offline' }
									</div>
								</div>
							</div>
						)) : '' }
					</div>

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
