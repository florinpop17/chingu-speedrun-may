import React, { Component } from 'react';

class Pomodoro extends Component {
    constructor() {
        super();

        this.state = {
            time: 1 * 60, // 25 minutes
            running: false,
            run: undefined,
            session_time: 1,
            break_time: 15
        }
    }

    startClock() {
        let { run } = this.state;
        run = setInterval(() => {
            let { time } = this.state;
            time -= 1;

            if(time < 1) {
                clearInterval(run);
            }

            this.setState({ time });
        }, 100)
        this.setState({ running: true, run });
    }

    stopClock() {
        const { session_time } = this.state;

        this.setState({ running: false, run: undefined, time: session_time * 60 });
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
        const { time, running, break_time, session_time } = this.state;

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
