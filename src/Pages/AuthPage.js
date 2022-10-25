import React from 'react'
import Login from "../Components/Login"
import Navbar from '../Components/Navbar';
import SignUp from "../Components/SignUp"

export default function AuthPage() {
  const curPage = window.location.href.split("/").pop();
  console.log("curPage: ", curPage === '' ? "Login" : "SignUp")
  return (
    <div>
      {curPage === '' ? <Login /> : <SignUp />}
    </div>
  )
}
