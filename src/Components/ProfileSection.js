import React from 'react'


export default function ProfileSection(props) {
	return (
		<div className="container profile d-flex flex-row justify-content-center align-items-center">
			<div className="row">
				<div className="col white">
					<div className="row">
						<h3>Name: ElonMusk</h3>
						<p>Tweeter Id: #elonmushJindabad</p>
					</div>
				</div>
				<div className="col profilePicture d-flex flex-column justify-content-center align-items-center">
					<img src={props.image ? props.image : "../assets/blankProfile.jpg"} alt="" />
				</div>
			</div>
		</div>
	)
}
