import React, { Component } from 'react';

class RecipesList extends Component {

	render() {
		const { recipes } = this.props;

		return (
			<div className="col-md-12">
				{ recipes.length > 0 ? (
					recipes.map((recipe) => (
						<div key={ recipe.id } className="panel panel-primary">
							<div className="panel-heading">
								{ recipe.name }
							</div>
							<div className="panel-body">
								<ul className="list-group">
									{ recipe.ingredients.map((ingredient, idx) => (
										<li key={ idx } className="list-group-item"> { ingredient } </li>
									)) }
								</ul>
							</div>
							<div className="panel-footer">
								<small>Created at: { recipe.created }</small>
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

export default RecipesList;
