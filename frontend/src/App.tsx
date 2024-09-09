import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NotAuthorized from "./pages/NotAuthorizedPage/NotAuthorizedPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SortingInputPage from "./pages/SortingInputPage/SortingInputPage";
import SortingVisualisationPage from "./pages/SortingVisualisationPage/SortingVisualisationPage";
import ComparisonHomePage from "./pages/ComparisonHomePage/ComparisonHomePage";
import ComparisonResultPage from "./pages/ComparisonResultPage/ComparisonResultPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/input/sorting/:algorithmKey" element={<SortingInputPage />} />
        <Route path="/visualisation" element={<HomePage />} /> {}
        <Route path="/visualisation/sorting/:algorithmKey" element={<SortingVisualisationPage />} /> {}
        <Route path="/comparison" element={<ComparisonHomePage />} /> {}
        <Route path="/comparison/result/:algorithmKey/:algorithmKeySec" element={<ComparisonResultPage />} /> {}
        <Route path="/notauthorized" element={<NotAuthorized />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
