import TableCard from "./TableCard";
import PropTypes from "prop-types";

const TableContainer = ({ myLists }) => {
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
          {myLists.map((list) => (
            <TableCard key={list._id} details={list} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
TableContainer.propTypes = {
  myLists: PropTypes.array,
};
export default TableContainer;
