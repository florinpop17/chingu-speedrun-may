import React, { Component } from 'react';

class Board extends Component{
	handleClick(id) {
		this.props.check(id);
	}

	render() {
		const { cells, won_combo } = this.props;

		return (
			<div className="board">
				<div onClick={() => this.handleClick(0)} className={ won_combo[0] ? "win cell" : "cell" }> <span>{ cells[0] }</span> </div>
				<div onClick={() => this.handleClick(1)} className={ won_combo[1] ? "win cell" : "cell" }> <span>{ cells[1] }</span> </div>
				<div onClick={() => this.handleClick(2)} className={ won_combo[2] ? "win cell" : "cell" }> <span>{ cells[2] }</span> </div>
				<div onClick={() => this.handleClick(3)} className={ won_combo[3] ? "win cell" : "cell" }> <span>{ cells[3] }</span> </div>
				<div onClick={() => this.handleClick(4)} className={ won_combo[4] ? "win cell" : "cell" }> <span>{ cells[4] }</span> </div>
				<div onClick={() => this.handleClick(5)} className={ won_combo[5] ? "win cell" : "cell" }> <span>{ cells[5] }</span> </div>
				<div onClick={() => this.handleClick(6)} className={ won_combo[6] ? "win cell" : "cell" }> <span>{ cells[6] }</span> </div>
				<div onClick={() => this.handleClick(7)} className={ won_combo[7] ? "win cell" : "cell" }> <span>{ cells[7] }</span> </div>
				<div onClick={() => this.handleClick(8)} className={ won_combo[8] ? "win cell" : "cell" }> <span>{ cells[8] }</span> </div>
			</div>
		);
	}
}

export default Board;
