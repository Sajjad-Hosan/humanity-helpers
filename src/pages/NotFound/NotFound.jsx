import { Link } from "react-router-dom";
import image from "../../assets/image/error.svg";
import { Helmet } from "react-helmet-async";
const NotFound = () => {
  return (
    <div className="flex flex-col gap-5 items-center md:w-[600px] min-h-screen mx-auto relative">
      <Helmet>
      <title>Humanity || Not Found Page</title>
      </Helmet>
      <img className="w-1/2 h-full object-cover my-auto" src={image} alt="" />
      <div className="absolute bottom-14">
        <h1 className="text-3xl">We have an error here!</h1>
        <Link to="/" className="btn btn-neutral text-info px-8 mt-5">
          Wait / Let's go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
