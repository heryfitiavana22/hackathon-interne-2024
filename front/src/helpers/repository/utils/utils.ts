import { AxiosResponse } from 'axios';
import { toast } from 'sonner';

export function getContentType<T>(data: T) {
  return data instanceof FormData ? 'multipart/form-data' : 'application/json';
}

export type ResponseAPI<T> = Promise<
  Pick<AxiosResponse, 'status' | 'headers' | 'statusText'> & {
    data: T;
    count?: number;
  }
>;

export function axiosResponseData<T>(
  response: Pick<AxiosResponse, 'status' | 'headers' | 'statusText' | 'data'>,
) {
  return {
    ...response,
    data: response.data.data as T,
    count: response.data.count,
    statusText: response.data?.message || response.statusText,
  };
}

export function resolveError(error: any, resolve: any) {
  if (Object.keys(error).length == 0) {
    toast.error('Serveur non lance');
  }

  resolve(axiosResponseData<null>(error.response));
}
