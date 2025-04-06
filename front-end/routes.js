// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Signin from "./Page/Signin";
import Profile from "./Page/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
