import React, { useState } from 'react';
import Navbar from '../Components/Navbar'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader';
import getUserTweets from '../Utils/TwitterAPI/getUserTweets';
import getUserId from '../Utils/TwitterAPI/getUserId';

export default function Home() {
  const [username, update_username] = useState('');
  const [submitClicked, update_submitClicked] = useState(false);

  const handleSearchButton = () => {
    update_submitClicked(true);
    localStorage.setItem("username", username);
    navigate("/analysis");
  }

  const navigate = useNavigate()
  const handleOnChangeSearchField = (e) => {
    update_username(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center">
        <div className="search-box blob-bg">
          {
            submitClicked ?
              <Loader /> :
              <>
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
                </Button>              </>
          }
        </div>
      </div>
    </>
  )
}
