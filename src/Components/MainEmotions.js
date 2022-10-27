import React, { useEffect, useState } from 'react'
import ExpertsAiAPICaller from '../Utils/ExpertsAiAPI/apiCaller';

export default function MainEmotions(props) {
   const text = props.text;
   const [groups, update_groups] = useState([])
   useEffect(() => {
      ExpertsAiAPICaller.getBehavourialTraits(text, update_groups);
   }, [text])
   return (
      <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
         <div className="white">
            <h3>Emotion Groups</h3>
         </div>
         <div className="d-flex flex-row justify-content-start">
            {groups.length ?
               groups.map((ele, idx) => {
                  return <span key={idx} className="emotion-groups">{ele.label}</span>
               }) : <em className="white">No categories detected</em>
            }
         </div>
      </div>
   )
}
