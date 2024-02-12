import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:{
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true
      }
    }
  },
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: "../custom_cms_back_end/build",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.indexOf("node_modules") !== -1) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
