import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from "../Components/Navbar"

export default function Analysis() {
  const productName = useLocation().state.productName;
  console.log("ProductName: ", productName)
  return (
    <>
      <Navbar />
    </>
  )
}
