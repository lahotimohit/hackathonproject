import React, { useState } from "react";
import OtpInput from "react-otp-input";
import axios from "axios";

export default function App() {
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");

  const handleChange = (otp) => {
    setOTP(otp);
  };

  const handleOtpSubmit = async () => {
    if (otp.length !== 6) {
      return;
    }
    try {
      const resp = await axios.post("http://localhost:8000/api/checkOtp", {
        otp: otp,
      });

      console.log(resp.data.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white flex flex-col gap-5 items-center p-8 rounded shadow-md w-full md:w-2/3 lg:w-1/3 ">
        <h2 className="text-3xl font-bold mb-4">OTP Verification</h2>
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          renderSeparator={<span className="mx-1">-</span>}
          renderInput={(props) => (
            <input
              {...props}
              className="bg-gray-300 text-black w-40 h-12 text-2xl border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          )}
        />

        <button
          type="submit"
          onClick={handleOtpSubmit}
          className="bg-blue-500 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-600"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}
