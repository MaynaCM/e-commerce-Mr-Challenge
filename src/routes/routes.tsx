import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/about.page";
import { HomePage } from "../pages/home.page";

export default function AppRoutes() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
