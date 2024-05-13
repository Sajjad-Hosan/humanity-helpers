import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import "animate.css";
import useAuth from "../../hooks/useAuth/useAuth";
import Loading from "../../components/Loading/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

const Root = () => {
  const { loader } = useAuth();
  if (loader) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="absolute">
        <Toaster position="top-right" reverseOrder={false} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
