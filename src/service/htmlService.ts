import axios, { AxiosResponse } from 'axios';
import Todo from '../models/todo';

class htmlService {
  async post<T>(url: string, data: T): Promise<AxiosResponse<any, any>> {
    const response = await axios.post(url, JSON.stringify(data));
    return response;
  }
  async fetch(url: string) {
    const response = await axios.get(url);

    return response;
  }
}

const service = new htmlService();

export default service;
