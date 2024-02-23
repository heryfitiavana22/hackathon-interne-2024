import { AxiosRequestConfig } from 'axios';
import { api } from './api';
import { ResponseAPI, axiosResponseData, resolveError } from './utils';

export async function updateDataById<TResponse>(
  uri: string,
  id: string,
  data: any,
  config?: AxiosRequestConfig<any>,
): ResponseAPI<TResponse> {
  return new Promise((resolve) => {
    api
      .put(`${uri}/${id}`, data, config)
      .then((response) => {
        resolve(axiosResponseData<TResponse>(response));
      })
      .catch((error) => resolveError(error, resolve));
  });
}
