import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Page/Login";
import Signin from "./Page/Signin";
import { ToastContainer } from 'react-toastify';

function App() {
     return (
          <>
               <Router>
                    <Routes>
                         <Route path="/" element={<Login />} />
                         <Route path="/login" element={<Login />} />
                         <Route path="/signin" element={<Signin />} />
                    </Routes>
               </Router>
               <ToastContainer  position="top-center" autoClose={2000}/>
          </>
     );
}

export default App;
