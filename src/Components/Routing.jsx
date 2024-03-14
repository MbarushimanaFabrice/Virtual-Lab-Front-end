import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
// Students
import Login from "../Components/Students/Login";
import Signup from "../Components/Students/Signup";
import Dashboard from "./Students/Pages/Dashboard";
import Notfound from "./Students/Pages/Notfound";

//END Students


import SchoolLogin from "../Components/School/SchoolLogin";
import SchoolSignup from "../Components/School/SchoolSignup";
import Pricing from "./School/Pricing";

function Routing() {
  return (
    <>
      <Routes>
        {/* Students */}
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard/*" element={<Dashboard />} />
 

        <Route path="/SchoolLogin" element={<SchoolLogin />} />
        <Route path="/SchoolSignup" element={<SchoolSignup />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default Routing;
