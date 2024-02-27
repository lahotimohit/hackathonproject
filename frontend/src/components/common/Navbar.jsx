// Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHospital } from "react-icons/fa";
import { useRecoilState, useRecoilValue } from "recoil";
import session from "../../atoms/Session";

// import logo from "./logo.png"; // Replace with your logo path

const Navbar = () => {
  const [userSession, setUserSession] = useRecoilState(session);
  console.log(userSession);
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("user-id");
    setUserSession({
      first_name: "",
      last_name: "",
      email: "string",
      username: "",
      role: "",
    });
    navigate("/signup");
  };

  return (
    <div className="w-full bg-blue-500 flex justify-center">
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
        {userSession.username === "" ? (
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
          <div className="dropdown dropdown-end">
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${userSession.first_name} ${userSession.last_name}`}
              alt="avatar"
              width={40}
              height={40}
              tabIndex={0}
              className="rounded-full btn btn-circle"
            />
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow rounded-box w-52 mt-4 bg-white"
            >
              <li>
                <button className="btn btn-ghost">Account Settings</button>
              </li>
              <li>
                <button onClick={logOutHandler} className="btn btn-ghost">
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
