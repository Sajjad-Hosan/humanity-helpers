import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Auth/AuthProvider";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
