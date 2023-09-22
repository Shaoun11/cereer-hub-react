import { useEffect, useState } from "react";
import FutureJob from "./futureJob";

const FeturedJob = () => {
  const [fetuturedjob,setfetuturedjob]=useState([]);
   const[datalength,setdatalength]=useState(4)
  
  useEffect(()=>{
    fetch("./jobs.json")
    .then(res=>res.json())
    .then(data=>setfetuturedjob(data))
  },[]);

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-center text-[#1A1919] text-5xl font-bold mt-40" >Featured Jobs</h1> 
           <p className="text-lg text-[#757575] font-semibold text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
              {
                fetuturedjob.slice(0,datalength).map(fetuturjob=><FutureJob key={FutureJob.id} futureJobdata={fetuturjob}></FutureJob>)
              }
           </div>
           <div className={datalength === fetuturedjob.length ? 'hidden' : ''}>
             
             <div className="flex justify-center ">
             <button
                    onClick={() => setdatalength(fetuturedjob.length)}
                    className="btn btn-primary mt-20 text-white border-none bg-[#596dee]">Show All Jobs</button>
         
             </div>
                  </div>
             </div>
    );
};

export default FeturedJob;