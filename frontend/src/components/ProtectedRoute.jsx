// src/components/ProtectedRoutes.jsx
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {return setAuth(false);}

    fetch(`${process.env.REACT_APP_API_URL}/events/verify-token`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => setAuth(res.ok))
      .catch(() => {
        sessionStorage.removeItem("authToken");
        setAuth(false);
      });
  }, []);

  if (auth === null) return <div>Loading...</div>;
  return auth ? children : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoutes;