import React, { Component } from 'react';

class App extends Component {
	state = {
		result: ''
	}

	render() {
		const { result } = this.state;

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6">
						<textarea ref="input_text" className="form-control"></textarea>
					</div>
					<div className="col-md-6">
						{ result }
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
