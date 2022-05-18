import type { AxiosRequestConfig, AxiosResponse } from "axios";
/**
 * 自定义axios拦截器MyRequestInterceptors对象ts类型
 * 拦截器都是函数
 */

export interface MyRequestInterceptors {
  //请求成功拦截器
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  //请求失败拦截器
  requestInterceptorCatch?: (err: any) => any;
  //响应成功拦截器
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
  //响应失败拦截器
  responseInterceptorCatch?: (err: any) => any;
}

/**
 * 自定义axios实例config配置对象ts类型MyrequsetConfig
 * MyrequsetConfig继承于axios实例config类型AxiosRequestConfig
 * MyrequsetConfig扩展拦截器
 */
export interface MyrequsetConfig extends AxiosRequestConfig {
  intercepotors?: MyRequestInterceptors;
}
