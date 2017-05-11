import React, { Component } from 'react';

class Calculator extends Component {
    render(){
        return (
            <div className="calculator">
                <p className="display">23 + 4</p>
                <input type="text" value="993" className="form-control" disabled/>
                <div className="buttons-group">
                    <button className="btn btn-primary">C</button>
                    <button className="btn btn-primary">±</button>
                    <button className="btn btn-primary">%</button>
                    <button className="btn btn-secondary">/</button>
                </div>
                <div className="buttons-group">
                    <button className="btn btn-primary">7</button>
                    <button className="btn btn-primary">8</button>
                    <button className="btn btn-primary">9</button>
                    <button className="btn btn-secondary">*</button>
                </div>
                <div className="buttons-group">
                    <button className="btn btn-primary">4</button>
                    <button className="btn btn-primary">5</button>
                    <button className="btn btn-primary">6</button>
                    <button className="btn btn-secondary">-</button>
                </div>
                <div className="buttons-group">
                    <button className="btn btn-primary">1</button>
                    <button className="btn btn-primary">2</button>
                    <button className="btn btn-primary">3</button>
                    <button className="btn btn-secondary">+</button>
                </div>
                <div className="buttons-group">
                    <button className="btn btn-primary btn-long">0</button>
                    <button className="btn btn-primary">.</button>
                    <button className="btn btn-secondary">=</button>
                </div>
            </div>
        );
    }
}

export default Calculator;
