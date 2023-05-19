import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@pages": `${path.resolve(__dirname, "./src/pages/")}`,
      "@services": `${path.resolve(__dirname, "./src/services/")}`,
      "@hooks": `${path.resolve(__dirname, "./src/utils/hooks")}`,
      "@icons": `${path.resolve(__dirname, "./src/assets/icons")}`,
      "@images": `${path.resolve(__dirname, "./src/assets/images")}`,
    }
  }
})
