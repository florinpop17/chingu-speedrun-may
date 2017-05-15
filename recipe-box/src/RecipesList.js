import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class RecipesList extends Component {
	constructor() {
		super();

		this.editRecipe = this.editRecipe.bind(this);
	}

	editRecipe(id) {
		this.props.handleEdit(id);
		this.props.history.push('/work/Portfolio Speedrun/recipe-box/recipe');
	}

	render() {
		const { recipes, handleDelete } = this.props;

		return (
			<div className="col-md-12">
				{ recipes.length > 0 ? (
					recipes.map((recipe) => (
						<div key={ recipe.id } className="panel panel-primary">
							<div className="panel-heading">
								{ recipe.name }
							</div>
							<div className="panel-body">
								<h5>Ingredients: </h5>
								<ul className="list-group">
									{ recipe.ingredients.map((ingredient, idx) => (
										<li key={ idx } className="list-group-item"> { ingredient } </li>
									)) }
								</ul>
								<div className="action-buttons pull-right">
									<button onClick={() => { this.editRecipe(recipe.id) }} className="btn btn-warning btn-sm"><i className="fa fa-edit"></i></button>
									<button onClick={() => { handleDelete(recipe.id) }} className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>
								</div>
							</div>
							<div className="panel-footer">
								<small>Created at: { new Date(recipe.created).toUTCString() }</small>
							</div>
						</div>
					))
				) : (
					<div className="text-center">
						<p className="lead">You have no recipes.</p>
					</div>
				) }
			</div>
		);
	}
}

RecipesList.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}).isRequired,
};

export default withRouter(RecipesList);
