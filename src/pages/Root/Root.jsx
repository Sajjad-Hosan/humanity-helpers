import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import "animate.css";

const Root = () => {
  return (
    <>
      <div className="absolute">
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
