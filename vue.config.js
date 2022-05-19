const path = require("path")

const { defineConfig } = require("@vue/cli-service")

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    //配置别名
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("assets", "@/assets")
      .set("common", "@/common")
      .set("components", "@/components")
      .set("network", "@/network")
      .set("views", "@/views")
  },
  devServer: {
    proxy: {
      "/api": {
        //代理 访问接口，仅用于本地测试
        target: "https://api.bilibili.com/x/web-interface",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  }
})
