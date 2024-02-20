import About from "./components/sections/About";
import Blogs from "./components/sections/Blogs";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Navbar from "./components/sections/Navbar";
import Tours from "./components/sections/Tours";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Tours />
      <Blogs />
      <Footer />
    </>
  );
};

export default App;
