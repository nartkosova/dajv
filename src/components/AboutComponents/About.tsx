import React from "react";
import { Box, Typography, Button } from "@mui/material";
import OurStory from "../HomeComponents/OurStory";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about-us");

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: "60vh",
          backgroundImage: `url("https://s3-alpha-sig.figma.com/img/57fc/2715/2abfcd0ec95c1b880470b8f0253a64b5?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MRviwVvkxyXfeRETnz2jU9iPekjvREjQAyA8j8qCFLqvfP2vwo3VAmxn6w60b7oH6H8935o-yaHTCHZTYTeUYsjz~-WmQr8UEJ89-~smoXwkK~vQGHEd9rkdBbLssyv3uQPwIEFWGZpxiKozOyFxdqRw2PXA-hIsLd3-YAcUXTPjJB3OQWER~cQbSI985EWbD4wnwXdsESIsHQDH1wsHKxn9Ppr7W3G8zD5OVMU8TzfR3nl12cYEwUoQ6Rdo6SaRHNDiUMUE2KNNF7YJu6B34oD4aYZ-QfRnlWOShPQid3RJYtmmCe83LNADBOhCfhJFAhupssrYPZw6j47F5nPUvw__")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
              fontSize: { xs: "2.5rem", md: "3rem", lg: "3.5rem" },
              fontWeight: "600",
              marginBottom: 2,
              maxWidth: "750px",
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
            {t("title")}
          </Typography>
          <p className="text-lg max-w-4xl mb-8 px-4">{t("hero-text")}</p>
        </Box>
      </Box>

      <OurStory
        our={t("small_title1")}
        title={t("title1")}
        content={t("content1")}
        showReadMore={false}
        image="https://s3-alpha-sig.figma.com/img/2e0e/fafd/58d36059688776d4ba895dbd2789ce57?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bbYxFxmjWdQa6nfWl6B-svty16pv6I40ldGG-PYcr-fiKpWQZprxrJJc9VI2y9vEWe8FlkP8zdy7UkbUj9bLO9~kNJQbp1M1NBzy4fnQcHD1~Vrf7HWsa0jowmRejBQNsz77nhEwkgdxH8rTBugxA20xb-VB2w0M1qnjoSn3ISIJsRh1dEjm0cPZGLFCZtouBrE2CVyVK-ISRTrerE74Jax7KrBStLxAoj~GqUxKmnlGcfAS9t0cXk7Kf4YWdC~hj7XjCFj2sfYhN-TdOJ3V-gSMEZ1Y10UvwFM7EJk-qLyouo0idlNRMgq-FdTMZpPyCJ4KvSro-RcYoe5VZ~wJ4A__"
      />

      <div className="flex justify-center items-center px-8 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[...Array(6)].map((_, idx) => (
            <Box
              key={idx}
              sx={{
                minHeight: "252px",
                minWidth: "310px",
                height: { sm: "252px", md: "328px" },
                width: { sm: "310px", md: "404px" },
                backgroundImage:
                  "url(https://s3-alpha-sig.figma.com/img/ad8b/a92c/9e252417e19320a3688d65c4c95a8751?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z4fpuyebcfkVW2amKWtH5fRxW5xk9O9SQK~VHQ5PzvQN0lhdYto7kw72spiCkKbUYzQCKKC5wV-r7jMVZ9-sWTwKHi0Ah7vlSKL5eCTXRTkgtR4LMEr12GQipxIS68AdIA65uUFZcPnwiJ6NpaBJcm8xGNPXh0cDvEVJlroLmdPSHuFhCkEv8WoS7f1~gCuhQIIb0PHX-~i6yBDcGUv7-IFZ2sPDvQHpWaVx80pQ2pi6D8IGPIB~J~dWGUfK2Lepl~eay4V4m1ESfzb0ZZu8is4zyPAu8m4MW6d8VQibzs6b0EYcX9EDy5lPuQq60p30c9Wc5Y3sNot0jQU9mP-l8g__)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
      </div>

      <OurStory
        our={t("small_title2")}
        title={t("title2")}
        content={t("content2")}
        showReadMore={false}
        image="https://s3-alpha-sig.figma.com/img/2e0e/fafd/58d36059688776d4ba895dbd2789ce57?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bbYxFxmjWdQa6nfWl6B-svty16pv6I40ldGG-PYcr-fiKpWQZprxrJJc9VI2y9vEWe8FlkP8zdy7UkbUj9bLO9~kNJQbp1M1NBzy4fnQcHD1~Vrf7HWsa0jowmRejBQNsz77nhEwkgdxH8rTBugxA20xb-VB2w0M1qnjoSn3ISIJsRh1dEjm0cPZGLFCZtouBrE2CVyVK-ISRTrerE74Jax7KrBStLxAoj~GqUxKmnlGcfAS9t0cXk7Kf4YWdC~hj7XjCFj2sfYhN-TdOJ3V-gSMEZ1Y10UvwFM7EJk-qLyouo0idlNRMgq-FdTMZpPyCJ4KvSro-RcYoe5VZ~wJ4A__"
      />

      <Box
        sx={{
          position: "relative",
          height: "50vh",
          backgroundImage: `url("https://s3-alpha-sig.figma.com/img/9c30/596e/442e1ba1dce49ebff90b0fcc6b70462c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Aa45ObJlWCpzD~W~nuDmg4ZTPvnWYLtyOiXjMpfY-~zYPmujfDXt2VSUVJa8jZr4Z6x7xqwUp6bh8DMSo1k3NnJW-gLX~u8MlJ1ZbQL2t2gtXToBLTR78aOyXqVVCdqyPxGGTQV8Q6oGxk1wjDodQRpeqNbYYkA0SCCXToON9e49j8a9RShydf4Y~kvJ-HljZg5fCLjXCL00OgeCRbKhOJ~pPunBIp0g0v1NS8ht4gknFBSV9hfa6D3rlgK8UDX9uSmyNZMZjFtCHZYSz~49MMtgMNp8QSaPVgW~4Dx8UAJSCAcu3bJ7PnTS56Nwg8uSXfcqUzOEiCYjgP4SwyBQHg__")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 500,
              // maxWidth: { sm: "750px", md:"1000px", lg: "1300px" },
              width: "100%",
              px: { xs: "2rem", lg: "5rem" },
              my: 2,
              lineHeight: { md: "2.5rem", xs: "1.8rem" },
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
            {t("bottom-hero-text")}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "main",
              ":hover": { backgroundColor: "darkred" },
              mt: 1,
              py: 1.5,
              px: 5,
              borderRadius: "5px",
              fontSize: "1.2rem",
              textTransform: "none",
            }}
          >
            {t("become")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
