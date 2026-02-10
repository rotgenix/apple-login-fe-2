import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["overrational-dylan-longitudinally.ngrok-free.dev"],
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:4000",
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // }
  },
});
