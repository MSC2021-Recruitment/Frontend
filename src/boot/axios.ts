import { boot } from 'quasar/wrappers';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create();

export interface CommonResponse {
  code: number;
  data: unknown;
  msg: string;
}

interface ExtractNewTokenHeaders {
  'new-token': string;
  [key: string]: string;
}

export default boot(({ app }) => {
  //请求拦截器
  api.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => {
      const token = localStorage.getItem('token')?.toString();
      if (token)
        config.headers = { Authorization: token ? 'Bearer ' + token : '' };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //响应拦截器
  api.interceptors.response.use(
    (
      response: AxiosResponse<CommonResponse>
    ): AxiosResponse<CommonResponse> => {
      if (response.data.code === 1 || response.data.code === 2)
        localStorage.removeItem('token');
      const headers: ExtractNewTokenHeaders =
        response.headers as ExtractNewTokenHeaders;
      console.log(headers);
      if (headers['new-token'])
        localStorage.setItem('token', headers['new-token']);
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
