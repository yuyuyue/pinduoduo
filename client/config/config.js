import { resolve } from 'path'


export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'client',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  // disableCSSModules: true,
  // lessLoaderOptions: {
  //   modules: true,
  //   localIdentName: '[name]-[hash:base64:5]'
  // },
  alias: {
    '@': resolve(__dirname, '../src'),
    '@assets': resolve(__dirname, '../src/assets'),
    '@components': resolve(__dirname, '../src/components'),
    '@models': resolve(__dirname, '../src/models'),
    '@pages': resolve(__dirname, '../src/pages'),
    '@service': resolve(__dirname, '../src/service'),
    '@utils': resolve(__dirname, '../src/utils'),
    '@layouts': resolve(__dirname, '../src/layouts'),
    'themes': resolve(__dirname, '../src/themes'),
  },
  theme: "./src/themes/config.js",
  proxy: {
    "/api": {
      target: "http://127.0.0.1:7001",
      changeOrigin: true
    }
  }//重定向
}
