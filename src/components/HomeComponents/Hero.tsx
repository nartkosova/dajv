import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation("home");
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url("https://s3-alpha-sig.figma.com/img/57fc/2715/2abfcd0ec95c1b880470b8f0253a64b5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NRZf54-5gLs8z3EcFZQAcI83GbCtOVUTHP66g6BdzA8Eti4c2fEsN31hXgh2eUUfflenL1d7k2w~IoYSqucP3l6UBJrN6SmPqciiy1QsYwhPz4kPYrINZajYwQpbgzh0WVAY2N8ppKS~FvK5P7rqyG-hPhk5jQyZjS3qSKZDhyCPn0CyeyTZVYm3ujPvg5Cch1OfnGrPL01mlklqQGJvckLfz3L62GX791ylhTANV4ZsKmWo54sWYUEPDiXLtST9CGSfCobjkkk014mahL95pmW0yr76MGyp4Duvwj94nsgfO7LRY56YtPusCUxB7kXJIqRpElPh8EkpdEIbz28U2g__")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
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
            fontSize: { xs: "2.5rem", md: "3rem", lg: "3.5rem" },
            fontWeight: "600",
            marginBottom: 2,
            maxWidth: "750px",
            color: "#FFFFFF",
            textTransform: "uppercase",
          }}
        >
          {t("hero")}
        </Typography>
        <p className="text-lg max-w-4xl mb-8 px-4">{t("hero_description")}</p>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "main",
            ":hover": { backgroundColor: "darkred" },
            py: 1.5,
            px: 5,
            borderRadius: "5px",
            fontSize: "1.2rem",
            textTransform: "none",
          }}
        >
          {t("read_more")}
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
