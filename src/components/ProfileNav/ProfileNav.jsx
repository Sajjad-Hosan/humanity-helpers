import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth/useAuth";
import Profile from "../Profile/Profile";

const ProfileNav = () => {
  const { user, handleSignOut } = useAuth();
  const handleLogout = () => {
    handleSignOut()
      .then(() => {
        toast.success("Logout Successfully!");
      })
      .catch((e) => toast.error(e.message));
  };
  return (
    <>
      <Profile />
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              className="h-full w-full object-cover"
              alt="Tailwind CSS Navbar component"
              src={user?.photoURL}
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
        >
          <li>
            <button
              onClick={() => document.getElementById("profile").showModal()}
            >
              Profile
            </button>
          </li>
          <li>
            <button>Settings</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileNav;
