import React, { useEffect, useState } from 'react'
import ExpertsAiAPICaller from '../Utils/ExpertsAiAPI/apiCaller';

export default function Ner(props) {
   const text = props.text;
   const [data, update_data] = useState(null);
   useEffect(() => {
      ExpertsAiAPICaller.performNER(text, update_data);
   }, [text])


   return (
      <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
         <div className="white">
            <h3>NER Analysis</h3>
         </div>
         {data && <div className="d-flex flex-column">
            {Object.keys(data).map((ele, idx) => {
               return <div key={idx} className="d-flex flex-row">
                  <h5 className="white">{ele}</h5>
                  {console.log(data)}
                  {/* {data.ele.map((item) => {
                     return <span className="entities">{item}</span>
                  })} */}
               </div>
            })}
         </div>
         }
      </div >
   )
}
