import {TablePagination, TableRow} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import usePagination from '../../hooks/usePagination';
import usePost from '../../hooks/usePost';


const PostListPagination = () => {
    const { page, rowsPerPage, setPage, setRowsPerPage } = usePagination()
    const { data } = usePost();
    return (
        <TableRow>
            <TablePagination
                width="100%"
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={5}
                count={data.count}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    inputProps: {
                        'aria-label': 'rows per page',
                    },
                    native: true,
                }}
                onPageChange={(_,page) => {setPage(page)}}
                onRowsPerPageChange={(e) => {setRowsPerPage(Number(e.target.value))}}
                ActionsComponent={TablePaginationActions}
            />
        </TableRow>
    )
}
export default PostListPagination;
