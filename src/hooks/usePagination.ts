import { usePaginationStore } from '../store/paginationStore';

export default function usePagination() {
  const {page, rowsPerPage, setPage, setRowsPerPage} = usePaginationStore(
    (state) => ({
      page: state.page, rowsPerPage: state.rowsPerPage,
      setPage: state.setPage, setRowsPerPage: state.setRowsPerPage
    }),
  );

  return { page, rowsPerPage, setPage, setRowsPerPage };
}
