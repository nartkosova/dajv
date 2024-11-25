import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (lang: string) => {
    setLanguage(lang);
    setAnchorEl(null);
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
        className="flex justify-between items-center px-4 mx-auto"
        style={{ maxWidth: "1440px", width: "100%", height: "100%" }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="font-bold text-3xl text-[#A01717]">
            <a href="#">LOGO</a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:justify-center md:space-x-2 md:w-auto md:bg-transparent ml-17">
          <div>
            <a
              href="#"
              className="block py-2 px-4 md:inline-block hover:text-[#A01717] text-[18px] font-normal hover:font-bold"
            >
              About Us
            </a>
          </div>
          <div>
            <a
              href="#"
              className="block py-2 px-4 md:inline-block hover:text-[#A01717] text-[18px] font-normal hover:font-bold"
            >
              Latest
            </a>
          </div>
          <div>
            <a
              href="#"
              className="block py-2 px-4 md:inline-block hover:text-[#A01717] text-[18px] font-normal hover:font-bold"
            >
              Contact
            </a>
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
              padding: 0,
              fontSize: "16px",
              gap: "4px",
            }}
          >
            {language} <ArrowDropDownIcon style={{ fontSize: "18px", marginLeft: "0" }} />
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
            <MenuItem onClick={() => handleLanguageSelect("EN")}>English</MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("ES")}>Spanish</MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("FR")}>French</MenuItem>
          </Menu>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full z-50 bg-white md:hidden`}
      >
        <div>
          <a
            href="#"
            className="block py-2 px-4 hover:text-[#A01717] text-[18px] font-normal hover:font-bold"
          >
            About Us
          </a>
        </div>
        <div>
          <a
            href="#"
            className="block py-2 px-4 hover:text-[#A01717] text-[18px] font-normal hover:font-bold"
          >
            Latest
          </a>
        </div>
        <div>
          <a
            href="#"
            className="block py-2 px-4 hover:text-[#A01717] text-[18px] font-normal hover:font-bold"
          >
            Contact
          </a>
        </div>

        {/* Social Media Icons for Mobile */}
        <div className="flex justify-center space-x-4 mt-4">
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
    </header>
  );
};

export default Header;
