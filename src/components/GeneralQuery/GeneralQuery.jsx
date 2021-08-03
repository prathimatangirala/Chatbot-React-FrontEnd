import React , { useEffect, useState } from "react";
import "./GeneralQuery.css";
import { getQueryData } from '../Data/ApiData';


const GeneralQuery = ({query, scrollIntoView}) => {

  const [queryAnswer, setQueryAnswer] = useState("");

  useEffect(() => {
      let mounted =true;
      getQueryData(query).then(chatAnswer =>{
         if (!chatAnswer) return null;
         setQueryAnswer(chatAnswer.answer);
      })
    return () => mounted =false;
  }, []);

    return queryAnswer? (
         <div className="general-query-container">
               <div dangerouslySetInnerHTML={{ __html: queryAnswer }}></div>
         </div>
      ): null;
};

export default GeneralQuery;
