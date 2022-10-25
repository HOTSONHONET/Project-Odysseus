import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, OutlinedInput } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { Link, NavigationType, useNavigate } from 'react-router-dom';
import FireBaseAuth from '../Utils/Auth/FireBaseAuth';
import auth from '../Utils/Auth/fire';


export default function SigUp() {
	const [auth_obj, update_auth_obj] = useState({
		name: '',
		email: '',
		password: '',
		emailError: '',
		passwordError: '',
		showPassword: false
	})

	// Helper function to handle props change
	const handleChange = (prop) => (event) => {
		update_auth_obj({
			...auth_obj,
			[prop]: event.target.value,
			emailError: '',
			passwordError: '',
		})

	}

	const handleClickShowPassword = () => {
		update_auth_obj({
			...auth_obj,
			showPassword: !auth_obj.showPassword
		})
	}

	const navigate = useNavigate();
	const handleFormSubmit = () => {
		FireBaseAuth.register(auth_obj, update_auth_obj, navigate);
	}


	return (
		<div className='formdiv'>
			<div className="form corner-bg" style={{ height: "65vh" }}>
				<h3 className="white">Sign up</h3>
				<TextField
					id="outlined-name"
					sx={{ input: { color: "rgba(255, 255, 255, 0.402)" } }}
					label="Name"
					helperText="Type your name here"
					className="mb-3 w-50"
					value={auth_obj.name}
					onChange={handleChange('name')}

				/>
				<TextField
					id="outlined-email"
					sx={{ input: { color: "rgba(255, 255, 255, 0.402)" } }}
					label="Email"
					helperText="Type your email here"
					className="mb-3 w-50"
					value={auth_obj.email}
					onChange={handleChange('email')}

				/>
				<p className="error">{auth_obj.emailError}</p>
				<TextField
					id="outlined-password"
					sx={{ input: { color: "rgba(255, 255, 255, 0.402)" } }}
					label="Password"
					helperText="Type your password here"
					className="mb-3 w-50"
					value={auth_obj.password}
					onChange={handleChange('password')}
					type={auth_obj.showPassword ? "password" : "text"}
					InputProps={{
						endAdornment:
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									edge="end"
								>
									{auth_obj.showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
					}}
				/>
				<p className="error">{auth_obj.passwordError}</p>
				<div className='mt-2 mb-3 grey'>
					Already have an account, <Link className="no-underline" to="/"> click here</Link>
				</div>

				<Button variant="contained" color="primary" onClick={handleFormSubmit}>
					Sign Up
				</Button>
			</div>
		</div>
	)
}
