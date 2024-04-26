import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Logout() {
  const { logoutUser, setuserdata } = useAuth();
  useEffect(() => {
    logoutUser();
    setuserdata("");
  }, [logoutUser]);

  return <Navigate to="/Login" />;
}

export default Logout;
