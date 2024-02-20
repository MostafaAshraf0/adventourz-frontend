import { cairoCity2 } from "../../assets/images/index";
import Divider from "../Divider";

const About = () => {
  return (
    <div className="h-full px-10 py-10 lg:px-32 lg:py-20">
      <div className="flex flex-row items-center gap-4">
        <Divider width="w-20" bg="bg-secondary" />
        <h1 className="text-2xl font-black text-secondary lg:text-4xl">
          Who are we?
        </h1>
      </div>
      <div className="mt-8 flex w-full flex-col items-center justify-center gap-5 lg:mt-[60px] lg:flex-row ">
        <div className="overflow-x-hidden rounded-3xl lg:w-[50%] lg:rounded-[50px]">
          <img
            src={cairoCity2}
            alt=""
            className="lg:max-h-[500px] lg:max-w-[600px]"
          />
        </div>
        <div className="m-auto text-center lg:w-[50%]">
          <p className="py-8 text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            odio autem officia adipisci maiores, neque libero nostrum
            consequuntur possimus velit dolore non, ab perspiciatis iusto!
          </p>
          <button className="rounded-full bg-secondary px-6 py-3 text-xl text-neutral">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
