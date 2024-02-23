import { api } from './api';
import { ResponseAPI, axiosResponseData, resolveError } from './utils';

export function getData<TResponse>(
  uri: string,
  query = '',
): ResponseAPI<TResponse> {
  let path = uri;
  if (query) path += `?${query}`;
  return new Promise((resolve) => {
    api
      .get(path)
      .then((response) => {
        resolve(axiosResponseData<TResponse>(response));
      })
      .catch((error) => resolveError(error, resolve));
  });
}

export async function getDataById<TResponse>(
  uri: string,
  id: string,
  query = '',
): ResponseAPI<TResponse> {
  let path = `${uri}/${id}`;
  if (query) path += `?${query}`;
  return new Promise((resolve) => {
    api
      .get(path)
      .then((response) => {
        resolve(axiosResponseData<TResponse>(response));
      })
      .catch((error) => resolveError(error, resolve));
  });
}
