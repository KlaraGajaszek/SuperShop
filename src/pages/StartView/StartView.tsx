import React, { useContext } from 'react';

import BoxProduct from '../../components/moleculs/BoxProduct/BoxProduct';
import { Box } from './StartViewStyles';
import FormPage from '../Form/FormPage';
import ButtonWithIcon from '../../components/atoms/ButtonwithIcon/ButtonWithIcon';
import Modal from '../../components/moleculs/Modal/Modal';
import { ModelFormContext } from '../../context/ModalFormProductsContext';
import LogInForm from '../LogInForm/LogInForm';

export type ModelFormType = {
  modalVisible: boolean;
};
const StartView = () => {
  const {
    modalVisible,
    handleOpenFormModal,
    handleCloseFormModal,
    handleOpenLogInModal,
    handleCloseLogInModal,
    modalLogIn,
  } = useContext(ModelFormContext);

  return (
    <Box>
      <ButtonWithIcon
        type="button"
        bgcolor={'#dc143c'}
        radius={'0px 0px 0px 0px'}
        margin={'5px 0px 0 0'}
        content={'Sign In'}
        btnFunction={() => {}}
        disable={false}
      />
      <ButtonWithIcon
        type="button"
        bgcolor={'#dc143c'}
        radius={'0px 0px 0px 0px'}
        margin={'5px 0px 0 0'}
        content={'Log In'}
        btnFunction={() => {
          handleOpenLogInModal();
        }}
        disable={false}
      />
      <ButtonWithIcon
        type="button"
        bgcolor={'#dc143c'}
        radius={'0px 0px 0px 0px'}
        margin={'5px 0px 0 0'}
        content={'Modal Open'}
        btnFunction={() => {
          handleOpenFormModal();
        }}
        disable={false}
      />
      <Modal
        content={'Add product'}
        show={modalVisible}
        clsFunction={() => {
          handleCloseFormModal();
        }}
      >
        <FormPage />
      </Modal>

      <Modal
        content={'Login Now'}
        show={modalLogIn}
        clsFunction={() => {
          handleCloseLogInModal();
        }}
      >
        <LogInForm />
      </Modal>

      <BoxProduct />
    </Box>
  );
};

export default StartView;
