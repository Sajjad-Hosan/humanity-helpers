import { Slide } from "react-awesome-reveal";
import TableCard from "./TableCard";
import PropTypes from "prop-types";

const TableContainer = ({ myLists, req }) => {
  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400 flex">
          <tr className="w-full flex justify-between items-center px-3 md:px-10">
            <th scope="col" className="py-3">
              img
            </th>
            <th scope="col" className="py-3">
              Post Title
            </th>
            <th scope="col" className="py-3">
              Category
            </th>
            <th scope="col" className="py-3">
              Dateline
            </th>
            <th scope="col" className="py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <Slide delay={300}>
            {myLists.map((list) => (
              <TableCard req={req} key={list._id} details={list} />
            ))}
          </Slide>
        </tbody>
      </table>
    </div>
  );
};
TableContainer.propTypes = {
  myLists: PropTypes.array,
  req: PropTypes.bool,
};
export default TableContainer;
