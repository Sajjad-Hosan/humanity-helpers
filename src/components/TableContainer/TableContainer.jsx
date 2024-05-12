import TableCard from "./TableCard";


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
         <TableCard/>
         <TableCard/>
         <TableCard/>
         <TableCard/>
         <TableCard/>
         <TableCard/>
        </tbody>
      </table>
    </div>
  );
};

export default TableContainer;
