import { FaUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import ProfileNav from "../ProfileNav/ProfileNav";
import logo from "/logo.png";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import { setItem } from "localforage";
const Header = () => {
  const Themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];
  const [theme, setTheme] = useState();
  useEffect(() => {
    const themeName = localStorage.getItem("theme");
    setTheme(themeName);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  const handleThemeName = (tme) => {
    const theme = tme.target.value;
    localStorage.setItem("theme", theme);
    setItem(theme);
  };
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
        <NavLink to="/my_posts">My Posts</NavLink>
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
        <Link
          to="/"
          className="btn btn-ghost text-xl animate__zoomIn"
        >
          <img className="w-9 h-9 object-cover" src={logo} alt="" />
          <Typewriter
            words={["Welcome To", "Humanity Platform"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
      </div>
      <div className="navbar-end animate__zoomIn z-10">
        <div className="dropdown mr-5 z-10">
          <div tabIndex={0} role="button" className="btn btn-outline px-8">
            Theme
            <svg
              width="12px"
              height="12px"
              className="h-2 w-2 fill-current inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-52 mt-3 space-x-2"
          >
            {Themes.map((theme, i) => (
              <li key={i} className="my-2">
                <input
                  type="radio"
                  name="theme-dropdown"
                  onChange={handleThemeName}
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label={theme}
                  value={theme}
                />
              </li>
            ))}
          </ul>
        </div>
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
