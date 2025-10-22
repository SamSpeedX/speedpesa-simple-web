// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import PaymentPage from './pages/payment'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  )
}
export default App
