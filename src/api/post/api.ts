import axios from 'axios';
import { properties } from '../../properties';
import { PostListResponse } from '../../models/response/PostListResponse';

export const PostKeys = {
  list: ["posts"] as const,
}

export const getPostList = async (page: number, rowsPerPage: number): Promise<PostListResponse> => {
  const result = await axios.get(properties.apiDomain + `post?page=${page}&rowsPerPage=${rowsPerPage}`);
  return result.data.data;
}
