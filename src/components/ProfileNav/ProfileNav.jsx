import Profile from "../Profile/Profile";

const ProfileNav = () => {
  return (
    <>
      <div className="dropdown dropdown-end">
        <div className="absolute overflow-hidden">
    <Profile/>
        </div>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
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
            <button>Logout</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileNav;
