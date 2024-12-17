import {
  Routes,
  Route,
  BrowserRouter,
  useParams,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "../components/HomeComponents/Home";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import Contact from "../components/ContactForm/Contact";
import About from "../components/AboutComponents/About";
import Latest from "../components/LatestComponents/Latest";
import Event from "../components/EventComponents/Event";

const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    const validLangs = ["en", "de", "al"];
    if (lang && validLangs.includes(lang.toLowerCase())) {
      i18n.changeLanguage(lang.toLowerCase());
    } else {
      i18n.changeLanguage("de");
      <Navigate to="/de" />;
    }
  }, [lang, i18n]);

  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/de" replace />} />

        <Route
          path="/:lang"
          element={
            <LanguageWrapper>
              <Home />
            </LanguageWrapper>
          }
        />
        <Route
          path="/:lang/contact"
          element={
            <LanguageWrapper>
              <Contact />
            </LanguageWrapper>
          }
        />
        <Route
          path="/:lang/about"
          element={
            <LanguageWrapper>
              <About />
            </LanguageWrapper>
          }
        />
        <Route
          path="/:lang/latest"
          element={
            <LanguageWrapper>
              <Latest />
            </LanguageWrapper>
          }
        />
        <Route
          path="/:lang/events"
          element={
            <LanguageWrapper>
              <Event />
            </LanguageWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
