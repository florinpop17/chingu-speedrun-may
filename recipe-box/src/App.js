import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import RecipesList from './RecipesList';
import RecipeForm from './RecipeForm';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipes: [],
			recipe_to_edit: undefined
		}

		this.getRecipes = this.getRecipes.bind(this);
		this.onHandleEdit = this.onHandleEdit.bind(this);
		this.onHandleDelete = this.onHandleDelete.bind(this);
	}

	componentDidMount() {
		this.getRecipes();
	}

	getRecipes() {
		this.setState({
			recipes: JSON.parse(localStorage.getItem('recipes')) || [], // get recipes from localStorage or empty array
			recipe_to_edit: undefined // reset recipe to edit
		});
	}

	onHandleEdit(id) {
		console.log(id);
		this.setState({ recipe_to_edit: id });
	}

	onHandleDelete(id) {
		let { recipes } = this.state;

		recipes = recipes.filter(recipe => recipe.id !== id);

		localStorage.setItem('recipes', JSON.stringify(recipes));
		this.getRecipes();
	}

	render() {
		const { recipes, recipe_to_edit } = this.state;

		return (
			<Router>
				<div className="container-fluid">
					<div className="row">

						<nav className="navbar-default navbar-static-top">
							<div className="container">
								<h2><Link to="/">Recipe box</Link> <Link to="/recipe" className="btn btn-primary btn-sm pull-right">Add recipe</Link></h2>
							</div>
						</nav>
						<div className="container">
							<div className="row">
								<Switch>
									<Route exact path="/" render={() => ( <RecipesList recipes={recipes} handleEdit={this.onHandleEdit} handleDelete={this.onHandleDelete} /> )} />
									<Route path="/recipe" render={() => ( <RecipeForm update={this.getRecipes} recipe_to_edit={recipe_to_edit} /> )} />
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
