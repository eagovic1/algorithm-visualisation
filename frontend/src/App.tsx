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

enum InstructionType {
  TAG = "tag",
  SWAP = "swap",
  COMPARE = "compare",
  ASSIGN = "assign",
}

interface Instruction {
  type: InstructionType;
  clear: boolean;
  operands: number[];
  description: string;
}

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
        <Route path="/comparison" element={<HomePage />} /> {}
        <Route path="/notauthorized" element={<NotAuthorized />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
