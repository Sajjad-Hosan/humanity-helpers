import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import VolunteerCard from "../../components/VolunteerCard/VolunteerCard";
import { Helmet } from "react-helmet-async";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import AddVolunteer from "../../components/AddVolunteer/AddVolunteer";
import { Bounce } from "react-awesome-reveal";

const NeedVolunteerPage = () => {
  const loaderCount = useLoaderData();
  const axiosSecure = useAxios();
  const { items, setItems } = useAuth();
  const [count, setCount] = useState(loaderCount.count);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPage = Math.ceil(count / perPage);
  const pages = [...Array(numberOfPage).keys()];

  useEffect(() => {
    axiosSecure
      .post(`/volunteers?page=${currentPage}&size=${perPage}`)
      .then((res) => setItems(res.data));
  }, [currentPage, perPage]);
  return (
    <>
      <Helmet>
        <title>Humanity || Need Volunteer Page</title>
      </Helmet>
      <SearchBox />
      <AddVolunteer />
      <div className="flex flex-col gap-5 px-10 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-lg md:text-3xl">Need Volunteer</h1>
          <label className="flex gap-8">
            <Bounce>
              <button
                onClick={() => document.getElementById("add_box").showModal()}
                className="btn btn-outline"
              >
                <FaPlus /> Add Volunteer
              </button>
            </Bounce>
            <Bounce>
              <button
                onClick={() =>
                  document.getElementById("search_box").showModal()
                }
                className="btn btn-neutral text-info px-6"
              >
                <FaMagnifyingGlass /> Search
              </button>
            </Bounce>
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-4">
          <Bounce>
            {items.map((item, i) => (
              <VolunteerCard key={i} post={item} />
            ))}
          </Bounce>
        </div>
        <div className="join mx-auto mt-8">
          <button
            onClick={() =>
              setCurrentPage(currentPage > 0 ? currentPage - 1 : currentPage)
            }
            className="join-item btn btn-outline"
          >
            Previous
          </button>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`join-item btn btn-outline ${
                page === currentPage ? "btn-active" : ""
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage(
                currentPage < pages.length - 1 ? currentPage + 1 : currentPage
              )
            }
            className="join-item btn btn-outline"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default NeedVolunteerPage;
