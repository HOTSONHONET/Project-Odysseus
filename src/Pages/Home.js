import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader';
import axios from 'axios';

export default function Home() {
  const [username, update_username] = useState('');

  const navigate = useNavigate()
  const handleSearchButton = () => {
    localStorage.setItem("username", username);
    console.log(username);
    axios.get(
      `https://whale-app-vcjri.ondigitalocean.app/get/user/${username}`
    )
      .then((res) => {
        localStorage.setItem("userId", res.data.id);
        console.log("UseId: ", res.data.id)
        navigate("/analysis")
      })
      .catch((error) => console.error(error))

  }


  const handleOnChangeSearchField = (e) => {
    update_username(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center">
        <div className="search-box blob-bg">
          <h3>Search the user id</h3>
          <TextField
            id="outlined-product-name"
            label="Username"
            helperText="Enter the user name"
            className="mb-3 w-50"
            value={username}
            onChange={handleOnChangeSearchField}
            sx={{ input: { color: "rgba(255, 255, 255, 0.402)" } }}
            color="secondary"

          />
          <Button className="white" variant="contained" color="primary" onClick={handleSearchButton} disabled={username === ""}>
            Search
          </Button>
        </div>
      </div>
    </>
  )
}
