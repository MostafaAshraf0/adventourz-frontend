import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Tours from "./components/sections/Tours.tsx";
import Blogs from "./components/sections/Blogs.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tours",
    element: <Tours />,
  },
  {
    path: "/tours/:id",
    element: <div>Tour Detail Page</div>,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogs/:id",
    element: <div>Blog Detail Page</div>,
  },
  {
    path: "/privacypolicy",
    element: <div>Privacy Policy Page</div>,
  },
  {
    path: "/terms",
    element: <div>Terms Page</div>,
  },
  {
    path: "/:catchAll",
    element: <div>Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
