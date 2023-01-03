import { useMutation, useQuery } from '@tanstack/react-query';
import { deletePost, getPostList, PostKeys } from '../api/post/api';
import usePagination from './usePagination';
import { Post } from '../models/Post';

export default function usePost() {
  const { page, rowsPerPage } = usePagination();

  const { data = { posts: [], count: 0 }, isLoading } = useQuery({
      queryKey: [PostKeys.list, page, rowsPerPage],
      queryFn: () => getPostList(page, rowsPerPage),
      keepPreviousData: true,
  })

  const deleteMutation = useMutation((post: Post) => deletePost(post));

  return { data, isLoading, deleteMutation }
}
