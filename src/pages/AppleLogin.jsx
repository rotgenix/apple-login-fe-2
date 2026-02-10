
import React from "react";
import { BE_URL } from "../App";

export default function AppleLogin() {
    // const BE_URL = import.meta.env.VITE_BE_URL || "http://localhost:4000";

    const startApple = () => {
        // Redirect to backend directly (no Vite proxy)
        window.location.href = `${BE_URL}/auth/apple/start`;
    };

    return (
        <div style={{ padding: 24 }}>
            <h2>Apple Login</h2>
            <button onClick={startApple}>Continue with Apple</button>
        </div>
    );
}
