import React, { Component } from 'react';

import Quote from './components/Quote';

class App extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Hello to React App</h2>
                    <Quote quote={"My quote goes here"} tata={"mama"}/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
