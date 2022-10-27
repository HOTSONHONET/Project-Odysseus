import React, { useEffect, useState } from 'react'
import ExpertsAiAPICaller from '../Utils/ExpertsAiAPI/apiCaller';

export default function Ner(props) {
   const text = props.text;
   const [data, update_data] = useState(null);
   useEffect(() => {
      ExpertsAiAPICaller.performNER(text, update_data);
   }, [text])


   return (
      <div className="mt-3 ">
         <div className="white">
            <h3>NER Analysis</h3>
         </div>
         {data && <div className="d-flex flex-column">
            {Object.keys(data).map((ele, idx) => {
               return <div key={idx} className="d-flex flex-row">
                  <h5 className="white entity-type">{ele}</h5>
                  {data[ele].map((item, idx) => {
                     return <span key={idx} className="entities">{item}</span>
                  })}
               </div>
            })}
         </div>
         }
      </div >
   )
}
