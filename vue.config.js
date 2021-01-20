module.exports = {
    devServer: {
        port: 8080, // 端口号配置
        proxy: {
            /*通用接口代理*/
            "/api": {
                target: "http://192.168.0.191:9084",
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
