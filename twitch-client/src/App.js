import React, { Component } from 'react';
import jsonp from 'jsonp';

class App extends Component {
	constructor() {
		super();

		this.state = {
			streamers: [],
			filter_status: 'all',
			search_term: ''
		}

		this.filterStream = this.filterStream.bind(this);
		this.searchStream = this.searchStream.bind(this);
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

	filterStream(filter_status) {
		this.setState({ filter_status });
	}

	searchStream() {
		this.setState({ search_term: this.refs.search.value });
	}

	render() {
		let { streamers, filter_status, search_term } = this.state;

		if(filter_status === 'on'){
			streamers = streamers.filter((streamer) => streamer.status );
		}

		if(filter_status === 'off'){
			streamers = streamers.filter((streamer) => !streamer.status );
		}

		streamers = streamers.filter((streamer) => streamer.display_name.toLowerCase().includes(search_term) );

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">
						<div className="buttons">
							<button onClick={() => this.filterStream('all')} className="btn btn-primary">All streams</button>
							<button onClick={() => this.filterStream('on')} className="btn btn-primary">Online</button>
							<button onClick={() => this.filterStream('off')} className="btn btn-primary">Offline</button>
						</div>
						<div className="input-group">
							<span className="input-group-addon">Search: </span>
							<input onChange={this.searchStream} ref="search" type="text" className="form-control"/>
						</div>
					</div>
				</div>
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
										<div className="media-right">
											{ streamer.streams ? (
												<div className="text-center">
													<p>Online</p>
													<a href={ `https://www.twitch.tv${streamer.url}` } className="btn btn-primary"><i className="fa fa-play"></i></a>
												</div>
											) : 'Offline' }
										</div>
									</div>
								</div>
							</div>
						)) : '' }
					</div>

					<footer className="nav navbar-default navbar-fixed-bottom">
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
