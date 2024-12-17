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
    <div className="flex flex-col justify-center items-center bg-white-100">
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
            {t("18 December 2024")}
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
            {t("Lorem Ipsum is simply ")}
          </Typography>
          <p className="text-lg max-w-4xl mb-8 px-4">{t("Topic")}</p>
        </Box>
      </Box>

      <div className="flex flex-col justify-center items-center bg-white-100 py-10 px-10 lg:px-20">
        <div className="flex flex-col justify-center lg:w-1/1 text-left text-text lg:pr-12 mb-16 lg:mb-0 self-center">
          <p className="font-medium text-customRed mb-1 uppercase">{""}</p>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/30"
              className="w-12 h-12 rounded-full mr-2"
            />
            <div className="flex flex-col">
              <span className="font-montserrat font-medium  text-lg mt-2">
                PUBLISHER
              </span>
              <span>{"18.12.2024"}</span>
            </div>
          </div>
          <p className="text-lg font-montserrat font-medium  mt-2">
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including."
            }
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center bg-white-100 py-2 px-2 lg:px-20">
          <div className="flex flex-col justify-center lg:w-1/1 text-left text-text lg:pr-12 mb-16 lg:mb-0 self-center">
            <h2 className="font-medium text-lg py-5">
              {"Lorem Ipsum is simply dummy text of the printing"}
            </h2>
            <p className="text-lg">
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white-100 py-2 px-2 lg:px-20">
          <div className="flex flex-col justify-center lg:w-1/1 text-left text-text lg:pr-12 mb-16 lg:mb-0 self-center">
            <h2 className="font-medium text-lg  py-5 ">
              {"Lorem Ipsum is simply dummy text of the printing"}
            </h2>
            <p className="text-lg">
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white-100 py-2 px-2 lg:px-20">
          <div className="flex flex-col justify-start lg:w-1/1 text-left text-text lg:pr-12 mb-16 lg:mb-0 self-start">
            <h2 className="font-medium text-lg  py-5">
              {"Lorem Ipsum is simply dummy text of the printing"}
            </h2>
            <p className="text-lg mb-8">
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start bg-white-100 py-5 pb-20 lg:px-20">
          <NavLink
          to={`/${language}/latest`}
          >
          <button className="text-customRed flex flex-row items-center ">
            <IoIosArrowBack size={23} />
            Go Back
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
