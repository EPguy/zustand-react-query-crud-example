import {createBrowserRouter} from "react-router-dom";
import PostListPage from '../pages/PostListPage/PostListPage';

const Router = () => createBrowserRouter(
  [{
    path: "/",
    element: <>
      <PostListPage/>
    </>
  }]
)

export default Router;
