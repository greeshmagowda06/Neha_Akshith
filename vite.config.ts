import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro({ preset: "vercel" }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
