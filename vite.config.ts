import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site URL:
// https://sunpotflower4460-cpu.github.io/liminarium-lab/
export default defineConfig({
  plugins: [react()],
  base: '/liminarium-lab/',
})
