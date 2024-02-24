// Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Welcome to Our Website</h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
          magna eu metus rutrum faucibus.
        </p>
        <div className="flex justify-between">
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 font-medium"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 font-medium"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
