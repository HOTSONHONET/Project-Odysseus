import React, { useEffect, useState } from 'react'
import TextField from "@mui/material/TextField";
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


export default function SentimentAnalysisSection(props) {
	const labels = ['Positive', 'Negative'];
	const [score, update_score] = useState(0);
	const [data, update_data] = useState({
		labels: labels,
		datasets: [
			{
				label: '',
				data: [0, 0],
				backgroundColor: ['rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
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
		if (props.data) {
			const tweets_sentiments = props.data;
			console.log("tweets_sentiments->", tweets_sentiments);
			console.log([tweets_sentiments.negative.length, tweets_sentiments.positive.length])
			update_data({
				labels: labels,
				datasets: [
					{
						label: '',
						data: [tweets_sentiments.negative.length, tweets_sentiments.positive.length],
						backgroundColor: ['rgba(0, 255, 0, 0.3)', 'rgba(255, 0, 0, 0.3)'],
					},
				],
			})
			let senti_score = 0;
			for (let d of tweets_sentiments.negative) {
				senti_score += d.sentiment.overall;
			}

			for (let d of tweets_sentiments.positive) {
				senti_score += d.sentiment.overall;
			}

			const N = tweets_sentiments.negative.length + tweets_sentiments.positive.length
			console.log("senti_score: ", senti_score / N);
			update_score(senti_score / 100)
		}



	}, [props.data])


	return (
		<div className="container sentimentSection">
			{
				props.data ?
					<div className="row mt-5 d-flex flex-row justify-content-center align-items-center">
						<div className="col col-7">
							{data ? <Bar data={data} options={options} /> : <></>}
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
