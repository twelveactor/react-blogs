const path = require('path')

const resolve = dir => path.resolve(__dirname , dir)


module.exports = {
  reactStrictMode: true,
  webpack:{
    alias:{
      '@':resolve('src')
    }
  }
};