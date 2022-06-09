import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../entryPoint';
import { FetchData, PostModel, PostRepository } from '@/infrastructure/interface/PostRepository';
import { ErrorInfo } from '@/errors/ErrorInfo';

export class PostRepositoryImpl implements PostRepository {
  async getPosts(): Promise<PostModel[] | ErrorInfo> {
    let err: null | ErrorInfo = null;
    const options: AxiosRequestConfig = {
      url: BASE_URL,
      method: 'GET',
    };

    const result: PostModel[] = await axios(options)
      .then((results) => results.data)
      .catch((e: ErrorInfo) => (err = e));

    if (err !== null) return err;
    return result;
  }
  async getPost(e: FetchData): Promise<PostModel[] | ErrorInfo> {
    let err: null | ErrorInfo = null;
    const options: AxiosRequestConfig = {
      url: BASE_URL,
      method: 'GET',
      params: { id: e.id },
    };

    const result: PostModel[] = await axios(options)
      .then((results) => results.data)
      .catch((e: ErrorInfo) => (err = e));

    if (err !== null) return err;
    return result;
  }
}
