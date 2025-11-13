import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tsconfigPaths(),
  ],
   resolve: {
    alias: {
      '@chakra-ui/react/dist/esm/index.js': '@chakra-ui/react/dist/esm/index.js',
      'forwardRef': 'react',
    },
  },
})
