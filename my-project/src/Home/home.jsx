import Banner from "../Banner/Banner";
import FeturedJob from "../fetuturedjob/FeturedJob";
import Jobcatagories from "../jobcatagorie/Jobcatagories";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Jobcatagories></Jobcatagories>
            <FeturedJob></FeturedJob>
      
        </div>
    );
};

export default Home;