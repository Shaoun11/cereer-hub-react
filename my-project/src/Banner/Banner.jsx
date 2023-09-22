
import image from "../../public/assets/images/user.png"
const Banner = () => {
    return (
        <div className=" h-screen flex justify-around bg-[#dcd6ee]">
            <div>
                <h1 className="lg:text-7xl text-xl font-bold lg:mt-40 lg:ml-14">
                One Step
                <br/>
                 Closer To Your <br />
                 <span className="text-[#9873FF]">Dream Job</span>
                  
                </h1>
                <p className="text-sm lg:font-medium font-normal text-[#757575] lg:ml-14 lg:mt-6 mt-3">
                Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
                </p>
                <button className="btn btn-neutral bg-[#9873FF] border-none lg:ml-14 lg:mt-5 mt-4">Get Started</button>
            </div>

          <img className="lg:w-[870px] w-44" src={image} alt="" />
        </div>
    );
};

export default Banner;