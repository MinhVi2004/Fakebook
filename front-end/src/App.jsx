import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import signin from "./Page/signin";
import signup from "./Page/signup";
import Profile from "./Page/Profile";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<signin />} />
          <Route path="/signin" element={<signin />} />
          <Route path="/signup" element={<signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
