import React, { useEffect, useState } from "react";
import PatientCard from "../components/PatientCard";
import DoctorCard from "../components/DoctorCard";
import checkToken from "../utils/checkToken";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Patient");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const token = localStorage.getItem("auth-token");
      const userId = localStorage.getItem("user-id");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const signedIn = await checkToken(token, userId);
        if (signedIn) {
          navigate("/dashboard");
        }
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    init();
  }, [navigate]);

  if (loading) {
    return <h1>Loading......</h1>;
  }

  if (error != null) {
    return <h1>{error.message}</h1>;
  }

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
        {activeTab === "Patient" ? <PatientCard /> : <DoctorCard />}
      </div>
    </div>
  );
};

export default Signup;
