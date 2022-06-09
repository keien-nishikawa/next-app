import { ErrorInfo } from '@/errors/ErrorInfo';
import { Post } from '@/infrastructure/entity/post';

export interface PostRepository {
  getPosts(): Promise<PostModel[] | ErrorInfo>;
  getPost(e: FetchData): Promise<PostModel[] | ErrorInfo>;
}
export type FetchData = {
  id: string;
};
export type PostModel = Post;
