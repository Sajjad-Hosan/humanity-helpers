import { FaUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import ProfileNav from "../ProfileNav/ProfileNav";

const Header = () => {
  const { user } = useAuth();
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/need_volunteer_page">Need Volunteer Page</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar px-9 pt-6">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl animate__animated animate__bounceInLeft">
          Humanity Platform
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
      </div>
      <div className="navbar-end h-0 animate__animated animate__bounce z-10">
        {user ? (
          <ProfileNav />
        ) : (
          <Link to="/login" className="btn btn-neutral px-8">
            <FaUser /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
