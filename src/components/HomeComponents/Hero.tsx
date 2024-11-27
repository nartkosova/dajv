import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url("https://s3-alpha-sig.figma.com/img/57fc/2715/2abfcd0ec95c1b880470b8f0253a64b5?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lEYxPNaUAVEJiGTLA1FJFU185Kw6pJqxhmXGJRWtpD0rvCbV6tBPfAOvfwGgxRIAjPfN-3lrOaKButMIebB5EwTQBebrVorvUE-4gevmrkV6ROD92hs~YdSx-ZgkmNWwvZKNvgFdrq~fQ83VphES0oVOjTLPlmq1wSDvClAs6maS0jJvwQrX5NWsroGkTMio9umcn95pE~n2ihnlVsac4eQuDAJdgSCNeqg4-n8q2yRZhLhfW6yDF1cLy9s8W6BIQj41QoGwVQAAqpcbsVn3kqiRKEtyyxjcr6rwqFgM8iO9mZYuKZFblcDo4xe45m0S305AXlIlQ-80mqCNFDoODA__")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // animation: "backgroundSize 50s ease-in-out infinite",
        // "@keyframes backgroundSize": {
        //   "0%": {
        //     backgroundSize: "100%",
        //   },
        //   "50%": {
        //     backgroundSize: "110%",
        //   },
        //   "100%": {
        //     backgroundSize: "100%",
        //   },
        // },
        // "@media (max-width:900px)": {
        //   backgroundSize: "contain",
        // },
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
            maxWidth: "700px",
            color: "#FFFFFF",
          }}
        >
          LOREM IPSUM IS SIMPLY DUMMY TEXT
        </Typography>
        <p className="text-lg max-w-2xl mb-8 px-4">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type.
        </p>

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
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
