import React, { Component } from 'react';
import quotes_json from './quotes_json';

class App extends Component {
    constructor() {
        super();

        this.state = {
            quotes: quotes_json,
            curr_quote: 0
        }

        this.newQuote = this.newQuote.bind(this);
    }

    getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    newQuote() {
        this.setState({
            curr_quote: this.getRandom(this.state.quotes.length)
        })
    }

    render() {
        const { quotes, curr_quote } = this.state;
        const { text, author } = quotes[curr_quote];

        const twitterLink = `https://twitter.com/intent/tweet?via=flopet17&text=${text}%20-${author}`

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="quote">
                        <div className="buttons">
                            <button onClick={this.newQuote} className="btn btn-primary btn-sm">New quote</button>
                            <a href={twitterLink} className="btn btn-primary btn-sm pull-right">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                        <p className="lead"><i className="fa fa-quote-right"></i> { text }</p>
                        <h4>- <i>{ author }</i></h4>
                    </div>

                    <footer className="nav navbar-inverse navbar-fixed-bottom">
                        <div className="container">
                            <p className="text-center">Create with <i className="fa fa-heart"></i> by <a target="_blank" href="http://www.florin-pop.com">Florin Pop</a>. Github <a target="_blank" href="https://github.com/florinpop17/chingu-speedrun-may">repo</a>.</p>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}


export default App;
