import { useState } from "react";
import AddVolunteer from "../../components/AddVolunteer/AddVolunteer";
import { IoAppsSharp, IoListSharp } from "react-icons/io5";
import NoData from "../../components/NoData/NoData";
import { FaPlus } from "react-icons/fa6";
const MyPosts = () => {
  const { myLists, setMyLists } = useState(false);
  return (
    <>
      <AddVolunteer />
      <div className="flex flex-col gap-3 px-3 md:px-8 mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-lg md:text-3xl">My Volunteer Posts</h1>
          <div className="flex items-center gap-5">
            <button
              onClick={() => document.getElementById("add_box").showModal()}
              className="btn btn-outline"
            >
              <FaPlus /> Add Volunteer
            </button>
            <button
              className="btn btn-outline px-4 tooltip flex"
              data-tip="Grid"
            >
              <IoAppsSharp />
            </button>
            <button
              className="btn btn-outline px-4 tooltip flex"
              data-tip="List"
            >
              <IoListSharp />
            </button>
          </div>
        </div>
        <div>
          <div className="relative overflow-x-auto mt-8">
            {myLists ? (
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4">Laptop PC</td>
                    <td className="px-6 py-4">$1999</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4">Accessories</td>
                    <td className="px-6 py-4">$99</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <NoData />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPosts;
