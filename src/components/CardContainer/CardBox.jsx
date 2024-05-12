import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";

const CardBox = () => {
  return (
    <>
      <div className="card shadow-xl p-6">
        <div className="flex gap-4">
          <div className="w-40 h-36 bg-neutral rounded-xl">
            {/* <img src="" alt="" /> */}
            ppp
          </div>
          <div className="flex flex-col gap-1 pt-3">
            <h1 className="text-xl">Name</h1>
            <p className="text-lg">Category</p>
            <p className="text-md">Dedline</p>
          </div>
        </div>
        <div className="flex justify-between items-center border-t-2 pt-4 mt-4">
        <div className="badge badge-info py-4 px-5">Status</div>
          <div className="flex gap-5">
            <button className="btn btn-error flex tooltip" data-tip="Delete">
              <FaTrash />
            </button>
            <button className="btn btn-outline flex tooltip" data-tip="Update">
              <FiEdit />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBox;
