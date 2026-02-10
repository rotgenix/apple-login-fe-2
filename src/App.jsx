import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AppleLogin from "./pages/AppleLogin.jsx";
import AppleCallback from "./pages/AppleCallback.jsx";
import axios from "axios";

export const BE_URL = "https://apple-login-be-2.onrender.com";
// export const BE_URL = "http://localhost:4000";

export default function App() {
  useEffect(() => {
    async function run() {
      const res = await axios.get(`${BE_URL}`);
      console.log(res);
    }
    run();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<AppleLogin />} />
      <Route path="/auth/apple/callback" element={<AppleCallback />} />
    </Routes>
  );
}
