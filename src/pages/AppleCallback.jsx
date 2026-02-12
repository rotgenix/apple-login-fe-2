// 2
import React, { useEffect, useState } from "react";
import { BE_URL } from "../App";

export default function AppleCallback() {
    const [status, setStatus] = useState("Reading callback...");
    // const BE_URL = import.meta.env.VITE_BE_URL || "http://localhost:4000";

    useEffect(() => {
        (async () => {
            try {
                const url = new URL(window.location.href);
                const code = url.searchParams.get("code");
                const state = url.searchParams.get("state");

                if (!code) throw new Error("No code in callback URL");
                if (!state) throw new Error("No state in callback URL");

                const expectedState = sessionStorage.getItem("apple_oauth_state");
                if (expectedState && expectedState !== state) {
                    throw new Error("Invalid state (CSRF check failed)");
                }

                setStatus("Completing login on backend...");

                const res = await fetch(`${BE_URL}/api/apple/auth/web/complete`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    // credentials: "include",
                    body: JSON.stringify({ code, state }),
                });

                const data = await res.json();
                if (!res.ok) throw new Error(data?.message || "Login failed");

                // Store access token (in memory / local storage depending on your app)
                console.log("Login success:", data);
                setStatus("✅ Logged in! Check console.");
            } catch (e) {
                console.error(e);
                setStatus("❌ " + (e.message || "Failed"));
            }
        })();
    }, []);

    return (
        <div style={{ padding: 24 }}>
            <h2>Apple Callback</h2>
            <p>{status}</p>
        </div>
    );
}
