import { Button } from "@mui/material";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; 
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import initialEvents from "../EventComponents/data";

const EREIGNIS = () => {
  const { t } = useTranslation("home");
  const location = useLocation();
  const language = location.pathname.split("/")[1];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen pb-28 px-8 lg:px-20 ">
      <div className="text-center mb-8 ">
        <p className="font-medium text-customRed mb-1 uppercase">EVENTS</p> {/*LANGUAGE*/}
        <h2 className="text-3xl font-medium mb-12 sm:mb-20 text-center">
          LOREM IPSUM IS SIMPLY {/*LANGUAGE*/}
        </h2>
      </div>
      {initialEvents.length > 0 ? (
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8"
        style={{}}
      >
       {initialEvents.slice(0, 8).map((event) => (
              <div
                key={event.id}
                className="border rounded-md border-dividers overflow-hidden hover:shadow-xl transition-all duration-300"
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
            </div>) : (
          <div className="flex justify-center items-center mb-20">
          <h1 className="font-semibold text-lg">News will be published soon!</h1> 
          </div> //LANGUAGE
        )}


      <NavLink to={`/${language}/events`}>
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
  );
};

export default EREIGNIS;
