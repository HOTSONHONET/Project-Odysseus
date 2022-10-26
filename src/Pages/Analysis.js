import React, { useEffect } from 'react'
import Navbar from "../Components/Navbar"

export default function Analysis() {
  const username = localStorage.getItem('username')
  console.log(username)

  useEffect(() => {

  }, [])

  return (
    <>
      <Navbar />
    </>
  )
}
