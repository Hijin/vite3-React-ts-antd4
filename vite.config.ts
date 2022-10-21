import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
const isProduction = process.env.NODE_ENV === 'production'
console.log(process.env.NODE_ENV === 'production');

export default defineConfig({
  // base:isProduction?'/researchpc/':'/',
  plugins: [react()],
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src/'),
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,  //注意，这一句是在less对象中，写在外边不起作用
        // modifyVars: { //在这里进行主题的修改，参考官方配置属性
        //   '@primary-color': '#1DA57A',
        // },
      }
    }
  },
})
