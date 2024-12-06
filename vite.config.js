import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Bind server to all IPs
    port: 5173, // Optional: Specify a port (default is 5173)
  },
});
