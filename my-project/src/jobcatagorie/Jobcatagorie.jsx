

const Jobcatagorie = ({ jobcatagoriedata }) => {

    const { id, logo, category_name, availability } = jobcatagoriedata;
    return (
        <div>
           
            <a href="#" className="block max-w-sm  bg-white border border-gray-100 rounded-lg shadow-lg hover:bg-white  dark:bg-[#e3daff] p-7">
            <img src={logo} alt="" />
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-gray-700">{category_name}</h5>
                <p className="font-normal text-white dark:text-gray-500">{availability}</p>
            </a>

        </div>
    );
};

export default Jobcatagorie;