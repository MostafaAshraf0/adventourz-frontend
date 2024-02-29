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

const Blogs = ({ inHomepage }: { inHomepage?: boolean }) => {
  const navigate = useNavigate();

  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalBlogs = inHomepage ? 3 : 16;
  const blogsPerPage = 9;

  useEffect(() => {
    setTotalPages(Math.ceil(totalBlogs / blogsPerPage));
  }, []);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <BlogHeader />
      <div id="blogs" className="h-full px-12 py-10 lg:px-32">
        <div
          className="mt-8
        grid grid-cols-1
        gap-4
        lg:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-4
        "
        >
          {Array.from({ length: totalBlogs })
            .slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage)
            .map((_, i) => (
              <BlogCard
                key={i + (currentPage - 1) * blogsPerPage}
                id={(i + (currentPage - 1) * blogsPerPage + 1).toString()}
              />
            ))}
        </div>

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

        {inHomepage && (
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
        )}
      </div>
    </>
  );
};

export default Blogs;
