import Axios from "axios";
import { PostsResponse } from "../../types/Api";
import { PostType } from "../../types/Post";

const API_URL = "http://localhost:3001";

export type GetPostOptionsProps = {
  page: number;
  limit?: number;
};

export type GetPostOptions = {
  page: number;
  limit: number;
};

type GetPosts = (options: GetPostOptionsProps) => Promise<[Array<PostType>, GetPostOptions]>;

export const getPosts: GetPosts = async (options) => {
  const { page, limit } = options;
  const _options: GetPostOptions = {
    ...options,
    page,
    limit: limit || 15,
  };
  const { page: _page, limit: _limit } = _options;
  const response = await Axios.get(`${API_URL}/posts?_sort=date&_order=desc&_limit=${_limit}&_page=${_page}`);
  const data: PostsResponse = await response.data;
  return [data, _options];
};
