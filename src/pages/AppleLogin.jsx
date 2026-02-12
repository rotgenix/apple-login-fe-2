
import React from "react";
import { BE_URL } from "../App";

export default function AppleLogin() {
    // const BE_URL = import.meta.env.VITE_BE_URL || "http://localhost:4000";

    const startApple = async () => {
        // Fetch authorizeUrl so we can store state client-side
        const res = await fetch(`${BE_URL}/api/apple/auth/web`);
        const data = await res.json();
        if (!res.ok || !data?.authorizeUrl || !data?.state) {
            throw new Error("Failed to start Apple login");
        }
        sessionStorage.setItem("apple_oauth_state", data.state);
        window.location.href = data.authorizeUrl;
    };

    return (
        <div style={{ padding: 24 }}>
            <h2>Apple Login</h2>
            <button onClick={startApple}>Continue with Apple</button>
        </div>
    );
}
