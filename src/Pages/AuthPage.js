import React from 'react'
import Login from "../Components/Login"
import SignUp from "../Components/SignUp"

export default function AuthPage() {
  const curPage = window.location.href.split("/").pop();
  console.log(curPage)
  return (
    <div>
      {curPage === 'login' ? <Login /> : <SignUp />}
    </div>
  )
}
