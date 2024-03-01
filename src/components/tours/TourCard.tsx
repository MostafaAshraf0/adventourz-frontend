import { aboutUs } from "@/assets/images";
import { Link } from "react-router-dom";

interface TourCardProps {
  tourId: number;
  scrollToOutlet: () => void;
}

const TourCard: React.FC<TourCardProps> = ({ tourId, scrollToOutlet }) => {
  return (
    <Link
      to={`/tours/${tourId}`}
      onClick={scrollToOutlet}
      className="relative z-10 h-[250px] w-full cursor-pointer overflow-hidden rounded-xl bg-gray-900 shadow-lg transition duration-300 ease-in-out hover:shadow-2xl lg:h-[300px] lg:w-[500px]"
      style={{
        backgroundImage: `url(${aboutUs})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute z-10 h-full w-full bg-black/30 hover:bg-black/0"></div>
      <h3 className="absolute bottom-0 left-0 right-0 m-4 w-full text-5xl font-bold text-white">
        Giza {tourId}
      </h3>
    </Link>
  );
};

export default TourCard;
