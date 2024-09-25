import { useState } from 'react'

import MainPage from "./Home";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
      
    </>
  )
}

export default App
