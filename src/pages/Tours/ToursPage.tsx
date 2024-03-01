/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import TourCard from "@/components/tours/TourCard";
import { FaChevronUp } from "react-icons/fa";
import { Outlet } from "react-router-dom";
// Importing Shadcn components
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import Tours from "@/components/sections/Tours";

const ToursPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const outletRef = useRef<HTMLDivElement>(null);

  const totalTours = 16;
  const toursPerPage = 4;

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    setTotalPages(Math.ceil(totalTours / toursPerPage));
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const toggleVisibility = () => {
    window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToOutlet = () => {
    outletRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-10">
      {/* <div className="grid w-full gap-4 px-10 lg:w-auto lg:grid-cols-2">
        {Array.from({ length: totalTours })
          .slice((currentPage - 1) * toursPerPage, currentPage * toursPerPage)
          .map((_, i) => (
            <TourCard
              key={i + (currentPage - 1) * toursPerPage}
              tourId={i + (currentPage - 1) * toursPerPage + 1}
              scrollToOutlet={scrollToOutlet}
            />
          ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem
            onClick={() => currentPage > 1 && handlePageClick(currentPage - 1)}
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
      </Pagination> */}
      <Tours isStatic={true} />
      <div ref={outletRef} className="flex flex-col">
        <Outlet />
      </div>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary text-white"
          aria-label="Scroll to Top"
        >
          <FaChevronUp />
        </button>
      )}
    </div>
  );
};

export default ToursPage;
