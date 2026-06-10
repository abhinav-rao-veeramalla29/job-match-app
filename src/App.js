import "./App.css";
import { Routes, Route } from "react-router-dom";
import JobDetails from "./pages/JobDetails";
import ApplicationForm from "./pages/ApplicationForm";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Jobs from "./pages/jobs";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/job/:id" element={<JobDetails />} />
                <Route path="/apply" element={<ApplicationForm />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;