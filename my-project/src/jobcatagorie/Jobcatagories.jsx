
import { useEffect, useState } from "react";
import Jobcatagorie from "./Jobcatagorie";


const Jobcatagories = () => {
   
    const [jobcatagorie,setjobcatagorie]=useState([]);

    useEffect(()=>{
    fetch("./categories.json")
    .then(res=>res.json())
    .then(data=>setjobcatagorie(data))

    },[])

    return (
        <div className="max-w-6xl mx-auto">
           <h1 className="text-center text-[#1A1919] text-5xl font-bold mt-20 mb-4" >Job Category List</h1> 
           <p className="text-lg text-[#757575] font-semibold text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className=" lg:flex mt-16 gap-6 lg:ml-12 ">
                {
                    jobcatagorie.map(jobcatagories=><Jobcatagorie key={jobcatagories.id} jobcatagoriedata={jobcatagories}></Jobcatagorie>)
                }
           </div>
        </div>
    );
};

export default Jobcatagories;