// Navbar.js
import React from "react";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import { FaHospital } from "react-icons/fa";

// import logo from "./logo.png"; // Replace with your logo path

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const firstName = "Parteek";
  const lastName = "Sandhu";

  function matchRoute(route) {
    return matchPath({ path: route }, location.pathname);
  }

  return (
    <div className="w-full h-[10vh] bg-blue-500 flex justify-center">
      <nav className="bg-blue-500 p-4 flex justify-between items-center w-11/12">
        {/* Left section */}
        <div className="flex items-center gap-1">
          <FaHospital fontSize={40} className="text-white" />
          <span className="text-white font-semibold text-lg">L'hospital</span>
        </div>

        {/* Middle section */}
        <div className="flex justify-center">
          <Link to="/" className="text-white mr-4 hover:text-blue-300">
            Home
          </Link>
          <Link to="/about" className="text-white mr-4 hover:text-blue-300">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-300">
            Contact Us
          </Link>
        </div>

        {/* Right section */}
        {!matchRoute("/dashboard") ? (
          <div className="flex items-center">
            <Link
              to="/login"
              className="bg-white text-blue-500 hover:bg-blue-100 px-4 py-2 rounded-md mr-4"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-white text-blue-500 hover:bg-blue-100 px-4 py-2 rounded-md"
            >
              Signup
            </Link>
          </div>
        ) : (
          <div className="flex">
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${firstName} ${lastName}`}
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
