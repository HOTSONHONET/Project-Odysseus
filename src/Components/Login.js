import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, OutlinedInput } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { Link } from 'react-router-dom';


export default function Login() {
  const [values, update_values] = useState({
    email: '',
    password: '',
    showPassword: false
  })

  const handleChange = (prop) => (event) => {
    update_values({
      ...values,
      [prop]: event.target.value
    })

    console.log(values)
  }

  const handleClickShowPassword = () => {
    update_values({
      ...values,
      showPassword: !values.showPassword
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleFormSubmit = () => {

  }

  return (
    <div className='formdiv'>
      <div className="form" style={{ height: "50vh" }}>
        <h3>Login</h3>
        <TextField
          id="outlined-email"
          label="Email"
          helperText="Type your email here"
          className="mb-3 w-50"
          value={values.email}
          onChange={handleChange('email')}

        />
        <TextField
          id="outlined-password"
          label="Password"
          helperText="Type your password here"
          className="mb-3 w-50"
          value={values.password}
          onChange={handleChange('password')}
          type={values.showPassword ? "password" : "text"}
          InputProps={{
            endAdornment:
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
          }}
        />
        <div className='mt-2 mb-3'>
          Don't have an account, <Link className="no-underline" to="/sign-up"> click here</Link>
        </div>
        <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          Submit
        </Button>

      </div>
    </div>
  )
}
