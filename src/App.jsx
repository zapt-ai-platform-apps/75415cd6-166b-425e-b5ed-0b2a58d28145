import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './shared/components/Navbar';
import Footer from './shared/components/Footer';
import Homepage from './modules/core/pages/Homepage';
import Concepts from './modules/investment/pages/Concepts';
import Calculator from './modules/calculator/pages/Calculator';
import Markets from './modules/markets/pages/Markets';
import ZaptBadge from './shared/components/ZaptBadge';
import { ThemeProvider } from './modules/core/context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <Router>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/concepts" element={<Concepts />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/markets" element={<Markets />} />
            </Routes>
          </main>
          <ZaptBadge />
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}