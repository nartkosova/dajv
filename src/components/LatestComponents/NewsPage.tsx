import { NavLink, useLocation, useParams } from "react-router-dom";
import Blog from "./NewsArray";
import { Box, Typography } from "@mui/material";
import { IoIosArrowBack } from "react-icons/io";

import { t } from "i18next";

const NewsPage: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const location = useLocation();
  const language = location.pathname.split("/")[1];

  if (!title) {
    return <div>Post not found.</div>;
  }

  const decodedTitle = decodeURIComponent(title);
  const post = Blog.find(
    (b) => b.title.replace(/\s+/g, "-").toLowerCase() === decodedTitle
  );

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="flex flex-col justify-center items-start bg-white-100">
      <Box
        sx={{
          position: "relative",
          height: "60vh",
          backgroundImage: `url("https://s3-alpha-sig.figma.com/img/57fc/2715/2abfcd0ec95c1b880470b8f0253a64b5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NRZf54-5gLs8z3EcFZQAcI83GbCtOVUTHP66g6BdzA8Eti4c2fEsN31hXgh2eUUfflenL1d7k2w~IoYSqucP3l6UBJrN6SmPqciiy1QsYwhPz4kPYrINZajYwQpbgzh0WVAY2N8ppKS~FvK5P7rqyG-hPhk5jQyZjS3qSKZDhyCPn0CyeyTZVYm3ujPvg5Cch1OfnGrPL01mlklqQGJvckLfz3L62GX791ylhTANV4ZsKmWo54sWYUEPDiXLtST9CGSfCobjkkk014mahL95pmW0yr76MGyp4Duvwj94nsgfO7LRY56YtPusCUxB7kXJIqRpElPh8EkpdEIbz28U2g__")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.80)",
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#FFFFFF",
              textTransform: "uppercase",
              marginBottom: 2,
              maxWidth: "750px",
            }}
          >
            {post.date}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3rem", lg: "3.5rem" },
              fontWeight: "600",
              marginBottom: 2,
              maxWidth: "750px",
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
           {post.title}
          </Typography>
          <p className="text-lg max-w-4xl mb-8 px-4">{post.topic}</p>
        </Box>
      </Box>

      <div className="flex flex-col justify-center items-start bg-white-100 py-10 px-8 lg:px-20">
        <div className="flex flex-col justify-center lg:w-1/1 text-left text-text lg:pr-12 mb-16 lg:mb-0 self-start">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/30"
              alt="placeholder"
              className="w-12 h-12 rounded-full mr-2"
            />
            <div className="flex flex-col">
              <span className="font-montserrat font-medium uppercase text-lg mt-2">
              {post.publisher}
              </span>
              <span>{post.date}</span>
            </div>
          </div>
          <p className="text-lg font-montserrat font-medium  mt-2">
            {post.description}
          </p>
        </div>

      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-center lg:w-1/1 text-left text-text  mb-16 lg:mb-0 self-start">
            <h2 className="font-medium text-lg py-5">
              SEC TITLE
            </h2>
            <p className="text-lg">
            {post.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center lg:w-1/1 text-left text-text mb-16 lg:mb-0 self-start">
            <h2 className="font-medium text-lg  py-5 ">
              THIRD T
            </h2>
            <p className="text-lg">
            {post.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-start lg:w-1/1 text-left text-text mb-16 lg:mb-0 self-start">
            <h2 className="font-medium text-lg  py-5">
              4 T
            </h2>
            <p className="text-lg">
            {post.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start bg-white-100 py-6">
          <NavLink
          to={`/${language}/news`}
          >
          <button className="text-customRed flex flex-row items-center"
            onClick={() => {
              window.scrollTo({
                top: 0,
              });
            }}>
            <IoIosArrowBack size={23} />
            Go Back
          </button>
          </NavLink>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NewsPage;
