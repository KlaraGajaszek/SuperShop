import React, { createContext, useState } from 'react';

export type ModelFormType = {
  modalVisible: boolean;
  modalLogIn: boolean;
  modalSignIn: boolean;
  setModalVisible?: (modalVisible: boolean) => void;
  children?: React.ReactNode;
  handleOpenFormModal: () => void;
  handleCloseFormModal: () => void;
  handleOpenLogInModal: () => void;
  handleCloseLogInModal: () => void;
  handleOpenSignInModal: () => void;
  handleCloseSignInModal: () => void;
};

export type LayoutProps = { children: React.ReactNode };

const ModelFormContext = createContext<ModelFormType>({
  modalVisible: false,
  modalLogIn: false,
  modalSignIn: false,
  setModalVisible: () => {},
  handleOpenFormModal: () => {},
  handleCloseFormModal: () => {},
  handleOpenLogInModal: () => {},
  handleCloseLogInModal: () => {},
  handleOpenSignInModal: () => {},
  handleCloseSignInModal: () => {},
});

const FormContextProvider = ({ children }: LayoutProps) => {
  const [modalVisible, setStateModlVisible] = useState(false);
  const [modalLogIn, setStateModalLogIn] = useState(false);
  const [modalSignIn, setStateModalSignIn] = useState(false);

  const handleOpenFormModal = () => {
    setStateModlVisible(true);
  };
  const handleCloseFormModal = () => {
    setStateModlVisible(false);
  };

  const handleOpenLogInModal = () => {
    setStateModalLogIn(true);
  };
  const handleCloseLogInModal = () => {
    setStateModalLogIn(false);
  };

  const handleOpenSignInModal = () => {
    setStateModalSignIn(true);
  };
  const handleCloseSignInModal = () => {
    setStateModalSignIn(false);
  };

  return (
    <ModelFormContext.Provider
      value={{
        handleOpenFormModal,
        modalVisible,
        modalLogIn,
        modalSignIn,
        handleCloseFormModal,
        handleOpenLogInModal,
        handleCloseLogInModal,
        handleOpenSignInModal,
        handleCloseSignInModal,
      }}
    >
      {children}
    </ModelFormContext.Provider>
  );
};

export { ModelFormContext, FormContextProvider };
