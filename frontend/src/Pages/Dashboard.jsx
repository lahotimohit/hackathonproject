// Dashboard.js
import React from "react";
import { useRecoilValue } from "recoil";
import session from "../atoms/Session";

const Dashboard = () => {
  const patient = useRecoilValue(session);
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full ">
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        <div className="mb-4">
          <p className="text-lg font-semibold">
            Welcome back, {patient.first_name}!
          </p>
          <p className="text-gray-600">
            You are logged in as a {patient.role}.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Patient Appointments</h3>
            {/* Include component to display patient appointments */}
            <p className="text-gray-600 mb-4">
              Display upcoming appointments, allow for scheduling, etc.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Doctor Availability</h3>
            {/* Include component to display doctor availability */}
            <p className="text-gray-600 mb-4">
              Display doctors' schedules, allow for availability updates, etc.
            </p>
          </div>
          {/* Include additional components as needed */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
