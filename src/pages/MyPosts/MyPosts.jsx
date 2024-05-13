import { useEffect, useState } from "react";
import AddVolunteer from "../../components/AddVolunteer/AddVolunteer";
import { IoAppsSharp, IoListSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import NoData from "../../components/NoData/NoData";
import { FaPlus, FaTrash } from "react-icons/fa6";
import TableContainer from "../../components/TableContainer/TableContainer";
import CardContainer from "../../components/CardContainer/CardContainer";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth/useAuth";
import toast from "react-hot-toast";
const MyPosts = () => {
  const { userVolunteerData, user, setUserVolunteerData } = useAuth();
  const axiosSecure = useAxios();
  const [myLists, setMyLists] = useState(userVolunteerData ? true : false);
  const [tableType, setTableType] = useState();
  useEffect(() => {
    const type = JSON.parse(localStorage.getItem("tableType"));
    setTableType(type);
  }, []);
  const url = `user_volunteer_posts?email=${user?.email}`;
  useEffect(() => {
    axiosSecure
      .get(url)
      .then((res) => {
        setUserVolunteerData(res.data);
      })
      .catch((e) => toast.error(e.message));
  }, [url]);
  const handleTableType = (boo) => {
    setTableType(boo);
    localStorage.setItem("tableType", boo);
  };
  return (
    <>
      <AddVolunteer />
      <div className="flex flex-col gap-3 px-3 md:px-8 mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-lg md:text-3xl">My Volunteer Posts</h1>
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
        <div>
          {myLists ? (
            <div className="relative overflow-hidden mt-8">
              {tableType ? (
                <TableContainer myLists={userVolunteerData} />
              ) : (
                <CardContainer myLists={userVolunteerData} />
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
