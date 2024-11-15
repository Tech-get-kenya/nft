import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import ExplorePage from "./pages/explore";
import ProductDetailPage from "./pages/ProductDetailPage";

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/explore" element={<ExplorePage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product-detail" element={<ProductDetailPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
