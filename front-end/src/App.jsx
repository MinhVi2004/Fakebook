import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation  } from "react-router-dom";
import Signin from "./Page/Signin";
import Signup from "./Page/Signup";
import Profile from "./Page/Profile";
import { ToastContainer } from "react-toastify";
import TopBar from "./Page/TopBar";

const AppContent = () => {
     const location = useLocation();
     const hideTopBar = location.pathname === "/signin" || location.pathname === "/signup";
   
     return (
       <>
         {!hideTopBar && <TopBar />}
         <Routes>
           <Route path="/fakebook/" element={<Signin />} />
           <Route path="/fakebook/signin" element={<Signin />} />
           <Route path="/fakebook/signup" element={<Signup />} />
           <Route path="/fakebook/profile" element={<Profile />} />
         </Routes>
       </>
     );
   };


function App() {
     return (
          <Router>
            <AppContent />
            <ToastContainer position="top-center" autoClose={2000} />
          </Router>
        );
}

export default App;
