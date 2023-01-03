import axios, { AxiosInstance } from 'axios';
import { properties } from '../properties';
import { AlertTypeEnum } from '../enum/AlertTypeEnum';
import { useAlertStore } from '../store/alertStore';

export const createInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: properties.apiDomain,
    timeout: 15000,
  })

  instance.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    const open = useAlertStore.getState().open;
    open(AlertTypeEnum.ERROR, 'Error', error.message);
    return Promise.reject(error);
  })

  return instance;
}
