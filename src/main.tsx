import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ToursPage from "./pages/Tours/ToursPage.tsx";
import BlogsPage from "./pages/Blogs/BlogsPage.tsx";
import TourDetailPage from "./pages/Tours/TourDetailPage.tsx";
import BlogDetailPage from "./pages/Blogs/BlogDetailPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tours",
    element: <ToursPage />,
  },
  {
    path: "/tours/:id",
    element: <TourDetailPage />,
  },
  {
    path: "/blogs",
    element: <BlogsPage />,
  },
  {
    path: "/blogs/:id",
    element: <BlogDetailPage />,
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
