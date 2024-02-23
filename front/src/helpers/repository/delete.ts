import { api } from './api';
import { ResponseAPI, axiosResponseData, resolveError } from './utils';

export async function deleteById<TResponse>(
  uri: string,
  id: string,
): ResponseAPI<TResponse> {
  return new Promise((resolve) => {
    api
      .delete(`${uri}/${id}`)
      .then((response) => {
        resolve(axiosResponseData<TResponse>(response));
      })
      .catch((error) => resolveError(error, resolve));
  });
}
