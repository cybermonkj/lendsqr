import React from "react";
import Usersgeneraldetails from "pages/Usersgeneraldetails";
import Usersshowingfilters from "pages/Usersshowingfilters";
import Dashboard from "pages/Dashboard";
import LogIn from "pages/LogIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usersshowingfilters" element={<Usersshowingfilters />} />
        <Route path="/usersgeneraldetails" element={<Usersgeneraldetails />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
