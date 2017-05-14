import React, { Component } from 'react';

import SimonGame from './SimonGame';

class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<SimonGame />

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
