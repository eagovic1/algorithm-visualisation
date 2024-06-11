import "./App.css";
import React, { useState, useEffect } from "react";
import SortingArray from "./components/SortingArray/SortingArray";
import HomePage from "./pages/HomePage";
import ArrayInputPage from "./pages/ArrayInputPage";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotAuthorized from "./pages/NotAuthorizedPage";
import NotFoundPage from "./pages/NotFoundPage";

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
        <Route path="/visualisation" element={<HomePage />} /> {}
        <Route path="/comparison" element={<HomePage />} /> {}
        <Route path="/notauthorized" element={<NotAuthorized />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
