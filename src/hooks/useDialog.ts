import { useDialogStore } from '../store/dialogStore';
import usePost from './usePost';
import { Post } from '../models/Post';

export default function useDialog() {
  const { title, body, label, isOpen, open, close, confirm } = useDialogStore(
    (state) => ({
      title: state.title, body: state.body, label: state.label,
      isOpen: state.isOpen, open: state.open,
      close: state.close, confirm: state.confirm,
    }),
  );

  const { deleteMutation } = usePost();

  const openPasswordDialog = (post: Post) => {
    open('Confirm Password', 'Please enter the password you used to create this post.', 'password')
      .then((input) => {
        deleteMutation.mutate({
          ...post,
          password: input,
        });
      })
      .catch(() => {

      })
  }

  return { title, body, label, isOpen, openPasswordDialog, close, confirm };
}
