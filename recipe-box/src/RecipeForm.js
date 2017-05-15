import React, { Component } from 'react';

class RecipeForm extends Component {
    render() {
        return(
            <form>
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text" className="form-control"/>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
        )
    }
}
