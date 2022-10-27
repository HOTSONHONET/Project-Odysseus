import React, { useEffect, useState } from 'react'
import Navbar from "../Components/Navbar"
import Loader from "../Components/Loader";
import ProfileSection from "../Components/ProfileSection";
import RandomTweetSection from "../Components/RandomTweetSection";
import SentimentAnalysisSection from "../Components/SentimentAnalysisSection";
import ExpertsAiAPICaller from '../Utils/ExpertsAiAPI/apiCaller';
import Tweets from "../musk.json";

export default function Analysis() {
  const username = localStorage.getItem('username');
  const [data, update_data] = useState(null);
  console.log(username)

  useEffect(() => {
    ExpertsAiAPICaller.getSentimentAnalysisOfAllTexts(Tweets.tweets, update_data);
  }, [])

  return (
    <>
      <Navbar />
      <ProfileSection />
      <SentimentAnalysisSection data={data} />
      <RandomTweetSection data={data} />
    </>
  )
}
