import React, { Component } from 'react';

class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            display: '',
            result: 0,
            isDot: false,
            error: ''
        }
    }

    handleNumber(nr) {
        let { result } = this.state;

        result *= 10;
        result += nr;
        if(result > 999999999999) {
            this.setState({ error: 'The number is too large.' })
            setInterval(() => {this.setState({ error: '' })}, 3000);
        } else {
            this.setState({ result });
        }
    }

    handleOperation(op) {
        switch (op) {
            case '+' : {
                console.log('+ was pressed');
                break;
            }
            case '-' : {
                console.log('- was pressed');
                break;
            }
            case '/' : {
                console.log('/ was pressed');
                break;
            }
            case '*' : {
                console.log('* was pressed');
                break;
            }
            case '±' : {
                console.log('± was pressed');
                break;
            }
            case '.' : {
                console.log('. was pressed');
                break;
            }
            case '=' : {
                console.log('= was pressed');
                break;
            }

            default: break;
        }
    }

    clearAll() {
        console.log('clear all')
    }

    render(){
        const { display, result, error } = this.state;

        return (
            <div className="calculator-container">
                { error ? <alert className="alert alert-warning">{ error }</alert> : '' }
                <div className="calculator">
                    <p className="display">{ display }</p>
                    <input type="text" value={ result } className="form-control" disabled/>
                    <div className="buttons-group">
                        <button onClick={() => this.clearAll()} className="btn btn-primary">C</button>
                        <button onClick={() => this.handleOperation('±')} className="btn btn-primary">±</button>
                        <button onClick={() => this.handleOperation('%')} className="btn btn-primary">%</button>
                        <button onClick={() => this.handleOperation('/')} className="btn btn-secondary">/</button>
                    </div>
                    <div className="buttons-group">
                        <button onClick={() => this.handleNumber(7)} className="btn btn-primary">7</button>
                        <button onClick={() => this.handleNumber(8)} className="btn btn-primary">8</button>
                        <button onClick={() => this.handleNumber(9)} className="btn btn-primary">9</button>
                        <button onClick={() => this.handleOperation('*')} className="btn btn-secondary">*</button>
                    </div>
                    <div className="buttons-group">
                        <button onClick={() => this.handleNumber(4)} className="btn btn-primary">4</button>
                        <button onClick={() => this.handleNumber(5)} className="btn btn-primary">5</button>
                        <button onClick={() => this.handleNumber(6)} className="btn btn-primary">6</button>
                        <button onClick={() => this.handleOperation('-')} className="btn btn-secondary">-</button>
                    </div>
                    <div className="buttons-group">
                        <button onClick={() => this.handleNumber(1)} className="btn btn-primary">1</button>
                        <button onClick={() => this.handleNumber(2)} className="btn btn-primary">2</button>
                        <button onClick={() => this.handleNumber(3)} className="btn btn-primary">3</button>
                        <button onClick={() => this.handleOperation('+')} className="btn btn-secondary">+</button>
                    </div>
                    <div className="buttons-group">
                        <button onClick={() => this.handleNumber(0)} className="btn btn-primary btn-long">0</button>
                        <button onClick={() => this.handleOperation('.')} className="btn btn-primary">.</button>
                        <button onClick={() => this.handleOperation('=')} className="btn btn-secondary">=</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
