module.exports={
    devServer:{
        port:'8080',
        proxy: {
            '/jd': {
              target: 'http://10.36.135.29:9999',
              ws: true,
              changeOrigin: true
            },
          }
    }
    
}