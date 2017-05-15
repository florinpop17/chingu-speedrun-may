import React, { Component } from 'react';
import uuid from 'uuid/v4';

class RecipeForm extends Component {
    state = {
        success: '',
        error: ''
    }

    handleSubmit(e) {
        e.preventDefault();
        let { name, ingredients } = this.refs;
        const { edit_mode } = this.state;
        const { recipe_to_edit } = this.props;

        name = name.value;
        ingredients = ingredients.value;

        ingredients = ingredients.split(',').map(ingredient => ingredient.trim()).filter(ingredient => ingredient !== ''); // remove spaces and empty fields

        let recipes = JSON.parse(localStorage.getItem('recipes'));


        if(ingredients.length > 0){
            if(edit_mode) {
                recipes = recipes.map(recipe => {
                    if(recipe.id === recipe_to_edit){
                        recipe.name = name;
                        recipe.ingredients = ingredients;
                    }

                    return recipe;
                });
            } else {
                let newRecipe = {
                    name,
                    ingredients,
                    created: new Date(),
                    id: uuid()
                }
                if(recipes) recipes.push(newRecipe);
                else recipes = [ newRecipe ];
            }

            let success = edit_mode ? 'Item edited successfully.' : 'Item added successfully.';

            localStorage.setItem('recipes', JSON.stringify(recipes));
            this.setState({ success, error: '' });
            this.props.update(recipes);

        } else {
            this.setState({ error: 'Please add few ingredients.', success: '' });
        }

        setTimeout(() => { this.setState({ success: '', error: '' }) }, 1500);
    }

    componentDidMount() {
        const { recipe_to_edit } = this.props;
        const { name, ingredients } = this.refs;

        const recipes = JSON.parse(localStorage.getItem('recipes'));

        if(recipe_to_edit){
            let recipe = recipes.find(recipe => recipe.id === recipe_to_edit);
            name.value = recipe.name;
            ingredients.value = recipe.ingredients.join(', '); // join by space and comma
            this.setState({ edit_mode: true });
        }
    }

    render() {
        const { success, error, edit_mode } = this.state;

        return(
            <form className="col-sm-6 col-sm-offset-3" onSubmit={ this.handleSubmit.bind(this) }>
                { success ? (<div className="alert alert-info">{ success }</div>) : '' }
                { error ? (<div className="alert alert-warning">{ error }</div>) : '' }
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text" ref="name" className="form-control" required="required"/>
                </div>
                <div className="form-group">
                    <label>Ingredients <small>(separated by comma)</small>: </label>
                    <input type="text" ref="ingredients" className="form-control" required="required"/>
                </div>
                <button className="btn btn-primary">{ edit_mode ? 'Edit' : 'Create' }</button>
            </form>
        )
    }
}

export default RecipeForm;
