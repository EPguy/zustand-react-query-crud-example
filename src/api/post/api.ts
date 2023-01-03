import axios from 'axios';
import { properties } from '../../properties';
import { PostListResponse } from '../../models/response/PostListResponse';
import { Post } from '../../models/Post';
import { createInstance } from '../AxiosInstance';

export const PostKeys = {
  list: ["posts"] as const,
}

export const getPostList = async (page: number, rowsPerPage: number): Promise<PostListResponse> => {
  const result = await createInstance().get(properties.apiDomain + `post?page=${page}&rowsPerPage=${rowsPerPage}`);
  return result.data.data;
}

export const deletePost = async (post: Post): Promise<PostListResponse> => {
  const result = await createInstance().delete(properties.apiDomain + 'post', { data: post });
  return result.data.data;
}
