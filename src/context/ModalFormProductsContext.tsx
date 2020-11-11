import React, { createContext, useState } from 'react';

export type ModelFormType = {
  modalVisible: boolean;
  modalLogIn: boolean;
  modalSignIn: boolean;
  setModalVisible?: (modalVisible: boolean) => void;
  children?: React.ReactNode;
  handleFormModal: (stateFormModal: boolean) => void;
  handleLogInModal: (stateLogIn: boolean) => void;
  handleSignInModal: (stateSignIn: boolean) => void;
};

export type LayoutProps = { children: React.ReactNode };

const ModelFormContext = createContext<ModelFormType>({
  modalVisible: false,
  modalLogIn: false,
  modalSignIn: false,
  handleFormModal: (stateFormModal) => {},
  handleLogInModal: (stateLogIn) => {},
  handleSignInModal: (stateSignIn) => {},
});

const FormContextProvider = ({ children }: LayoutProps) => {
  const [modalVisible, setStateModlVisible] = useState(false);
  const [modalLogIn, setStateModalLogIn] = useState(false);
  const [modalSignIn, setStateModalSignIn] = useState(false);

  return (
    <ModelFormContext.Provider
      value={{
        handleFormModal: (stateFormModal) =>
          setStateModlVisible(stateFormModal),
        handleLogInModal: (stateLogIn) => setStateModalLogIn(stateLogIn),
        handleSignInModal: (stateSignIn) => setStateModalSignIn(stateSignIn),
        modalVisible,
        modalLogIn,
        modalSignIn,
      }}
    >
      {children}
    </ModelFormContext.Provider>
  );
};

export { ModelFormContext, FormContextProvider };
