import React from "react";
import { Typography, Button } from "@mui/material";

const OurStory: React.FC = () => {
  return (
    <div className="relative bg-white h-screen align-middle px-16 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-center h-full text-left text-text pr-12">
          <p className="font-medium text-customRed mb-1">OUR STORY</p>
          <h2 className="text-3xl font-medium mb-8 text-left">
            LOREM IPSUM IS SIMPLY
          </h2>
          <p className="text-base max-w-xl mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "transparent",
                ":hover": {
                  backgroundColor: "primary.main",
                  color: "background.default",
                },
                py: 1.5,
                px: 5,
                borderRadius: "5px",
                fontSize: "1rem",
                textTransform: "none",
                color: "primary.main",

                border: "solid",
                borderColor: "primary.main",
                borderWidth: "1px",
              }}
            >
              Read More
            </Button>
          </div>
        </div>
        <div className="relative flex items-center justify-center pl-12 py-12">
          <div className="relative">
            <div className="absolute border border-customRed rounded-md w-full h-full pointer-events-none right-4 top-4 -z-50"></div>
              <img
                src="https://s3-alpha-sig.figma.com/img/2e0e/fafd/58d36059688776d4ba895dbd2789ce57?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EQekt4VydBOqg7KZoOF4LvKZjhCkOK6fAJUEcqhiaKjym1clkXLzMDvP8EFM7A3IbDZ6tMBBl8Ika1rDBpgTTiSFAuVqur2GC5PSBakyYyrD8ujB5p7Csjh4iwGrc11Rnm574PgMAPcFmpyuyqiOE1oAv-mMWbNfEDJXop36K1LpDM-EEMEse8pN8JU02dY9GWdXEUhQ3sMc5qDQMAk-5Ua6cDS94zPrdo~vXYNNCghWrNhOQJljau0WVqboWUU2zESDRYdaTGa1ciMIYnxiwSGdfFm1ltI8TPrjUI0wyvLJcKh~Bl2b3lJvA-AqlCiv9-m2-jZ3cDxdzu6WY1nUAA__"
                alt="4 People in a meeting"
                className="object-cover rounded-md z-10"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
