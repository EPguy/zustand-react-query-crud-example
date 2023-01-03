import { createBrowserRouter, Outlet } from "react-router-dom";
import PostListPage from '../pages/PostListPage/PostListPage';
import DescriptionAlert from '../components/Alert/DescriptionAlert/DescriptionAlert';
import ConfirmDialog from '../components/dialog/PasswordDialog/ConfirmDialog';

const Router = () => createBrowserRouter(
  [{
    path: "/",
    element: <>
      <DescriptionAlert />
      <ConfirmDialog />
      <Outlet />
    </>,
    children: [{
      path: "/",
      element: <PostListPage/>
    }]
  }]
)

export default Router;
