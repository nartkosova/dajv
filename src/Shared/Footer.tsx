import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");
  return (
<footer className="bg-text py-12 text-white">
  <div className="lg:px-20 px-8">
    <div
      className="flex flex-wrap justify-between  gap-8 md:gap-x-32"
    >
      <ul className="space-y-6 flex-1 min-w-[200px]">
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
      <div className="flex-1 min-w-[200px]">
        <h2 className="font-bold mb-2">{t("pages")}</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:underline">
              {t("about")}
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              {t("latest")}
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              {t("contact")}
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 min-w-[200px]">
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
      <div className="flex space-x-4 mt-0 flex-1 min-w-[200px]">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-white text-text flex justify-center items-center rounded hover:bg-red-600"
        >
          <i className="fab fa-facebook-f text-lg"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-white text-text flex justify-center items-center rounded hover:bg-red-600"
        >
          <i className="fab fa-instagram text-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-white text-text flex justify-center items-center rounded hover:bg-red-600"
        >
          <i className="fab fa-linkedin-in text-lg"></i>
        </a>
      </div>
    </div>

    <div className="border-t border-dividers3 my-6"></div>

    <div className="flex justify-between items-center text-sm">
      <p>©2024 DAJV {t("privacy")} | Veranstaltungs-AGB</p>
      <p>Delivered by Telos Labs</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
