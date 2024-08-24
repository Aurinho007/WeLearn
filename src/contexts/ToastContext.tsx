import { FC, ReactNode, createContext, useContext, useState } from "react";
import Toast from "../components/Toast";
import { ToastType } from "../components/Toast/interface";
import { EXPIRED_TOKEN_ERROR } from "../service/api";
import { useUser } from "./UserContext";

interface ToastContextProps {
  showToast: (message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState({ visible: false, message: "", type: "succeso" as ToastType });

  const { logout } = useUser();

  const showToast = (message: string, type: ToastType) => {
    setToast({ visible: true, message, type });

    if(message === EXPIRED_TOKEN_ERROR){
      logout();
    }

    setTimeout(() => {
      setToast((prevToast) => ({ ...prevToast, visible: false }));
    }, 3500); 
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.visible && <Toast message={toast.message} type={toast.type} />}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
