import {
  FaEye,
  FaEyeSlash,
  FaGithub,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa6";
import login from "../../assets/authentication/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AttentionSeeker, Bounce, Slide, Zoom } from "react-awesome-reveal";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const [show, setShow] = useState(false);
  const { handleGithub, handleGoogle, handleUsedUser } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //
    handleUsedUser(email, password)
      .then(() => {
        toast.success("Login Successfully!");
        navigate(state || "/");
      })
      .catch((e) => toast.error(e.message));
  };
  const handleGooglePop = () => {
    handleGoogle()
      .then(() => {
        toast.success("Login with Google Successfully!");
        navigate(state || "/");
      })
      .catch((e) => toast.error(e.message));
  };
  const handleGithubPop = () => {
    handleGithub()
      .then(() => {
        toast.success("Login with Github Successfully!");
        navigate(state || "/");
      })
      .catch((e) => toast.error(e.message));
  };
  return (
    <div className="max-w-6xl mx-auto mt-5">
      <Helmet>
        <title>Humanity || Login Page</title>
      </Helmet>
      <div className="flex flex-col-reverse md:flex-row gap-7 items-center bg-base-100 md:shadow md:shadow-gray-500 py-10 md:h-[550px] rounded-xl">
        <Slide>
          <div className="w-full md:flex-1">
            <form onSubmit={handleLogin} className="max-w-sm mx-auto">
              <Bounce>
                <h1 className="text-4xl mb-5">Login</h1>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="write your email"
                    required
                  />
                </div>
                <div className="mb-2 relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your password
                  </label>
                  <input
                    type={show ? "text" : "password"}
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="write your password"
                    required
                  />
                  <p
                    onClick={() => setShow(!show)}
                    className="absolute top-10 right-4"
                  >
                    {show ? <FaEye /> : <FaEyeSlash />}
                  </p>
                </div>
                <div className="flex items-start mb-5">
                  <div className="flex flex-col gap-1 h-5">
                    <a
                      href="#"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      forgot password ?
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </Bounce>
            </form>
            <div className="flex gap-4 px-3 md:px-16 mt-8">
              <Bounce>
                <button
                  onClick={handleGooglePop}
                  className="btn btn-outline px-8 hover:text-green-500"
                >
                  <FaGoogle /> Google
                </button>
              </Bounce>
              <Bounce>
                <button
                  onClick={handleGithubPop}
                  className="btn btn-neutral px-8 hover:text-white"
                >
                  <FaGithub /> Github
                </button>
              </Bounce>
              <Bounce>
                <button className="btn btn-outline px-8 hover:text-info">
                  <FaTwitter /> Twitter
                </button>
              </Bounce>
            </div>
          </div>
        </Slide>
        <Zoom>
          <div className="w-full md:flex-1">
            <img className="w-1/2 mx-auto" src={login} alt="" />
            <div className="flex justify-end mt-2 mr-5">
              <AttentionSeeker delay={1000}>
                <Link to="/register" className="btn btn-warning mt-8 px-6">
                  Create Account ?
                </Link>
              </AttentionSeeker>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Login;
