import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ToursPage from "./pages/Tours/ToursPage.tsx";
import BlogsPage from "./pages/Blogs/BlogsPage.tsx";
import TourDetailPage from "./pages/Tours/TourDetailPage.tsx";
import BlogDetailPage from "./pages/Blogs/BlogDetailPage.tsx";
import Tours from "./components/sections/Tours.tsx";
import About from "./components/sections/About.tsx";
import Home from "./pages/Home/Home.tsx";
import OtherPages from "./OtherPages.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <OtherPages />,
    children: [
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/tours",
        element: <ToursPage />,
        children: [
          {
            path: "/tours/:tourId",

            element: <Tours />,
          },
        ],
      },
      {
        path: "/tours/tourDetail/:id",
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
