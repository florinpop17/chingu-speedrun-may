import React, { Component } from 'react';
import quotes from './quotes_json';

import Quote from './components/Quote';

class App extends Component {
    constructor() {
        super();

        this.state = {
            quotes: quotes
        }
    }

    getRandom(max){
        return Math.floor(Math.random() * max);
    }

    render() {
        const { quotes } = this.state;
        const { text, author } = quotes[this.getRandom(quotes.length)];

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Quote text={ text } author={ author } />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
