import { TypeAnimation } from "react-type-animation";
import {
  bgImage,
  homePageImage1,
  homePageImage2,
  homePageImage3,
} from "../../assets/images";
import { FaArrowRight, FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      id="home"
      className=" relative flex h-full  overflow-hidden rounded-b-[50px] bg-black/30 px-10 py-24 lg:p-10"
    >
      <img
        src={bgImage}
        alt=""
        className="
        absolute left-0 top-0 -z-[1] h-full w-full bg-cover bg-center object-cover 
      "
      />
      <div className="m-auto flex w-full flex-col items-start justify-start  gap-6 py-8 lg:w-1/2 lg:px-32">
        <TypeAnimation
          sequence={["Türkiye"]}
          wrapper="h1"
          className="linear-gradient-text text-4xl font-black lg:py-4 lg:text-8xl"
          cursor={false}
        />
        <TypeAnimation
          sequence={[
            1500,
            "Adventourz For Trips",
            1500,
            "Adventourz For Activities",
            1500,
            "Adventourz For Adventures",
            1500,
            "Adventourz For Excitement",
            1500,
          ]}
          wrapper="h2"
          repeat={Infinity}
          cursor={false}
          className="m-0 text-2xl font-bold text-white lg:text-4xl"
        />

        <p className="text-lg leading-tight text-white lg:text-2xl">
          Experience endless excitement with Adventourz-your go-to for thrilling
          journeys! Join our vibrant community and dive into unforgettable
          adventures.
        </p>
        <button
          className="flex flex-row items-center gap-1 rounded-xl bg-white px-5 py-2 font-bold text-black duration-300 hover:bg-secondary hover:text-white lg:text-2xl"
          onClick={() => {
            navigate("/tours");
          }}
        >
          Explore
          <FaArrowRight />
        </button>
      </div>
      <div className="relative hidden items-center lg:flex lg:w-1/2">
        <img
          src={homePageImage3}
          loading="eager"
          alt="placeholder"
          className="relative ml-80 mt-80 h-[400px] w-[200px] cursor-pointer rounded-xl border-4 object-cover hover:z-10 hover:scale-105"
          onClick={() => {
            navigate("/tours");
          }}
        />

        <img
          src={homePageImage2}
          loading="eager"
          alt="placeholder"
          className="absolute ml-40 mt-40 h-[400px] w-[200px] cursor-pointer rounded-xl border-4 object-cover hover:z-10 hover:scale-105"
          onClick={() => {
            navigate("/tours");
          }}
        />

        <img
          src={homePageImage1}
          loading="eager"
          alt="placeholder"
          className="absolute h-[400px] w-[200px] cursor-pointer rounded-xl border-4 object-cover hover:scale-105"
          onClick={() => {
            navigate("/tours");
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 z-10 m-10 flex gap-4 lg:m-20 lg:flex-col ">
        <Link to="https://www.instagram.com/adventourz_travel" target="_blank">
          <FaInstagram className="h-10 w-10 cursor-pointer text-white duration-300 hover:text-secondary" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
