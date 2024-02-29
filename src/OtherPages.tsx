import Navbar from "./components/sections/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/sections/Footer";

const OtherPages = () => {
  return (
    <>
      <Navbar isHomePage={false} />
      <Outlet />
      <Footer />
    </>
  );
};

export default OtherPages;
