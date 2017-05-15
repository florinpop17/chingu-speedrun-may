import React, { Component } from 'react';
import uuid from 'uuid';

class RecipesList extends Component {

	render() {
		const { recipes } = this.props;

		return (
			{ recipes.length > 0 ? (
				recipes.map((recipe) => (
					<div key={ recipe.id } className="panel panel-primary">
						<div className="panel-heading">
							{ recipe.name }
						</div>
						<div className="panel-body">
							{ recipe.ingredients }
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
			)}
		);
	}
}

export default RecipesList;
