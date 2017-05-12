import React, { Component } from 'react';

class Board extends Component{
	handleClick(id) {
		this.props.check(id);
	}

	render() {
		const { cells } = this.props;

		return (
			<div className="board">
				<div onClick={() => this.handleClick(0)}className="cell"> <span>{ cells[0] }</span> </div>
				<div onClick={() => this.handleClick(1)}className="cell"> <span>{ cells[1] }</span> </div>
				<div onClick={() => this.handleClick(2)}className="cell"> <span>{ cells[2] }</span> </div>
				<div onClick={() => this.handleClick(3)}className="cell"> <span>{ cells[3] }</span> </div>
				<div onClick={() => this.handleClick(4)}className="cell"> <span>{ cells[4] }</span> </div>
				<div onClick={() => this.handleClick(5)}className="cell"> <span>{ cells[5] }</span> </div>
				<div onClick={() => this.handleClick(6)}className="cell"> <span>{ cells[6] }</span> </div>
				<div onClick={() => this.handleClick(7)}className="cell"> <span>{ cells[7] }</span> </div>
				<div onClick={() => this.handleClick(8)}className="cell"> <span>{ cells[8] }</span> </div>
			</div>
		);
	}
}

export default Board;
