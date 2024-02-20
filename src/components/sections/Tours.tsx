import { manInBoat } from "@/assets/images";
import Divider from "../Divider";
import ToursCarousel from "../tours/ToursCarousel";
import { Button } from "../ui/button";
import {
  FaArrowDown,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Tours = () => {
  return (
    <div className="h-full min-h-screen overflow-hidden rounded-[50px]">
      <div className="flex h-full w-full bg-white">
        {/* left */}
        <div className="w-full space-y-12 px-10 py-14 font-bold  lg:w-3/5 lg:pl-32 ">
          <h1 className="text-2xl text-primary lg:text-4xl">
            EXPLORE NEW WAYS TO
            <div className="flex flex-row items-center justify-start gap-4">
              <Divider />
              <h1>FIND ADVENTURES</h1>
            </div>
          </h1>

          <p className="text-lg font-light text-accent">
            Let’s explore one of the most beautiful sites of the world, who
            truly deserves to get explored with most reasonable price enjoy solo
            or with your whole family.
          </p>

          <div className="flex flex-row items-center justify-center gap-5">
            <Divider width="w-full lg:w-full" />
            <Button
              variant={"primary"}
              size={"lg"}
              className="gap-1 px-9 text-xl"
            >
              Explore
              <FaArrowDown />
            </Button>
          </div>

          <ToursCarousel />

          <div className="flex flex-row items-center gap-4 ">
            <div className="h-14 w-1 rounded-full bg-primary "></div>
            <p className="font-light">
              Traveling isn’t always about running away from things, sometimes
              it’s about running into what you truly want and deserve.
            </p>
          </div>
        </div>
        {/* right */}
        <div className="relative hidden lg:flex lg:w-2/5">
          <img src={manInBoat} alt="" className="h-full w-full object-cover" />

          <div className="absolute bottom-0 left-0 flex w-full flex-row items-center justify-between p-12 text-white">
            <p className="flex flex-col">
              EVERYONE DESERVES
              <span className="flex flex-row items-center gap-2 ">
                THIS
                <Divider width="lg:w-10" bg="bg-white " />
                TREAT ONCE IN
              </span>
              A WHILE
            </p>

            <div className="flex h-full flex-row items-center justify-center gap-4 rounded-full border px-4 py-2">
              Follow us on
              <Link
                to="https://www.facebook.com"
                target="_blank"
                className="hover:text-blue-500"
              >
                <FaFacebook />
              </Link>
              <Link
                to={"https://www.instagram.com/"}
                target="_blank"
                className="hover:text-orange-500"
              >
                <FaInstagram />
              </Link>
              <Link
                to={"https://www.youtube.com/"}
                target="_blank"
                className="hover:text-red-500"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
