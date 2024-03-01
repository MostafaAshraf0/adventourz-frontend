import { aboutUs } from "@/assets/images";
// import { useParams } from "react-router-dom";

const TourDetailPage = () => {
  // const { id } = useParams();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <img
        src={aboutUs}
        alt=""
        className=" rounded-3xl object-contain shadow-2xl"
      />
      <h1 className="mt-10 w-full text-5xl font-bold">Pyramids</h1>
    </div>
  );
};

export default TourDetailPage;
