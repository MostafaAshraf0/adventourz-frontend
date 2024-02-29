import { manInBoat } from "@/assets/images";
import Divider from "../Divider";
import ToursCarousel from "../tours/ToursCarousel";
import { Button } from "../ui/button";
// import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { PiArrowUpRight } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Tours = () => {
  const navigate = useNavigate();
  const { tourId } = useParams();

  console.log(tourId);

  return (
    <>
      <div id="tours" className="h-full overflow-hidden rounded-[0px]">
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
              truly deserves to get explored with most reasonable price enjoy
              solo or with your whole family.
            </p>

            <div className="flex flex-row items-center justify-center gap-5">
              <Divider width="w-full lg:w-full" />
              <Button
                variant={"primary"}
                size={"lg"}
                className="gap-1 px-9 text-xl"
                onClick={() => navigate(`/tours/tourDetail/${tourId}`)}
              >
                Explore
                <PiArrowUpRight />
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
            <img
              src={manInBoat}
              alt=""
              className="h-full w-full object-cover"
            />

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

              {/* <div className="flex h-full flex-row items-center justify-center gap-4 rounded-full border px-4 py-2">
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
            </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-neutral px-6 py-6 text-start lg:px-32">
        <p className="rounded-2xl bg-white p-2">
          The pyramids are ancient monumental structures primarily found in
          Egypt. They were built as tombs for pharaohs and queens, serving as a
          final resting place and a symbol of their power and status.
          Constructed during the Old and Middle Kingdom periods of ancient
          Egypt, the pyramids are marvels of engineering, featuring precise
          alignment, massive stone blocks, and intricate interior passages. The
          most famous among them are the Great Pyramid of Giza, the Pyramid of
          Khafre, and the Pyramid of Menkaure, all located on the Giza Plateau
          near Cairo. These pyramids are characterized by their massive size,
          geometric precision, and the mystery surrounding their construction
          techniques. They continue to captivate the world with their grandeur
          and historical significance, attracting millions of visitors annually.
        </p>

        {/* <Button
          variant="primary"
          className="my-6 w-1/5 self-center"
          onClick={() => navigate(`/tours/tourDetail/${tourId}`)}
        >
          More
        </Button> */}
      </div>
    </>
  );
};

export default Tours;
