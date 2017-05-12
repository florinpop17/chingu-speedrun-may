import React, { Component } from 'react';

class Pomodoro extends Component {
    constructor() {
        super();

        this.state = {
            time: 25 * 60, // 25 minutes
            running: false,
            timer: this.getTimer
        }
    }

    getTimer() {
        
    }

    render() {
        const { time } = this.state;

        return (
            <div className="pomodoro-container">
                <div className="action">

                </div>
                <div className="pomodoro-clock">
                    { Math.floor(time / 60) } : { time % 60 }
                </div>

            </div>
        )
    }
}

export default Pomodoro;
