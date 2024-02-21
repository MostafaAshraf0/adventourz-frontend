import { useNavigate } from "react-router-dom";
import BlogCard from "../BlogCard";
import Divider from "../Divider";
import { Button } from "../ui/button";

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div id="blogs" className="h-full px-12 py-10 lg:px-32">
      <h1 className=" flex items-center gap-4 text-3xl font-bold text-accent lg:text-4xl">
        <Divider bg="bg-accent" />
        Latest Blogs
      </h1>

      <div
        className="mt-8
        grid grid-cols-1
        gap-4
        lg:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-4
      "
      >
        <BlogCard id="1" />
        <BlogCard id="1" />
        <BlogCard id="1" />
      </div>

      <div className="flex w-full items-center justify-center">
        <Button
          className="mt-10"
          onClick={() => {
            navigate("/blogs");
          }}
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

export default Blogs;
