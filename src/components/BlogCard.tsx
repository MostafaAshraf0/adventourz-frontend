import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const BlogCard = ({ id }: { id: string }) => {
  return (
    <Link
      to={`/blogs/${id}`}
      className="h-full rounded-3xl bg-white p-4 hover:scale-105 hover:bg-white/80"
    >
      <h1 className="mt-4 text-2xl ">The Ultimate Guide to Cairo</h1>

      <p className="mt-2 line-clamp-4 text-sm text-gray-400 lg:mt-4 lg:text-base">
        Cairo is the capital of Egypt and the largest city in the Arab world.
        Its metropolitan area is the 16th largest in the world. Located near the
        Nile Delta, it was founded in AD 969. Nicknamed "the city of a thousand
        minarets" for its preponderance of Islamic architecture, Cairo has long
        been a center of the region's political and cultural life. Cairo was
        founded by the Fatimid dynasty in the 10th century, but the land
        composing the present-day city was the site of national capitals whose
        remnants remain visible in parts of Old Cairo. Cairo is also associated
        with Ancient Egypt due to its proximity to the Great Sphinx and the
        pyramids in nearby Giza.
      </p>

      <div className="mt-10 flex w-full flex-row justify-between pt-10">
        <p className="text-sm text-gray-400">17 Feb, 2024</p>

        <Link
          to={`/blogs/${id}`}
          className="flex flex-row items-center text-sm font-light text-primary hover:underline"
        >
          Read More
          <FiChevronRight />
        </Link>
      </div>
    </Link>
  );
};

export default BlogCard;
