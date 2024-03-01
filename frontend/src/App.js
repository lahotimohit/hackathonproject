import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Dashboard from "./Pages/Dashboard";
import Error from "./Pages/Error";
import OTPVerification from "./Pages/OTPVerification";
import Room from "./Pages/Room";
import PrivateRoute from "./components/common/PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<OTPVerification />} />
        {/* Make them in protected routes */}
        <Route path="/room/:roomId" element={<Room />} />
        {/* Default Route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
