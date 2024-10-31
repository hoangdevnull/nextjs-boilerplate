import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  // if (token) {
  //   config.headers.set('Authorization', `Bearer ${token}`);
  // }
  return config;
};

export const successInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

export const errorInterceptor = async (error: AxiosError): Promise<void> => {};
