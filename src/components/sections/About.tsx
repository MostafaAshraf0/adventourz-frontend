import { useNavigate } from "react-router-dom";
import { aboutUs } from "../../assets/images/index";
import Divider from "../Divider";

const About = () => {
  const navigate = useNavigate();
  return (
    <div id="about" className="h-full px-10 py-10 lg:px-32 lg:py-20">
      <div className="flex flex-row items-center gap-4">
        <Divider width="w-20" bg="bg-secondary" />
        <h1 className="text-2xl font-black text-secondary lg:text-4xl">
          Who We Are
        </h1>
      </div>
      <div className="mt-8 flex w-full flex-col items-center justify-center gap-5 lg:mt-[60px] lg:flex-row ">
        <div className=" overflow-x-hidden rounded-3xl lg:h-[500px] lg:w-[50%] lg:rounded-[50px]">
          <img
            src={aboutUs}
            alt="about us"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="m-auto text-center lg:w-[50%]">
          <p className="py-8 text-lg lg:text-xl">
            Adventourz is a passionate team of travel enthusiasts committed to
            creating extraordinary experiences in the heart of Turkey. We
            believe in the transformative power power of travel and strive to
            make every trip with us a seamless blend of excitement, activities,
            and unforgettable moments.
          </p>
          <button
            className="rounded-full bg-secondary px-6 py-3 text-xl text-neutral"
            onClick={() => navigate("/tours")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
