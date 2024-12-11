import {
  Routes,
  Route,
  BrowserRouter,
  useParams,
  Navigate,
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

function App() {
  return (
    <div>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Header />
          <Routes>
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
            <Route path="/" element={<Navigate to="/de" replace />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/latest" element={<Latest />} />
            <Route path="/:lang" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </I18nextProvider>
    </div>
  );
}

export default App;
