import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ToursPage from "./pages/Tours/ToursPage.tsx";
import BlogsPage from "./pages/Blogs/BlogsPage.tsx";
import BlogDetailPage from "./pages/Blogs/BlogDetailPage.tsx";
import Tours from "./components/sections/Tours.tsx";
import About from "./components/sections/About.tsx";
import Home from "./pages/Home/Home.tsx";
import OtherPages from "./OtherPages.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";
import NotFound from "./pages/NotFound.tsx";

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
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetailPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/:catchAll",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
