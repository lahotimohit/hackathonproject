// ErrorPage.js
import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";

const Error = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl">
        <RiErrorWarningFill className="text-red-500 text-5xl mb-4" />
        <h2 className="text-3xl font-bold mb-4">Not Found</h2>
        <p className="text-gray-600">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default Error;
