import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";

const TableContainer = () => {
  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              img
            </th>
            <th scope="col" className="px-6 py-3">
              Post Title
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Dateline
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              image
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="py-4 flex gap-5">
              <button className="btn btn-error flex tooltip" data-tip="Delete">
                <FaTrash />
              </button>
              <button
                className="btn btn-outline flex tooltip"
                data-tip="Update"
              >
                <FiEdit />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableContainer;
