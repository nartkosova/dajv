import { useTranslation } from "react-i18next";
import Blog from "./NewsArray";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const News: React.FC = () => {
  const { t } = useTranslation("latest-news");
  const [blogs, setBlogs] = useState(Blog);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [showAllMobileBlogs, setShowAllMobileBlogs] = useState(false);

  const blogsPerPage = 6;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredBlogs = blogs
    .filter((Blog) =>
      searchQuery
        ? Blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          Blog.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
          Blog.topic.toLowerCase().includes(searchQuery.toLowerCase())
        : true,
    )
    .sort((a, b) => {
      if (filter === "Latest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (filter === "Earliest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return 0;
    });
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
    const desktopBlogs = filteredBlogs.slice(
      (currentPage - 1) * blogsPerPage,
      currentPage * blogsPerPage,
    );
  
    const mobileBlogs = showAllMobileBlogs
      ? filteredBlogs
      : filteredBlogs.slice(0, 2);
  
    const blogsToShow = isMobile ? mobileBlogs : desktopBlogs;
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
      setCurrentPage(1);
    };
  
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilter(e.target.value);
      setCurrentPage(1);
    };
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  
    const handleShowMore = () => {
      setShowAllMobileBlogs(true);
    };
  
    const handleShowLess = () => {
      setShowAllMobileBlogs(false);
    };
  

  if (!Blog.length) {
    return <div className="flex justify-center items-center h-52">
      <h1 className="font-semibold text-lg mt-2">News will be published soon!</h1> {/*LANGUAGE REQUIRED*/}
      </div> 
  } else return (
    
    <div className="flex flex-col justify-center items-center bg-white-100 py-28 px-8 lg:px-20 ">
        <div className="flex flex-wrap justify-between items-center space-y-2 md:space-y-0 w-full pb-6">
          <div>
            <label htmlFor="filter" className="font-medium">
              Show:
            </label>
            <select
              id="filter"
              value={filter}
              className="font-medium"
              onChange={handleFilterChange}
            >
              <option value="All">All</option>
              <option value="Latest">Latest</option>
              <option value="Earliest">Earliest</option>
            </select>
          </div>

          {/* Search Bar */}
          <div className="flex items-end">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="px-4 py-2 border border-dividers rounded-md shadow-sm max-w-[450px]"
            />
          </div>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 justify-items-center">
        {blogsToShow.map((Blog) => (
          <div
            key={Blog.id}
            className="border border-dividers rounded-md hover:shadow-xl transition-all duration-300 pb-6"
            style={{ maxWidth: "600px" }}
          >
            <div className="bg-gray-200 rounded-t-lg">
              <img
                src={Blog.image}
                alt={Blog.image}
                className="p-6 rounded-xl"
              />
            </div>
            <div className="px-6">
              <p className="text-customRed text-sm font-medium uppercase">
                {Blog.topic}
              </p>
              <h3 className="font-semibold text-lg mt-2">{Blog.title}</h3>
              <p className="text-lg max-w-2xl line-clamp-3">
                {Blog.description}
              </p>
              <a
                href="#"
                className="text-customRed font-medium mt-4 inline-block"
              >
                Read More {/*LANGUAGE REQUIRED*/}
              </a> 
              <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/30"
                    alt={Blog.publisher}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span>{Blog.publisher}</span>
                </div>
                <span>{Blog.date}</span>
              </div>
            </div>
          </div>
    ))}         
      </div>
      {isMobile && (
              <div className="flex justify-center items-center">
        {!showAllMobileBlogs ? (
          <button
            onClick={handleShowMore}
            className="my-8 px-4 py-2 border rounded text-white bg-customRed"
          >
            Show More {/* LANGUAGE */}
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="my-8 px-4 py-2 border rounded text-white bg-customRed"
          >
            Show Less {/* LANGUAGE */}
          </button>
        )}
      </div>
      )}
       {!isMobile && (
      <div className="flex justify-center space-x-4 my-8">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded text-white bg-customRed disabled:opacity-50"
        >
          &lt; Prev {/* LANGUAGE */}
        </button>
        <span
    className="flex items-center justify-center"
    style={{ width: "130px", textAlign: "center" }}
  >
    Page {currentPage} of {totalPages}
  </span>
        <button
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded text-white bg-customRed disabled:opacity-50"
        >
          Next &gt; {/* LANGUAGE */}
        </button>
      </div>
    )}
    </div>
  );
};

export default News;
