import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa6";
import register from "../../assets/authentication/signup.svg";
import { Link } from "react-router-dom";
import { AttentionSeeker, Slide, Zoom } from "react-awesome-reveal";
const Register = () => {
  return (
    <div className="max-w-6xl mx-auto mt-5">
      <div className="flex flex-col-reverse md:flex-row-reverse gap-7 items-center bg-base-100 md:shadow md:shadow-gray-500 py-10 md:h-[550px] rounded-xl">
        <Slide dumping={0.5}>
          <div className="w-full md:flex-1">
            <form className="max-w-sm mx-auto">
              <h1 className="text-4xl mb-5">Register</h1>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Repeat password
                </label>
                <input
                  type="password"
                  id="repeat-password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  I agree with the
                  <a
                    href="#"
                    className="text-blue-F0 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register new account
              </button>
            </form>

            <div
              className="flex gap-5 px-3 md:px-16 mt-8"
            >
              <button className="btn btn-outline px-8 hover:text-green-500">
                <FaGoogle /> Google
              </button>
              <button className="btn btn-outline px-8 hover:text-white">
                <FaGithub /> Github
              </button>
              <button className="btn btn-neutral px-8 text-info">
                <FaTwitter /> Twitter
              </button>
            </div>
          </div>
        </Slide>
        <Zoom>
          <div className="w-full md:flex-1 relative">
            <img className="w-3/4 mx-auto" src={register} alt="" />
            <div className="mt-4 ml-5 md:absolute">
            <AttentionSeeker delay={1000}>
              <Link to="/login" className="btn btn-warning mt-8 px-6">
                Have Account ?
              </Link>
            </AttentionSeeker>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Register;
