import { useAlertStore } from '../store/alertStore';

export default function usePagination() {
  const {isOpen, type, title, body, open, close} = useAlertStore(
    (state) => ({
      isOpen: state.isOpen, type: state.type,
      title: state.title, body: state.body,
      open: state.open, close: state.close,
    }),
  );

  return { isOpen, type, title, body, open, close };
}
