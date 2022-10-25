import React from 'react'
import Navbar from '../Components/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../Utils/Auth/fire';

export default function Profile() {
  const [user, loading, error] = useAuthState(auth);
  console.log(user.displayName)
  return (
    <>
      <Navbar />
      <div className="container">{`Hello ${user?.displayName}`}</div>
    </>
  )
}
