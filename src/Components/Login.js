import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import FireBaseAuth from '../Utils/Auth/FireBaseAuth';


export default function Login() {
  const [auth_obj, update_auth_obj] = useState({
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    showPassword: false
  })
  const [buttonClicked, update_buttonClicked] = useState(false);
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
    FireBaseAuth.login(auth_obj, update_auth_obj, navigate)
  }

  return (
    <div className='formdiv mt-0'>
      <div className="form corner-bg" style={{ height: "50vh" }}>
        <h3 className="white">Login</h3>
        <TextField
          id="outlined-email"
          label="Email"
          sx={{ input: { color: "rgba(255, 255, 255, 0.402)" } }} helperText="
          Type your email here"
          className="mb-3 w-50"
          value={auth_obj.email}
          onChange={handleChange('email')}
          type="email"

        />
        <p className="error">{auth_obj.emailError}</p>
        <TextField
          id="outlined-password"
          label="Password"
          helperText="Type your password here"
          className="mb-3 w-50"
          value={auth_obj.password}
          onChange={handleChange('password')}
          sx={{ input: { color: "rgba(255, 255, 255, 0.402)" } }}
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
          Don't have an account, <Link className="no-underline" to="/sign-up"> click here</Link>
        </div>
        <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          login
        </Button>

      </div>
    </div>
  )
}
