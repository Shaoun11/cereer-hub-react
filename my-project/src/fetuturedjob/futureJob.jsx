import {MdLocationOn  } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const FutureJob = ({ futureJobdata }) => {
  
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information, phone, } = futureJobdata;

    return (
        <div>
            <div className="card bg-[#f7f6fa] mt-14  shadow-xl">
                <figure className="mt-6"><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-semibold text-[#474747]">{job_title}</h2>
                    <p className="text-lg font-medium text-[#757575]">{company_name}</p>
                    <div className="mt-3">
                        <button className="px-5 py-2 font-semibold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-semibold border rounded border-[#7E90FE] mr-4 text-[#7181e6]">{job_type}</button>
                    </div>
                    <div className="mt-1 flex">
                        <h2 className="flex mr-4 text-[#757575]"><MdLocationOn className="text-2xl "></MdLocationOn>  {location}</h2>
                        <h2 className="flex text-[#757575]"> <AiOutlineDollar className="text-2xl"></AiOutlineDollar> {salary}</h2>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-[#6a7bed] text-white border-none btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FutureJob;