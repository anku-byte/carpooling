import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

const Login = () => (
  <div className="flex flex-1 items-center justify-center pt-24">
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl">
      <h2 className="text-2xl font-light">Login coming soon!</h2>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-linear-to-br
 from-[#1a1a2e] to-[#000719] text-white">

        {/* NAVBAR */}
        <nav className="fixed top-0 w-full bg-[#350a72]/80 backdrop-blur-lg border-b border-white/10 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            <h1 className="text-3xl font-bold">co ride</h1>

            <div className="flex gap-6">
              <Link to="/">Home</Link>
              <a href="/#about">About</a>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </nav>

        {/* MAIN */}
        <main className="flex-1 pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="text-center py-10 bg-black/30">
          <h3 className="text-xl mb-2">Contact Us</h3>
          <p>Email: support@coride.com</p>
          <p>&copy; 2026 CoRide. All rights reserved.</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;
