import React, { Component } from 'react';

class SimonGame extends Component {
    constructor() {
        super();

        this.state = {
            started: false,
            level: 5,
            strict: false,
            running: false,
            game: [],
            player: []
        }

        this.timed = this.timed.bind(this);
    }

    // green  => 0
    // blue   => 1
    // red    => 2
    // yellow => 3

    btnClick(color) {
        let { started, running } = this.state;
        let { a_g, a_r, a_b, a_y, d_g, d_r, d_b, d_y } = this.refs;

        if(started && !running) {
            if(color === 'g'){
                console.log('Green pressed.');
                a_g.play();
                d_g.className += ' active';
            }
            if(color === 'b'){
                console.log('Blue pressed.');
                a_b.play();
                d_b.className += ' active';
            }
            if(color === 'r'){
                console.log('Red pressed.');
                a_r.play();
                d_r.className += ' active';
            }
            if(color === 'y'){
                console.log('Yellow pressed.');
                a_y.play();
                d_y.className += ' active';
            }
        }
    }

    changeStrict() {
        let { strict } = this.state;

        strict = strict ? false : true;

        this.setState({ strict });
    }

    startGame() {
        let { init } = this.state;
        let game = [];

        for(var i=0; i<20; i++) { // 20 games
            game.push(Math.floor(Math.random() * 4));
        }

        setTimeout(() => {
            const { level, game } = this.state;

            if(level < game.length){
                for(var i=0; i<level; i++){
                    this.timed(i);
                }
            } else {
                // game ended, you won
                this.setState({  })
            }
        }, 1000);

        this.setState({ game, started: true, init });
    }

    timed(i) {
        const { game } = this.state;
        const { a_g, a_r, a_b, a_y, d_g, d_r, d_b, d_y } = this.refs;

        setTimeout(() => {
            let current = game[i];

            if(current === 0){
                console.log('Green played.');
                a_g.play();
                d_g.className += ' active';
            }
            if(current === 1){
                console.log('Blue played.');
                a_b.play();
                d_b.className += ' active';
            }
            if(current === 2){
                console.log('Red played.');
                a_r.play();
                d_r.className += ' active';
            }
            if(current === 3){
                console.log('Yellow played.');
                a_y.play();
                d_y.className += ' active';
            }
        }, 1000 * i, () => {
            console.log('timeout ended');
        });
    }

    resetGame() {
        this.setState({ game: [], started: false, init: undefined });
    }

    componentDidMount() {
        let { a_g, a_r, a_b, a_y, d_g, d_r, d_b, d_y } = this.refs;

        // remove active class from tiles when sound is ended

        a_g.onended = () => {
            d_g.className = d_g.className.replace(' active', '');
        };
        a_r.onended = () => {
            d_r.className = d_r.className.replace(' active', '');
        };
        a_b.onended = () => {
            d_b.className = d_b.className.replace(' active', '');
        };
        a_y.onended = () => {
            d_y.className = d_y.className.replace(' active', '');
        };
    }

    render() {
        const { started, level, strict } = this.state;

        return (
            <div className="col-md-12">
                <div className="game-container">
                    <div onClick={() => this.btnClick('g')} ref="d_g"className="buttons green"></div>
                    <div onClick={() => this.btnClick('b')} ref="d_b"className="buttons blue"></div>
                    <div onClick={() => this.btnClick('r')} ref="d_r"className="buttons red"></div>
                    <div onClick={() => this.btnClick('y')} ref="d_y"className="buttons yellow"></div>
                    <div className="actions">
                        { !started ? (
                            <div className="text-center">
                                <h4>Welcome to Simon Game!</h4>
                                <button onClick={() => this.startGame()} className="btn btn-primary btn-block btn-sm">Start</button> <br />
                                <label>Strict mode: &nbsp;</label>
                                <button onClick={() => this.changeStrict()} className={ strict ? 'btn btn-primary btn-xs' : 'btn btn-default btn-xs' }>{ strict ? 'On' : 'Off' }</button>
                            </div>
                        ) : (
                            <div className="text-center">
                                <h4>Level: { level }</h4>
                                <button onClick={() => this.resetGame()} className="btn btn-warning">Stop</button>
                            </div>
                        ) }
                    </div>
                    <audio ref="a_g" src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mpeg"></audio>
                    <audio ref="a_b" src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3" type="audio/mpeg"></audio>
                    <audio ref="a_r" src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3" type="audio/mpeg"></audio>
                    <audio ref="a_y" src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3" type="audio/mpeg"></audio>
                </div>
            </div>
        )
    }
}

export default SimonGame;
