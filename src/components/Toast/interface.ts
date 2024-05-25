export interface IToast {
  message: string,
  type: ToastType
}

export type ToastType = 'sucess' | 'info' | 'error' | 'warning';