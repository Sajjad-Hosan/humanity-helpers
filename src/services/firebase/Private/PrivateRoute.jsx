import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import PropTypes from "prop-types";
import Loading from "../../../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading />
      </div>
    );
  }
  if (user) {
    return <>{children}</>;
  }
  return <Navigate to="/login" state={pathname} />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
