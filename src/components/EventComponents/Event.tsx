import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { initialEvents } from "./data";
import { useLocation } from "react-router-dom";

const Event = () => {
  const [events, setEvents] = useState(initialEvents);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [showAllMobileEvents, setShowAllMobileEvents] = useState(false);

  const eventsPerPage = 20;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredEvents = events
    .filter((event) =>
      searchQuery
        ? event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase())
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

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const desktopEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage,
  );

  const mobileEvents = showAllMobileEvents
    ? filteredEvents
    : filteredEvents.slice(0, 4);

  const eventsToShow = isMobile ? mobileEvents : desktopEvents;

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
    setShowAllMobileEvents(true);
  };

  const handleShowLess = () => {
    setShowAllMobileEvents(false);
  };

  return (
    <div>
      <div
        className="relative bg-cover bg-center h-[500px]"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/6c81/60ca/56f3eab7abd619c6f43ad594be3b865a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JOng4YkyZqzJCvVMd~NiN9EHlqosMoVm8lkj36GsMEmdhnHI1DwawIWE3PZo0rSd35KmHf0RuNuUCVWlw8Dx2I~IHeAQdqWv6ZM7hVuCzoytxbQLXwRnms6bPHWMFCs3mKmBW1ZMC9XmzzObr-q4us5MK2Y8AH1HLwVI1OriQB9blZHeyQajvZV8vwV~jwiPprV~u6iWX1DIlN8mx9JKgmYXf02ai8SByaWAIMMF6Y56ZhCTIrBM6Kjdv6eylA4yy34v~MFaSC1y~4ODygpTs5BfCWftalg5P60NSbifHeuPnr3Z3r0GjBMCq~~OM4pNKdMZy80cyWFaCBdr3yx6bg__')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">EREIGNIS</h1> {/* LANGUAGE */}
            <p className="text-lg max-w-2xl mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting {/* LANGUAGE */}
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div className="px-8 lg:px-20 py-20">
        <div className="flex flex-wrap justify-between items-center space-y-2 md:space-y-0 w-full pb-8">
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
              <option value="All">All</option> {/* LANGUAGE */}
              <option value="Latest">Latest</option> {/* LANGUAGE */}
              <option value="Earliest">Earliest</option> {/* LANGUAGE */}
            </select>
          </div>

          {/* Search Bar */}
          <div className="flex items-end">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="px-4 py-2 border border-dividers rounded-md shadow-sm maxw-[290px]"
            />
          </div>
        </div>

        {/* Event List */}
        <div className="flex justify-center items-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8 justify-items-center">
            {eventsToShow.map((event) => (
              <div
                key={event.id}
                className="border rounded-md border-dividers hover:shadow-xl transition-all duration-300"
                style={{ maxWidth: "5000px" }}
              >
                <img
                  src={event.image}
                  className="object-cover"
                  alt={event.title}
                />
                <div className="p-4 flex flex-col">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500">{event.date}</p>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-red-500 mr-1" />
                      <span className="font-bold">{event.location}</span>
                    </div>
                  </div>
                  <p
                    className="my-4 text-lg text-customRed"
                    style={{
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "26px",
                    }}
                  >
                    {event.title}
                  </p>
                  <p className="text-sm text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {isMobile && (
          <div className="flex justify-center items-center">
            {!showAllMobileEvents ? (
              <button
                onClick={handleShowMore}
                className="px-4 py-2 border rounded text-white bg-customRed"
              >
                Show More {/* LANGUAGE */}
              </button>
            ) : (
              <button
                onClick={handleShowLess}
                className="px-4 py-2 border rounded text-white bg-customRed"
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
    </div>
  );
};

export default Event;
