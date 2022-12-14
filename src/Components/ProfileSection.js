import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function ProfileSection(props) {
	const userName = localStorage.getItem("username");
	const userId = localStorage.getItem("userId");

	const [image_url, update_image_url] = useState(null)
	useEffect(() => {
		setTimeout(function () {
			axios.get(`http://localhost:4000/get/userimage/${userName}`, {
				headers: {
					'Accept-Control-Allow-Origin': '*'
				}
			}).then(resp => {
				update_image_url(resp.data.profileimg);
			})
		}, 1000)
	}, [])

	return (
		<div className="container profile d-flex flex-row justify-content-center align-items-center">
			<div className="row">
				<div className="col white d-flex flex-column justify-content-center align-items-start">
					<h3>{`Username: ${userName}`}</h3>
					<p>{`Twitter Id: @${userId}`}</p>
				</div>
				<div className="col profilePicture d-flex flex-column justify-content-center align-items-center">
					<img src={image_url ? image_url : "../assets/blankProfile.jpg"} alt="" />
				</div>
			</div>
		</div>
	)
}
