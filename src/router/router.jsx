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
import VolunteerNeedUpdate from "../pages/VolunteerNeedUpdate/VolunteerNeedUpdate";
import PrivateRoute from "../services/firebase/Private/PrivateRoute";
import SearchPosts from "../pages/SearchPosts/SearchPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://humanity-helpers-server.vercel.app/volunteers"),
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/need_volunteer_page",
        loader: () =>
          fetch(
            "https://humanity-helpers-server.vercel.app/volunteer_posts_count"
          ),
        element: <NeedVolunteerPage />,
      },
      {
        path: "/volunteer_details_page/:id",
        loader: ({ params }) =>
          fetch(
            `https://humanity-helpers-server.vercel.app/volunteer/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <VolunteerDetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/volunteer_update_post/:id",
        loader: ({ params }) =>
          fetch(
            `https://humanity-helpers-server.vercel.app/user_volunteer_post/${params.id}`
          ),
        element: (
          <PrivateRoute>
            {" "}
            <VolunteerUpdate />
          </PrivateRoute>
        ),
      },
      {
        path: "/update_volunteer_need/:id",
        loader: ({ params }) =>
          fetch(
            `https://humanity-helpers-server.vercel.app/volunteer/${params.id}`
          ),
        element: (
          <PrivateRoute>
            {" "}
            <VolunteerNeedUpdate />
          </PrivateRoute>
        ),
      },
      {
        path: "/my_posts",
        element: (
          <PrivateRoute>
            <MyPosts />
          </PrivateRoute>
        ),
      },
      {
        path: "/search_post",
        element: (
          <PrivateRoute>
            <SearchPosts />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
