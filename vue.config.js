const path = require("path")
// function resolve(dir) {
//   return path.join(__dirname, dir);
// }
const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true, //开启运行时编译
  chainWebpack: (config) => {
    //配置别名
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("assets", "@/assets")
      .set("common", "@/common")
      .set("components", "@/components")
      .set("network", "@/network")
      .set("views", "@/views")
  }
})
