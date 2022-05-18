import { MyRequest } from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";

const myRequestInstance = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  intercepotors: {
    requestInterceptor(config) {
      //请求成功拦截器，验证token
      const token = ""; //例如可以从localStorge获取token
      if (token && config.headers && config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    requestInterceptorCatch(err) {
      //请求失败拦截器
      return err;
    },
    responseInterceptor(res) {
      //响应成功拦截器
      const result = res.data;
      return result;
    },
    responseInterceptorCatch(err) {
      //响应失败拦截器
      if (err.response.status === 404) {
        console.log("404.");
      }
      return err;
    }
  }
});

export { myRequestInstance };
