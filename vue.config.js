module.exports = {
    devServer: {
        port: 8080, // 端口号配置
        proxy: {
            "/api": {
                target: "http://192.168.0.197:9080",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    configureWebpack: {
        externals: {
            AMap: "window.AMap",
            AMapUI: "AMapUI"
        }
    },
    lintOnSave: false
};
