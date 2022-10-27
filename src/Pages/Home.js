import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader';
import axios from 'axios';

export default function Home() {
  const [username, update_username] = useState('');
  const [userId, update_userId] = useState('')
  const [submitClicked, update_submitClicked] = useState(false);
  const token = "AAAAAAAAAAAAAAAAAAAAAATViQEAAAAAAa7pcajwx0xx5JZxeMMjV1UgryI%3Dd5L5P8fdKEpDz1XSxIhqgrqcgx10AVfyoLkpzSFWwrvPAtz4Bb"
  const [tweets, update_tweets] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/get/user/${username}`
      )
      .then((res) => {
        update_userId(res.data.id);
        console.log(res.data.id)
      })
      .catch((error) => console.error(error))

  }, [submitClicked]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/get/tweets/${userId}`
      )
      .then((res) => {
        update_tweets(res.data.tweets);
        console.log(res.data.tweets)
      })
      .catch((error) => console.error(error))

  }, [userId]);

  const handleSearchButton = () => {
    update_submitClicked(true);
    localStorage.setItem("username", username);
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
