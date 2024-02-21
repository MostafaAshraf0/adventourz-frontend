import About from "./components/sections/About";
import Blogs from "./components/sections/Blogs";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Navbar from "./components/sections/Navbar";
import Tours from "./components/sections/Tours";
import { useInView } from "react-intersection-observer";

const App = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <>
      <Navbar isHeaderInView={inView} />
      <div ref={ref}>
        <Header />
      </div>
      <About />
      <Tours />
      <Blogs />
      <Footer />
    </>
  );
};

export default App;
