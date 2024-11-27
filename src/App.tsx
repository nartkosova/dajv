import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import Home from "./components/HomeComponents/Home";
import Header from "./Shared/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
