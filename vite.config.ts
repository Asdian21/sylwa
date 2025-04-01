import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["ace0-84-54-86-149.ngrok-free.app"], // Разрешает все поддомены ngrok
    // или укажите конкретный хост:
    // allowedHosts: ['ace0-84-54-86-149.ngrok-free.app']
  },
});
