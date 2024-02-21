import { cairoCity, cairoCity2 } from "@/assets/images";
import { useState } from "react";
import { LuBadgeCheck } from "react-icons/lu";

const ToursCarousel = () => {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);
  return (
    <div className="flex h-[300px] space-x-5 rounded-2xl bg-neutral p-5">
      {/* left */}
      <div
        className={`relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-300 ${hovered === "left" ? "w-4/5" : "w-1/5"}`}
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
      >
        <img
          src={cairoCity}
          alt="pyramids"
          className=" h-full w-full object-cover"
        />

        {/* badge */}
        <div
          className={`absolute left-0 top-0 ml-2 mt-2 flex-col rounded-3xl bg-accent/10 p-4 text-xs text-white drop-shadow-2xl ${
            hovered === "left" ? "flex" : "hidden"
          }`}
        >
          <p className="flex flex-row items-center justify-start gap-1">
            <LuBadgeCheck />
            200+
          </p>
          <p>Completed Tours</p>
        </div>

        <div
          className={`absolute bottom-0 left-0 z-10 w-full flex-col bg-gradient-to-t from-accent/50 p-4 text-neutral transition-all duration-300  ${
            hovered === "left" ? "flex" : "hidden"
          } fade-effect`}
        >
          <h1>Pyramids of Giza</h1>
          <p>Explore the ancient pyramids of Giza</p>
        </div>
      </div>

      {/* right */}
      <div
        className={`relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-300 ${
          hovered === "left" ? "w-1/5" : "w-4/5"
        }`}
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
      >
        {/* badge */}
        <div
          className={`absolute left-0 top-0 ml-2 mt-2 flex-col rounded-3xl bg-accent/10 p-4 text-xs text-white drop-shadow-2xl ${
            hovered === "left" ? "hidden" : "flex"
          }`}
        >
          <p className="flex flex-row items-center justify-start gap-1">
            <LuBadgeCheck />
            200+
          </p>
          <p>Completed Tours</p>
        </div>

        <img src={cairoCity2} alt="" className="h-full w-full object-cover " />
        <div
          className={`absolute bottom-0 left-0 z-10 w-full flex-col bg-gradient-to-t from-accent/50 p-4 text-neutral transition-all duration-300  ${
            hovered === "left" ? "hidden" : "flex"
          } fade-effect`}
        >
          <h1>Pyramids of Giza</h1>
          <p>Explore the ancient pyramids of Giza</p>
        </div>
      </div>
    </div>
  );
};

export default ToursCarousel;
