import React, { useState } from 'react';
import Navbar from '../Components/Navbar'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Home() {
  const [productName, update_productName] = useState('');

  const handleSearchButton = () => {

  }


  const handleOnChangeSearchField = (e) => {
    update_productName(e.target.value)
    console.log(productName)
  }
  const styles = theme => ({
    multilineColor: {
      color: 'red'
    }
  });
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center">
        <div className="search-box blob-bg">
          <TextField
            id="outlined-product-name"
            label="Product Name"
            helperText="Enter your product name"
            className="mb-3 w-50"
            value={productName}
            onChange={handleOnChangeSearchField}
            sx={{ input: { color: 'white' } }}
            color="secondary"

          />
          <Button variant="contained" color="primary" onClick={handleSearchButton}>
            Search
          </Button>
        </div>
      </div>
    </>
  )
}
