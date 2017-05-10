import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
	constructor() {
		super();

		this.state = {
			latitude: undefined,
			longitude: undefined,
			unit: 'metric',
			location: undefined,
			temp: undefined,
			icon_url: undefined
		}

		this.setTemperature = this.setTemperature.bind(this);
		this.changeTemp = this.changeTemp.bind(this);
	}

	setTemperature(latitude, longitude, unit) {

		if(latitude && longitude) {
			axios.get(`http://api.openweathermap.org/data/2.5/weather?&appid=067f9b0a0e77a197bf09f73103141290&units=${unit}&lat=${latitude}&lon=${longitude}`)
				.then(res => {
					console.log(res.data);
					this.setState({ temp: res.data.main.temp, location: res.data.name, icon_url: `http://openweathermap.org/img/w/${res.data.weather[0].icon}.png`, unit, error: '' });
				});
		}
	}

	changeTemp() {
		let { latitude, longitude, unit } = this.state;

		if(unit === 'metric') unit = 'imperial';
		else unit = 'metric';

		this.setTemperature(latitude, longitude, unit);
	}

	componentDidMount() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const { latitude, longitude } = position.coords;

				this.setTemperature(latitude, longitude, 'metric');

				this.setState({ latitude, longitude });
			})
		}
	}

	render() {
		const { temp, location, unit, icon_url } = this.state;

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="weather">
						<h2>{ location }</h2>
						<h3>{ icon_url ? <img src={icon_url} alt="icon" /> : '' }  { temp ? unit === 'metric' ? temp+'°C' : temp+'°K' : '' }</h3>
						<button onClick={this.changeTemp} className="btn btn-primary">C / K</button>
					</div>

					<footer className="nav navbar-inverse navbar-fixed-bottom">
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
