import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import Home from "./components/HomeComponents/Home";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import "./i18n";
import { I18nextProvider, useTranslation } from "react-i18next";
import Contact from "./components/ContactForm/Contact";

function App() {
  const { t, i18n } = useTranslation();

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path ="/contact" element={<Contact/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </I18nextProvider>
    </div>
  );
}

export default App;
