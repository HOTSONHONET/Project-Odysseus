import React, { useEffect, useState } from 'react'
import Navbar from "../Components/Navbar"
import Loader from "../Components/Loader";
import ProfileSection from "../Components/ProfileSection";
import RandomTweetSection from "../Components/RandomTweetSection";
import SentimentAnalysisSection from "../Components/SentimentAnalysisSection";
import ExpertsAiAPICaller from '../Utils/ExpertsAiAPI/apiCaller';

export default function Analysis() {
  const username = localStorage.getItem('username');
  const [token, update_token] = useState('');
  console.log(username)

  useEffect(() => {
    ExpertsAiAPICaller.generateBearerToken(update_token);
  }, [])

  return (
    <>
      <Navbar />
      <ProfileSection />
      <SentimentAnalysisSection token={token} />
      <RandomTweetSection token={token} />
    </>
  )
}
