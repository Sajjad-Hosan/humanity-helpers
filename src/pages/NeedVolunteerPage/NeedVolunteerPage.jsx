import { FaMagnifyingGlass } from "react-icons/fa6";
import VolunteerCard from "../../components/VolunteerCard/VolunteerCard";
import { Helmet } from "react-helmet-async";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const NeedVolunteerPage = () => {
  const loaderData = useLoaderData();
  const [items, setItems] = useState(loaderData);
  return (
    <>
      <SearchBox />
      <div className="flex flex-col gap-5 px-10 py-6">
        <Helmet>
          <title>Need Volunteer Page | HumanityPlatform</title>
        </Helmet>
        <div className="flex justify-between items-center">
          <h1 className="text-lg md:text-3xl">Need Volunteer</h1>
          <label className="flex gap-4">
            {/* <button
              onClick={() => document.getElementById("add_box").showModal()}
              className="btn btn-outline"
            >
              <FaPlus /> Add Volunteer
            </button> */}
            <button
              onClick={() => document.getElementById("search_box").showModal()}
              className="btn btn-neutral text-info px-6"
            >
              <FaMagnifyingGlass /> Search
            </button>
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-4">
          {
            items.map((item,i) => <VolunteerCard key={i} item={item} />)
          }
        </div>
        <div className="join mx-auto mt-8">
          <button className="join-item btn btn-outline">Previous</button>
          <button className="join-item btn btn-outline">1</button>
          <button className="join-item btn btn-outline btn-active">2</button>
          <button className="join-item btn btn-outline">3</button>
          <button className="join-item btn btn-outline">4</button>
          <button className="join-item btn btn-outline">Next</button>
        </div>
      </div>
    </>
  );
};

export default NeedVolunteerPage;
