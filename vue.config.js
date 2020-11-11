module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://lin007.cn:1996', //目标路径，别忘了加http和端口号
          changeOrigin: true, //是否跨域
          ws: true,
          pathRewrite: {
            // '^/api': '/' //重写路径
          }
        }
      }
    }
  };