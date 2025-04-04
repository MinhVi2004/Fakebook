import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Page/Login";
import Signin from "./Page/Signin";

function App() {
     return (
          <Router>
               <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signin" element={<Signin />} />
               </Routes>
          </Router>
     );
}

export default App;
