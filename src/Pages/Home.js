import React, { useState } from 'react';
import Navbar from '../Components/Navbar'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';

export default function Home() {
  const [userName, update_userName] = useState('');
  const [submitClicked, update_submitClicked] = useState(false);

  const handleSearchButton = () => {
    update_submitClicked(true);
  }

  const handleOnChangeSearchField = (e) => {
    update_userName(e.target.value)
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
                  value={userName}
                  onChange={handleOnChangeSearchField}
                  sx={{ input: { color: "rgba(255, 255, 255, 0.402)" } }}
                  color="secondary"

                />
                <Button variant="contained" color="primary" onClick={handleSearchButton} disabled={userName === ""}>
                  <Link to="/analysis" style={{ textDecoration: "None", color: "white" }} state={{ userName: userName }}>
                    Search
                  </Link>
                </Button>
              </>
          }
        </div>
      </div>
    </>
  )
}
