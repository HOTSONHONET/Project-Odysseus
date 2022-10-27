import React, { useEffect, useState } from 'react'
import TextField from "@mui/material/TextField";
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { withTheme } from '@emotion/react';
import ExpertsAiAPICaller from '../Utils/ExpertsAiAPI/apiCaller';
import Tweets from "../musk.json";


export default function SentimentAnalysisSection(props) {
	const labels = ['Positive', 'Neutral', 'Negative'];
	const [data, update_data] = useState({
		labels: labels,
		datasets: [
			{
				label: '',
				data: [100, 200, 900],
				backgroundColor: ['rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)'],
			},
		],
	});
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
				display: false,
			},
			title: {
				display: true,
				text: 'Distribution of Tweets sentiment',
				color: 'white'
			},
		},
	}
	useEffect(() => {
		ExpertsAiAPICaller.getSentimentAnalysisOfAllTexts(Tweets.tweets, update_data);
		// update_data()
	}, [])


	return (
		<div className="container sentimentSection">
			<div className="row mt-5">
				<div className="col col-8">
					<Bar data={data} options={options} />;
				</div>
				<div className="col col-4 white d-flex flex-column justify-content-center align-items-center">
					<TextField
						id="outlined-read-only-input"
						label="Overall Score"
						className="d-flex justify-content-center"
						defaultValue="9.91/10"
						InputProps={{
							readOnly: true,

						}}
						sx={{
							input: {
								color: "rgba(255, 255, 255, 0.402)",
								widht: "20vw",
								height: "25vh",
								fontSize: "2em",
								textAlign: "center",
							},
						}}
					/>
				</div>
			</div>
		</div >
	)
}
