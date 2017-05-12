import React, { Component } from 'react';

class Pomodoro extends Component {
    constructor() {
        super();

        this.state = {
            time: 25 * 60, // 25 minutes
            running: false
        }
    }

    startClock() {
        this.setState({ running: true });
    }

    stopClock() {
        this.setState({ running: false });
    }

    render() {
        const { time, running } = this.state;

        let minutes = Math.floor(time / 60);
        let seconds = time % 60 < 10 ? '0' + (time % 60) : time % 60;

        const timeDisplay = `${minutes}:${seconds}`;

        return (
            <div className="pomodoro-container">
                <div className="action">

                </div>
                <div className="pomodoro-clock">
                    <p>{ timeDisplay }</p>
                </div>
                { running ? (
                    <div onClick={() => this.stopClock()}className="btn btn-primary">Stop</div>
                ) : (
                    <div onClick={() => this.startClock()}className="btn btn-primary">Start</div>
                )}
            </div>
        )
    }
}

export default Pomodoro;
