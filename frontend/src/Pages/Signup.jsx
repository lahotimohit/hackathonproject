import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit, reset } = useForm();
  const [activeTab, setActiveTab] = useState("Patient");

  const onSubmit = (data) => {
    console.log(data);
    // signup logic
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <div className="mb-4 flex gap-2">
          <button
            className={`flex-1 py-2 text-center rounded-md focus:outline-none ${
              activeTab === "Patient" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("Patient")}
          >
            Patient
          </button>
          <button
            className={`flex-1 py-2 text-center rounded-md focus:outline-none ${
              activeTab === "Doctor" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("Doctor")}
          >
            Doctor
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              {...register("firstName")}
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              {...register("lastName")}
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              {...register("email")}
              type="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              placeholder="Enter your password"
            />
          </div>
          {activeTab === "Doctor" && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Speciality
                </label>
                <input
                  {...register("speciality")}
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                  placeholder="Enter your speciality"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Ratings
                </label>
                <input
                  {...register("ratings")}
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                  placeholder="Enter your rating"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Years of Experience
                </label>
                <input
                  {...register("yearsOfExperience")}
                  type="number"
                  min="0"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                  placeholder="Enter your years of experience"
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 font-medium hover:bg-blue-700"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
