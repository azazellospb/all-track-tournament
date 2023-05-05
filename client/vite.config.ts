import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import eslint from "vite-plugin-eslint"
import dynamicImport from 'vite-plugin-dynamic-import'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), dynamicImport()],
  // esbuild: {
  //   jsxInject: `import React from 'react'`,
  // },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
    }
  }
})
