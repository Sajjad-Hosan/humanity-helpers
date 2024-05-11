import { IoGridOutline, IoListSharp } from "react-icons/io5";
const MyPosts = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 px-8 mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl">My Volunteer Posts</h1>
          <div className="flex items-center gap-5">
            <button className="btn btn-outline px-4 tooltip flex" data-tip='Grid'>
              <IoGridOutline />
            </button>
            <button className="btn btn-outline px-4 tooltip flex" data-tip='List'>
              <IoListSharp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
