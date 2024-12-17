import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const language = location.pathname.split("/")[1];

  const { t } = useTranslation("footer");
  return (
    <footer className="bg-text py-12 text-white">
      <div className="lg:px-20 px-8">
        <div className="flex flex-wrap justify-between gap-6">
          <ul className="space-y-6 flex-1 min-w-[170px]">
            <li className="flex items-center">
              <i className="fas fa-phone-alt mr-2"></i> +1 234 5678 90
            </li>
            <li className="flex items-center">
              <i className="fas fa-map-marker-alt mr-2"></i> Address
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope mr-2"></i> email@address.com
            </li>
          </ul>
          <div className="flex-1 min-w-[170px]">
            <h2 className="font-bold mb-2">{t("pages")}</h2>
            <ul className="space-y-2">
              <li>
              <NavLink
  to={`/${language}/about`}
  className="hover:underline"
  onClick={() => {
    window.scrollTo({
      top: 0,
    
    });
  }}
>
  {t("about")}
</NavLink>

              </li>
              <li>
                <NavLink 
                to={`/${language}/latest`} 
                className="hover:underline"  
                onClick={() => {
                window.scrollTo({
                top: 0,
                
    });
  }}>
                  {t("latest")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${language}/contact`}
                  className="hover:underline"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                    });
                  }}
                >
                  {t("contact")}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[170px]">
            <h2 className="font-bold mb-2">{t("links")}</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  {t("join")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {t("ask")}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex space-x-4 mt-0 flex-1 sm:flex-none sm:flex-shrink">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white text-text flex justify-center items-center rounded hover:bg-customRed"
            >
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white text-text flex justify-center items-center rounded hover:bg-customRed"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white text-text flex justify-center items-center rounded hover:bg-customRed"
            >
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
          </div>
        </div>

        <div className="border-t border-dividers3 my-6"></div>

        <div className="flex justify-between items-center text-sm">
          <p>©2024 DAJV {t("privacy")} | Veranstaltungs-AGB</p>
          <p>{t("delivered")} Telos Labs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
