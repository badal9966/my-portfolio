import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
// import Login from "./Login";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
// import ErrorBoundary from './ErrorBoundary';


function App() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className="app-container">
            {!isHomePage && <Navigation />}
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/login" element={<Login />} /> */}
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            {!isHomePage && <Footer />}
        </div>
    );
}

export default App;
