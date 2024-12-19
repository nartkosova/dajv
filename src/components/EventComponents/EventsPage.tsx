import { useParams, useLocation } from "react-router-dom";
import initialEvents from "./data";
import { Box, Typography } from "@mui/material";

const EventsPage: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const locationData = useLocation();

  const decodedTitle = decodeURIComponent(title!);

  // Find the matching event based on title
  const post = initialEvents.find(
    (b) => b.title.replace(/\s+/g, "-").toLowerCase() === decodedTitle,
  );

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div>
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
            variant="h5"
            sx={{
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: 2,
              color: "#FFFFFF",
            }}
          >
            {post.date}
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3rem", lg: "3.5rem" },
              fontWeight: "700",
              marginBottom: 2,
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
            {post.title}
          </Typography>

          <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
            {post.location}
          </Typography>
        </Box>
      </Box>
      <div className="flex flex-col justify-center items-center bg-white-100 py-28 px-8 lg:px-20">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="grid grid-cols-4 gap-2">
        {/* First Column */}
        <div className="col-span-1 flex flex-col gap-2">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Top Left"
            className="w-full h-[200px] object-cover"
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="Bottom Left"
            className="w-full h-[200px] object-cover"
          />
        </div>

        {/* Second Column */}
        <div className="col-span-2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Center Image"
            className="w-full h-[404px] object-cover"
          />
        </div>

        {/* Third Column */}
        <div className="col-span-1 grid grid-rows-2 gap-2">
          <div className="flex gap-2">
            <img
              src="https://via.placeholder.com/150x150"
              alt="Top Right 1"
              className="w-1/2 h-[100px] object-cover"
            />
            <img
              src="https://via.placeholder.com/150x150"
              alt="Top Right 2"
              className="w-1/2 h-[100px] object-cover"
            />
          </div>
          <div className="flex gap-2">
            <img
              src="https://via.placeholder.com/150x150"
              alt="Bottom Right 1"
              className="w-1/2 h-[100px] object-cover"
            />
            <img
              src="https://via.placeholder.com/150x150"
              alt="Bottom Right 2"
              className="w-1/2 h-[100px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default EventsPage;
