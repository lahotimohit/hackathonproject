import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const resp = await axios.post('http://localhost:8000/api/user/login', {
        username: data.username, 
        password: data.password
      });
      // console.log(resp.data);
      if (resp.data.authenticated === false) {
        toast.error('Check Your Credentials');
        return;
      }
      localStorage.setItem("auth-token", resp.data.token);
      localStorage.setItem("user-id", resp.data.userId);
      toast.success("Logged In Successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }

    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              {...register("username")}
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              placeholder="Enter your email username"
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
          <button
            type="submit"
            className="btn w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
