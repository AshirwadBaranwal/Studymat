import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import toast from "react-hot-toast";

function Logout() {
  const { logoutUser, setuserdata } = useAuth();
  useEffect(() => {
    logoutUser();
    toast.success("logout successfully");
    setuserdata("");
  }, [logoutUser]);

  return <Navigate to="/Login" />;
}

export default Logout;
