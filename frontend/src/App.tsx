import './App.css'
import React, { useState, useEffect } from 'react'
import SortingArray from './components/SortingArray/SortingArray'
import HomePage from './pages/HomePage'
import ArrayInputPage from './pages/ArrayInputPage'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'

enum InstructionType {
  TAG = "tag",
  SWAP = "swap",
  COMPARE = "compare",
  ASSIGN = "assign"
}

interface Instruction {
  type: InstructionType,
  clear: boolean,
  operands: number[],
  description: string
}

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/visualisation" element={<ArrayInputPage />} /> {}
      <Route path="/comparison" element={<HomePage />} /> {}
    </Routes>
  </>
  )
}

export default App
