import { useQuery } from '@tanstack/react-query';
import { getPostList, PostKeys } from '../api/post/api';
import usePagination from './usePagination';

export default function usePost() {
  const { page, rowsPerPage } = usePagination();

  const { data = {
    posts: [],
    count: 0,
  }, isLoading } = useQuery(
    PostKeys.list,
    () => getPostList(page, rowsPerPage),
  )

  return { data, isLoading }
}
