import create from 'zustand';

type PaginationState = {
  page: number,
  rowsPerPage: number,
  setPage: (page: number) => void,
  setRowsPerPage: (rowsPerPage: number) => void,
}

export const usePaginationStore = create<PaginationState>((set) => ({
  page: 0,
  rowsPerPage: 5,
  setPage: (page: number) => set(() => ({ page: page })),
  setRowsPerPage: (rowsPerPage: number) => set(() => ({ rowsPerPage: rowsPerPage })),
}))
