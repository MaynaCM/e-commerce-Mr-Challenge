import { BrowserRouter, Route, Routes } from "react-router-dom";
import WomenCategoryPage from "@/pages/womenCategory.page";
import { HomePage } from "../pages/home.page";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<WomenCategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
