import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import RecipesList from './RecipesList';
import RecipeForm from './RecipeForm';

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
			<Router>
				<div className="container-fluid">
					<div className="row">

						<nav className="navbar-default navbar-static-top">
							<div className="container">
								<h2>Recipe box <Link to="/recipe" className="btn btn-primary btn-sm pull-right">Add recipe</Link></h2>
							</div>
						</nav>
						<div className="container">
							<div className="row">
								<Switch>
									<Route exact path="/" render={() => ( <RecipesList recipes={recipes} /> )} />
									<Route path="/recipe" render={() => ( <RecipeForm /> )} />
								</Switch>
							</div>
						</div>

						<footer className="nav navbar-default navbar-fixed-bottom">
							<div className="container">
								<p className="text-center">Create with <i className="fa fa-heart"></i> by <a target="_blank" href="http://www.florin-pop.com">Florin Pop</a>. Github <a target="_blank" href="https://github.com/florinpop17/chingu-speedrun-may">repo</a>.</p>
							</div>
						</footer>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
