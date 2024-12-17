import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation, Link } from "react-router-dom";
import Blog from "../LatestComponents/NewsArray";

const LatestNews: React.FC = () => {
  const { t } = useTranslation("home");
  const location = useLocation();
  const language = location.pathname.split("/")[1];


  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white-100 pb-28 px-8 lg:px-20 ">
      <div>
        <div className="text-center mb-8 ">
          <p className="font-medium text-customRed mb-1 uppercase">
            {t("latest")}
          </p>
          <h2 className="text-3xl font-medium mb-12 sm:mb-20 text-center uppercase">
            {t("title_latest")}
          </h2>
        </div>
      {Blog.length > 0 ? (
        <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-8 overflow-hidden">
          {Blog.slice(0,3).map((Blog) => (
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
                <Link
                  to={`/${language}/latest`}
                  className="text-customRed font-medium mt-4 inline-block"
                >
                  {t("learn_more")}
                </Link>
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
        </div> ) : (
          <div className="flex justify-center items-center mb-20">
          <h1 className="font-semibold text-lg">News will be published soon!</h1> 
          </div> //LANGUAGE
        )}

        <div className="justify-center items-center flex">
          <NavLink to={`/${language}/latest`}>
            <Button
              variant="contained"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                 
                });
              }}
              sx={{
                backgroundColor: "transparent",
                ":hover": {
                  backgroundColor: "primary.main",
                  color: "background.default",
                },
                py: 1.5,
                px: 5,
                borderRadius: "5px",
                fontSize: "1.2rem",
                textTransform: "none",
                color: "primary.main",

                border: "solid",
                borderColor: "primary.main",
                borderWidth: "1px",
              }}
            >
              {t("read_more")}
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
