import { AxiosRequestConfig } from 'axios';
import { api } from './api';
import { ResponseAPI, axiosResponseData, resolveError } from './utils';

export async function createData<TResponse>(
  uri: string,
  data: any,
  config?: AxiosRequestConfig<any>,
): ResponseAPI<TResponse> {
  return new Promise((resolve) => {
    api
      .post(uri, data, config)
      .then((response) => {
        resolve(axiosResponseData<TResponse>(response));
      })
      .catch((error) => resolveError(error, resolve));
  });
}
