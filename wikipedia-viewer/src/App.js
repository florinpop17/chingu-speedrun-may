import React, { Component } from 'react';
import axios from 'axios';

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
				let articles = [];
				const { pages } = res.data.query;
				for(let key in pages){
					const { title, fullurl: url, extract } = pages[key];

					articles.push({ title, url, extract });
				}

				this.setState({ articles });
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
									<input type="text" ref="search" onChange={this.getWiki} className="form-control form-wi"/>
									<a target="_blank" href="https://en.wikipedia.org/wiki/Special:Random" className="btn btn-primary pull-right"><i className="fa fa-random"></i></a>
								</div>
							</div>
						</div>
					</div>

					{ articles ? (
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									{
										articles.map((article, idx) => (
											<div key={idx} className="panel panel-primary">
												<div className="panel-heading">
													{ article.title }
												</div>
												<div className="panel-body">
													<p>{ article.extract }</p>
													<a href={ article.url }>Read more</a>
												</div>
											</div>
										))
									}
								</div>
							</div>
						</div>
					) : '' }

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
