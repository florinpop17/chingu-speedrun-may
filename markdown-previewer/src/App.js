import React, { Component } from 'react';
import marked from 'marked';

class App extends Component {
	state = {
		result: '<p>Output will be here!</p>'
	}

	handleChange() {
		let { inp } = this.refs;

		inp = inp.value;

		this.setState({
			result: marked(inp)
		})
	}

	componentDidMount() {
		// set default value
		this.refs.inp.value = "# Hello to Markdown previwer. You can insert your markdown here.";
	}

	render() {
		const { result } = this.state;

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-6">
						<textarea ref="inp" onChange={() => { this.handleChange() }} className="form-control"></textarea>
					</div>
					<div className="col-sm-6">
						<div className="content" dangerouslySetInnerHTML={{__html: result}}></div>
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
