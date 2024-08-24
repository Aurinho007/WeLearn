export interface IToast {
  message: string,
  type: ToastType
}

export type ToastType = "success" | "info" | "error" | "warning";