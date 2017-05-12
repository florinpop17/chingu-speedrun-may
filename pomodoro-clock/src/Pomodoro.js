import React, { Component } from 'react';

class Pomodoro extends Component {
    constructor() {
        super();

        this.state = {
            time: 25 * 60, // 25 minutes
            running: false,
            session_time: 25,
            break_time: 15
        }
    }

    startClock() {
        this.setState({ running: true });
    }

    stopClock() {
        this.setState({ running: false });
    }

    render() {
        const { time, running, break_time, session_time } = this.state;

        let minutes = Math.floor(time / 60);
        let seconds = time % 60 < 10 ? '0' + (time % 60) : time % 60;

        const timeDisplay = `${minutes}:${seconds}`;

        return (
            <div className="pomodoro-container">
                <div className="action">
                    <div>
                        <h4 className="text-center">Break time</h4>
                        <button className="btn btn-primary btn-sm">-</button>
                        <span>{ break_time }</span>
                        <button className="btn btn-primary btn-sm">+</button>
                    </div>
                    <div>
                        <h4 className="text-center">Session time</h4>
                        <button className="btn btn-primary btn-sm">-</button>
                        <span>{ session_time }</span>
                        <button className="btn btn-primary btn-sm">+</button>
                    </div>
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
