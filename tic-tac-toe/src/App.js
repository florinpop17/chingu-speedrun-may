import React, { Component } from 'react';

import Board from './Board';

class App extends Component {
	constructor() {
		super();

		this.state = {
			cells : ['', '', '', '', '', '', '', '', ''],
			current_player: 'X',
			winner: undefined,
			winning_combo: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
		}

		this.handleClick = this.handleClick.bind(this);
		this.checkWin = this.checkWin.bind(this);
	}

	handleClick(id) {
		let { cells, current_player, winner } = this.state;

		if(!winner) {
			if(!cells[id]){
				cells[id] = current_player;
				current_player = current_player === 'X' ? 'O' : 'X';
			}

			this.setState({ cells, current_player });
			this.checkWin();
		}
	}

	checkWin() {
		let { cells, winning_combo, winner } = this.state;

		for(let combo of winning_combo){
			if(cells[combo[0]] && cells[combo[1]] && cells[combo[2]]) { // cells aren't empty
				if(cells[combo[0]] === cells[combo[1]] && cells[combo[1]] === cells[combo[2]]){
					winner = cells[combo[0]];
					this.setState({ winner });
					break;
				}
			}
		}
	}

	resetGame() {
		this.setState({
			cells: ['', '', '', '', '', '', '', '', ''],
			winner: undefined,
			current_player: 'X'
		});
	}

	render() {
		const { cells, winner } = this.state;

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<Board cells={cells} check={this.handleClick}/>
						{ winner ? (
							<div className="text-center">
								<p>{ winner } won the game.</p>
								<button onClick={() => this.resetGame()} className="btn btn-primary">Reset</button>
							</div>
						) : '' }
					</div>

					<footer className="nav navbar-defaul navbar-fixed-bottom">
						<div className="container">
							<p className="text-center">Create with <i className="fa fa-heart"></i> by <a target="_blank" href="http://www.florin-pop.com">Florin Pop</a>. Github <a target="_blank" href="https://github.com/florinpop17/chingu-speedrun-may">repo</a>.</p>
						</div>
					</footer>
				</div>
			</div>
		);
	}
}

export default App;
