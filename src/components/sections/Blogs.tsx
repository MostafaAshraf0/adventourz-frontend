import { useNavigate } from "react-router-dom";
import BlogCard from "../BlogCard";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import BlogHeader from "@/pages/Blogs/BlogHeader";
import axios from "axios";
import BlogCardLoading from "../loading/BlogCardLoading";

interface BlogProps {
  ID: string;
  Title: string;
  Date: string;
}

interface BlogContentProps {
  BlogID: string;
  SectionTitle?: string;
  Content: string;
}

interface BlogWithContentProps extends BlogProps {
  Description: BlogContentProps[];
}

const CACHE_KEY = "blogData";
const CACHE_EXPIRY_KEY = "blogDataExpiry";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const Blogs = ({ inHomepage }: { inHomepage?: boolean }) => {
  const navigate = useNavigate();
  const blogsPerPage = inHomepage ? 3 : 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsData, setBlogsData] = useState<BlogWithContentProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = import.meta.env.VITE_SHEETS_SCRIPT_URL;
    const fetchBlogsData = async (): Promise<BlogWithContentProps[]> => {
      const scriptUrl = url;
      try {
        const response = await axios.get(`${scriptUrl}?sheetName=Blogs`);
        console.log("Blogs Response:", response);
        return response.data; // Assuming response.data is already in the correct format
      } catch (error) {
        console.error("Failed to fetch blogs data:", error);
        return []; // Return empty array on error
      }
    };

    const now = new Date();
    const expiry = localStorage.getItem(CACHE_EXPIRY_KEY);
    if (expiry && now.getTime() < Number(expiry)) {
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (cachedData) {
        setBlogsData(JSON.parse(cachedData));
        setLoading(false);
        return;
      }
    }

    fetchBlogsData().then((data) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      localStorage.setItem(
        CACHE_EXPIRY_KEY,
        String(now.getTime() + CACHE_DURATION),
      );
      setBlogsData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <>
        {!inHomepage && <BlogHeader />}
        <div id="blogs" className="h-full px-12 py-10 lg:px-32">
          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {Array.from({ length: 4 }, (_, i) => (
              <BlogCardLoading key={i} />
            ))}
          </div>
        </div>
      </>
    );
  }

  const totalPages = Math.ceil(blogsData.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {!inHomepage && <BlogHeader />}
      <div id="blogs" className="h-full px-12 py-10 lg:px-32">
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {currentBlogs.map((blog, index) => {
            console.log(blog); // Check the blog object structure
            return (
              <BlogCard
                key={index}
                id={blog.ID}
                title={blog.Title}
                date={blog.Date}
                summary={
                  blog.Description.length > 0
                    ? blog.Description[0].Content
                    : "No summary available"
                }
              />
            );
          })}
        </div>

        {inHomepage ? (
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
        ) : (
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem
                onClick={() =>
                  currentPage > 1 && handlePageClick(currentPage - 1)
                }
              >
                <PaginationPrevious href="#" />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i} onClick={() => handlePageClick(i + 1)}>
                  <PaginationLink href="#" isActive={i + 1 === currentPage}>
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {totalPages > 5 && <PaginationEllipsis />}
              <PaginationItem
                onClick={() =>
                  currentPage < totalPages && handlePageClick(currentPage + 1)
                }
              >
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </>
  );
};

export default Blogs;
