import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super();

		this.state = {
			articles: []
		}

		this.getWiki = this.getWiki.bind(this);
	}

	getWiki() {
		const query = this.refs.search.value || 'Main Page';
		axios.get(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&prop=extracts|info&inprop=url&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${query}`)
			.then(res => {
				console.log(res.data);
			})
	}

	componentDidMount() {
		this.getWiki();
	}

	render() {
		const { articles } = this.state;

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="form-group">
									<h3>Search wikipedia: <small>(searches on input change)</small></h3>
									<input type="text" className="form-control form-wi"/>
									<a target="_blank" href="https://en.wikipedia.org/wiki/Special:Random" className="btn btn-primary pull-right"><i className="fa fa-random"></i></a>
								</div>
							</div>
						</div>
					</div>

					{ articles ? articles.map(article => (
						<div className="panel panel-primary">

						</div>
					)) : '' }

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
