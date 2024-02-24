// About.js
import React from "react";
// import doctorImage from "./doctor.svg"; // Import doctor image

const About = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-2/3 flex items-center flex-col">
        <h2 className="text-3xl font-bold mb-4">About Our L'hospital App</h2>
        <div className="flex flex-col gap-10 md:flex-row justify-between items-center">
          <div className="md:w-1/3  mb-4 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Doctor"
              className="w-1/2 h-1/2 md:w-auto rounded-full"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 md:pl-4">
            <p className="text-gray-600 mb-4">
              Our hospital app provides a convenient platform for patients to
              book appointments with doctors for their illnesses. Whether you
              need a routine checkup or have a specific health concern, our app
              makes it easy to find and schedule appointments with qualified
              doctors.
            </p>
            <p className="text-gray-600 mb-4">
              For doctors, our app offers the opportunity to connect with new
              patients and grow their practice. By creating a profile on our
              platform, doctors can showcase their expertise and availability,
              making it simple for patients to find and book appointments with
              them.
            </p>
            <p className="text-gray-600 mb-4">
              With our user-friendly interface and comprehensive features, we
              strive to make the healthcare experience seamless and accessible
              for both patients and doctors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
