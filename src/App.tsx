import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Result from './components/Result/Result'
import Footer from './components/Footer/Footer'
import "./App.css"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App