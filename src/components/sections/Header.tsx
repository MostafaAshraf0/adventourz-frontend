import { TypeAnimation } from "react-type-animation";
import {
  cairoCity,
  cairoCity2,
  camelPyramids,
  mosque,
} from "../../assets/images";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      id="home"
      className=" relative flex h-full  overflow-hidden rounded-b-[50px] bg-black/30 px-10 py-24 lg:p-10"
    >
      <div
        style={{
          backgroundImage: `url(${camelPyramids})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      ></div>
      <div className="m-auto flex w-full flex-col items-start justify-start  gap-6 py-8 lg:w-1/2 lg:px-32">
        <TypeAnimation
          sequence={["EGYPT"]}
          wrapper="h1"
          className="linear-gradient-text text-4xl font-black lg:text-8xl"
          cursor={false}
        />
        <TypeAnimation
          sequence={[
            1500,
            "The Land of Pharaohs",
            1500,
            "The Land of Pyramids",
            1500,
            "The Land of History",
            1500,
            "The Land of Beauty",
            1500,
            "The Land of Wonders",
            1500,
          ]}
          wrapper="h2"
          repeat={Infinity}
          cursor={false}
          className="m-0 text-2xl font-bold text-white lg:text-4xl"
        />

        <p className="text-lg leading-tight text-white lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum odio
          mollitia, tempore nihil quisquam accusamus eos consequatur
          consequuntur! Molestiae voluptates quos repellendus iste placeat qui.
        </p>
        <button className="flex flex-row items-center justify-center gap-1 rounded-3xl bg-primary px-5 py-2 text-white duration-300 hover:bg-secondary lg:text-2xl">
          <Link to={"/tours"}>Explore</Link>
          <FaArrowRight />
        </button>
      </div>
      <div className="relative hidden items-center lg:flex lg:w-1/2">
        <img
          src={cairoCity2}
          alt="placeholder"
          className="relative ml-80 mt-80 h-[400px] w-[200px] rounded-xl border-4 object-cover hover:z-10 hover:scale-105"
        />

        <img
          src={cairoCity}
          alt="placeholder"
          className="absolute ml-40 mt-40 h-[400px] w-[200px] rounded-xl border-4 object-cover hover:z-10 hover:scale-105"
        />

        <img
          src={mosque}
          alt="placeholder"
          className="absolute h-[400px] w-[200px] rounded-xl border-4 object-cover hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Header;
