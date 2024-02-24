import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./component/common/Navbar";
import ContactUs from "./Pages/ContactUs";
import Dashboard from "./Pages/Dashboard";
import Error from "./Pages/Error";
import OTPVerification from "./Pages/OTPVerification";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/otp" element={<OTPVerification />} />
        {/* Make them in protected routes */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Default Route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
