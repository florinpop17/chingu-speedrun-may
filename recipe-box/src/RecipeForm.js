import React, { Component } from 'react';
// import uuid from 'uuid';

class RecipeForm extends Component {

    handleSubmit(e) {
        e.preventDefault();

        console.log('form submitted');
    }

    render() {
        return(
            <form className="col-sm-6 col-sm-offset-3" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text" ref="name" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Ingredients <small>(separated by comma)</small>: </label>
                    <input type="text" ref="ingredients" className="form-control"/>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
        )
    }
}

export default RecipeForm;
