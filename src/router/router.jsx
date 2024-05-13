import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NeedVolunteerPage from "../pages/NeedVolunteerPage/NeedVolunteerPage";
import MyPosts from "../pages/MyPosts/MyPosts";
import VolunteerDetailsPage from "../pages/VolunteerDetailsPage/VolunteerDetailsPage";
import VolunteerUpdate from "../pages/VolunteerUpdate/VolunteerUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/need_volunteer_page",
        loader: () => fetch("/volunteer.json"),
        element: <NeedVolunteerPage />,
      },
      {
        path: "/volunteer_details_page",
        element: <VolunteerDetailsPage />,
      },
      {
        path: "/volunteer_update_post",
        element: <VolunteerUpdate />,
      },
      {
        path: "/my_posts",
        element: <MyPosts />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
