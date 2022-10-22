import React, { useState } from 'react'

export default function SignUp() {
	const [name, update_name] = useState('');
	const [org_name, update_org_name] = useState('');
	const [email, update_email] = useState('');
	const [password, update_password] = useState('');
	const [submitClicked, update_submitClicked] = useState(false);

	const handleSubmit = () => {
		update_submitClicked(true);
	}

	return (
		<div className="formdiv">
			<div className="form formbg p-5 d-flex flex-column justify-content-center">
				<div className="flex justify-content-center"><h3>Sign Up</h3></div>
				<div className="row m-3">
					<div className="col col-sm-4">
						Name
					</div>
					<div className="col col-sm-8 ">
						<input for="name" id="name" type="text" onChange={(e) => { update_name(e.target.value) }} disabled={submitClicked} />
					</div>
				</div>
				<div className="row m-3">
					<div className="col col-sm-4">
						Organization
					</div>
					<div className="col col-sm-8 ">
						<input for="name" id="name" type="text" onChange={(e) => { update_org_name(e.target.value) }} disabled={submitClicked} />
					</div>
				</div>
				<div className="row m-3">
					<div className="col col-sm-4">
						Email
					</div>
					<div className="col col-sm-8 ">
						<input for="name" id="name" type="email" onChange={(e) => { update_email(e.target.value) }} disabled={submitClicked} />
					</div>
				</div>
				<div className="row m-3">
					<div className="col col-sm-4">
						Password
					</div>
					<div className="col col-sm-8 ">
						<input for="name" id="name" type="password" onChange={(e) => { update_password(e.target.value) }} disabled={submitClicked} />
					</div>
				</div>
				<button className="btn btn-primary btn-sm" type="submit" onClick={() => { handleSubmit() }}>Submit</button>

			</div>
		</div>
	)
}
