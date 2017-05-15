import React, { Component } from 'react';

class SimonGame extends Component {
    constructor() {
        super();

        this.state = {
            total_games: 3,
            started: false,
            level: 1,
            strict: false,
            running: false,
            game: [],
            player: [],
            message: '',
            won: false,
            lost: false
        }

        this.timed = this.timed.bind(this);
        this.sing = this.sing.bind(this);
    }

    // green  => 0
    // blue   => 1
    // red    => 2
    // yellow => 3

    btnClick(color) {
        let { started, running, game, player, strict, level, total_games } = this.state;
        let { a_g, a_r, a_b, a_y, d_g, d_r, d_b, d_y } = this.refs;

        if(started && !running) {
            if(color === 'g'){
                player.push(0)
                a_g.play();
                d_g.className += ' active';
            }
            if(color === 'b'){
                player.push(1)
                a_b.play();
                d_b.className += ' active';
            }
            if(color === 'r'){
                player.push(2)
                a_r.play();
                d_r.className += ' active';
            }
            if(color === 'y'){
                player.push(3)
                a_y.play();
                d_y.className += ' active';
            }

            if(!this.isCorrectGame(game, player)){
                if(strict){
                    this.setState({
                        game: [],
                        player: [],
                        message: 'You lost. Please start over!',
                        running: true,
                        level: 0,
                        lost: true
                    });
                } else {
                    this.setState({
                        message: 'Wrong... Try again.',
                        player: [],
                        running: true
                    })
                    setTimeout(this.sing, 2000);
                }
            } else {
                if(player.length === level){
                    level += 1;
                    player = [];

                    if(level > total_games){
                       // game ended, you won
                       this.setState({
                           message: 'Congrats. You won the game!',
                           running: true,
                           level: 0,
                           game: [],
                           player: [],
                           won: true
                       });
                    }  else {
                        this.setState({
                            message: `You completed level ${level - 1}!`, // you completed previous level
                            level,
                            player
                        });

                        setTimeout(this.sing, 2000);
                    }
                }
                this.setState({
                    player
                })
            }
        }
    }

    isCorrectGame(game, player) {
        return player.every((pl, idx) => {
            return pl === game[idx];
        })
    }

    changeStrict() {
        let { strict } = this.state;

        strict = strict ? false : true;

        this.setState({ strict });
    }

    startGame() {
        let { total_games } = this.state;
        let game = [];

        for(var i=0; i<total_games; i++) {
            game.push(Math.floor(Math.random() * 4));
        }

        setTimeout(this.sing, 1000);

        this.setState({
            game,
            won: false,
            lost: false,
            level: 1,
            started: true,
            message: 'Listen now...'
        });
    }

    sing() {
        const { level, game } = this.state;

        if(level <= game.length){
            this.setState({
                running: true, // game running, listen now...
                message: 'Listen now...'
            });

            for(var i=0; i<level; i++){
                if(i === level-1) // the last tile, change running to false
                    this.timed(i, true);
                else
                    this.timed(i, false);
            }
        }
    }

    timed(i, last) {
        const { game } = this.state;
        const { a_g, a_r, a_b, a_y, d_g, d_r, d_b, d_y } = this.refs;

        setTimeout(() => {
            let current = game[i];

            if(current === 0){
                a_g.play();
                d_g.className += ' active';
            }
            if(current === 1){
                a_b.play();
                d_b.className += ' active';
            }
            if(current === 2){
                a_r.play();
                d_r.className += ' active';
            }
            if(current === 3){
                a_y.play();
                d_y.className += ' active';
            }

            if(last) {
                setTimeout(() => {
                    this.setState({
                        running: false, // user can type now
                        message: 'Your turn.'
                    });
                }, 1000);
            }
        }, 1000 * i);
    }

    resetGame() {
        this.setState({ game: [], started: false, init: undefined });
    }

    componentDidMount() {
        let { a_g, a_r, a_b, a_y, d_g, d_r, d_b, d_y } = this.refs;

        // remove active class from tiles when sound is ended
        // with the onended event

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
        const { started, level, strict, message, won, lost } = this.state;

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
                                <h4>{ level ? `Level: ${level}` : ''}</h4>
                                <p>{ message }</p>
                                { won || lost ? (
                                    <button onClick={() => this.resetGame()} className="btn btn-primary">Play again</button>
                                ) : (
                                    <button onClick={() => this.resetGame()} className="btn btn-warning">Stop</button>
                                ) }
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
