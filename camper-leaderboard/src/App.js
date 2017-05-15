import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
	state = {
		alltime: [],
		recent: [],
		show: 'alltime'
	}

	componentDidMount() {
		axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
			.then(res => {
				if(res.status === 200){
					this.setState({ recent: res.data })
				}
			});
		axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
			.then(res => {
				if(res.status === 200){
					this.setState({ alltime: res.data })
				}
			});
	}

	changeView() {
		let { show } = this.state;

		if(show === 'alltime') show = 'recent';
		else show = 'alltime';

		this.setState({ show });
	}

	render() {
		const { show, alltime, recent } = this.state;

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<h2>Leaderboard <button onClick={() => { this.changeView() }} className="btn btn-primary btn-sm pull-right">{ show === 'alltime' ? 'All time' : 'Last 30' }</button></h2>
						<table className="table table-striped table-bordered">
							<thead>
								<tr>
									<th>#</th>
									<th>Camper</th>
									<th>Last 30 days points</th>
									<th>All time points</th>
								</tr>
							</thead>
							<tbody>
								{ show === 'alltime' ? (
									alltime.map((camper, idx) => (
										<tr key={ idx }>
											<td>{ idx + 1 }</td>
											<td><img src={ camper.img } alt={ camper.username }/> <strong>{ camper.username }</strong></td>
											<td>{ camper.recent }</td>
											<td>{ camper.alltime }</td>
										</tr>
									))
								) : (
									recent.map((camper, idx) => (
										<tr key={ idx }>
											<td>{ idx + 1 }</td>
											<td><img src={ camper.img } alt={ camper.username }/> <strong>{ camper.username }</strong></td>
											<td>{ camper.recent }</td>
											<td>{ camper.alltime }</td>
										</tr>
									))
								) }
							</tbody>
						</table>
					</div>

					<footer className="nav navbar-default navbar-fixed-bottom">
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
