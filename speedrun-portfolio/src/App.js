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
						<h2 className="text-center">Portfolio website</h2>
						<ul>
							{ projects ? projects.map((project, idx) => (
								<li key={idx}>
									<a href={ '/'+project+'/' }>{ project }</a>
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
