import React, { Component } from 'react';
import projects from './projects';

class App extends Component {
	constructor() {
		super();

		this.state = {
			projects
		}
	}

	render() {
		const { projects } = this.state;

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2 className="text-center">Portfolio website <small>These apps were built for the <a target="_blank" href="https://github.com/florinpop17/chingu-speedrun-may">Chingu Speedrun</a>. </small></h2>
						<p>More to come... :)</p>
						<ul>
							{ projects ? projects.map((project, idx) => (
								<li key={idx}>
									<a target="_blank" href={ project+'/' }>{ project }</a>
								</li>
							)) : '' }
						</ul>
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
