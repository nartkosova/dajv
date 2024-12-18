import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t, i18n } = useTranslation("header");
  const [menuOpen, setMenuOpen] = useState(false);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const location = useLocation();
  const language = location.pathname.split("/")[1];
  const { lang } = useParams();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (newLang: string) => {
    if (newLang !== lang) {
      i18n.changeLanguage(newLang.toLowerCase());

      const pathParts = location.pathname.split("/").filter(Boolean);

      if (pathParts[0] && pathParts[0].length === 2) {
        pathParts.shift();
      }

      const newPath =
        `/${newLang.toLowerCase()}/${pathParts.join("/")}`.replace(/\/$/, "");

      if (location.pathname !== newPath) {
        navigate(newPath);
      }
    }

    handleClose();
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header
      className="relative custom-white text-custom-black py-2 shadow-md"
      style={{ width: "100%", height: "80px" }}
    >
      <div
        className="flex justify-between items-center px-8 lg:px-20"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="font-bold text-3xl text-[#A01717]">
            <NavLink to={`/${language}`}>LOGO</NavLink>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:justify-center md:space-x-2 md:w-auto md:bg-transparent ml-18">
          <div>
            <NavLink
              to={`/${language}/about`}
              className="block py-2 px-4 md:inline-block hover:text-[#A01717] text-[18px] font-normal hover:font-bold"
            >
              {t("about")}
            </NavLink>
          </div>
          <div>
            <NavLink
              to={`/${language}/news`}
              className="block py-2 px-4 md:inline-block hover:text-[#A01717] text-[18px] font-normal hover:font-bold"
            >
              {t("latest")}
            </NavLink>
          </div>
          <div>
            <NavLink
              to={`/${language}/contact`}
              className="block py-2 px-4 md:inline-block hover:text-[#A01717] text-[18px] font-normal hover:font-bold"
            >
              {t("contact")}
            </NavLink>
          </div>
        </nav>

        {/* Language and Social Media */}
        <div className="flex items-center space-x-2">
          {/* Social Media Icons for Desktop */}
          <div className="hidden md:flex space-x-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-text text-white flex justify-center items-center rounded hover:bg-[#A01717]"
            >
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-text text-white flex justify-center items-center rounded hover:bg-[#A01717]"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-text text-white flex justify-center items-center rounded hover:bg-[#A01717]"
            >
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
          </div>

          {/* Language Selector */}
          <Button
            id="language-button"
            aria-controls={open ? "language-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="outlined"
            color="primary"
            className="!bg-transparent !text-black !border-none"
            style={{
              width: "50px",
              height: "24px",
              display: "flex",
              justifyContent: "center",
              fontSize: "16px",
              gap: "4px",
            }}
          >
            {i18n.language.toUpperCase()}{" "}
            <ArrowDropDownIcon style={{ fontSize: "18px", marginLeft: "0" }} />
          </Button>
          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "language-button",
            }}
          >
            <MenuItem onClick={() => handleLanguageChange("DE")}>
              German
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange("EN")}>
              English
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange("AL")}>
              Albanian
            </MenuItem>
          </Menu>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full z-50 bg-white md:hidden pt-4`}
        >
          <div>
            <NavLink
              to={`/${language}/about`}
              className="block text-lg py-4 px-4 hover:text-[#A01717] text-[18px] font-normal hover:font-bold"
            >
              {t("about")}
            </NavLink>
          </div>
          <div>
            <NavLink
              to={`/${language}/latest`}
              className="block text-lg py-4 px-4 hover:text-[#A01717] text-[18px] font-normal hover:font-bold"
            >
              {t("latest")}
            </NavLink>
          </div>
          <div>
            <NavLink
              to={`/${language}/contact`}
              className="block text-lg py-4 px-4 hover:text-[#A01717] text-[18px] font-normal hover:font-bold"
            >
              {t("contact")}
            </NavLink>
          </div>

          {/* Social Media Icons for Mobile */}
          <div className="flex justify-center space-x-4 pb-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-text text-white flex justify-center items-center rounded hover:bg-[#A01717]"
            >
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-text text-white flex justify-center items-center rounded hover:bg-[#A01717]"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-text text-white flex justify-center items-center rounded hover:bg-[#A01717]"
            >
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
