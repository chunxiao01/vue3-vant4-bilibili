/**
 * 定义axios基本配置不同的开发环境
 * axios.baseURL
 * axios.timeout
 */
let BASE_URL = "";
const TIME_OUT = 10000;
if (process.env.NODE_ENV === "development") {
  //开发环境
  BASE_URL = "/api";
} else if (process.env.NODE_ENV === "production") {
  //生成环境
  BASE_URL = "/api";
} else {
  //测试环境
  BASE_URL = "/api";
}

export { BASE_URL, TIME_OUT };
