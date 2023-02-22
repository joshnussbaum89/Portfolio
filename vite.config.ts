import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sucess: resolve(__dirname, 'success.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        post: resolve(__dirname, 'blog/sample-post.html'),
      },
    },
  },
})
