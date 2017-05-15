import React, { Component } from 'react';
import uuid from 'uuid';

class App extends Component {
	state = {
		recipes: []
	}

	componentDidMount() {
		this.setState({ recipes: localStorage.getItem('recipes') || [] }); // get recipes from localStorage or empty array
	}

	render() {
		const { recipes } = this.state;

		return (
			<div className="container-fluid">
				<div className="row">
					{ recipes ? (
						recipes.map((recipe) => {
							<div key={ recipe.id } className="panel panel-primary">
								<div className="panel-heading">
									{ recipe.title }
								</div>
							</div>
						})
					) : (
						<div className="text-center">
							<p className="lead">You have no recipes.</p>
						</div>
					)}

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
