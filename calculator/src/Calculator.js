import React, { Component } from 'react';

class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            display: ['0'],
            curr: 0,
            operations: ['+', '-', '*', '/']
        }
    }

    handleNumber(nr) {
        let { display, operations } = this.state;

        nr += ''; // convert to string


        if (display.length === 1 && display[0] === '0') {// no multiple 0's
            display[0] = nr;
        } else if (display[display.length-1] === '0' && operations.indexOf(display[display.length-2]) > -1) {
            display.pop();
            display.push(nr);
        } else {
            display.push(nr);
        }

        this.setState({ display });
    }

    handleOperation(operation) {
        let { display, operations } = this.state;

            switch (operation) {
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

                default: break;
            }

        let last = display[display.length-1];
        let idx = operations.indexOf(last);

        if(idx === -1) { // the last operation is not this operation
            display.push(operation);
        } else { // the last operation is not the same
            display.pop();
            display.push(operation);
        }

        this.setState({ display })
    }

    handleSpecialOperation(operation) {
        let { display, curr } = this.state;

        switch (operation) {
            case '=': {
                curr = eval(display.join('')); // to stay in line
                display = [curr];
                break;
            }
            default: break;
        }

        this.setState({ display, curr })
    }

    clearAll() {
        this.setState({ display: ['0'], curr: 0, old: 0})
    }

    render(){
        const { display, curr, error } = this.state;

        return (
            <div className="calculator-container">
                { error ? <alert className="alert alert-warning">{ error }</alert> : '' }
                <div className="calculator">
                    <p className="display">{ display }</p>
                    <input type="text" value={ curr } className="form-control" disabled/>
                    <div className="buttons-group">
                        <button onClick={() => this.clearAll()} className="btn btn-primary">C</button>
                        <button onClick={() => this.handleSpecialOperation('±')} className="btn btn-primary">±</button>
                        <button onClick={() => this.handleSpecialOperation('%')} className="btn btn-primary">%</button>
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
                        <button onClick={() => this.handleSpecialOperation('.')} className="btn btn-primary">.</button>
                        <button onClick={() => this.handleSpecialOperation('=')} className="btn btn-secondary">=</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
