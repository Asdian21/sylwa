import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["fa55-37-110-215-56.ngrok-free.app"], // Разрешает все поддомены ngrok
    // или укажите конкретный хост:
    // allowedHosts: ['8934-95-214-210-114.ngrok-free.app']
  },
});
