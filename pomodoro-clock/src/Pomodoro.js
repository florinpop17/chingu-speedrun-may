import React, { Component } from 'react';

class Pomodoro extends Component {
    constructor() {
        super();

        this.state = {
            time: 25 * 60, // 25 minutes
            running: false,
            interval: undefined,
            current: 'session',
            session_time: 25,
            break_time: 5
        }
    }

    startClock() {
        let { time, running, interval, current, session_time, break_time } = this.state;
        if(!running) {
            running = true;
            interval = setInterval(() => {
                time -= 1;

                if(time === -1) {
                    current = current === 'session' ? 'break' : 'session';
                    time = (current === 'break' ? break_time : session_time) * 60;
                }

                this.setState({ time, current })
            }, 1000)
            this.setState({ running, interval })
        }
    }

    stopClock() {
        let { interval, running, time, current, session_time } = this.state;
        if(running){
            running = false;
            clearInterval(interval);
            interval = undefined;
            current = 'session';
            time = session_time * 60;

            this.setState({ running, current, time, interval });
        }
    }

    pauseClock() {
        let { interval } = this.state;
        clearInterval(interval);
        this.setState({ running: false })
    }

    changeTime(time, value){
        let { session_time, break_time, running } = this.state;

        if(time === 'break'){
            break_time += value;
        } else {
            session_time += value;
        }

        if(break_time < 1) break_time = 1;
        if(session_time < 1) session_time = 1;

        if(!running) this.setState({ time: session_time * 60 })

        this.setState({ session_time, break_time })
    }

    render() {
        const { current, time, running, break_time, session_time } = this.state;

        let minutes = Math.floor(time / 60);
        let seconds = time % 60 < 10 ? '0' + (time % 60) : time % 60;

        const timeDisplay = `${minutes}:${seconds}`;

        return (
            <div className="pomodoro-container">
                <div className="action">
                    <div className="text-center">
                        <h4>Break time</h4>
                        <button onClick={() => this.changeTime('break', -1)} className="btn btn-sm btn-primary btn-xs"><i className="fa fa-minus"></i></button>
                        <span>{ break_time }</span>
                        <button onClick={() => this.changeTime('break', 1)}className="btn btn-sm btn-primary btn-xs"><i className="fa fa-plus"></i></button>
                    </div>
                    <div className="text-center">
                        <h4>Session time</h4>
                        <button onClick={() => this.changeTime('session', -1)} className="btn btn-sm btn-primary btn-xs"><i className="fa fa-minus"></i></button>
                        <span>{ session_time }</span>
                        <button onClick={() => this.changeTime('session', 1)}className="btn btn-sm btn-primary btn-xs"><i className="fa fa-plus"></i></button>
                    </div>
                </div>
                <div className="pomodoro-clock">
                    <p>{ current }</p>
                    <h3>{ timeDisplay }</h3>
                </div>
                { running ? (
                    <div>
                        <button onClick={() => this.pauseClock()} className="btn btn-warning">Pause</button>
                        <button onClick={() => this.stopClock()} className="btn btn-danger">Stop</button>
                    </div>
                ) : (
                    <button onClick={() => this.startClock()} className="btn btn-primary">Start</button>
                )}
            </div>
        )
    }
}

export default Pomodoro;
