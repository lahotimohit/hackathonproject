import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function App() {
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");

  const handleChange = (otp) => {
    setOTP(otp);
  };

  const handleOtpSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="h-[90vh] flex justify-center items-center bg-gray-100">
      <div className="bg-white flex flex-col gap-5 items-center p-8 rounded shadow-md w-full md:w-2/3 lg:w-1/3 ">
        <h2 className="text-3xl font-bold mb-4">OTP Verification</h2>
        <form onSubmit={handleOtpSubmit} className="flex flex-col items-center gap-5">
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            renderSeparator={<span className="mx-1">-</span>}
            renderInput={(props) => (
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text"/>
            )}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-600"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}
