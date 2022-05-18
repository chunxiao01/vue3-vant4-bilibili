import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

/**
 * 自定义axios实例config配置对象ts类型MyrequsetConfig
 * MyrequsetConfig继承于axios实例config类型AxiosRequestConfig
 * MyrequsetConfig扩展拦截器类型是自定义的MyRequestInterceptors
 */
import type { MyRequestInterceptors, MyrequsetConfig } from "./type";

/**
 * 基于axios封装网络请求MyRequestBase，基础功能
 */
class MyRequestBase {
  instance: AxiosInstance; //axios实例
  constructor(config: AxiosRequestConfig) {
    //创建axios实例
    this.instance = axios.create(config);
    //创建拦截器
    this.instance.interceptors.request.use(
      (config) => {
        //请求成功拦截
        return config;
      },
      (err) => {
        //请求失败拦截
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (config) => {
        //响应成功拦截
        return config;
      },
      (err) => {
        //响应失败拦截
        return err;
      }
    );
  }

  //封装request方法
  request(config: AxiosRequestConfig) {
    //调用axios的request方法
    this.instance
      .request(config)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //封装get请求
  get(config: AxiosRequestConfig) {
    this.request({
      ...config,
      method: "GET"
    });
  }

  //封装post请求
  post(config: AxiosRequestConfig) {
    this.request({
      ...config,
      method: "POST"
    });
  }

  //封装delete请求
  delete(config: AxiosRequestConfig) {
    this.request({
      ...config,
      method: "DELETE"
    });
  }

  //封装patch请求
  patch(config: AxiosRequestConfig) {
    this.request({
      ...config,
      method: "PATCH"
    });
  }
}

/**
 * 基于axios封装网路请求MyRequest，包含基础功能和自定义拦截器
 */
class MyRequest {
  instance: AxiosInstance; //axios 实例
  interceptors?: MyRequestInterceptors;
  constructor(config: MyrequsetConfig) {
    this.instance = axios.create(config); //创建axios实例
    this.interceptors = config.intercepotors; //创建自定义intercepotors

    //在axios的请求拦截器上挂载自定义拦截器，
    //自定义拦截器为可选类型
    //可根据实际情况创建MyRequest实例
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );

    //在axios的响应拦截器上挂载自定义拦截器
    //自定义拦截器为可选类型
    //可根据实际情况创建MyRequest实例
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    //在所有MyRequest实例中都存在的axios原生拦截器
    //请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        console.log(err);
      }
    );
    //响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {}
    );
  }

  //封装request方法，返回的是Promise对象
  request(config: MyrequsetConfig) {
    return new Promise((resolve, reject) => {
      //如果request请求包含有自定义拦截器，则config需要处理
      if (config.intercepotors?.requestInterceptor) {
        config = config.intercepotors.requestInterceptor(config);
      }
      this.instance
        .request(config)
        .then((res) => {
          //如果request响应包含有自定义拦截器，则最后的响应结果res需要处理
          if (config.intercepotors?.responseInterceptor) {
            res = config.intercepotors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  //封装get请求
  get(config: MyrequsetConfig) {
    this.request({
      ...config,
      method: "GET"
    });
  }

  //封装post请求
  post(config: MyrequsetConfig) {
    this.request({
      ...config,
      method: "POST"
    });
  }

  //封装delete请求
  delete(config: MyrequsetConfig) {
    this.request({
      ...config,
      method: "DELETE"
    });
  }

  //封装patch请求
  patch(config: MyrequsetConfig) {
    this.request({
      ...config,
      method: "PATCH"
    });
  }
}

export { MyRequestBase, MyRequest };
