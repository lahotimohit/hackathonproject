import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const DoctorCard = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [appError, setAppError] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    specialities: "",
  });
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/doctor/signup",
        data
      );
      console.log(response.data.message);
      localStorage.setItem("auth-token", response.data.token);
      localStorage.setItem("doctor-id", response.data.doctorId);
      navigate("/otp");
    } catch (error) {
      console.error("Error submitting form:", error.response.data.error);
      setAppError(
        Object.values(JSON.parse(Object.values(error.response.data)[0]))[0][0]
          .message
      );
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {appError && (
        <h4 className="bg-red-300 text-red-700 px-2 py-4">{appError}</h4>
      )}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
          {...register("first_name")}
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          placeholder="Enter your first name"
          onChange={handleChange}
          value={formData.first_name}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Last Name
        </label>
        <input
          {...register("last_name")}
          type="text"
          value={formData.last_name}
          onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          placeholder="Enter your email address"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          {...register("username")}
          type="text"
          value={formData.username}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          placeholder="Enter your password"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Speicialities
        </label>
        <input
          {...register("specialities")}
          type="text"
          value={formData.specialities}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          placeholder="Enter your last name"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white rounded-md py-2 font-medium hover:bg-blue-700"
      >
        Signup
      </button>
    </form>
  );
};

export default DoctorCard;
