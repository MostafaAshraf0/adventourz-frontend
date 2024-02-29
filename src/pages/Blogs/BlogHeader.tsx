import { manInBoat2 } from "@/assets/images";

const BlogHeader = () => {
  return (
    <div className="w-full">
      <div className="relative flex w-full  items-center overflow-hidden lg:h-[500px] ">
        <img src={manInBoat2} alt="" className="object-cover" />

        <div className="absolute h-full w-full bg-black/20" />

        <h3 className="absolute bottom-0 left-0 right-0 mx-12 my-10 text-3xl font-bold text-white lg:m-32  lg:text-6xl">
          Our Blogs
        </h3>
      </div>
    </div>
  );
};

export default BlogHeader;
