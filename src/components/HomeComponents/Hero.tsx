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
        backgroundImage: `url("https://s3-alpha-sig.figma.com/img/57fc/2715/2abfcd0ec95c1b880470b8f0253a64b5?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MRviwVvkxyXfeRETnz2jU9iPekjvREjQAyA8j8qCFLqvfP2vwo3VAmxn6w60b7oH6H8935o-yaHTCHZTYTeUYsjz~-WmQr8UEJ89-~smoXwkK~vQGHEd9rkdBbLssyv3uQPwIEFWGZpxiKozOyFxdqRw2PXA-hIsLd3-YAcUXTPjJB3OQWER~cQbSI985EWbD4wnwXdsESIsHQDH1wsHKxn9Ppr7W3G8zD5OVMU8TzfR3nl12cYEwUoQ6Rdo6SaRHNDiUMUE2KNNF7YJu6B34oD4aYZ-QfRnlWOShPQid3RJYtmmCe83LNADBOhCfhJFAhupssrYPZw6j47F5nPUvw__")`,
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
