import React, { useEffect, useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import ExpertsAiAPICaller from '../Utils/ExpertsAiAPI/apiCaller';
import config from "../config.json";

export default function SentimentAnalysisSection(props) {
	const [score, update_score] = useState(0);
	const labels = ['Negative', 'Postive'];
	const [gdata, update_gdata] = useState({
		labels: labels,
		datasets: [
			{
				label: '',
				data: [0, 0],
				backgroundColor: ['rgba(255, 0, 0, 0.3)', 'rgba(0, 255, 0, 0.3)'],
			},
		],
	});



	const tweets = props.tweets;
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
				color: 'white',
				font: {
					size: 20
				}
			},
		},
	}
	useEffect(() => {
		setTimeout(function () {
			ExpertsAiAPICaller.getSentimentAnalysisOfAllTexts(tweets, update_gdata, update_score);
		}, 1000);

	}, [tweets])


	return (
		<div className="container sentimentSection">
			{
				props.tweets ?
					<div className="row mt-5 d-flex flex-row justify-content-center align-items-center">
						<div className="col col-7">
							{gdata ? <Bar data={gdata} options={options} /> : <></>}
						</div>
						<div className="col col-4 white d-flex flex-column justify-content-center align-items-center">
							<h3>Overall Score</h3>
							<h4>{score}</h4>
						</div>
					</div>
					: <div className="d-flex flex-column justify-content-center align-items-center white">Loading</div>
			}
		</div >
	)
}
