import { cairoCity, cairoCity2 } from "@/assets/images";
import { useState } from "react";

const ToursCarousel = () => {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);
  return (
    <div className="flex h-[300px] space-x-5 rounded-2xl bg-neutral p-5">
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

        <div
          className={`absolute bottom-0 left-0 z-10 w-full flex-col bg-gradient-to-t from-accent/50 p-4 text-neutral transition-all duration-300  ${
            hovered === "left" ? "flex" : "hidden"
          } fade-effect`}
        >
          <h1>Pyramids of Giza</h1>
          <p>Explore the ancient pyramids of Giza</p>
        </div>
      </div>
      <div
        className={`relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-300 ${
          hovered === "left" ? "w-1/5" : "w-4/5"
        }`}
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
      >
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
