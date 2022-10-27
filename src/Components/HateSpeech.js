import React, { useEffect, useState } from 'react'
import ExpertsAiAPICaller from '../Utils/ExpertsAiAPI/apiCaller';

export default function HateSpeech(props) {
   const text = props.text;
   const [categories, update_categories] = useState(null);
   const [extractions, update_extractions] = useState(null);
   useEffect(() => {
      ExpertsAiAPICaller.getHateSpeechData(text, update_categories, update_extractions);
   }, [text])
   return (
      <div className="mt-3 ">
         <div className="white">
            <h3>Hate Speech Analysis</h3>
         </div>
         <div className="d-flex flex-column">
            <h5 className="white">Categories</h5>
            {categories ?
               Object.keys(categories).map((type, idx) => {
                  return <div key={idx} className="d-flex flex-row">
                     <h5 className="white entity-type">{type}</h5>
                     <span key={idx} className="entities">{`${categories[type]}/100`}</span>
                  </div>
               }) : <em className="white">No categories detected</em>
            }

            <h5 className="white">Extractions</h5>
            {extractions ?
               Object.keys(extractions).map((name, idx) => {
                  return <div key={idx} className="d-flex flex-row">
                     <h5 className="white entity-type">{name}</h5>
                     <span key={idx} className="entities">{extractions[name]}</span>
                  </div>
               }) : <em className="white">No extractions performed</em>
            }
         </div>
      </div >
   )
}
