import create from 'zustand';
import { AlertTypeEnum } from '../enum/AlertTypeEnum';

type AlertState = {
  isOpen: boolean,
  type: AlertTypeEnum,
  title: string,
  body: string,
  open: () => void,
  close: () => void,
}

export const useAlertStore = create<AlertState>((set) => ({
  isOpen: false,
  type: AlertTypeEnum.SUCCESS,
  title: '',
  body: '',
  open: () => set(() => ({ isOpen: true })),
  close: () => set(() => ({ isOpen: false })),
}))
