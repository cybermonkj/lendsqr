import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ element: Element }) => {
  const { pathname } = useLocation();
  const apiresponse = localStorage.getItem("apiresponse");

  if (
    !apiresponse &&
    ["/dashboard", "/usersshowingfilters", "/usersgeneraldetails"].includes(
      pathname
    )
  ) {
    return <Navigate to="/" />;
  }
  return <Element />;
};
