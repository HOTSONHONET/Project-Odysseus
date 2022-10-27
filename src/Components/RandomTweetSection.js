import React, { useEffect, useState } from 'react'
import Ner from "./Ner.js";
import HateSpeech from "./HateSpeech.js";
import MainEmotions from "./MainEmotions.js"

export default function RandomTweetSection(props) {
   const tweets = props.tweets;
   const N = tweets.length;
   const [idx, update_idx] = useState(0);


   const handleRandomize = () => {
      let random_idx = Math.floor(Math.random() * N);
      update_idx(random_idx);
   }

   return (
      <div className="container mt-3 mb-5 randomTweetSection d-flex flex-column justify-content-start">
         <div className="doubleBorder mt-3 p-5 white d-flex flex-row justify-content-center align-items-center">
            <em className="tweet">{tweets[idx]}</em>
         </div>
         <button className="mt-2 btn btn-primary" onClick={handleRandomize}>Randomize</button>
         <div className="d-flex flex-column justify-content-start align-items-start">
            <Ner text={tweets[idx]} />
            <MainEmotions text={tweets[idx]} />
            <HateSpeech text={tweets[idx]} />
         </div>
      </div>
   )
}
