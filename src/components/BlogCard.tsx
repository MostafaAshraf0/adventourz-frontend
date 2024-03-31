import { formatDate } from "@/lib/utils";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  summary: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, summary, date }) => {
  return (
    <Link
      to={`/blogs/${id}`}
      className="h-full rounded-3xl bg-white p-4 hover:scale-105 hover:bg-white/80"
    >
      <h1 className="mt-4 text-2xl ">{title}</h1>

      <p className="mt-2 line-clamp-4 text-sm text-gray-400 lg:mt-4 lg:text-base">
        {summary}
      </p>

      <div className="mt-10 flex w-full flex-row justify-between pt-10">
        <p className="text-sm text-gray-400">{formatDate(date)}</p>

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
