import React from 'react';
import usePost from '../../hooks/usePost';
import {
  Box, Button,
  Paper, Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PostListHeader from './PostListHeader';
import { Delete, Edit } from '@mui/icons-material';
import PostListPagination from './PostListPagination';
import usePagination from '../../hooks/usePagination';

const PostList = () => {
  const { data, isLoading } = usePost();

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <PostListHeader/>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width="5%">ID</TableCell>
                <TableCell width="20%" align="center">Title</TableCell>
                <TableCell width="50%" align="center">Content</TableCell>
                <TableCell width="10%" align="center">Created</TableCell>
                <TableCell width="15%" align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isLoading && data.posts.map((post) => (
                <TableRow
                  hover={true}
                  sx={{cursor: "pointer"}}
                  key={post.seq}
                  onClick={() => {}}
                >
                  <TableCell component="th" width="5%" scope="row">{post.seq}</TableCell>
                  <TableCell component="th"  width="20%" scope="row" align="center">
                    {post.title}
                  </TableCell>
                  <TableCell align="center" width="60%">{post.content}</TableCell>
                  <TableCell align="center" width="60%">{post.createdDate?.replace("T", " ")}</TableCell>
                  <TableCell align="center" width="15%">
                    <Stack direction="row" justifyContent="center" spacing={1}>
                      <Button size="small" variant="outlined" startIcon={<Edit />} onClick={(e) => {}}>
                        Edit
                      </Button>
                      <Button size="small" color="error" variant="outlined" startIcon={<Delete />}  onClick={(e) => {}}>
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
              <PostListPagination/>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}

export default PostList;
