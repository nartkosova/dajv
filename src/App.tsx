import {
  Routes,
  Route,
  BrowserRouter,
  useParams,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/HomeComponents/Home";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import "./i18n";
import { I18nextProvider, useTranslation } from "react-i18next";
import Contact from "./components/ContactForm/Contact";
import i18n from "./i18n";
import About from "./components/AboutComponents/About";
import Latest from "./components/LatestComponents/Latest";
import Event from "./components/EventComponents/Event";
import NewsPage from "./components/LatestComponents/NewsPage";
import EventsPage from "./components/EventComponents/EventsPage";

const validLangs = ["en", "de", "al"];

const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang && validLangs.includes(lang.toLowerCase())) {
      i18n.changeLanguage(lang.toLowerCase());
    } else {
      // If invalid language, default to German
      i18n.changeLanguage("de");
      navigate("/de", { replace: true });
    }
  }, [lang, i18n, navigate]);

  return <>{children}</>;
};

function App() {
  return (
    <div>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* Redirect root to default language */}
            <Route path="/" element={<Navigate to="/de" replace />} />

            {/* Language-specific routes */}
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
              path="/:lang/latest/:title"
              element={
                <LanguageWrapper>
                  <NewsPage />
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
            <Route
              path="/:lang/events/:title"
              element={
                <LanguageWrapper>
                  <EventsPage />
                </LanguageWrapper>
              }
            />
            {/* Fallback for any invalid route */}
            <Route path="*" element={<Navigate to="/de" replace />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </I18nextProvider>
    </div>
  );
}

export default App;
