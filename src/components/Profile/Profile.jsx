import { FiEdit } from "react-icons/fi";
import profile from "../../assets/image/profile.svg";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, handleUpdateUser } = useAuth();
  const [mode, setMode] = useState(false);
  const navigate = useNavigate();
  const handleUpateProfile = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const photoUrl = from.photoUrl.value;

    //
    handleUpdateUser(name, photoUrl)
      .then(() => {
        toast.success("Profile Updated!");
        navigate(-1);
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <>
      <dialog id="profile" className="modal">
        <div className="modal-box max-w-2xl">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg">
              {mode ? "Update Profile" : "Profile"}
            </h3>
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
          <div className={`flex flex-col items-center ${mode ? "" : "pb-10"}`}>
            <div>
              <div className="w-52 h-52 border-2 border-neutral rounded-full mx-auto overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={user?.photoURL || profile}
                  alt=""
                />
              </div>
              {mode ? (
                <form
                  onSubmit={handleUpateProfile}
                  className="flex flex-col gap-3 w-[500px] mt-8"
                >
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full"
                    placeholder="write your password"
                    defaultValue={user?.displayName}
                    required
                  />
                  <input
                    type="text"
                    name="photoUrl"
                    className="input input-bordered w-full"
                    placeholder="photoUrl"
                    defaultValue={user?.photoURL}
                    required
                  />
                  <button className="btn btn-info text-neutral w-1/2 mx-auto mt-3">
                    <FiEdit /> Update
                  </button>
                </form>
              ) : (
                <div className="flex flex-col gap-2 mt-8">
                  <h1 className="text-2xl">Name: {user?.displayName}</h1>
                  <h2 className="text-xl">
                    Email: {user?.email || "noMail@.com"}
                  </h2>
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
