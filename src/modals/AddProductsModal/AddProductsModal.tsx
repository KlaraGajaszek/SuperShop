import React from 'react';

import { Modal } from '../../components/moleculs/Modal/Modal';
import { closeModal } from '../../store/actions/setModalState';
import { useDispatch } from 'react-redux';
import { FormPage } from '../../pages/Form/FormPage';

export const AddProductsModal = (): any => {
  const dispatch = useDispatch();

  return (
    <FormPage>
      {(form: any) => (
        <Modal
          content={'Add product'}
          isOpen={true}
          onClose={() => {
            dispatch(closeModal());
          }}
        >
          {form}
        </Modal>
      )}
    </FormPage>
  );
};
