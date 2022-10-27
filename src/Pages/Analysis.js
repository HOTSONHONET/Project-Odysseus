import React, { useEffect, useState } from 'react'
import Navbar from "../Components/Navbar"
import Loader from "../Components/Loader";
import ProfileSection from "../Components/ProfileSection";
import RandomTweetSection from "../Components/RandomTweetSection";
import SentimentAnalysisSection from "../Components/SentimentAnalysisSection";
import ExpertsAiAPICaller from '../Utils/ExpertsAiAPI/apiCaller';
import Tweets from "../musk.json";
import { useLocation } from 'react-router-dom';
import axios from "axios";

export default function Analysis() {
  const username = localStorage.getItem('username');
  const userId = localStorage.getItem("userId");
  // const userId = useLocation().state?.userId;
  const [tweets, update_tweets] = useState([]);
  console.log(username)
  console.log(userId);

  useEffect(() => {
    // ExpertsAiAPICaller.getSentimentAnalysisOfAllTexts(Tweets.tweets, update_data);const getTweets = async () => {
    async function getTweets() {
      axios.get(
        `http://localhost:4000/get/tweets/${userId}`
      )
        .then((res) => {
          update_tweets(res.data.tweets);
        })
        .catch((error) => console.error(error))
    }


    setTimeout(function () {
      getTweets();
      ExpertsAiAPICaller.generateBearerToken();
    }, 1000)


  }, [])

  return (
    <>
      <Navbar />
      <ProfileSection />
      <SentimentAnalysisSection tweets={tweets} />
      <RandomTweetSection tweets={tweets} />
    </>
  )
}
