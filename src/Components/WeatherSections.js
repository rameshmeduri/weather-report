import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const WeatherSections = () => (
	<div className="weather_sections">
		<div className="box">
			<div className="title">PSI</div>
			<div className="value">
				<span>60</span>
			</div>
			<div className="status">Moderate</div>
		</div>
		<div className="box">
			<div className="title">RAIN</div>
			<div className="value">0</div>
			<div className="status">mm</div>
		</div>
		<div className="box">
			<div className="title">DENGUE</div>
			<div className="value">0</div>
		</div>
		<div className="box">
			<Button variant="fab" mini color="primary">
				<AddIcon />
			</Button>
		</div>
	</div>
);

export default WeatherSections;
