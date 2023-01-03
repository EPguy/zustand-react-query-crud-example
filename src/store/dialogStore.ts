import create from 'zustand';

type DialogState = {
  awaitingPromise: {
    resolve?: (input: string) => void;
    reject?: () => void;
  },
  title: string,
  body: string,
  label: string,
  isOpen: boolean,
  open: (title: string, body: string, label: string) => Promise<string>,
  close: () => void,
  confirm: (input: string) => void,
}

export const useDialogStore = create<DialogState>((set, get) => ({
  awaitingPromise: {},
  isOpen: false,
  title: '',
  body: '',
  label: '',
  open: (title: string, body: string, label: string) => {
    set({ title, body, label, isOpen: true });
    return new Promise<string>((resolve, reject) => {
      set({ awaitingPromise: { resolve, reject } });
    })
  },
  close: () => set({ isOpen: false }),
  confirm: (input: string) => {
    get().awaitingPromise?.resolve?.(input);
    set({ isOpen: false });
  }
}))
