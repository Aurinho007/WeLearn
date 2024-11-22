import React, { createContext, useState, ReactNode } from 'react';
import InputModal, { InputModalProps } from '../components/InputModal';

interface ModalContextType {
  showModal: (props: Omit<InputModalProps, 'resolve'>) => Promise<string | null>;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalData, setModalData] = useState<InputModalProps | null>(null);

  const showModal = (props: Omit<InputModalProps, 'resolve'>): Promise<string | null> => {
    return new Promise((resolve) => {
      setModalData({ ...props, resolve });
    });
  };

  const handleResolve = (value: string | null) => {
    modalData?.resolve(value);
    setModalData(null);
  };

  return (
    <ModalContext.Provider value={{ showModal }}>
      {children}
      {modalData && <InputModal {...modalData} resolve={handleResolve} />}
    </ModalContext.Provider>
  );
};
