import React, { useEffect, useState } from 'react'

export default function RandomTweetSection(props) {
   const data = props;
   const [buttonClicked, update_buttonClicked] = useState(1);
   const [sentiment_type, update_sentiment_type] = useState('negative')
   const sentiments = ['negative', 'positive'];
   useEffect(() => {

   }, [buttonClicked])



   const handleRandomize = () => {
      update_buttonClicked(!buttonClicked)
   }

   const handleSentimentDropdown = (e) => {
      update_sentiment_type(e.targete.textContent);
   }

   return (
      <div className="container mt-3 mb-3 randomTweetSection">
         {
            data ?
               <>
                  <div className="row mt-3">
                     <div className="col d-flex flex-column justify-content-center align-items-center">
                        <div className="btn-group justify-content-start">
                           <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              {sentiment_type}
                           </button>
                           <ul className="dropdown-menu">
                              {sentiments.map((senti_type, idx) => {
                                 return <>
                                    <li value={senti_type} onClick={handleSentimentDropdown}><p className="dropdown-item">{senti_type}</p></li>
                                 </>
                              })}

                           </ul>
                        </div>
                        <button className="btn btn-primary">Randomize</button>
                     </div>
                     <div className="col">
                        <button className="btn btn-primary">Randomize</button>
                     </div>
                  </div>


               </> :
               <div> Loading</div>
         }
      </div>
   )
}
