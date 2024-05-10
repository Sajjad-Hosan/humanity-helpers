import { FiEdit } from "react-icons/fi";
import profile from "../../assets/image/profile.svg";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
const Profile = () => {
  const [mode, setMode] = useState(false);
  return (
    <>
      <dialog id="profile" className="modal">
        <div className="modal-box max-w-2xl">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg">Profile</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setMode(!mode)}
                className="btn btn-ghost btn-circle tooltip tooltip-left flex"
                data-tip="Update"
              >
                <FiEdit />
              </button>
              <form onClick={() => setMode(false)} method="dialog">
                <button
                  className="btn btn-ghost btn-circle text-lg tooltip tooltip-left flex"
                  data-tip="Close"
                >
                  <FaXmark />
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <div className="w-52 h-52 border-2 border-neutral rounded-full mx-auto">
                <img src={profile} alt="" />
              </div>
              {mode ? (
                <form className="flex flex-col gap-3 w-[500px] mt-8">
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full"
                    placeholder="write your email"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    className="input input-bordered w-full"
                    placeholder="write your password"
                    required
                  />
                  <input
                    type="text"
                    name="photoUrl"
                    className="input input-bordered w-full"
                    placeholder="photoUrl"
                    required
                  />
                  <button className="btn text-neutral w-1/2 mx-auto mt-3">
                    <FiEdit /> Update
                  </button>
                </form>
              ) : (
                <div className="flex flex-col gap-2 mt-8">
                  <h1 className="text-2xl">Name: Sajjad Hosan</h1>
                  <h2 className="text-xl">Email: sajjad@hosan.com</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Profile;
