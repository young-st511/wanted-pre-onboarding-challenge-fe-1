import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import dns from "dns";
dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "development")
    process.env.BROWSER = loadEnv(mode, process.cwd(), "").BROWSER;

  return {
    plugins: [react()],
    server: {
      open: true,
    },
  };
});
