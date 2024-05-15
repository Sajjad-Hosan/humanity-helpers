import { useEffect, useState } from "react";
import AddVolunteer from "../../components/AddVolunteer/AddVolunteer";
import { IoAppsSharp, IoListSharp } from "react-icons/io5";
import NoData from "../../components/NoData/NoData";
import { FaPlus } from "react-icons/fa6";
import TableContainer from "../../components/TableContainer/TableContainer";
import CardContainer from "../../components/CardContainer/CardContainer";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
const MyPosts = () => {
  const {
    userVolunteerData,
    user,
    setUserVolunteerData,
    userRequestData,
    setUserRequestData,
  } = useAuth();
  const axiosSecure = useAxios();
  const [tableType, setTableType] = useState();
  const [tab, setTab] = useState(0);
  useEffect(() => {
    const type = JSON.parse(localStorage.getItem("tableType"));
    setTableType(type);
  }, []);
  const url = `/user_volunteer_posts?email=${user?.email}`;
  const url2 = `/volunteer_requested?email=${user?.email}`;

  useEffect(() => {
    axiosSecure
      .get(url)
      .then((res) => {
        setUserVolunteerData(res.data);
      })
      .catch((e) => toast.error(e.message));
  }, [url]);

  useEffect(() => {
    axiosSecure
      .get(url2)
      .then((res) => {
        setUserRequestData(res.data);
      })
      .catch((e) => toast.error(e.message));
  }, []);
  const handleTableType = (boo) => {
    setTableType(boo);
    localStorage.setItem("tableType", boo);
  };
  return (
    <>
      <Helmet>
        <title>Humanity || My Posts Page</title>
      </Helmet>
      <div className="absolute top-0">
        <AddVolunteer />
      </div>
      <div className="flex flex-col gap-3 px-3 md:px-8 mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-lg md:text-3xl">My Posts Page</h1>
          <div className="flex items-center gap-5">
            <button
              onClickCapture={() =>
                document.getElementById("add_box").showModal()
              }
              className="btn btn-outline"
            >
              <FaPlus /> Add Volunteer
            </button>
            <button
              onClickCapture={() => handleTableType(false)}
              className={`btn btn-outline px-4 tooltip flex ${
                tableType ? "" : "btn-active"
              }`}
              data-tip="Grid"
            >
              <IoAppsSharp />
            </button>
            <button
              onClick={() => handleTableType(true)}
              className={`btn btn-outline px-4 tooltip flex ${
                tableType ? "btn-active" : ""
              }`}
              data-tip="List"
            >
              <IoListSharp />
            </button>
          </div>
        </div>

        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2" onClick={() => setTab(0)}>
              <a
                className={`inline-block p-4 ${
                  tab === 0
                    ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active"
                    : "border-b-2 border-transparent rounded-t-lg"
                } hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
              >
                My Volunteer Posts
              </a>
            </li>
            <li className="me-2" onClick={() => setTab(1)}>
              <a
                className={`inline-block p-4 ${
                  tab === 1
                    ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active"
                    : "border-b-2 border-transparent rounded-t-lg"
                } hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                aria-current="page"
              >
                My Volunteer Requested
              </a>
            </li>
          </ul>
        </div>
        <div className={`text-4xl ${tab === 0 ? "" : "hidden"} w-full`}>
          {userVolunteerData.length > 0 ? (
            <div className="relative overflow-hidden mt-8">
              {tableType ? (
                <TableContainer req={false} myLists={userVolunteerData} />
              ) : (
                <CardContainer req={false} myLists={userVolunteerData} />
              )}
            </div>
          ) : (
            <NoData />
          )}
        </div>
        <div className={`text-4xl ${tab === 1 ? "" : "hidden"}`}>
          {userRequestData.length > 0 ? (
            <div className="relative overflow-hidden mt-8">
              {tableType ? (
                <TableContainer req={true} myLists={userRequestData} />
              ) : (
                <CardContainer req={true} myLists={userRequestData} />
              )}
            </div>
          ) : (
            <NoData />
          )}
        </div>
      </div>
    </>
  );
};

export default MyPosts;
